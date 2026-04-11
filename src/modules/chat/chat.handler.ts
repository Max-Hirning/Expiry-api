import { ChatService } from "./chat.service.js";
import { FastifyReply, FastifyRequest } from "fastify";
import type { Server as SocketIOServer } from "socket.io";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import {
    ChatParamsInput,
    GetChatsCursorQueryInput,
} from "@/lib/validation/chat/chat.schema.js";
import {
    ChatMessageParamsInput,
    SendMessageBodyInput,
    EditMessageBodyInput,
    FetchMessagesQueryInput,
    MarkMessagesReadBodyInput,
} from "@/lib/validation/chat-message/chat-message.schema.js";

export type ChatHandler = {
    getChats: (
        req: FastifyRequest<{
            Params: ChatParamsInput;
            Querystring: GetChatsCursorQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    getChat: (
        req: FastifyRequest<{
            Params: ChatParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    getMessages: (
        req: FastifyRequest<{
            Params: ChatParamsInput;
            Querystring: FetchMessagesQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    sendMessage: (
        req: FastifyRequest<{
            Params: ChatParamsInput;
            Body: SendMessageBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    editMessage: (
        req: FastifyRequest<{
            Params: ChatMessageParamsInput;
            Body: EditMessageBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    deleteMessage: (
        req: FastifyRequest<{
            Params: ChatMessageParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    markMessagesRead: (
        req: FastifyRequest<{
            Params: ChatParamsInput;
            Body: MarkMessagesReadBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createChatHandler = (
    chatService: ChatService,
    io: SocketIOServer
): ChatHandler => ({
    async getChats(request, reply) {
        const result = await chatService.getChats({
            params: request.params,
            query: request.query,
            initiator: request.user,
        });

        return reply.send(result);
    },

    async getChat(request, reply) {
        const result = await chatService.getChat({
            params: request.params,
            initiator: request.user,
        });

        return reply.send(result);
    },

    async getMessages(request, reply) {
        const result = await chatService.getMessages({
            params: request.params,
            query: request.query,
            initiator: request.user,
        });

        return reply.send(result);
    },

    async sendMessage(request, reply) {
        const result = await chatService.sendMessage({
            params: request.params,
            body: request.body,
            initiator: request.user,
        });

        io.to(`chat:${request.params.chatId}`).emit(
            "chat:message:new",
            result.data.chatMessage
        );

        return reply.status(201).send(result);
    },

    async editMessage(request, reply) {
        const result = await chatService.editMessage({
            params: request.params,
            body: request.body,
            initiator: request.user,
        });

        io.to(`chat:${request.params.chatId}`).emit(
            "chat:message:updated",
            result.data.chatMessage
        );

        return reply.send(result);
    },

    async deleteMessage(request, reply) {
        const result = await chatService.deleteMessage({
            params: request.params,
            initiator: request.user,
        });

        io.to(`chat:${request.params.chatId}`).emit(
            "chat:message:deleted",
            result.data.chatMessage
        );

        return reply.send(result);
    },

    async markMessagesRead(request, reply) {
        const result = await chatService.markMessagesRead({
            params: request.params,
            body: request.body,
            initiator: request.user,
        });

        io.to(`chat:${request.params.chatId}`).emit(
            "chat:messages:read",
            result.data.readStatuses
        );

        return reply.send(result);
    },
});

addDIResolverName(createChatHandler, "chatHandler");
