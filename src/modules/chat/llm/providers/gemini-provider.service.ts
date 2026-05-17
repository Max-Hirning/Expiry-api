import { EnvConfig } from "@/types/env.type.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GEMINI_MODEL } from "@/modules/chat/llm/llm.constants.js";

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
