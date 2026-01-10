import { z } from "zod";

const defaultLogoSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    fileSize: z.number(),
    mimeType: z.string(),
    url: z.url(),
    width: z.number(),
    height: z.number(),
});

export { defaultLogoSchema };
