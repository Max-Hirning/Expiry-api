import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/edge.js";
import { UserRepository } from "@/database/master/repositories/user/user.repository.js";
import {
    FetchUserResponse,
    FetchUsersQueryInput,
    FetchUsersResponse,
    UserParamsInput,
} from "@/lib/validation/user/user.schema.js";

export type UserService = {
    getUser: (p: { params: UserParamsInput }) => Promise<FetchUserResponse>;
    getUsers: (p: {
        query: FetchUsersQueryInput;
    }) => Promise<FetchUsersResponse>;
};

export const createService = (userRepository: UserRepository): UserService => ({
    getUser: async ({ params }) => {
        const user = await userRepository.findUniqueOrFail({
            where: {
                id: params.userId,
            },
        });

        return {
            user: "User fetched successfully.",
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
                    createdAt: Prisma.SortOrder.desc,
                },
            }),
            userRepository.count({
                where,
            }),
        ]);

        const totalPages = Math.ceil(total / query.perPage);
        const prevPage = query.page > 1 ? query.page - 1 : null;
        const nextPage = query.page < totalPages ? query.page + 1 : null;

        return {
            user: "Users fetched successfully.",
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
