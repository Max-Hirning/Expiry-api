import { z } from "zod";
import {
    ExtractedFieldSource,
    ExtractedFieldType,
} from "@/database/team/generated/index.js";

const defaultDocumentExtractedFieldSchema = z.object({
    id: z.uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    type: z.enum(ExtractedFieldType),
    value: z.string(),
    confidence: z.number(),
    source: z.enum(ExtractedFieldSource),
    documentId: z.uuid(),
});

export { defaultDocumentExtractedFieldSchema };
