import { z } from "zod";

const defaultNotificationPreferenceSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    offerUpdates: z.boolean(),
    companyNews: z.boolean(),
    comments: z.boolean(),
    purchases: z.boolean(),
});

export { defaultNotificationPreferenceSchema };
