import { TeamService } from "./team.service.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import {
    CreateTeamBodyInput,
    FetchTeamsQueryInput,
    TeamParamsInput,
    UpdateTeamBodyInput,
} from "@/lib/validation/team/team.schema.js";

export type TeamHandler = {
    getTeam: (
        request: FastifyRequest<{
            Params: TeamParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    deleteTeam: (
        request: FastifyRequest<{
            Params: TeamParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    getTeams: (
        request: FastifyRequest<{
            Querystring: FetchTeamsQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    createTeam: (
        request: FastifyRequest<{
            Body: CreateTeamBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    updateTeam: (
        request: FastifyRequest<{
            Body: UpdateTeamBodyInput;
            Params: TeamParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createTeamHandler = (teamService: TeamService): TeamHandler => {
    return {
        getTeam: async (request, reply) => {
            const { params } = request;

            const data = await teamService.getTeam({
                params,
            });

            return reply.send(data);
        },

        deleteTeam: async (request, reply) => {
            const { params } = request;

            const data = await teamService.deleteTeam({
                params,
            });

            return reply.send(data);
        },

        getTeams: async (request, reply) => {
            const { query } = request;

            const data = await teamService.getTeams({
                query,
            });

            return reply.send(data);
        },

        createTeam: async (request, reply) => {
            const { body } = request;

            const data = await teamService.createTeam({
                body,
            });

            return reply.send(data);
        },

        updateTeam: async (request, reply) => {
            const { params, body } = request;

            const data = await teamService.updateTeam({
                params,
                body,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createTeamHandler, "teamHandler");
