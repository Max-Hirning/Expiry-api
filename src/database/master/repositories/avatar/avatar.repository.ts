import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
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
    findUniqueOrFail: <TArgs extends Prisma.AvatarFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.AvatarGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.AvatarFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.AvatarGetPayload<TArgs>>;
};

export const createAvatarRepository = ({
    master: prisma,
}: FastifyInstance["prisma"]): AvatarRepository => {
    const repository = generateRepository(prisma, "Avatar");

    return {
        ...repository,
        findUniqueOrFail: async <TArgs extends Prisma.AvatarFindUniqueArgs>(
            args: TArgs
        ) => {
            const avatar = await prisma.avatar.findUnique(args);

            if (!avatar) {
                throw new NotFoundError("Avatar not found.");
            }

            return avatar as Prisma.AvatarGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.AvatarFindFirstArgs>(
            args: TArgs
        ) => {
            const avatar = await prisma.avatar.findFirst(args);

            if (!avatar) {
                throw new NotFoundError("Avatar not found.");
            }

            return avatar as Prisma.AvatarGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createAvatarRepository, "avatarRepository");
