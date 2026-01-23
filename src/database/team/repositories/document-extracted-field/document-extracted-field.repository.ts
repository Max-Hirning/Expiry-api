import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultDocumentExtractedFieldTagSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    type: true,
    value: true,
    confidence: true,
    source: true,
    documentId: true,
} satisfies Prisma.DocumentExtractedFieldSelect;

export type DocumentExtractedFieldRepository =
    BaseRepository<"documentExtractedField"> & {
        findUniqueOrFail: <
            TArgs extends Prisma.DocumentExtractedFieldFindUniqueArgs,
        >(
            args: TArgs
        ) => Promise<Prisma.DocumentExtractedFieldGetPayload<TArgs>>;
        findFirstOrFail: <
            TArgs extends Prisma.DocumentExtractedFieldFindFirstArgs,
        >(
            args: TArgs
        ) => Promise<Prisma.DocumentExtractedFieldGetPayload<TArgs>>;
        $disconnect: () => Promise<void>;
    };

export const createDocumentExtractedFieldRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): DocumentExtractedFieldRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "DocumentExtractedField");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <
            TArgs extends Prisma.DocumentExtractedFieldFindUniqueArgs,
        >(
            args: TArgs
        ) => {
            const documentExtractedField =
                await client.documentExtractedField.findUnique(args);

            if (!documentExtractedField) {
                throw new NotFoundError("Document tag not found.");
            }

            return documentExtractedField as Prisma.DocumentExtractedFieldGetPayload<TArgs>;
        },
        findFirstOrFail: async <
            TArgs extends Prisma.DocumentExtractedFieldFindFirstArgs,
        >(
            args: TArgs
        ) => {
            const documentExtractedField =
                await client.documentExtractedField.findFirst(args);

            if (!documentExtractedField) {
                throw new NotFoundError("Document tag not found.");
            }

            return documentExtractedField as Prisma.DocumentExtractedFieldGetPayload<TArgs>;
        },
    };
};

addDIResolverName(
    createDocumentExtractedFieldRepository,
    "documentExtractedFieldRepository"
);
