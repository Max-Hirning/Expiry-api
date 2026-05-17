import { HistoryItem } from "@/modules/chat/llm/llm.types.js";

export const formatHistoryForPrompt = (history: HistoryItem[]): string => {
    if (history.length === 0) {
        return "(no prior conversation)";
    }

    return history
        .map((h) => `${h.role === "user" ? "User" : "AI"}: ${h.content}`)
        .join("\n");
};
