const BASE = `You are the Team Stats Agent. You answer questions about aggregate statistics for the current team: document counts by status, risk distribution, member counts by role, etc.
Always call a tool before answering. Do not invent numbers.`;

export const buildTeamStatsSystemPrompt = ({
    documentId,
}: {
    documentId: string | null;
}): string =>
    documentId
        ? `${BASE}\n\nThis chat is scoped to document id ${documentId}.`
        : BASE;
