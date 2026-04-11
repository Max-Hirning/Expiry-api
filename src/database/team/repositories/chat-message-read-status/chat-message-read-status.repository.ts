import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultChatMessageReadStatusSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    chatMessageId: true,
    readById: true,
} satisfies Prisma.ChatMessageReadStatusSelect;

export type ChatMessageReadStatusRepository =
    BaseRepository<"chatMessageReadStatus"> & {
        findUniqueOrFail: <
            TArgs extends Prisma.ChatMessageReadStatusFindUniqueArgs,
        >(
            args: TArgs
        ) => Promise<Prisma.ChatMessageReadStatusGetPayload<TArgs>>;
        findFirstOrFail: <
            TArgs extends Prisma.ChatMessageReadStatusFindFirstArgs,
        >(
            args: TArgs
        ) => Promise<Prisma.ChatMessageReadStatusGetPayload<TArgs>>;
        $disconnect: () => Promise<void>;
    };

export const createChatMessageReadStatusRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): ChatMessageReadStatusRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "ChatMessageReadStatus");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <
            TArgs extends Prisma.ChatMessageReadStatusFindUniqueArgs,
        >(
            args: TArgs
        ) => {
            const chatMessageReadStatus =
                await client.chatMessageReadStatus.findUnique(args);

            if (!chatMessageReadStatus) {
                throw new NotFoundError(
                    "Chat message read status tag not found."
                );
            }

            return chatMessageReadStatus as Prisma.ChatMessageReadStatusGetPayload<TArgs>;
        },
        findFirstOrFail: async <
            TArgs extends Prisma.ChatMessageReadStatusFindFirstArgs,
        >(
            args: TArgs
        ) => {
            const chatMessageReadStatus =
                await client.chatMessageReadStatus.findFirst(args);

            if (!chatMessageReadStatus) {
                throw new NotFoundError(
                    "Chat message read status tag not found."
                );
            }

            return chatMessageReadStatus as Prisma.ChatMessageReadStatusGetPayload<TArgs>;
        },
    };
};

addDIResolverName(
    createChatMessageReadStatusRepository,
    "chatMessageReadStatusRepository"
);
