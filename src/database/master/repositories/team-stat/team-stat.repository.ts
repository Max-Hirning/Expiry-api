import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultTeamStatSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    totalDocuments: true,
    processingDocuments: true,
    activeDocuments: true,
    archivedDocuments: true,
    failedDocuments: true,
    needsReviewDocuments: true,
    highRiskDocuments: true,
    mediumRiskDocuments: true,
    lowRiskDocuments: true,
    expiringSoonDocuments: true,
    teamId: true,
} satisfies Prisma.TeamStatSelect;

export type TeamStatRepository = BaseRepository<"teamStat"> & {
    findUniqueOrFail: <TArgs extends Prisma.TeamStatFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.TeamStatGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.TeamStatFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.TeamStatGetPayload<TArgs>>;
};

export const createTeamStatRepository = ({
    master: prisma,
}: FastifyInstance["prisma"]): TeamStatRepository => {
    const repository = generateRepository(prisma, "TeamStat");

    return {
        ...repository,
        findUniqueOrFail: async <TArgs extends Prisma.TeamStatFindUniqueArgs>(
            args: TArgs
        ) => {
            const team = await prisma.teamStat.findUnique(args);

            if (!team) {
                throw new NotFoundError("Team stat not found.");
            }

            return team as Prisma.TeamStatGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.TeamStatFindFirstArgs>(
            args: TArgs
        ) => {
            const team = await prisma.teamStat.findFirst(args);

            if (!team) {
                throw new NotFoundError("Team stat not found.");
            }

            return team as Prisma.TeamStatGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createTeamStatRepository, "teamStatRepository");
