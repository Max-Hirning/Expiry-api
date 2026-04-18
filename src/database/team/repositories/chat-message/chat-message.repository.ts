import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import {
    BaseRepository,
    generateRepository,
} from "../../../team/repositories/generate.repository.js";

export const defaultChatMessageSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    lastEditedAt: true,
    message: true,
    parentMessageId: true,
    authorId: true,
    chatId: true,
} satisfies Prisma.ChatMessageSelect;

export type ChatMessageWithReadStatuses = Prisma.ChatMessageGetPayload<{
    select: typeof defaultChatMessageSelector & {
        chatMessageReadStatuses: {
            select: {
                createdAt: true;
                readBy: true;
            };
        };
    };
}>;

export type ChatMessageRepository = BaseRepository<"chatMessage"> & {
    findUniqueOrFail: <TArgs extends Prisma.ChatMessageFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.ChatMessageGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.ChatMessageFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.ChatMessageGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createChatMessageRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): ChatMessageRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "ChatMessage");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <
            TArgs extends Prisma.ChatMessageFindUniqueArgs,
        >(
            args: TArgs
        ) => {
            const chatMessage = await client.chatMessage.findUnique(args);

            if (!chatMessage) {
                throw new NotFoundError("Chat message not found.");
            }

            return chatMessage as Prisma.ChatMessageGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.ChatMessageFindFirstArgs>(
            args: TArgs
        ) => {
            const chatMessage = await client.chatMessage.findFirst(args);

            if (!chatMessage) {
                throw new NotFoundError("Chat message not found.");
            }

            return chatMessage as Prisma.ChatMessageGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createChatMessageRepository, "chatMessageRepository");
