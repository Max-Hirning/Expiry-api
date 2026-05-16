import { z } from "zod";
import { paginationResponseSchema } from "../pagination/pagination.schema.js";
import {
    ChatAiAgentVisibility,
    ChatMemberStatus,
} from "@/database/team/generated/index.js";

const defaultChatSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    unreadCount: z.int(),
    name: z.string(),
    aiAgentEnabled: z.boolean(),
    aiAgentVisibility: z.enum([
        ChatAiAgentVisibility.ALL,
        ChatAiAgentVisibility.SENDER_ONLY,
    ]),
});

const defaultChatMemberSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    status: z.enum([ChatMemberStatus.ACTIVE, ChatMemberStatus.DELETED]),
    userId: z.uuid(),
    userFullName: z.string(),
    userAvatarUrl: z.string().nullable(),
    chatId: z.uuid(),
});

const lastChatMessageSchema = z.object({
    id: z.uuid(),
    message: z.string(),
    createdAt: z.date(),
    lastEditedAt: z.date().nullable(),
    isFromAiAgent: z.boolean(),
    author: z
        .object({
            id: z.uuid(),
            userFullName: z.string(),
            userAvatarUrl: z.string().nullable(),
        })
        .nullable(),
});

const chatParamsSchema = z.object({
    teamId: z.uuid(),
    chatId: z.uuid(),
});

const getChatsCursorQuerySchema = z.object({
    cursor: z.uuid().optional(),
    limit: z.coerce.number().int().min(1).max(50).default(20),
});

const createChatBodySchema = z.object({
    name: z.string().min(1).max(100),
});

const updateChatBodySchema = z
    .object({
        name: z.string().min(1).max(100).optional(),
        aiAgentEnabled: z.boolean().optional(),
        aiAgentVisibility: z
            .enum([
                ChatAiAgentVisibility.ALL,
                ChatAiAgentVisibility.SENDER_ONLY,
            ])
            .optional(),
    })
    .refine((v) => Object.keys(v).length > 0, {
        message: "At least one field must be provided",
    });

const updateChatResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        chat: defaultChatSchema,
    }),
});

const fetchChatsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        chats: z.array(
            defaultChatSchema.extend({
                lastMessage: lastChatMessageSchema.nullable(),
                unreadCount: z.number().int().nonnegative(),
                activeMemberCount: z.number().int().nonnegative(),
            })
        ),
        pagination: paginationResponseSchema,
    }),
});

const fetchChatResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        chat: defaultChatSchema.extend({
            members: z.array(defaultChatMemberSchema),
        }),
    }),
});

export {
    chatParamsSchema,
    getChatsCursorQuerySchema,
    createChatBodySchema,
    updateChatBodySchema,
    updateChatResponseSchema,
    fetchChatsResponseSchema,
    fetchChatResponseSchema,
    defaultChatSchema,
    defaultChatMemberSchema,
    lastChatMessageSchema,
};

export type ChatParamsInput = z.infer<typeof chatParamsSchema>;
export type GetChatsCursorQueryInput = z.infer<
    typeof getChatsCursorQuerySchema
>;
export type CreateChatBodyInput = z.infer<typeof createChatBodySchema>;
export type UpdateChatBodyInput = z.infer<typeof updateChatBodySchema>;
export type UpdateChatResponse = z.infer<typeof updateChatResponseSchema>;
export type FetchChatsResponse = z.infer<typeof fetchChatsResponseSchema>;
export type FetchChatResponse = z.infer<typeof fetchChatResponseSchema>;
export type LastChatMessage = z.infer<typeof lastChatMessageSchema>;
