import { z } from "zod";

const paginationResponseSchema = z.object({
    perPage: z.int(),
    page: z.int(),
    prevPage: z.int().nullable(),
    nextPage: z.int().nullable(),
    total: z.int(),
    totalPages: z.int(),
});

type PaginationResponse = z.infer<typeof paginationResponseSchema>;

const paginationQuerySchema = z.object({
    page: z.coerce.number().int(),
    perPage: z.coerce.number().int().max(25).default(10),
});

type PaginationQueryInput = z.infer<typeof paginationQuerySchema>;

export { paginationResponseSchema, paginationQuerySchema };

export type { PaginationResponse, PaginationQueryInput };
