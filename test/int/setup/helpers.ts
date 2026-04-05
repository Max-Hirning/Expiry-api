import { PrismaPg } from "@prisma/adapter-pg";
import { hashing } from "@/lib/hashing/hashing.js";
import {
    PrismaClient,
    User,
    UserRoles,
    UserStatuses,
    TeamMemberRoles,
    NotificationTypes,
} from "@/database/master/generated/client.js";

let prisma: PrismaClient;

const getPrisma = () => {
    if (!prisma) {
        const databaseUrl = process.env.MASTER_DATABASE_URL;

        if (!databaseUrl) {
            throw new Error(
                "MASTER_DATABASE_URL environment variable is not set"
            );
        }

        // Extract schema from URL if present
        const url = new URL(databaseUrl);
        const schema = url.searchParams.get("schema");

        // Remove schema from URL search params and add it to the options instead
        if (schema) {
            url.searchParams.delete("schema");
            // Add the search_path option to set the schema at connection time
            const options = url.searchParams.get("options") || "";

            const newOptions = options
                ? `${options} -c search_path="${schema}"`
                : `-c search_path="${schema}"`;

            url.searchParams.set("options", newOptions);
        }

        const adapter = new PrismaPg(
            {
                connectionString: url.toString(),
            },
            {
                ...(schema && {
                    schema,
                }),
            }
        );

        prisma = new PrismaClient({ adapter });
    }

    return prisma;
};

export const testHelpers = {
    createUser: async (
        overrides?: Partial<User>
    ): Promise<User & { password: string }> => {
        const password = "TestPassword123!";
        const hashedPassword = await hashing.hashPassword(password);

        const user = await getPrisma().user.create({
            data: {
                fullName: overrides?.fullName || "Test User",
                email: overrides?.email || `test-${Date.now()}@example.com`,
                phoneNumber:
                    overrides?.phoneNumber || `+1${Math.random() * 9000000000}`,
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
        overrides?: Partial<{ name: string; description: string }>
    ) => {
        return await getPrisma().team.create({
            data: {
                name: overrides?.name || `Test Team ${Date.now()}`,
                teamMembers: {
                    create: {
                        userId,
                        role: TeamMemberRoles.ADMIN,
                    },
                },
            },
        });
    },

    createNotification: async (userId: string) => {
        return await getPrisma().notification.create({
            data: {
                type: NotificationTypes.INVITE_USER_IN_TEAM,
                userId,
            },
        });
    },

    cleanup: async () => {
        if (prisma) {
            await prisma.$disconnect();
        }
    },
};
