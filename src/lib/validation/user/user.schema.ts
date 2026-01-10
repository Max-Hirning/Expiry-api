import { z } from "zod";
import { Prisma } from "@/database/master/generated/edge.js";
import { UserStatuses, UserRoles } from "@/database/master/generated/client.js";

const defaultUserSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    fullName: z.string(),
    email: z.email(),
    phoneNumber: z.string(),
    role: z.enum(UserRoles),
    status: z.enum(UserStatuses),
});

const userParamsSchema = z.object({
    userId: z.uuid(),
});

type UserParamsInput = z.infer<typeof userParamsSchema>;

const fetchUserResponseSchema = z.object({
    user: z.string(),
    data: z.object({
        user: defaultUserSchema,
    }),
});

type FetchUserResponse = z.infer<typeof fetchUserResponseSchema>;

const fetchUsersQuerySchema = z
    .object({
        page: z.int(),
        search: z.string(),
        perPage: z.int().max(25),
        sortOrder: z.enum(Prisma.SortOrder),
        sortField: z.enum(Prisma.UserScalarFieldEnum),
        statuses: z.union([
            z.enum(UserStatuses).transform((val) => [val]),
            z.array(z.enum(UserStatuses)),
        ]),
        roles: z.union([
            z.enum(UserRoles).transform((val) => [val]),
            z.array(z.enum(UserRoles)),
        ]),
    })
    .partial()
    .required({
        page: true,
        perPage: true,
    });

type FetchUsersQueryInput = z.infer<typeof fetchUsersQuerySchema>;

const fetchUsersResponseSchema = z.object({
    user: z.string(),
    data: z.object({
        users: z.array(defaultUserSchema),
        pagination: z.object({
            perPage: z.int(),
            page: z.int(),
            prevPage: z.int().nullable(),
            nextPage: z.int().nullable(),
            total: z.int(),
            totalPages: z.int(),
        }),
    }),
});

type FetchUsersResponse = z.infer<typeof fetchUsersResponseSchema>;

export {
    fetchUserResponseSchema,
    fetchUsersResponseSchema,
    userParamsSchema,
    defaultUserSchema,
    fetchUsersQuerySchema,
};

export type {
    FetchUserResponse,
    FetchUsersResponse,
    UserParamsInput,
    FetchUsersQueryInput,
};
