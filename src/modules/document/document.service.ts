import { randomUUID } from "crypto";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { ConflictError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyRequest } from "fastify";
import { withRepositories } from "@/lib/utils/repository.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { ApplicationService } from "../application/application.service.js";
import {
    NotificationTypes,
    TeamMemberRole,
} from "@/database/master/generated/index.js";
import { defaultDocumentSelector } from "@/database/team/repositories/document/docuement.repository.js";
import {
    ActionLogTypes,
    DocumentStatuses,
    Prisma,
} from "@/database/team/generated/index.js";
import { NotificationRepository } from "@/database/master/repositories/notification/notification.repository.js";
import {
    defaultTeamMemberSelector,
    TeamMemberRepository,
} from "@/database/master/repositories/team-member/team-member.repository.js";
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
        initiator: FastifyRequest["user"];
    }) => Promise<FetchDocumentResponse>;
    deleteDocument: (p: {
        params: DocumentParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchDocumentResponse>;
    getDocuments: (p: {
        query: FetchDocumentsQueryInput;
        params: TeamParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchDocumentsResponse>;
    createDocument: (p: {
        body: CreateDocumentBodyInput;
        params: TeamParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchDocumentResponse>;
    updateDocument: (p: {
        params: DocumentParamsInput;
        body: UpdateDocumentBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchDocumentResponse>;
};

export const createDocumentService = (
    applicationService: ApplicationService,
    gcpService: GcpService,
    notificationRepository: NotificationRepository,
    teamMemberRepository: TeamMemberRepository,
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

    deleteDocument: async ({ params, initiator }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const teamMembers = await teamMemberRepository.findMany({
            where: {
                teamId: params.teamId,
                role: TeamMemberRole.ADMIN,
                userId: {
                    not: initiator.id,
                },
            },
            select: {
                ...defaultTeamMemberSelector,
                user: true,
                team: true,
            },
        });

        const client = await applicationService.initTeamTenantClient(
            params.teamId
        );

        await withRepositories([documentRepository], (documentRepo) =>
            documentRepo.findUniqueOrFail({
                where: {
                    id: params.documentId,
                },
            })
        );

        const document = await withRepositories([client], async (client) =>
            client.$transaction(async (tx) => {
                const document = await tx.document.delete({
                    where: {
                        id: params.documentId,
                    },
                });

                await tx.actionLog.create({
                    data: {
                        type: ActionLogTypes.DELETE_DOCUMENT,
                        actorId: initiator.id,
                        actorAvatarUrl: initiator.avatar?.url || null,
                        actorFullName: initiator.fullName,
                        documentName: document.name,
                    },
                });

                return document;
            })
        );

        await notificationRepository.createMany({
            data: teamMembers.map(({ user, team }) => ({
                type: NotificationTypes.DELETE_DOCUMENT,
                userId: user.id,
                teamName: team.name,
                teamId: team.id,
                documentName: document.name,
                documentId: document.id,
            })),
        });

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

    createDocument: async ({ body, params, initiator }) => {
        const documentId = randomUUID();

        const client = await applicationService.initTeamTenantClient(
            params.teamId
        );

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

        const document = await withRepositories([client], async (client) =>
            client.$transaction(async (tx) => {
                const document = await tx.document.create({
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
                });

                await tx.actionLog.create({
                    data: {
                        type: ActionLogTypes.CREATE_DOCUMENT,
                        actorId: initiator.id,
                        actorAvatarUrl: initiator.avatar?.url || null,
                        actorFullName: initiator.fullName,
                        documentName: document.name,
                        documentId: document.id,
                    },
                });

                return document;
            })
        );

        return {
            message: "Document created successfully.",
            data: {
                document,
            },
        };
    },

    updateDocument: async ({ params, body, initiator }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const client = await applicationService.initTeamTenantClient(
            params.teamId
        );

        await withRepositories([documentRepository], (documentRepo) =>
            documentRepo.findUniqueOrFail({
                where: {
                    id: params.documentId,
                },
            })
        );

        const document = await withRepositories([client], async (client) =>
            client.$transaction(async (tx) => {
                const document = await tx.document.update({
                    where: {
                        id: params.documentId,
                    },
                    data: {
                        tags: body.tags,
                        name: body.name,
                    },
                });

                const updatedObjects: string[] = [];

                if (body.name) {
                    updatedObjects.push("name");
                }

                if (body.tags) {
                    updatedObjects.push("tags");
                }

                if (updatedObjects.length > 0) {
                    await tx.actionLog.create({
                        data: {
                            type: ActionLogTypes.UPDATE_DOCUMENT,
                            actorId: initiator.id,
                            actorAvatarUrl: initiator.avatar?.url || null,
                            actorFullName: initiator.fullName,
                            documentName: document.name,
                        },
                    });
                }

                return document;
            })
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
