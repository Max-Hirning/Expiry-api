import { AuthService } from "./auth.service.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import {
    SignInBodyInput,
    SignUpBodyInput,
} from "@/lib/validation/auth/auth.schema.js";

export type AuthHandler = {
    signIn: (
        request: FastifyRequest<{
            Body: SignInBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    signUp: (
        request: FastifyRequest<{
            Body: SignUpBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createAuthHandler = (authService: AuthService): AuthHandler => {
    return {
        signIn: async (request, reply) => {
            const { body } = request;

            const data = await authService.signIn({
                body,
            });

            request.createNewTokens = true;
            request.updateUserSession = true;

            return reply.send(data);
        },

        signUp: async (request, reply) => {
            const { body } = request;

            const data = await authService.signUp({
                body,
            });

            request.createNewTokens = true;
            request.updateUserSession = true;

            return reply.status(201).send(data);
        },
    };
};

addDIResolverName(createAuthHandler, "authHandler");
