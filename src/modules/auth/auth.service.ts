import { randomUUID } from "crypto";
import { EnvConfig } from "@/types/env.type.js";
import { hashing } from "@/lib/hashing/hashing.js";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { UserService } from "../user/user.service.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { ConflictError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { migrateTenantDatabase } from "@/database/infra/tenant.js";
import { FetchUserResponse } from "@/lib/validation/user/user.schema.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    SignInBodyInput,
    SignUpBodyInput,
} from "@/lib/validation/auth/auth.schema.js";
import {
    defaultUserSelector,
    UserRepository,
} from "@/database/master/repositories/user/user.repository.js";
import {
    Avatar,
    Prisma,
    TeamMemberRole,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/index.js";

export type AuthService = {
    checkIfUserExists: (p: Prisma.UserFindFirstArgs) => Promise<boolean>;
    checkIfTeamExists: (p: Prisma.TeamFindFirstArgs) => Promise<boolean>;
    signIn: (p: { body: SignInBodyInput }) => Promise<FetchUserResponse>;
    signUp: (p: { body: SignUpBodyInput }) => Promise<FetchUserResponse>;
};

export const createAuthService = (
    teamRepository: TeamRepository,
    userRepository: UserRepository,
    userService: UserService,
    gcpService: GcpService,
    log: FastifyBaseLogger,
    config: EnvConfig,
    prisma: FastifyInstance["prisma"]
): AuthService => {
    const checkIfUserExists = async (args: Prisma.UserFindFirstArgs) => {
        const existedUser = await userRepository.findFirst(args);

        if (existedUser) {
            if (existedUser.email === args.where?.email) {
                throw new ConflictError("User with such email already exists");
            }

            if (existedUser.phoneNumber === args.where?.phoneNumber) {
                throw new ConflictError(
                    "User with such phone number already exists"
                );
            }

            throw new ConflictError(
                "User with such credentials already exists"
            );
        }

        return false;
    };

    const checkIfTeamExists = async (args: Prisma.TeamFindFirstArgs) => {
        const existedTeam = await teamRepository.findFirst(args);

        if (existedTeam) {
            throw new ConflictError("Team with such name already exists");
        }

        return false;
    };

    return {
        checkIfUserExists,
        checkIfTeamExists,

        signIn: async ({ body }) => {
            const userToSignIn = await userRepository.findFirstOrFail({
                where: {
                    OR: [
                        {
                            email: body.identifier,
                        },
                        {
                            phoneNumber: body.identifier,
                        },
                    ],
                },
                select: defaultUserSelector,
            });

            const isPasswordValid = await hashing.comparePassword(
                body.password,
                userToSignIn.password
            );

            if (!isPasswordValid) {
                throw new ConflictError("Password is invalid");
            }

            const {
                data: { user },
            } = await userService.getUser({
                params: {
                    userId: userToSignIn.id,
                },
            });

            return {
                message: "User signed in successfully.",
                data: { user },
            };
        },

        signUp: async ({ body }) => {
            const { user, invitationId, team } = body;
            const teamId = randomUUID();
            const userId = invitationId || randomUUID();

            await Promise.all([
                checkIfTeamExists({
                    where: {
                        OR: [
                            {
                                id: teamId,
                            },
                            {
                                name: team.name,
                            },
                        ],
                    },
                }),
                checkIfUserExists({
                    where: {
                        OR: [
                            {
                                id: userId,
                            },
                            {
                                email: user.email,
                            },
                            {
                                phoneNumber: user.phoneNumber,
                            },
                        ],
                    },
                }),
            ]);

            const password = await hashing.hashPassword(user.password);
            let avatarPayload:
                | (Pick<Avatar, "url" | "key" | "expiredAt"> & {
                      uploadUrl: string;
                  })
                | null = null;

            try {
                if (user.avatar) {
                    const { key, url: uploadUrl } = await gcpService.uploadFile(
                        {
                            keyPayload: {
                                type: FileTypes.AVATAR,
                                userId: userId,
                            },
                            mimeType: user.avatar.mimeType,
                        }
                    );

                    const { url, expiredAt } = await gcpService.getFileUrl({
                        key,
                        type: FileTypes.AVATAR,
                    });

                    avatarPayload = {
                        url,
                        key,
                        expiredAt,
                        uploadUrl,
                    };
                }

                await prisma.master.$queryRaw`
                    DO $$
                    BEGIN
                        IF NOT EXISTS (SELECT FROM pg_database WHERE datname = ${teamId}) THEN
                            EXECUTE format('CREATE DATABASE %I', ${teamId});
                        END IF;
                    END
                    $$;
                `;

                await migrateTenantDatabase(
                    config.DATABASE_URL.replace("/postgres", `/${teamId}`)
                );

                const createdUser = await prisma.master.$transaction(
                    async (tx) => {
                        const createdTeam = await tx.team.create({
                            data: {
                                id: teamId,
                                name: team.name,
                            },
                        });

                        if (invitationId) {
                            return tx.user.update({
                                where: {
                                    id: userId,
                                },
                                data: {
                                    status: UserStatuses.ACTIVE,
                                    fullName: user.fullName,
                                    email: user.email,
                                    phoneNumber: user.phoneNumber,
                                    password,
                                    teamMembers: {
                                        create: {
                                            role: TeamMemberRole.ADMIN,
                                            teamId: createdTeam.id,
                                        },
                                    },
                                },
                                select: defaultUserSelector,
                            });
                        }

                        return tx.user.create({
                            data: {
                                id: userId,
                                role: UserRoles.USER,
                                status: UserStatuses.ACTIVE,
                                fullName: user.fullName,
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                password,
                                teamMembers: {
                                    create: {
                                        role: TeamMemberRole.ADMIN,
                                        teamId: createdTeam.id,
                                    },
                                },
                                ...(user.avatar &&
                                    avatarPayload && {
                                    avatar: {
                                        create: {
                                            key: avatarPayload.key,
                                            fileSize: user.avatar.fileSize,
                                            mimeType: user.avatar.mimeType,
                                            url: avatarPayload.url,
                                            expiredAt:
                                                    avatarPayload.expiredAt,
                                            width: user.avatar.width,
                                            height: user.avatar.height,
                                        },
                                    },
                                }),
                                notificationPreferences: {
                                    create: {
                                        teamNews: true,
                                        documentNews: true,
                                        inAppNotifications: true,
                                        emailNotifications: true,
                                    },
                                },
                            },
                            select: defaultUserSelector,
                        });
                    }
                );

                const {
                    data: { user: userInfo },
                } = await userService.getUser({
                    params: {
                        userId: createdUser.id,
                    },
                });

                return {
                    message: "User signed up successfully.",
                    data: { user: userInfo },
                };
            } catch (error) {
                try {
                    await prisma.master.$queryRaw`
                        DROP DATABASE IF EXISTS ${teamId};
                    `;
                } catch (error) {
                    log.error({ error }, "Failed to delete team DB");
                }

                if (avatarPayload) {
                    await gcpService.deleteFile(avatarPayload.key);
                }

                throw error;
            }
        },
    };
};

addDIResolverName(createAuthService, "authService");
