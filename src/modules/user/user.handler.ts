import { JWT } from "@fastify/jwt";
import { UserService } from "./user.service.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { BadRequestError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { User } from "@/database/master/generated/index.js";
import {
    FetchInvitedUserQueryInput,
    FetchUsersQueryInput,
    InviteUserBodyInput,
    UpdateUserBodyInput,
    UpdateUserPasswordBodyInput,
    UserParamsInput,
    UpdateTeamMemberRolesParamsInput,
    UpdateTeamMemberRolesBodyInput,
} from "@/lib/validation/user/user.schema.js";

export type UserHandler = {
    updateUser: (
        request: FastifyRequest<{
            Params: UserParamsInput;
            Body: UpdateUserBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    updateUserPassword: (
        request: FastifyRequest<{
            Params: UserParamsInput;
            Body: UpdateUserPasswordBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    deleteInvitedUser: (
        request: FastifyRequest<{
            Params: UserParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    getInvitedUser: (
        request: FastifyRequest<{
            Querystring: FetchInvitedUserQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    deleteUser: (
        request: FastifyRequest<{
            Params: UserParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    toggleUserStatus: (
        request: FastifyRequest<{
            Params: UserParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    getUser: (
        request: FastifyRequest<{
            Params: UserParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    getUsers: (
        request: FastifyRequest<{
            Querystring: FetchUsersQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    inviteUser: (
        request: FastifyRequest<{
            Body: InviteUserBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    updateTeamMemberRoles: (
        request: FastifyRequest<{
            Params: UpdateTeamMemberRolesParamsInput;
            Body: UpdateTeamMemberRolesBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createHandler = (
    userService: UserService,
    jwt: JWT
): UserHandler => {
    return {
        updateUser: async (request, reply) => {
            const { params, body } = request;

            const data = await userService.updateUser({
                params,
                body,
            });

            return reply.send(data);
        },

        updateUserPassword: async (request, reply) => {
            const { params, body } = request;

            const data = await userService.updateUserPassword({
                params,
                body,
            });

            return reply.send(data);
        },

        deleteInvitedUser: async (request, reply) => {
            const { params, user } = request;

            const data = await userService.deleteInvitedUser({
                params,
                initiator: user,
            });

            return reply.send(data);
        },

        getInvitedUser: async (request, reply) => {
            const { query } = request;

            let id: string;

            try {
                ({ id } = jwt.verify<Pick<User, "id">>(query.invitationId));
            } catch {
                throw BadRequestError("Invalid invitation token");
            }

            const data = await userService.getUser({
                params: {
                    userId: id,
                },
            });

            return reply.send(data);
        },

        deleteUser: async (request, reply) => {
            const { params, user } = request;

            const data = await userService.deleteUser({
                params,
            });

            if (params.userId === user.id) {
                request.resetTokens = true;
            }

            return reply.send(data);
        },

        toggleUserStatus: async (request, reply) => {
            const { params } = request;

            const data = await userService.toggleUserStatus({
                params,
            });

            return reply.send(data);
        },

        getUser: async (request, reply) => {
            const { params } = request;

            const data = await userService.getUser({
                params,
            });

            return reply.send(data);
        },

        getUsers: async (request, reply) => {
            const { query, user } = request;

            const data = await userService.getUsers({
                query,
                initiator: user,
            });

            return reply.send(data);
        },

        inviteUser: async (request, reply) => {
            const { body, user } = request;

            const data = await userService.inviteUser({
                body,
                initiator: user,
            });

            return reply.status(201).send(data);
        },

        updateTeamMemberRoles: async (request, reply) => {
            const { params, body } = request;

            const data = await userService.updateTeamMemberRoles({
                params,
                body,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createHandler, "userHandler");
