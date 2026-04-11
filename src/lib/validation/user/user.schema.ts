import { z } from "zod";
import { defaultAvatarSchema } from "../avatar/avatar.schema.js";
import { Prisma, TeamMemberRoles } from "@/database/master/generated/edge.js";
import {
    UserStatuses,
    UserRoles,
    MfaTypes,
} from "@/database/master/generated/client.js";
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
    lastLoginAt: z.date().nullable(),
    lastSeenAt: z.date().nullable(),
    invitedAt: z.date().nullable(),
    phoneNumber: z.string(),
    mfaType: z.enum(MfaTypes).nullable(),
    role: z.enum(UserRoles),
    status: z.enum(UserStatuses),
    avatar: defaultAvatarSchema.nullable(),
    notificationPreferences: defaultNotificationPreferenceSchema,
    unReadNotifications: z.int(),
    isOnline: z.boolean(),
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
        mfaType: true,
        phoneNumber: true,
    })
    .extend({
        notificationPreferences: defaultNotificationPreferenceSchema.pick({
            teamNews: true,
            documentNews: true,
            inAppNotifications: true,
            emailNotifications: true,
        }),
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
        user: defaultUserSchema.extend({
            teamMembers: z.record(z.uuid(), z.enum(TeamMemberRoles)),
        }),
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
        sortOrder: z.enum(Prisma.SortOrder).default(Prisma.SortOrder.desc),
        sortField: z
            .enum(Prisma.UserScalarFieldEnum)
            .default(Prisma.UserScalarFieldEnum.createdAt),
        statuses: z.union([
            z.enum(UserStatuses).transform((val) => [val]),
            z.array(z.enum(UserStatuses)),
        ]),
        roles: z.union([
            z.enum(UserRoles).transform((val) => [val]),
            z.array(z.enum(UserRoles)),
        ]),
        omitUsersIds: z.union([
            z.uuid().transform((val) => [val]),
            z.array(z.uuid()),
        ]),
        teamId: z.uuid(),
    })
    .partial()
    .required({
        limit: true,
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
            defaultUserSchema
                .omit({
                    unReadNotifications: true,
                })
                .extend({
                    position: z.enum(TeamMemberRoles).nullable(),
                })
        ),
        pagination: paginationResponseSchema,
    }),
});

type FetchUsersResponse = z.infer<typeof fetchUsersResponseSchema>;

const updateTeamMemberRolesParamsSchema = z.object({
    teamId: z.uuid(),
    userId: z.uuid(),
});

type UpdateTeamMemberRolesParamsInput = z.infer<
    typeof updateTeamMemberRolesParamsSchema
>;

const updateTeamMemberRolesBodySchema = z.object({
    role: z.enum(TeamMemberRoles),
});

type UpdateTeamMemberRolesBodyInput = z.infer<
    typeof updateTeamMemberRolesBodySchema
>;

const updateTeamMemberRolesResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        id: z.uuid(),
        role: z.enum(TeamMemberRoles),
    }),
});

type UpdateTeamMemberRolesResponse = z.infer<
    typeof updateTeamMemberRolesResponseSchema
>;

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
    updateTeamMemberRolesParamsSchema,
    updateTeamMemberRolesBodySchema,
    updateTeamMemberRolesResponseSchema,
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
    UpdateTeamMemberRolesParamsInput,
    UpdateTeamMemberRolesBodyInput,
    UpdateTeamMemberRolesResponse,
};
