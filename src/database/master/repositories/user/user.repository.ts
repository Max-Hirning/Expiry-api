import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "@/database/master/prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
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
    avatar: true,
    notificationPreferences: true,
} satisfies Prisma.UserSelect;

export type UserRepository = BaseRepository<"user"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.UserFindUniqueArgs,
        Prisma.UserGetPayload<Prisma.UserFindUniqueArgs>
    >;
};

export const createUserRepository = (prisma: PrismaClient): UserRepository => {
    const repository = generateRepository(prisma, "User");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const user = await prisma.user.findUnique(args);

            if (!user) {
                throw new NotFoundError("User not found.");
            }

            return user;
        },
    };
};

addDIResolverName(createUserRepository, "userRepository");
