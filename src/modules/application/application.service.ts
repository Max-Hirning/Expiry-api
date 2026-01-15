import { FastifyInstance } from "fastify";
import { EnvConfig } from "@/types/env.type.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { PrismaClient as TeamPrisma } from "@/database/team/generated/index.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    createDocumentRepository,
    DocumentRepository,
} from "@/database/team/repositories/document/docuement.repository.js";
import {
    ActionLogRepository,
    createActionLogRepository,
} from "@/database/team/repositories/action-log/action-log.repository.js";

export type ApplicationService = {
    healthChecker: () => Promise<string>;
    initDocumentRepository: (teamId: string) => Promise<DocumentRepository>;
    initActionLogRepository: (teamId: string) => Promise<ActionLogRepository>;
    initTeamTenantClient: (userId: string) => Promise<TeamPrisma>;
};

export const createApplicationService = (
    teamRepository: TeamRepository,
    config: EnvConfig,
    prisma: FastifyInstance["prisma"]
): ApplicationService => ({
    healthChecker: async () => {
        return "pong";
    },
    initTeamTenantClient: async (teamId: string) => {
        return prisma.team(
            config.DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
        );
    },
    initActionLogRepository: async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createActionLogRepository(
            prisma,
            config.DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
        );

        return repository;
    },
    initDocumentRepository: async (teamId: string) => {
        await teamRepository.findUniqueOrFail({
            where: {
                id: teamId,
            },
        });

        const repository = createDocumentRepository(
            prisma,
            config.DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
        );

        return repository;
    },
});

addDIResolverName(createApplicationService, "applicationService");
