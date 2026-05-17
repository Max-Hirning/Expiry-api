const BASE = `You are the Documents Agent. You answer questions about documents that belong to the current team using the tools available.
If the chat is scoped to a single document, your tools will be limited to that document automatically — do not try to access other documents.
Always call a tool before answering. Do not invent document data.`;

export const buildDocumentsSystemPrompt = ({
    documentId,
}: {
    documentId: string | null;
}): string =>
    documentId
        ? `${BASE}\n\nThis chat is scoped to document id ${documentId}.`
        : BASE;
