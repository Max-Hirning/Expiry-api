import { EnvConfig } from "@/types/env.type.js";
import { GEMINI_MODEL } from "../llm.constants.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export type GeminiProviderService = {
    create: (overrides?: {
        temperature?: number;
        model?: string;
    }) => ChatGoogleGenerativeAI;
};

export const createService = (config: EnvConfig): GeminiProviderService => ({
    create: (overrides) =>
        new ChatGoogleGenerativeAI({
            apiKey: config.GEMINI_API_KEY,
            model: overrides?.model ?? GEMINI_MODEL,
            temperature: overrides?.temperature ?? 0.2,
        }),
});

addDIResolverName(createService, "geminiProviderService");
