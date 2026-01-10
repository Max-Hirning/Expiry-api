import { randomUUID } from "crypto";
import { AuthService } from "../auth/auth.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { Prisma } from "@/database/master/generated/index.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    TeamParamsInput,
    FetchTeamResponse,
    FetchTeamsQueryInput,
    FetchTeamsResponse,
    CreateTeamBodyInput,
    UpdateTeamBodyInput,
} from "@/lib/validation/team/team.schema.js";

export type TeamService = {
    getTeam: (p: { params: TeamParamsInput }) => Promise<FetchTeamResponse>;
    deleteTeam: (p: { params: TeamParamsInput }) => Promise<FetchTeamResponse>;
    getTeams: (p: {
        query: FetchTeamsQueryInput;
    }) => Promise<FetchTeamsResponse>;
    createTeam: (p: {
        body: CreateTeamBodyInput;
    }) => Promise<FetchTeamResponse>;
    updateTeam: (p: {
        params: TeamParamsInput;
        body: UpdateTeamBodyInput;
    }) => Promise<FetchTeamResponse>;
};

export const createTeamService = (
    authService: AuthService,
    teamRepository: TeamRepository,
    prisma: FastifyInstance["prisma"],
    log: FastifyBaseLogger
): TeamService => ({
    getTeam: async ({ params }) => {
        const team = await teamRepository.findUniqueOrFail({
            where: {
                id: params.teamId,
            },
        });

        return {
            message: "Team fetched successfully.",
            data: { team },
        };
    },

    deleteTeam: async ({ params }) => {
        await teamRepository.findFirstOrFail({
            where: {
                id: params.teamId,
            },
        });

        const team = await teamRepository.delete({
            where: {
                id: params.teamId,
            },
        });

        try {
            await prisma.master.$queryRaw`
                DROP DATABASE IF EXISTS ${team.id};
            `;
        } catch (error) {
            log.error({ error }, "Failed to delete team DB");
        }

        return {
            message: "Team deleted successfully.",
            data: { team },
        };
    },

    getTeams: async ({ query }) => {
        const skip = (query.page - 1) * query.perPage;

        const where: Prisma.TeamWhereInput = {
            ...(query.search && {
                OR: [
                    {
                        name: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                    {
                        teamMembers: {
                            some: {
                                user: {
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
                                },
                            },
                        },
                    },
                ],
            }),
        };

        const [teams, total] = await Promise.all([
            teamRepository.findMany({
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
            }),
            teamRepository.count({
                where,
            }),
        ]);

        const totalPages = Math.ceil(total / query.perPage);
        const prevPage = query.page > 1 ? query.page - 1 : null;
        const nextPage = query.page < totalPages ? query.page + 1 : null;

        return {
            message: "Teams fetched successfully.",
            data: {
                teams,
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

    createTeam: async ({ body }) => {
        const teamId = randomUUID();

        await authService.checkIfTeamExists({
            where: {
                OR: [
                    {
                        id: teamId,
                    },
                    {
                        name: body.name,
                    },
                ],
            },
        });

        try {
            await prisma.master.$queryRaw`
                    DO $$
                    BEGIN
                        IF NOT EXISTS (SELECT FROM pg_database WHERE datname = ${teamId}) THEN
                            EXECUTE format('CREATE DATABASE %I', ${teamId});
                        END IF;
                    END
                    $$;
                `;

            const team = await teamRepository.create({
                data: {
                    name: body.name,
                    ...(body.teamMembers && {
                        teamMembers: {
                            createMany: {
                                data: body.teamMembers,
                            },
                        },
                    }),
                },
            });

            return {
                message: "Team created successfully.",
                data: {
                    team,
                },
            };
        } catch (error) {
            await prisma.master.$queryRaw`
                DROP DATABASE IF EXISTS ${teamId};
            `;

            throw error;
        }
    },

    updateTeam: async ({ params, body }) => {
        const team = await teamRepository.update({
            where: {
                id: params.teamId,
            },
            data: {
                name: body.name,
                ...((body.teamMembers || body.teamMembersToDeleteIds) && {
                    teamMembers: {
                        ...(body.teamMembersToDeleteIds && {
                            deleteMany: {
                                id: {
                                    in: body.teamMembersToDeleteIds,
                                },
                            },
                        }),
                        ...(body.teamMembers && {
                            createMany: {
                                data: body.teamMembers,
                            },
                        }),
                    },
                }),
            },
        });

        return {
            message: "Team created successfully.",
            data: {
                team,
            },
        };
    },
});

addDIResolverName(createTeamService, "teamService");
