import { FastifyBaseLogger } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { AiGraphService } from "@/modules/chat/llm/graph/ai-graph.service.js";
import { ChatDataService } from "@/modules/chat/llm/data/chat-data.service.js";
import {
    AI_FALLBACK_ERROR_MESSAGE,
    HISTORY_LIMIT,
} from "@/modules/chat/llm/llm.constants.js";
import { AiMessagePersistenceService } from "@/modules/chat/llm/persistence/ai-message-persistence.service.js";

export type LlmService = {
    handleUserMessage: (p: {
        chatId: string;
        teamId: string;
        userId: string;
        userChatMemberId: string;
        message: string;
    }) => Promise<void>;
};

export const createService = (
    aiGraphService: AiGraphService,
    chatDataService: ChatDataService,
    aiMessagePersistenceService: AiMessagePersistenceService,
    log: FastifyBaseLogger
): LlmService => ({
    handleUserMessage: async ({
        chatId,
        teamId,
        userId,
        userChatMemberId,
        message,
    }) => {
        try {
            const scope = await chatDataService.getChatScope({
                teamId,
                chatId,
            });

            if (!scope.aiAgentEnabled) {
                return;
            }

            const history = await chatDataService.getHistoryForAi({
                teamId,
                chatId,
                userChatMemberId,
                limit: HISTORY_LIMIT,
            });

            const answer = await aiGraphService.run({
                teamId,
                chatId,
                userId,
                userChatMemberId,
                documentId: scope.documentId,
                userMessage: message,
                history,
            });

            await aiMessagePersistenceService.saveAiReply({
                teamId,
                chatId,
                userChatMemberId,
                initiatorUserId: userId,
                content: answer,
            });
        } catch (error) {
            log.error(
                { error, chatId, userId },
                "LLM handleUserMessage failed"
            );

            await aiMessagePersistenceService.saveAiError({
                teamId,
                chatId,
                userChatMemberId,
                initiatorUserId: userId,
                content: AI_FALLBACK_ERROR_MESSAGE,
            });
        }
    },
});

addDIResolverName(createService, "llmService");
