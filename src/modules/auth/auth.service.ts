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
    PrismaClient,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/index.js";

export type AuthService = {
    signIn: (p: { body: SignInBodyInput }) => Promise<FetchUserResponse>;
    signUp: (p: { body: SignUpBodyInput }) => Promise<FetchUserResponse>;
};

export const createAuthService = (
    teamRepository: TeamRepository,
    userRepository: UserRepository,
    prisma: PrismaClient
): AuthService => ({
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
        const { user, team } = body;

        const existedTeam = await teamRepository.findFirst({
            where: {
                name: team.name,
            },
        });

        if (existedTeam) {
            throw new ConflictError("Team with such name already exists");
        }

        const existedUser = await userRepository.findFirst({
            where: {
                email: user.email,
                phoneNumber: user.phoneNumber,
            },
        });

        if (existedUser) {
            if (existedUser.email === user.email) {
                throw new ConflictError("User with such email already exists");
            }

            if (existedUser.phoneNumber === user.phoneNumber) {
                throw new ConflictError(
                    "User with such phone number already exists"
                );
            }

            throw new ConflictError(
                "User with such credentials already exists"
            );
        }

        const password = await hashing.hashPassword(user.password);

        const [createdUser] = await prisma.$transaction([
            prisma.user.create({
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
});

addDIResolverName(createAuthService, "authService");
