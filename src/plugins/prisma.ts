import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import { PrismaPg } from "@prisma/adapter-pg";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";
import { PrismaClient as TeamPrisma } from "@/database/team/generated/client.js";
import { PrismaClient as MasterPrisma } from "@/database/master/generated/client.js";

export type TeamPrismaFactory = (
    schema: string
) => InstanceType<typeof TeamPrisma>;

const configurePrisma = async (fastify: FastifyInstance) => {
    const masterPrisma = new MasterPrisma();
    await masterPrisma.$connect();

    const createTeamPrisma: TeamPrismaFactory = (schema) => {
        const adapter = new PrismaPg(
            {
                connectionString: fastify.config.DATABASE_URL,
            },
            {
                schema,
            }
        );

        const client = new TeamPrisma({ adapter });
        client.$connect();

        return client;
    };

    fastify.decorate("prisma", {
        master: masterPrisma,
        team: createTeamPrisma,
    });

    fastify.addHook("onClose", async () => {
        await masterPrisma.$disconnect();
    });
};

export default fp(configurePrisma, {
    name: FastifyPlugin.Prisma,
    dependencies: [FastifyPlugin.Env],
});
