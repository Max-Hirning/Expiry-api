import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultUserSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    lastLoginAt: true,
    lastSeenAt: true,
    invitedAt: true,
    fullName: true,
    email: true,
    mfaType: true,
    phoneNumber: true,
    password: true,
    role: true,
    status: true,
    avatar: true,
    notificationPreferences: true,
    selectedTeamId: true,
} satisfies Prisma.UserSelect;

type SelectedTeamReassignment = {
    id: string;
    selectedTeamId: string | null;
};

export type UserRepository = BaseRepository<"user"> & {
    findUniqueOrFail: <TArgs extends Prisma.UserFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.UserGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.UserFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.UserGetPayload<TArgs>>;
    bulkUpdateSelectedTeam: (
        reassignments: SelectedTeamReassignment[],
        tx?: Prisma.TransactionClient
    ) => Promise<number>;
};

export const createUserRepository = ({
    master: prisma,
}: FastifyInstance["prisma"]): UserRepository => {
    const repository = generateRepository(prisma, "User");

    return {
        ...repository,
        findUniqueOrFail: async <TArgs extends Prisma.UserFindUniqueArgs>(
            args: TArgs
        ) => {
            const user = await prisma.user.findUnique(args);

            if (!user) {
                throw new NotFoundError("User not found.");
            }

            return user as Prisma.UserGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.UserFindFirstArgs>(
            args: TArgs
        ) => {
            const user = await prisma.user.findFirst(args);

            if (!user) {
                throw new NotFoundError("User not found.");
            }

            return user as Prisma.UserGetPayload<TArgs>;
        },
        bulkUpdateSelectedTeam: async (reassignments, tx) => {
            if (reassignments.length === 0) {
                return 0;
            }

            const client = tx ?? prisma;

            const cases = Prisma.join(
                reassignments.map(({ id, selectedTeamId }) =>
                    selectedTeamId === null
                        ? Prisma.sql`WHEN ${id}::uuid THEN NULL`
                        : Prisma.sql`WHEN ${id}::uuid THEN ${selectedTeamId}::uuid`
                ),
                " "
            );

            const ids = Prisma.join(
                reassignments.map(({ id }) => Prisma.sql`${id}::uuid`)
            );

            return client.$executeRaw`
                UPDATE users
                SET selected_team_id = CASE id ${cases} END
                WHERE id IN (${ids})
            `;
        },
    };
};

addDIResolverName(createUserRepository, "userRepository");
