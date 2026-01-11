import { FastifyInstance } from "fastify";
import { TeamHandler } from "./team.handler.js";
import { Actions } from "../auth/auth.types.js";
import {
    createTeamBodySchema,
    fetchTeamResponseSchema,
    fetchTeamsQuerySchema,
    fetchTeamsResponseSchema,
    teamParamsSchema,
    updateTeamBodySchema,
} from "@/lib/validation/team/team.schema.js";

export const createTeamRoutes = (
    fastify: FastifyInstance,
    teamHandler: TeamHandler
) => {
    fastify.get(
        "/:teamId",
        {
            schema: {
                tags: ["team"],
                summary: "Fetch team",
                params: teamParamsSchema,
                response: {
                    200: fetchTeamResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_TEAM),
            ],
        },
        teamHandler.getTeam
    );

    fastify.delete(
        "/:teamId",
        {
            schema: {
                tags: ["team"],
                summary: "Delete team",
                params: teamParamsSchema,
                response: {
                    200: fetchTeamResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.DELETE_TEAM),
            ],
        },
        teamHandler.deleteTeam
    );

    fastify.get(
        "/",
        {
            schema: {
                tags: ["team"],
                summary: "Fetch teams",
                querystring: fetchTeamsQuerySchema,
                response: {
                    200: fetchTeamsResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_TEAMS),
            ],
        },
        teamHandler.getTeams
    );

    fastify.post(
        "/",
        {
            schema: {
                tags: ["team"],
                summary: "Create team",
                body: createTeamBodySchema,
                response: {
                    201: fetchTeamResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.CREATE_TEAM),
            ],
        },
        teamHandler.createTeam
    );

    fastify.put(
        "/:teamId",
        {
            schema: {
                tags: ["team"],
                summary: "Update team",
                params: teamParamsSchema,
                body: updateTeamBodySchema,
                response: {
                    200: fetchTeamResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.UPDATE_TEAM),
            ],
        },
        teamHandler.updateTeam
    );
};
