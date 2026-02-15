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
            })
        );

        return {
            message: "Tag fetched successfully.",
            data: {
                tag,
            },
        };
    },
    getTags: async ({ query, params }) => {
        const skip = (query.page - 1) * query.perPage;

        const where: PrismaTeam.TagWhereInput = {
            ...(query.search && {
                OR: [
                    {
                        tag: {
                            mode: "insensitive",
                            contains: query.search,
                        },
                    },
                ],
            }),
        };

        const tagRepository = await applicationService.initTagRepository(
            params.teamId
        );

        const [tags, total] = await withRepositories(
            [tagRepository],
            (tagRepo) =>
                Promise.all([
                    tagRepo.findMany({
                        skip,
                        where,
                        take: query.perPage,
                        orderBy: {
                            ...(query.sortField && query.sortOrder
                                ? {
                                    [query.sortField]: query.sortOrder,
                                }
                                : {
                                    createdAt: PrismaTeam.SortOrder.desc,
                                }),
                        },
                        select: defaultTagSelector,
                    }),
                    tagRepo.count({
                        where,
                    }),
                ])
        );

        const totalPages = Math.ceil(total / query.perPage);
        const prevPage = query.page > 1 ? query.page - 1 : null;
        const nextPage = query.page < totalPages ? query.page + 1 : null;

        return {
            message: "Tags fetched successfully.",
            data: {
                tags,
                pagination: {
                    page: query.page,
                    perPage: query.perPage,
                    prevPage,
                    nextPage,
                    totalPages,
                    total,
                },
            },
        };
    },
});

addDIResolverName(createtagService, "tagService");
