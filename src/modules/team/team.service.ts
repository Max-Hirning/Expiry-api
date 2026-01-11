import { randomUUID } from "crypto";
import { EnvConfig } from "@/types/env.type.js";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { AuthService } from "../auth/auth.service.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { migrateTenantDatabase } from "@/database/infra/tenant.js";
import { Logo, Prisma, User } from "@/database/master/generated/index.js";
import {
    defaultTeamSelector,
    TeamRepository,
} from "@/database/master/repositories/team/team.repository.js";
import {
    TeamParamsInput,
    FetchTeamResponse,
    FetchTeamsQueryInput,
    FetchTeamsResponse,
    CreateTeamBodyInput,
    UpdateTeamBodyInput,
    CreateTeamResponse,
    UpdateTeamResponse,
} from "@/lib/validation/team/team.schema.js";

export type TeamService = {
    getTeam: (p: {
        params: TeamParamsInput;
        initiator: Pick<User, "id" | "role">;
    }) => Promise<FetchTeamResponse>;
    deleteTeam: (p: {
        params: TeamParamsInput;
        initiator: Pick<User, "id" | "role">;
    }) => Promise<FetchTeamResponse>;
    getTeams: (p: {
        query: FetchTeamsQueryInput;
        initiator: Pick<User, "id" | "role">;
    }) => Promise<FetchTeamsResponse>;
    createTeam: (p: {
        body: CreateTeamBodyInput;
        initiator: Pick<User, "id" | "role">;
    }) => Promise<CreateTeamResponse>;
    updateTeam: (p: {
        params: TeamParamsInput;
        body: UpdateTeamBodyInput;
        initiator: Pick<User, "id" | "role">;
    }) => Promise<UpdateTeamResponse>;
};

export const createTeamService = (
    authService: AuthService,
    gcpService: GcpService,
    config: EnvConfig,
    teamRepository: TeamRepository,
    prisma: FastifyInstance["prisma"],
    log: FastifyBaseLogger
): TeamService => ({
    getTeam: async ({ params }) => {
        const team = await teamRepository.findUniqueOrFail({
            where: {
                id: params.teamId,
            },
            select: defaultTeamSelector,
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
            select: defaultTeamSelector,
        });

        try {
            await prisma.master.$queryRaw`
                DROP DATABASE IF EXISTS ${team.id};
            `;
        } catch (error) {
            log.error({ error }, "Failed to delete team DB");
        }

        if (team.logo) {
            try {
                await gcpService.deleteFile(team.logo.key);
            } catch (error) {
                log.error({ error }, "Failed to delete team logo");
            }
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
                select: defaultTeamSelector,
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

        let logoPayload:
            | (Pick<Logo, "url" | "key" | "expiredAt"> & {
                  uploadUrl: string;
              })
            | null = null;

        try {
            if (body.logo) {
                const { key, url: uploadUrl } = await gcpService.uploadFile({
                    keyPayload: {
                        type: FileTypes.LOGO,
                        teamId: teamId,
                    },
                    mimeType: body.logo.mimeType,
                });

                const { url, expiredAt } = await gcpService.getFileUrl({
                    key,
                    type: FileTypes.AVATAR,
                });

                logoPayload = {
                    url,
                    key,
                    expiredAt,
                    uploadUrl,
                };
            }

            await prisma.master.$queryRaw`
                    DO $$
                    BEGIN
                        IF NOT EXISTS (SELECT FROM pg_database WHERE datname = ${teamId}) THEN
                            EXECUTE format('CREATE DATABASE %I', ${teamId});
                        END IF;
                    END
                    $$;
                `;

            await migrateTenantDatabase(
                config.DATABASE_URL.replace("/postgres", `/${teamId}`)
            );

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
                    ...(body.logo &&
                        logoPayload && {
                        logo: {
                            create: {
                                key: logoPayload.key,
                                fileSize: body.logo.fileSize,
                                mimeType: body.logo.mimeType,
                                url: logoPayload.url,
                                expiredAt: logoPayload.expiredAt,
                                width: body.logo.width,
                                height: body.logo.height,
                            },
                        },
                    }),
                },
                select: defaultTeamSelector,
            });

            return {
                message: "Team created successfully.",
                data: {
                    team,
                    uploadUrl: logoPayload?.uploadUrl || null,
                },
            };
        } catch (error) {
            try {
                await prisma.master.$queryRaw`
                    DROP DATABASE IF EXISTS ${teamId};
                `;
            } catch (error) {
                log.error({ error }, "Failed to delete team DB");
            }

            if (logoPayload) {
                try {
                    await gcpService.deleteFile(logoPayload.key);
                } catch (error) {
                    log.error({ error }, "Failed to delete team logo");
                }
            }

            throw error;
        }
    },

    updateTeam: async ({ params, body }) => {
        let logoPayload:
            | (Pick<Logo, "url" | "key" | "expiredAt"> & {
                  uploadUrl: string;
              })
            | null = null;

        if (body.logo) {
            const { key, url: uploadUrl } = await gcpService.uploadFile({
                keyPayload: {
                    type: FileTypes.LOGO,
                    teamId: params.teamId,
                },
                mimeType: body.logo.mimeType,
            });

            const { url, expiredAt } = await gcpService.getFileUrl({
                key,
                type: FileTypes.AVATAR,
            });

            logoPayload = {
                url,
                key,
                expiredAt,
                uploadUrl,
            };
        }

        const team = await teamRepository.update({
            where: {
                id: params.teamId,
            },
            data: {
                name: body.name,
                ...(body.logo &&
                    logoPayload && {
                    logo: {
                        create: {
                            key: logoPayload.key,
                            fileSize: body.logo.fileSize,
                            mimeType: body.logo.mimeType,
                            url: logoPayload.url,
                            expiredAt: logoPayload.expiredAt,
                            width: body.logo.width,
                            height: body.logo.height,
                        },
                        update: {
                            key: logoPayload.key,
                            fileSize: body.logo.fileSize,
                            mimeType: body.logo.mimeType,
                            url: logoPayload.url,
                            expiredAt: logoPayload.expiredAt,
                            width: body.logo.width,
                            height: body.logo.height,
                        },
                    },
                }),
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
            select: defaultTeamSelector,
        });

        return {
            message: "Team updated successfully.",
            data: {
                team,
                uploadUrl: logoPayload?.uploadUrl || null,
            },
        };
    },
});

addDIResolverName(createTeamService, "teamService");
