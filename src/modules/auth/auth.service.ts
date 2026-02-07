import { randomUUID } from "crypto";
import { hashing } from "@/lib/hashing/hashing.js";
import { FileTypes } from "@/lib/gcp/gcp.types.js";
import { UserService } from "../user/user.service.js";
import { GcpService } from "@/lib/gcp/gcp.service.js";
import { ConflictError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { FetchUserResponse } from "@/lib/validation/user/user.schema.js";
import {
    defaultUserSelector,
    UserRepository,
} from "@/database/master/repositories/user/user.repository.js";
import {
    Avatar,
    TeamMemberRole,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/index.js";
import {
    FetchSignUpResponse,
    SignInBodyInput,
    SignUpBodyInput,
} from "@/lib/validation/auth/auth.schema.js";
import {
    createTenantDatabase,
    dropTenantDatabase,
    migrateTenantDatabase,
} from "@/database/infra/tenant.js";

export type AuthService = {
    signIn: (p: { body: SignInBodyInput }) => Promise<FetchUserResponse>;
    signUp: (p: { body: SignUpBodyInput }) => Promise<FetchSignUpResponse>;
};

export const createAuthService = (
    userRepository: UserRepository,
    userService: UserService,
    gcpService: GcpService,
    log: FastifyBaseLogger,
    prisma: FastifyInstance["prisma"]
): AuthService => {
    return {
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
                userService.checkIfTeamExists({
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
                userService.checkIfUserExists({
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

                await createTenantDatabase(teamId);

                await migrateTenantDatabase(teamId);

                const createdUser = await prisma.master.$transaction(
                    async (tx) => {
                        const createdTeam = await tx.team.create({
                            data: {
                                id: teamId,
                                name: team.name,
                                stats: {
                                    create: {
                                        totalDocuments: 0,
                                        processingDocuments: 0,
                                        activeDocuments: 0,
                                        archivedDocuments: 0,
                                        failedDocuments: 0,
                                        needsReviewDocuments: 0,
                                        highRiskDocuments: 0,
                                        mediumRiskDocuments: 0,
                                        lowRiskDocuments: 0,
                                        expiringSoonDocuments: 0,
                                    },
                                },
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
                    data: {
                        user: userInfo,
                        uploadUrl: avatarPayload?.uploadUrl || null,
                    },
                };
            } catch (error) {
                try {
                    await dropTenantDatabase(teamId);
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
