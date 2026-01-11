import { FastifyInstance } from "fastify";
import { createDocumentRoutes } from "./document.route.js";

// Define the endpoint prefix by providing autoPrefix module property.
export const autoPrefix = "/api/documents/:teamId";

export default async function (fastify: FastifyInstance) {
    const documentHandler = fastify.di.resolve("documentHandler");
    createDocumentRoutes(fastify, documentHandler);
}
