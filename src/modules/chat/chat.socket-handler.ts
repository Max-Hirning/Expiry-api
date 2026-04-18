import type { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { ChatMemberStatus } from "@/database/team/generated/index.js";
import { ApplicationService } from "@/modules/application/application.service.js";

export type ChatSocketHandler = {
    register: (socket: Socket, io: Server) => void;
};

export const createChatSocketHandler = (
    chatService: ChatService,
    applicationService: ApplicationService
): ChatSocketHandler => ({
    register(socket, io) {
        const user = socket.data.user;

        socket.on(
            "chat:join",
            async ({ chatId, teamId }: { chatId: string; teamId: string }) => {
                try {
                    const chatMemberRepository =
                        await applicationService.initChatMemberRepository(
                            teamId
                        );

                    await withRepositories(
                        [chatMemberRepository],
                        async (repo) => {
                            const member = await repo.findFirst({
                                where: {
                                    chatId,
                                    userId: user.id,
                                    status: ChatMemberStatus.ACTIVE,
                                },
                            });

                            if (!member) {
                                throw new Error(
                                    "You are not a member of this chat"
                                );
                            }
                        }
                    );

                    await socket.join(`chat:${chatId}`);
                    socket.emit("chat:joined", { chatId });
                } catch (error) {
                    socket.emit("chat:error", {
                        event: "chat:join",
                        message: (error as Error).message,
                    });
                }
            }
        );

        socket.on("chat:leave", ({ chatId }: { chatId: string }) => {
            socket.leave(`chat:${chatId}`);
        });

        socket.on(
            "chat:message:send",
            async ({
                chatId,
                teamId,
                message,
                parentMessageId,
            }: {
                chatId: string;
                teamId: string;
                message: string;
                parentMessageId?: string;
            }) => {
                try {
                    const result = await chatService.sendMessage({
                        params: { teamId, chatId },
                        body: { message, parentMessageId },
                        initiator: user,
                    });

                    io.to(`chat:${chatId}`).emit(
                        "chat:message:new",
                        result.data.chatMessage
                    );
                } catch (error) {
                    socket.emit("chat:error", {
                        event: "chat:message:send",
                        message: (error as Error).message,
                    });
                }
            }
        );

        socket.on(
            "chat:messages:read",
            async ({
                chatId,
                teamId,
                messageIds,
            }: {
                chatId: string;
                teamId: string;
                messageIds: string[];
            }) => {
                try {
                    const result = await chatService.markMessagesRead({
                        params: { teamId, chatId },
                        body: { messageIds },
                        initiator: user,
                    });

                    io.to(`chat:${chatId}`).emit(
                        "chat:messages:read",
                        result.data.readStatuses
                    );
                } catch (error) {
                    socket.emit("chat:error", {
                        event: "chat:messages:read",
                        message: (error as Error).message,
                    });
                }
            }
        );
    },
});

addDIResolverName(createChatSocketHandler, "chatSocketHandler");
