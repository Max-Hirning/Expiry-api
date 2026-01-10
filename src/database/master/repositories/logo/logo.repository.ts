import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "../../prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultLogoSelector = {
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
    companyId: true,
} satisfies Prisma.LogoSelect;

export type LogoRepository = BaseRepository<"logo"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.LogoFindUniqueArgs,
        Prisma.LogoGetPayload<Prisma.LogoFindUniqueArgs>
    >;
};

export const createLogoRepository = (prisma: PrismaClient): LogoRepository => {
    const repository = generateRepository(prisma, "Logo");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const logo = await prisma.logo.findUnique(args);

            if (!logo) {
                throw new NotFoundError("Logo not found.");
            }

            return logo;
        },
    };
};

addDIResolverName(createLogoRepository, "logoRepository");
