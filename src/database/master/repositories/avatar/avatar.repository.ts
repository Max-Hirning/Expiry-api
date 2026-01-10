import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "../../prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultAvatarSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    key: true,
    fileSize: true,
    mimeType: true,
    url: true,
    expiredAt: true,
    width: true,
    height: true,
} satisfies Prisma.AvatarSelect;

export type AvatarRepository = BaseRepository<"avatar"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.AvatarFindUniqueArgs,
        Prisma.AvatarGetPayload<Prisma.AvatarFindUniqueArgs>
    >;
};

export const createAvatarRepository = (
    prisma: PrismaClient
): AvatarRepository => {
    const repository = generateRepository(prisma, "Avatar");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const avatar = await prisma.avatar.findUnique(args);

            if (!avatar) {
                throw new NotFoundError("Avatar not found.");
            }

            return avatar;
        },
    };
};

addDIResolverName(createAvatarRepository, "avatarRepository");
