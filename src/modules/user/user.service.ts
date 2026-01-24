import { JWT } from "@fastify/jwt";
import { hashing } from "@/lib/hashing/hashing.js";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyRequest } from "fastify";
import { withRepositories } from "@/lib/utils/repository.js";
import { invitedRoles, toggleStatuses } from "./user.constants.js";
import { ActionLogTypes } from "@/database/team/generated/index.js";
import { ApplicationService } from "../application/application.service.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import { NotificationRepository } from "@/database/master/repositories/notification/notification.repository.js";
import {
    defaultUserSelector,
    UserRepository,
} from "@/database/master/repositories/user/user.repository.js";
import {
    BadRequestError,
    ConflictError,
    ForbiddenError,
    InternalServerError,
} from "@/lib/errors/errors.js";
import {
    Avatar,
    Prisma,
    Team,
    TeamMemberRole,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/edge.js";
import {
    FetchUserResponse,
    FetchUsersQueryInput,
    FetchUsersResponse,
    InviteUserBodyInput,
    UpdateUserBodyInput,
    UpdateUserPasswordBodyInput,
    UpdateUserResponse,
    UserParamsInput,
} from "@/lib/validation/user/user.schema.js";

export type UserService = {
    getUser: (p: { params: UserParamsInput }) => Promise<FetchUserResponse>;
    updateUser: (p: {
        params: UserParamsInput;
        body: UpdateUserBodyInput;
    }) => Promise<UpdateUserResponse>;
    updateUserPassword: (p: {
        params: UserParamsInput;
        body: UpdateUserPasswordBodyInput;
    }) => Promise<FetchUserResponse>;
    deleteInvitedUser: (p: {
        params: UserParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchUserResponse>;
    deleteUser: (p: { params: UserParamsInput }) => Promise<FetchUserResponse>;
    toggleUserStatus: (p: {
        params: UserParamsInput;
    }) => Promise<FetchUserResponse>;
    getUsers: (p: {
        query: FetchUsersQueryInput;
    }) => Promise<FetchUsersResponse>;
    inviteUser: (p: {
        body: InviteUserBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchUserResponse>;
    checkIfUserExists: (p: Prisma.UserFindFirstArgs) => Promise<boolean>;
    checkIfTeamExists: (p: Prisma.TeamFindFirstArgs) => Promise<boolean>;
};

export const createService = (
    userRepository: UserRepository,
    notificationRepository: NotificationRepository,
    jwt: JWT,
    log: FastifyBaseLogger,
    gcpService: GcpService,
    teamRepository: TeamRepository,
    applicationService: ApplicationService
): UserService => {
    const getUser = async (
        userId: string
    ): Promise<FetchUserResponse["data"]["user"]> => {
        const [user, unReadNotifications] = await Promise.all([
            userRepository.findUniqueOrFail({
                where: {
                    id: userId,
                    notificationPreferences: {
                        isNot: null,
                    },
                },
                select: defaultUserSelector,
            }),
            notificationRepository.count({
                where: {
                    userId,
                    readAt: null,
                },
            }),
        ]);

        const notificationPreferences = user.notificationPreferences;

        if (!notificationPreferences) {
            throw new InternalServerError(
                "User doesn't have notification preferences, pls contact tech support"
            );
        }

        return {
            ...user,
            unReadNotifications,
            notificationPreferences,
        };
    };

    const checkIfUserExists = async (args: Prisma.UserFindFirstArgs) => {
        const existedUser = await userRepository.findFirst(args);

        if (existedUser) {
            if (existedUser.email === args.where?.email) {
                throw new ConflictError("User with such email already exists");
            }

            if (existedUser.phoneNumber === args.where?.phoneNumber) {
                throw new ConflictError(
                    "User with such phone number already exists"
                );
            }

            throw new ConflictError(
                "User with such credentials already exists"
            );
        }

        return false;
    };

    const checkIfTeamExists = async (args: Prisma.TeamFindFirstArgs) => {
        const existedTeam = await teamRepository.findFirst(args);

        if (existedTeam) {
            throw new ConflictError("Team with such name already exists");
        }

        return false;
    };

    return {
        checkIfUserExists,
        checkIfTeamExists,
        updateUser: async ({ params, body }) => {
            await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                },
            });

            if (body.email || body.phoneNumber) {
                await checkIfUserExists({
                    where: {
                        OR: [
                            ...(body.email
                                ? [
                                    {
                                        email: body.email,
                                    },
                                ]
                                : []),
                            ...(body.phoneNumber
                                ? [
                                    {
                                        phoneNumber: body.phoneNumber,
                                    },
                                ]
                                : []),
                        ],
                    },
                });
            }

            let avatarPayload:
                | (Pick<Avatar, "url" | "key" | "expiredAt"> & {
                      uploadUrl: string;
                  })
                | null = null;

            if (body.avatar) {
                const { key, url: uploadUrl } = await gcpService.uploadFile({
                    keyPayload: {
                        type: FileTypes.AVATAR,
                        userId: params.userId,
                    },
                    mimeType: body.avatar.mimeType,
                });

                const { url, expiredAt } = await gcpService.getFileUrl({
                    key,
                    type: FileTypes.AVATAR,
                });

                avatarPayload = {
                    url,
                    key,
                    expiredAt,
                    uploadUrl,
                };
            }

            await userRepository.update({
                where: {
                    id: params.userId,
                },
                data: {
                    fullName: body.fullName,
                    email: body.email,
                    phoneNumber: body.phoneNumber,
                    ...(body.avatar &&
                        avatarPayload && {
                        avatar: {
                            create: {
                                key: avatarPayload.key,
                                fileSize: body.avatar.fileSize,
                                mimeType: body.avatar.mimeType,
                                url: avatarPayload.url,
                                expiredAt: avatarPayload.expiredAt,
                                width: body.avatar.width,
                                height: body.avatar.height,
                            },
                            update: {
                                key: avatarPayload.key,
                                fileSize: body.avatar.fileSize,
                                mimeType: body.avatar.mimeType,
                                url: avatarPayload.url,
                                expiredAt: avatarPayload.expiredAt,
                                width: body.avatar.width,
                                height: body.avatar.height,
                            },
                        },
                    }),
                    ...(body.notificationPreferences && {
                        notificationPreferences: {
                            update: {
                                teamNews: body.notificationPreferences.teamNews,
                                documentNews:
                                    body.notificationPreferences.documentNews,
                                inAppNotifications:
                                    body.notificationPreferences
                                        .inAppNotifications,
                                emailNotifications:
                                    body.notificationPreferences
                                        .emailNotifications,
                            },
                        },
                    }),
                },
                select: defaultUserSelector,
            });

            const user = await getUser(params.userId);

            return {
                message: "User updated successfully.",
                data: { user, uploadUrl: avatarPayload?.uploadUrl || null },
            };
        },

        updateUserPassword: async ({ params, body }) => {
            const userToUpdate = await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                },
            });

            const isValidPassword = await hashing.comparePassword(
                body.oldPassword,
                userToUpdate.password
            );

            if (!isValidPassword) {
                throw new ConflictError("Invalid password");
            }

            const password = await hashing.hashPassword(body.password);

            await userRepository.update({
                where: {
                    id: params.userId,
                },
                data: {
                    password,
                },
                select: defaultUserSelector,
            });

            const user = await getUser(params.userId);

            return {
                message: "User password updated successfully.",
                data: { user },
            };
        },

        inviteUser: async ({ body, initiator }) => {
            const role = invitedRoles[initiator.role];

            if (!role) {
                throw new ForbiddenError("Forbidden");
            }

            if (initiator.role === UserRoles.USER && !body.teamId) {
                throw new BadRequestError("Team id is required");
            }

            if (initiator.role !== UserRoles.USER) {
                body.teamId = undefined;
            }

            let team: Team | null = null;

            if (body.teamId) {
                team = await teamRepository.findUniqueOrFail({
                    where: {
                        id: body.teamId,
                    },
                });
            }

            await checkIfUserExists({
                where: {
                    OR: [
                        {
                            email: body.email,
                        },
                        {
                            phoneNumber: body.phoneNumber,
                        },
                    ],
                },
            });

            const invitedUser = await userRepository.create({
                data: {
                    role,
                    status: UserStatuses.INVITED,
                    fullName: body.fullName,
                    email: body.email,
                    phoneNumber: body.phoneNumber,
                    password: "",
                    ...(body.teamId && {
                        teamMembers: {
                            create: {
                                teamId: body.teamId,
                                role: TeamMemberRole.STAFF,
                            },
                        },
                    }),
                    notificationPreferences: {
                        create: {
                            teamNews: true,
                            documentNews: true,
                            inAppNotifications: true,
                            emailNotifications: true,
                        },
                    },
                },
                select: defaultUserSelector,
            });

            const invitationId = jwt.sign({
                id: invitedUser.id,
            });

            const user = await getUser(invitedUser.id);

            // TODO
            console.log(invitationId);

            if (team) {
                const activityLogRepository =
                    await applicationService.initActionLogRepository(team.id);

                await withRepositories(
                    [activityLogRepository],
                    (activityLogRepo) =>
                        activityLogRepo.create({
                            data: {
                                type: ActionLogTypes.INVITE_USER,
                                actorId: initiator.id,
                                actorFullName: initiator.fullName,
                                actorAvatarUrl: initiator.avatar?.url,
                                userId: user.id,
                                userFullName: user.fullName,
                                userAvatarUrl: user.avatar?.url,
                            },
                        })
                );
            }

            return {
                message: "User invited successfully.",
                data: { user },
            };
        },

        deleteInvitedUser: async ({ params, initiator }) => {
            await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                    status: UserStatuses.INVITED,
                },
            });

            const user = await getUser(params.userId);

            const deletedUser = await userRepository.delete({
                where: {
                    id: params.userId,
                    status: UserStatuses.INVITED,
                },
                select: {
                    ...defaultUserSelector,
                    teamMembers: {
                        where: {
                            team: {
                                teamMembers: {
                                    some: {
                                        userId: initiator.id,
                                    },
                                },
                            },
                        },
                    },
                },
            });

            const teamId = deletedUser.teamMembers[0].teamId;

            if (teamId) {
                const activityLogRepository =
                    await applicationService.initActionLogRepository(teamId);

                await withRepositories(
                    [activityLogRepository],
                    (activityLogRepo) =>
                        activityLogRepo.create({
                            data: {
                                type: ActionLogTypes.DELETE_USER,
                                actorId: initiator.id,
                                actorFullName: initiator.fullName,
                                actorAvatarUrl: initiator.avatar?.url,
                                userId: deletedUser.id,
                                userFullName: deletedUser.fullName,
                                userAvatarUrl: deletedUser.avatar?.url,
                            },
                        })
                );
            }

            return {
                message: "Invitation deleted successfully.",
                data: { user },
            };
        },

        deleteUser: async ({ params }) => {
            await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                },
            });

            const user = await getUser(params.userId);

            const deletedUser = await userRepository.delete({
                where: {
                    id: params.userId,
                },
                select: {
                    ...defaultUserSelector,
                    teamMembers: {
                        select: {
                            teamId: true,
                        },
                    },
                },
            });

            if (deletedUser.avatar) {
                try {
                    await gcpService.deleteFile(deletedUser.avatar.key);
                } catch (error) {
                    log.error({ error }, "Failed to delete user avatar");
                }
            }

            for (const { teamId } of deletedUser.teamMembers) {
                try {
                    const actionLogRepository =
                        await applicationService.initActionLogRepository(
                            teamId
                        );

                    await withRepositories(
                        [actionLogRepository],
                        (actionLogRepo) =>
                            actionLogRepo.create({
                                data: {
                                    type: ActionLogTypes.DELETE_HIMSELF,
                                    actorId: user.id,
                                    actorAvatarUrl: user.avatar?.url || null,
                                    actorFullName: user.fullName,
                                    userId: user.id,
                                    userAvatarUrl: user.avatar?.url || null,
                                    userFullName: user.fullName,
                                },
                            })
                    );
                } catch (error) {
                    log.error(
                        { error },
                        "Failed to create DELETE_HIMSELF action log"
                    );
                }
            }

            return {
                message: "User deleted successfully.",
                data: { user },
            };
        },

        toggleUserStatus: async ({ params }) => {
            const userToUpdate = await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                },
            });

            await userRepository.update({
                where: {
                    id: params.userId,
                },
                data: {
                    status: toggleStatuses[userToUpdate.status],
                },
            });

            const user = await getUser(params.userId);

            return {
                message: "User status updated successfully.",
                data: { user },
            };
        },

        getUser: async ({ params }) => {
            const user = await getUser(params.userId);

            return {
                message: "User fetched successfully.",
                data: { user },
            };
        },

        getUsers: async ({ query }) => {
            const skip = (query.page - 1) * query.perPage;

            const where: Prisma.UserWhereInput = {
                ...(query.statuses && {
                    status: {
                        in: query.statuses,
                    },
                }),
                notificationPreferences: {
                    isNot: null,
                },
                ...(query.roles && {
                    role: {
                        in: query.roles,
                    },
                }),
                ...(query.search && {
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
                }),
            };

            const [users, total] = await Promise.all([
                userRepository.findMany({
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
                    select: defaultUserSelector,
                }),
                userRepository.count({
                    where,
                }),
            ]);

            const totalPages = Math.ceil(total / query.perPage);
            const prevPage = query.page > 1 ? query.page - 1 : null;
            const nextPage = query.page < totalPages ? query.page + 1 : null;

            return {
                message: "Users fetched successfully.",
                data: {
                    users: users.map((user) => ({
                        ...user,
                        notificationPreferences: user.notificationPreferences!,
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
    };
};

addDIResolverName(createService, "userService");
