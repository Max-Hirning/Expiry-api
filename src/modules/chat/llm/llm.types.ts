import { AgentName } from "./llm.constants.js";

export type HistoryItem = {
    role: "user" | "ai";
    content: string;
};

export type GraphState = {
    teamId: string;
    chatId: string;
    userId: string;
    userChatMemberId: string;
    documentId: string | null;
    userMessage: string;
    history: HistoryItem[];
    selectedAgents: AgentName[];
    agentResults: Partial<Record<AgentName, string>>;
    finalAnswer: string | null;
};

export type AgentContext = {
    teamId: string;
    chatId: string;
    userChatMemberId: string;
    documentId: string | null;
};
