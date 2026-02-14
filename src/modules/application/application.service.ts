import { shuffle } from "lodash";
import { addYears } from "date-fns";
import { randomUUID } from "crypto";
import { EnvConfig } from "@/types/env.type.js";
import { hashing } from "@/lib/hashing/hashing.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { images, teams, users } from "./application.constants.js";
import { getRandomInt, splitRandomSum } from "./application.utils.js";
import { Prisma as MasterPrisma } from "@/database/master/generated/index.js";
import { PrismaClient as TeamPrisma } from "@/database/team/generated/index.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import {
    createTenantDatabase,
    migrateTenantDatabase,
} from "@/database/infra/tenant.js";
import {
    createTagRepository,
    TagRepository,
} from "@/database/team/repositories/tag/tag.repository.js";
import {
    createDocumentRepository,
    DocumentRepository,
} from "@/database/team/repositories/document/docuement.repository.js";
import {
    ActionLogRepository,
    createActionLogRepository,
} from "@/database/team/repositories/action-log/action-log.repository.js";
import {
    createDocumentTagRepository,
    DocumentTagRepository,
} from "@/database/team/repositories/document-tag/document-tag.repository.js";

export type ApplicationService = {
    healthChecker: () => Promise<string>;
    initDocumentRepository: (teamId: string) => Promise<DocumentRepository>;
    initTagRepository: (teamId: string) => Promise<TagRepository>;
    initDocumentTagRepository: (
        teamId: string
    ) => Promise<DocumentTagRepository>;
    initActionLogRepository: (teamId: string) => Promise<ActionLogRepository>;
    initTeamTenantClient: (teamId: string) => Promise<TeamPrisma>;
    setTestData: () => Promise<string>;
};

export const createApplicationService = (
    teamRepository: TeamRepository,
    config: EnvConfig,
    log: FastifyBaseLogger,
    prisma: FastifyInstance["prisma"]
): ApplicationService => {
    const createTestTeamMembers = async (
        tx: MasterPrisma.TransactionClient,
        users: { id: string }[],
        createdTeams: { id: string }[]
    ) => {
        const shuffledUsers = shuffle(users);

        const teamMembersData: {
            role: "ADMIN" | "STAFF";
            userId: string;
            teamId: string;
        }[] = [];

        let userIndex = 0;

        for (const team of createdTeams) {
            let adminCount = 0;

            const membersPerTeam = Math.floor(
                users.length / createdTeams.length
            );

            const extra = users.length % createdTeams.length;

            const teamSize = membersPerTeam + (extra > 0 ? 1 : 0);

            for (let index = 0; index < teamSize; index++) {
                const user = shuffledUsers[userIndex];
                userIndex++;

                const role: "ADMIN" | "STAFF" =
                    adminCount < 2 && Math.random() < 0.5 ? "ADMIN" : "STAFF";

                if (role === "ADMIN") {
                    adminCount++;
                }

                teamMembersData.push({
                    role,
                    userId: user.id,
                    teamId: team.id,
                });

                if (userIndex >= shuffledUsers.length) {
                    break;
                }
            }
        }

        await tx.teamMember.createMany({
            data: teamMembersData,
        });
    };

    return {
        healthChecker: async () => {
            return "pong";
        },
        setTestData: async () => {
            const password = await hashing.hashPassword("Password1!");

            const createdTeams = await prisma.master.$transaction(
                async (tx) => {
                    const createdUsers = await tx.user.createManyAndReturn({
                        data: users.map((user) => ({
                            ...user,
                            password,
                        })),
                    });

                    await tx.avatar.createMany({
                        data: createdUsers
                            .slice(0, 15)
                            .reduce<
                                MasterPrisma.AvatarCreateManyInput[]
                            >((res, { id }) => {
                                const url =
                                    images[getRandomInt(0, images.length - 1)];

                                if (url) {
                                    res.push({
                                        key: randomUUID(),
                                        fileSize: 1000,
                                        mimeType: "image/jpeg",
                                        url,
                                        expiredAt: addYears(new Date(), 100),
                                        width: 600,
                                        height: 600,
                                        userId: id,
                                    });
                                }

                                return res;
                            }, []),
                    });

                    await tx.notificationPreference.createMany({
                        data: createdUsers.map(({ id }) => ({
                            teamNews: true,
                            documentNews: true,
                            inAppNotifications: true,
                            emailNotifications: true,
                            userId: id,
                        })),
                    });

                    const createdTeams = await tx.team.createManyAndReturn({
                        data: teams,
                    });

                    await tx.logo.createMany({
                        data: createdTeams
                            .slice(0, 15)
                            .reduce<
                                MasterPrisma.LogoCreateManyInput[]
                            >((res, { id }) => {
                                const url =
                                    images[getRandomInt(0, images.length - 1)];

                                if (url) {
                                    res.push({
                                        key: randomUUID(),
                                        fileSize: 1000,
                                        mimeType: "image/jpeg",
                                        url,
                                        expiredAt: addYears(new Date(), 100),
                                        width: 600,
                                        height: 600,
                                        teamId: id,
                                    });
                                }

                                return res;
                            }, []),
                    });

                    await tx.teamStat.createMany({
                        data: createdTeams.map(({ id }) => {
                            const fieldsCount = 9;
                            const totalDocuments = getRandomInt(5, 20);

                            const [
                                processingDocuments,
                                highRiskDocuments,
                                lowRiskDocuments,
                                mediumRiskDocuments,
                                activeDocuments,
                                archivedDocuments,
                                failedDocuments,
                                needsReviewDocuments,
                                expiringSoonDocuments,
                            ] = splitRandomSum(totalDocuments, fieldsCount);

                            return {
                                totalDocuments,
                                processingDocuments,
                                activeDocuments,
                                archivedDocuments,
                                failedDocuments,
                                needsReviewDocuments,
                                highRiskDocuments,
                                mediumRiskDocuments,
                                lowRiskDocuments,
                                expiringSoonDocuments,
                                teamId: id,
                            };
                        }),
                    });

                    await createTestTeamMembers(tx, createdUsers, createdTeams);

                    return createdTeams;
                }
            );

            for (const createdTeam of createdTeams) {
                try {
                    await createTenantDatabase(createdTeam.id);
                    await migrateTenantDatabase(createdTeam.id);
                } catch (error) {
                    await teamRepository.delete({
                        where: {
                            id: createdTeam.id,
                        },
                    });

                    log.error({ error }, "Failed o created tenant DB");
                }
            }

            return "Test data was created";
        },
        initTeamTenantClient: async (teamId: string) => {
            return prisma.team(
                config.MASTER_DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
            );
        },
        initActionLogRepository: async (teamId: string) => {
            await teamRepository.findUniqueOrFail({
                where: {
                    id: teamId,
                },
            });

            const repository = createActionLogRepository(
                prisma,
                config.MASTER_DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
            );

            return repository;
        },
        initDocumentRepository: async (teamId: string) => {
            await teamRepository.findUniqueOrFail({
                where: {
                    id: teamId,
                },
            });

            const repository = createDocumentRepository(
                prisma,
                config.MASTER_DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
            );

            return repository;
        },
        initTagRepository: async (teamId: string) => {
            await teamRepository.findUniqueOrFail({
                where: {
                    id: teamId,
                },
            });

            const repository = createTagRepository(
                prisma,
                config.MASTER_DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
            );

            return repository;
        },
        initDocumentTagRepository: async (teamId: string) => {
            await teamRepository.findUniqueOrFail({
                where: {
                    id: teamId,
                },
            });

            const repository = createDocumentTagRepository(
                prisma,
                config.MASTER_DATABASE_URL.replaceAll("/postgres", `/${teamId}`)
            );

            return repository;
        },
    };
};

addDIResolverName(createApplicationService, "applicationService");
