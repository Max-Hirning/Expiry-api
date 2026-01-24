import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultUserSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    fullName: true,
    email: true,
    phoneNumber: true,
    password: true,
    role: true,
    status: true,
    avatar: true,
    notificationPreferences: true,
} satisfies Prisma.UserSelect;

export type UserRepository = BaseRepository<"user"> & {
    findUniqueOrFail: <TArgs extends Prisma.UserFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.UserGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.UserFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.UserGetPayload<TArgs>>;
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
    };
};

addDIResolverName(createUserRepository, "userRepository");
