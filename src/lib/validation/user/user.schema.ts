import { z } from "zod";
import { Prisma } from "@/database/master/generated/edge.js";
import { defaultAvatarSchema } from "../avatar/avatar.schema.js";
import { UserStatuses, UserRoles } from "@/database/master/generated/client.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";
import { defaultNotificationPreferenceSchema } from "../notification-preference/notification-preference.schema.js";

const defaultUserSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    fullName: z.string(),
    email: z.email(),
    phoneNumber: z.string(),
    role: z.enum(UserRoles),
    status: z.enum(UserStatuses),
    avatar: defaultAvatarSchema.nullable(),
    notificationPreferences: defaultNotificationPreferenceSchema,
    unReadNotifications: z.int(),
});

const inviteUserBodySchema = defaultUserSchema
    .pick({
        fullName: true,
        email: true,
        phoneNumber: true,
    })
    .extend({
        teamId: z.uuid().optional(),
    });

type InviteUserBodyInput = z.infer<typeof inviteUserBodySchema>;

const updateUserBodySchema = defaultUserSchema
    .pick({
        fullName: true,
        email: true,
        phoneNumber: true,
        notificationPreferences: true,
    })
    .extend({
        avatar: defaultAvatarSchema.pick({
            mimeType: true,
            width: true,
            height: true,
            fileSize: true,
        }),
    })
    .partial();

type UpdateUserBodyInput = z.infer<typeof updateUserBodySchema>;

const updateUserPasswordBodySchema = z.object({
    oldPassword: z.string(),
    password: z.string(),
});

type UpdateUserPasswordBodyInput = z.infer<typeof updateUserPasswordBodySchema>;

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

const updateUserResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        user: defaultUserSchema,
        uploadUrl: z.url().nullable(),
    }),
});

type UpdateUserResponse = z.infer<typeof updateUserResponseSchema>;

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
        users: z.array(
            defaultUserSchema.omit({
                unReadNotifications: true,
            })
        ),
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
    updateUserResponseSchema,
    updateUserPasswordBodySchema,
    updateUserBodySchema,
    fetchUsersQuerySchema,
};

export type {
    FetchUserResponse,
    FetchUsersResponse,
    InviteUserBodyInput,
    FetchInvitedUserQueryInput,
    UpdateUserResponse,
    UpdateUserPasswordBodyInput,
    UpdateUserBodyInput,
    UserParamsInput,
    FetchUsersQueryInput,
};
