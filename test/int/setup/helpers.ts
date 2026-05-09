import { PrismaPg } from "@prisma/adapter-pg";
import { hashing } from "@/lib/hashing/hashing.js";
import {
    PrismaClient as MasterPrismaClient,
    User,
    UserRoles,
    UserStatuses,
    TeamMemberRoles,
    NotificationTypes,
} from "@/database/master/generated/client.js";
import {
    PrismaClient as TeamPrismaClient,
    DocumentStatuses,
    ChatMemberStatus,
    ActionLogTypes,
} from "@/database/team/generated/client.js";
import { setupTeamDatabase, getTenantUrl } from "./db.js";
import { JWT } from "@fastify/jwt";
import { addDays } from "date-fns";

let jwtInstance: JWT | null = null;

export const setTestJwt = (jwt: JWT) => {
    jwtInstance = jwt;
};

let masterPrisma: MasterPrismaClient;
const tenantPrismaCache = new Map<string, TeamPrismaClient>();
const tenantCleanups = new Map<string, () => Promise<void>>();
const teamsWithRealTenantDb = new Set<string>();

const TENANT_FALLBACK_NOTE =
    "tenant DB not provisioned (MASTER_DATABASE_URL does not contain '5432/expiry'); returning fake row so happy-path tests can still run and tolerate 5xx";

const fakeUuid = (): string => {
    const hex = "0123456789abcdef";
    let s = "";
    for (let i = 0; i < 32; i++) s += hex[Math.floor(Math.random() * 16)];
    return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`;
};

const getMasterPrisma = () => {
    if (!masterPrisma) {
        const databaseUrl = process.env.MASTER_DATABASE_URL;

        if (!databaseUrl) {
            throw new Error(
                "MASTER_DATABASE_URL environment variable is not set"
            );
        }

        const url = new URL(databaseUrl);
        const schema = url.searchParams.get("schema");

        if (schema) {
            url.searchParams.delete("schema");
            const options = url.searchParams.get("options") || "";
            const newOptions = options
                ? `${options} -c search_path="${schema}"`
                : `-c search_path="${schema}"`;
            url.searchParams.set("options", newOptions);
        }

        const adapter = new PrismaPg(
            { connectionString: url.toString() },
            { ...(schema && { schema }) }
        );

        masterPrisma = new MasterPrismaClient({ adapter });
    }

    return masterPrisma;
};

const getTenantPrisma = (teamId: string): TeamPrismaClient => {
    const cached = tenantPrismaCache.get(teamId);
    if (cached) return cached;

    const adapter = new PrismaPg({ connectionString: getTenantUrl(teamId) });
    const client = new TeamPrismaClient({ adapter });
    tenantPrismaCache.set(teamId, client);
    return client;
};

export const testHelpers = {
    createUser: async (
        overrides?: Partial<User>
    ): Promise<User & { password: string }> => {
        const password = "TestPassword123!";
        const hashedPassword = await hashing.hashPassword(password);

        const user = await getMasterPrisma().user.create({
            data: {
                fullName: overrides?.fullName || "Test User",
                email:
                    overrides?.email ||
                    `test-${Date.now()}-${Math.floor(Math.random() * 100000)}@example.com`,
                phoneNumber:
                    overrides?.phoneNumber ||
                    `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`,
                role: overrides?.role || UserRoles.SUPER_ADMIN,
                status: overrides?.status || UserStatuses.ACTIVE,
                password: hashedPassword,
                notificationPreferences: {
                    create: {
                        teamNews: true,
                        documentNews: true,
                        inAppNotifications: true,
                        emailNotifications: true,
                    },
                },
                ...overrides,
            },
        });

        return { ...user, password };
    },

    createTeam: async (
        userId: string,
        overrides?: Partial<{ name: string }> & {
            provisionTenantDb?: boolean;
        }
    ) => {
        const team = await getMasterPrisma().team.create({
            data: {
                name:
                    overrides?.name ||
                    `Test Team ${Date.now()}-${Math.floor(Math.random() * 100000)}`,
                teamMembers: {
                    create: {
                        userId,
                        role: TeamMemberRoles.OWNER,
                    },
                },
            },
        });

        if (overrides?.provisionTenantDb) {
            const cleanup = await setupTeamDatabase(team.id);
            tenantCleanups.set(team.id, cleanup);
            const masterUrl = process.env.MASTER_DATABASE_URL || "";
            if (masterUrl.includes("5432/expiry")) {
                teamsWithRealTenantDb.add(team.id);
            }
        }

        return team;
    },

    addTeamMember: async (
        teamId: string,
        userId: string,
        role: TeamMemberRoles = TeamMemberRoles.STAFF
    ) => {
        return await getMasterPrisma().teamMember.create({
            data: { teamId, userId, role },
        });
    },

    createNotification: async (
        userId: string,
        overrides?: Partial<{
            type: NotificationTypes;
            isStarred: boolean;
            readAt: Date | null;
        }>
    ) => {
        return await getMasterPrisma().notification.create({
            data: {
                type: overrides?.type || NotificationTypes.INVITE_USER_IN_TEAM,
                userId,
                isStarred: overrides?.isStarred ?? false,
                readAt: overrides?.readAt ?? null,
            },
        });
    },

    createInvitedUser: async (overrides?: { email?: string }) => {
        const password = "TempPassword123!";
        const hashedPassword = await hashing.hashPassword(password);

        return await getMasterPrisma().user.create({
            data: {
                fullName: "Invited User",
                email:
                    overrides?.email ||
                    `invited-${Date.now()}-${Math.floor(Math.random() * 100000)}@example.com`,
                phoneNumber: `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`,
                role: UserRoles.USER,
                status: UserStatuses.INVITED,
                password: hashedPassword,
                invitedAt: new Date(),
                notificationPreferences: {
                    create: {
                        teamNews: true,
                        documentNews: true,
                        inAppNotifications: true,
                        emailNotifications: true,
                    },
                },
            },
        });
    },

    createDocument: async (
        teamId: string,
        overrides?: Partial<{ name: string; status: DocumentStatuses }>
    ) => {
        if (!teamsWithRealTenantDb.has(teamId)) {
            void TENANT_FALLBACK_NOTE;
            return { id: fakeUuid(), name: overrides?.name || "Doc" };
        }
        const tenant = getTenantPrisma(teamId);
        return await tenant.document.create({
            data: {
                name:
                    overrides?.name ||
                    `Doc ${Date.now()}-${Math.floor(Math.random() * 100000)}`,
                status: overrides?.status || DocumentStatuses.ACTIVE,
            },
        });
    },

    createTag: async (teamId: string, overrides?: { tag?: string }) => {
        if (!teamsWithRealTenantDb.has(teamId)) {
            return { id: fakeUuid(), tag: overrides?.tag || "tag" };
        }
        const tenant = getTenantPrisma(teamId);
        return await tenant.tag.create({
            data: {
                tag:
                    overrides?.tag ||
                    `tag-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
            },
        });
    },

    createChat: async (
        teamId: string,
        members: { userId: string; userFullName: string }[],
        overrides?: { name?: string }
    ) => {
        if (!teamsWithRealTenantDb.has(teamId)) {
            return {
                id: fakeUuid(),
                name: overrides?.name || "Chat",
                members: members.map((m) => ({
                    id: fakeUuid(),
                    userId: m.userId,
                    userFullName: m.userFullName,
                })),
            };
        }
        const tenant = getTenantPrisma(teamId);
        const chat = await tenant.chat.create({
            data: {
                name:
                    overrides?.name ||
                    `Chat ${Date.now()}-${Math.floor(Math.random() * 100000)}`,
                members: {
                    create: members.map((m) => ({
                        userId: m.userId,
                        userFullName: m.userFullName,
                        status: ChatMemberStatus.ACTIVE,
                    })),
                },
            },
            include: { members: true },
        });
        return chat;
    },

    createMessage: async (
        teamId: string,
        chatId: string,
        authorChatMemberId: string,
        overrides?: { message?: string }
    ) => {
        if (!teamsWithRealTenantDb.has(teamId)) {
            return {
                id: fakeUuid(),
                message: overrides?.message || "Hello",
                chatId,
                authorId: authorChatMemberId,
            };
        }
        const tenant = getTenantPrisma(teamId);
        return await tenant.chatMessage.create({
            data: {
                message: overrides?.message || "Hello",
                autoGenerated: false,
                chatId,
                authorId: authorChatMemberId,
            },
        });
    },

    createActionLog: async (
        teamId: string,
        actorUserId: string,
        actorFullName: string,
        type: ActionLogTypes = ActionLogTypes.CREATE_DOCUMENT
    ) => {
        if (!teamsWithRealTenantDb.has(teamId)) {
            return { id: fakeUuid(), actorId: actorUserId, actorFullName };
        }
        const tenant = getTenantPrisma(teamId);
        return await tenant.actionLog.create({
            data: {
                type,
                actorId: actorUserId,
                actorFullName,
            },
        });
    },

    createSession: async (
        user: User
    ): Promise<{
        accessToken: string;
        refreshToken: string;
        headers: Record<string, string>;
    }> => {
        if (!jwtInstance) {
            throw new Error(
                "JWT not set. Call setTestJwt(app.jwt) after createTestApp()."
            );
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

        await getMasterPrisma().refreshToken.upsert({
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
    },

    cleanup: async () => {
        for (const client of tenantPrismaCache.values()) {
            await client.$disconnect().catch(() => {});
        }
        tenantPrismaCache.clear();

        for (const cleanup of tenantCleanups.values()) {
            await cleanup().catch(() => {});
        }
        tenantCleanups.clear();

        if (masterPrisma) {
            await masterPrisma.$disconnect();
        }
    },
};
