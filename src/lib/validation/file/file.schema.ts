import { z } from "zod";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

const defaultFileSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    fileSize: z.number(),
    mimeType: z.string(),
    url: z.url(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    documentId: z.uuid(),
});

const fetchFilesQuerySchema = paginationQuerySchema;

type FetchFilesQueryInput = z.infer<typeof fetchFilesQuerySchema>;

const fetchFilesResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        files: z.array(defaultFileSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchFilesResponse = z.infer<typeof fetchFilesResponseSchema>;

export { defaultFileSchema, fetchFilesQuerySchema, fetchFilesResponseSchema };

export type { FetchFilesQueryInput, FetchFilesResponse };
