import { AwilixContainer } from "awilix";
import { EnvConfig } from "./env.type.ts";
import { Cradle } from "./di-container.type.ts";
import { Actions } from "@/modules/auth/auth.types.ts";
import { TeamPrismaFactory } from "@/plugins/prisma.js";
import type { Avatar, User } from "@/database/master/generated/client.js";
import { PrismaClient as MasterPrisma } from "@/database/master/generated/client.js";

declare module "@fastify/jwt" {
    interface FastifyJWT {
        cookies: {
            access_token?: string;
            refresh_token?: string;
        };
        user: Pick<User, "id" | "role" | "fullName"> & {
            avatar: Omit<Avatar, "key" | "expiredAt" | "userId"> | null;
        };
        createNewTokens: boolean;
        updateToken: boolean;
        updateUserSession: boolean;
        resetTokens: boolean;
    }
}

declare module "fastify" {
    export interface FastifyInstance {
        config: EnvConfig;
        prisma: {
            master: InstanceType<typeof MasterPrisma>;
            team: TeamPrismaFactory;
        };
        di: AwilixContainer<Cradle>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authorization: any;
        checkAccess: (
            action: Actions
        ) => (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }

    export interface FastifyRequest {
        cookies: {
            access_token?: string;
            refresh_token?: string;
        };
        user: Pick<User, "id" | "role" | "fullName"> & {
            avatar: Omit<Avatar, "key" | "expiredAt" | "userId"> | null;
        };
        createNewTokens: boolean;
        updateToken: boolean;
        updateUserSession: boolean;
        resetTokens: boolean;
    }
}
