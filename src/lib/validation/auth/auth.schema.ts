import { z } from "zod";
import { defaultUserSchema } from "../user/user.schema.js";

const signInBodySchema = z.object({
    identifier: z.union([z.email(), z.string()]),
    password: z.string(),
});

type SignInBodyInput = z.infer<typeof signInBodySchema>;

const signUpBodySchema = z.object({
    user: defaultUserSchema
        .pick({
            email: true,
            phoneNumber: true,
            fullName: true,
        })
        .extend({
            password: z.string(),
        }),
    team: z.object({
        name: z.string(),
    }),
});

type SignUpBodyInput = z.infer<typeof signUpBodySchema>;

export { signUpBodySchema, signInBodySchema };

export type { SignUpBodyInput, SignInBodyInput };
