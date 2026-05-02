import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultRefreshTokenSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    token: true,
    expiresAt: true,
    userId: true,
} satisfies Prisma.RefreshTokenSelect;

export type RefreshTokenRepository = BaseRepository<"refreshToken"> & {
    findUniqueOrFail: <TArgs extends Prisma.RefreshTokenFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.RefreshTokenGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.RefreshTokenFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.RefreshTokenGetPayload<TArgs>>;
};

export const createRefreshTokenRepository = ({
    master: prisma,
}: FastifyInstance["prisma"]): RefreshTokenRepository => {
    const repository = generateRepository(prisma, "RefreshToken");

    return {
        ...repository,
        findUniqueOrFail: async <
            TArgs extends Prisma.RefreshTokenFindUniqueArgs,
        >(
            args: TArgs
        ) => {
            const refreshToken = await prisma.refreshToken.findUnique(args);

            if (!refreshToken) {
                throw new NotFoundError("Refresh token not found.");
            }

            return refreshToken as Prisma.RefreshTokenGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.RefreshTokenFindFirstArgs>(
            args: TArgs
        ) => {
            const refreshToken = await prisma.refreshToken.findFirst(args);

            if (!refreshToken) {
                throw new NotFoundError("Refresh token not found.");
            }

            return refreshToken as Prisma.RefreshTokenGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createRefreshTokenRepository, "refreshTokenRepository");
