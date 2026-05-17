export const HISTORY_LIMIT = 20;

export const GEMINI_MODEL = "gemini-3.1-flash-lite";

export const AGENT_NAMES = [
    "members",
    "documents",
    "teamStats",
    "chat",
] as const;

export type AgentName = (typeof AGENT_NAMES)[number];

export const AI_FALLBACK_ERROR_MESSAGE =
    "I couldn't formulate a complete answer right now. Please try rephrasing.";

export const TOOL_INTEGRITY_ERROR =
    "Failed to fetch data due to integrity issue.";
