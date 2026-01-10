import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "@/database/team/prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultDocumentSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    status: true,
    tags: true,
    key: true,
    fileSize: true,
    mimeType: true,
    url: true,
    expiredAt: true,
    width: true,
    height: true,
} satisfies Prisma.DocumentSelect;

export type DocumentRepository = BaseRepository<"document"> & {
    findUniqueOrFail: FindUniqueOrFail<
        Prisma.DocumentFindUniqueArgs,
        Prisma.DocumentGetPayload<Prisma.DocumentFindUniqueArgs>
    >;
};

export const createDocumentRepository = (
    prisma: PrismaClient
): DocumentRepository => {
    const repository = generateRepository(prisma, "Document");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const document = await prisma.document.findUnique(args);

            if (!document) {
                throw new NotFoundError("Document not found.");
            }

            return document;
        },
    };
};

addDIResolverName(createDocumentRepository, "documentRepository");
