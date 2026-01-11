import fp from "fastify-plugin";
import cookie from "@fastify/cookie";
import { FastifyInstance } from "fastify";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";

const configureCookie = async (fastify: FastifyInstance) => {
    await fastify.register(cookie, {
        secret: fastify.config.APPLICATION_SECRET,
        parseOptions: {},
    });
};

export default fp(configureCookie, {
    dependencies: [FastifyPlugin.Env],
});
