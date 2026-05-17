import { FastifyInstance } from "fastify";
import { Actions } from "@/modules/auth/auth.types.js";
import { teamParamsSchema } from "@/lib/validation/team/team.schema.js";
import { ActionLogHandler } from "@/modules/action-log/action-log.handler.js";
import {
    fetchActionLogsQuerySchema,
    fetchActionLogsResponseSchema,
} from "@/lib/validation/action-log/action-log.schema.js";

export const createActionLogRoutes = (
    fastify: FastifyInstance,
    actionLogHandler: ActionLogHandler
) => {
    fastify.get(
        "/",
        {
            schema: {
                tags: ["action-log"],
                summary: "Fetch action logs",
                params: teamParamsSchema,
                querystring: fetchActionLogsQuerySchema,
                response: {
                    200: fetchActionLogsResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_ACTION_LOGS),
            ],
        },
        actionLogHandler.getActionLogs
    );
};
