import { FastifyInstance } from "fastify";
import { EnvConfig } from "@/types/env.type.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    createDocumentRepository,
    DocumentRepository,
} from "@/database/team/repositories/document/docuement.repository.js";

export type ApplicationService = {
    healthChecker: () => Promise<string>;
    initDocumentRepository: (teamId: string) => Promise<DocumentRepository>;
};

export const createApplicationService = (
    teamRepository: TeamRepository,
    config: EnvConfig,
    prisma: FastifyInstance["prisma"]
): ApplicationService => ({
    healthChecker: async () => {
        return "pong";
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
