import { FastifyInstance } from "fastify";
import { ChatHandler } from "./chat.handler.js";
import { Actions } from "@/modules/auth/auth.types.js";
import {
    chatParamsSchema,
    getChatsCursorQuerySchema,
    fetchChatsResponseSchema,
    fetchChatResponseSchema,
} from "@/lib/validation/chat/chat.schema.js";
import {
    chatMessageParamsSchema,
    sendMessageBodySchema,
    editMessageBodySchema,
    fetchMessagesQuerySchema,
    markMessagesReadBodySchema,
    fetchMessagesResponseSchema,
    sendMessageResponseSchema,
    editMessageResponseSchema,
    deleteMessageResponseSchema,
    markReadResponseSchema,
} from "@/lib/validation/chat-message/chat-message.schema.js";

export const createChatRoutes = (
    fastify: FastifyInstance,
    chatHandler: ChatHandler
) => {
    fastify.get(
        "/",
        {
            schema: {
                querystring: getChatsCursorQuerySchema,
                response: { 200: fetchChatsResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_CHATS),
            ],
        },
        chatHandler.getChats
    );

    fastify.get(
        "/:chatId",
        {
            schema: {
                params: chatParamsSchema,
                response: { 200: fetchChatResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_CHAT),
            ],
        },
        chatHandler.getChat
    );

    fastify.get(
        "/:chatId/messages",
        {
            schema: {
                params: chatParamsSchema,
                querystring: fetchMessagesQuerySchema,
                response: { 200: fetchMessagesResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_MESSAGES),
            ],
        },
        chatHandler.getMessages
    );

    fastify.post(
        "/:chatId/messages",
        {
            schema: {
                params: chatParamsSchema,
                body: sendMessageBodySchema,
                response: { 201: sendMessageResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.SEND_MESSAGE),
            ],
        },
        chatHandler.sendMessage
    );

    fastify.patch(
        "/:chatId/messages/:messageId",
        {
            schema: {
                params: chatMessageParamsSchema,
                body: editMessageBodySchema,
                response: { 200: editMessageResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.EDIT_MESSAGE),
            ],
        },
        chatHandler.editMessage
    );

    fastify.delete(
        "/:chatId/messages/:messageId",
        {
            schema: {
                params: chatMessageParamsSchema,
                response: { 200: deleteMessageResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.DELETE_MESSAGE),
            ],
        },
        chatHandler.deleteMessage
    );

    fastify.post(
        "/:chatId/messages/read",
        {
            schema: {
                params: chatParamsSchema,
                body: markMessagesReadBodySchema,
                response: { 200: markReadResponseSchema },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.MARK_MESSAGES_READ),
            ],
        },
        chatHandler.markMessagesRead
    );
};
