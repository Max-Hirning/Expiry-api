import { AwilixContainer } from "awilix";
import { EnvConfig } from "./env.type.js";
import { Cradle } from "./di-container.type.js";
import { TeamPrismaFactory } from "@/plugins/prisma.js";
import { PrismaClient as MasterPrisma } from "@/database/master/generated/client.js";

declare module "fastify" {
    export interface FastifyInstance {
        config: EnvConfig;
        prisma: {
            master: InstanceType<typeof MasterPrisma>;
            team: TeamPrismaFactory;
        };
        di: AwilixContainer<Cradle>;
    }
}
