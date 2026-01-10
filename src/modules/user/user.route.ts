import { FastifyInstance } from "fastify";
import { UserHandler } from "./user.handler.js";
import {
    fetchInvitedUserQuerySchema,
    fetchUserResponseSchema,
    fetchUsersQuerySchema,
    fetchUsersResponseSchema,
    inviteUserBodySchema,
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

    fastify.post(
        "/invite",
        {
            schema: {
                tags: ["user"],
                summary: "Invite user",
                body: inviteUserBodySchema,
                response: {
                    201: fetchUserResponseSchema,
                },
            },
        },
        userHandler.inviteUser
    );

    fastify.delete(
        "/:userId/invite",
        {
            schema: {
                tags: ["user"],
                summary: "Delete invited user",
                params: userParamsSchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
        },
        userHandler.deleteInvitedUser
    );

    fastify.delete(
        "/:userId",
        {
            schema: {
                tags: ["user"],
                summary: "Delete user",
                params: userParamsSchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
        },
        userHandler.deleteUser
    );

    fastify.get(
        "/invite",
        {
            schema: {
                tags: ["user"],
                summary: "Fetch user's invitation",
                querystring: fetchInvitedUserQuerySchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
        },
        userHandler.getInvitedUser
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
