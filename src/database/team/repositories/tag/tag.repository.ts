import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultTagSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    tag: true,
} satisfies Prisma.TagSelect;

export type TagRepository = BaseRepository<"tag"> & {
    findUniqueOrFail: <TArgs extends Prisma.TagFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.TagGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.TagFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.TagGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createTagRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): TagRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "Tag");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <TArgs extends Prisma.TagFindUniqueArgs>(
            args: TArgs
        ) => {
            const tag = await client.tag.findUnique(args);

            if (!tag) {
                throw new NotFoundError("Tag not found.");
            }

            return tag as Prisma.TagGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.TagFindFirstArgs>(
            args: TArgs
        ) => {
            const tag = await client.tag.findFirst(args);

            if (!tag) {
                throw new NotFoundError("Tag not found.");
            }

            return tag as Prisma.TagGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createTagRepository, "tagRepository");
