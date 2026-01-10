import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "@/database/company/prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/company/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export type CompanyLinkRepository = BaseRepository<"companyLink"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.CompanyLinkFindUniqueArgs,
        Prisma.CompanyLinkGetPayload<Prisma.CompanyLinkFindUniqueArgs>
    >;
};

export const createCompanyLinkRepository = (
    prisma: PrismaClient
): CompanyLinkRepository => {
    const repository = generateRepository(prisma, "CompanyLink");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const companyLink = await prisma.companyLink.findUnique(args);

            if (!companyLink) {
                throw new NotFoundError("CompanyLink not found.");
            }

            return companyLink;
        },
    };
};

addDIResolverName(createCompanyLinkRepository, "companyLinkRepository");
