import { z } from "zod";
import { Prisma } from "@/database/team/generated/edge.js";
import { defaultFileSchema } from "../file/file.schema.js";
import {
    DocumentStatuses,
    RiskLevel,
} from "@/database/team/generated/index.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";
import { defaultDocumentExtractedFieldSchema } from "../document-extracted-field/document-extracted-field.schema.js";

const defaultDocumentSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    status: z.enum(DocumentStatuses),
    name: z.string(),
    expiresAt: z.date().nullable(),
    riskLevel: z.enum(RiskLevel).nullable(),
});

const documentParamsSchema = z.object({
    documentId: z.uuid(),
    teamId: z.uuid(),
});

type DocumentParamsInput = z.infer<typeof documentParamsSchema>;

const createDocumentBodySchema = defaultDocumentSchema
    .pick({
        name: true,
    })
    .extend({
        files: z
            .array(
                z
                    .object({
                        mimeType: z.string(),
                        fileSize: z.number(),
                        width: z.number(),
                        height: z.number(),
                    })
                    .extend({
                        id: z.uuid(),
                    })
            )
            .min(1),
        tags: z.array(z.string()),
    });

type CreateDocumentBodyInput = z.infer<typeof createDocumentBodySchema>;

const updateDocumentBodySchema = createDocumentBodySchema
    .omit({
        files: true,
    })
    .extend({
        tagsToDelete: z.array(z.string()),
    })
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
        document: defaultDocumentSchema.extend({
            documentExtractedFields: z.array(
                defaultDocumentExtractedFieldSchema
            ),
            files: z.array(defaultFileSchema),
            tags: z.array(z.string()),
        }),
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
        expiresAtDateRange: z.union([z.coerce.date(), z.coerce.date()]),
        riskLevel: z.union([
            z.enum(RiskLevel).transform((val) => [val]),
            z.array(z.enum(RiskLevel)),
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
