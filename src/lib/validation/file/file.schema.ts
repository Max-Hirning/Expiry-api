import { z } from "zod";

const defaultFileSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    fileSize: z.number(),
    mimeType: z.string(),
    url: z.url(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    documentId: z.uuid(),
});

export { defaultFileSchema };
