import { JWT } from "@fastify/jwt";
import { FastifyBaseLogger } from "fastify";
import { EnvConfig } from "@/types/env.type.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { PrismaClient } from "@prisma/client/extension";
import type { Server as SocketIOServer } from "socket.io";
import { TagService } from "@/modules/tag/tag.service.js";
import { TagHandler } from "@/modules/tag/tag.handler.js";
import { TeamService } from "@/modules/team/team.service.js";
import { TeamHandler } from "@/modules/team/team.handler.js";
import { AuthService } from "@/modules/auth/auth.service.js";
import { AuthHandler } from "@/modules/auth/auth.handler.js";
import { UserHandler } from "@/modules/user/user.handler.js";
import { UserService } from "@/modules/user/user.service.js";
import { ChatService } from "@/modules/chat/chat.service.js";
import { ChatHandler } from "@/modules/chat/chat.handler.js";
import { LlmService } from "@/modules/chat/llm/llm.service.js";
import { DocumentService } from "@/modules/document/document.service.js";
import { DocumentHandler } from "@/modules/document/document.handler.js";
import { ChatSocketHandler } from "@/modules/chat/chat.socket-handler.js";
import { AiGraphService } from "@/modules/chat/llm/graph/ai-graph.service.js";
import { ActionLogService } from "@/modules/action-log/action-log.service.js";
import { ActionLogHandler } from "@/modules/action-log/action-log.handler.js";
import { ChatDataService } from "@/modules/chat/llm/data/chat-data.service.js";
import { ApplicationService } from "@/modules/application/application.service.js";
import { ApplicationHandler } from "@/modules/application/application.handler.js";
import { TagRepository } from "@/database/team/repositories/tag/tag.repository.js";
import { MembersDataService } from "@/modules/chat/llm/data/members-data.service.js";
import { NotificationService } from "@/modules/notification/notification.service.js";
import { NotificationHandler } from "@/modules/notification/notification.handler.js";
import { ChatRepository } from "@/database/team/repositories/chat/chat.repository.js";
import { FileRepository } from "@/database/team/repositories/file/file.repository.js";
import { UserRepository } from "@/database/master/repositories/user/user.repository.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import { DocumentsDataService } from "@/modules/chat/llm/data/documents-data.service.js";
import { TeamStatsDataService } from "@/modules/chat/llm/data/team-stats-data.service.js";
import { AvatarRepository } from "@/database/master/repositories/avatar/avatar.repository.js";
import { GeminiProviderService } from "@/modules/chat/llm/providers/gemini-provider.service.js";
import { DocumentRepository } from "@/database/team/repositories/document/docuement.repository.js";
import { TeamStatRepository } from "@/database/master/repositories/team-stat/team-stat.repository.js";
import { ActionLogRepository } from "@/database/team/repositories/action-log/action-log.repository.js";
import { ChatMemberRepository } from "@/database/team/repositories/chat-member/chat-member.repository.js";
import { TeamMemberRepository } from "@/database/master/repositories/team-member/team-member.repository.js";
import { ChatMessageRepository } from "@/database/team/repositories/chat-message/chat-message.repository.js";
import { DocumentTagRepository } from "@/database/team/repositories/document-tag/document-tag.repository.js";
import { AiMessagePersistenceService } from "@/modules/chat/llm/persistence/ai-message-persistence.service.js";
import { NotificationRepository } from "@/database/master/repositories/notification/notification.repository.js";
import { RefreshTokenRepository } from "@/database/master/repositories/refresh-token/refresh-token.repository.js";
import { ChatMessageReadStatusRepository } from "@/database/team/repositories/chat-message-read-status/chat-message-read-status.repository.js";
import { DocumentExtractedFieldRepository } from "@/database/team/repositories/document-extracted-field/document-extracted-field.repository.js";

export type Cradle = {
    log: FastifyBaseLogger;
    prisma: PrismaClient;
    config: EnvConfig;

    io: SocketIOServer;

    chatMessageReadStatusRepository: ChatMessageReadStatusRepository;

    chatMessageRepository: ChatMessageRepository;

    chatMemberRepository: ChatMemberRepository;

    chatRepository: ChatRepository;

    chatService: ChatService;
    chatHandler: ChatHandler;
    chatSocketHandler: ChatSocketHandler;

    llmService: LlmService;
    aiGraphService: AiGraphService;
    geminiProviderService: GeminiProviderService;
    chatDataService: ChatDataService;
    membersDataService: MembersDataService;
    documentsDataService: DocumentsDataService;
    teamStatsDataService: TeamStatsDataService;
    aiMessagePersistenceService: AiMessagePersistenceService;

    actionLogService: ActionLogService;
    actionLogHandler: ActionLogHandler;

    tagService: TagService;
    tagHandler: TagHandler;

    teamStatRepository: TeamStatRepository;
    jwt: JWT;
    gcpService: GcpService;

    documentExtractedFieldRepository: DocumentExtractedFieldRepository;

    refreshTokenRepository: RefreshTokenRepository;

    fileRepository: FileRepository;

    documentTagRepository: DocumentTagRepository;

    tagRepository: TagRepository;

    notificationService: NotificationService;
    notificationHandler: NotificationHandler;

    teamMemberRepository: TeamMemberRepository;

    notificationRepository: NotificationRepository;

    actionLogRepository: ActionLogRepository;

    documentService: DocumentService;
    documentHandler: DocumentHandler;

    avatarRepository: AvatarRepository;

    createGcpService: GcpService;

    teamService: TeamService;
    teamHandler: TeamHandler;

    teamRepository: TeamRepository;

    authService: AuthService;
    authHandler: AuthHandler;

    applicationService: ApplicationService;
    applicationHandler: ApplicationHandler;

    documentRepository: DocumentRepository;

    userRepository: UserRepository;
    userHandler: UserHandler;
    userService: UserService;
};
