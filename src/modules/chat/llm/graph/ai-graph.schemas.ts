import { z } from "zod";
import { AGENT_NAMES } from "../llm.constants.js";

export const routerOutputSchema = z.object({
    agents: z.array(z.enum(AGENT_NAMES)).min(1),
});

export const finalAnswerSchema = z.object({
    content: z.string().min(1).max(8000),
});

export type RouterOutput = z.infer<typeof routerOutputSchema>;
export type FinalAnswer = z.infer<typeof finalAnswerSchema>;
