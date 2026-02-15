import { TagService } from "./tag.service.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import {
    TagParamsInput,
    FetchTagsQueryInput,
} from "@/lib/validation/tag/tag.schema.js";

export type TagHandler = {
    getTag: (
        request: FastifyRequest<{
            Params: TagParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    getTags: (
        request: FastifyRequest<{
            Params: TeamParamsInput;
            Querystring: FetchTagsQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createTagHandler = (tagService: TagService): TagHandler => {
    return {
        getTag: async (request, reply) => {
            const { params, user } = request;

            const data = await tagService.getTag({
                params,
                initiator: user,
            });

            return reply.send(data);
        },
        getTags: async (request, reply) => {
            const { query, params, user } = request;

            const data = await tagService.getTags({
                query,
                params,
                initiator: user,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createTagHandler, "tagHandler");
