import { HistoryItem } from "../llm.types.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { ChatMemberStatus } from "@/database/team/generated/index.js";
import { ApplicationService } from "@/modules/application/application.service.js";

export type ChatScope = {
    chatId: string;
    documentId: string | null;
    aiAgentEnabled: boolean;
    name: string;
};

export type ChatMemberInfo = {
    id: string;
    userId: string;
    userFullName: string;
    userAvatarUrl: string | null;
};

export type ChatInfo = ChatScope & {
    activeMembers: ChatMemberInfo[];
};

export type ChatDataService = {
    getChatScope: (p: { teamId: string; chatId: string }) => Promise<ChatScope>;
    getChatInfo: (p: { teamId: string; chatId: string }) => Promise<ChatInfo>;
    getChatMembers: (p: {
        teamId: string;
        chatId: string;
    }) => Promise<ChatMemberInfo[]>;
    getHistoryForAi: (p: {
        teamId: string;
        chatId: string;
        userChatMemberId: string;
        limit: number;
    }) => Promise<HistoryItem[]>;
    findChatMemberByUserId: (p: {
        teamId: string;
        chatId: string;
        userId: string;
    }) => Promise<ChatMemberInfo | null>;
};

export const createService = (
    applicationService: ApplicationService
): ChatDataService => ({
    getChatScope: async ({ teamId, chatId }) => {
        const chatRepository =
            await applicationService.initChatRepository(teamId);

        return withRepositories([chatRepository], async (repo) => {
            const chat = await repo.findUniqueOrFail({
                where: { id: chatId },
                select: {
                    id: true,
                    name: true,
                    documentId: true,
                    aiAgentEnabled: true,
                },
            });

            return {
                chatId: chat.id,
                name: chat.name,
                documentId: chat.documentId,
                aiAgentEnabled: chat.aiAgentEnabled,
            };
        });
    },

    getChatInfo: async ({ teamId, chatId }) => {
        const chatRepository =
            await applicationService.initChatRepository(teamId);

        return withRepositories([chatRepository], async (repo) => {
            const chat = await repo.findUniqueOrFail({
                where: { id: chatId },
                select: {
                    id: true,
                    name: true,
                    documentId: true,
                    aiAgentEnabled: true,
                    members: {
                        where: { status: ChatMemberStatus.ACTIVE },
                        select: {
                            id: true,
                            userId: true,
                            userFullName: true,
                            userAvatarUrl: true,
                        },
                    },
                },
            });

            return {
                chatId: chat.id,
                name: chat.name,
                documentId: chat.documentId,
                aiAgentEnabled: chat.aiAgentEnabled,
                activeMembers: chat.members,
            };
        });
    },

    getChatMembers: async ({ teamId, chatId }) => {
        const chatMemberRepository =
            await applicationService.initChatMemberRepository(teamId);

        return withRepositories([chatMemberRepository], async (repo) => {
            const members = await repo.findMany({
                where: { chatId, status: ChatMemberStatus.ACTIVE },
                select: {
                    id: true,
                    userId: true,
                    userFullName: true,
                    userAvatarUrl: true,
                },
            });

            return members;
        });
    },

    findChatMemberByUserId: async ({ teamId, chatId, userId }) => {
        const chatMemberRepository =
            await applicationService.initChatMemberRepository(teamId);

        return withRepositories([chatMemberRepository], async (repo) => {
            const member = await repo.findFirst({
                where: {
                    chatId,
                    userId,
                    status: ChatMemberStatus.ACTIVE,
                },
                select: {
                    id: true,
                    userId: true,
                    userFullName: true,
                    userAvatarUrl: true,
                },
            });

            return member;
        });
    },

    getHistoryForAi: async ({ teamId, chatId, userChatMemberId, limit }) => {
        const chatMessageRepository =
            await applicationService.initChatMessageRepository(teamId);

        return withRepositories([chatMessageRepository], async (repo) => {
            const rows = await repo.findMany({
                where: {
                    chatId,
                    visibleToMemberId: userChatMemberId,
                    OR: [
                        { authorId: userChatMemberId, isFromAiAgent: false },
                        { isFromAiAgent: true },
                    ],
                },
                orderBy: { createdAt: "desc" },
                take: limit,
                select: {
                    message: true,
                    isFromAiAgent: true,
                    createdAt: true,
                },
            });

            return rows.reverse().map((row) => ({
                role: row.isFromAiAgent ? ("ai" as const) : ("user" as const),
                content: row.message,
            }));
        });
    },
});

addDIResolverName(createService, "chatDataService");
