import { JWT } from "@fastify/jwt";
import { User } from "@/database/master/generated/index.js";

let jwtInstance: JWT | null = null;

export const setJwtInstance = (jwt: JWT) => {
    jwtInstance = jwt;
};

export const generateToken = (user: User): string => {
    if (!jwtInstance) {
        throw new Error(
            "JWT instance not set. Call setJwtInstance in your test setup."
        );
    }

    return jwtInstance.sign({
        id: user.id,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
    });
};

export const getAuthHeaders = (token: string) => {
    return {
        authorization: `Bearer ${token}`,
    };
};
