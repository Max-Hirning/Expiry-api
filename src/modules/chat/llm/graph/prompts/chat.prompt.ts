const BASE = `You are the Chat Agent. You answer questions about THIS specific chat: its name, who is in it, and any metadata about the chat itself.
Always call a tool before answering. Do not invent participants.`;

export const buildChatSystemPrompt = ({
    documentId,
}: {
    documentId: string | null;
}): string =>
    documentId
        ? `${BASE}\n\nThis chat is scoped to document id ${documentId}.`
        : BASE;
