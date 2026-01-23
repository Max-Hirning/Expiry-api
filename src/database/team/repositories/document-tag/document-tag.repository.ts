import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultDocumentTagTagSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    documentId: true,
    tagId: true,
} satisfies Prisma.DocumentTagSelect;

export type DocumentTagRepository = BaseRepository<"documentTag"> & {
    findUniqueOrFail: <TArgs extends Prisma.DocumentTagFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.DocumentTagGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.DocumentTagFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.DocumentTagGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createDocumentTagRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): DocumentTagRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "DocumentTag");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <
            TArgs extends Prisma.DocumentTagFindUniqueArgs,
        >(
            args: TArgs
        ) => {
            const documentTag = await client.documentTag.findUnique(args);

            if (!documentTag) {
                throw new NotFoundError("Document tag not found.");
            }

            return documentTag as Prisma.DocumentTagGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.DocumentTagFindFirstArgs>(
            args: TArgs
        ) => {
            const documentTag = await client.documentTag.findFirst(args);

            if (!documentTag) {
                throw new NotFoundError("Document tag not found.");
            }

            return documentTag as Prisma.DocumentTagGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createDocumentTagRepository, "documentTagRepository");
