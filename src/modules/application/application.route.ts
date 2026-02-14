import { FastifyInstance } from "fastify";
import { ApplicationHandler } from "./application.handler.js";

export const createApplicationRoutes = (
    fastify: FastifyInstance,
    applicationHandler: ApplicationHandler
) => {
    fastify.get(
        "/ping",
        {
            schema: {
                tags: ["application"],
                summary: "Check application health status",
            },
        },
        applicationHandler.healthChecker
    );

    fastify.post(
        "/test-data",
        {
            schema: {
                tags: ["application"],
                summary: "Check application health status",
            },
        },
        applicationHandler.setTestData
    );
};
