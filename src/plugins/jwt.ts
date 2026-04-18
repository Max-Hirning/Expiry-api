import fp from "fastify-plugin";
import fastifyJWT from "@fastify/jwt";
import { addMinutes, isPast } from "date-fns";
import { Actions } from "@/modules/auth/auth.types.js";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";
import { ChatMemberStatus } from "@/database/team/generated/index.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { ChatParamsInput } from "@/lib/validation/chat/chat.schema.js";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ForbiddenError, UnauthorizedError } from "@/lib/errors/errors.js";
import { LAST_SEEN_DEBOUNCE_MINUTES } from "@/modules/user/user.constants.js";
import { DocumentParamsInput } from "@/lib/validation/document/document.schema.js";
import { defaultUserSelector } from "@/database/master/repositories/user/user.repository.js";
import {
    TeamMemberRoles,
    User,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/index.js";
import {
    InviteUserBodyInput,
    UpdateTeamMemberRolesParamsInput,
    UserParamsInput,
} from "@/lib/validation/user/user.schema.js";

const configureJwt = async (fastify: FastifyInstance) => {
    fastify.register(fastifyJWT, {
        secret: fastify.config.APPLICATION_SECRET,
    });

    fastify.decorate("authorization", async (req: FastifyRequest) => {
        const accessToken =
            req.cookies.access_token || req.headers.authorization;

        const refreshToken =
            req.cookies.refresh_token ||
            (req.headers["x-refresh-token"] as string | undefined);

        if (!accessToken || !refreshToken) {
            req.createNewTokens = false;
            req.updateToken = false;
            req.resetTokens = true;
            throw new UnauthorizedError("Unauthorized");
        }

        let tokenPayload: Pick<User, "id"> | null = null;

        try {
            tokenPayload = fastify.jwt.verify<Pick<User, "id">>(accessToken);
        } catch {
            try {
                tokenPayload =
                    fastify.jwt.verify<Pick<User, "id">>(refreshToken);

                await fastify.prisma.master.refreshToken.findUniqueOrThrow({
                    where: {
                        userId: tokenPayload.id,
                        token: refreshToken,
                    },
                });
            } catch {
                req.createNewTokens = false;
                req.updateToken = false;
                req.resetTokens = true;
                throw new UnauthorizedError("Unauthorized");
            }
        }

        const user = await fastify.prisma.master.user.findUnique({
            where: {
                id: tokenPayload.id,
                status: UserStatuses.ACTIVE,
                refreshToken: { token: refreshToken },
            },
            select: {
                ...defaultUserSelector,
                avatar: true,
            },
        });

        if (!user) {
            req.createNewTokens = false;
            req.updateToken = false;
            req.resetTokens = true;
            throw new UnauthorizedError("Unauthorized");
        }

        req.user = user;
        req.createNewTokens = false;
        req.updateToken = false;
        req.resetTokens = false;

        try {
            const isStale =
                !user.lastSeenAt ||
                isPast(addMinutes(user.lastSeenAt, LAST_SEEN_DEBOUNCE_MINUTES));

            if (isStale) {
                await fastify.prisma.master.user.update({
                    where: { id: user.id },
                    data: { lastSeenAt: new Date() },
                });
            }
        } catch {
            req.createNewTokens = false;
            req.updateToken = false;
            req.resetTokens = true;
            throw new UnauthorizedError("Unauthorized");
        }
    });

    fastify.decorate(
        "checkAccess",
        (
            action: Actions
        ): ((req: FastifyRequest, reply: FastifyReply) => Promise<void>) => {
            return async (req) => {
                if (Actions.TOGGLE_USER_STATUS === action) {
                    const { role } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: UserParamsInput;
                    }>;

                    if (
                        (
                            [
                                UserRoles.SUB_ADMIN,
                                UserRoles.SUPER_ADMIN,
                            ] as UserRoles[]
                        ).includes(role)
                    ) {
                        const userToUpdate =
                            await fastify.prisma.master.user.findFirst({
                                where: {
                                    id: params.userId,
                                    role: UserRoles.SUB_ADMIN,
                                },
                            });

                        if (userToUpdate) {
                            return;
                        }
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (action === Actions.INVITE_USER) {
                    const { role, id } = req.user;

                    const { body } = req as FastifyRequest<{
                        Body: InviteUserBodyInput;
                    }>;

                    if (body.teamId && role === UserRoles.USER) {
                        const team = await fastify.prisma.master.team.findFirst(
                            {
                                where: {
                                    id: body.teamId,
                                    teamMembers: {
                                        some: {
                                            role: TeamMemberRoles.ADMIN,
                                            userId: id,
                                        },
                                    },
                                },
                            }
                        );

                        if (team) {
                            return;
                        }
                    }

                    if (role === UserRoles.SUPER_ADMIN) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (Actions.DELETE_USER === action) {
                    const { id, role } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: UserParamsInput;
                    }>;

                    if (id === params.userId && role !== UserRoles.SUB_ADMIN) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (
                    [
                        Actions.UPDATE_USER,
                        Actions.UPDATE_USER_PASSWORD,
                    ].includes(action)
                ) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: UserParamsInput;
                    }>;

                    if (id === params.userId) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (action === Actions.GET_USER) {
                    const { id, role } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: UserParamsInput;
                    }>;

                    if (
                        (
                            [
                                UserRoles.SUB_ADMIN,
                                UserRoles.SUPER_ADMIN,
                            ] as UserRoles[]
                        ).includes(role)
                    ) {
                        return;
                    }

                    if (id === params.userId) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (Actions.GET_TEAM === action) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: TeamParamsInput;
                    }>;

                    const team = await fastify.prisma.master.team.findFirst({
                        where: {
                            id: params.teamId,
                            teamMembers: {
                                some: {
                                    userId: id,
                                },
                            },
                        },
                    });

                    if (team) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (
                    [Actions.DELETE_TEAM, Actions.UPDATE_TEAM].includes(action)
                ) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: TeamParamsInput;
                    }>;

                    const team = await fastify.prisma.master.team.findFirst({
                        where: {
                            id: params.teamId,
                            teamMembers: {
                                some: {
                                    userId: id,
                                    role: TeamMemberRoles.ADMIN,
                                },
                            },
                        },
                    });

                    if (team) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if ([Actions.GET_TEAMS, Actions.CREATE_TEAM].includes(action)) {
                    const { role } = req.user;

                    if (role === UserRoles.USER) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (action === Actions.GET_ACTION_LOGS) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: TeamParamsInput;
                    }>;

                    const team = await fastify.prisma.master.team.findFirst({
                        where: {
                            id: params.teamId,
                            teamMembers: {
                                some: {
                                    userId: id,
                                },
                            },
                        },
                    });

                    if (team) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (action === Actions.UPDATE_TEAM_MEMBER_ROLE) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: UpdateTeamMemberRolesParamsInput;
                    }>;

                    const team = await fastify.prisma.master.team.findFirst({
                        where: {
                            id: params.teamId,
                            teamMembers: {
                                some: {
                                    userId: id,
                                    role: TeamMemberRoles.OWNER,
                                },
                            },
                        },
                    });

                    if (team) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (
                    [
                        Actions.GET_DOCUMENT,
                        Actions.DELETE_DOCUMENT,
                        Actions.UPDATE_DOCUMENT,
                        Actions.GET_DOCUMENTS,
                        Actions.CREATE_DOCUMENT,
                    ].includes(action)
                ) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: DocumentParamsInput;
                    }>;

                    const team = await fastify.prisma.master.team.findFirst({
                        where: {
                            id: params.teamId,
                            teamMembers: {
                                some: {
                                    userId: id,
                                },
                            },
                        },
                    });

                    if (team) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (action === Actions.GET_CHATS) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: TeamParamsInput;
                    }>;

                    const team = await fastify.prisma.master.team.findFirst({
                        where: {
                            id: params.teamId,
                            teamMembers: { some: { userId: id } },
                        },
                    });

                    if (team) {
                        return;
                    }

                    throw new ForbiddenError("Forbidden");
                }

                if (
                    [
                        Actions.GET_CHAT,
                        Actions.GET_MESSAGES,
                        Actions.SEND_MESSAGE,
                        Actions.EDIT_MESSAGE,
                        Actions.DELETE_MESSAGE,
                        Actions.MARK_MESSAGES_READ,
                    ].includes(action)
                ) {
                    const { id } = req.user;

                    const { params } = req as FastifyRequest<{
                        Params: ChatParamsInput;
                    }>;

                    const teamUrl =
                        fastify.config.MASTER_DATABASE_URL.replaceAll(
                            "5432/expiry",
                            `5432/${params.teamId}`
                        );

                    const teamClient = fastify.prisma.team(teamUrl);

                    try {
                        const member = await teamClient.chatMember.findFirst({
                            where: {
                                chatId: params.chatId,
                                userId: id,
                                status: ChatMemberStatus.ACTIVE,
                            },
                        });

                        if (member) {
                            return;
                        }

                        throw new ForbiddenError("Forbidden");
                    } finally {
                        await teamClient.$disconnect();
                    }
                }
            };
        }
    );
};

export default fp(configureJwt, {
    name: FastifyPlugin.Jwt,
    dependencies: [FastifyPlugin.Env],
});
