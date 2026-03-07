import { z } from "zod";
import { Prisma } from "@/database/team/generated/edge.js";
import { fetchDocumentsQuerySchema } from "../document/document.schema.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

const defaultTagSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    tag: z.string(),
    documents: z.int(),
});

const tagParamsSchema = z.object({
    tagId: z.uuid(),
    teamId: z.uuid(),
});

type TagParamsInput = z.infer<typeof tagParamsSchema>;

const fetchTagResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        tag: defaultTagSchema,
    }),
});

type FetchTagResponse = z.infer<typeof fetchTagResponseSchema>;

const fetchTagsQuerySchema = paginationQuerySchema
    .extend({
        search: z.string(),
        sortOrder: z.enum(Prisma.SortOrder).default(Prisma.SortOrder.desc),
        sortField: z.enum(Prisma.TagScalarFieldEnum, "documentsCounts"),
        ...fetchDocumentsQuerySchema.pick({
            statuses: true,
            expiresAtDateRange: true,
            riskLevels: true,
        }).shape,
    })
    .partial()
    .required({
        page: true,
        perPage: true,
    });

type FetchTagsQueryInput = z.infer<typeof fetchTagsQuerySchema>;

const fetchTagsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        tags: z.array(defaultTagSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchTagsResponse = z.infer<typeof fetchTagsResponseSchema>;

export {
    fetchTagResponseSchema,
    fetchTagsResponseSchema,
    tagParamsSchema,
    defaultTagSchema,
    fetchTagsQuerySchema,
};

export type {
    FetchTagResponse,
    FetchTagsResponse,
    TagParamsInput,
    FetchTagsQueryInput,
};
