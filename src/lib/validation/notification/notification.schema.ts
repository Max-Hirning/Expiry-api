import z from "zod";
import { NotificationTypes } from "@/database/master/generated/index.js";
import {
    paginationQuerySchema,
    paginationResponseSchema,
} from "../pagination/pagination.schema.js";

const defaultNotificationSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    type: z.enum(NotificationTypes),
    readAt: z.date().nullable(),
    isStarred: z.boolean(),
    userId: z.uuid(),
    teamName: z.string().nullable(),
    teamId: z.uuid().nullable(),
    documentName: z.string().nullable(),
    documentId: z.uuid().nullable(),
});

const fetchNotificationsQuerySchema = paginationQuerySchema
    .extend({
        search: z.string(),
        isStarred: z.preprocess(
            (val) => val === "true" || val === true,
            z.boolean()
        ),
        isRead: z.preprocess(
            (val) => val === "true" || val === true,
            z.boolean()
        ),
        types: z.union([
            z.enum(NotificationTypes).transform((val) => [val]),
            z.array(z.enum(NotificationTypes)),
        ]),
    })
    .partial();

type FetchNotificationsQueryInput = z.infer<
    typeof fetchNotificationsQuerySchema
>;

const fetchNotificationsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        notifications: z.array(defaultNotificationSchema),
        pagination: paginationResponseSchema,
    }),
});

type FetchNotificationsResponse = z.infer<
    typeof fetchNotificationsResponseSchema
>;

const updateNotificationsBodySchema = z
    .object({
        allRead: z.boolean(),
        notificationIds: z.array(z.uuid()).min(1),
    })
    .partial()
    .refine(
        ({ allRead, notificationIds }) =>
            allRead !== undefined ||
            (notificationIds !== undefined && notificationIds.length > 0),
        {
            message:
                "At least one of allRead or notificationIds must be provided",
        }
    );

const toggleStarredBodySchema = z.object({
    notificationIds: z.array(z.uuid()).min(1),
});

type ToggleStarredBodyInput = z.infer<typeof toggleStarredBodySchema>;

type UpdateNotificationsBodyInput = z.infer<
    typeof updateNotificationsBodySchema
>;

const updateNotificationsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        count: z.int(),
    }),
});

type UpdateNotificationsResponse = z.infer<
    typeof updateNotificationsResponseSchema
>;

const fetchNotificationResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        notification: defaultNotificationSchema,
    }),
});

type FetchNotificationResponse = z.infer<
    typeof fetchNotificationResponseSchema
>;

export {
    fetchNotificationsResponseSchema,
    defaultNotificationSchema,
    updateNotificationsResponseSchema,
    fetchNotificationsQuerySchema,
    updateNotificationsBodySchema,
    fetchNotificationResponseSchema,
    toggleStarredBodySchema,
};

export type {
    FetchNotificationsResponse,
    FetchNotificationsQueryInput,
    UpdateNotificationsResponse,
    UpdateNotificationsBodyInput,
    FetchNotificationResponse,
    ToggleStarredBodyInput,
};
