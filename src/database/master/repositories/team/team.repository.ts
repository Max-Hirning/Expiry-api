import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultTeamSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    logo: true,
} satisfies Prisma.TeamSelect;

export type TeamRepository = BaseRepository<"team"> & {
    findUniqueOrFail: <TArgs extends Prisma.TeamFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.TeamGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.TeamFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.TeamGetPayload<TArgs>>;
};

export const createTeamRepository = ({
    master: prisma,
}: FastifyInstance["prisma"]): TeamRepository => {
    const repository = generateRepository(prisma, "Team");

    return {
        ...repository,
        findUniqueOrFail: async <TArgs extends Prisma.TeamFindUniqueArgs>(
            args: TArgs
        ) => {
            const team = await prisma.team.findUnique(args);

            if (!team) {
                throw new NotFoundError("Team not found.");
            }

            return team as Prisma.TeamGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.TeamFindFirstArgs>(
            args: TArgs
        ) => {
            const team = await prisma.team.findFirst(args);

            if (!team) {
                throw new NotFoundError("Team not found.");
            }

            return team as Prisma.TeamGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createTeamRepository, "teamRepository");
