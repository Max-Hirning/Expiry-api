import { FastifyInstance } from "fastify";
import { createTagRoutes } from "./tag.route.js";

// Define the endpoint prefix by providing autoPrefix module property.
export const autoPrefix = "/api/tags/:teamId";

export default async function (fastify: FastifyInstance) {
    const tagHandler = fastify.di.resolve("tagHandler");
    createTagRoutes(fastify, tagHandler);
}
