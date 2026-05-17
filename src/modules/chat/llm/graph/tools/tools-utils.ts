import { z } from "zod";
import { FastifyBaseLogger } from "fastify";
import { TOOL_INTEGRITY_ERROR } from "../../llm.constants.js";

export const safeJson = (value: unknown): string => {
    try {
        return JSON.stringify(value);
    } catch {
        return TOOL_INTEGRITY_ERROR;
    }
};

export const validateOrFallback = <T>(
    schema: z.ZodType<T>,
    value: unknown,
    log: FastifyBaseLogger,
    context: { tool: string; teamId: string }
): string => {
    const parsed = schema.safeParse(value);

    if (!parsed.success) {
        log.error(
            { issues: parsed.error.issues, ...context },
            "AI tool output failed Zod validation"
        );

        return TOOL_INTEGRITY_ERROR;
    }

    return safeJson(parsed.data);
};

export const wrapToolError = (
    error: unknown,
    log: FastifyBaseLogger,
    context: { tool: string; teamId: string }
): string => {
    log.error({ error, ...context }, "AI tool execution failed");

    return TOOL_INTEGRITY_ERROR;
};
