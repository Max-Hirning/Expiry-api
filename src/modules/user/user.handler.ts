import { UserService } from "./user.service.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import {
    FetchUsersQueryInput,
    UserParamsInput,
} from "@/lib/validation/user/user.schema.js";

export type UserHandler = {
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
};

export const createHandler = (userService: UserService): UserHandler => {
    return {
        getUser: async (request, reply) => {
            const { params } = request;

            const data = await userService.getUser({
                params,
            });

            return reply.send(data);
        },

        getUsers: async (request, reply) => {
            const { query } = request;

            const data = await userService.getUsers({
                query,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createHandler, "userHandler");
