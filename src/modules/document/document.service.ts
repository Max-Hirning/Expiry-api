import { randomUUID } from "crypto";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { ConflictError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyRequest } from "fastify";
import { withRepositories } from "@/lib/utils/repository.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { ApplicationService } from "../application/application.service.js";
import { Prisma as PrismaMaster } from "@/database/master/generated/index.js";
import { defaultUserSelector } from "@/database/master/repositories/user/user.repository.js";
import {
    NotificationTypes,
    TeamMemberRoles,
} from "@/database/master/generated/index.js";
import { defaultDocumentSelector } from "@/database/team/repositories/document/docuement.repository.js";
import { NotificationRepository } from "@/database/master/repositories/notification/notification.repository.js";
import {
    ActionLogTypes,
    DocumentStatuses,
    Prisma as PrismaTeam,
} from "@/database/team/generated/index.js";
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
                    select: {
                        ...defaultDocumentSelector,
                        files: true,
                        documentExtractedFields: true,
                        documentTags: {
                            select: {
                                tag: true,
                            },
                        },
                    },
                })
        );

        return {
            message: "Document fetched successfully.",
            data: {
                document: {
                    ...document,
                    tags: document.documentTags.flatMap(({ tag }) => tag.tag),
                },
            },
        };
    },

    deleteDocument: async ({ params, initiator }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const teamMembers = await teamMemberRepository.findMany({
            where: {
                teamId: params.teamId,
                role: TeamMemberRoles.ADMIN,
                userId: {
                    not: initiator.id,
                },
            },
            select: {
                ...defaultTeamMemberSelector,
                user: {
                    select: {
                        ...defaultUserSelector,
                        notificationPreferences: true,
                    },
                },
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
                    select: {
                        ...defaultDocumentSelector,
                        files: true,
                        documentExtractedFields: true,
                        documentTags: {
                            select: {
                                tag: true,
                            },
                        },
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
            data: teamMembers.reduce<
                PrismaMaster.NotificationCreateManyInput[]
            >((res, { user, team }) => {
                if (
                    user.notificationPreferences?.documentNews &&
                    user.notificationPreferences?.inAppNotifications
                ) {
                    res.push({
                        type: NotificationTypes.DELETE_DOCUMENT,
                        userId: user.id,
                        teamName: team.name,
                        teamId: team.id,
                        documentName: document.name,
                        documentId: document.id,
                    });
                }

                return res;
            }, []),
        });

        try {
            await gcpService.deleteFolder(
                `teams/${params.teamId}/documents/${params.documentId}`
            );
        } catch (error) {
            log.error({ error }, "Failed to delete document");
        }

        return {
            message: "Document deleted successfully.",
            data: {
                document: {
                    ...document,
                    tags: document.documentTags.flatMap(({ tag }) => tag.tag),
                },
            },
        };
    },

    getDocuments: async ({ query, params }) => {
        const skip = (query.page - 1) * query.perPage;

        const where: PrismaTeam.DocumentWhereInput = {
            ...(query.search && {
                OR: [
                    {
                        name: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                    {
                        documentTags: {
                            some: {
                                tag: {
                                    tag: {
                                        mode: "insensitive",
                                        contains: query.search,
                                    },
                                },
                            },
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
                        documentExtractedFields: {
                            some: {
                                value: {
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
                                    createdAt: PrismaTeam.SortOrder.desc,
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

        const tagRepository = await applicationService.initTagRepository(
            params.teamId
        );

        const { existedTagsIds, newTags } = await withRepositories(
            [documentRepository, tagRepository],
            async (documentRepo, tagRepository) => {
                const existedDocument = await documentRepo.findFirst({
                    where: {
                        name: body.name,
                    },
                });

                if (existedDocument) {
                    throw new ConflictError(
                        "Document with this name already exists"
                    );
                }

                const existedTags = await tagRepository.findMany({
                    where: {
                        tag: {
                            in: body.tags,
                        },
                    },
                });

                const existedTagsTags = existedTags.map(({ tag }) => tag);

                return {
                    existedTagsIds: existedTags.map(({ id }) => id),
                    newTags: body.tags.filter(
                        (tag) => !existedTagsTags.includes(tag)
                    ),
                };
            }
        );

        const documentsUploadPayload = await Promise.all(
            body.files.map(async (file) => {
                const documentUploadPayload = await gcpService.uploadFile({
                    keyPayload: {
                        type: FileTypes.DOCUMENT,
                        documentId,
                        teamId: params.teamId,
                        fileName: file.id,
                    },
                    mimeType: file.mimeType,
                });

                const documentReadPayload = await gcpService.getFileUrl({
                    key: documentUploadPayload.key,
                    type: FileTypes.DOCUMENT,
                });

                return {
                    ...file,
                    ...documentReadPayload,
                    key: documentUploadPayload.key,
                    uploadUrl: documentUploadPayload.url,
                };
            })
        );

        const document = await withRepositories([client], async (client) =>
            client.$transaction(async (tx) => {
                const document = await tx.document.create({
                    data: {
                        id: documentId,
                        status: DocumentStatuses.PROCESSING,
                        name: body.name,
                    },
                    select: {
                        ...defaultDocumentSelector,
                        files: true,
                        documentExtractedFields: true,
                        documentTags: {
                            select: {
                                tag: true,
                            },
                        },
                    },
                });

                let tagsIds = [...existedTagsIds];

                if (newTags.length > 0) {
                    const newCreatedTags = await tx.tag.createManyAndReturn({
                        data: newTags.map((tag) => ({
                            tag,
                        })),
                        skipDuplicates: true,
                    });

                    tagsIds = tagsIds.concat(
                        newCreatedTags.map(({ id }) => id)
                    );
                }

                if (tagsIds.length > 0) {
                    await tx.documentTag.createMany({
                        data: tagsIds.map((id) => ({
                            tagId: id,
                            documentId,
                        })),
                        skipDuplicates: true,
                    });
                }

                await tx.file.createMany({
                    data: documentsUploadPayload.map((file) => ({
                        key: file.key,
                        fileSize: file.fileSize,
                        mimeType: file.mimeType,
                        url: file.url,
                        urlExpiresAt: file.expiredAt,
                        width: file.width,
                        height: file.height,
                        documentId,
                    })),
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
                document: {
                    ...document,
                    tags: document.documentTags.flatMap(({ tag }) => tag.tag),
                },
            },
        };
    },

    updateDocument: async ({ params, body, initiator }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const client = await applicationService.initTeamTenantClient(
            params.teamId
        );

        const tagRepository = await applicationService.initTagRepository(
            params.teamId
        );

        const { existedTagsIds, newTags } = await withRepositories(
            [documentRepository, tagRepository],
            async (documentRepo, tagRepository) => {
                await documentRepo.findUniqueOrFail({
                    where: {
                        id: params.documentId,
                    },
                });

                const existedTags = await tagRepository.findMany({
                    where: {
                        tag: {
                            in: body.tags,
                        },
                    },
                });

                const existedTagsTags = existedTags.map(({ tag }) => tag);

                return {
                    existedTagsIds: existedTags.map(({ id }) => id),
                    newTags: (body.tags || []).filter(
                        (tag) => !existedTagsTags.includes(tag)
                    ),
                };
            }
        );

        const document = await withRepositories([client], async (client) =>
            client.$transaction(async (tx) => {
                let tagsIds = [...existedTagsIds];

                if (newTags.length > 0) {
                    const newCreatedTags = await tx.tag.createManyAndReturn({
                        data: newTags.map((tag) => ({
                            tag,
                        })),
                        skipDuplicates: true,
                    });

                    tagsIds = tagsIds.concat(
                        newCreatedTags.map(({ id }) => id)
                    );
                }

                if (tagsIds.length > 0) {
                    await tx.documentTag.createMany({
                        data: tagsIds.map((id) => ({
                            tagId: id,
                            documentId: document.id,
                        })),
                        skipDuplicates: true,
                    });
                }

                if (body.tagsToDelete && body.tagsToDelete.length > 0) {
                    await tx.documentTag.deleteMany({
                        where: {
                            tag: {
                                tag: {
                                    in: body.tagsToDelete,
                                },
                            },
                        },
                    });
                }

                const updatedObjects: string[] = [];

                if (body.name) {
                    updatedObjects.push("name");
                }

                if (body.tags) {
                    updatedObjects.push("tags");
                }

                const document = await tx.document.update({
                    where: {
                        id: params.documentId,
                    },
                    data: {
                        name: body.name,
                    },
                    select: {
                        ...defaultDocumentSelector,
                        files: true,
                        documentExtractedFields: true,
                        documentTags: {
                            select: {
                                tag: true,
                            },
                        },
                    },
                });

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
                document: {
                    ...document,
                    tags: document.documentTags.flatMap(({ tag }) => tag.tag),
                },
            },
        };
    },
});

addDIResolverName(createDocumentService, "documentService");
