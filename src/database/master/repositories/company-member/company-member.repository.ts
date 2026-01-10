import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "../../prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultCompanyMemberSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    role: true,
    userId: true,
    companyId: true,
} satisfies Prisma.CompanyMemberSelect;

export type CompanyMemberRepository = BaseRepository<"companyMember"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.CompanyMemberFindUniqueArgs,
        Prisma.CompanyMemberGetPayload<Prisma.CompanyMemberFindUniqueArgs>
    >;
};

export const createCompanyMemberRepository = (
    prisma: PrismaClient
): CompanyMemberRepository => {
    const repository = generateRepository(prisma, "CompanyMember");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const companyMember = await prisma.companyMember.findUnique(args);

            if (!companyMember) {
                throw new NotFoundError("CompanyMember not found.");
            }

            return companyMember;
        },
    };
};

addDIResolverName(createCompanyMemberRepository, "companyMemberRepository");
