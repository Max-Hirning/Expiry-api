import { FastifyInstance } from "fastify";
import { createTeamRoutes } from "./team.route.js";

// Define the endpoint prefix by providing autoPrefix module property.
export const autoPrefix = "/api/teams";

export default async function (fastify: FastifyInstance) {
    const teamHandler = fastify.di.resolve("teamHandler");
    createTeamRoutes(fastify, teamHandler);
}
