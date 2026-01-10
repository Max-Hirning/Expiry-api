import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "../../prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultCompanySelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    dbUrl: true,
} satisfies Prisma.CompanySelect;

export type CompanyRepository = BaseRepository<"company"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.CompanyFindUniqueArgs,
        Prisma.CompanyGetPayload<Prisma.CompanyFindUniqueArgs>
    >;
};

export const createCompanyRepository = (
    prisma: PrismaClient
): CompanyRepository => {
    const repository = generateRepository(prisma, "Company");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const company = await prisma.company.findUnique(args);

            if (!company) {
                throw new NotFoundError("Company not found.");
            }

            return company;
        },
    };
};

addDIResolverName(createCompanyRepository, "companyRepository");
