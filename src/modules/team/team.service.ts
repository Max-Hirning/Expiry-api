import { randomUUID } from "crypto";
import { EnvConfig } from "@/types/env.type.js";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { UserService } from "../user/user.service.js";
import { ChatService } from "../chat/chat.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { ActionLogTypes } from "@/database/team/generated/index.js";
import { Prisma as PrismaTeam } from "@/database/team/generated/index.js";
import { ApplicationService } from "../application/application.service.js";
import { FastifyBaseLogger, FastifyInstance, FastifyRequest } from "fastify";
import { UserRepository } from "@/database/master/repositories/user/user.repository.js";
import {
    BadRequestError,
    ForbiddenError,
    InternalServerError,
} from "@/lib/errors/errors.js";
import { NotificationRepository } from "@/database/master/repositories/notification/notification.repository.js";
import {
    defaultTeamSelector,
    TeamRepository,
} from "@/database/master/repositories/team/team.repository.js";
import {
    createTenantDatabase,
    dropTenantDatabase,
    migrateTenantDatabase,
} from "@/database/infra/tenant.js";
import {
    defaultTeamStatSelector,
    TeamStatRepository,
} from "@/database/master/repositories/team-stat/team-stat.repository.js";
import {
    Logo,
    NotificationTypes,
    Prisma as PrismaMaster,
    Team,
    TeamMember,
    UserRoles,
} from "@/database/master/generated/index.js";
import {
    TeamParamsInput,
    FetchTeamResponse,
    FetchTeamsQueryInput,
    FetchTeamsResponse,
    CreateTeamBodyInput,
    UpdateTeamBodyInput,
    CreateTeamResponse,
    UpdateTeamResponse,
} from "@/lib/validation/team/team.schema.js";

export type TeamService = {
    getTeam: (p: {
        params: TeamParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchTeamResponse>;
    deleteTeam: (p: {
        params: TeamParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchTeamResponse>;
    getTeams: (p: {
        query: FetchTeamsQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchTeamsResponse>;
    createTeam: (p: {
        body: CreateTeamBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<CreateTeamResponse>;
    updateTeam: (p: {
        params: TeamParamsInput;
        body: UpdateTeamBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<UpdateTeamResponse>;
};

export const createTeamService = (
    userService: UserService,
    gcpService: GcpService,
    config: EnvConfig,
    teamRepository: TeamRepository,
    prisma: FastifyInstance["prisma"],
    log: FastifyBaseLogger,
    notificationRepository: NotificationRepository,
    teamStatRepository: TeamStatRepository,
    userRepository: UserRepository,
    applicationService: ApplicationService,
    chatService: ChatService
): TeamService => {
    const getTeam = async (
        teamId: string,
        initiator: FastifyRequest["user"]
    ): Promise<FetchTeamResponse["data"]["team"]> => {
        const [team, teamStat] = await Promise.all([
            teamRepository.findUniqueOrFail({
                where: {
                    id: teamId,
                },
                select: {
                    ...defaultTeamSelector,
                    teamMembers: {
                        where: {
                            userId: initiator.id,
                        },
                    },
                },
            }),
            teamStatRepository.findUniqueOrFail({
                where: {
                    teamId,
                },
            }),
        ]);

        if (!teamStat) {
            throw new InternalServerError(
                "Team doesn't have statistic, pls contact tech support"
            );
        }

        if (!team.teamMembers[0]) {
            throw new ForbiddenError("You don't have access to this team");
        }

        return {
            ...team,
            currentMember: team.teamMembers[0],
            stats: teamStat,
        };
    };

    const checkTeamMembersRoles = async (teamMembersIds: string[]) => {
        const futureTeamMembers = await userRepository.findMany({
            where: {
                id: {
                    in: teamMembersIds,
                },
            },
        });

        if (futureTeamMembers.some(({ role }) => role !== UserRoles.USER)) {
            throw new BadRequestError("Only users can access the team");
        }

        return true;
    };

    const configureFutureTeamMembers = async ({
        teamMembers,
        team,
        initiator,
    }: {
        teamMembers: Pick<TeamMember, "userId" | "role">[];
        team: Team;
        initiator: FastifyRequest["user"];
    }) => {
        const futureTeamMembers = await userRepository.findMany({
            where: {
                id: {
                    in: teamMembers.map(({ userId }) => userId),
                },
            },
            select: {
                id: true,
                fullName: true,
                avatar: true,
                notificationPreferences: true,
            },
        });

        return futureTeamMembers.reduce<{
            actionLogsData: PrismaTeam.ActionLogCreateManyInput[];
            teamMembers: Omit<
                PrismaMaster.TeamMemberCreateManyInput,
                "teamId"
            >[];
            notifications: PrismaMaster.NotificationCreateManyInput[];
        }>(
            (res, user) => {
                const foundUser = teamMembers.find(
                    ({ userId }) => userId === user.id
                );

                if (
                    foundUser &&
                    user.notificationPreferences?.teamNews &&
                    user.notificationPreferences?.inAppNotifications
                ) {
                    res.actionLogsData.push({
                        type: ActionLogTypes.ADD_USER,
                        actorId: initiator.id,
                        actorFullName: initiator.fullName,
                        actorAvatarUrl: initiator.avatar?.url,
                        userId: user.id,
                        userFullName: user.fullName,
                        userAvatarUrl: user.avatar?.url,
                    });

                    res.notifications.push({
                        type: NotificationTypes.INVITE_USER_IN_TEAM,
                        userId: user.id,
                        teamName: team.name,
                        teamId: team.id,
                    });

                    res.teamMembers.push({
                        userId: foundUser.userId,
                        role: foundUser.role,
                    });
                }

                return res;
            },
            {
                actionLogsData: [],
                teamMembers: [],
                notifications: [],
            }
        );
    };

    const configureFutureTeamMembersToDisconnect = async ({
        teamMembersUsersIds,
        team,
        initiator,
    }: {
        teamMembersUsersIds: string[];
        team: Team;
        initiator: FastifyRequest["user"];
    }) => {
        const futureTeamMembers = await userRepository.findMany({
            where: {
                id: {
                    in: teamMembersUsersIds,
                },
            },
            select: {
                id: true,
                fullName: true,
                avatar: true,
            },
        });

        return futureTeamMembers.reduce<{
            actionLogsData: PrismaTeam.ActionLogCreateManyInput[];
            notifications: PrismaMaster.NotificationCreateManyInput[];
        }>(
            (res, user) => {
                const foundUser = teamMembersUsersIds.includes(user.id);

                if (foundUser) {
                    res.actionLogsData.push({
                        type: ActionLogTypes.ADD_USER,
                        actorId: initiator.id,
                        actorFullName: initiator.fullName,
                        actorAvatarUrl: initiator.avatar?.url,
                        userId: user.id,
                        userFullName: user.fullName,
                        userAvatarUrl: user.avatar?.url,
                    });

                    res.notifications.push({
                        type: NotificationTypes.DELETE_USER_FROM_TEAM,
                        userId: user.id,
                        teamName: team.name,
                        teamId: team.id,
                    });
                }

                return res;
            },
            {
                actionLogsData: [],
                notifications: [],
            }
        );
    };

    return {
        getTeam: async ({ params, initiator }) => {
            const team = await getTeam(params.teamId, initiator);

            return {
                message: "Team fetched successfully.",
                data: { team },
            };
        },

        deleteTeam: async ({ params, initiator }) => {
            const team = await getTeam(params.teamId, initiator);

            await prisma.master.$transaction(async (tx) => {
                const team = await tx.team.delete({
                    where: {
                        id: params.teamId,
                    },
                    select: {
                        ...defaultTeamSelector,
                        teamMembers: true,
                    },
                });

                await tx.notification.createMany({
                    data: team.teamMembers.map(({ userId }) => ({
                        type: NotificationTypes.DELETE_TEAM,
                        userId,
                        teamName: team.name,
                    })),
                });
            });

            try {
                await dropTenantDatabase(team.id);
            } catch (error) {
                log.error({ error }, "Failed to delete team DB");
            }

            if (team.logo) {
                try {
                    await gcpService.deleteFolder(`teams/${team.id}`);
                } catch (error) {
                    log.error({ error }, "Failed to delete team logo");
                }
            }

            return {
                message: "Team deleted successfully.",
                data: { team },
            };
        },

        getTeams: async ({ query, initiator }) => {
            const skip = (query.page - 1) * query.perPage;

            const where: PrismaMaster.TeamWhereInput = {
                teamMembers: {
                    some: {
                        userId: initiator.id,
                    },
                },
                stats: {
                    isNot: null,
                },
                ...(query.search && {
                    OR: [
                        {
                            name: {
                                mode: "insensitive",
                                contains: query.search,
                            },
                        },
                        {
                            teamMembers: {
                                some: {
                                    user: {
                                        OR: [
                                            {
                                                fullName: {
                                                    mode: "insensitive",
                                                    contains: query.search,
                                                },
                                            },
                                            {
                                                email: {
                                                    mode: "insensitive",
                                                    contains: query.search,
                                                },
                                            },
                                            {
                                                phoneNumber: {
                                                    mode: "insensitive",
                                                    contains: query.search,
                                                },
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                    ],
                }),
            };

            const [teams, total] = await Promise.all([
                teamRepository.findMany({
                    skip,
                    where,
                    take: query.perPage,
                    orderBy: {
                        ...(query.sortField && query.sortOrder
                            ? {
                                [query.sortField]: query.sortOrder,
                            }
                            : {
                                createdAt: PrismaMaster.SortOrder.desc,
                            }),
                    },
                    select: {
                        ...defaultTeamSelector,
                        teamMembers: {
                            where: {
                                userId: initiator.id,
                            },
                        },
                        stats: {
                            select: defaultTeamStatSelector,
                        },
                    },
                }),
                teamRepository.count({
                    where,
                }),
            ]);

            const totalPages = Math.ceil(total / query.perPage);
            const prevPage = query.page > 1 ? query.page - 1 : null;
            const nextPage = query.page < totalPages ? query.page + 1 : null;

            return {
                message: "Teams fetched successfully.",
                data: {
                    teams: teams
                        .filter(
                            (
                                team
                            ): team is typeof team & {
                                stats: NonNullable<typeof team.stats>;
                            } => team.stats !== null
                        )
                        .map((team) => ({
                            ...team,
                            stats: team.stats!,
                            currentMember: team.teamMembers.find(
                                (m) => m.userId === initiator.id
                            )!,
                        })),
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

        createTeam: async ({ body, initiator }) => {
            const teamId = randomUUID();

            await userService.checkIfTeamExists({
                where: {
                    OR: [
                        {
                            id: teamId,
                        },
                        {
                            name: body.name,
                        },
                    ],
                },
            });

            const teamMembersIds =
                body.teamMembers?.map(({ userId }) => userId) || [];

            let futureTeamMembersRecords: Awaited<
                ReturnType<typeof configureFutureTeamMembers>
            > = {
                teamMembers: [],
                actionLogsData: [],
                notifications: [],
            };

            let logoPayload:
                | (Pick<Logo, "url" | "key" | "expiredAt"> & {
                      uploadUrl: string;
                  })
                | null = null;

            try {
                if (body.logo) {
                    const { key, url: uploadUrl } = await gcpService.uploadFile(
                        {
                            keyPayload: {
                                type: FileTypes.LOGO,
                                teamId: teamId,
                            },
                            mimeType: body.logo.mimeType,
                        }
                    );

                    const { url, expiredAt } = await gcpService.getFileUrl({
                        key,
                        type: FileTypes.AVATAR,
                    });

                    logoPayload = {
                        url,
                        key,
                        expiredAt,
                        uploadUrl,
                    };
                }

                if (body.teamMembers) {
                    await checkTeamMembersRoles(teamMembersIds);
                }

                await createTenantDatabase(teamId);

                await migrateTenantDatabase(
                    config.MASTER_DATABASE_URL.replace(
                        "/postgres",
                        `/${teamId}`
                    )
                );

                const createdTeam = await teamRepository.create({
                    data: {
                        id: teamId,
                        name: body.name,
                        ...(body.teamMembers && {
                            teamMembers: {
                                createMany: {
                                    data: futureTeamMembersRecords.teamMembers,
                                },
                            },
                        }),
                        ...(body.logo &&
                            logoPayload && {
                            logo: {
                                create: {
                                    key: logoPayload.key,
                                    fileSize: body.logo.fileSize,
                                    mimeType: body.logo.mimeType,
                                    url: logoPayload.url,
                                    expiredAt: logoPayload.expiredAt,
                                    width: body.logo.width,
                                    height: body.logo.height,
                                },
                            },
                        }),
                        stats: {
                            create: {
                                totalDocuments: 0,
                                processingDocuments: 0,
                                activeDocuments: 0,
                                archivedDocuments: 0,
                                failedDocuments: 0,
                                needsReviewDocuments: 0,
                                highRiskDocuments: 0,
                                mediumRiskDocuments: 0,
                                lowRiskDocuments: 0,
                                expiringSoonDocuments: 0,
                            },
                        },
                    },
                    select: defaultTeamSelector,
                });

                const team = await getTeam(createdTeam.id, initiator);

                if (body.teamMembers) {
                    futureTeamMembersRecords = await configureFutureTeamMembers(
                        {
                            teamMembers: body.teamMembers || [],
                            team: team,
                            initiator: initiator,
                        }
                    );
                }

                const chatMembers = [
                    {
                        userId: initiator.id,
                        userFullName: initiator.fullName,
                        userAvatarUrl: initiator.avatar?.url,
                    },
                ];

                if (futureTeamMembersRecords.teamMembers.length > 0) {
                    const memberUsers = await userRepository.findMany({
                        where: {
                            id: {
                                in: futureTeamMembersRecords.teamMembers.map(
                                    ({ userId }) => userId
                                ),
                            },
                        },
                        select: {
                            id: true,
                            fullName: true,
                            avatar: true,
                        },
                    });

                    chatMembers.push(
                        ...memberUsers.map((user) => ({
                            userId: user.id,
                            userFullName: user.fullName,
                            userAvatarUrl: user.avatar?.url,
                        }))
                    );
                }

                const client =
                    await applicationService.initTeamTenantClient(teamId);

                await withRepositories([client], async (tx) => {
                    await tx.actionLog.createMany({
                        data: futureTeamMembersRecords.actionLogsData,
                    });

                    await chatService.createChat({
                        chatName: body.name,
                        members: chatMembers,
                        tx,
                    });
                });

                await notificationRepository.createMany({
                    data: futureTeamMembersRecords.notifications,
                });

                return {
                    message: "Team created successfully.",
                    data: {
                        team,
                        uploadUrl: logoPayload?.uploadUrl || null,
                    },
                };
            } catch (error) {
                try {
                    await dropTenantDatabase(teamId);
                } catch (error) {
                    log.error({ error }, "Failed to delete team DB");
                }

                if (logoPayload) {
                    try {
                        await gcpService.deleteFile(logoPayload.key);
                    } catch (error) {
                        log.error({ error }, "Failed to delete team logo");
                    }
                }

                throw error;
            }
        },

        updateTeam: async ({ params, body, initiator }) => {
            const teamToUpdate = await teamRepository.findUniqueOrFail({
                where: {
                    id: params.teamId,
                },
            });

            let logoPayload:
                | (Pick<Logo, "url" | "key" | "expiredAt"> & {
                      uploadUrl: string;
                  })
                | null = null;

            if (body.logo) {
                const { key, url: uploadUrl } = await gcpService.uploadFile({
                    keyPayload: {
                        type: FileTypes.LOGO,
                        teamId: params.teamId,
                    },
                    mimeType: body.logo.mimeType,
                });

                const { url, expiredAt } = await gcpService.getFileUrl({
                    key,
                    type: FileTypes.AVATAR,
                });

                logoPayload = {
                    url,
                    key,
                    expiredAt,
                    uploadUrl,
                };
            }

            const teamMembersIds =
                body.teamMembers?.map(({ userId }) => userId) || [];

            let futureTeamMembersRecords: Awaited<
                ReturnType<typeof configureFutureTeamMembers>
            > = {
                teamMembers: [],
                actionLogsData: [],
                notifications: [],
            };
            let futureTeamMembersToDisconnectRecords: Awaited<
                ReturnType<typeof configureFutureTeamMembersToDisconnect>
            > = {
                actionLogsData: [],
                notifications: [],
            };

            let newMemberUsers: Array<{
                id: string;
                fullName: string;
                avatar: { url: string } | null;
            }> = [];

            if (body.teamMembers) {
                await checkTeamMembersRoles(teamMembersIds);

                futureTeamMembersRecords = await configureFutureTeamMembers({
                    teamMembers: body.teamMembers || [],
                    team: teamToUpdate,
                    initiator,
                });

                newMemberUsers = await userRepository.findMany({
                    where: {
                        id: {
                            in: futureTeamMembersRecords.teamMembers.map(
                                ({ userId }) => userId
                            ),
                        },
                    },
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true,
                    },
                });
            }

            if (body.teamMembersUsersToDeleteIds) {
                futureTeamMembersToDisconnectRecords =
                    await configureFutureTeamMembersToDisconnect({
                        teamMembersUsersIds:
                            body.teamMembersUsersToDeleteIds || [],
                        team: teamToUpdate,
                        initiator,
                    });
            }

            await prisma.master.$transaction(async (tx) => {
                const team = await tx.team.update({
                    where: {
                        id: params.teamId,
                    },
                    data: {
                        name: body.name,
                        ...(body.logo &&
                            logoPayload && {
                            logo: {
                                create: {
                                    key: logoPayload.key,
                                    fileSize: body.logo.fileSize,
                                    mimeType: body.logo.mimeType,
                                    url: logoPayload.url,
                                    expiredAt: logoPayload.expiredAt,
                                    width: body.logo.width,
                                    height: body.logo.height,
                                },
                                update: {
                                    key: logoPayload.key,
                                    fileSize: body.logo.fileSize,
                                    mimeType: body.logo.mimeType,
                                    url: logoPayload.url,
                                    expiredAt: logoPayload.expiredAt,
                                    width: body.logo.width,
                                    height: body.logo.height,
                                },
                            },
                        }),
                        ...((futureTeamMembersRecords.teamMembers ||
                            body.teamMembersUsersToDeleteIds) && {
                            teamMembers: {
                                ...(body.teamMembersUsersToDeleteIds && {
                                    deleteMany: {
                                        userId: {
                                            in: body.teamMembersUsersToDeleteIds,
                                        },
                                    },
                                }),
                                ...(futureTeamMembersRecords.teamMembers && {
                                    createMany: {
                                        data: futureTeamMembersRecords.teamMembers,
                                    },
                                }),
                            },
                        }),
                    },
                    select: {
                        ...defaultTeamSelector,
                        teamMembers: true,
                    },
                });

                await tx.notification.createMany({
                    data: [
                        ...futureTeamMembersRecords.notifications,
                        ...futureTeamMembersToDisconnectRecords.notifications,
                    ],
                });

                return team;
            });

            const client = await applicationService.initTeamTenantClient(
                params.teamId
            );

            await withRepositories([client], async (tx) => {
                await tx.actionLog.createMany({
                    data: [
                        ...futureTeamMembersRecords.actionLogsData,
                        ...futureTeamMembersToDisconnectRecords.actionLogsData,
                        {
                            type: ActionLogTypes.UPDATE_TEAM,
                            actorId: initiator.id,
                            actorFullName: initiator.fullName,
                            actorAvatarUrl: initiator.avatar?.url,
                        },
                    ],
                });

                if (body.name) {
                    await tx.chat.updateMany({
                        where: {
                            name: teamToUpdate.name,
                        },
                        data: {
                            name: body.name,
                        },
                    });
                }

                if (newMemberUsers.length > 0) {
                    const allChats = await tx.chat.findMany();

                    for (const chat of allChats) {
                        await chatService.createChatMember({
                            teamId: params.teamId,
                            chatId: chat.id,
                            members: newMemberUsers.map((user) => ({
                                userId: user.id,
                                userFullName: user.fullName,
                                userAvatarUrl: user.avatar?.url,
                            })),
                            tx,
                        });
                    }
                }

                if (
                    body.teamMembersUsersToDeleteIds &&
                    body.teamMembersUsersToDeleteIds.length > 0
                ) {
                    await chatService.deleteChatMember({
                        memberIds: body.teamMembersUsersToDeleteIds,
                        tx,
                    });
                }
            });

            const team = await getTeam(params.teamId, initiator);

            return {
                message: "Team updated successfully.",
                data: {
                    team,
                    uploadUrl: logoPayload?.uploadUrl || null,
                },
            };
        },
    };
};

addDIResolverName(createTeamService, "teamService");
