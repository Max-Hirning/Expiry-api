import fp from "fastify-plugin";
import { addSeconds } from "date-fns";
import { CookieSerializeOptions } from "@fastify/cookie";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
    ACCESS_TOKEN_EXP,
    COOKIES_EXP,
    REFRESH_TOKEN_EXP,
} from "@/modules/auth/auth.constants.js";

const tokenCookiePlugin = async (fastify: FastifyInstance) => {
    const cookieConfig: CookieSerializeOptions = {
        path: "/",
        secure: true,
        httpOnly: true,
        maxAge: COOKIES_EXP,
        // domain: fastify.config.FE_DOMAIN,
        sameSite: "none",
    };

    fastify.addHook(
        "onSend",
        async (request: FastifyRequest, reply: FastifyReply, payload) => {
            if (
                request.user &&
                (request.createNewTokens ||
                    request.updateUserSession ||
                    request.updateToken)
            ) {
                const user = await fastify.prisma.master.user.findUniqueOrThrow(
                    {
                        where: {
                            id: request.user.id,
                        },
                    }
                );

                if (request.createNewTokens || request.updateToken) {
                    const accessToken = fastify.jwt.sign(
                        { id: user.id },
                        { expiresIn: ACCESS_TOKEN_EXP }
                    );

                    reply.setCookie("access_token", accessToken, cookieConfig);

                    if (request.createNewTokens) {
                        const refreshToken = fastify.jwt.sign(
                            { id: user.id },
                            { expiresIn: REFRESH_TOKEN_EXP }
                        );

                        await fastify.prisma.master.refreshToken.upsert({
                            where: {
                                userId: user.id,
                            },
                            update: {
                                token: refreshToken,
                                userId: user.id,
                                expiresAt: addSeconds(new Date(), COOKIES_EXP),
                            },
                            create: {
                                token: refreshToken,
                                userId: user.id,
                                expiresAt: addSeconds(new Date(), COOKIES_EXP),
                            },
                        });

                        reply.setCookie(
                            "refresh_token",
                            refreshToken,
                            cookieConfig
                        );
                    }
                }

                reply.setCookie(
                    "user",
                    JSON.stringify({
                        id: user.id,
                        role: user.role,
                    }),
                    {
                        ...cookieConfig,
                        httpOnly: false,
                    }
                );
            }

            if (request.resetTokens) {
                reply.clearCookie("access_token", cookieConfig);
                reply.clearCookie("refresh_token", cookieConfig);

                reply.clearCookie("user", {
                    ...cookieConfig,
                    httpOnly: false,
                });
            }

            return payload;
        }
    );
};

export default fp(tokenCookiePlugin, {
    name: FastifyPlugin.TokenCookies,
    dependencies: [
        FastifyPlugin.Env,
        FastifyPlugin.Jwt,
        FastifyPlugin.Awilix,
        FastifyPlugin.Prisma,
    ],
});
