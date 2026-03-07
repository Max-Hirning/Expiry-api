import { FastifyRequest, FastifyReply } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { ActionLogService } from "./action-log.service.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { FetchActionLogsQueryInput } from "@/lib/validation/action-log/action-log.schema.js";

export type ActionLogHandler = {
    getActionLogs: (
        request: FastifyRequest<{
            Params: TeamParamsInput;
            Querystring: FetchActionLogsQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createActionLogHandler = (
    actionLogService: ActionLogService
): ActionLogHandler => {
    return {
        getActionLogs: async (request, reply) => {
            const { query, params, user } = request;

            const data = await actionLogService.getActionLogs({
                query,
                params,
                initiator: user,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createActionLogHandler, "actionLogHandler");
