import { z } from "zod";
import { FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { NotFoundError, ForbiddenError } from "@/lib/errors/errors.js";
import { ChatMemberStatus, Prisma } from "@/database/team/generated/index.js";
import { ApplicationService } from "@/modules/application/application.service.js";
import { defaultChatMemberSelector } from "@/database/team/repositories/chat-member/chat-member.repository.js";
import { defaultChatMessageSelector } from "@/database/team/repositories/chat-message/chat-message.repository.js";
import {
    ChatParamsInput,
    GetChatsCursorQueryInput,
    fetchChatsResponseSchema,
    fetchChatResponseSchema,
} from "@/lib/validation/chat/chat.schema.js";
import {
    ChatMessageParamsInput,
    SendMessageBodyInput,
    EditMessageBodyInput,
    FetchMessagesQueryInput,
    MarkMessagesReadBodyInput,
    sendMessageResponseSchema,
    editMessageResponseSchema,
    deleteMessageResponseSchema,
    markReadResponseSchema,
    fetchMessagesResponseSchema,
} from "@/lib/validation/chat-message/chat-message.schema.js";

const EDIT_WINDOW_MS = 5 * 60 * 1000;

const assertWithinEditWindow = (updatedAt: Date) => {
    if (Date.now() - updatedAt.getTime() >= EDIT_WINDOW_MS) {
        throw new ForbiddenError("Cannot edit/delete message after 5 minutes.");
    }
};

export type ChatService = {
    createChat: (p: {
        teamId: string;
        chatName: string;
        documentId?: string;
        members: {
            userId: string;
            userFullName: string;
            userAvatarUrl?: string;
        }[];
        tx?: Prisma.TransactionClient;
    }) => Promise<void>;
    createChatMember: (p: {
        teamId: string;
        chatId: string;
        members: {
            userId: string;
            userFullName: string;
            userAvatarUrl?: string;
        }[];
    }) => Promise<void>;
    getChats: (p: {
        params: ChatParamsInput;
        query: GetChatsCursorQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof fetchChatsResponseSchema>>;
    getChat: (p: {
        params: ChatParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof fetchChatResponseSchema>>;
    getMessages: (p: {
        params: ChatParamsInput;
        query: FetchMessagesQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof fetchMessagesResponseSchema>>;
    sendMessage: (p: {
        params: ChatParamsInput;
        body: SendMessageBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof sendMessageResponseSchema>>;
    editMessage: (p: {
        params: ChatMessageParamsInput;
        body: EditMessageBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof editMessageResponseSchema>>;
    deleteMessage: (p: {
        params: ChatMessageParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof deleteMessageResponseSchema>>;
    markMessagesRead: (p: {
        params: ChatParamsInput;
        body: MarkMessagesReadBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<z.infer<typeof markReadResponseSchema>>;
};

export const createChatService = (
    applicationService: ApplicationService
): ChatService => ({
    createChat: async ({ teamId, chatName, documentId, members, tx }) => {
        if (tx) {
            const chat = await tx.chat.create({
                data: {
                    name: chatName,
                    ...(documentId && { documentId }),
                },
            });

            await tx.chatMember.createMany({
                data: members.map(
                    ({ userFullName, userId, userAvatarUrl }) => ({
                        userId,
                        userFullName,
                        userAvatarUrl,
                        chatId: chat.id,
                        status: ChatMemberStatus.ACTIVE,
                    })
                ),
                skipDuplicates: true,
            });
        } else {
            const client =
                await applicationService.initTeamTenantClient(teamId);

            await withRepositories([client], async (tx) => {
                const chat = await tx.chat.create({
                    data: {
                        name: chatName,
                        ...(documentId && { documentId }),
                    },
                });

                await tx.chatMember.createMany({
                    data: members.map(
                        ({ userFullName, userId, userAvatarUrl }) => ({
                            userId,
                            userFullName,
                            userAvatarUrl,
                            chatId: chat.id,
                            status: ChatMemberStatus.ACTIVE,
                        })
                    ),
                    skipDuplicates: true,
                });
            });
        }
    },

    createChatMember: async ({ teamId, chatId, members }) => {
        const client = await applicationService.initTeamTenantClient(teamId);

        if (members.length === 0) {
            return;
        }

        await client.$executeRaw`
        INSERT INTO chat_members (id, created_at, updated_at, status, user_id, user_full_name, user_avatar_url, chat_id)
        VALUES ${Prisma.join(
        members.map(
            (m) =>
                Prisma.sql`(gen_random_uuid(), now(), now(), ${ChatMemberStatus.ACTIVE}, ${m.userId}, ${m.userFullName}, ${m.userAvatarUrl || null}, ${chatId})`
        )
    )}
        ON CONFLICT (chat_id, user_id) DO UPDATE SET
            updated_at = now(),
            status = ${ChatMemberStatus.ACTIVE},
            user_full_name = EXCLUDED.user_full_name,
            user_avatar_url = EXCLUDED.user_avatar_url
        `;
    },

    getChats: async ({ params, query, initiator }) => {
        const chatRepository = await applicationService.initChatRepository(
            params.teamId
        );

        const chats = await withRepositories([chatRepository], async (repo) => {
            const rows = await repo.findMany({
                where: {
                    members: {
                        some: {
                            userId: initiator.id,
                            status: ChatMemberStatus.ACTIVE,
                        },
                    },
                },
                orderBy: { createdAt: "desc" },
                ...(query.cursor && { cursor: { id: query.cursor }, skip: 1 }),
                take: query.limit + 1,
            });

            const hasMore = rows.length > query.limit;
            const data = hasMore ? rows.slice(0, query.limit) : rows;

            const nextCursor = hasMore
                ? (data[data.length - 1]?.id ?? null)
                : null;

            return { chats: data, nextCursor, hasMore };
        });

        return {
            message: "Chats retrieved successfully",
            data: {
                chats: chats.chats,
                pagination: {
                    nextCursor: chats.nextCursor,
                    hasMore: chats.hasMore,
                },
            },
        };
    },

    getChat: async ({ params, initiator }) => {
        const chatRepository = await applicationService.initChatRepository(
            params.teamId
        );

        const chat = await withRepositories(
            [chatRepository],
            async (chatRepo) => {
                const chat = await chatRepo.findUnique({
                    where: { id: params.chatId },
                    include: {
                        members: {
                            where: { status: ChatMemberStatus.ACTIVE },
                        },
                    },
                });

                if (!chat) {
                    throw new NotFoundError("Chat not found");
                }

                const isMember = chat.members.some(
                    (m) => m.userId === initiator.id
                );

                if (!isMember) {
                    throw new ForbiddenError(
                        "You are not a member of this chat"
                    );
                }

                return chat;
            }
        );

        return {
            message: "Chat retrieved successfully",
            data: { chat },
        };
    },

    getMessages: async ({ params, query }) => {
        const chatMessageRepository =
            await applicationService.initChatMessageRepository(params.teamId);

        const messages = await withRepositories(
            [chatMessageRepository],
            async (repo) => {
                const rows = await repo.findMany({
                    where: {
                        chatId: params.chatId,
                        parentMessageId: query.parentMessageId,
                    },
                    orderBy: { createdAt: "desc" },
                    ...(query.cursor && {
                        cursor: { id: query.cursor },
                        skip: 1,
                    }),
                    take: query.limit + 1,
                    select: defaultChatMessageSelector,
                });

                const hasMore = rows.length > query.limit;
                const data = hasMore ? rows.slice(0, query.limit) : rows;

                const nextCursor = hasMore
                    ? (data[data.length - 1]?.id ?? null)
                    : null;

                return { messages: data, nextCursor, hasMore };
            }
        );

        return {
            message: "Messages retrieved successfully",
            data: {
                messages: messages.messages,
                pagination: {
                    nextCursor: messages.nextCursor,
                    hasMore: messages.hasMore,
                },
            },
        };
    },

    sendMessage: async ({ params, body, initiator }) => {
        const chatMemberRepository =
            await applicationService.initChatMemberRepository(params.teamId);

        const chatMessageRepository =
            await applicationService.initChatMessageRepository(params.teamId);

        const chatMessage = await withRepositories(
            [chatMemberRepository, chatMessageRepository],
            async (memberRepo, messageRepo) => {
                const member = await memberRepo.findFirst({
                    where: {
                        chatId: params.chatId,
                        userId: initiator.id,
                        status: ChatMemberStatus.ACTIVE,
                    },
                    select: defaultChatMemberSelector,
                });

                if (!member) {
                    throw new ForbiddenError(
                        "You are not a member of this chat"
                    );
                }

                const message = await messageRepo.create({
                    data: {
                        message: body.message,
                        autoGenerated: false,
                        ...(body.parentMessageId && {
                            parentMessageId: body.parentMessageId,
                        }),
                        authorId: member.id,
                        chatId: params.chatId,
                    },
                    select: defaultChatMessageSelector,
                });

                return message;
            }
        );

        return {
            message: "Message sent successfully",
            data: { chatMessage },
        };
    },

    editMessage: async ({ params, body, initiator }) => {
        const chatMemberRepository =
            await applicationService.initChatMemberRepository(params.teamId);

        const chatMessageRepository =
            await applicationService.initChatMessageRepository(params.teamId);

        const chatMessage = await withRepositories(
            [chatMemberRepository, chatMessageRepository],
            async (memberRepo, messageRepo) => {
                const member = await memberRepo.findFirst({
                    where: {
                        chatId: params.chatId,
                        userId: initiator.id,
                        status: ChatMemberStatus.ACTIVE,
                    },
                });

                if (!member) {
                    throw new ForbiddenError(
                        "You are not a member of this chat"
                    );
                }

                const message = await messageRepo.findUnique({
                    where: { id: params.messageId },
                });

                if (!message) {
                    throw new NotFoundError("Message not found");
                }

                if (message.autoGenerated) {
                    throw new ForbiddenError(
                        "Cannot edit auto-generated messages"
                    );
                }

                if (message.authorId !== member.id) {
                    throw new ForbiddenError(
                        "You can only edit your own messages"
                    );
                }

                assertWithinEditWindow(message.updatedAt);

                const updated = await messageRepo.update({
                    where: { id: params.messageId },
                    data: { message: body.message },
                    select: defaultChatMessageSelector,
                });

                return updated;
            }
        );

        return {
            message: "Message edited successfully",
            data: { chatMessage },
        };
    },

    deleteMessage: async ({ params, initiator }) => {
        const chatMemberRepository =
            await applicationService.initChatMemberRepository(params.teamId);

        const chatMessageRepository =
            await applicationService.initChatMessageRepository(params.teamId);

        const chatMessage = await withRepositories(
            [chatMemberRepository, chatMessageRepository],
            async (memberRepo, messageRepo) => {
                const member = await memberRepo.findFirst({
                    where: {
                        chatId: params.chatId,
                        userId: initiator.id,
                        status: ChatMemberStatus.ACTIVE,
                    },
                });

                if (!member) {
                    throw new ForbiddenError(
                        "You are not a member of this chat"
                    );
                }

                const message = await messageRepo.findUnique({
                    where: { id: params.messageId },
                });

                if (!message) {
                    throw new NotFoundError("Message not found");
                }

                if (message.autoGenerated) {
                    throw new ForbiddenError(
                        "Cannot delete auto-generated messages"
                    );
                }

                if (message.authorId !== member.id) {
                    throw new ForbiddenError(
                        "You can only delete your own messages"
                    );
                }

                assertWithinEditWindow(message.updatedAt);

                const deleted = await messageRepo.delete({
                    where: { id: params.messageId },
                    select: defaultChatMessageSelector,
                });

                return deleted;
            }
        );

        return {
            message: "Message deleted successfully",
            data: { chatMessage },
        };
    },

    markMessagesRead: async ({ params, body, initiator }) => {
        const chatMemberRepository =
            await applicationService.initChatMemberRepository(params.teamId);

        const chatMessageReadStatusRepository =
            await applicationService.initChatMessageReadStatusRepository(
                params.teamId
            );

        const readStatuses = await withRepositories(
            [chatMemberRepository, chatMessageReadStatusRepository],
            async (memberRepo, statusRepo) => {
                const member = await memberRepo.findFirst({
                    where: {
                        chatId: params.chatId,
                        userId: initiator.id,
                        status: ChatMemberStatus.ACTIVE,
                    },
                });

                if (!member) {
                    throw new ForbiddenError(
                        "You are not a member of this chat"
                    );
                }

                await statusRepo.createMany({
                    data: body.messageIds.map((messageId) => ({
                        chatMessageId: messageId,
                        readById: member.id,
                    })),
                    skipDuplicates: true,
                });

                const statuses = await statusRepo.findMany({
                    where: {
                        chatMessageId: {
                            in: body.messageIds,
                        },
                        readById: member.id,
                    },
                });

                return statuses;
            }
        );

        return {
            message: "Messages marked as read successfully",
            data: { readStatuses },
        };
    },
});

addDIResolverName(createChatService, "chatService");
