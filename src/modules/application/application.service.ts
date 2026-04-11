import _ from "lodash";
import { addYears } from "date-fns";
import { randomUUID } from "crypto";
import { EnvConfig } from "@/types/env.type.js";
import { hashing } from "@/lib/hashing/hashing.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { withRepositories } from "@/lib/utils/repository.js";
import { getRandomInt, splitRandomSum } from "./application.utils.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    createTenantDatabase,
    migrateTenantDatabase,
} from "@/database/infra/tenant.js";
import {
    Prisma as MasterPrisma,
    TeamMemberRoles,
} from "@/database/master/generated/index.js";
import {
    documents,
    images,
    tags,
    teams,
    users,
} from "./application.constants.js";
import {
    createTagRepository,
    TagRepository,
} from "@/database/team/repositories/tag/tag.repository.js";
import {
    createChatRepository,
    ChatRepository,
} from "@/database/team/repositories/chat/chat.repository.js";
import {
    createDocumentRepository,
    DocumentRepository,
} from "@/database/team/repositories/document/docuement.repository.js";
import {
    PrismaClient as TeamPrismaClient,
    Prisma as TeamPrisma,
    ActionLogTypes,
} from "@/database/team/generated/index.js";
import {
    ActionLogRepository,
    createActionLogRepository,
} from "@/database/team/repositories/action-log/action-log.repository.js";
import {
    createChatMemberRepository,
    ChatMemberRepository,
} from "@/database/team/repositories/chat-member/chat-member.repository.js";
import {
    createDocumentTagRepository,
    DocumentTagRepository,
} from "@/database/team/repositories/document-tag/document-tag.repository.js";
import {
    createChatMessageRepository,
    ChatMessageRepository,
} from "@/database/team/repositories/chat-message/chat-message.repository.js";
import {
    createChatMessageReadStatusRepository,
    ChatMessageReadStatusRepository,
} from "@/database/team/repositories/chat-message-read-status/chat-message-read-status.repository.js";

export type ApplicationService = {
    healthChecker: () => Promise<string>;
    initDocumentRepository: (teamId: string) => Promise<DocumentRepository>;
    initTagRepository: (teamId: string) => Promise<TagRepository>;
    initDocumentTagRepository: (
        teamId: string
    ) => Promise<DocumentTagRepository>;
    initActionLogRepository: (teamId: string) => Promise<ActionLogRepository>;
    initChatRepository: (teamId: string) => Promise<ChatRepository>;
    initChatMemberRepository: (teamId: string) => Promise<ChatMemberRepository>;
    initChatMessageRepository: (
        teamId: string
    ) => Promise<ChatMessageRepository>;
    initChatMessageReadStatusRepository: (
        teamId: string
    ) => Promise<ChatMessageReadStatusRepository>;
    initTeamTenantClient: (teamId: string) => Promise<TeamPrismaClient>;
    setTestData: () => Promise<string>;
};

export const createApplicationService = (
    teamRepository: TeamRepository,
    config: EnvConfig,
    log: FastifyBaseLogger,
    prisma: FastifyInstance["prisma"]
): ApplicationService => {
    const createTestTeamMembers = async (
        tx: MasterPrisma.TransactionClient,
        users: { id: string }[],
        createdTeams: { id: string }[]
    ) => {
        const shuffledUsers = _.shuffle(users);

        const teamMembersData: {
            role: "OWNER" | "ADMIN" | "STAFF";
            userId: string;
            teamId: string;
        }[] = [];

        let userIndex = 0;

        for (const team of createdTeams) {
            let adminCount = 0;
            let hasOwner = false;

            const membersPerTeam = Math.floor(
                users.length / createdTeams.length
            );

            const extra = users.length % createdTeams.length;

            const teamSize = membersPerTeam + (extra > 0 ? 1 : 0);

            for (let index = 0; index < teamSize; index++) {
                const user = shuffledUsers[userIndex];
                userIndex++;

                let role: TeamMemberRoles;

                if (!hasOwner && index === 0) {
                    role = TeamMemberRoles.OWNER;
                    hasOwner = true;
                } else {
                    role =
                        adminCount < 2 && Math.random() < 0.5
                            ? TeamMemberRoles.ADMIN
                            : TeamMemberRoles.STAFF;

                    if (role === TeamMemberRoles.ADMIN) {
                        adminCount++;
                    }
                }

                teamMembersData.push({
                    role,
                    userId: user.id,
                    teamId: team.id,
                });

                if (userIndex >= shuffledUsers.length) {
                    break;
                }
            }
        }

        await tx.teamMember.createMany({
            data: teamMembersData,
        });
    };

    const initTeamTenantClient = async (teamId: string) => {
        return prisma.team(
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );
    };

    const initActionLogRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createActionLogRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initDocumentRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createDocumentRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initTagRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createTagRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initDocumentTagRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createDocumentTagRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initChatRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createChatRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initChatMemberRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createChatMemberRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initChatMessageRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createChatMessageRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    const initChatMessageReadStatusRepository = async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createChatMessageReadStatusRepository(
            prisma,
            config.MASTER_DATABASE_URL.replaceAll(
                "5432/expiry",
                `5432/${teamId}`
            )
        );

        return repository;
    };

    return {
        healthChecker: async () => {
            return "pong";
        },
        setTestData: async () => {
            const password = await hashing.hashPassword("Password1!");

            const createdTeams = await prisma.master.$transaction(
                async (tx) => {
                    const createdUsers = await tx.user.createManyAndReturn({
                        data: users.map((user) => ({
                            ...user,
                            password,
                        })),
                    });

                    await tx.avatar.createMany({
                        data: createdUsers
                            .slice(0, 15)
                            .reduce<
                                MasterPrisma.AvatarCreateManyInput[]
                            >((res, { id }) => {
                                const url =
                                    images[getRandomInt(0, images.length - 1)];

                                if (url) {
                                    res.push({
                                        key: randomUUID(),
                                        fileSize: 1000,
                                        mimeType: "image/jpeg",
                                        url,
                                        expiredAt: addYears(new Date(), 100),
                                        width: 600,
                                        height: 600,
                                        userId: id,
                                    });
                                }

                                return res;
                            }, []),
                    });

                    await tx.notificationPreference.createMany({
                        data: createdUsers.map(({ id }) => ({
                            teamNews: true,
                            documentNews: true,
                            inAppNotifications: true,
                            emailNotifications: true,
                            userId: id,
                        })),
                    });

                    const createdTeams = await tx.team.createManyAndReturn({
                        data: teams,
                    });

                    await tx.logo.createMany({
                        data: createdTeams
                            .slice(0, 15)
                            .reduce<
                                MasterPrisma.LogoCreateManyInput[]
                            >((res, { id }) => {
                                const url =
                                    images[getRandomInt(0, images.length - 1)];

                                if (url) {
                                    res.push({
                                        key: randomUUID(),
                                        fileSize: 1000,
                                        mimeType: "image/jpeg",
                                        url,
                                        expiredAt: addYears(new Date(), 100),
                                        width: 600,
                                        height: 600,
                                        teamId: id,
                                    });
                                }

                                return res;
                            }, []),
                    });

                    await tx.teamStat.createMany({
                        data: createdTeams.map(({ id }) => {
                            const fieldsCount = 9;
                            const totalDocuments = getRandomInt(5, 20);

                            const [
                                processingDocuments,
                                highRiskDocuments,
                                lowRiskDocuments,
                                mediumRiskDocuments,
                                activeDocuments,
                                archivedDocuments,
                                failedDocuments,
                                needsReviewDocuments,
                                expiringSoonDocuments,
                            ] = splitRandomSum(totalDocuments, fieldsCount);

                            return {
                                totalDocuments,
                                processingDocuments,
                                activeDocuments,
                                archivedDocuments,
                                failedDocuments,
                                needsReviewDocuments,
                                highRiskDocuments,
                                mediumRiskDocuments,
                                lowRiskDocuments,
                                expiringSoonDocuments,
                                teamId: id,
                            };
                        }),
                    });

                    await createTestTeamMembers(tx, createdUsers, createdTeams);

                    return createdTeams;
                }
            );

            for (const createdTeam of createdTeams) {
                const users = await prisma.master.teamMember.findMany({
                    where: {
                        teamId: createdTeam.id,
                    },
                    select: {
                        user: {
                            select: {
                                id: true,
                                fullName: true,
                                avatar: true,
                            },
                        },
                        role: true,
                    },
                    orderBy: {
                        role: "desc",
                    },
                });

                try {
                    await createTenantDatabase(createdTeam.id);
                    await migrateTenantDatabase(createdTeam.id);

                    const client = await initTeamTenantClient(createdTeam.id);

                    await withRepositories([client], async (client) =>
                        client.$transaction(async (tx) => {
                            const teamCreator = users.find(
                                ({ role }) => role === TeamMemberRoles.ADMIN
                            );

                            if (teamCreator) {
                                await tx.actionLog.create({
                                    data: {
                                        type: ActionLogTypes.CREATE_TEAM,
                                        actorId: teamCreator.user.id,
                                        actorFullName:
                                            teamCreator.user.fullName,
                                        actorAvatarUrl:
                                            teamCreator.user.avatar?.url,
                                    },
                                });
                            }

                            const createdTags =
                                await tx.tag.createManyAndReturn({
                                    data: tags,
                                });

                            const createdDocuments =
                                await tx.document.createManyAndReturn({
                                    data: documents,
                                });

                            for (const createdDocument of createdDocuments) {
                                const documentCreator =
                                    users[getRandomInt(0, users.length - 1)];

                                if (documentCreator) {
                                    await tx.actionLog.create({
                                        data: {
                                            type: ActionLogTypes.CREATE_DOCUMENT,
                                            actorId: documentCreator.user.id,
                                            actorFullName:
                                                documentCreator.user.fullName,
                                            actorAvatarUrl:
                                                documentCreator.user.avatar
                                                    ?.url,
                                            documentName: createdDocument.name,
                                            documentId: createdDocument.id,
                                        },
                                    });
                                }
                            }

                            // Create chats for each document with all team members
                            for (const createdDocument of createdDocuments) {
                                const chat = await tx.chat.create({
                                    data: {
                                        name: createdDocument.name,
                                        documentId: createdDocument.id,
                                    },
                                });

                                // Add all team members to the chat
                                await tx.chatMember.createMany({
                                    data: users.map(({ user }) => ({
                                        chatId: chat.id,
                                        userId: user.id,
                                        userFullName: user.fullName,
                                        userAvatarUrl: user.avatar?.url || null,
                                        status: "ACTIVE",
                                    })),
                                });

                                // Create default messages in the chat
                                const defaultMessages = [
                                    `Welcome to the ${createdDocument.name} chat! This is where team members can collaborate and discuss this document.`,
                                    "Feel free to share updates, ask questions, and coordinate your work here.",
                                    `Document created: ${new Date().toLocaleDateString()}`,
                                ];

                                const randomUser =
                                    users[getRandomInt(0, users.length - 1)];

                                const chatMember =
                                    await tx.chatMember.findFirst({
                                        where: {
                                            chatId: chat.id,
                                            userId: randomUser.user.id,
                                        },
                                    });

                                if (chatMember) {
                                    for (const messageText of defaultMessages) {
                                        await tx.chatMessage.create({
                                            data: {
                                                message: messageText,
                                                chatId: chat.id,
                                                authorId: chatMember.id,
                                                autoGenerated: true,
                                            },
                                        });
                                    }
                                }
                            }

                            // Create a general team chat that all members have access to
                            const teamChat = await tx.chat.create({
                                data: {
                                    name: `${createdTeam.name} General`,
                                },
                            });

                            await tx.chatMember.createMany({
                                data: users.map(({ user }) => ({
                                    chatId: teamChat.id,
                                    userId: user.id,
                                    userFullName: user.fullName,
                                    userAvatarUrl: user.avatar?.url || null,
                                    status: "ACTIVE",
                                })),
                            });

                            const teamChatOwner =
                                users.find(
                                    ({ role }) => role === TeamMemberRoles.OWNER
                                ) ||
                                users.find(
                                    ({ role }) => role === TeamMemberRoles.ADMIN
                                );

                            if (teamChatOwner) {
                                const teamChatOwnerMember =
                                    await tx.chatMember.findFirst({
                                        where: {
                                            chatId: teamChat.id,
                                            userId: teamChatOwner.user.id,
                                        },
                                    });

                                if (teamChatOwnerMember) {
                                    await tx.chatMessage.create({
                                        data: {
                                            message: `Welcome to ${createdTeam.name}! This is our team chat. Let's collaborate and stay connected!`,
                                            chatId: teamChat.id,
                                            authorId: teamChatOwnerMember.id,
                                            autoGenerated: true,
                                        },
                                    });
                                }
                            }

                            const invitedUsers = users.filter(
                                ({ role }) => role === TeamMemberRoles.STAFF
                            );

                            const invitersUsers = users.filter(
                                ({ role }) => role === TeamMemberRoles.ADMIN
                            );

                            for (const invitedUser of invitedUsers) {
                                const invitersUser =
                                    invitersUsers[
                                        getRandomInt(
                                            0,
                                            invitersUsers.length - 1
                                        )
                                    ];

                                if (invitersUser) {
                                    await tx.actionLog.create({
                                        data: {
                                            type: ActionLogTypes.ADD_USER,
                                            actorId: invitersUser.user.id,
                                            actorFullName:
                                                invitersUser.user.fullName,
                                            actorAvatarUrl:
                                                invitersUser.user.avatar?.url,
                                            userId: invitedUser.user.id,
                                            userFullName:
                                                invitedUser.user.fullName,
                                            userAvatarUrl:
                                                invitedUser.user.avatar?.url,
                                        },
                                    });
                                }
                            }

                            const documentTags: TeamPrisma.DocumentTagCreateManyInput[] =
                                [];

                            // First: ensure every tag is assigned at least once
                            createdTags.forEach((tag, index) => {
                                const docIndex =
                                    (index % (createdDocuments.length - 1)) + 1;
                                // +1 skips document[0]

                                documentTags.push({
                                    documentId: createdDocuments[docIndex].id,
                                    tagId: tag.id,
                                });
                            });

                            // Second: optionally add extra random relations
                            for (
                                let index = 1;
                                index < createdDocuments.length;
                                index++
                            ) {
                                createdTags.forEach((tag) => {
                                    if (Math.random() > 0.7) {
                                        documentTags.push({
                                            documentId:
                                                createdDocuments[index].id,
                                            tagId: tag.id,
                                        });
                                    }
                                });
                            }

                            await tx.documentTag.createMany({
                                data: documentTags,
                            });

                            for (const ctreatedDocument of createdDocuments) {
                                const filesLimit = getRandomInt(
                                    1,
                                    images.length
                                );

                                const data: TeamPrisma.FileCreateManyInput[] =
                                    Array.from({ length: filesLimit }).map(
                                        () => ({
                                            key: randomUUID(),
                                            fileSize: 1000,
                                            mimeType: "image/jpeg",
                                            url: images[
                                                getRandomInt(
                                                    0,
                                                    images.length - 1
                                                )
                                            ],
                                            urlExpiresAt: addYears(
                                                new Date(),
                                                100
                                            ),
                                            width: 600,
                                            height: 600,
                                            documentId: ctreatedDocument.id,
                                        })
                                    );

                                await tx.file.createMany({
                                    data,
                                });
                            }
                        })
                    );
                } catch (error) {
                    log.error({ error }, "Failed o created tenant DB");
                }
            }

            return "Test data was created";
        },
        initTeamTenantClient,
        initActionLogRepository,
        initDocumentRepository,
        initTagRepository,
        initDocumentTagRepository,
        initChatRepository,
        initChatMemberRepository,
        initChatMessageRepository,
        initChatMessageReadStatusRepository,
    };
};

addDIResolverName(createApplicationService, "applicationService");
