import { FastifyInstance } from "fastify";
import { UserHandler } from "./user.handler.js";
import {
    fetchUserResponseSchema,
    fetchUsersQuerySchema,
    fetchUsersResponseSchema,
    userParamsSchema,
} from "@/lib/validation/user/user.schema.js";

export const createUserRoutes = (
    fastify: FastifyInstance,
    userHandler: UserHandler
) => {
    fastify.get(
        "/",
        {
            schema: {
                tags: ["user"],
                summary: "Fetch users",
                querystring: fetchUsersQuerySchema,
                response: {
                    200: fetchUsersResponseSchema,
                },
            },
        },
        userHandler.getUsers
    );

    fastify.get(
        "/:userId",
        {
            schema: {
                tags: ["user"],
                summary: "Fetch user",
                params: userParamsSchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
        },
        userHandler.getUser
    );
};
