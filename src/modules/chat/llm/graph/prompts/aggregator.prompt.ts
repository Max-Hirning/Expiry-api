import { HistoryItem } from "../../llm.types.js";
import { AgentName } from "../../llm.constants.js";
import { formatHistoryForPrompt } from "./shared.js";

export const AGGREGATOR_SYSTEM_PROMPT = `You are the final responder for a multi-agent AI assistant. You will be given:
1. The user's original question.
2. The recent conversation history between this user and the AI.
3. Findings from one or more specialized sub-agents.

Combine the findings into a single, clear, helpful reply directly addressed to the user. Be concise. If sub-agents could not find data, say so honestly. Do not invent facts beyond what sub-agents reported.

Return ONLY a JSON object matching the provided schema with a single field "content".`;

export const buildAggregatorUserMessage = ({
    userMessage,
    history,
    selectedAgents,
    agentResults,
}: {
    userMessage: string;
    history: HistoryItem[];
    selectedAgents: AgentName[];
    agentResults: Partial<Record<AgentName, string>>;
}): string => {
    const findings = selectedAgents
        .map((a) => `=== ${a} agent ===\n${agentResults[a] ?? "(no output)"}`)
        .join("\n\n");

    return `User's question: ${userMessage}\n\nRecent conversation:\n${formatHistoryForPrompt(history)}\n\nSub-agent findings:\n${findings}`;
};
