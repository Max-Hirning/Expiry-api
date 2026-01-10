import { JWT } from "@fastify/jwt";
import { hashing } from "@/lib/hashing/hashing.js";
import { AuthService } from "../auth/auth.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { ConflictError, InternalServerError } from "@/lib/errors/errors.js";
import {
    Prisma,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/edge.js";
import {
    defaultUserSelector,
    UserRepository,
} from "@/database/master/repositories/user/user.repository.js";
import {
    FetchUserResponse,
    FetchUsersQueryInput,
    FetchUsersResponse,
    InviteUserBodyInput,
    UpdateUserBodyInput,
    UpdateUserPasswordBodyInput,
    UserParamsInput,
} from "@/lib/validation/user/user.schema.js";

export type UserService = {
    getUser: (p: { params: UserParamsInput }) => Promise<FetchUserResponse>;
    updateUser: (p: {
        params: UserParamsInput;
        body: UpdateUserBodyInput;
    }) => Promise<FetchUserResponse>;
    updateUserPassword: (p: {
        params: UserParamsInput;
        body: UpdateUserPasswordBodyInput;
    }) => Promise<FetchUserResponse>;
    deleteInvitedUser: (p: {
        params: UserParamsInput;
    }) => Promise<FetchUserResponse>;
    deleteUser: (p: { params: UserParamsInput }) => Promise<FetchUserResponse>;
    getUsers: (p: {
        query: FetchUsersQueryInput;
    }) => Promise<FetchUsersResponse>;
    inviteUser: (p: {
        body: InviteUserBodyInput;
    }) => Promise<FetchUserResponse>;
};

export const createService = (
    userRepository: UserRepository,
    authService: AuthService,
    jwt: JWT
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

            await userRepository.update({
                where: {
                    id: params.userId,
                },
                data: {
                    fullName: body.fullName,
                    email: body.email,
                    status: body.status,
                    phoneNumber: body.phoneNumber,
                    ...(body.avatar && {
                        avatar: {
                            update: {
                                mimeType: body.avatar.mimeType,
                                fileSize: body.avatar.fileSize,
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
                data: { user },
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

        inviteUser: async ({ body }) => {
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
                    role: UserRoles.USER,
                    status: UserStatuses.INVITED,
                    fullName: body.fullName,
                    email: body.email,
                    phoneNumber: body.phoneNumber,
                    password: "",
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

            return {
                message: "User invited successfully.",
                data: { user },
            };
        },

        deleteInvitedUser: async ({ params }) => {
            await userRepository.findFirstOrFail({
                where: {
                    id: params.userId,
                    status: UserStatuses.INVITED,
                },
            });

            const user = await getUser(params.userId);

            await userRepository.delete({
                where: {
                    id: params.userId,
                    status: UserStatuses.INVITED,
                },
                select: defaultUserSelector,
            });

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

            await userRepository.delete({
                where: {
                    id: params.userId,
                },
                select: defaultUserSelector,
            });

            return {
                message: "User deleted successfully.",
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
