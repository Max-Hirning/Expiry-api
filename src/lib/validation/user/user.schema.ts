import { z } from "zod";
import { Prisma } from "@/database/master/generated/edge.js";
import { UserStatuses, UserRoles } from "@/database/master/generated/client.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

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

const inviteUserBodySchema = defaultUserSchema
    .pick({
        fullName: true,
        email: true,
        phoneNumber: true,
    })
    .extend({
        teamId: z.uuid(),
    });

type InviteUserBodyInput = z.infer<typeof inviteUserBodySchema>;

const userParamsSchema = z.object({
    userId: z.uuid(),
});

type UserParamsInput = z.infer<typeof userParamsSchema>;

const fetchUserResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        user: defaultUserSchema,
    }),
});

type FetchUserResponse = z.infer<typeof fetchUserResponseSchema>;

const fetchUsersQuerySchema = paginationQuerySchema
    .extend({
        search: z.string(),
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

const fetchInvitedUserQuerySchema = z.object({
    invitationId: z.string(),
});

type FetchInvitedUserQueryInput = z.infer<typeof fetchInvitedUserQuerySchema>;

const fetchUsersResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        users: z.array(defaultUserSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchUsersResponse = z.infer<typeof fetchUsersResponseSchema>;

export {
    fetchUserResponseSchema,
    fetchUsersResponseSchema,
    userParamsSchema,
    inviteUserBodySchema,
    fetchInvitedUserQuerySchema,
    defaultUserSchema,
    fetchUsersQuerySchema,
};

export type {
    FetchUserResponse,
    FetchUsersResponse,
    InviteUserBodyInput,
    FetchInvitedUserQueryInput,
    UserParamsInput,
    FetchUsersQueryInput,
};
