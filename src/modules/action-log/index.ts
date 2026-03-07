import { FastifyInstance } from "fastify";
import { createActionLogRoutes } from "./action-log.route.js";

// Define the endpoint prefix by providing autoPrefix module property.
export const autoPrefix = "/api/action-logs/:teamId";

export default async function (fastify: FastifyInstance) {
    const actionLogHandler = fastify.di.resolve("actionLogHandler");
    createActionLogRoutes(fastify, actionLogHandler);
}
