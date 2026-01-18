import { FastifyInstance } from "fastify";
import { NotificationHandler } from "./notification.handler.js";
import {
    fetchNotificationsQuerySchema,
    fetchNotificationsResponseSchema,
    notificationParamsSchema,
    updateNotificationsBodySchema,
    updateNotificationsResponseSchema,
} from "@/lib/validation/notification/notification.schema.js";

export const createNotificationRoutes = (
    fastify: FastifyInstance,
    notificationHandler: NotificationHandler
) => {
    fastify.get(
        "/",
        {
            schema: {
                tags: ["notification"],
                summary: "Fetch notifications",
                querystring: fetchNotificationsQuerySchema,
                response: {
                    200: fetchNotificationsResponseSchema,
                },
            },
            preHandler: [fastify.authorization],
        },
        notificationHandler.getNotifications
    );

    fastify.patch(
        "/:notificationId",
        {
            schema: {
                tags: ["notification"],
                summary: "Update notification readAt",
                params: notificationParamsSchema,
                response: {
                    200: fetchNotificationsResponseSchema,
                },
            },
            preHandler: [fastify.authorization],
        },
        notificationHandler.toggleNotificationReadAt
    );

    fastify.patch(
        "/",
        {
            schema: {
                tags: ["notification"],
                summary: "Update notifications readAt",
                body: updateNotificationsBodySchema,
                response: {
                    200: updateNotificationsResponseSchema,
                },
            },
            preHandler: [fastify.authorization],
        },
        notificationHandler.toggleNotificationsReadAt
    );
};
