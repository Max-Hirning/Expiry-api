import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultTeamMemberSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    role: true,
    userId: true,
    teamId: true,
} satisfies Prisma.TeamMemberSelect;

export type TeamMemberRepository = BaseRepository<"teamMember"> & {
    findUniqueOrFail: <TArgs extends Prisma.TeamMemberFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.TeamMemberGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.TeamMemberFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.TeamMemberGetPayload<TArgs>>;
};

export const createTeamMemberRepository = (
    prisma: PrismaClient
): TeamMemberRepository => {
    const repository = generateRepository(prisma, "TeamMember");

    return {
        ...repository,
        findUniqueOrFail: async <TArgs extends Prisma.TeamMemberFindUniqueArgs>(
            args: TArgs
        ) => {
            const teamMember = await prisma.teamMember.findUnique(args);

            if (!teamMember) {
                throw new NotFoundError("Team member not found.");
            }

            return teamMember as Prisma.TeamMemberGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.TeamMemberFindFirstArgs>(
            args: TArgs
        ) => {
            const teamMember = await prisma.teamMember.findFirst(args);

            if (!teamMember) {
                throw new NotFoundError("Team member not found.");
            }

            return teamMember as Prisma.TeamMemberGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createTeamMemberRepository, "teamMemberRepository");
