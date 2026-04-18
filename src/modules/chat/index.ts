import { FastifyInstance } from "fastify";
import { createChatRoutes } from "./chat.route.js";

export const autoPrefix = "/api/chats/:teamId";

export default async function (fastify: FastifyInstance) {
    const chatHandler = fastify.di.resolve("chatHandler");
    createChatRoutes(fastify, chatHandler);
}
