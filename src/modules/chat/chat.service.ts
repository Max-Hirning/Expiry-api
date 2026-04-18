import { FastifyRequest } from "fastify";
import { EDIT_WINDOW_MS } from "./chat.constants.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { NotFoundError, ForbiddenError } from "@/lib/errors/errors.js";
import { ApplicationService } from "@/modules/application/application.service.js";
import {
    Chat,
    ChatMemberStatus,
    Prisma,
} from "@/database/team/generated/index.js";
import { defaultChatMemberSelector } from "@/database/team/repositories/chat-member/chat-member.repository.js";
import {
    ChatWithMembersAndUnreadCount,
    defaultChatSelector,
} from "@/database/team/repositories/chat/chat.repository.js";
import {
    ChatParamsInput,
    GetChatsCursorQueryInput,
    FetchChatsResponse,
    FetchChatResponse,
} from "@/lib/validation/chat/chat.schema.js";
import {
    ChatMessageWithReadStatuses,
    defaultChatMessageSelectorWithAuthor,
    defaultChatMessageSelectorWithReadStatuses,
} from "@/database/team/repositories/chat-message/chat-message.repository.js";
import {
    ChatMessageParamsInput,
    SendMessageBodyInput,
    EditMessageBodyInput,
    FetchMessagesQueryInput,
    MarkMessagesReadBodyInput,
    FetchMessagesResponse,
    SendMessageResponse,
    EditMessageResponse,
    DeleteMessageResponse,
    MarkReadResponse,
    DefaultChatMessageResponse,
} from "@/lib/validation/chat-message/chat-message.schema.js";

export type ChatService = {
    createChat: (p: {
        chatName: string;
        documentId?: string;
        members: {
            userId: string;
            userFullName: string;
            userAvatarUrl?: string;
        }[];
        tx: Prisma.TransactionClient;
    }) => Promise<Chat>;
    upsertChatMember: (p: {
        teamId: string;
        chatId: string;
        members: {
            userId: string;
            userFullName: string;
            userAvatarUrl?: string;
            status: ChatMemberStatus;
        }[];
        tx: Prisma.TransactionClient;
    }) => Promise<void>;
    deleteChatMember: (p: {
        chatIds?: string[];
        memberIds: string[];
        tx: Prisma.TransactionClient;
    }) => Promise<void>;
    getChats: (p: {
        params: ChatParamsInput;
        query: GetChatsCursorQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchChatsResponse>;
    getChat: (p: {
        params: ChatParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchChatResponse>;
    getMessages: (p: {
        params: ChatParamsInput;
        query: FetchMessagesQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchMessagesResponse>;
    sendMessage: (p: {
        params: ChatParamsInput;
        body: SendMessageBodyInput;
        initiator: FastifyRequest["user"];
        tx?: Prisma.TransactionClient;
    }) => Promise<SendMessageResponse>;
    editMessage: (p: {
        params: ChatMessageParamsInput;
        body: EditMessageBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<EditMessageResponse>;
    deleteMessage: (p: {
        params: ChatMessageParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<DeleteMessageResponse>;
    markMessagesRead: (p: {
        params: ChatParamsInput;
        body: MarkMessagesReadBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<MarkReadResponse>;
};

export const createChatService = (
    applicationService: ApplicationService
): ChatService => {
    const assertWithinEditWindow = (updatedAt: Date) => {
        if (Date.now() - updatedAt.getTime() >= EDIT_WINDOW_MS) {
            throw new ForbiddenError(
                "Cannot edit/delete message after 5 minutes."
            );
        }
    };

    const mapChatMessageResponse = (
        chatMessage: ChatMessageWithReadStatuses
    ) => ({
        ...chatMessage,
        chatMessageReadStatuses:
            chatMessage.chatMessageReadStatuses.reduceRight<
                DefaultChatMessageResponse["chatMessageReadStatuses"]
            >((res, { createdAt, readBy }) => {
                res[readBy.userId] = {
                    readBy,
                    createdAt,
                };

                return res;
            }, {}),
    });

    const mapChatResponse = (chat: ChatWithMembersAndUnreadCount) => ({
        ...chat,
        unreadCount: chat._count.messages,
    });

    const createMessage = async ({
        params,
        body,
        initiator,
        tx,
    }: {
        params: ChatParamsInput;
        body: SendMessageBodyInput;
        initiator: FastifyRequest["user"];
        tx: Prisma.TransactionClient;
    }): Promise<SendMessageResponse["data"]["chatMessage"]> => {
        const member = await tx.chatMember.findFirst({
            where: {
                chatId: params.chatId,
                userId: initiator.id,
                status: ChatMemberStatus.ACTIVE,
            },
            select: defaultChatMemberSelector,
        });

        if (!member) {
            throw new ForbiddenError("You are not a member of this chat");
        }

        const message = await tx.chatMessage.create({
            data: {
                message: body.message,
                autoGenerated: false,
                ...(body.parentMessageId && {
                    parentMessageId: body.parentMessageId,
                }),
                authorId: member.id,
                chatId: params.chatId,
            },
            select: defaultChatMessageSelectorWithReadStatuses,
        });

        return mapChatMessageResponse(message);
    };

    return {
        createChat: async ({ chatName, documentId, members, tx }) => {
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

            return chat;
        },

        upsertChatMember: async ({ chatId, members, tx }) => {
            if (members.length === 0) {
                return;
            }

            await tx.$executeRaw`
        INSERT INTO chat_members (id, created_at, updated_at, status, user_id, user_full_name, user_avatar_url, chat_id)
        VALUES ${Prisma.join(
        members.map(
            (m) =>
                Prisma.sql`(gen_random_uuid(), now(), now(), ${m.status}, ${m.userId}, ${m.userFullName}, ${m.userAvatarUrl || null}, ${chatId})`
        )
    )}
        ON CONFLICT (chat_id, user_id) DO UPDATE SET
            updated_at = now(),
            status = EXCLUDED.status,
            user_full_name = EXCLUDED.user_full_name,
            user_avatar_url = EXCLUDED.user_avatar_url
        `;
        },

        deleteChatMember: async ({ chatIds, memberIds, tx }) => {
            if (memberIds.length === 0) {
                return;
            }

            await tx.$executeRaw`
                UPDATE chat_members
                SET status = 'DELETED', updated_at = now()
                WHERE user_id = ANY(${memberIds}::uuid[]) ${chatIds && chatIds.length > 0 ? `AND chat_id = ANY(${chatIds}::uuid[])` : ""}
            `;
        },

        getChats: async ({ params, query, initiator }) => {
            const client = await applicationService.initTeamTenantClient(
                params.teamId
            );

            const result = await withRepositories([client], async (tx) => {
                const rows = await tx.chat.findMany({
                    where: {
                        members: {
                            some: {
                                userId: initiator.id,
                                status: ChatMemberStatus.ACTIVE,
                            },
                        },
                    },
                    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
                    ...(query.cursor
                        ? { cursor: { id: query.cursor }, skip: 1 }
                        : {}),
                    take: query.limit,
                    select: {
                        ...defaultChatSelector,
                        _count: {
                            select: {
                                messages: {
                                    where: {
                                        author: {
                                            userId: { not: initiator.id },
                                        },
                                        chatMessageReadStatuses: {
                                            none: {
                                                readBy: {
                                                    userId: initiator.id,
                                                },
                                            },
                                        },
                                    },
                                },
                                members: {
                                    where: {
                                        status: ChatMemberStatus.ACTIVE,
                                    },
                                },
                            },
                        },
                        messages: {
                            orderBy: { createdAt: "desc" },
                            take: 1,
                            select: defaultChatMessageSelectorWithAuthor,
                        },
                    },
                });

                const nextCursor =
                    rows.length === query.limit
                        ? rows[rows.length - 1].id
                        : null;

                return {
                    chats: rows.map((chat) => ({
                        ...chat,
                        lastMessage: chat.messages[0] || null,
                        unreadCount: chat._count.messages,
                        activeMemberCount: chat._count.members,
                    })),
                    nextCursor,
                };
            });

            return {
                message: "Chats retrieved successfully",
                data: {
                    chats: result.chats,
                    pagination: {
                        nextCursor: result.nextCursor,
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
                            _count: {
                                select: {
                                    messages: {
                                        where: {
                                            author: {
                                                userId: { not: initiator.id },
                                            },
                                            chatMessageReadStatuses: {
                                                none: {
                                                    readBy: {
                                                        userId: initiator.id,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    members: {
                                        where: {
                                            status: ChatMemberStatus.ACTIVE,
                                        },
                                    },
                                },
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
                data: { chat: mapChatResponse(chat) },
            };
        },

        getMessages: async ({ params, query }) => {
            const chatMessageRepository =
                await applicationService.initChatMessageRepository(
                    params.teamId
                );

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
                        take: query.limit,
                        select: defaultChatMessageSelectorWithReadStatuses,
                    });

                    const nextCursor =
                        rows.length === query.limit
                            ? rows[rows.length - 1].id
                            : null;

                    return { messages: rows, nextCursor };
                }
            );

            return {
                message: "Messages retrieved successfully",
                data: {
                    messages: messages.messages.map(mapChatMessageResponse),
                    pagination: {
                        nextCursor: messages.nextCursor,
                    },
                },
            };
        },

        sendMessage: async ({ params, body, initiator, tx }) => {
            let chatMessage = null;

            if (tx) {
                chatMessage = await createMessage({
                    params,
                    body,
                    initiator,
                    tx,
                });
            } else {
                const client = await applicationService.initTeamTenantClient(
                    params.teamId
                );

                chatMessage = await withRepositories([client], async (tx) => {
                    const message = await createMessage({
                        params,
                        body,
                        initiator,
                        tx,
                    });

                    return message;
                });
            }

            return {
                message: "Message sent successfully",
                data: { chatMessage },
            };
        },

        editMessage: async ({ params, body, initiator }) => {
            const client = await applicationService.initTeamTenantClient(
                params.teamId
            );

            const chatMessage = await withRepositories([client], async (tx) => {
                const member = await tx.chatMember.findFirst({
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

                const message = await tx.chatMessage.findUnique({
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

                const updated = await tx.chatMessage.update({
                    where: { id: params.messageId },
                    data: { message: body.message, lastEditedAt: new Date() },
                    select: defaultChatMessageSelectorWithReadStatuses,
                });

                return updated;
            });

            return {
                message: "Message edited successfully",
                data: { chatMessage: mapChatMessageResponse(chatMessage) },
            };
        },

        deleteMessage: async ({ params, initiator }) => {
            const client = await applicationService.initTeamTenantClient(
                params.teamId
            );

            const chatMessage = await withRepositories([client], async (tx) => {
                const member = await tx.chatMember.findFirst({
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

                const message = await tx.chatMessage.findUnique({
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

                const deleted = await tx.chatMessage.delete({
                    where: { id: params.messageId },
                    select: defaultChatMessageSelectorWithReadStatuses,
                });

                return deleted;
            });

            return {
                message: "Message deleted successfully",
                data: {
                    chatMessage: {
                        ...chatMessage,
                        chatMessageReadStatuses:
                            chatMessage.chatMessageReadStatuses.reduceRight<
                                DefaultChatMessageResponse["chatMessageReadStatuses"]
                            >((res, { createdAt, readBy }) => {
                                res[readBy.id] = {
                                    readBy,
                                    createdAt,
                                };

                                return res;
                            }, {}),
                    },
                },
            };
        },

        markMessagesRead: async ({ params, body, initiator }) => {
            const client = await applicationService.initTeamTenantClient(
                params.teamId
            );

            const readStatuses = await withRepositories(
                [client],
                async (tx) => {
                    const member = await tx.chatMember.findFirst({
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

                    await tx.chatMessageReadStatus.createMany({
                        data: body.messageIds.map((messageId) => ({
                            chatMessageId: messageId,
                            readById: member.id,
                        })),
                        skipDuplicates: true,
                    });

                    const statuses = await tx.chatMessageReadStatus.findMany({
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
    };
};

addDIResolverName(createChatService, "chatService");
