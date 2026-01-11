import { z } from "zod";
import { Prisma } from "@/database/team/generated/edge.js";
import { DocumentStatuses } from "@/database/team/generated/index.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

const defaultDocumentSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    status: z.enum(DocumentStatuses),
    tags: z.array(z.string()),
    fileSize: z.number(),
    mimeType: z.string(),
    url: z.url(),
    width: z.number().nullable(),
    height: z.number().nullable(),
});

const documentParamsSchema = z.object({
    documentId: z.uuid(),
    teamId: z.uuid(),
});

type DocumentParamsInput = z.infer<typeof documentParamsSchema>;

const createDocumentBodySchema = defaultDocumentSchema
    .pick({
        tags: true,
    })
    .extend({
        file: defaultDocumentSchema.pick({
            mimeType: true,
            fileSize: true,
            width: true,
            name: true,
            height: true,
        }),
    });

type CreateDocumentBodyInput = z.infer<typeof createDocumentBodySchema>;

const updateDocumentBodySchema = createDocumentBodySchema
    .pick({
        tags: true,
    })
    .extend(
        defaultDocumentSchema.pick({
            name: true,
        }).shape
    )
    .partial();

type UpdateDocumentBodyInput = z.infer<typeof updateDocumentBodySchema>;

const createDocumentResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        document: defaultDocumentSchema,
        uploadUrl: z.url().nullable(),
    }),
});

type CreateDocumentResponse = z.infer<typeof createDocumentResponseSchema>;

const updateDocumentResponseSchema = createDocumentResponseSchema;

type UpdateDocumentResponse = z.infer<typeof updateDocumentResponseSchema>;

const fetchDocumentResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        document: defaultDocumentSchema,
    }),
});

type FetchDocumentResponse = z.infer<typeof fetchDocumentResponseSchema>;

const fetchDocumentsQuerySchema = paginationQuerySchema
    .extend({
        search: z.string(),
        statuses: z.union([
            z.enum(DocumentStatuses).transform((val) => [val]),
            z.array(z.enum(DocumentStatuses)),
        ]),
        tags: z.union([
            z.string().transform((val) => [val]),
            z.array(z.string()),
        ]),
        sortOrder: z.enum(Prisma.SortOrder),
        sortField: z.enum(Prisma.DocumentScalarFieldEnum),
    })
    .partial()
    .required({
        page: true,
        perPage: true,
    });

type FetchDocumentsQueryInput = z.infer<typeof fetchDocumentsQuerySchema>;

const fetchDocumentsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        documents: z.array(defaultDocumentSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchDocumentsResponse = z.infer<typeof fetchDocumentsResponseSchema>;

export {
    fetchDocumentResponseSchema,
    fetchDocumentsResponseSchema,
    documentParamsSchema,
    createDocumentBodySchema,
    updateDocumentBodySchema,
    createDocumentResponseSchema,
    updateDocumentResponseSchema,
    defaultDocumentSchema,
    fetchDocumentsQuerySchema,
};

export type {
    FetchDocumentResponse,
    CreateDocumentResponse,
    UpdateDocumentResponse,
    FetchDocumentsResponse,
    DocumentParamsInput,
    CreateDocumentBodyInput,
    UpdateDocumentBodyInput,
    FetchDocumentsQueryInput,
};
