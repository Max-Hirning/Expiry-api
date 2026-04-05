import { Lifetime } from "awilix";
import { addDays, addMinutes } from "date-fns";
import { EnvConfig } from "@/types/env.type.js";
import { Storage } from "@google-cloud/storage";
import { addDIResolverName } from "../awilix/awilix.js";
import { InternalServerError } from "../errors/errors.js";
import { ConfigureFileKeyArg, FileTypes } from "./gcp.types.js";

export type GcpService = {
    uploadFile: (p: {
        keyPayload: ConfigureFileKeyArg;
        mimeType: string;
    }) => Promise<{
        key: string;
        url: string;
    }>;

    getFileUrl: (p: { key: string; type: FileTypes }) => Promise<{
        expiredAt: Date;
        url: string;
    }>;

    deleteFile: (key: string) => Promise<void>;

    deleteFolder: (prefix: string) => Promise<void>;
};

export const createGcpService = (config: EnvConfig): GcpService => {
    const isLocalEnv =
        config.NODE_ENV === "development" || config.NODE_ENV === "test";

    const storage = isLocalEnv
        ? new Storage({
            apiEndpoint: "http://localhost:4443",
            projectId: "local-project",
        })
        : new Storage();

    const BUCKET_NAME = config.GCP_BUCKET;

    const configureFileKey = (p: ConfigureFileKeyArg) => {
        if (p.type === FileTypes.AVATAR) {
            return `avatars/${p.userId}`;
        }

        if (p.type === FileTypes.LOGO) {
            return `teams/${p.teamId}`;
        }

        if (p.type === FileTypes.DOCUMENT) {
            return `teams/${p.teamId}/documents/${p.documentId}/${p.fileName}`;
        }

        throw new InternalServerError("Type for file key is required");
    };

    const configureFileExpiresAt = (type: FileTypes) => {
        if (type === FileTypes.AVATAR) {
            return {
                gcpExpiredAt: addDays(new Date(), 6),
                expiredAt: addDays(new Date(), 4),
            };
        }

        if (type === FileTypes.LOGO) {
            return {
                gcpExpiredAt: addDays(new Date(), 6),
                expiredAt: addDays(new Date(), 4),
            };
        }

        if (type === FileTypes.DOCUMENT) {
            return {
                gcpExpiredAt: addMinutes(new Date(), 15),
                expiredAt: addMinutes(new Date(), 15),
            };
        }

        throw new InternalServerError("Type for file expires at is required");
    };

    return {
        uploadFile: async ({ keyPayload, mimeType }) => {
            const fileKey = configureFileKey(keyPayload);

            const file = storage.bucket(BUCKET_NAME).file(fileKey);

            const [signedUrl] = await file.getSignedUrl({
                version: "v4",
                action: "write",
                expires: addMinutes(new Date(), 5), // 5 mins
                contentType: mimeType,
            });

            return {
                key: fileKey,
                url: signedUrl,
            };
        },

        getFileUrl: async ({ key, type }) => {
            const bucket = storage.bucket(BUCKET_NAME);
            const file = bucket.file(key);

            const { gcpExpiredAt, expiredAt } = configureFileExpiresAt(type);

            const [url] = await file.getSignedUrl({
                version: "v4",
                action: "read",
                expires: gcpExpiredAt,
            });

            return {
                expiredAt,
                url,
            };
        },

        deleteFile: async (fileKey) => {
            await storage.bucket(BUCKET_NAME).file(fileKey).delete();
        },

        deleteFolder: async (prefix: string) => {
            const bucket = storage.bucket(BUCKET_NAME);

            await bucket.deleteFiles({
                prefix,
            });
        },
    };
};

addDIResolverName(createGcpService, "gcpService", Lifetime.SINGLETON);
