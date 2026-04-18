import { z } from "zod";
import { paginationResponseSchema } from "../pagination/pagination.schema.js";
import {
    chatParamsSchema,
    defaultChatMemberSchema,
} from "../chat/chat.schema.js";

const defaultChatMessageSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    lastEditedAt: z.date().nullable(),
    chatMessageReadStatuses: z.record(
        z.uuid(),
        z.object({
            createdAt: z.date(),
            readBy: defaultChatMemberSchema,
        })
    ),
    message: z.string(),
    parentMessageId: z.uuid().nullable(),
    authorId: z.uuid(),
    chatId: z.uuid(),
});

const chatMessageParamsSchema = chatParamsSchema.extend({
    messageId: z.string().uuid(),
});

const sendMessageBodySchema = z.object({
    message: z.string().min(1).max(4000),
    parentMessageId: z.string().uuid().optional(),
});

const editMessageBodySchema = z.object({
    message: z.string().min(1).max(4000),
});

const fetchMessagesQuerySchema = z.object({
    cursor: z.string().uuid().optional(),
    limit: z.coerce.number().int().min(1).max(50).default(20),
    parentMessageId: z.uuid().optional(),
    direction: z.enum(["up", "down"]).default("up"),
});

const markMessagesReadBodySchema = z.object({
    messageIds: z.array(z.uuid()).min(1),
});

const fetchMessagesResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        messages: z.array(defaultChatMessageSchema),
        pagination: paginationResponseSchema,
    }),
});

const sendMessageResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        chatMessage: defaultChatMessageSchema,
    }),
});

const editMessageResponseSchema = sendMessageResponseSchema;

const deleteMessageResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        chatMessage: defaultChatMessageSchema,
    }),
});

const markReadResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        readStatuses: z.array(
            z.object({
                id: z.uuid(),
                chatMessageId: z.uuid(),
                readById: z.uuid(),
                createdAt: z.date(),
            })
        ),
    }),
});

export {
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
    defaultChatMessageSchema,
};

export type DefaultChatMessageResponse = z.infer<
    typeof defaultChatMessageSchema
>;
export type ChatMessageParamsInput = z.infer<typeof chatMessageParamsSchema>;
export type SendMessageBodyInput = z.infer<typeof sendMessageBodySchema>;
export type EditMessageBodyInput = z.infer<typeof editMessageBodySchema>;
export type FetchMessagesQueryInput = z.infer<typeof fetchMessagesQuerySchema>;
export type MarkMessagesReadBodyInput = z.infer<
    typeof markMessagesReadBodySchema
>;
export type FetchMessagesResponse = z.infer<typeof fetchMessagesResponseSchema>;
export type SendMessageResponse = z.infer<typeof sendMessageResponseSchema>;
export type EditMessageResponse = z.infer<typeof editMessageResponseSchema>;
export type DeleteMessageResponse = z.infer<typeof deleteMessageResponseSchema>;
export type MarkReadResponse = z.infer<typeof markReadResponseSchema>;
