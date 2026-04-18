import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import {
    BaseRepository,
    generateRepository,
} from "../../../team/repositories/generate.repository.js";

export const defaultChatSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
} satisfies Prisma.ChatSelect;

export type ChatWithMembersAndUnreadCount = Prisma.ChatGetPayload<{
    include: {
        members: true;
        _count: {
            select: {
                messages: true;
                members: true;
            };
        };
    };
}>;

export type ChatRepository = BaseRepository<"chat"> & {
    findUniqueOrFail: <TArgs extends Prisma.ChatFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.ChatGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.ChatFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.ChatGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createChatRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): ChatRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "Chat");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <TArgs extends Prisma.ChatFindUniqueArgs>(
            args: TArgs
        ) => {
            const chat = await client.chat.findUnique(args);

            if (!chat) {
                throw new NotFoundError("Chat not found.");
            }

            return chat as Prisma.ChatGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.ChatFindFirstArgs>(
            args: TArgs
        ) => {
            const chat = await client.chat.findFirst(args);

            if (!chat) {
                throw new NotFoundError("Chat not found.");
            }

            return chat as Prisma.ChatGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createChatRepository, "chatRepository");
