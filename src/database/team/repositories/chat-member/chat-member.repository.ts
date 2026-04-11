import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import {
    BaseRepository,
    generateRepository,
} from "../../../team/repositories/generate.repository.js";

export const defaultChatMemberSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    status: true,
    userId: true,
    userFullName: true,
    userAvatarUrl: true,
    chatId: true,
} satisfies Prisma.ChatMemberSelect;

export type ChatMemberRepository = BaseRepository<"chatMember"> & {
    findUniqueOrFail: <TArgs extends Prisma.ChatMemberFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.ChatMemberGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.ChatMemberFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.ChatMemberGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createChatMemberRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): ChatMemberRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "ChatMember");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <TArgs extends Prisma.ChatMemberFindUniqueArgs>(
            args: TArgs
        ) => {
            const chatMember = await client.chatMember.findUnique(args);

            if (!chatMember) {
                throw new NotFoundError("Chat member not found.");
            }

            return chatMember as Prisma.ChatMemberGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.ChatMemberFindFirstArgs>(
            args: TArgs
        ) => {
            const chatMember = await client.chatMember.findFirst(args);

            if (!chatMember) {
                throw new NotFoundError("Chat member not found.");
            }

            return chatMember as Prisma.ChatMemberGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createChatMemberRepository, "chatMemberRepository");
