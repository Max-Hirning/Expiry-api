import { z } from "zod";
import { defaultUserSchema } from "../user/user.schema.js";
import { defaultAvatarSchema } from "../avatar/avatar.schema.js";

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
            avatar: defaultAvatarSchema
                .pick({
                    mimeType: true,
                    width: true,
                    height: true,
                    fileSize: true,
                })
                .optional(),
        }),
    invitationId: z.string().optional(),
    team: z.object({
        name: z.string(),
    }),
});

type SignUpBodyInput = z.infer<typeof signUpBodySchema>;

export { signUpBodySchema, signInBodySchema };

export type { SignUpBodyInput, SignInBodyInput };
