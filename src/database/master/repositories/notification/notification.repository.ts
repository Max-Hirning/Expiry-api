import { FastifyInstance } from "fastify";
import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultNotificationSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    readAt: true,
    type: true,
    userId: true,
    teamName: true,
    teamId: true,
    documentName: true,
    documentId: true,
} satisfies Prisma.NotificationSelect;

export type NotificationRepository = BaseRepository<"notification"> & {
    findUniqueOrFail: <TArgs extends Prisma.NotificationFindUniqueArgs>(
        args: TArgs
    ) => Promise<Prisma.NotificationGetPayload<TArgs>>;
    findFirstOrFail: <TArgs extends Prisma.NotificationFindFirstArgs>(
        args: TArgs
    ) => Promise<Prisma.NotificationGetPayload<TArgs>>;
};

export const createNotificationRepository = ({
    master: prisma,
}: FastifyInstance["prisma"]): NotificationRepository => {
    const repository = generateRepository(prisma, "Notification");

    return {
        ...repository,
        findUniqueOrFail: async <
            TArgs extends Prisma.NotificationFindUniqueArgs,
        >(
            args: TArgs
        ) => {
            const notification = await prisma.notification.findUnique(args);

            if (!notification) {
                throw new NotFoundError("Team member not found.");
            }

            return notification as Prisma.NotificationGetPayload<TArgs>;
        },
        findFirstOrFail: async <TArgs extends Prisma.NotificationFindFirstArgs>(
            args: TArgs
        ) => {
            const notification = await prisma.notification.findFirst(args);

            if (!notification) {
                throw new NotFoundError("Team member not found.");
            }

            return notification as Prisma.NotificationGetPayload<TArgs>;
        },
    };
};

addDIResolverName(createNotificationRepository, "notificationRepository");
