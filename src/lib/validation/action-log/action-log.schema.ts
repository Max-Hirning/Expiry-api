import { z } from "zod";
import { ActionLogTypes } from "@/database/team/generated/index.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

const defaultActionLogSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    type: z.enum(ActionLogTypes),
    documentName: z.string().nullable(),
    documentId: z.uuid().nullable(),
    actorId: z.uuid(),
    actorFullName: z.string(),
    actorAvatarUrl: z.url().nullable(),
    userId: z.uuid().nullable(),
    userFullName: z.string().nullable(),
    userAvatarUrl: z.url().nullable(),
});

const fetchActionLogsQuerySchema = paginationQuerySchema
    .extend({
        actorIds: z.union([
            z.uuid().transform((val) => [val]),
            z.array(z.uuid()),
        ]),
        documentIds: z.union([
            z.uuid().transform((val) => [val]),
            z.array(z.uuid()),
        ]),
    })
    .partial()
    .required({
        limit: true,
    });

type FetchActionLogsQueryInput = z.infer<typeof fetchActionLogsQuerySchema>;

const fetchActionLogsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        actionLogs: z.array(defaultActionLogSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchActionLogsResponse = z.infer<typeof fetchActionLogsResponseSchema>;

export { fetchActionLogsResponseSchema, fetchActionLogsQuerySchema };

export type { FetchActionLogsResponse, FetchActionLogsQueryInput };
