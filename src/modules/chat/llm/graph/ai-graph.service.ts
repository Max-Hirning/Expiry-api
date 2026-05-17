import { z } from "zod";
import { createAgent } from "langchain";
import { FastifyBaseLogger } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { ChatDataService } from "../data/chat-data.service.js";
import { MembersDataService } from "../data/members-data.service.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { AgentContext, GraphState, HistoryItem } from "../llm.types.js";
import { DocumentsDataService } from "../data/documents-data.service.js";
import { TeamStatsDataService } from "../data/team-stats-data.service.js";
import { GeminiProviderService } from "../providers/gemini-provider.service.js";
import {
    AGENT_NAMES,
    AgentName,
    AI_FALLBACK_ERROR_MESSAGE,
} from "../llm.constants.js";
import {
    buildChatTools,
    buildDocumentsTools,
    buildMembersTools,
    buildTeamStatsTools,
} from "./build-tools.js";
import {
    AGGREGATOR_PROMPT,
    CHAT_AGENT_PROMPT,
    DOCUMENTS_AGENT_PROMPT,
    MEMBERS_AGENT_PROMPT,
    ROUTER_PROMPT,
    TEAM_STATS_AGENT_PROMPT,
} from "./prompts.js";

const routerOutputSchema = z.object({
    agents: z.array(z.enum(AGENT_NAMES)).min(1),
});

const finalAnswerSchema = z.object({
    content: z.string().min(1).max(8000),
});

export type AiGraphService = {
    run: (input: {
        teamId: string;
        chatId: string;
        userId: string;
        userChatMemberId: string;
        documentId: string | null;
        userMessage: string;
        history: HistoryItem[];
    }) => Promise<string>;
};

const formatHistoryForPrompt = (history: HistoryItem[]): string => {
    if (history.length === 0) {
        return "(no prior conversation)";
    }

    return history
        .map((h) => `${h.role === "user" ? "User" : "AI"}: ${h.content}`)
        .join("\n");
};

const extractStringContent = (content: unknown): string => {
    if (typeof content === "string") {
        return content;
    }

    if (Array.isArray(content)) {
        return content
            .map((part) => {
                if (typeof part === "string") {
                    return part;
                }

                if (
                    part &&
                    typeof part === "object" &&
                    "text" in part &&
                    typeof (part as { text: unknown }).text === "string"
                ) {
                    return (part as { text: string }).text;
                }

                return "";
            })
            .join("");
    }

    return "";
};

export const createService = (
    geminiProviderService: GeminiProviderService,
    chatDataService: ChatDataService,
    membersDataService: MembersDataService,
    documentsDataService: DocumentsDataService,
    teamStatsDataService: TeamStatsDataService,
    log: FastifyBaseLogger
): AiGraphService => {
    const runRouter = async (state: GraphState): Promise<AgentName[]> => {
        const llm = geminiProviderService.create({ temperature: 0 });
        const structured = llm.withStructuredOutput(routerOutputSchema);

        const result = await structured.invoke([
            new SystemMessage(ROUTER_PROMPT),
            new HumanMessage(
                `Conversation so far:\n${formatHistoryForPrompt(state.history)}\n\nUser's new question: ${state.userMessage}`
            ),
        ]);

        const uniq = Array.from(new Set(result.agents));

        return uniq.length > 0 ? uniq : ["chat"];
    };

    const runReactAgent = async (
        agentName: AgentName,
        ctx: AgentContext,
        userMessage: string,
        history: HistoryItem[]
    ): Promise<string> => {
        const llm = geminiProviderService.create({ temperature: 0.2 });

        let prompt: string;
        let tools;

        switch (agentName) {
        case "members":
            prompt = MEMBERS_AGENT_PROMPT;
            tools = buildMembersTools(ctx, membersDataService, log);
            break;
        case "documents":
            prompt = DOCUMENTS_AGENT_PROMPT;
            tools = buildDocumentsTools(ctx, documentsDataService, log);
            break;
        case "teamStats":
            prompt = TEAM_STATS_AGENT_PROMPT;
            tools = buildTeamStatsTools(ctx, teamStatsDataService, log);
            break;
        case "chat":
            prompt = CHAT_AGENT_PROMPT;
            tools = buildChatTools(ctx, chatDataService, log);
            break;
        }

        const scopedPrompt = ctx.documentId
            ? `${prompt}\n\nThis chat is scoped to document id ${ctx.documentId}.`
            : prompt;

        const agent = createAgent({
            model: llm,
            tools,
            systemPrompt: scopedPrompt,
        });

        const conversation = [
            ...history.map((h) =>
                h.role === "user"
                    ? new HumanMessage(h.content)
                    : new SystemMessage(`Prior AI reply: ${h.content}`)
            ),
            new HumanMessage(userMessage),
        ];

        const result = await agent.invoke({ messages: conversation });

        const last = result.messages[result.messages.length - 1];

        return extractStringContent(last?.content) || "(no output)";
    };

    const runAggregator = async (state: GraphState): Promise<string> => {
        const llm = geminiProviderService.create({ temperature: 0.2 });
        const structured = llm.withStructuredOutput(finalAnswerSchema);

        const findings = state.selectedAgents
            .map(
                (a) =>
                    `=== ${a} agent ===\n${state.agentResults[a] ?? "(no output)"}`
            )
            .join("\n\n");

        const result = await structured.invoke([
            new SystemMessage(AGGREGATOR_PROMPT),
            new HumanMessage(
                `User's question: ${state.userMessage}\n\nRecent conversation:\n${formatHistoryForPrompt(state.history)}\n\nSub-agent findings:\n${findings}`
            ),
        ]);

        const parsed = finalAnswerSchema.safeParse(result);

        if (!parsed.success) {
            log.error(
                { issues: parsed.error.issues },
                "Aggregator output failed validation"
            );

            return AI_FALLBACK_ERROR_MESSAGE;
        }

        return parsed.data.content;
    };

    return {
        run: async (input) => {
            const state: GraphState = {
                ...input,
                selectedAgents: [],
                agentResults: {},
                finalAnswer: null,
            };

            const ctx: AgentContext = {
                teamId: input.teamId,
                chatId: input.chatId,
                userChatMemberId: input.userChatMemberId,
                documentId: input.documentId,
            };

            try {
                state.selectedAgents = await runRouter(state);
            } catch (error) {
                log.error(
                    { error },
                    "AI router failed; defaulting to chat agent"
                );

                state.selectedAgents = ["chat"];
            }

            for (const agentName of state.selectedAgents) {
                try {
                    state.agentResults[agentName] = await runReactAgent(
                        agentName,
                        ctx,
                        state.userMessage,
                        state.history
                    );
                } catch (error) {
                    log.error(
                        { error, agentName },
                        "AI sub-agent execution failed"
                    );

                    state.agentResults[agentName] =
                        "(this agent failed to produce output)";
                }
            }

            try {
                return await runAggregator(state);
            } catch (error) {
                log.error({ error }, "AI aggregator failed");

                return AI_FALLBACK_ERROR_MESSAGE;
            }
        },
    };
};

addDIResolverName(createService, "aiGraphService");
