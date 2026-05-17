import { FastifyBaseLogger } from "fastify";
import { tool } from "@langchain/core/tools";
import { AgentContext } from "@/modules/chat/llm/llm.types.js";
import { ChatDataService } from "@/modules/chat/llm/data/chat-data.service.js";
import { MembersDataService } from "@/modules/chat/llm/data/members-data.service.js";
import { DocumentsDataService } from "@/modules/chat/llm/data/documents-data.service.js";
import { TeamStatsDataService } from "@/modules/chat/llm/data/team-stats-data.service.js";
import {
    validateOrFallback,
    wrapToolError,
} from "@/modules/chat/llm/graph/tools/tools-utils.js";
import {
    chatInfoOutputSchema,
    chatMembersOutputSchema,
    documentDetailOutputSchema,
    documentSummaryOutputSchema,
    emptyInputSchema,
    findMembersByNameInputSchema,
    getDocumentByIdInputSchema,
    getTeamMembersInputSchema,
    listDocumentsInputSchema,
    memberCountsOutputSchema,
    memberOutputSchema,
    teamStatsOutputSchema,
} from "@/modules/chat/llm/graph/tools/tools-build.schemas.js";

export const buildMembersTools = (
    ctx: AgentContext,
    membersDataService: MembersDataService,
    log: FastifyBaseLogger
) => [
    tool(
        async ({ limit }) => {
            try {
                const result = await membersDataService.getTeamMembers({
                    teamId: ctx.teamId,
                    limit,
                });

                return validateOrFallback(memberOutputSchema, result, log, {
                    tool: "get_team_members",
                    teamId: ctx.teamId,
                });
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "get_team_members",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "get_team_members",
            description:
                "List members of the current team. Returns userId, fullName, email, role.",
            schema: getTeamMembersInputSchema,
        }
    ),
    tool(
        async ({ query, limit }) => {
            try {
                const result = await membersDataService.findMembersByName({
                    teamId: ctx.teamId,
                    query,
                    limit,
                });

                return validateOrFallback(memberOutputSchema, result, log, {
                    tool: "find_members_by_name",
                    teamId: ctx.teamId,
                });
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "find_members_by_name",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "find_members_by_name",
            description:
                "Search team members by name or email substring (case-insensitive).",
            schema: findMembersByNameInputSchema,
        }
    ),
];

export const buildDocumentsTools = (
    ctx: AgentContext,
    documentsDataService: DocumentsDataService,
    log: FastifyBaseLogger
) => [
    tool(
        async ({ query, limit }) => {
            try {
                const result = await documentsDataService.listDocuments({
                    teamId: ctx.teamId,
                    scopedDocumentId: ctx.documentId,
                    query,
                    limit,
                });

                return validateOrFallback(
                    documentSummaryOutputSchema,
                    result,
                    log,
                    { tool: "list_documents", teamId: ctx.teamId }
                );
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "list_documents",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "list_documents",
            description:
                "List documents for the current team. If this chat is scoped to a single document, results are automatically restricted to it.",
            schema: listDocumentsInputSchema,
        }
    ),
    tool(
        async ({ documentId }) => {
            try {
                const result = await documentsDataService.getDocumentById({
                    teamId: ctx.teamId,
                    documentId,
                    scopedDocumentId: ctx.documentId,
                });

                return validateOrFallback(
                    documentDetailOutputSchema,
                    result,
                    log,
                    { tool: "get_document_by_id", teamId: ctx.teamId }
                );
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "get_document_by_id",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "get_document_by_id",
            description:
                "Fetch a single document by id, with tags. If this chat is scoped to another document, returns null.",
            schema: getDocumentByIdInputSchema,
        }
    ),
];

export const buildTeamStatsTools = (
    ctx: AgentContext,
    teamStatsDataService: TeamStatsDataService,
    log: FastifyBaseLogger
) => [
    tool(
        async () => {
            try {
                const result = await teamStatsDataService.getTeamStats({
                    teamId: ctx.teamId,
                });

                return validateOrFallback(teamStatsOutputSchema, result, log, {
                    tool: "get_team_stats",
                    teamId: ctx.teamId,
                });
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "get_team_stats",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "get_team_stats",
            description:
                "Returns aggregate document statistics for the current team (counts by status, risk levels, etc.).",
            schema: emptyInputSchema,
        }
    ),
    tool(
        async () => {
            try {
                const result = await teamStatsDataService.getMemberCountsByRole(
                    {
                        teamId: ctx.teamId,
                    }
                );

                return validateOrFallback(
                    memberCountsOutputSchema,
                    result,
                    log,
                    {
                        tool: "get_member_counts_by_role",
                        teamId: ctx.teamId,
                    }
                );
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "get_member_counts_by_role",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "get_member_counts_by_role",
            description:
                "Returns the number of members of the current team grouped by role.",
            schema: emptyInputSchema,
        }
    ),
];

export const buildChatTools = (
    ctx: AgentContext,
    chatDataService: ChatDataService,
    log: FastifyBaseLogger
) => [
    tool(
        async () => {
            try {
                const result = await chatDataService.getChatInfo({
                    teamId: ctx.teamId,
                    chatId: ctx.chatId,
                });

                return validateOrFallback(chatInfoOutputSchema, result, log, {
                    tool: "get_chat_info",
                    teamId: ctx.teamId,
                });
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "get_chat_info",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "get_chat_info",
            description:
                "Returns metadata about the current chat: name, linked documentId, AI-agent flag, and active members of THIS chat.",
            schema: emptyInputSchema,
        }
    ),
    tool(
        async () => {
            try {
                const result = await chatDataService.getChatMembers({
                    teamId: ctx.teamId,
                    chatId: ctx.chatId,
                });

                return validateOrFallback(
                    chatMembersOutputSchema,
                    result,
                    log,
                    { tool: "get_chat_members", teamId: ctx.teamId }
                );
            } catch (error) {
                return wrapToolError(error, log, {
                    tool: "get_chat_members",
                    teamId: ctx.teamId,
                });
            }
        },
        {
            name: "get_chat_members",
            description:
                "Returns the list of active members of the current chat.",
            schema: emptyInputSchema,
        }
    ),
];
