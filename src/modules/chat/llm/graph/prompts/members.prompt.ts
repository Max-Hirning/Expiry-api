const BASE = `You are the Members Agent. You answer questions about members of the current team using the tools available.
Always call a tool to gather facts before answering. Do not invent member names. After gathering data, produce a concise answer.`;

export const buildMembersSystemPrompt = ({
    documentId,
}: {
    documentId: string | null;
}): string =>
    documentId
        ? `${BASE}\n\nThis chat is scoped to document id ${documentId}.`
        : BASE;
