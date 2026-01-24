import { Prisma, PrismaClient } from "@/database/team/generated/client.js";

export type BaseRepository<T extends Uncapitalize<Model>> = {
    count: PrismaClient[T]["count"];
    create: PrismaClient[T]["create"];
    createMany: PrismaClient[T]["createMany"];
    findUnique: PrismaClient[T]["findUnique"];
    findFirst: PrismaClient[T]["findFirst"];
    update: PrismaClient[T]["update"];
    updateMany: PrismaClient[T]["updateMany"];
    delete: PrismaClient[T]["delete"];
    findMany: PrismaClient[T]["findMany"];
    deleteMany: PrismaClient[T]["deleteMany"];
    aggregate: PrismaClient[T]["aggregate"];
    groupBy: PrismaClient[T]["groupBy"];
};

type Model = Prisma.ModelName;

/**
 * Generate a repository for a given database table.
 * Contains all the CRUD operations for the model from the Prisma client.
 *
 * @example
 * const userRepository = generateRepository(prismaClient ,"User");
 *
 * const user = await userRepository.create({
 *     data: {},
 *     select: {},
 * });
 *
 * await userRepository.delete({
 *     where: {},
 * });
 * */
export const generateRepository = <T extends Model>(
    prisma: PrismaClient,
    model: T
): BaseRepository<Uncapitalize<T>> => {
    const modelInstanceName = unCapitalizeString(model);

    const delegate = prisma[modelInstanceName];

    console.log(modelInstanceName, delegate);

    const count = delegate["count"] as (typeof delegate)["count"];

    const findUnique = delegate[
        "findUnique"
    ] as (typeof delegate)["findUnique"];

    const create = delegate["create"] as (typeof delegate)["create"];

    const createMany = delegate[
        "createMany"
    ] as (typeof delegate)["createMany"];

    const findFirst = delegate["findFirst"] as (typeof delegate)["findFirst"];

    const update = delegate["update"] as (typeof delegate)["update"];

    const updateMany = delegate[
        "updateMany"
    ] as (typeof delegate)["updateMany"];

    const deleteOne = delegate["delete"] as (typeof delegate)["delete"];

    const aggregate = delegate["aggregate"] as (typeof delegate)["aggregate"];

    const groupBy = delegate["groupBy"] as (typeof delegate)["groupBy"];

    const findMany = delegate["findMany"] as (typeof delegate)["findMany"];

    const deleteMany = delegate[
        "deleteMany"
    ] as (typeof delegate)["deleteMany"];

    return {
        findMany,
        create,
        createMany,
        count,
        findUnique,
        aggregate,
        groupBy,
        findFirst,
        update,
        updateMany,
        delete: deleteOne,
        deleteMany,
    };
};

const unCapitalizeString = <T extends string>(str: T): Uncapitalize<T> => {
    return (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<T>;
};
