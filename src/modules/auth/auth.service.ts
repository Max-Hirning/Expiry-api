import { hashing } from "@/lib/hashing/hashing.js";
import { ConflictError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FetchUserResponse } from "@/lib/validation/user/user.schema.js";
import { UserRepository } from "@/database/master/repositories/user/user.repository.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    SignInBodyInput,
    SignUpBodyInput,
} from "@/lib/validation/auth/auth.schema.js";
import {
    Prisma,
    PrismaClient,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/index.js";

export type AuthService = {
    checkIfUserExists: (p: Prisma.UserFindFirstArgs) => Promise<boolean>;
    signIn: (p: { body: SignInBodyInput }) => Promise<FetchUserResponse>;
    signUp: (p: { body: SignUpBodyInput }) => Promise<FetchUserResponse>;
};

export const createAuthService = (
    teamRepository: TeamRepository,
    userRepository: UserRepository,
    prisma: PrismaClient
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

        signIn: async ({ body }) => {
            const user = await userRepository.findFirstOrFail({
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
            });

            const isPasswordValid = await hashing.comparePassword(
                body.password,
                user.password
            );

            if (!isPasswordValid) {
                throw new ConflictError("Password is invalid");
            }

            return {
                user: "User signed in successfully.",
                data: { user },
            };
        },

        signUp: async ({ body }) => {
            const { user, invitationId, team } = body;

            await Promise.all([
                checkIfTeamExists({
                    where: {
                        name: team.name,
                    },
                }),
                checkIfUserExists({
                    where: {
                        OR: [
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

            const [createdUser] = await prisma.$transaction([
                invitationId
                    ? prisma.user.update({
                        where: {
                            id: invitationId,
                        },
                        data: {
                            status: UserStatuses.ACTIVE,
                            fullName: user.fullName,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            password,
                        },
                    })
                    : prisma.user.create({
                        data: {
                            role: UserRoles.USER,
                            status: UserStatuses.ACTIVE,
                            fullName: user.fullName,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            password,
                        },
                    }),
                prisma.team.create({
                    data: {
                        name: team.name,
                    },
                }),
            ]);

            return {
                user: "User signed up successfully.",
                data: { user: createdUser },
            };
        },
    };
};

addDIResolverName(createAuthService, "authService");
