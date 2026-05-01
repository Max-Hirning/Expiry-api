import { FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { Prisma } from "@/database/master/generated/index.js";
import {
    defaultNotificationSelector,
    NotificationRepository,
} from "@/database/master/repositories/notification/notification.repository.js";
import {
    FetchNotificationResponse,
    FetchNotificationsQueryInput,
    FetchNotificationsResponse,
    NotificationParamsInput,
    ToggleStarredBodyInput,
    UpdateNotificationsBodyInput,
    UpdateNotificationsResponse,
} from "@/lib/validation/notification/notification.schema.js";

export type NotificationService = {
    getNotifications: (p: {
        query: FetchNotificationsQueryInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchNotificationsResponse>;
    toggleNotificationReadAt: (p: {
        params: NotificationParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchNotificationResponse>;
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
    toggleNotificationReadAt: async ({ params, initiator }) => {
        const notificationToUpdate =
            await notificationRepository.findUniqueOrFail({
                where: {
                    id: params.notificationId,
                    userId: initiator.id,
                },
            });

        const notification = await notificationRepository.update({
            where: {
                id: params.notificationId,
                userId: initiator.id,
            },
            data: {
                readAt: notificationToUpdate.readAt ? null : new Date(),
            },
        });

        return {
            message: "Notification updated successfully.",
            data: {
                notification,
            },
        };
    },
    toggleNotificationsReadAt: async ({ body, initiator }) => {
        const notifications = await notificationRepository.updateMany({
            where: {
                userId: initiator.id,
            },
            data: {
                readAt: body.allRead ? new Date() : null,
            },
        });

        return {
            message: "Notification updated successfully.",
            data: {
                count: notifications.count,
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
