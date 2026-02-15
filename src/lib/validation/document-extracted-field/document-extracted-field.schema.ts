import { z } from "zod";
import {
    ExtractedFieldSources,
    ExtractedFieldTypes,
} from "@/database/team/generated/index.js";

const defaultDocumentExtractedFieldSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    type: z.enum(ExtractedFieldTypes),
    value: z.string(),
    confidence: z.number(),
    source: z.enum(ExtractedFieldSources),
    documentId: z.uuid(),
});

export { defaultDocumentExtractedFieldSchema };
