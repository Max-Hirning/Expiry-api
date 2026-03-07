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
        const skip = (query.page - 1) * query.perPage;

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

        const [actionLogs, total] = await withRepositories(
            [actionLogRepository],
            (actionLogRepo) =>
                Promise.all([
                    actionLogRepo.findMany({
                        skip,
                        where,
                        take: query.perPage,
                        orderBy: {
                            createdAt: PrismaTeam.SortOrder.desc,
                        },
                    }),
                    actionLogRepo.count({
                        where,
                    }),
                ])
        );

        const totalPages = Math.ceil(total / query.perPage);
        const prevPage = query.page > 1 ? query.page - 1 : null;
        const nextPage = query.page < totalPages ? query.page + 1 : null;

        return {
            message: "Action logs fetched successfully.",
            data: {
                actionLogs,
                pagination: {
                    page: query.page,
                    perPage: query.perPage,
                    prevPage,
                    nextPage,
                    totalPages,
                    total,
                },
            },
        };
    },
});

addDIResolverName(createActionLogService, "actionLogService");
