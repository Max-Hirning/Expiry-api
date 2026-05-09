import { JWT } from "@fastify/jwt";
import { addDays } from "date-fns";
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
    return { authorization: `Bearer ${token}` };
};

export type AuthSession = {
    accessToken: string;
    refreshToken: string;
    headers: Record<string, string>;
};

export const createAuthSessionFor = async (
    user: User,
    masterPrismaClient: {
        refreshToken: {
            upsert: (args: {
                where: { userId: string };
                create: {
                    userId: string;
                    token: string;
                    expiresAt: Date;
                };
                update: { token: string; expiresAt: Date };
            }) => Promise<unknown>;
        };
    }
): Promise<AuthSession> => {
    if (!jwtInstance) {
        throw new Error("JWT instance not set");
    }

    const accessToken = jwtInstance.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,
        },
        { expiresIn: "15m" }
    );

    const refreshToken = jwtInstance.sign(
        { id: user.id },
        { expiresIn: "30d" }
    );

    await masterPrismaClient.refreshToken.upsert({
        where: { userId: user.id },
        create: {
            userId: user.id,
            token: refreshToken,
            expiresAt: addDays(new Date(), 30),
        },
        update: {
            token: refreshToken,
            expiresAt: addDays(new Date(), 30),
        },
    });

    return {
        accessToken,
        refreshToken,
        headers: {
            authorization: accessToken,
            "x-refresh-token": refreshToken,
        },
    };
};
