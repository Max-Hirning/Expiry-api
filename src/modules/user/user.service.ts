import { JWT } from "@fastify/jwt";
import { AuthService } from "../auth/auth.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
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
    UserParamsInput,
} from "@/lib/validation/user/user.schema.js";

export type UserService = {
    getUser: (p: { params: UserParamsInput }) => Promise<FetchUserResponse>;
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
): UserService => ({
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

        const user = await userRepository.create({
            data: {
                role: UserRoles.USER,
                status: UserStatuses.INVITED,
                fullName: body.fullName,
                email: body.email,
                phoneNumber: body.phoneNumber,
                password: "",
            },
            select: defaultUserSelector,
        });

        const invitationId = jwt.sign({
            id: user.id,
        });

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

        const user = await userRepository.delete({
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

        const user = await userRepository.delete({
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
        const user = await userRepository.findUniqueOrFail({
            where: {
                id: params.userId,
            },
            select: defaultUserSelector,
        });

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
                users,
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
});

addDIResolverName(createService, "userService");
