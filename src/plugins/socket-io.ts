import fp from "fastify-plugin";
import { asValue } from "awilix";
import { FastifyInstance } from "fastify";
import { Server as SocketIOServer } from "socket.io";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";

const configureSocketIO = async (fastify: FastifyInstance) => {
    const io = new SocketIOServer(fastify.server, {
        cors: { origin: true, credentials: true },
        path: "/socket.io",
    });

    io.use(async (socket, next) => {
        try {
            const token =
                socket.handshake.auth?.token ??
                socket.handshake.headers?.authorization;

            if (!token) {
                return next(new Error("Unauthorized"));
            }

            const payload = fastify.jwt.verify<{ id: string }>(token);

            const user = await fastify.prisma.master.user.findUnique({
                where: { id: payload.id },
                select: { id: true, fullName: true, role: true },
            });

            if (!user) {
                return next(new Error("Unauthorized"));
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
