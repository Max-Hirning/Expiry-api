import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { TeamStatRepository } from "@/database/master/repositories/team-stat/team-stat.repository.js";
import { TeamMemberRepository } from "@/database/master/repositories/team-member/team-member.repository.js";

export type TeamStatsDto = {
    totalDocuments: number;
    processingDocuments: number;
    activeDocuments: number;
    archivedDocuments: number;
    failedDocuments: number;
    needsReviewDocuments: number;
    highRiskDocuments: number;
    mediumRiskDocuments: number;
    lowRiskDocuments: number;
    expiringSoonDocuments: number;
};

export type MemberCountsByRoleDto = {
    role: string;
    count: number;
}[];

export type TeamStatsDataService = {
    getTeamStats: (p: { teamId: string }) => Promise<TeamStatsDto | null>;
    getMemberCountsByRole: (p: {
        teamId: string;
    }) => Promise<MemberCountsByRoleDto>;
};

export const createService = (
    teamStatRepository: TeamStatRepository,
    teamMemberRepository: TeamMemberRepository
): TeamStatsDataService => ({
    getTeamStats: async ({ teamId }) => {
        const stat = await teamStatRepository.findFirst({
            where: { teamId },
            select: {
                totalDocuments: true,
                processingDocuments: true,
                activeDocuments: true,
                archivedDocuments: true,
                failedDocuments: true,
                needsReviewDocuments: true,
                highRiskDocuments: true,
                mediumRiskDocuments: true,
                lowRiskDocuments: true,
                expiringSoonDocuments: true,
            },
        });

        return stat;
    },

    getMemberCountsByRole: async ({ teamId }) => {
        const grouped = await teamMemberRepository.groupBy({
            by: ["role"],
            where: { teamId },
            _count: { _all: true },
        });

        return grouped.map((g) => ({
            role: g.role,
            count: g._count._all,
        }));
    },
});

addDIResolverName(createService, "teamStatsDataService");
