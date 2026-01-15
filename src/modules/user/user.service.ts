import { JWT } from "@fastify/jwt";
import { hashing } from "@/lib/hashing/hashing.js";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { AuthService } from "../auth/auth.service.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyRequest } from "fastify";
import { withRepositories } from "@/lib/utils/repository.js";
import { invitedRoles, toggleStatuses } from "./user.constants.js";
import { ActionLogTypes } from "@/database/team/generated/index.js";
import { ApplicationService } from "../application/application.service.js";
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
};

export const createService = (
    userRepository: UserRepository,
    authService: AuthService,
    jwt: JWT,
    log: FastifyBaseLogger,
    gcpService: GcpService,
    applicationService: ApplicationService
): UserService => {
    const getUser = async (
        userId: string
    ): Promise<FetchUserResponse["data"]["user"]> => {
        const user = await userRepository.findUniqueOrFail({
            where: {
                id: userId,
                notificationPreferences: {
                    isNot: null,
                },
            },
            select: defaultUserSelector,
        });

        const notificationPreferences = user.notificationPreferences;

        if (!notificationPreferences) {
            throw new InternalServerError(
                "User doesn't have notification preferences, pls contact tech support"
            );
        }

        return {
            ...user,
            notificationPreferences,
        };
    };

    return {
        updateUser: async ({ params, body }) => {
            await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                },
            });

            if (body.email || body.phoneNumber) {
                await authService.checkIfUserExists({
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

            await authService.checkIfUserExists({
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
                            offerUpdates: true,
                            companyNews: true,
                            comments: true,
                            purchases: true,
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

            if (body.teamId) {
                const activityLogRepository =
                    await applicationService.initActionLogRepository(
                        body.teamId
                    );

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
                select: defaultUserSelector,
            });

            if (deletedUser.avatar) {
                try {
                    await gcpService.deleteFile(deletedUser.avatar.key);
                } catch (error) {
                    log.error({ error }, "Failed to delete user avatar");
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
