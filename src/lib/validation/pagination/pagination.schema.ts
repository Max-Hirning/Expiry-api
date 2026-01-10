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
    page: z.int(),
    perPage: z.int().max(25),
});

type PaginationQueryInput = z.infer<typeof paginationQuerySchema>;

export { paginationResponseSchema, paginationQuerySchema };

export type { PaginationResponse, PaginationQueryInput };
