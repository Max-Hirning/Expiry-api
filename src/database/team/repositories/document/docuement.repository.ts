import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultDocumentSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
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
    findUniqueOrFail: <TArgs extends Prisma.DocumentFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.DocumentGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.DocumentFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.DocumentGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createDocumentRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): DocumentRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "Document");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <TArgs extends Prisma.DocumentFindUniqueArgs>(
            args: TArgs
        ) => {
            const document = await client.document.findUnique(args);

            if (!document) {
                throw new NotFoundError("Document not found.");
            }

            return document as Prisma.DocumentGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.DocumentFindFirstArgs>(
            args: TArgs
        ) => {
            const document = await client.document.findFirst(args);

            if (!document) {
                throw new NotFoundError("Document not found.");
            }

            return document as Prisma.DocumentGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createDocumentRepository, "documentRepository");
