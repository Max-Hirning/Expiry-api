import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultFileSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    key: true,
    fileSize: true,
    mimeType: true,
    url: true,
    urlExpiresAt: true,
    width: true,
    height: true,
    documentId: true,
} satisfies Prisma.FileSelect;

export type FileRepository = BaseRepository<"file"> & {
    findUniqueOrFail: <TArgs extends Prisma.FileFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.FileGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.FileFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.FileGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createFileRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): FileRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "File");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <TArgs extends Prisma.FileFindUniqueArgs>(
            args: TArgs
        ) => {
            const file = await client.file.findUnique(args);

            if (!file) {
                throw new NotFoundError("Document tag not found.");
            }

            return file as Prisma.FileGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.FileFindFirstArgs>(
            args: TArgs
        ) => {
            const file = await client.file.findFirst(args);

            if (!file) {
                throw new NotFoundError("Document tag not found.");
            }

            return file as Prisma.FileGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createFileRepository, "fileRepository");
