import { z } from "zod";

const defaultNotificationPreferenceSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    teamNews: z.boolean(),
    documentNews: z.boolean(),
    inAppNotifications: z.boolean(),
    emailNotifications: z.boolean(),
});

export { defaultNotificationPreferenceSchema };
