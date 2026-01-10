import { NotFoundError } from "@/lib/errors/errors.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { FindUniqueOrFail } from "../../prisma/prisma.type.js";
import { Prisma, PrismaClient } from "@/database/master/generated/client.js";
import { BaseRepository, generateRepository } from "../generate.repository.js";

export const defaultNotificationPreferenceSelector = {
    id: true,
    createdAt: true,
    updatedAt: true,
    offerUpdates: true,
    companyNews: true,
    comments: true,
    purchases: true,
    userId: true,
} satisfies Prisma.NotificationPreferenceSelect;

export type NotificationPreferenceRepository =
    BaseRepository<"notificationPreference"> & {
        findUniqueOrFail: FindUniqueOrFail<
            Prisma.NotificationPreferenceFindUniqueArgs,
            Prisma.NotificationPreferenceGetPayload<Prisma.NotificationPreferenceFindUniqueArgs>
        >;
    };

export const createNotificationPreferenceRepository = (
    prisma: PrismaClient
): NotificationPreferenceRepository => {
    const repository = generateRepository(prisma, "NotificationPreference");

    return {
        ...repository,
        findUniqueOrFail: async (args) => {
            const notificationPreference =
                await prisma.notificationPreference.findUnique(args);

            if (!notificationPreference) {
                throw new NotFoundError("NotificationPreference not found.");
            }

            return notificationPreference;
        },
    };
};

addDIResolverName(
    createNotificationPreferenceRepository,
    "notificationPreferenceRepository"
);
