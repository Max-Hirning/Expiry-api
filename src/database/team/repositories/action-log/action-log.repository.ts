import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/team/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export type ActionLogRepository = BaseRepository<"actionLog"> & {
    findUniqueOrFail: <TArgs extends Prisma.ActionLogFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.ActionLogGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.ActionLogFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.ActionLogGetPayload<TArgs>>;
    $disconnect: () => Promise<void>;
};

export const createActionLogRepository = (
    { team: prisma }: FastifyInstance["prisma"],
    dbUrl: string
): ActionLogRepository => {
    const client = prisma(dbUrl);
    const repository = generateRepository(client, "ActionLog");

    return {
        ...repository,
        $disconnect: () => client.$disconnect(),
        findUniqueOrFail: async <TArgs extends Prisma.ActionLogFindUniqueArgs>(
            args: TArgs
        ) => {
            const actionLog = await client.actionLog.findUnique(args);

            if (!actionLog) {
                throw new NotFoundError("Activity log not found.");
            }

            return actionLog as Prisma.ActionLogGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.ActionLogFindFirstArgs>(
            args: TArgs
        ) => {
            const actionLog = await client.actionLog.findFirst(args);

            if (!actionLog) {
                throw new NotFoundError("Activity log not found.");
            }

            return actionLog as Prisma.ActionLogGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createActionLogRepository, "actionLogRepository");
