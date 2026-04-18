import fp from "fastify-plugin";
import { asValue } from "awilix";
import { FastifyInstance } from "fastify";
import { Server as SocketIOServer } from "socket.io";
import { UnauthorizedError } from "@/lib/errors/errors.js";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";
import { User, UserStatuses } from "@/database/master/generated/index.js";
import { defaultUserSelector } from "@/database/master/repositories/user/user.repository.js";

const configureSocketIO = async (fastify: FastifyInstance) => {
    const io = new SocketIOServer(fastify.server, {
        cors: { origin: true, credentials: true },
        path: "/socket.io",
    });

    io.use(async (socket, next) => {
        try {
            const cookieHeader = socket.handshake.headers?.cookie ?? "";

            const cookies = Object.fromEntries(
                cookieHeader.split(";").map((c) => {
                    const [key, ...rest] = c.trim().split("=");

                    return [key, decodeURIComponent(rest.join("="))];
                })
            ) as {
                access_token: string;
                refresh_token: string;
            };

            const accessToken = cookies.access_token;

            const refreshToken = cookies.refresh_token;

            if (!accessToken || !refreshToken) {
                throw new UnauthorizedError("Unauthorized");
            }

            let tokenPayload: Pick<User, "id"> | null = null;

            try {
                tokenPayload =
                    fastify.jwt.verify<Pick<User, "id">>(accessToken);
            } catch {
                try {
                    tokenPayload =
                        fastify.jwt.verify<Pick<User, "id">>(refreshToken);

                    await fastify.prisma.master.refreshToken.findUniqueOrThrow({
                        where: {
                            userId: tokenPayload.id,
                            token: refreshToken,
                        },
                    });
                } catch {
                    throw new UnauthorizedError("Unauthorized");
                }
            }

            const user = await fastify.prisma.master.user.findUnique({
                where: {
                    id: tokenPayload.id,
                    status: UserStatuses.ACTIVE,
                    refreshToken: { token: refreshToken },
                },
                select: {
                    ...defaultUserSelector,
                    avatar: true,
                },
            });

            if (!user) {
                throw new UnauthorizedError("Unauthorized");
            }

            socket.data.user = user;

            return next();
        } catch {
            return next(new Error("Unauthorized"));
        }
    });

    io.on("connection", (socket) => {
        const chatSocketHandler = fastify.di.resolve("chatSocketHandler");
        chatSocketHandler.register(socket, io);
    });

    fastify.decorate("io", io);
    fastify.di.register({ io: asValue(io) });

    fastify.addHook("onClose", async () => {
        await new Promise<void>((resolve) => io.close(() => resolve()));
    });
};

export default fp(configureSocketIO, {
    name: FastifyPlugin.SocketIO,
    dependencies: [
        FastifyPlugin.Awilix,
        FastifyPlugin.Prisma,
        FastifyPlugin.Jwt,
        FastifyPlugin.Env,
    ],
});
