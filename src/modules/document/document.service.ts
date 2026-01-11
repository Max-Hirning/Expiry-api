import { randomUUID } from "crypto";
import { FastifyBaseLogger } from "fastify";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { ConflictError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { ApplicationService } from "../application/application.service.js";
import { DocumentStatuses, Prisma } from "@/database/team/generated/index.js";
import { defaultDocumentSelector } from "@/database/team/repositories/document/docuement.repository.js";
import {
    DocumentParamsInput,
    FetchDocumentResponse,
    FetchDocumentsQueryInput,
    FetchDocumentsResponse,
    CreateDocumentBodyInput,
    UpdateDocumentBodyInput,
} from "@/lib/validation/document/document.schema.js";

export type DocumentService = {
    getDocument: (p: {
        params: DocumentParamsInput;
    }) => Promise<FetchDocumentResponse>;
    deleteDocument: (p: {
        params: DocumentParamsInput;
    }) => Promise<FetchDocumentResponse>;
    getDocuments: (p: {
        query: FetchDocumentsQueryInput;
        params: TeamParamsInput;
    }) => Promise<FetchDocumentsResponse>;
    createDocument: (p: {
        body: CreateDocumentBodyInput;
        params: TeamParamsInput;
    }) => Promise<FetchDocumentResponse>;
    updateDocument: (p: {
        params: DocumentParamsInput;
        body: UpdateDocumentBodyInput;
    }) => Promise<FetchDocumentResponse>;
};

export const createDocumentService = (
    applicationService: ApplicationService,
    gcpService: GcpService,
    log: FastifyBaseLogger
): DocumentService => ({
    getDocument: async ({ params }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const document = await withRepositories(
            [documentRepository],
            (documentRepo) =>
                documentRepo.findUniqueOrFail({
                    where: {
                        id: params.documentId,
                    },
                    select: defaultDocumentSelector,
                })
        );

        return {
            message: "Document fetched successfully.",
            data: { document },
        };
    },

    deleteDocument: async ({ params }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const document = await withRepositories(
            [documentRepository],
            async (documentRepo) => {
                await documentRepo.findUniqueOrFail({
                    where: {
                        id: params.documentId,
                    },
                });

                const document = await documentRepo.delete({
                    where: {
                        id: params.documentId,
                    },
                });

                return document;
            }
        );

        try {
            await gcpService.deleteFile(document.key);
        } catch (error) {
            log.error({ error }, "Failed to delete document");
        }

        return {
            message: "Document deleted successfully.",
            data: { document },
        };
    },

    getDocuments: async ({ query, params }) => {
        const skip = (query.page - 1) * query.perPage;

        const where: Prisma.DocumentWhereInput = {
            ...(query.search && {
                OR: [
                    {
                        name: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                    {
                        tags: {
                            has: query.search,
                        },
                    },
                    {
                        documentExtractedFields: {
                            some: {
                                value: {
                                    mode: "insensitive",
                                    contains: query.search,
                                },
                            },
                        },
                    },
                    {
                        documentDeadlines: {
                            some: {
                                name: {
                                    mode: "insensitive",
                                    contains: query.search,
                                },
                            },
                        },
                    },
                ],
            }),
            ...(query.statuses && {
                status: {
                    in: query.statuses,
                },
            }),
            ...(query.tags && {
                tags: {
                    hasSome: query.tags,
                },
            }),
        };

        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const [documents, total] = await withRepositories(
            [documentRepository],
            (documentRepo) =>
                Promise.all([
                    documentRepo.findMany({
                        skip,
                        where,
                        take: query.perPage,
                        orderBy: {
                            ...(query.sortField && query.sortOrder
                                ? {
                                    [query.sortField]: query.sortOrder,
                                }
                                : {
                                    createdAt: Prisma.SortOrder.desc,
                                }),
                        },
                        select: defaultDocumentSelector,
                    }),
                    documentRepo.count({
                        where,
                    }),
                ])
        );

        const totalPages = Math.ceil(total / query.perPage);
        const prevPage = query.page > 1 ? query.page - 1 : null;
        const nextPage = query.page < totalPages ? query.page + 1 : null;

        return {
            message: "Documents fetched successfully.",
            data: {
                documents,
                pagination: {
                    page: query.page,
                    perPage: query.perPage,
                    prevPage,
                    nextPage,
                    totalPages,
                    total,
                },
            },
        };
    },

    createDocument: async ({ body, params }) => {
        const documentId = randomUUID();

        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        await withRepositories([documentRepository], async (documentRepo) => {
            const existedDocument = await documentRepo.findFirst({
                where: {
                    name: body.file.name,
                },
            });

            if (existedDocument) {
                throw new ConflictError(
                    "Document with this name already exists"
                );
            }
        });

        const documentUploadPayload = await gcpService.uploadFile({
            keyPayload: {
                type: FileTypes.DOCUMENT,
                documentId,
                teamId: params.teamId,
            },
            mimeType: body.file.mimeType,
        });

        const documentReadPayload = await gcpService.getFileUrl({
            key: documentUploadPayload.key,
            type: FileTypes.DOCUMENT,
        });

        const document = await withRepositories(
            [documentRepository],
            (documentRepo) =>
                documentRepo.create({
                    data: {
                        status: DocumentStatuses.PROCESSING,
                        tags: body.tags,
                        name: body.file.name,
                        key: documentUploadPayload.key,
                        fileSize: body.file.fileSize,
                        mimeType: body.file.mimeType,
                        url: documentReadPayload.url,
                        expiredAt: documentReadPayload.expiredAt,
                        width: body.file.width,
                        height: body.file.height,
                    },
                })
        );

        return {
            message: "Document created successfully.",
            data: {
                document,
            },
        };
    },

    updateDocument: async ({ params, body }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const document = await withRepositories(
            [documentRepository],
            async (documentRepo) => {
                await documentRepo.findUniqueOrFail({
                    where: {
                        id: params.documentId,
                    },
                });

                return documentRepo.update({
                    where: {
                        id: params.documentId,
                    },
                    data: {
                        tags: body.tags,
                        name: body.name,
                    },
                });
            }
        );

        return {
            message: "Document updated successfully.",
            data: {
                document,
            },
        };
    },
});

addDIResolverName(createDocumentService, "documentService");
