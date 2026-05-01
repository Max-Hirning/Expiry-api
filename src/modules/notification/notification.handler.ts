import { FastifyRequest, FastifyReply } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { NotificationService } from "./notification.service.js";
import {
    FetchNotificationsQueryInput,
    ToggleStarredBodyInput,
    UpdateNotificationsBodyInput,
} from "@/lib/validation/notification/notification.schema.js";

export type NotificationHandler = {
    getNotifications: (
        request: FastifyRequest<{
            Querystring: FetchNotificationsQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    toggleNotificationsReadAt: (
        request: FastifyRequest<{
            Body: UpdateNotificationsBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;

    toggleStarred: (
        request: FastifyRequest<{
            Body: ToggleStarredBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createNotificationHandler = (
    notificationService: NotificationService
): NotificationHandler => {
    return {
        getNotifications: async (request, reply) => {
            const { query, user } = request;

            const data = await notificationService.getNotifications({
                query,
                initiator: user,
            });

            return reply.send(data);
        },
        toggleNotificationsReadAt: async (request, reply) => {
            const { body, user } = request;

            const data = await notificationService.toggleNotificationsReadAt({
                body,
                initiator: user,
            });

            return reply.send(data);
        },
        toggleStarred: async (request, reply) => {
            const { body, user } = request;

            const data = await notificationService.toggleStarred({
                body,
                initiator: user,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createNotificationHandler, "notificationHandler");
