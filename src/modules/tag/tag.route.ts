import { FastifyInstance } from "fastify";
import { TagHandler } from "./tag.handler.js";
import { Actions } from "../auth/auth.types.js";
import { teamParamsSchema } from "@/lib/validation/team/team.schema.js";
import {
    fetchTagsResponseSchema,
    fetchTagsQuerySchema,
} from "@/lib/validation/tag/tag.schema.js";

export const createTagRoutes = (
    fastify: FastifyInstance,
    tagHandler: TagHandler
) => {
    fastify.get(
        "/:tagId",
        {
            schema: {
                tags: ["tag"],
                summary: "Fetch tag",
                params: teamParamsSchema,
                response: {
                    200: fetchTagsResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_TAG),
            ],
        },
        tagHandler.getTag
    );

    fastify.get(
        "/",
        {
            schema: {
                tags: ["tag"],
                summary: "Fetch tags",
                params: teamParamsSchema,
                querystring: fetchTagsQuerySchema,
                response: {
                    200: fetchTagsResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_TAGS),
            ],
        },
        tagHandler.getTags
    );
};
