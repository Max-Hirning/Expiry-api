import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { ApplicationService } from "@/modules/application/application.service.js";

export type DocumentSummary = {
    id: string;
    name: string;
    status: string;
    riskLevel: string | null;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
};

export type DocumentDetail = DocumentSummary & {
    tags: string[];
};

export type DocumentsDataService = {
    listDocuments: (p: {
        teamId: string;
        scopedDocumentId: string | null;
        query?: string;
        limit?: number;
    }) => Promise<DocumentSummary[]>;
    getDocumentById: (p: {
        teamId: string;
        documentId: string;
        scopedDocumentId: string | null;
    }) => Promise<DocumentDetail | null>;
};

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;

const clampLimit = (limit?: number) =>
    Math.min(Math.max(1, limit ?? DEFAULT_LIMIT), MAX_LIMIT);

export const createService = (
    applicationService: ApplicationService
): DocumentsDataService => ({
    listDocuments: async ({ teamId, scopedDocumentId, query, limit }) => {
        const documentRepository =
            await applicationService.initDocumentRepository(teamId);

        return withRepositories([documentRepository], async (repo) => {
            const rows = await repo.findMany({
                where: {
                    ...(scopedDocumentId && { id: scopedDocumentId }),
                    ...(query && {
                        name: { contains: query, mode: "insensitive" },
                    }),
                },
                orderBy: { createdAt: "desc" },
                take: clampLimit(limit),
                select: {
                    id: true,
                    name: true,
                    status: true,
                    riskLevel: true,
                    expiresAt: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });

            return rows;
        });
    },

    getDocumentById: async ({ teamId, documentId, scopedDocumentId }) => {
        if (scopedDocumentId && scopedDocumentId !== documentId) {
            return null;
        }

        const documentRepository =
            await applicationService.initDocumentRepository(teamId);

        return withRepositories([documentRepository], async (repo) => {
            const doc = await repo.findUnique({
                where: { id: documentId },
                include: {
                    documentTags: {
                        select: { tag: { select: { tag: true } } },
                    },
                },
            });

            if (!doc) {
                return null;
            }

            return {
                id: doc.id,
                name: doc.name,
                status: doc.status,
                riskLevel: doc.riskLevel,
                expiresAt: doc.expiresAt,
                createdAt: doc.createdAt,
                updatedAt: doc.updatedAt,
                tags: doc.documentTags.map((dt) => dt.tag.tag),
            };
        });
    },
});

addDIResolverName(createService, "documentsDataService");
