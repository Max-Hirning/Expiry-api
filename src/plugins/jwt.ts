import fp from "fastify-plugin";
import fastifyJWT from "@fastify/jwt";
import { FastifyInstance, FastifyRequest } from "fastify";
import { UnauthorizedError } from "@/lib/errors/errors.js";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";
import { User, UserStatuses } from "@/database/master/generated/index.js";

const configureJwt = async (fastify: FastifyInstance) => {
    fastify.register(fastifyJWT, {
        secret: fastify.config.APPLICATION_SECRET,
    });

    fastify.decorate("authorization", async (req: FastifyRequest) => {
        const accessToken =
            req.cookies?.access_token || req.headers.authorization;

        const refreshToken =
            req.cookies.refresh_token ||
            (req.headers["x-refresh-token"] as string | undefined);

        if (!accessToken || !refreshToken) {
            req.createNewTokens = false;
            req.updateToken = false;
            req.resetTokens = true;
            throw new UnauthorizedError("Unauthorized");
        }

        await fastify.prisma.master.refreshToken.deleteMany({
            where: {
                expiresAt: {
                    lte: new Date(),
                },
            },
        });

        try {
            const tokenPayload =
                fastify.jwt.verify<Pick<User, "id">>(accessToken);

            const user = await fastify.prisma.master.user.findUnique({
                where: {
                    id: tokenPayload.id,
                    status: UserStatuses.ACTIVE,
                    refreshToken: { token: refreshToken },
                },
                select: { id: true, role: true },
            });

            if (!user) {
                req.createNewTokens = false;
                req.updateToken = false;
                req.resetTokens = true;
                throw new UnauthorizedError("Unauthorized");
            }

            req.user = { id: user.id, role: user.role };
            req.createNewTokens = false;
            req.updateToken = false;
            req.resetTokens = false;
        } catch {
            try {
                const tokenPayload =
                    fastify.jwt.verify<Pick<User, "id">>(refreshToken);

                const user = await fastify.prisma.master.user.findUnique({
                    where: {
                        id: tokenPayload.id,
                        status: UserStatuses.ACTIVE,
                        refreshToken: { token: refreshToken },
                    },
                    select: { id: true, role: true },
                });

                if (!user) {
                    req.createNewTokens = false;
                    req.updateToken = false;
                    req.resetTokens = true;
                    throw new UnauthorizedError("Unauthorized");
                }

                req.user = { id: user.id, role: user.role };
                req.createNewTokens = false;
                req.updateToken = true;
                req.resetTokens = false;
            } catch {
                req.createNewTokens = false;
                req.updateToken = false;
                req.resetTokens = true;
                throw new UnauthorizedError("Unauthorized");
            }
        }
    });
};

export default fp(configureJwt, {
    name: FastifyPlugin.Jwt,
    dependencies: [FastifyPlugin.Env],
});
