import { FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { Prisma as PrismaTeam } from "@/database/team/generated/index.js";
import { ApplicationService } from "../application/application.service.js";
import {
    FetchActionLogsQueryInput,
    FetchActionLogsResponse,
} from "@/lib/validation/action-log/action-log.schema.js";

export type ActionLogService = {
    getActionLogs: (p: {
        query: FetchActionLogsQueryInput;
        params: TeamParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchActionLogsResponse>;
};

export const createActionLogService = (
    applicationService: ApplicationService
): ActionLogService => ({
    getActionLogs: async ({ query, params }) => {
        const where: PrismaTeam.ActionLogWhereInput = {
            ...(query.actorIds && {
                actorId: {
                    in: query.actorIds,
                },
            }),
            ...(query.documentIds && {
                documentId: {
                    in: query.documentIds,
                },
            }),
        };

        const actionLogRepository =
            await applicationService.initActionLogRepository(params.teamId);

        const actionLogs = await withRepositories(
            [actionLogRepository],
            (actionLogRepo) =>
                actionLogRepo.findMany({
                    where,
                    orderBy: {
                        createdAt: PrismaTeam.SortOrder.desc,
                    },
                    ...(query.cursor && {
                        cursor: { id: query.cursor },
                        skip: 1,
                    }),
                    take: query.limit,
                })
        );

        const nextCursor =
            actionLogs.length === query.limit
                ? actionLogs[actionLogs.length - 1].id
                : null;

        return {
            message: "Action logs fetched successfully.",
            data: {
                actionLogs,
                pagination: {
                    nextCursor,
                },
            },
        };
    },
});

addDIResolverName(createActionLogService, "actionLogService");
