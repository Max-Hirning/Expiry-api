import { FastifyRequest } from "fastify";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { withRepositories } from "@/lib/utils/repository.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { Prisma as PrismaTeam } from "@/database/team/generated/index.js";
import { ApplicationService } from "../application/application.service.js";
import { defaultTagSelector } from "@/database/team/repositories/tag/tag.repository.js";
import {
    TagParamsInput,
    FetchTagResponse,
    FetchTagsQueryInput,
    FetchTagsResponse,
} from "@/lib/validation/tag/tag.schema.js";

export type TagService = {
    getTag: (p: {
        params: TagParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchTagResponse>;
    getTags: (p: {
        query: FetchTagsQueryInput;
        params: TeamParamsInput;
        initiator: FastifyRequest["user"];
    }) => Promise<FetchTagsResponse>;
};

export const createtagService = (
    applicationService: ApplicationService
): TagService => ({
    getTag: async ({ params }) => {
        const tagRepository = await applicationService.initTagRepository(
            params.teamId
        );

        const tag = await withRepositories([tagRepository], (tagRepo) =>
            tagRepo.findUniqueOrFail({
                where: {
                    id: params.tagId,
                },
                select: {
                    ...defaultTagSelector,
                    _count: {
                        select: {
                            documentTags: true,
                        },
                    },
                },
            })
        );

        return {
            message: "Tag fetched successfully.",
            data: {
                tag: {
                    ...tag,
                    documents: tag._count.documentTags,
                },
            },
        };
    },
    getTags: async ({ query, params }) => {
        const documentWhere: PrismaTeam.DocumentWhereInput = {
            ...(query.statuses && {
                status: {
                    in: query.statuses,
                },
            }),
            ...(query.riskLevels && {
                riskLevel: {
                    in: query.riskLevels,
                },
            }),
            ...(query.expiresAtDateRange &&
                query.expiresAtDateRange.length > 0 && {
                expiresAt: {
                    gte: query.expiresAtDateRange[0],
                    lte: query.expiresAtDateRange[1],
                },
            }),
            ...(query.search && {
                name: {
                    mode: "insensitive",
                    contains: query.search,
                },
            }),
        };

        const where: PrismaTeam.TagWhereInput = {
            ...(query.search && {
                OR: [
                    {
                        tag: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                    {
                        documentTags: {
                            some: {
                                document: {
                                    name: {
                                        mode: "insensitive",
                                        contains: query.search,
                                    },
                                },
                            },
                        },
                    },
                ],
            }),
            ...(Object.keys(documentWhere).length > 0 && {
                documentTags: {
                    some: {
                        document: documentWhere,
                    },
                },
            }),
        };

        const tagRepository = await applicationService.initTagRepository(
            params.teamId
        );

        const tags = await withRepositories([tagRepository], (tagRepo) =>
            tagRepo.findMany({
                where,
                orderBy: [
                    {
                        ...(query.sortField && query.sortOrder
                            ? {
                                [query.sortField]: query.sortOrder,
                            }
                            : {
                                createdAt: PrismaTeam.SortOrder.desc,
                            }),
                    },
                    { id: PrismaTeam.SortOrder.desc },
                ],
                ...(query.cursor && {
                    cursor: { id: query.cursor },
                    skip: 1,
                }),
                take: query.limit,
                select: {
                    ...defaultTagSelector,
                    _count: {
                        select: {
                            documentTags: {
                                where: {
                                    document: documentWhere,
                                },
                            },
                        },
                    },
                },
            })
        );

        const nextCursor =
            tags.length === query.limit ? tags[tags.length - 1].id : null;

        return {
            message: "Tags fetched successfully.",
            data: {
                tags: tags.map((tag) => ({
                    ...tag,
                    documents: tag._count.documentTags,
                })),
                pagination: {
                    nextCursor,
                },
            },
        };
    },
});

addDIResolverName(createtagService, "tagService");
