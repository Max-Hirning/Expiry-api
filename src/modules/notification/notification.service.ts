import { FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/index.js";
import {
    defaultNotificationSelector,
    NotificationRepository,
} from "@/database/master/repositories/notification/notification.repository.js";
import {
    FetchNotificationsQueryInput,
    FetchNotificationsResponse,
    ToggleStarredBodyInput,
    UpdateNotificationsBodyInput,
    UpdateNotificationsResponse,
} from "@/lib/validation/notification/notification.schema.js";

export type NotificationService = {
    getNotifications: (p: {
        query: FetchNotificationsQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchNotificationsResponse>;
    toggleNotificationsReadAt: (p: {
        body: UpdateNotificationsBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<UpdateNotificationsResponse>;
    toggleStarred: (p: {
        body: ToggleStarredBodyInput;
        initiator: FastifyRequest["user"];
    }) => Promise<UpdateNotificationsResponse>;
};

export const createNotificationService = (
    notificationRepository: NotificationRepository
): NotificationService => ({
    getNotifications: async ({ query, initiator }) => {
        const where: Prisma.NotificationWhereInput = {
            userId: initiator.id,
            ...(query.search && {
                OR: [
                    {
                        documentName: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                    {
                        teamName: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                    {
                        team: {
                            name: {
                                mode: "insensitive",
                                contains: query.search,
                            },
                        },
                    },
                ],
            }),
            ...(query.isStarred !== undefined && {
                isStarred: query.isStarred,
            }),
            ...(query.isRead === false && {
                readAt: null,
            }),
            ...(query.isRead === true && {
                readAt: {
                    not: null,
                },
            }),
            ...(query.types && {
                type: {
                    in: query.types,
                },
            }),
        };

        const notifications = await notificationRepository.findMany({
            where,
            orderBy: [
                {
                    createdAt: Prisma.SortOrder.desc,
                },
                {
                    id: Prisma.SortOrder.desc,
                },
            ],
            ...(query.cursor && {
                cursor: { id: query.cursor },
                skip: 1,
            }),
            take: query.limit,
            select: defaultNotificationSelector,
        });

        const nextCursor =
            notifications.length === query.limit
                ? notifications[notifications.length - 1].id
                : null;

        return {
            message: "Notifications fetched successfully.",
            data: {
                notifications,
                pagination: {
                    nextCursor,
                },
            },
        };
    },
    toggleNotificationsReadAt: async ({ body, initiator }) => {
        let count = 0;

        if (body.allRead) {
            const notifications = await notificationRepository.updateMany({
                where: {
                    userId: initiator.id,
                },
                data: {
                    readAt: body.allRead ? new Date() : null,
                },
            });

            count = notifications.count;

            return {
                message: "Notification updated successfully.",
                data: {
                    count,
                },
            };
        }

        if (body.notificationIds) {
            const result = await notificationRepository.toggleRead({
                notificationIds: body.notificationIds,
                userId: initiator.id,
            });

            count = result.count;

            return {
                message: "Notification updated successfully.",
                data: {
                    count,
                },
            };
        }

        return {
            message: "Notification updated successfully.",
            data: {
                count,
            },
        };
    },
    toggleStarred: async ({ body, initiator }) => {
        const result = await notificationRepository.toggleStarred({
            notificationIds: body.notificationIds,
            userId: initiator.id,
        });

        return {
            message: "Notifications updated successfully.",
            data: {
                count: result.count,
            },
        };
    },
});

addDIResolverName(createNotificationService, "notificationService");
