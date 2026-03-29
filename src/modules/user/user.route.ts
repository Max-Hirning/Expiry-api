import { FastifyInstance } from "fastify";
import { UserHandler } from "./user.handler.js";
import { Actions } from "../auth/auth.types.js";
import {
    fetchInvitedUserQuerySchema,
    fetchUserResponseSchema,
    fetchUsersQuerySchema,
    fetchUsersResponseSchema,
    inviteUserBodySchema,
    updateUserBodySchema,
    updateUserPasswordBodySchema,
    userParamsSchema,
} from "@/lib/validation/user/user.schema.js";

export const createUserRoutes = (
    fastify: FastifyInstance,
    userHandler: UserHandler
) => {
    fastify.patch(
        "/heartbeat",
        {
            schema: {
                tags: ["user"],
                summary: "Update user presence",
                response: { 204: {} },
            },
            preHandler: [fastify.authorization],
        },
        userHandler.heartbeat
    );

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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_USERS),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.INVITE_USER),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.DELETE_INVITED_USER),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.DELETE_USER),
            ],
        },
        userHandler.deleteUser
    );

    fastify.put(
        "/:userId",
        {
            schema: {
                tags: ["user"],
                summary: "Update user",
                params: userParamsSchema,
                body: updateUserBodySchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.UPDATE_USER),
            ],
        },
        userHandler.updateUser
    );

    fastify.patch(
        "/:userId/status",
        {
            schema: {
                tags: ["user"],
                summary: "Toggle user status",
                params: userParamsSchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.TOGGLE_USER_STATUS),
            ],
        },
        userHandler.toggleUserStatus
    );

    fastify.put(
        "/:userId/password",
        {
            schema: {
                tags: ["user"],
                summary: "Update user password",
                params: userParamsSchema,
                body: updateUserPasswordBodySchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.UPDATE_USER_PASSWORD),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_USER),
            ],
        },
        userHandler.getUser
    );
};
