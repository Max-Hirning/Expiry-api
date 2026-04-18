import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { defaultChatSelector } from "../chat/chat.repository.js";
import { ChatMemberStatus, Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";
import { defaultChatMessageSelectorWithAuthor } from "../chat-message/chat-message.repository.js";

export const defaultDocumentSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    status: true,
    name: true,
    expiresAt: true,
    riskLevel: true,
} satisfies Prisma.DocumentSelect;

export const defaultDocumentSelectorWithDetails = {
    ...defaultDocumentSelector,
    files: true,
    documentExtractedFields: true,
    documentTags: {
        select: {
            tag: true,
        },
    },
} satisfies Prisma.DocumentSelect;

export type DocumentWithDetails = Prisma.DocumentGetPayload<{
    select: typeof defaultDocumentSelectorWithDetails;
}>;

export const buildDocumentChatSelect = (userId: string) => ({
    select: {
        ...defaultChatSelector,
        _count: {
            select: {
                messages: {
                    where: {
                        NOT: {
                            authorId: userId,
                            chatMessageReadStatuses: {
                                some: {
                                    readBy: { userId },
                                },
                            },
                        },
                    },
                },
                members: {
                    where: { status: ChatMemberStatus.ACTIVE },
                },
            },
        },
        messages: {
            orderBy: { createdAt: "desc" as const },
            take: 1,
            select: defaultChatMessageSelectorWithAuthor,
        },
    },
});

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
