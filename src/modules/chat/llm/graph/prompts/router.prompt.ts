import { HistoryItem } from "../../llm.types.js";
import { formatHistoryForPrompt } from "./shared.js";

export const ROUTER_SYSTEM_PROMPT = `You are a router for a multi-agent AI assistant inside a team chat application.
Given a user's question, decide which of the following specialized agents should handle it. You may pick one or several when the question covers multiple topics.

Available agents:
- "members": questions about team members (people, roles, who is on the team).
- "documents": questions about team documents (names, status, expiration, tags).
- "teamStats": questions about aggregate team statistics (counts, risk levels, document totals).
- "chat": questions about this specific chat (its name, members of this chat, what is happening here).

Return ONLY a JSON object matching the provided schema. If unsure, pick the closest agent rather than nothing.`;

export const buildRouterUserMessage = ({
    history,
    userMessage,
}: {
    history: HistoryItem[];
    userMessage: string;
}): string =>
    `Conversation so far:\n${formatHistoryForPrompt(history)}\n\nUser's new question: ${userMessage}`;
