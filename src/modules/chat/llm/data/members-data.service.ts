import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { TeamMemberRepository } from "@/database/master/repositories/team-member/team-member.repository.js";

export type MemberDto = {
    userId: string;
    fullName: string;
    email: string;
    role: string;
};

export type MembersDataService = {
    getTeamMembers: (p: {
        teamId: string;
        limit?: number;
    }) => Promise<MemberDto[]>;
    findMembersByName: (p: {
        teamId: string;
        query: string;
        limit?: number;
    }) => Promise<MemberDto[]>;
    getMemberByUserId: (p: {
        teamId: string;
        userId: string;
    }) => Promise<MemberDto | null>;
};

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;

const clampLimit = (limit?: number) =>
    Math.min(Math.max(1, limit ?? DEFAULT_LIMIT), MAX_LIMIT);

export const createService = (
    teamMemberRepository: TeamMemberRepository
): MembersDataService => {
    const getMembers = async (
        teamId: string,
        extraWhere: Record<string, unknown> = {},
        limit?: number
    ): Promise<MemberDto[]> => {
        const take = clampLimit(limit);

        const rows = await teamMemberRepository.findMany({
            where: { teamId, ...extraWhere },
            take,
            select: {
                role: true,
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                    },
                },
            },
        });

        return rows.map((row) => ({
            userId: row.user.id,
            fullName: row.user.fullName,
            email: row.user.email,
            role: row.role,
        }));
    };

    return {
        getTeamMembers: async ({ teamId, limit }) =>
            getMembers(teamId, {}, limit),

        findMembersByName: async ({ teamId, query, limit }) => {
            const take = clampLimit(limit);

            const rows = await teamMemberRepository.findMany({
                where: {
                    teamId,
                    user: {
                        OR: [
                            {
                                fullName: {
                                    contains: query,
                                    mode: "insensitive",
                                },
                            },
                            {
                                email: {
                                    contains: query,
                                    mode: "insensitive",
                                },
                            },
                        ],
                    },
                },
                take,
                select: {
                    role: true,
                    user: {
                        select: {
                            id: true,
                            fullName: true,
                            email: true,
                        },
                    },
                },
            });

            return rows.map((row) => ({
                userId: row.user.id,
                fullName: row.user.fullName,
                email: row.user.email,
                role: row.role,
            }));
        },

        getMemberByUserId: async ({ teamId, userId }) => {
            const row = await teamMemberRepository.findFirst({
                where: { teamId, userId },
                select: {
                    role: true,
                    user: {
                        select: {
                            id: true,
                            fullName: true,
                            email: true,
                        },
                    },
                },
            });

            if (!row) {
                return null;
            }

            return {
                userId: row.user.id,
                fullName: row.user.fullName,
                email: row.user.email,
                role: row.role,
            };
        },
    };
};

addDIResolverName(createService, "membersDataService");
