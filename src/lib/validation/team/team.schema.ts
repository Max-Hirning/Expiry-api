import { z } from "zod";
import { defaultLogoSchema } from "../logo/logo.schema.js";
import { Prisma, TeamMemberRole } from "@/database/master/generated/edge.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

const defaultTeamSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    logo: defaultLogoSchema.nullable(),
});

const teamParamsSchema = z.object({
    teamId: z.uuid(),
});

type TeamParamsInput = z.infer<typeof teamParamsSchema>;

const createTeamBodySchema = defaultTeamSchema
    .pick({
        name: true,
    })
    .extend({
        teamMembers: z
            .array(
                z.object({
                    userId: z.uuid(),
                    role: z.enum(TeamMemberRole),
                })
            )
            .optional(),
        logo: defaultLogoSchema
            .pick({
                mimeType: true,
                fileSize: true,
                width: true,
                height: true,
            })
            .optional(),
    });

type CreateTeamBodyInput = z.infer<typeof createTeamBodySchema>;

const updateTeamBodySchema = createTeamBodySchema.partial().extend({
    teamMembersToDeleteIds: z.array(z.uuid()).optional(),
});

type UpdateTeamBodyInput = z.infer<typeof updateTeamBodySchema>;

const createTeamResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        team: defaultTeamSchema,
        uploadUrl: z.url().nullable(),
    }),
});

type CreateTeamResponse = z.infer<typeof createTeamResponseSchema>;

const updateTeamResponseSchema = createTeamResponseSchema;

type UpdateTeamResponse = z.infer<typeof updateTeamResponseSchema>;

const fetchTeamResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        team: defaultTeamSchema,
    }),
});

type FetchTeamResponse = z.infer<typeof fetchTeamResponseSchema>;

const fetchTeamsQuerySchema = paginationQuerySchema
    .extend({
        search: z.string(),
        sortOrder: z.enum(Prisma.SortOrder),
        sortField: z.enum(Prisma.TeamScalarFieldEnum),
    })
    .partial()
    .required({
        page: true,
        perPage: true,
    });

type FetchTeamsQueryInput = z.infer<typeof fetchTeamsQuerySchema>;

const fetchTeamsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        teams: z.array(defaultTeamSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchTeamsResponse = z.infer<typeof fetchTeamsResponseSchema>;

export {
    fetchTeamResponseSchema,
    fetchTeamsResponseSchema,
    createTeamResponseSchema,
    updateTeamResponseSchema,
    teamParamsSchema,
    createTeamBodySchema,
    updateTeamBodySchema,
    defaultTeamSchema,
    fetchTeamsQuerySchema,
};

export type {
    FetchTeamResponse,
    FetchTeamsResponse,
    TeamParamsInput,
    CreateTeamResponse,
    UpdateTeamResponse,
    CreateTeamBodyInput,
    UpdateTeamBodyInput,
    FetchTeamsQueryInput,
};
