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
    isStarred: true,
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
    toggleStarred: (p: {
        notificationIds: string[];
        userId: string;
    }) => Promise<{ count: number }>;
    toggleRead: (p: {
        notificationIds: string[];
        userId: string;
    }) => Promise<{ count: number }>;
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
        toggleStarred: async ({ notificationIds, userId }) => {
            const result = await prisma.$queryRaw<{ count: bigint }[]>`
                WITH updated AS (
                    UPDATE notifications
                    SET
                        is_starred = NOT is_starred,
                        updated_at = now()
                    WHERE
                        id = ANY(${notificationIds}::uuid[])
                        AND user_id = ${userId}::uuid
                    RETURNING id
                )
                SELECT COUNT(*) AS count FROM updated
            `;

            return { count: Number(result[0]?.count ?? 0) };
        },
        toggleRead: async ({ notificationIds, userId }) => {
            const result = await prisma.$queryRaw<{ count: bigint }[]>`
                WITH updated AS (
                    UPDATE notifications
                    SET
                        read_at = CASE WHEN read_at IS NULL THEN now() ELSE NULL END,
                        updated_at = now()
                    WHERE
                        id = ANY(${notificationIds}::uuid[])
                        AND user_id = ${userId}::uuid
                    RETURNING id
                )
                SELECT COUNT(*) AS count FROM updated
            `;

            return { count: Number(result[0]?.count ?? 0) };
        },
    };
};

addDIResolverName(createNotificationRepository, "notificationRepository");
