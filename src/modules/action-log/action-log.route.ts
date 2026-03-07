import { FastifyInstance } from "fastify";
import { Actions } from "../auth/auth.types.js";
import { ActionLogHandler } from "./action-log.handler.js";
import { teamParamsSchema } from "@/lib/validation/team/team.schema.js";
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
