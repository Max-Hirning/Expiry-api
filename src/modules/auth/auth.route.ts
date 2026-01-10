import { FastifyInstance } from "fastify";
import { AuthHandler } from "./auth.handler.js";
import { fetchUserResponseSchema } from "@/lib/validation/user/user.schema.js";
import {
    signInBodySchema,
    signUpBodySchema,
} from "@/lib/validation/auth/auth.schema.js";

export const createAuthRoutes = (
    fastify: FastifyInstance,
    authHandler: AuthHandler
) => {
    fastify.post(
        "/sign-in",
        {
            schema: {
                tags: ["auth"],
                summary: "Sign in",
                body: signInBodySchema,
                response: {
                    200: fetchUserResponseSchema,
                },
            },
        },
        authHandler.signIn
    );

    fastify.post(
        "/sign-up",
        {
            schema: {
                tags: ["auth"],
                summary: "Sign up",
                body: signUpBodySchema,
                response: {
                    201: fetchUserResponseSchema,
                },
            },
        },
        authHandler.signUp
    );
};
