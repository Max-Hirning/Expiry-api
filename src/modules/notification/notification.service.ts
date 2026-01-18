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
};

export const createNotificationService = (
    notificationRepository: NotificationRepository
): NotificationService => ({
    getNotifications: async ({ query, initiator }) => {
        const skip = (query.page - 1) * query.perPage;

        const where: Prisma.NotificationWhereInput = {
            userId: initiator.id,
        };

        const [notifications, total] = await Promise.all([
            notificationRepository.findMany({
                skip,
                where,
                take: query.perPage,
                orderBy: {
                    createdAt: Prisma.SortOrder.desc,
                },
                select: defaultNotificationSelector,
            }),
            notificationRepository.count({
                where,
            }),
        ]);

        const totalPages = Math.ceil(total / query.perPage);
        const prevPage = query.page > 1 ? query.page - 1 : null;
        const nextPage = query.page < totalPages ? query.page + 1 : null;

        return {
            message: "Notifications fetched successfully.",
            data: {
                notifications,
                pagination: {
                    page: query.page,
                    perPage: query.perPage,
                    prevPage,
                    nextPage,
                    totalPages,
                    total,
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
});

addDIResolverName(createNotificationService, "notificationService");
