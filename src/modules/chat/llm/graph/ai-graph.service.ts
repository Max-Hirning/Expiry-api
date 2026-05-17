import { createAgent } from "langchain";
import { FastifyBaseLogger } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { ChatDataService } from "../data/chat-data.service.js";
import { buildChatSystemPrompt } from "./prompts/chat.prompt.js";
import { MembersDataService } from "../data/members-data.service.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { buildMembersSystemPrompt } from "./prompts/members.prompt.js";
import { AgentContext, GraphState, HistoryItem } from "../llm.types.js";
import { DocumentsDataService } from "../data/documents-data.service.js";
import { TeamStatsDataService } from "../data/team-stats-data.service.js";
import { buildDocumentsSystemPrompt } from "./prompts/documents.prompt.js";
import { AgentName, AI_FALLBACK_ERROR_MESSAGE } from "../llm.constants.js";
import { buildTeamStatsSystemPrompt } from "./prompts/team-stats.prompt.js";
import { finalAnswerSchema, routerOutputSchema } from "./ai-graph.schemas.js";
import { GeminiProviderService } from "../providers/gemini-provider.service.js";
import {
    ROUTER_SYSTEM_PROMPT,
    buildRouterUserMessage,
} from "./prompts/router.prompt.js";
import {
    AGGREGATOR_SYSTEM_PROMPT,
    buildAggregatorUserMessage,
} from "./prompts/aggregator.prompt.js";
import {
    buildChatTools,
    buildDocumentsTools,
    buildMembersTools,
    buildTeamStatsTools,
} from "./build-tools.js";

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
            new SystemMessage(ROUTER_SYSTEM_PROMPT),
            new HumanMessage(
                buildRouterUserMessage({
                    history: state.history,
                    userMessage: state.userMessage,
                })
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

        let systemPrompt: string;
        let tools;

        switch (agentName) {
        case "members":
            systemPrompt = buildMembersSystemPrompt({
                documentId: ctx.documentId,
            });

            tools = buildMembersTools(ctx, membersDataService, log);
            break;
        case "documents":
            systemPrompt = buildDocumentsSystemPrompt({
                documentId: ctx.documentId,
            });

            tools = buildDocumentsTools(ctx, documentsDataService, log);
            break;
        case "teamStats":
            systemPrompt = buildTeamStatsSystemPrompt({
                documentId: ctx.documentId,
            });

            tools = buildTeamStatsTools(ctx, teamStatsDataService, log);
            break;
        case "chat":
            systemPrompt = buildChatSystemPrompt({
                documentId: ctx.documentId,
            });

            tools = buildChatTools(ctx, chatDataService, log);
            break;
        }

        const agent = createAgent({
            model: llm,
            tools,
            systemPrompt,
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

        const result = await structured.invoke([
            new SystemMessage(AGGREGATOR_SYSTEM_PROMPT),
            new HumanMessage(
                buildAggregatorUserMessage({
                    userMessage: state.userMessage,
                    history: state.history,
                    selectedAgents: state.selectedAgents,
                    agentResults: state.agentResults,
                })
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
