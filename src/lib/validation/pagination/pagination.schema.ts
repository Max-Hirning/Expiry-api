import { z } from "zod";

const paginationResponseSchema = z.object({
    nextCursor: z.uuid().nullable(),
});

type PaginationResponse = z.infer<typeof paginationResponseSchema>;

const paginationQuerySchema = z.object({
    cursor: z.uuid().optional(),
    limit: z.coerce.number().int().min(1).max(25).default(10),
});

type PaginationQueryInput = z.infer<typeof paginationQuerySchema>;

export { paginationResponseSchema, paginationQuerySchema };

export type { PaginationResponse, PaginationQueryInput };
