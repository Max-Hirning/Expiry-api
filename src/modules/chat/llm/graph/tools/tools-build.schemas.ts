import { z } from "zod";

const TOOL_LIMIT_MIN = 1;
const TOOL_LIMIT_MAX = 200;

export const limitInputSchema = z
    .number()
    .int()
    .min(TOOL_LIMIT_MIN)
    .max(TOOL_LIMIT_MAX)
    .optional();

export const getTeamMembersInputSchema = z.object({
    limit: limitInputSchema,
});

export const findMembersByNameInputSchema = z.object({
    query: z.string().min(1),
    limit: limitInputSchema,
});

export const listDocumentsInputSchema = z.object({
    query: z.string().optional(),
    limit: limitInputSchema,
});

export const getDocumentByIdInputSchema = z.object({
    documentId: z.uuid(),
});

export const emptyInputSchema = z.object({});

export const memberOutputSchema = z.array(
    z.object({
        userId: z.string(),
        fullName: z.string(),
        email: z.string(),
        role: z.string(),
    })
);

export const documentSummaryOutputSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
        status: z.string(),
        riskLevel: z.string().nullable(),
        expiresAt: z.date().nullable(),
        createdAt: z.date(),
        updatedAt: z.date(),
    })
);

export const documentDetailOutputSchema = z
    .object({
        id: z.string(),
        name: z.string(),
        status: z.string(),
        riskLevel: z.string().nullable(),
        expiresAt: z.date().nullable(),
        createdAt: z.date(),
        updatedAt: z.date(),
        tags: z.array(z.string()),
    })
    .nullable();

export const teamStatsOutputSchema = z
    .object({
        totalDocuments: z.number(),
        processingDocuments: z.number(),
        activeDocuments: z.number(),
        archivedDocuments: z.number(),
        failedDocuments: z.number(),
        needsReviewDocuments: z.number(),
        highRiskDocuments: z.number(),
        mediumRiskDocuments: z.number(),
        lowRiskDocuments: z.number(),
        expiringSoonDocuments: z.number(),
    })
    .nullable();

export const memberCountsOutputSchema = z.array(
    z.object({ role: z.string(), count: z.number() })
);

export const chatMemberOutputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    userFullName: z.string(),
    userAvatarUrl: z.string().nullable(),
});

export const chatInfoOutputSchema = z.object({
    chatId: z.string(),
    name: z.string(),
    documentId: z.string().nullable(),
    aiAgentEnabled: z.boolean(),
    activeMembers: z.array(chatMemberOutputSchema),
});

export const chatMembersOutputSchema = z.array(chatMemberOutputSchema);
