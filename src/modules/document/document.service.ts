import { randomUUID } from "crypto";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { ChatService } from "../chat/chat.service.js";
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
    ChatMemberStatus,
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
    UpdateDocumentResponse,
    CreateDocumentResponse,
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
    }) => Promise<CreateDocumentResponse>;
    updateDocument: (p: {
        params: DocumentParamsInput;
        body: UpdateDocumentBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<UpdateDocumentResponse>;
};

export const createDocumentService = (
    applicationService: ApplicationService,
    chatService: ChatService,
    gcpService: GcpService,
    notificationRepository: NotificationRepository,
    teamMemberRepository: TeamMemberRepository,
    log: FastifyBaseLogger
): DocumentService => ({
    getDocument: async ({ params, initiator }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const doc = await withRepositories(
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
                        chat: {
                            select: {
                                _count: {
                                    select: {
                                        messages: {
                                            where: {
                                                NOT: {
                                                    chatMessageReadStatuses: {
                                                        some: {
                                                            readBy: {
                                                                userId: initiator.id,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                })
        );

        const tags = doc.documentTags.flatMap(({ tag }) => tag.tag);
        const unreadMessagesCount = doc.chat?._count.messages ?? 0;

        return {
            message: "Document fetched successfully.",
            data: {
                document: {
                    id: doc.id,
                    createdAt: doc.createdAt,
                    updatedAt: doc.updatedAt,
                    status: doc.status,
                    name: doc.name,
                    expiresAt: doc.expiresAt,
                    riskLevel: doc.riskLevel,
                    documentExtractedFields: doc.documentExtractedFields,
                    files: doc.files,
                    tags,
                    unreadMessagesCount,
                },
            },
        } satisfies FetchDocumentResponse;
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

        const tags = document.documentTags.flatMap(({ tag }) => tag.tag);
        const unreadMessagesCount = 0;

        return {
            message: "Document deleted successfully.",
            data: {
                document: {
                    id: document.id,
                    createdAt: document.createdAt,
                    updatedAt: document.updatedAt,
                    status: document.status,
                    name: document.name,
                    expiresAt: document.expiresAt,
                    riskLevel: document.riskLevel,
                    documentExtractedFields: document.documentExtractedFields,
                    files: document.files,
                    tags,
                    unreadMessagesCount,
                },
            },
        } satisfies FetchDocumentResponse;
    },

    getDocuments: async ({ query, params, initiator }) => {
        const where: PrismaTeam.DocumentWhereInput = {
            ...(query.search && {
                name: {
                    mode: "insensitive",
                    contains: query.search,
                },
            }),
            ...(query.authorsIds && {
                actionLogs: {
                    some: {
                        type: {
                            in: [
                                ActionLogTypes.CREATE_DOCUMENT,
                                ActionLogTypes.UPDATE_DOCUMENT,
                            ],
                        },
                        actorId: {
                            in: query.authorsIds,
                        },
                    },
                },
            }),
            ...(query.tagsIds && {
                documentTags: {
                    some: {
                        tagId: {
                            in: query.tagsIds,
                        },
                    },
                },
            }),
            ...(query.statuses && {
                status: {
                    in: query.statuses,
                },
            }),
            ...(query.riskLevels && {
                riskLevel: {
                    in: query.riskLevels,
                },
            }),
            ...(query.expiresAtDateRange &&
                query.expiresAtDateRange.length > 0 && {
                expiresAt: {
                    gte: query.expiresAtDateRange[0],
                    lte: query.expiresAtDateRange[1],
                },
            }),
        };

        const documentRepository =
            await applicationService.initDocumentRepository(params.teamId);

        const documents = await withRepositories(
            [documentRepository],
            (documentRepo) =>
                documentRepo.findMany({
                    where,
                    orderBy: {
                        ...(query.sortField && query.sortOrder
                            ? {
                                [query.sortField]: query.sortOrder,
                            }
                            : {
                                createdAt: PrismaTeam.SortOrder.desc,
                            }),
                    },
                    ...(query.cursor && {
                        cursor: { id: query.cursor },
                        skip: 1,
                    }),
                    take: query.limit,
                    select: {
                        ...defaultDocumentSelector,
                        actionLogs: {
                            where: {
                                type: {
                                    in: [
                                        ActionLogTypes.CREATE_DOCUMENT,
                                        ActionLogTypes.UPDATE_DOCUMENT,
                                    ],
                                },
                                ...(query.authorsIds && {
                                    actorId: {
                                        in: query.authorsIds,
                                    },
                                }),
                            },
                        },
                        chat: {
                            select: {
                                _count: {
                                    select: {
                                        messages: {
                                            where: {
                                                NOT: {
                                                    chatMessageReadStatuses: {
                                                        some: {
                                                            readBy: {
                                                                userId: initiator.id,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                })
        );

        const nextCursor =
            documents.length === query.limit
                ? documents[documents.length - 1].id
                : null;

        return {
            message: "Documents fetched successfully.",
            data: {
                documents: documents.map((doc) => {
                    const actions = doc.actionLogs.reduce<
                        Record<string, ActionLogTypes[]>
                    >((acc, { actorId, type }) => {
                        (acc[actorId] ??= []).push(type);

                        return acc;
                    }, {});

                    return {
                        id: doc.id,
                        createdAt: doc.createdAt,
                        updatedAt: doc.updatedAt,
                        status: doc.status,
                        name: doc.name,
                        expiresAt: doc.expiresAt,
                        riskLevel: doc.riskLevel,
                        actions,
                        unreadMessagesCount: doc.chat?._count.messages ?? 0,
                    } satisfies FetchDocumentsResponse["data"]["documents"][number];
                }),
                pagination: {
                    nextCursor,
                },
            },
        } satisfies FetchDocumentsResponse;
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

        const teamMembers = await teamMemberRepository.findMany({
            where: {
                teamId: params.teamId,
            },
            select: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: {
                            select: {
                                url: true,
                            },
                        },
                    },
                },
            },
        });

        const { document, createdFilesIds } = await withRepositories(
            [client],
            async (client) =>
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
                        const newCreatedTags = await tx.tag.createManyAndReturn(
                            {
                                data: newTags.map((tag) => ({
                                    tag,
                                })),
                                skipDuplicates: true,
                            }
                        );

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

                    const files = await tx.file.createManyAndReturn({
                        data: documentsUploadPayload.map((file) => ({
                            id: file.id,
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

                    const createdFilesIds = files.map(({ id }) => id);

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

                    const chat = await chatService.createChat({
                        chatName: document.name,
                        documentId: document.id,
                        members: [
                            {
                                userId: initiator.id,
                                userFullName: initiator.fullName,
                                userAvatarUrl: initiator.avatar?.url,
                            },
                        ],
                        tx,
                    });

                    await chatService.upsertChatMember({
                        teamId: params.teamId,
                        chatId: chat.id,
                        tx,
                        members: teamMembers.map((teamMember) => ({
                            userId: teamMember.user.id,
                            userFullName: teamMember.user.fullName,
                            userAvatarUrl: teamMember.user.avatar?.url,
                            status: ChatMemberStatus.ACTIVE,
                        })),
                    });

                    const chatMember = await tx.chatMember.findFirst({
                        where: {
                            chatId: chat.id,
                            userId: initiator.id,
                        },
                    });

                    if (chatMember) {
                        await tx.chatMessage.create({
                            data: {
                                message: `${initiator.fullName} uploaded a new ${files.length >= 2 ? "files" : "file"} for this document`,
                                autoGenerated: true,
                                authorId: chatMember.id,
                                chatId: chat.id,
                            },
                        });
                    }

                    return { document, createdFilesIds };
                })
        );

        return {
            message: "Document created successfully.",
            data: {
                document: {
                    ...document,
                    tags: document.documentTags.flatMap(({ tag }) => tag.tag),
                },
                filesToUpload: documentsUploadPayload.filter(
                    (documentUploadPayload) =>
                        createdFilesIds.includes(documentUploadPayload.id)
                ),
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

        const documentsUploadPayload =
            body.files && body.files.length > 0
                ? await Promise.all(
                    body.files.map(async (file) => {
                        const documentUploadPayload =
                              await gcpService.uploadFile({
                                  keyPayload: {
                                      type: FileTypes.DOCUMENT,
                                      documentId: params.documentId,
                                      teamId: params.teamId,
                                      fileName: file.id,
                                  },
                                  mimeType: file.mimeType,
                              });

                        const documentReadPayload =
                              await gcpService.getFileUrl({
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
                )
                : [];

        const { document, createdFilesIds } = await withRepositories(
            [client],
            async (client) =>
                client.$transaction(async (tx) => {
                    let tagsIds = [...existedTagsIds];

                    if (newTags.length > 0) {
                        const newCreatedTags = await tx.tag.createManyAndReturn(
                            {
                                data: newTags.map((tag) => ({
                                    tag,
                                })),
                                skipDuplicates: true,
                            }
                        );

                        tagsIds = tagsIds.concat(
                            newCreatedTags.map(({ id }) => id)
                        );
                    }

                    if (tagsIds.length > 0) {
                        await tx.documentTag.createMany({
                            data: tagsIds.map((id) => ({
                                tagId: id,
                                documentId: params.documentId,
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

                    let createdFilesIds: string[] = [];

                    if (documentsUploadPayload.length > 0) {
                        const files = await tx.file.createManyAndReturn({
                            data: documentsUploadPayload.map((file) => ({
                                key: file.key,
                                fileSize: file.fileSize,
                                mimeType: file.mimeType,
                                url: file.url,
                                urlExpiresAt: file.expiredAt,
                                width: file.width,
                                height: file.height,
                                documentId: params.documentId,
                            })),
                        });

                        createdFilesIds = files.map(({ id }) => id);

                        const chat = await tx.chat.findUnique({
                            where: { documentId: params.documentId },
                        });

                        if (chat) {
                            await chatService.upsertChatMember({
                                teamId: params.teamId,
                                chatId: chat.id,
                                members: [
                                    {
                                        userId: initiator.id,
                                        userFullName: initiator.fullName,
                                        userAvatarUrl: initiator.avatar?.url,
                                        status: ChatMemberStatus.ACTIVE,
                                    },
                                ],
                                tx,
                            });

                            const chatMember = await tx.chatMember.findFirst({
                                where: {
                                    chatId: chat.id,
                                    userId: initiator.id,
                                },
                            });

                            if (chatMember) {
                                await tx.chatMessage.createMany({
                                    data: {
                                        message: `${initiator.fullName} uploaded a new ${files.length >= 2 ? "files" : "file"} for this document`,
                                        autoGenerated: true,
                                        authorId: chatMember.id,
                                        chatId: chat.id,
                                    },
                                });
                            }
                        }
                    }

                    return { document, createdFilesIds };
                })
        );

        return {
            message: "Document updated successfully.",
            data: {
                document: {
                    ...document,
                    tags: document.documentTags.flatMap(({ tag }) => tag.tag),
                },
                filesToUpload: documentsUploadPayload.filter(
                    (documentUploadPayload) =>
                        createdFilesIds.includes(documentUploadPayload.id)
                ),
            },
        };
    },
});

addDIResolverName(createDocumentService, "documentService");
