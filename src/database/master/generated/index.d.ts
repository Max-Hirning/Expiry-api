/**
 * Client
 **/

import * as runtime from "./runtime/client.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Avatar
 *
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>;
/**
 * Model NotificationPreference
 *
 */
export type NotificationPreference =
    $Result.DefaultSelection<Prisma.$NotificationPreferencePayload>;
/**
 * Model Team
 *
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>;
/**
 * Model Logo
 *
 */
export type Logo = $Result.DefaultSelection<Prisma.$LogoPayload>;

/**
 * Enums
 */
export namespace $Enums {
    export const UserRoles: {
        SUPER_ADMIN: "SUPER_ADMIN";
        SUB_ADMIN: "SUB_ADMIN";
        USER: "USER";
    };

    export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles];

    export const UserStatuses: {
        ACTIVE: "ACTIVE";
        DEACTIVATED: "DEACTIVATED";
    };

    export type UserStatuses = (typeof UserStatuses)[keyof typeof UserStatuses];
}

export type UserRoles = $Enums.UserRoles;

export const UserRoles: typeof $Enums.UserRoles;

export type UserStatuses = $Enums.UserStatuses;

export const UserStatuses: typeof $Enums.UserStatuses;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
    ClientOptions extends
        Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    const U = "log" extends keyof ClientOptions
        ? ClientOptions["log"] extends Array<
              Prisma.LogLevel | Prisma.LogDefinition
          >
            ? Prisma.GetEvents<ClientOptions["log"]>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://pris.ly/d/client).
     */

    constructor(
        optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
    );
    $on<V extends U>(
        eventType: V,
        callback: (
            event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
        ) => void
    ): PrismaClient;

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>;

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>;

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

    $transaction<R>(
        fn: (
            prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
        ) => $Utils.JsPromise<R>,
        options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        }
    ): $Utils.JsPromise<R>;

    $extends: $Extensions.ExtendsHook<
        "extends",
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs;
            }
        >
    >;

    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     */
    get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Avatars
     * const avatars = await prisma.avatar.findMany()
     * ```
     */
    get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.notificationPreference`: Exposes CRUD operations for the **NotificationPreference** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreference.findMany()
     * ```
     */
    get notificationPreference(): Prisma.NotificationPreferenceDelegate<
        ExtArgs,
        ClientOptions
    >;

    /**
     * `prisma.team`: Exposes CRUD operations for the **Team** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Teams
     * const teams = await prisma.team.findMany()
     * ```
     */
    get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.logo`: Exposes CRUD operations for the **Logo** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Logos
     * const logos = await prisma.logo.findMany()
     * ```
     */
    get logo(): Prisma.LogoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
    export import DMMF = runtime.DMMF;

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;

    /**
     * Validator
     */
    export import validator = runtime.Public.validator;

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
    export import PrismaClientValidationError = runtime.PrismaClientValidationError;

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag;
    export import empty = runtime.empty;
    export import join = runtime.join;
    export import raw = runtime.raw;
    export import Sql = runtime.Sql;

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal;

    export type DecimalJsLike = runtime.DecimalJsLike;

    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs;
    export import getExtensionContext = runtime.Extensions.getExtensionContext;
    export import Args = $Public.Args;
    export import Payload = $Public.Payload;
    export import Result = $Public.Result;
    export import Exact = $Public.Exact;

    /**
     * Prisma Client JS version: 7.2.0
     * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
     */
    export type PrismaVersion = {
        client: string;
        engine: string;
    };

    export const prismaVersion: PrismaVersion;

    /**
     * Utility Types
     */

    export import Bytes = runtime.Bytes;
    export import JsonObject = runtime.JsonObject;
    export import JsonArray = runtime.JsonArray;
    export import JsonValue = runtime.JsonValue;
    export import InputJsonObject = runtime.InputJsonObject;
    export import InputJsonArray = runtime.InputJsonArray;
    export import InputJsonValue = runtime.InputJsonValue;

    /**
     * Types of the values used to represent different kinds of `null` values when working with JSON fields.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    namespace NullTypes {
        /**
         * Type of `Prisma.DbNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class DbNull {
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;

    type SelectAndInclude = {
        select: any;
        include: any;
    };

    type SelectAndOmit = {
        select: any;
        omit: any;
    };

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> =
        T extends PromiseLike<infer U> ? U : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<
        T extends (...args: any) => $Utils.JsPromise<any>,
    > = PromiseType<ReturnType<T>>;

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
    }[keyof T];

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
    };

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

    /**
     * Subset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
     */
    export type Subset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    };

    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & (T extends SelectAndInclude
        ? "Please either choose `select` or `include`."
        : T extends SelectAndOmit
          ? "Please either choose `select` or `omit`."
          : {});

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & K;

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object
        ? U extends object
            ? (Without<T, U> & U) | (Without<U, T> & T)
            : U
        : T;

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
            ? False
            : T extends Date
              ? False
              : T extends Uint8Array
                ? False
                : T extends BigInt
                  ? False
                  : T extends object
                    ? True
                    : False;

    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> =
        T extends Array<infer U> ? U : T;

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
        }[K];

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<
        __Either<O, K>
    >;

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>;
        0: EitherLoose<O, K>;
    }[strict];

    type Either<
        O extends object,
        K extends Key,
        strict extends Boolean = 1,
    > = O extends unknown ? _Either<O, K, strict> : never;

    export type Union = any;

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    } & {};

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>;
            }
        >
    >;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O
        ? O[K]
        : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown
        ? AtStrict<O, K>
        : never;
    export type At<
        O extends object,
        K extends Key,
        strict extends Boolean = 1,
    > = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
              [K in keyof A]: A[K];
          } & {};

    export type OptionalFlat<O> = {
        [K in keyof O]?: O[K];
    } & {};

    type _Record<K extends keyof any, T> = {
        [P in K]: T;
    };

    // cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never;

    // this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >;

    type _Strict<U, _U = U> = U extends unknown
        ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
        : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
  A [[Boolean]]
  */
    export type Boolean = True | False;

    // /**
    // 1
    // */
    export type True = 1;

    /**
  0
  */
    export type False = 0;

    export type Not<B extends Boolean> = {
        0: 1;
        1: 0;
    }[B];

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
          ? 1
          : 0;

    export type Has<U extends Union, U1 extends Union> = Not<
        Extends<Exclude<U1, U>, U1>
    >;

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0;
            1: 1;
        };
        1: {
            0: 1;
            1: 1;
        };
    }[B1][B2];

    export type Keys<U extends Union> = U extends unknown ? keyof U : never;

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never;
          }
        : never;

    type FieldPaths<
        T,
        U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
    > = IsObject<T> extends True ? U : T;

    type GetHavingFields<T> = {
        [K in keyof T]: Or<
            Or<Extends<"OR", K>, Extends<"AND", K>>,
            Extends<"NOT", K>
        > extends True
            ? // infer is only needed to not hit TS limit
              // based on the brilliant idea of Pierre-Antoine Mills
              // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
              T[K] extends infer TK
                ? GetHavingFields<
                      UnEnumerate<TK> extends object
                          ? Merge<UnEnumerate<TK>>
                          : never
                  >
                : never
            : {} extends FieldPaths<T[K]>
              ? never
              : K;
    }[keyof T];

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<
        T,
        K extends Enumerable<keyof T> | keyof T,
    > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
        ? never
        : T;

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

    type FieldRefInputType<Model, FieldType> = Model extends never
        ? never
        : FieldRef<Model, FieldType>;

    export const ModelName: {
        User: "User";
        Avatar: "Avatar";
        NotificationPreference: "NotificationPreference";
        Team: "Team";
        Logo: "Logo";
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName];

    interface TypeMapCb<ClientOptions = {}>
        extends $Utils.Fn<
            { extArgs: $Extensions.InternalArgs },
            $Utils.Record<string, any>
        > {
        returns: Prisma.TypeMap<
            this["params"]["extArgs"],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >;
    }

    export type TypeMap<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > = {
        globalOmitOptions: {
            omit: GlobalOmitOptions;
        };
        meta: {
            modelProps:
                | "user"
                | "avatar"
                | "notificationPreference"
                | "team"
                | "logo";
            txIsolationLevel: Prisma.TransactionIsolationLevel;
        };
        model: {
            User: {
                payload: Prisma.$UserPayload<ExtArgs>;
                fields: Prisma.UserFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.UserFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findFirst: {
                        args: Prisma.UserFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findMany: {
                        args: Prisma.UserFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    create: {
                        args: Prisma.UserCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    createMany: {
                        args: Prisma.UserCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    delete: {
                        args: Prisma.UserDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    update: {
                        args: Prisma.UserUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    deleteMany: {
                        args: Prisma.UserDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.UserUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    upsert: {
                        args: Prisma.UserUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    aggregate: {
                        args: Prisma.UserAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateUser>;
                    };
                    groupBy: {
                        args: Prisma.UserGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<UserGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.UserCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<UserCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Avatar: {
                payload: Prisma.$AvatarPayload<ExtArgs>;
                fields: Prisma.AvatarFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AvatarFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
                    };
                    findFirst: {
                        args: Prisma.AvatarFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
                    };
                    findMany: {
                        args: Prisma.AvatarFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[];
                    };
                    create: {
                        args: Prisma.AvatarCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
                    };
                    createMany: {
                        args: Prisma.AvatarCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[];
                    };
                    delete: {
                        args: Prisma.AvatarDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
                    };
                    update: {
                        args: Prisma.AvatarUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AvatarDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AvatarUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[];
                    };
                    upsert: {
                        args: Prisma.AvatarUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AvatarPayload>;
                    };
                    aggregate: {
                        args: Prisma.AvatarAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAvatar>;
                    };
                    groupBy: {
                        args: Prisma.AvatarGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AvatarGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AvatarCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<AvatarCountAggregateOutputType>
                            | number;
                    };
                };
            };
            NotificationPreference: {
                payload: Prisma.$NotificationPreferencePayload<ExtArgs>;
                fields: Prisma.NotificationPreferenceFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.NotificationPreferenceFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                    };
                    findFirst: {
                        args: Prisma.NotificationPreferenceFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                    };
                    findMany: {
                        args: Prisma.NotificationPreferenceFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                    };
                    create: {
                        args: Prisma.NotificationPreferenceCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                    };
                    createMany: {
                        args: Prisma.NotificationPreferenceCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                    };
                    delete: {
                        args: Prisma.NotificationPreferenceDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                    };
                    update: {
                        args: Prisma.NotificationPreferenceUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                    };
                    deleteMany: {
                        args: Prisma.NotificationPreferenceDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.NotificationPreferenceUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                    };
                    upsert: {
                        args: Prisma.NotificationPreferenceUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                    };
                    aggregate: {
                        args: Prisma.NotificationPreferenceAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateNotificationPreference>;
                    };
                    groupBy: {
                        args: Prisma.NotificationPreferenceGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<NotificationPreferenceGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.NotificationPreferenceCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<NotificationPreferenceCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Team: {
                payload: Prisma.$TeamPayload<ExtArgs>;
                fields: Prisma.TeamFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.TeamFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
                    };
                    findFirst: {
                        args: Prisma.TeamFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
                    };
                    findMany: {
                        args: Prisma.TeamFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
                    };
                    create: {
                        args: Prisma.TeamCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
                    };
                    createMany: {
                        args: Prisma.TeamCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
                    };
                    delete: {
                        args: Prisma.TeamDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
                    };
                    update: {
                        args: Prisma.TeamUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
                    };
                    deleteMany: {
                        args: Prisma.TeamDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.TeamUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
                    };
                    upsert: {
                        args: Prisma.TeamUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
                    };
                    aggregate: {
                        args: Prisma.TeamAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateTeam>;
                    };
                    groupBy: {
                        args: Prisma.TeamGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<TeamGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.TeamCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<TeamCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Logo: {
                payload: Prisma.$LogoPayload<ExtArgs>;
                fields: Prisma.LogoFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.LogoFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.LogoFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>;
                    };
                    findFirst: {
                        args: Prisma.LogoFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.LogoFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>;
                    };
                    findMany: {
                        args: Prisma.LogoFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>[];
                    };
                    create: {
                        args: Prisma.LogoCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>;
                    };
                    createMany: {
                        args: Prisma.LogoCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.LogoCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>[];
                    };
                    delete: {
                        args: Prisma.LogoDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>;
                    };
                    update: {
                        args: Prisma.LogoUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>;
                    };
                    deleteMany: {
                        args: Prisma.LogoDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.LogoUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.LogoUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>[];
                    };
                    upsert: {
                        args: Prisma.LogoUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LogoPayload>;
                    };
                    aggregate: {
                        args: Prisma.LogoAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateLogo>;
                    };
                    groupBy: {
                        args: Prisma.LogoGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<LogoGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.LogoCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<LogoCountAggregateOutputType>
                            | number;
                    };
                };
            };
        };
    } & {
        other: {
            payload: any;
            operations: {
                $executeRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[],
                    ];
                    result: any;
                };
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
                $queryRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[],
                    ];
                    result: any;
                };
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
            };
        };
    };
    export const defineExtension: $Extensions.ExtendsHook<
        "define",
        Prisma.TypeMapCb,
        $Extensions.DefaultArgs
    >;
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = "pretty" | "colorless" | "minimal";
    export interface PrismaClientOptions {
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat;
        /**
         * @example
         * ```
         * // Shorthand for `emit: 'stdout'`
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events only
         * log: [
         *   { emit: 'event', level: 'query' },
         *   { emit: 'event', level: 'info' },
         *   { emit: 'event', level: 'warn' }
         *   { emit: 'event', level: 'error' }
         * ]
         *
         * / Emit as events and log to stdout
         * og: [
         *  { emit: 'stdout', level: 'query' },
         *  { emit: 'stdout', level: 'info' },
         *  { emit: 'stdout', level: 'warn' }
         *  { emit: 'stdout', level: 'error' }
         *
         * ```
         * Read more in our [docs](https://pris.ly/d/logging).
         */
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        };
        /**
         * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
         */
        adapter?: runtime.SqlDriverAdapterFactory;
        /**
         * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
         */
        accelerateUrl?: string;
        /**
         * Global configuration for omitting model fields by default.
         *
         * @example
         * ```
         * const prisma = new PrismaClient({
         *   omit: {
         *     user: {
         *       password: true
         *     }
         *   }
         * })
         * ```
         */
        omit?: Prisma.GlobalOmitConfig;
        /**
         * SQL commenter plugins that add metadata to SQL queries as comments.
         * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
         *
         * @example
         * ```
         * const prisma = new PrismaClient({
         *   adapter,
         *   comments: [
         *     traceContext(),
         *     queryInsights(),
         *   ],
         * })
         * ```
         */
        comments?: runtime.SqlCommenterPlugin[];
    }
    export type GlobalOmitConfig = {
        user?: UserOmit;
        avatar?: AvatarOmit;
        notificationPreference?: NotificationPreferenceOmit;
        team?: TeamOmit;
        logo?: LogoOmit;
    };

    /* Types for Logging */
    export type LogLevel = "info" | "query" | "warn" | "error";
    export type LogDefinition = {
        level: LogLevel;
        emit: "stdout" | "event";
    };

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

    export type GetLogType<T> = CheckIsLogLevel<
        T extends LogDefinition ? T["level"] : T
    >;

    export type GetEvents<T extends any[]> =
        T extends Array<LogLevel | LogDefinition>
            ? GetLogType<T[number]>
            : never;

    export type QueryEvent = {
        timestamp: Date;
        query: string;
        params: string;
        duration: number;
        target: string;
    };

    export type LogEvent = {
        timestamp: Date;
        message: string;
        target: string;
    };
    /* End Types for Logging */

    export type PrismaAction =
        | "findUnique"
        | "findUniqueOrThrow"
        | "findMany"
        | "findFirst"
        | "findFirstOrThrow"
        | "create"
        | "createMany"
        | "createManyAndReturn"
        | "update"
        | "updateMany"
        | "updateManyAndReturn"
        | "upsert"
        | "delete"
        | "deleteMany"
        | "executeRaw"
        | "queryRaw"
        | "aggregate"
        | "count"
        | "runCommandRaw"
        | "findRaw"
        | "groupBy";

    // tested in getLogLevel.test.ts
    export function getLogLevel(
        log: Array<LogLevel | LogDefinition>
    ): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<
        Prisma.DefaultPrismaClient,
        runtime.ITXClientDenyList
    >;

    export type Datasource = {
        url?: string;
    };

    /**
     * Count Types
     */

    /**
     * Models
     */

    /**
     * Model User
     */

    export type AggregateUser = {
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    export type UserMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        fullName: string | null;
        email: string | null;
        phoneNumber: string | null;
        password: string | null;
        role: $Enums.UserRoles | null;
        status: $Enums.UserStatuses | null;
    };

    export type UserMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        fullName: string | null;
        email: string | null;
        phoneNumber: string | null;
        password: string | null;
        role: $Enums.UserRoles | null;
        status: $Enums.UserStatuses | null;
    };

    export type UserCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        fullName: number;
        email: number;
        phoneNumber: number;
        password: number;
        role: number;
        status: number;
        _all: number;
    };

    export type UserMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        fullName?: true;
        email?: true;
        phoneNumber?: true;
        password?: true;
        role?: true;
        status?: true;
    };

    export type UserMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        fullName?: true;
        email?: true;
        phoneNumber?: true;
        password?: true;
        role?: true;
        status?: true;
    };

    export type UserCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        fullName?: true;
        email?: true;
        phoneNumber?: true;
        password?: true;
        role?: true;
        status?: true;
        _all?: true;
    };

    export type UserAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which User to aggregate.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Users
         **/
        _count?: true | UserCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: UserMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: UserMaxAggregateInputType;
    };

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateUser[P]>
            : GetScalarType<T[P], AggregateUser[P]>;
    };

    export type UserGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: UserWhereInput;
        orderBy?:
            | UserOrderByWithAggregationInput
            | UserOrderByWithAggregationInput[];
        by: UserScalarFieldEnum[] | UserScalarFieldEnum;
        having?: UserScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: UserCountAggregateInputType | true;
        _min?: UserMinAggregateInputType;
        _max?: UserMaxAggregateInputType;
    };

    export type UserGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    type GetUserGroupByPayload<T extends UserGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<UserGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof UserGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], UserGroupByOutputType[P]>
                        : GetScalarType<T[P], UserGroupByOutputType[P]>;
                }
            >
        >;

    export type UserSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            fullName?: boolean;
            email?: boolean;
            phoneNumber?: boolean;
            password?: boolean;
            role?: boolean;
            status?: boolean;
            avatar?: boolean | User$avatarArgs<ExtArgs>;
            notificationPreferences?:
                | boolean
                | User$notificationPreferencesArgs<ExtArgs>;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            fullName?: boolean;
            email?: boolean;
            phoneNumber?: boolean;
            password?: boolean;
            role?: boolean;
            status?: boolean;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            fullName?: boolean;
            email?: boolean;
            phoneNumber?: boolean;
            password?: boolean;
            role?: boolean;
            status?: boolean;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        fullName?: boolean;
        email?: boolean;
        phoneNumber?: boolean;
        password?: boolean;
        role?: boolean;
        status?: boolean;
    };

    export type UserOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "fullName"
        | "email"
        | "phoneNumber"
        | "password"
        | "role"
        | "status",
        ExtArgs["result"]["user"]
    >;
    export type UserInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        avatar?: boolean | User$avatarArgs<ExtArgs>;
        notificationPreferences?:
            | boolean
            | User$notificationPreferencesArgs<ExtArgs>;
    };
    export type UserIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type UserIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $UserPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "User";
        objects: {
            avatar: Prisma.$AvatarPayload<ExtArgs> | null;
            notificationPreferences: Prisma.$NotificationPreferencePayload<ExtArgs> | null;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                email: string;
                phoneNumber: string;
                password: string;
                role: $Enums.UserRoles;
                status: $Enums.UserStatuses;
            },
            ExtArgs["result"]["user"]
        >;
        composites: {};
    };

    type UserGetPayload<
        S extends boolean | null | undefined | UserDefaultArgs,
    > = $Result.GetResult<Prisma.$UserPayload, S>;

    type UserCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: UserCountAggregateInputType | true;
    };

    export interface UserDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["User"];
            meta: { name: "User" };
        };
        /**
         * Find zero or one User that matches the filter.
         * @param {UserFindUniqueArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends UserFindUniqueArgs>(
            args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one User that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
            args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first User that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends UserFindFirstArgs>(
            args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first User that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
            args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Users that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Users
         * const users = await prisma.user.findMany()
         *
         * // Get first 10 Users
         * const users = await prisma.user.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
         *
         */
        findMany<T extends UserFindManyArgs>(
            args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a User.
         * @param {UserCreateArgs} args - Arguments to create a User.
         * @example
         * // Create one User
         * const User = await prisma.user.create({
         *   data: {
         *     // ... data to create a User
         *   }
         * })
         *
         */
        create<T extends UserCreateArgs>(
            args: SelectSubset<T, UserCreateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Users.
         * @param {UserCreateManyArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends UserCreateManyArgs>(
            args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Users and returns the data saved in the database.
         * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Users and only return the `id`
         * const userWithIdOnly = await prisma.user.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
            args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a User.
         * @param {UserDeleteArgs} args - Arguments to delete one User.
         * @example
         * // Delete one User
         * const User = await prisma.user.delete({
         *   where: {
         *     // ... filter to delete one User
         *   }
         * })
         *
         */
        delete<T extends UserDeleteArgs>(
            args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one User.
         * @param {UserUpdateArgs} args - Arguments to update one User.
         * @example
         * // Update one User
         * const user = await prisma.user.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends UserUpdateArgs>(
            args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Users.
         * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
         * @example
         * // Delete a few Users
         * const { count } = await prisma.user.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends UserDeleteManyArgs>(
            args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends UserUpdateManyArgs>(
            args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Users and returns the data updated in the database.
         * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Users and only return the `id`
         * const userWithIdOnly = await prisma.user.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
            args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one User.
         * @param {UserUpsertArgs} args - Arguments to update or create a User.
         * @example
         * // Update or create a User
         * const user = await prisma.user.upsert({
         *   create: {
         *     // ... data to create a User
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the User we want to update
         *   }
         * })
         */
        upsert<T extends UserUpsertArgs>(
            args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserCountArgs} args - Arguments to filter Users to count.
         * @example
         * // Count the number of Users
         * const count = await prisma.user.count({
         *   where: {
         *     // ... the filter for the Users we want to count
         *   }
         * })
         **/
        count<T extends UserCountArgs>(
            args?: Subset<T, UserCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], UserCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends UserAggregateArgs>(
            args: Subset<T, UserAggregateArgs>
        ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

        /**
         * Group by User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends UserGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: UserGroupByArgs["orderBy"] }
                : { orderBy?: UserGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [
                                    Error,
                                    "Field ",
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetUserGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the User model
         */
        readonly fields: UserFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for User.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__UserClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        avatar<T extends User$avatarArgs<ExtArgs> = {}>(
            args?: Subset<T, User$avatarArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        notificationPreferences<
            T extends User$notificationPreferencesArgs<ExtArgs> = {},
        >(
            args?: Subset<T, User$notificationPreferencesArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the User model
     */
    interface UserFieldRefs {
        readonly id: FieldRef<"User", "String">;
        readonly createdAt: FieldRef<"User", "DateTime">;
        readonly updatedAt: FieldRef<"User", "DateTime">;
        readonly fullName: FieldRef<"User", "String">;
        readonly email: FieldRef<"User", "String">;
        readonly phoneNumber: FieldRef<"User", "String">;
        readonly password: FieldRef<"User", "String">;
        readonly role: FieldRef<"User", "UserRoles">;
        readonly status: FieldRef<"User", "UserStatuses">;
    }

    // Custom InputTypes
    /**
     * User findUnique
     */
    export type UserFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findFirst
     */
    export type UserFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findMany
     */
    export type UserFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which Users to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User create
     */
    export type UserCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The data needed to create a User.
         */
        data: XOR<UserCreateInput, UserUncheckedCreateInput>;
    };

    /**
     * User createMany
     */
    export type UserCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User createManyAndReturn
     */
    export type UserCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User update
     */
    export type UserUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The data needed to update a User.
         */
        data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
        /**
         * Choose, which User to update.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User updateMany
     */
    export type UserUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User updateManyAndReturn
     */
    export type UserUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User upsert
     */
    export type UserUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The filter to search for the User to update in case it exists.
         */
        where: UserWhereUniqueInput;
        /**
         * In case the User found by the `where` argument doesn't exist, create a new User with this data.
         */
        create: XOR<UserCreateInput, UserUncheckedCreateInput>;
        /**
         * In case the User was found with the provided `where` argument, update it with this data.
         */
        update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    };

    /**
     * User delete
     */
    export type UserDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter which User to delete.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Users to delete
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to delete.
         */
        limit?: number;
    };

    /**
     * User.avatar
     */
    export type User$avatarArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        where?: AvatarWhereInput;
    };

    /**
     * User.notificationPreferences
     */
    export type User$notificationPreferencesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        where?: NotificationPreferenceWhereInput;
    };

    /**
     * User without action
     */
    export type UserDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
    };

    /**
     * Model Avatar
     */

    export type AggregateAvatar = {
        _count: AvatarCountAggregateOutputType | null;
        _avg: AvatarAvgAggregateOutputType | null;
        _sum: AvatarSumAggregateOutputType | null;
        _min: AvatarMinAggregateOutputType | null;
        _max: AvatarMaxAggregateOutputType | null;
    };

    export type AvatarAvgAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type AvatarSumAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type AvatarMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        expiredAt: Date | null;
        width: number | null;
        height: number | null;
        userId: string | null;
    };

    export type AvatarMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        expiredAt: Date | null;
        width: number | null;
        height: number | null;
        userId: string | null;
    };

    export type AvatarCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        key: number;
        fileSize: number;
        mimeType: number;
        url: number;
        expiredAt: number;
        width: number;
        height: number;
        userId: number;
        _all: number;
    };

    export type AvatarAvgAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type AvatarSumAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type AvatarMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
        userId?: true;
    };

    export type AvatarMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
        userId?: true;
    };

    export type AvatarCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
        userId?: true;
        _all?: true;
    };

    export type AvatarAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Avatar to aggregate.
         */
        where?: AvatarWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Avatars to fetch.
         */
        orderBy?:
            | AvatarOrderByWithRelationInput
            | AvatarOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AvatarWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Avatars from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Avatars.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Avatars
         **/
        _count?: true | AvatarCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: AvatarAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: AvatarSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AvatarMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AvatarMaxAggregateInputType;
    };

    export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAvatar[P]>
            : GetScalarType<T[P], AggregateAvatar[P]>;
    };

    export type AvatarGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AvatarWhereInput;
        orderBy?:
            | AvatarOrderByWithAggregationInput
            | AvatarOrderByWithAggregationInput[];
        by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum;
        having?: AvatarScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AvatarCountAggregateInputType | true;
        _avg?: AvatarAvgAggregateInputType;
        _sum?: AvatarSumAggregateInputType;
        _min?: AvatarMinAggregateInputType;
        _max?: AvatarMaxAggregateInputType;
    };

    export type AvatarGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date;
        width: number;
        height: number;
        userId: string;
        _count: AvatarCountAggregateOutputType | null;
        _avg: AvatarAvgAggregateOutputType | null;
        _sum: AvatarSumAggregateOutputType | null;
        _min: AvatarMinAggregateOutputType | null;
        _max: AvatarMaxAggregateOutputType | null;
    };

    type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<AvatarGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof AvatarGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
                        : GetScalarType<T[P], AvatarGroupByOutputType[P]>;
                }
            >
        >;

    export type AvatarSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            userId?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["avatar"]
    >;

    export type AvatarSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            userId?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["avatar"]
    >;

    export type AvatarSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            userId?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["avatar"]
    >;

    export type AvatarSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        key?: boolean;
        fileSize?: boolean;
        mimeType?: boolean;
        url?: boolean;
        expiredAt?: boolean;
        width?: boolean;
        height?: boolean;
        userId?: boolean;
    };

    export type AvatarOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "key"
        | "fileSize"
        | "mimeType"
        | "url"
        | "expiredAt"
        | "width"
        | "height"
        | "userId",
        ExtArgs["result"]["avatar"]
    >;
    export type AvatarInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type AvatarIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type AvatarIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $AvatarPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Avatar";
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                key: string;
                fileSize: number;
                mimeType: string;
                url: string;
                expiredAt: Date;
                width: number;
                height: number;
                userId: string;
            },
            ExtArgs["result"]["avatar"]
        >;
        composites: {};
    };

    type AvatarGetPayload<
        S extends boolean | null | undefined | AvatarDefaultArgs,
    > = $Result.GetResult<Prisma.$AvatarPayload, S>;

    type AvatarCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<AvatarFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: AvatarCountAggregateInputType | true;
    };

    export interface AvatarDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Avatar"];
            meta: { name: "Avatar" };
        };
        /**
         * Find zero or one Avatar that matches the filter.
         * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
         * @example
         * // Get one Avatar
         * const avatar = await prisma.avatar.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AvatarFindUniqueArgs>(
            args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
         * @example
         * // Get one Avatar
         * const avatar = await prisma.avatar.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Avatar that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
         * @example
         * // Get one Avatar
         * const avatar = await prisma.avatar.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AvatarFindFirstArgs>(
            args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Avatar that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
         * @example
         * // Get one Avatar
         * const avatar = await prisma.avatar.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Avatars that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Avatars
         * const avatars = await prisma.avatar.findMany()
         *
         * // Get first 10 Avatars
         * const avatars = await prisma.avatar.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AvatarFindManyArgs>(
            args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Avatar.
         * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
         * @example
         * // Create one Avatar
         * const Avatar = await prisma.avatar.create({
         *   data: {
         *     // ... data to create a Avatar
         *   }
         * })
         *
         */
        create<T extends AvatarCreateArgs>(
            args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Avatars.
         * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
         * @example
         * // Create many Avatars
         * const avatar = await prisma.avatar.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AvatarCreateManyArgs>(
            args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Avatars and returns the data saved in the database.
         * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
         * @example
         * // Create many Avatars
         * const avatar = await prisma.avatar.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Avatars and only return the `id`
         * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Avatar.
         * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
         * @example
         * // Delete one Avatar
         * const Avatar = await prisma.avatar.delete({
         *   where: {
         *     // ... filter to delete one Avatar
         *   }
         * })
         *
         */
        delete<T extends AvatarDeleteArgs>(
            args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Avatar.
         * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
         * @example
         * // Update one Avatar
         * const avatar = await prisma.avatar.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AvatarUpdateArgs>(
            args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Avatars.
         * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
         * @example
         * // Delete a few Avatars
         * const { count } = await prisma.avatar.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AvatarDeleteManyArgs>(
            args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Avatars.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Avatars
         * const avatar = await prisma.avatar.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AvatarUpdateManyArgs>(
            args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Avatars and returns the data updated in the database.
         * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
         * @example
         * // Update many Avatars
         * const avatar = await prisma.avatar.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Avatars and only return the `id`
         * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Avatar.
         * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
         * @example
         * // Update or create a Avatar
         * const avatar = await prisma.avatar.upsert({
         *   create: {
         *     // ... data to create a Avatar
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Avatar we want to update
         *   }
         * })
         */
        upsert<T extends AvatarUpsertArgs>(
            args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>
        ): Prisma__AvatarClient<
            $Result.GetResult<
                Prisma.$AvatarPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Avatars.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
         * @example
         * // Count the number of Avatars
         * const count = await prisma.avatar.count({
         *   where: {
         *     // ... the filter for the Avatars we want to count
         *   }
         * })
         **/
        count<T extends AvatarCountArgs>(
            args?: Subset<T, AvatarCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AvatarCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Avatar.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends AvatarAggregateArgs>(
            args: Subset<T, AvatarAggregateArgs>
        ): Prisma.PrismaPromise<GetAvatarAggregateType<T>>;

        /**
         * Group by Avatar.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AvatarGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends AvatarGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AvatarGroupByArgs["orderBy"] }
                : { orderBy?: AvatarGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [
                                    Error,
                                    "Field ",
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetAvatarGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Avatar model
         */
        readonly fields: AvatarFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Avatar.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AvatarClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Avatar model
     */
    interface AvatarFieldRefs {
        readonly id: FieldRef<"Avatar", "String">;
        readonly createdAt: FieldRef<"Avatar", "DateTime">;
        readonly updatedAt: FieldRef<"Avatar", "DateTime">;
        readonly key: FieldRef<"Avatar", "String">;
        readonly fileSize: FieldRef<"Avatar", "Float">;
        readonly mimeType: FieldRef<"Avatar", "String">;
        readonly url: FieldRef<"Avatar", "String">;
        readonly expiredAt: FieldRef<"Avatar", "DateTime">;
        readonly width: FieldRef<"Avatar", "Float">;
        readonly height: FieldRef<"Avatar", "Float">;
        readonly userId: FieldRef<"Avatar", "String">;
    }

    // Custom InputTypes
    /**
     * Avatar findUnique
     */
    export type AvatarFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * Filter, which Avatar to fetch.
         */
        where: AvatarWhereUniqueInput;
    };

    /**
     * Avatar findUniqueOrThrow
     */
    export type AvatarFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * Filter, which Avatar to fetch.
         */
        where: AvatarWhereUniqueInput;
    };

    /**
     * Avatar findFirst
     */
    export type AvatarFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * Filter, which Avatar to fetch.
         */
        where?: AvatarWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Avatars to fetch.
         */
        orderBy?:
            | AvatarOrderByWithRelationInput
            | AvatarOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Avatars.
         */
        cursor?: AvatarWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Avatars from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Avatars.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Avatars.
         */
        distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
    };

    /**
     * Avatar findFirstOrThrow
     */
    export type AvatarFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * Filter, which Avatar to fetch.
         */
        where?: AvatarWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Avatars to fetch.
         */
        orderBy?:
            | AvatarOrderByWithRelationInput
            | AvatarOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Avatars.
         */
        cursor?: AvatarWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Avatars from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Avatars.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Avatars.
         */
        distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
    };

    /**
     * Avatar findMany
     */
    export type AvatarFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * Filter, which Avatars to fetch.
         */
        where?: AvatarWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Avatars to fetch.
         */
        orderBy?:
            | AvatarOrderByWithRelationInput
            | AvatarOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Avatars.
         */
        cursor?: AvatarWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Avatars from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Avatars.
         */
        skip?: number;
        distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[];
    };

    /**
     * Avatar create
     */
    export type AvatarCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * The data needed to create a Avatar.
         */
        data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>;
    };

    /**
     * Avatar createMany
     */
    export type AvatarCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Avatars.
         */
        data: AvatarCreateManyInput | AvatarCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Avatar createManyAndReturn
     */
    export type AvatarCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * The data used to create many Avatars.
         */
        data: AvatarCreateManyInput | AvatarCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Avatar update
     */
    export type AvatarUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * The data needed to update a Avatar.
         */
        data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>;
        /**
         * Choose, which Avatar to update.
         */
        where: AvatarWhereUniqueInput;
    };

    /**
     * Avatar updateMany
     */
    export type AvatarUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Avatars.
         */
        data: XOR<
            AvatarUpdateManyMutationInput,
            AvatarUncheckedUpdateManyInput
        >;
        /**
         * Filter which Avatars to update
         */
        where?: AvatarWhereInput;
        /**
         * Limit how many Avatars to update.
         */
        limit?: number;
    };

    /**
     * Avatar updateManyAndReturn
     */
    export type AvatarUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * The data used to update Avatars.
         */
        data: XOR<
            AvatarUpdateManyMutationInput,
            AvatarUncheckedUpdateManyInput
        >;
        /**
         * Filter which Avatars to update
         */
        where?: AvatarWhereInput;
        /**
         * Limit how many Avatars to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Avatar upsert
     */
    export type AvatarUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * The filter to search for the Avatar to update in case it exists.
         */
        where: AvatarWhereUniqueInput;
        /**
         * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
         */
        create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>;
        /**
         * In case the Avatar was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>;
    };

    /**
     * Avatar delete
     */
    export type AvatarDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
        /**
         * Filter which Avatar to delete.
         */
        where: AvatarWhereUniqueInput;
    };

    /**
     * Avatar deleteMany
     */
    export type AvatarDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Avatars to delete
         */
        where?: AvatarWhereInput;
        /**
         * Limit how many Avatars to delete.
         */
        limit?: number;
    };

    /**
     * Avatar without action
     */
    export type AvatarDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Avatar
         */
        select?: AvatarSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Avatar
         */
        omit?: AvatarOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AvatarInclude<ExtArgs> | null;
    };

    /**
     * Model NotificationPreference
     */

    export type AggregateNotificationPreference = {
        _count: NotificationPreferenceCountAggregateOutputType | null;
        _min: NotificationPreferenceMinAggregateOutputType | null;
        _max: NotificationPreferenceMaxAggregateOutputType | null;
    };

    export type NotificationPreferenceMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        offerUpdates: boolean | null;
        companyNews: boolean | null;
        comments: boolean | null;
        purchases: boolean | null;
        userId: string | null;
    };

    export type NotificationPreferenceMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        offerUpdates: boolean | null;
        companyNews: boolean | null;
        comments: boolean | null;
        purchases: boolean | null;
        userId: string | null;
    };

    export type NotificationPreferenceCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        offerUpdates: number;
        companyNews: number;
        comments: number;
        purchases: number;
        userId: number;
        _all: number;
    };

    export type NotificationPreferenceMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        offerUpdates?: true;
        companyNews?: true;
        comments?: true;
        purchases?: true;
        userId?: true;
    };

    export type NotificationPreferenceMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        offerUpdates?: true;
        companyNews?: true;
        comments?: true;
        purchases?: true;
        userId?: true;
    };

    export type NotificationPreferenceCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        offerUpdates?: true;
        companyNews?: true;
        comments?: true;
        purchases?: true;
        userId?: true;
        _all?: true;
    };

    export type NotificationPreferenceAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which NotificationPreference to aggregate.
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of NotificationPreferences to fetch.
         */
        orderBy?:
            | NotificationPreferenceOrderByWithRelationInput
            | NotificationPreferenceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: NotificationPreferenceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` NotificationPreferences from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` NotificationPreferences.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned NotificationPreferences
         **/
        _count?: true | NotificationPreferenceCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: NotificationPreferenceMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: NotificationPreferenceMaxAggregateInputType;
    };

    export type GetNotificationPreferenceAggregateType<
        T extends NotificationPreferenceAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateNotificationPreference]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateNotificationPreference[P]>
            : GetScalarType<T[P], AggregateNotificationPreference[P]>;
    };

    export type NotificationPreferenceGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: NotificationPreferenceWhereInput;
        orderBy?:
            | NotificationPreferenceOrderByWithAggregationInput
            | NotificationPreferenceOrderByWithAggregationInput[];
        by:
            | NotificationPreferenceScalarFieldEnum[]
            | NotificationPreferenceScalarFieldEnum;
        having?: NotificationPreferenceScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: NotificationPreferenceCountAggregateInputType | true;
        _min?: NotificationPreferenceMinAggregateInputType;
        _max?: NotificationPreferenceMaxAggregateInputType;
    };

    export type NotificationPreferenceGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        offerUpdates: boolean;
        companyNews: boolean;
        comments: boolean;
        purchases: boolean;
        userId: string;
        _count: NotificationPreferenceCountAggregateOutputType | null;
        _min: NotificationPreferenceMinAggregateOutputType | null;
        _max: NotificationPreferenceMaxAggregateOutputType | null;
    };

    type GetNotificationPreferenceGroupByPayload<
        T extends NotificationPreferenceGroupByArgs,
    > = Prisma.PrismaPromise<
        Array<
            PickEnumerable<NotificationPreferenceGroupByOutputType, T["by"]> & {
                [P in keyof T &
                    keyof NotificationPreferenceGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<
                              T[P],
                              NotificationPreferenceGroupByOutputType[P]
                          >
                    : GetScalarType<
                          T[P],
                          NotificationPreferenceGroupByOutputType[P]
                      >;
            }
        >
    >;

    export type NotificationPreferenceSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            offerUpdates?: boolean;
            companyNews?: boolean;
            comments?: boolean;
            purchases?: boolean;
            userId?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["notificationPreference"]
    >;

    export type NotificationPreferenceSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            offerUpdates?: boolean;
            companyNews?: boolean;
            comments?: boolean;
            purchases?: boolean;
            userId?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["notificationPreference"]
    >;

    export type NotificationPreferenceSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            offerUpdates?: boolean;
            companyNews?: boolean;
            comments?: boolean;
            purchases?: boolean;
            userId?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["notificationPreference"]
    >;

    export type NotificationPreferenceSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        offerUpdates?: boolean;
        companyNews?: boolean;
        comments?: boolean;
        purchases?: boolean;
        userId?: boolean;
    };

    export type NotificationPreferenceOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "offerUpdates"
        | "companyNews"
        | "comments"
        | "purchases"
        | "userId",
        ExtArgs["result"]["notificationPreference"]
    >;
    export type NotificationPreferenceInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type NotificationPreferenceIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type NotificationPreferenceIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $NotificationPreferencePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "NotificationPreference";
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                offerUpdates: boolean;
                companyNews: boolean;
                comments: boolean;
                purchases: boolean;
                userId: string;
            },
            ExtArgs["result"]["notificationPreference"]
        >;
        composites: {};
    };

    type NotificationPreferenceGetPayload<
        S extends
            | boolean
            | null
            | undefined
            | NotificationPreferenceDefaultArgs,
    > = $Result.GetResult<Prisma.$NotificationPreferencePayload, S>;

    type NotificationPreferenceCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        NotificationPreferenceFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: NotificationPreferenceCountAggregateInputType | true;
    };

    export interface NotificationPreferenceDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["NotificationPreference"];
            meta: { name: "NotificationPreference" };
        };
        /**
         * Find zero or one NotificationPreference that matches the filter.
         * @param {NotificationPreferenceFindUniqueArgs} args - Arguments to find a NotificationPreference
         * @example
         * // Get one NotificationPreference
         * const notificationPreference = await prisma.notificationPreference.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends NotificationPreferenceFindUniqueArgs>(
            args: SelectSubset<T, NotificationPreferenceFindUniqueArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one NotificationPreference that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {NotificationPreferenceFindUniqueOrThrowArgs} args - Arguments to find a NotificationPreference
         * @example
         * // Get one NotificationPreference
         * const notificationPreference = await prisma.notificationPreference.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<
            T extends NotificationPreferenceFindUniqueOrThrowArgs,
        >(
            args: SelectSubset<
                T,
                NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>
            >
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first NotificationPreference that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceFindFirstArgs} args - Arguments to find a NotificationPreference
         * @example
         * // Get one NotificationPreference
         * const notificationPreference = await prisma.notificationPreference.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends NotificationPreferenceFindFirstArgs>(
            args?: SelectSubset<T, NotificationPreferenceFindFirstArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first NotificationPreference that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceFindFirstOrThrowArgs} args - Arguments to find a NotificationPreference
         * @example
         * // Get one NotificationPreference
         * const notificationPreference = await prisma.notificationPreference.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends NotificationPreferenceFindFirstOrThrowArgs>(
            args?: SelectSubset<
                T,
                NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>
            >
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more NotificationPreferences that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all NotificationPreferences
         * const notificationPreferences = await prisma.notificationPreference.findMany()
         *
         * // Get first 10 NotificationPreferences
         * const notificationPreferences = await prisma.notificationPreference.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.findMany({ select: { id: true } })
         *
         */
        findMany<T extends NotificationPreferenceFindManyArgs>(
            args?: SelectSubset<T, NotificationPreferenceFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a NotificationPreference.
         * @param {NotificationPreferenceCreateArgs} args - Arguments to create a NotificationPreference.
         * @example
         * // Create one NotificationPreference
         * const NotificationPreference = await prisma.notificationPreference.create({
         *   data: {
         *     // ... data to create a NotificationPreference
         *   }
         * })
         *
         */
        create<T extends NotificationPreferenceCreateArgs>(
            args: SelectSubset<T, NotificationPreferenceCreateArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many NotificationPreferences.
         * @param {NotificationPreferenceCreateManyArgs} args - Arguments to create many NotificationPreferences.
         * @example
         * // Create many NotificationPreferences
         * const notificationPreference = await prisma.notificationPreference.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends NotificationPreferenceCreateManyArgs>(
            args?: SelectSubset<
                T,
                NotificationPreferenceCreateManyArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many NotificationPreferences and returns the data saved in the database.
         * @param {NotificationPreferenceCreateManyAndReturnArgs} args - Arguments to create many NotificationPreferences.
         * @example
         * // Create many NotificationPreferences
         * const notificationPreference = await prisma.notificationPreference.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many NotificationPreferences and only return the `id`
         * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<
            T extends NotificationPreferenceCreateManyAndReturnArgs,
        >(
            args?: SelectSubset<
                T,
                NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a NotificationPreference.
         * @param {NotificationPreferenceDeleteArgs} args - Arguments to delete one NotificationPreference.
         * @example
         * // Delete one NotificationPreference
         * const NotificationPreference = await prisma.notificationPreference.delete({
         *   where: {
         *     // ... filter to delete one NotificationPreference
         *   }
         * })
         *
         */
        delete<T extends NotificationPreferenceDeleteArgs>(
            args: SelectSubset<T, NotificationPreferenceDeleteArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one NotificationPreference.
         * @param {NotificationPreferenceUpdateArgs} args - Arguments to update one NotificationPreference.
         * @example
         * // Update one NotificationPreference
         * const notificationPreference = await prisma.notificationPreference.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends NotificationPreferenceUpdateArgs>(
            args: SelectSubset<T, NotificationPreferenceUpdateArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more NotificationPreferences.
         * @param {NotificationPreferenceDeleteManyArgs} args - Arguments to filter NotificationPreferences to delete.
         * @example
         * // Delete a few NotificationPreferences
         * const { count } = await prisma.notificationPreference.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends NotificationPreferenceDeleteManyArgs>(
            args?: SelectSubset<
                T,
                NotificationPreferenceDeleteManyArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more NotificationPreferences.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many NotificationPreferences
         * const notificationPreference = await prisma.notificationPreference.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends NotificationPreferenceUpdateManyArgs>(
            args: SelectSubset<T, NotificationPreferenceUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more NotificationPreferences and returns the data updated in the database.
         * @param {NotificationPreferenceUpdateManyAndReturnArgs} args - Arguments to update many NotificationPreferences.
         * @example
         * // Update many NotificationPreferences
         * const notificationPreference = await prisma.notificationPreference.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more NotificationPreferences and only return the `id`
         * const notificationPreferenceWithIdOnly = await prisma.notificationPreference.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<
            T extends NotificationPreferenceUpdateManyAndReturnArgs,
        >(
            args: SelectSubset<
                T,
                NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one NotificationPreference.
         * @param {NotificationPreferenceUpsertArgs} args - Arguments to update or create a NotificationPreference.
         * @example
         * // Update or create a NotificationPreference
         * const notificationPreference = await prisma.notificationPreference.upsert({
         *   create: {
         *     // ... data to create a NotificationPreference
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the NotificationPreference we want to update
         *   }
         * })
         */
        upsert<T extends NotificationPreferenceUpsertArgs>(
            args: SelectSubset<T, NotificationPreferenceUpsertArgs<ExtArgs>>
        ): Prisma__NotificationPreferenceClient<
            $Result.GetResult<
                Prisma.$NotificationPreferencePayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of NotificationPreferences.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceCountArgs} args - Arguments to filter NotificationPreferences to count.
         * @example
         * // Count the number of NotificationPreferences
         * const count = await prisma.notificationPreference.count({
         *   where: {
         *     // ... the filter for the NotificationPreferences we want to count
         *   }
         * })
         **/
        count<T extends NotificationPreferenceCountArgs>(
            args?: Subset<T, NotificationPreferenceCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          NotificationPreferenceCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a NotificationPreference.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends NotificationPreferenceAggregateArgs>(
            args: Subset<T, NotificationPreferenceAggregateArgs>
        ): Prisma.PrismaPromise<GetNotificationPreferenceAggregateType<T>>;

        /**
         * Group by NotificationPreference.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationPreferenceGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends NotificationPreferenceGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: NotificationPreferenceGroupByArgs["orderBy"] }
                : { orderBy?: NotificationPreferenceGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [
                                    Error,
                                    "Field ",
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<
                T,
                NotificationPreferenceGroupByArgs,
                OrderByArg
            > &
                InputErrors
        ): {} extends InputErrors
            ? GetNotificationPreferenceGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the NotificationPreference model
         */
        readonly fields: NotificationPreferenceFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for NotificationPreference.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__NotificationPreferenceClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the NotificationPreference model
     */
    interface NotificationPreferenceFieldRefs {
        readonly id: FieldRef<"NotificationPreference", "String">;
        readonly createdAt: FieldRef<"NotificationPreference", "DateTime">;
        readonly updatedAt: FieldRef<"NotificationPreference", "DateTime">;
        readonly offerUpdates: FieldRef<"NotificationPreference", "Boolean">;
        readonly companyNews: FieldRef<"NotificationPreference", "Boolean">;
        readonly comments: FieldRef<"NotificationPreference", "Boolean">;
        readonly purchases: FieldRef<"NotificationPreference", "Boolean">;
        readonly userId: FieldRef<"NotificationPreference", "String">;
    }

    // Custom InputTypes
    /**
     * NotificationPreference findUnique
     */
    export type NotificationPreferenceFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * Filter, which NotificationPreference to fetch.
         */
        where: NotificationPreferenceWhereUniqueInput;
    };

    /**
     * NotificationPreference findUniqueOrThrow
     */
    export type NotificationPreferenceFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * Filter, which NotificationPreference to fetch.
         */
        where: NotificationPreferenceWhereUniqueInput;
    };

    /**
     * NotificationPreference findFirst
     */
    export type NotificationPreferenceFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * Filter, which NotificationPreference to fetch.
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of NotificationPreferences to fetch.
         */
        orderBy?:
            | NotificationPreferenceOrderByWithRelationInput
            | NotificationPreferenceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for NotificationPreferences.
         */
        cursor?: NotificationPreferenceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` NotificationPreferences from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` NotificationPreferences.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of NotificationPreferences.
         */
        distinct?:
            | NotificationPreferenceScalarFieldEnum
            | NotificationPreferenceScalarFieldEnum[];
    };

    /**
     * NotificationPreference findFirstOrThrow
     */
    export type NotificationPreferenceFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * Filter, which NotificationPreference to fetch.
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of NotificationPreferences to fetch.
         */
        orderBy?:
            | NotificationPreferenceOrderByWithRelationInput
            | NotificationPreferenceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for NotificationPreferences.
         */
        cursor?: NotificationPreferenceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` NotificationPreferences from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` NotificationPreferences.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of NotificationPreferences.
         */
        distinct?:
            | NotificationPreferenceScalarFieldEnum
            | NotificationPreferenceScalarFieldEnum[];
    };

    /**
     * NotificationPreference findMany
     */
    export type NotificationPreferenceFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * Filter, which NotificationPreferences to fetch.
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of NotificationPreferences to fetch.
         */
        orderBy?:
            | NotificationPreferenceOrderByWithRelationInput
            | NotificationPreferenceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing NotificationPreferences.
         */
        cursor?: NotificationPreferenceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` NotificationPreferences from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` NotificationPreferences.
         */
        skip?: number;
        distinct?:
            | NotificationPreferenceScalarFieldEnum
            | NotificationPreferenceScalarFieldEnum[];
    };

    /**
     * NotificationPreference create
     */
    export type NotificationPreferenceCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * The data needed to create a NotificationPreference.
         */
        data: XOR<
            NotificationPreferenceCreateInput,
            NotificationPreferenceUncheckedCreateInput
        >;
    };

    /**
     * NotificationPreference createMany
     */
    export type NotificationPreferenceCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many NotificationPreferences.
         */
        data:
            | NotificationPreferenceCreateManyInput
            | NotificationPreferenceCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * NotificationPreference createManyAndReturn
     */
    export type NotificationPreferenceCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * The data used to create many NotificationPreferences.
         */
        data:
            | NotificationPreferenceCreateManyInput
            | NotificationPreferenceCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * NotificationPreference update
     */
    export type NotificationPreferenceUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * The data needed to update a NotificationPreference.
         */
        data: XOR<
            NotificationPreferenceUpdateInput,
            NotificationPreferenceUncheckedUpdateInput
        >;
        /**
         * Choose, which NotificationPreference to update.
         */
        where: NotificationPreferenceWhereUniqueInput;
    };

    /**
     * NotificationPreference updateMany
     */
    export type NotificationPreferenceUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update NotificationPreferences.
         */
        data: XOR<
            NotificationPreferenceUpdateManyMutationInput,
            NotificationPreferenceUncheckedUpdateManyInput
        >;
        /**
         * Filter which NotificationPreferences to update
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * Limit how many NotificationPreferences to update.
         */
        limit?: number;
    };

    /**
     * NotificationPreference updateManyAndReturn
     */
    export type NotificationPreferenceUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * The data used to update NotificationPreferences.
         */
        data: XOR<
            NotificationPreferenceUpdateManyMutationInput,
            NotificationPreferenceUncheckedUpdateManyInput
        >;
        /**
         * Filter which NotificationPreferences to update
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * Limit how many NotificationPreferences to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * NotificationPreference upsert
     */
    export type NotificationPreferenceUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * The filter to search for the NotificationPreference to update in case it exists.
         */
        where: NotificationPreferenceWhereUniqueInput;
        /**
         * In case the NotificationPreference found by the `where` argument doesn't exist, create a new NotificationPreference with this data.
         */
        create: XOR<
            NotificationPreferenceCreateInput,
            NotificationPreferenceUncheckedCreateInput
        >;
        /**
         * In case the NotificationPreference was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            NotificationPreferenceUpdateInput,
            NotificationPreferenceUncheckedUpdateInput
        >;
    };

    /**
     * NotificationPreference delete
     */
    export type NotificationPreferenceDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
        /**
         * Filter which NotificationPreference to delete.
         */
        where: NotificationPreferenceWhereUniqueInput;
    };

    /**
     * NotificationPreference deleteMany
     */
    export type NotificationPreferenceDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which NotificationPreferences to delete
         */
        where?: NotificationPreferenceWhereInput;
        /**
         * Limit how many NotificationPreferences to delete.
         */
        limit?: number;
    };

    /**
     * NotificationPreference without action
     */
    export type NotificationPreferenceDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the NotificationPreference
         */
        select?: NotificationPreferenceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the NotificationPreference
         */
        omit?: NotificationPreferenceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: NotificationPreferenceInclude<ExtArgs> | null;
    };

    /**
     * Model Team
     */

    export type AggregateTeam = {
        _count: TeamCountAggregateOutputType | null;
        _min: TeamMinAggregateOutputType | null;
        _max: TeamMaxAggregateOutputType | null;
    };

    export type TeamMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
    };

    export type TeamMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
    };

    export type TeamCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        name: number;
        _all: number;
    };

    export type TeamMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
    };

    export type TeamMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
    };

    export type TeamCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        _all?: true;
    };

    export type TeamAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Team to aggregate.
         */
        where?: TeamWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TeamWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Teams
         **/
        _count?: true | TeamCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TeamMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TeamMaxAggregateInputType;
    };

    export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTeam[P]>
            : GetScalarType<T[P], AggregateTeam[P]>;
    };

    export type TeamGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TeamWhereInput;
        orderBy?:
            | TeamOrderByWithAggregationInput
            | TeamOrderByWithAggregationInput[];
        by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
        having?: TeamScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: TeamCountAggregateInputType | true;
        _min?: TeamMinAggregateInputType;
        _max?: TeamMaxAggregateInputType;
    };

    export type TeamGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: TeamCountAggregateOutputType | null;
        _min: TeamMinAggregateOutputType | null;
        _max: TeamMaxAggregateOutputType | null;
    };

    type GetTeamGroupByPayload<T extends TeamGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<TeamGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof TeamGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], TeamGroupByOutputType[P]>
                        : GetScalarType<T[P], TeamGroupByOutputType[P]>;
                }
            >
        >;

    export type TeamSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            logo?: boolean | Team$logoArgs<ExtArgs>;
        },
        ExtArgs["result"]["team"]
    >;

    export type TeamSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
        },
        ExtArgs["result"]["team"]
    >;

    export type TeamSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
        },
        ExtArgs["result"]["team"]
    >;

    export type TeamSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        name?: boolean;
    };

    export type TeamOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "createdAt" | "updatedAt" | "name",
        ExtArgs["result"]["team"]
    >;
    export type TeamInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        logo?: boolean | Team$logoArgs<ExtArgs>;
    };
    export type TeamIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type TeamIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $TeamPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Team";
        objects: {
            logo: Prisma.$LogoPayload<ExtArgs> | null;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
            },
            ExtArgs["result"]["team"]
        >;
        composites: {};
    };

    type TeamGetPayload<
        S extends boolean | null | undefined | TeamDefaultArgs,
    > = $Result.GetResult<Prisma.$TeamPayload, S>;

    type TeamCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<TeamFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: TeamCountAggregateInputType | true;
    };

    export interface TeamDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Team"];
            meta: { name: "Team" };
        };
        /**
         * Find zero or one Team that matches the filter.
         * @param {TeamFindUniqueArgs} args - Arguments to find a Team
         * @example
         * // Get one Team
         * const team = await prisma.team.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TeamFindUniqueArgs>(
            args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Team that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
         * @example
         * // Get one Team
         * const team = await prisma.team.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(
            args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Team that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamFindFirstArgs} args - Arguments to find a Team
         * @example
         * // Get one Team
         * const team = await prisma.team.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TeamFindFirstArgs>(
            args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Team that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
         * @example
         * // Get one Team
         * const team = await prisma.team.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(
            args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Teams that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Teams
         * const teams = await prisma.team.findMany()
         *
         * // Get first 10 Teams
         * const teams = await prisma.team.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
         *
         */
        findMany<T extends TeamFindManyArgs>(
            args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Team.
         * @param {TeamCreateArgs} args - Arguments to create a Team.
         * @example
         * // Create one Team
         * const Team = await prisma.team.create({
         *   data: {
         *     // ... data to create a Team
         *   }
         * })
         *
         */
        create<T extends TeamCreateArgs>(
            args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Teams.
         * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
         * @example
         * // Create many Teams
         * const team = await prisma.team.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TeamCreateManyArgs>(
            args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Teams and returns the data saved in the database.
         * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
         * @example
         * // Create many Teams
         * const team = await prisma.team.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Teams and only return the `id`
         * const teamWithIdOnly = await prisma.team.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(
            args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Team.
         * @param {TeamDeleteArgs} args - Arguments to delete one Team.
         * @example
         * // Delete one Team
         * const Team = await prisma.team.delete({
         *   where: {
         *     // ... filter to delete one Team
         *   }
         * })
         *
         */
        delete<T extends TeamDeleteArgs>(
            args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Team.
         * @param {TeamUpdateArgs} args - Arguments to update one Team.
         * @example
         * // Update one Team
         * const team = await prisma.team.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TeamUpdateArgs>(
            args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Teams.
         * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
         * @example
         * // Delete a few Teams
         * const { count } = await prisma.team.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TeamDeleteManyArgs>(
            args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Teams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Teams
         * const team = await prisma.team.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TeamUpdateManyArgs>(
            args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Teams and returns the data updated in the database.
         * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
         * @example
         * // Update many Teams
         * const team = await prisma.team.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Teams and only return the `id`
         * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(
            args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Team.
         * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
         * @example
         * // Update or create a Team
         * const team = await prisma.team.upsert({
         *   create: {
         *     // ... data to create a Team
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Team we want to update
         *   }
         * })
         */
        upsert<T extends TeamUpsertArgs>(
            args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
        ): Prisma__TeamClient<
            $Result.GetResult<
                Prisma.$TeamPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Teams.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamCountArgs} args - Arguments to filter Teams to count.
         * @example
         * // Count the number of Teams
         * const count = await prisma.team.count({
         *   where: {
         *     // ... the filter for the Teams we want to count
         *   }
         * })
         **/
        count<T extends TeamCountArgs>(
            args?: Subset<T, TeamCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], TeamCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Team.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends TeamAggregateArgs>(
            args: Subset<T, TeamAggregateArgs>
        ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

        /**
         * Group by Team.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TeamGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends TeamGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TeamGroupByArgs["orderBy"] }
                : { orderBy?: TeamGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [
                                    Error,
                                    "Field ",
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetTeamGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Team model
         */
        readonly fields: TeamFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Team.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TeamClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        logo<T extends Team$logoArgs<ExtArgs> = {}>(
            args?: Subset<T, Team$logoArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Team model
     */
    interface TeamFieldRefs {
        readonly id: FieldRef<"Team", "String">;
        readonly createdAt: FieldRef<"Team", "DateTime">;
        readonly updatedAt: FieldRef<"Team", "DateTime">;
        readonly name: FieldRef<"Team", "String">;
    }

    // Custom InputTypes
    /**
     * Team findUnique
     */
    export type TeamFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * Filter, which Team to fetch.
         */
        where: TeamWhereUniqueInput;
    };

    /**
     * Team findUniqueOrThrow
     */
    export type TeamFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * Filter, which Team to fetch.
         */
        where: TeamWhereUniqueInput;
    };

    /**
     * Team findFirst
     */
    export type TeamFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * Filter, which Team to fetch.
         */
        where?: TeamWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Teams.
         */
        cursor?: TeamWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Teams.
         */
        distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
    };

    /**
     * Team findFirstOrThrow
     */
    export type TeamFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * Filter, which Team to fetch.
         */
        where?: TeamWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Teams.
         */
        cursor?: TeamWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Teams.
         */
        distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
    };

    /**
     * Team findMany
     */
    export type TeamFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * Filter, which Teams to fetch.
         */
        where?: TeamWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Teams to fetch.
         */
        orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Teams.
         */
        cursor?: TeamWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Teams from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Teams.
         */
        skip?: number;
        distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
    };

    /**
     * Team create
     */
    export type TeamCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * The data needed to create a Team.
         */
        data: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
    };

    /**
     * Team createMany
     */
    export type TeamCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Teams.
         */
        data: TeamCreateManyInput | TeamCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Team createManyAndReturn
     */
    export type TeamCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * The data used to create many Teams.
         */
        data: TeamCreateManyInput | TeamCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Team update
     */
    export type TeamUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * The data needed to update a Team.
         */
        data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
        /**
         * Choose, which Team to update.
         */
        where: TeamWhereUniqueInput;
    };

    /**
     * Team updateMany
     */
    export type TeamUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Teams.
         */
        data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
        /**
         * Filter which Teams to update
         */
        where?: TeamWhereInput;
        /**
         * Limit how many Teams to update.
         */
        limit?: number;
    };

    /**
     * Team updateManyAndReturn
     */
    export type TeamUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * The data used to update Teams.
         */
        data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
        /**
         * Filter which Teams to update
         */
        where?: TeamWhereInput;
        /**
         * Limit how many Teams to update.
         */
        limit?: number;
    };

    /**
     * Team upsert
     */
    export type TeamUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * The filter to search for the Team to update in case it exists.
         */
        where: TeamWhereUniqueInput;
        /**
         * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
         */
        create: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
        /**
         * In case the Team was found with the provided `where` argument, update it with this data.
         */
        update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
    };

    /**
     * Team delete
     */
    export type TeamDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
        /**
         * Filter which Team to delete.
         */
        where: TeamWhereUniqueInput;
    };

    /**
     * Team deleteMany
     */
    export type TeamDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Teams to delete
         */
        where?: TeamWhereInput;
        /**
         * Limit how many Teams to delete.
         */
        limit?: number;
    };

    /**
     * Team.logo
     */
    export type Team$logoArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        where?: LogoWhereInput;
    };

    /**
     * Team without action
     */
    export type TeamDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Team
         */
        select?: TeamSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Team
         */
        omit?: TeamOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TeamInclude<ExtArgs> | null;
    };

    /**
     * Model Logo
     */

    export type AggregateLogo = {
        _count: LogoCountAggregateOutputType | null;
        _avg: LogoAvgAggregateOutputType | null;
        _sum: LogoSumAggregateOutputType | null;
        _min: LogoMinAggregateOutputType | null;
        _max: LogoMaxAggregateOutputType | null;
    };

    export type LogoAvgAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type LogoSumAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type LogoMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        expiredAt: Date | null;
        width: number | null;
        height: number | null;
        teamId: string | null;
    };

    export type LogoMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        expiredAt: Date | null;
        width: number | null;
        height: number | null;
        teamId: string | null;
    };

    export type LogoCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        key: number;
        fileSize: number;
        mimeType: number;
        url: number;
        expiredAt: number;
        width: number;
        height: number;
        teamId: number;
        _all: number;
    };

    export type LogoAvgAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type LogoSumAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type LogoMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
        teamId?: true;
    };

    export type LogoMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
        teamId?: true;
    };

    export type LogoCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
        teamId?: true;
        _all?: true;
    };

    export type LogoAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Logo to aggregate.
         */
        where?: LogoWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Logos to fetch.
         */
        orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: LogoWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Logos from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Logos.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Logos
         **/
        _count?: true | LogoCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: LogoAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: LogoSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: LogoMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: LogoMaxAggregateInputType;
    };

    export type GetLogoAggregateType<T extends LogoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogo]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateLogo[P]>
            : GetScalarType<T[P], AggregateLogo[P]>;
    };

    export type LogoGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: LogoWhereInput;
        orderBy?:
            | LogoOrderByWithAggregationInput
            | LogoOrderByWithAggregationInput[];
        by: LogoScalarFieldEnum[] | LogoScalarFieldEnum;
        having?: LogoScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: LogoCountAggregateInputType | true;
        _avg?: LogoAvgAggregateInputType;
        _sum?: LogoSumAggregateInputType;
        _min?: LogoMinAggregateInputType;
        _max?: LogoMaxAggregateInputType;
    };

    export type LogoGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date;
        width: number;
        height: number;
        teamId: string;
        _count: LogoCountAggregateOutputType | null;
        _avg: LogoAvgAggregateOutputType | null;
        _sum: LogoSumAggregateOutputType | null;
        _min: LogoMinAggregateOutputType | null;
        _max: LogoMaxAggregateOutputType | null;
    };

    type GetLogoGroupByPayload<T extends LogoGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<LogoGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof LogoGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], LogoGroupByOutputType[P]>
                        : GetScalarType<T[P], LogoGroupByOutputType[P]>;
                }
            >
        >;

    export type LogoSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            teamId?: boolean;
            team?: boolean | TeamDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["logo"]
    >;

    export type LogoSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            teamId?: boolean;
            team?: boolean | TeamDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["logo"]
    >;

    export type LogoSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            teamId?: boolean;
            team?: boolean | TeamDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["logo"]
    >;

    export type LogoSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        key?: boolean;
        fileSize?: boolean;
        mimeType?: boolean;
        url?: boolean;
        expiredAt?: boolean;
        width?: boolean;
        height?: boolean;
        teamId?: boolean;
    };

    export type LogoOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "key"
        | "fileSize"
        | "mimeType"
        | "url"
        | "expiredAt"
        | "width"
        | "height"
        | "teamId",
        ExtArgs["result"]["logo"]
    >;
    export type LogoInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        team?: boolean | TeamDefaultArgs<ExtArgs>;
    };
    export type LogoIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        team?: boolean | TeamDefaultArgs<ExtArgs>;
    };
    export type LogoIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        team?: boolean | TeamDefaultArgs<ExtArgs>;
    };

    export type $LogoPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Logo";
        objects: {
            team: Prisma.$TeamPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                key: string;
                fileSize: number;
                mimeType: string;
                url: string;
                expiredAt: Date;
                width: number;
                height: number;
                teamId: string;
            },
            ExtArgs["result"]["logo"]
        >;
        composites: {};
    };

    type LogoGetPayload<
        S extends boolean | null | undefined | LogoDefaultArgs,
    > = $Result.GetResult<Prisma.$LogoPayload, S>;

    type LogoCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<LogoFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: LogoCountAggregateInputType | true;
    };

    export interface LogoDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Logo"];
            meta: { name: "Logo" };
        };
        /**
         * Find zero or one Logo that matches the filter.
         * @param {LogoFindUniqueArgs} args - Arguments to find a Logo
         * @example
         * // Get one Logo
         * const logo = await prisma.logo.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends LogoFindUniqueArgs>(
            args: SelectSubset<T, LogoFindUniqueArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Logo that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {LogoFindUniqueOrThrowArgs} args - Arguments to find a Logo
         * @example
         * // Get one Logo
         * const logo = await prisma.logo.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends LogoFindUniqueOrThrowArgs>(
            args: SelectSubset<T, LogoFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Logo that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoFindFirstArgs} args - Arguments to find a Logo
         * @example
         * // Get one Logo
         * const logo = await prisma.logo.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends LogoFindFirstArgs>(
            args?: SelectSubset<T, LogoFindFirstArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Logo that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoFindFirstOrThrowArgs} args - Arguments to find a Logo
         * @example
         * // Get one Logo
         * const logo = await prisma.logo.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends LogoFindFirstOrThrowArgs>(
            args?: SelectSubset<T, LogoFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Logos that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Logos
         * const logos = await prisma.logo.findMany()
         *
         * // Get first 10 Logos
         * const logos = await prisma.logo.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const logoWithIdOnly = await prisma.logo.findMany({ select: { id: true } })
         *
         */
        findMany<T extends LogoFindManyArgs>(
            args?: SelectSubset<T, LogoFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Logo.
         * @param {LogoCreateArgs} args - Arguments to create a Logo.
         * @example
         * // Create one Logo
         * const Logo = await prisma.logo.create({
         *   data: {
         *     // ... data to create a Logo
         *   }
         * })
         *
         */
        create<T extends LogoCreateArgs>(
            args: SelectSubset<T, LogoCreateArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Logos.
         * @param {LogoCreateManyArgs} args - Arguments to create many Logos.
         * @example
         * // Create many Logos
         * const logo = await prisma.logo.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends LogoCreateManyArgs>(
            args?: SelectSubset<T, LogoCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Logos and returns the data saved in the database.
         * @param {LogoCreateManyAndReturnArgs} args - Arguments to create many Logos.
         * @example
         * // Create many Logos
         * const logo = await prisma.logo.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Logos and only return the `id`
         * const logoWithIdOnly = await prisma.logo.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends LogoCreateManyAndReturnArgs>(
            args?: SelectSubset<T, LogoCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Logo.
         * @param {LogoDeleteArgs} args - Arguments to delete one Logo.
         * @example
         * // Delete one Logo
         * const Logo = await prisma.logo.delete({
         *   where: {
         *     // ... filter to delete one Logo
         *   }
         * })
         *
         */
        delete<T extends LogoDeleteArgs>(
            args: SelectSubset<T, LogoDeleteArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Logo.
         * @param {LogoUpdateArgs} args - Arguments to update one Logo.
         * @example
         * // Update one Logo
         * const logo = await prisma.logo.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends LogoUpdateArgs>(
            args: SelectSubset<T, LogoUpdateArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Logos.
         * @param {LogoDeleteManyArgs} args - Arguments to filter Logos to delete.
         * @example
         * // Delete a few Logos
         * const { count } = await prisma.logo.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends LogoDeleteManyArgs>(
            args?: SelectSubset<T, LogoDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Logos.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Logos
         * const logo = await prisma.logo.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends LogoUpdateManyArgs>(
            args: SelectSubset<T, LogoUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Logos and returns the data updated in the database.
         * @param {LogoUpdateManyAndReturnArgs} args - Arguments to update many Logos.
         * @example
         * // Update many Logos
         * const logo = await prisma.logo.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Logos and only return the `id`
         * const logoWithIdOnly = await prisma.logo.updateManyAndReturn({
         *   select: { id: true },
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        updateManyAndReturn<T extends LogoUpdateManyAndReturnArgs>(
            args: SelectSubset<T, LogoUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Logo.
         * @param {LogoUpsertArgs} args - Arguments to update or create a Logo.
         * @example
         * // Update or create a Logo
         * const logo = await prisma.logo.upsert({
         *   create: {
         *     // ... data to create a Logo
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Logo we want to update
         *   }
         * })
         */
        upsert<T extends LogoUpsertArgs>(
            args: SelectSubset<T, LogoUpsertArgs<ExtArgs>>
        ): Prisma__LogoClient<
            $Result.GetResult<
                Prisma.$LogoPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Logos.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoCountArgs} args - Arguments to filter Logos to count.
         * @example
         * // Count the number of Logos
         * const count = await prisma.logo.count({
         *   where: {
         *     // ... the filter for the Logos we want to count
         *   }
         * })
         **/
        count<T extends LogoCountArgs>(
            args?: Subset<T, LogoCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], LogoCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Logo.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends LogoAggregateArgs>(
            args: Subset<T, LogoAggregateArgs>
        ): Prisma.PrismaPromise<GetLogoAggregateType<T>>;

        /**
         * Group by Logo.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LogoGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends LogoGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: LogoGroupByArgs["orderBy"] }
                : { orderBy?: LogoGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T["orderBy"]>>
            >,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [
                                    Error,
                                    "Field ",
                                    P,
                                    ` in "having" needs to be provided in "by"`,
                                ];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, LogoGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetLogoGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Logo model
         */
        readonly fields: LogoFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Logo.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__LogoClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        team<T extends TeamDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, TeamDefaultArgs<ExtArgs>>
        ): Prisma__TeamClient<
            | $Result.GetResult<
                  Prisma.$TeamPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Logo model
     */
    interface LogoFieldRefs {
        readonly id: FieldRef<"Logo", "String">;
        readonly createdAt: FieldRef<"Logo", "DateTime">;
        readonly updatedAt: FieldRef<"Logo", "DateTime">;
        readonly key: FieldRef<"Logo", "String">;
        readonly fileSize: FieldRef<"Logo", "Float">;
        readonly mimeType: FieldRef<"Logo", "String">;
        readonly url: FieldRef<"Logo", "String">;
        readonly expiredAt: FieldRef<"Logo", "DateTime">;
        readonly width: FieldRef<"Logo", "Float">;
        readonly height: FieldRef<"Logo", "Float">;
        readonly teamId: FieldRef<"Logo", "String">;
    }

    // Custom InputTypes
    /**
     * Logo findUnique
     */
    export type LogoFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * Filter, which Logo to fetch.
         */
        where: LogoWhereUniqueInput;
    };

    /**
     * Logo findUniqueOrThrow
     */
    export type LogoFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * Filter, which Logo to fetch.
         */
        where: LogoWhereUniqueInput;
    };

    /**
     * Logo findFirst
     */
    export type LogoFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * Filter, which Logo to fetch.
         */
        where?: LogoWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Logos to fetch.
         */
        orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Logos.
         */
        cursor?: LogoWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Logos from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Logos.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Logos.
         */
        distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[];
    };

    /**
     * Logo findFirstOrThrow
     */
    export type LogoFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * Filter, which Logo to fetch.
         */
        where?: LogoWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Logos to fetch.
         */
        orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Logos.
         */
        cursor?: LogoWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Logos from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Logos.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Logos.
         */
        distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[];
    };

    /**
     * Logo findMany
     */
    export type LogoFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * Filter, which Logos to fetch.
         */
        where?: LogoWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Logos to fetch.
         */
        orderBy?: LogoOrderByWithRelationInput | LogoOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Logos.
         */
        cursor?: LogoWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Logos from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Logos.
         */
        skip?: number;
        distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[];
    };

    /**
     * Logo create
     */
    export type LogoCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * The data needed to create a Logo.
         */
        data: XOR<LogoCreateInput, LogoUncheckedCreateInput>;
    };

    /**
     * Logo createMany
     */
    export type LogoCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Logos.
         */
        data: LogoCreateManyInput | LogoCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Logo createManyAndReturn
     */
    export type LogoCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * The data used to create many Logos.
         */
        data: LogoCreateManyInput | LogoCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Logo update
     */
    export type LogoUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * The data needed to update a Logo.
         */
        data: XOR<LogoUpdateInput, LogoUncheckedUpdateInput>;
        /**
         * Choose, which Logo to update.
         */
        where: LogoWhereUniqueInput;
    };

    /**
     * Logo updateMany
     */
    export type LogoUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Logos.
         */
        data: XOR<LogoUpdateManyMutationInput, LogoUncheckedUpdateManyInput>;
        /**
         * Filter which Logos to update
         */
        where?: LogoWhereInput;
        /**
         * Limit how many Logos to update.
         */
        limit?: number;
    };

    /**
     * Logo updateManyAndReturn
     */
    export type LogoUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * The data used to update Logos.
         */
        data: XOR<LogoUpdateManyMutationInput, LogoUncheckedUpdateManyInput>;
        /**
         * Filter which Logos to update
         */
        where?: LogoWhereInput;
        /**
         * Limit how many Logos to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Logo upsert
     */
    export type LogoUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * The filter to search for the Logo to update in case it exists.
         */
        where: LogoWhereUniqueInput;
        /**
         * In case the Logo found by the `where` argument doesn't exist, create a new Logo with this data.
         */
        create: XOR<LogoCreateInput, LogoUncheckedCreateInput>;
        /**
         * In case the Logo was found with the provided `where` argument, update it with this data.
         */
        update: XOR<LogoUpdateInput, LogoUncheckedUpdateInput>;
    };

    /**
     * Logo delete
     */
    export type LogoDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
        /**
         * Filter which Logo to delete.
         */
        where: LogoWhereUniqueInput;
    };

    /**
     * Logo deleteMany
     */
    export type LogoDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Logos to delete
         */
        where?: LogoWhereInput;
        /**
         * Limit how many Logos to delete.
         */
        limit?: number;
    };

    /**
     * Logo without action
     */
    export type LogoDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Logo
         */
        select?: LogoSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Logo
         */
        omit?: LogoOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LogoInclude<ExtArgs> | null;
    };

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: "ReadUncommitted";
        ReadCommitted: "ReadCommitted";
        RepeatableRead: "RepeatableRead";
        Serializable: "Serializable";
    };

    export type TransactionIsolationLevel =
        (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

    export const UserScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        fullName: "fullName";
        email: "email";
        phoneNumber: "phoneNumber";
        password: "password";
        role: "role";
        status: "status";
    };

    export type UserScalarFieldEnum =
        (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

    export const AvatarScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        key: "key";
        fileSize: "fileSize";
        mimeType: "mimeType";
        url: "url";
        expiredAt: "expiredAt";
        width: "width";
        height: "height";
        userId: "userId";
    };

    export type AvatarScalarFieldEnum =
        (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum];

    export const NotificationPreferenceScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        offerUpdates: "offerUpdates";
        companyNews: "companyNews";
        comments: "comments";
        purchases: "purchases";
        userId: "userId";
    };

    export type NotificationPreferenceScalarFieldEnum =
        (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum];

    export const TeamScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        name: "name";
    };

    export type TeamScalarFieldEnum =
        (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

    export const LogoScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        key: "key";
        fileSize: "fileSize";
        mimeType: "mimeType";
        url: "url";
        expiredAt: "expiredAt";
        width: "width";
        height: "height";
        teamId: "teamId";
    };

    export type LogoScalarFieldEnum =
        (typeof LogoScalarFieldEnum)[keyof typeof LogoScalarFieldEnum];

    export const SortOrder: {
        asc: "asc";
        desc: "desc";
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

    export const QueryMode: {
        default: "default";
        insensitive: "insensitive";
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "String"
    >;

    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "String[]"
    >;

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "DateTime"
    >;

    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "DateTime[]"
    >;

    /**
     * Reference to a field of type 'UserRoles'
     */
    export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "UserRoles"
    >;

    /**
     * Reference to a field of type 'UserRoles[]'
     */
    export type ListEnumUserRolesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "UserRoles[]">;

    /**
     * Reference to a field of type 'UserStatuses'
     */
    export type EnumUserStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "UserStatuses"
    >;

    /**
     * Reference to a field of type 'UserStatuses[]'
     */
    export type ListEnumUserStatusesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "UserStatuses[]">;

    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Float"
    >;

    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Float[]"
    >;

    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Boolean"
    >;

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Int"
    >;

    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Int[]"
    >;

    /**
     * Deep Input Types
     */

    export type UserWhereInput = {
        AND?: UserWhereInput | UserWhereInput[];
        OR?: UserWhereInput[];
        NOT?: UserWhereInput | UserWhereInput[];
        id?: StringFilter<"User"> | string;
        createdAt?: DateTimeFilter<"User"> | Date | string;
        updatedAt?: DateTimeFilter<"User"> | Date | string;
        fullName?: StringFilter<"User"> | string;
        email?: StringFilter<"User"> | string;
        phoneNumber?: StringFilter<"User"> | string;
        password?: StringFilter<"User"> | string;
        role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles;
        status?: EnumUserStatusesFilter<"User"> | $Enums.UserStatuses;
        avatar?: XOR<
            AvatarNullableScalarRelationFilter,
            AvatarWhereInput
        > | null;
        notificationPreferences?: XOR<
            NotificationPreferenceNullableScalarRelationFilter,
            NotificationPreferenceWhereInput
        > | null;
    };

    export type UserOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        fullName?: SortOrder;
        email?: SortOrder;
        phoneNumber?: SortOrder;
        password?: SortOrder;
        role?: SortOrder;
        status?: SortOrder;
        avatar?: AvatarOrderByWithRelationInput;
        notificationPreferences?: NotificationPreferenceOrderByWithRelationInput;
    };

    export type UserWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            email?: string;
            phoneNumber?: string;
            AND?: UserWhereInput | UserWhereInput[];
            OR?: UserWhereInput[];
            NOT?: UserWhereInput | UserWhereInput[];
            createdAt?: DateTimeFilter<"User"> | Date | string;
            updatedAt?: DateTimeFilter<"User"> | Date | string;
            fullName?: StringFilter<"User"> | string;
            password?: StringFilter<"User"> | string;
            role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles;
            status?: EnumUserStatusesFilter<"User"> | $Enums.UserStatuses;
            avatar?: XOR<
                AvatarNullableScalarRelationFilter,
                AvatarWhereInput
            > | null;
            notificationPreferences?: XOR<
                NotificationPreferenceNullableScalarRelationFilter,
                NotificationPreferenceWhereInput
            > | null;
        },
        "id" | "email" | "phoneNumber"
    >;

    export type UserOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        fullName?: SortOrder;
        email?: SortOrder;
        phoneNumber?: SortOrder;
        password?: SortOrder;
        role?: SortOrder;
        status?: SortOrder;
        _count?: UserCountOrderByAggregateInput;
        _max?: UserMaxOrderByAggregateInput;
        _min?: UserMinOrderByAggregateInput;
    };

    export type UserScalarWhereWithAggregatesInput = {
        AND?:
            | UserScalarWhereWithAggregatesInput
            | UserScalarWhereWithAggregatesInput[];
        OR?: UserScalarWhereWithAggregatesInput[];
        NOT?:
            | UserScalarWhereWithAggregatesInput
            | UserScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"User"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
        fullName?: StringWithAggregatesFilter<"User"> | string;
        email?: StringWithAggregatesFilter<"User"> | string;
        phoneNumber?: StringWithAggregatesFilter<"User"> | string;
        password?: StringWithAggregatesFilter<"User"> | string;
        role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles;
        status?:
            | EnumUserStatusesWithAggregatesFilter<"User">
            | $Enums.UserStatuses;
    };

    export type AvatarWhereInput = {
        AND?: AvatarWhereInput | AvatarWhereInput[];
        OR?: AvatarWhereInput[];
        NOT?: AvatarWhereInput | AvatarWhereInput[];
        id?: StringFilter<"Avatar"> | string;
        createdAt?: DateTimeFilter<"Avatar"> | Date | string;
        updatedAt?: DateTimeFilter<"Avatar"> | Date | string;
        key?: StringFilter<"Avatar"> | string;
        fileSize?: FloatFilter<"Avatar"> | number;
        mimeType?: StringFilter<"Avatar"> | string;
        url?: StringFilter<"Avatar"> | string;
        expiredAt?: DateTimeFilter<"Avatar"> | Date | string;
        width?: FloatFilter<"Avatar"> | number;
        height?: FloatFilter<"Avatar"> | number;
        userId?: StringFilter<"Avatar"> | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type AvatarOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        userId?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type AvatarWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            key?: string;
            userId?: string;
            AND?: AvatarWhereInput | AvatarWhereInput[];
            OR?: AvatarWhereInput[];
            NOT?: AvatarWhereInput | AvatarWhereInput[];
            createdAt?: DateTimeFilter<"Avatar"> | Date | string;
            updatedAt?: DateTimeFilter<"Avatar"> | Date | string;
            fileSize?: FloatFilter<"Avatar"> | number;
            mimeType?: StringFilter<"Avatar"> | string;
            url?: StringFilter<"Avatar"> | string;
            expiredAt?: DateTimeFilter<"Avatar"> | Date | string;
            width?: FloatFilter<"Avatar"> | number;
            height?: FloatFilter<"Avatar"> | number;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        "id" | "key" | "userId"
    >;

    export type AvatarOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        userId?: SortOrder;
        _count?: AvatarCountOrderByAggregateInput;
        _avg?: AvatarAvgOrderByAggregateInput;
        _max?: AvatarMaxOrderByAggregateInput;
        _min?: AvatarMinOrderByAggregateInput;
        _sum?: AvatarSumOrderByAggregateInput;
    };

    export type AvatarScalarWhereWithAggregatesInput = {
        AND?:
            | AvatarScalarWhereWithAggregatesInput
            | AvatarScalarWhereWithAggregatesInput[];
        OR?: AvatarScalarWhereWithAggregatesInput[];
        NOT?:
            | AvatarScalarWhereWithAggregatesInput
            | AvatarScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Avatar"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Avatar"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Avatar"> | Date | string;
        key?: StringWithAggregatesFilter<"Avatar"> | string;
        fileSize?: FloatWithAggregatesFilter<"Avatar"> | number;
        mimeType?: StringWithAggregatesFilter<"Avatar"> | string;
        url?: StringWithAggregatesFilter<"Avatar"> | string;
        expiredAt?: DateTimeWithAggregatesFilter<"Avatar"> | Date | string;
        width?: FloatWithAggregatesFilter<"Avatar"> | number;
        height?: FloatWithAggregatesFilter<"Avatar"> | number;
        userId?: StringWithAggregatesFilter<"Avatar"> | string;
    };

    export type NotificationPreferenceWhereInput = {
        AND?:
            | NotificationPreferenceWhereInput
            | NotificationPreferenceWhereInput[];
        OR?: NotificationPreferenceWhereInput[];
        NOT?:
            | NotificationPreferenceWhereInput
            | NotificationPreferenceWhereInput[];
        id?: StringFilter<"NotificationPreference"> | string;
        createdAt?: DateTimeFilter<"NotificationPreference"> | Date | string;
        updatedAt?: DateTimeFilter<"NotificationPreference"> | Date | string;
        offerUpdates?: BoolFilter<"NotificationPreference"> | boolean;
        companyNews?: BoolFilter<"NotificationPreference"> | boolean;
        comments?: BoolFilter<"NotificationPreference"> | boolean;
        purchases?: BoolFilter<"NotificationPreference"> | boolean;
        userId?: StringFilter<"NotificationPreference"> | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type NotificationPreferenceOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        offerUpdates?: SortOrder;
        companyNews?: SortOrder;
        comments?: SortOrder;
        purchases?: SortOrder;
        userId?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type NotificationPreferenceWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            userId?: string;
            AND?:
                | NotificationPreferenceWhereInput
                | NotificationPreferenceWhereInput[];
            OR?: NotificationPreferenceWhereInput[];
            NOT?:
                | NotificationPreferenceWhereInput
                | NotificationPreferenceWhereInput[];
            createdAt?:
                | DateTimeFilter<"NotificationPreference">
                | Date
                | string;
            updatedAt?:
                | DateTimeFilter<"NotificationPreference">
                | Date
                | string;
            offerUpdates?: BoolFilter<"NotificationPreference"> | boolean;
            companyNews?: BoolFilter<"NotificationPreference"> | boolean;
            comments?: BoolFilter<"NotificationPreference"> | boolean;
            purchases?: BoolFilter<"NotificationPreference"> | boolean;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        "id" | "userId"
    >;

    export type NotificationPreferenceOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        offerUpdates?: SortOrder;
        companyNews?: SortOrder;
        comments?: SortOrder;
        purchases?: SortOrder;
        userId?: SortOrder;
        _count?: NotificationPreferenceCountOrderByAggregateInput;
        _max?: NotificationPreferenceMaxOrderByAggregateInput;
        _min?: NotificationPreferenceMinOrderByAggregateInput;
    };

    export type NotificationPreferenceScalarWhereWithAggregatesInput = {
        AND?:
            | NotificationPreferenceScalarWhereWithAggregatesInput
            | NotificationPreferenceScalarWhereWithAggregatesInput[];
        OR?: NotificationPreferenceScalarWhereWithAggregatesInput[];
        NOT?:
            | NotificationPreferenceScalarWhereWithAggregatesInput
            | NotificationPreferenceScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"NotificationPreference"> | string;
        createdAt?:
            | DateTimeWithAggregatesFilter<"NotificationPreference">
            | Date
            | string;
        updatedAt?:
            | DateTimeWithAggregatesFilter<"NotificationPreference">
            | Date
            | string;
        offerUpdates?:
            | BoolWithAggregatesFilter<"NotificationPreference">
            | boolean;
        companyNews?:
            | BoolWithAggregatesFilter<"NotificationPreference">
            | boolean;
        comments?: BoolWithAggregatesFilter<"NotificationPreference"> | boolean;
        purchases?:
            | BoolWithAggregatesFilter<"NotificationPreference">
            | boolean;
        userId?: StringWithAggregatesFilter<"NotificationPreference"> | string;
    };

    export type TeamWhereInput = {
        AND?: TeamWhereInput | TeamWhereInput[];
        OR?: TeamWhereInput[];
        NOT?: TeamWhereInput | TeamWhereInput[];
        id?: StringFilter<"Team"> | string;
        createdAt?: DateTimeFilter<"Team"> | Date | string;
        updatedAt?: DateTimeFilter<"Team"> | Date | string;
        name?: StringFilter<"Team"> | string;
        logo?: XOR<LogoNullableScalarRelationFilter, LogoWhereInput> | null;
    };

    export type TeamOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        logo?: LogoOrderByWithRelationInput;
    };

    export type TeamWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            name?: string;
            AND?: TeamWhereInput | TeamWhereInput[];
            OR?: TeamWhereInput[];
            NOT?: TeamWhereInput | TeamWhereInput[];
            createdAt?: DateTimeFilter<"Team"> | Date | string;
            updatedAt?: DateTimeFilter<"Team"> | Date | string;
            logo?: XOR<LogoNullableScalarRelationFilter, LogoWhereInput> | null;
        },
        "id" | "name"
    >;

    export type TeamOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        _count?: TeamCountOrderByAggregateInput;
        _max?: TeamMaxOrderByAggregateInput;
        _min?: TeamMinOrderByAggregateInput;
    };

    export type TeamScalarWhereWithAggregatesInput = {
        AND?:
            | TeamScalarWhereWithAggregatesInput
            | TeamScalarWhereWithAggregatesInput[];
        OR?: TeamScalarWhereWithAggregatesInput[];
        NOT?:
            | TeamScalarWhereWithAggregatesInput
            | TeamScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Team"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string;
        name?: StringWithAggregatesFilter<"Team"> | string;
    };

    export type LogoWhereInput = {
        AND?: LogoWhereInput | LogoWhereInput[];
        OR?: LogoWhereInput[];
        NOT?: LogoWhereInput | LogoWhereInput[];
        id?: StringFilter<"Logo"> | string;
        createdAt?: DateTimeFilter<"Logo"> | Date | string;
        updatedAt?: DateTimeFilter<"Logo"> | Date | string;
        key?: StringFilter<"Logo"> | string;
        fileSize?: FloatFilter<"Logo"> | number;
        mimeType?: StringFilter<"Logo"> | string;
        url?: StringFilter<"Logo"> | string;
        expiredAt?: DateTimeFilter<"Logo"> | Date | string;
        width?: FloatFilter<"Logo"> | number;
        height?: FloatFilter<"Logo"> | number;
        teamId?: StringFilter<"Logo"> | string;
        team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    };

    export type LogoOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        teamId?: SortOrder;
        team?: TeamOrderByWithRelationInput;
    };

    export type LogoWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            key?: string;
            teamId?: string;
            AND?: LogoWhereInput | LogoWhereInput[];
            OR?: LogoWhereInput[];
            NOT?: LogoWhereInput | LogoWhereInput[];
            createdAt?: DateTimeFilter<"Logo"> | Date | string;
            updatedAt?: DateTimeFilter<"Logo"> | Date | string;
            fileSize?: FloatFilter<"Logo"> | number;
            mimeType?: StringFilter<"Logo"> | string;
            url?: StringFilter<"Logo"> | string;
            expiredAt?: DateTimeFilter<"Logo"> | Date | string;
            width?: FloatFilter<"Logo"> | number;
            height?: FloatFilter<"Logo"> | number;
            team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
        },
        "id" | "key" | "teamId"
    >;

    export type LogoOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        teamId?: SortOrder;
        _count?: LogoCountOrderByAggregateInput;
        _avg?: LogoAvgOrderByAggregateInput;
        _max?: LogoMaxOrderByAggregateInput;
        _min?: LogoMinOrderByAggregateInput;
        _sum?: LogoSumOrderByAggregateInput;
    };

    export type LogoScalarWhereWithAggregatesInput = {
        AND?:
            | LogoScalarWhereWithAggregatesInput
            | LogoScalarWhereWithAggregatesInput[];
        OR?: LogoScalarWhereWithAggregatesInput[];
        NOT?:
            | LogoScalarWhereWithAggregatesInput
            | LogoScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Logo"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Logo"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Logo"> | Date | string;
        key?: StringWithAggregatesFilter<"Logo"> | string;
        fileSize?: FloatWithAggregatesFilter<"Logo"> | number;
        mimeType?: StringWithAggregatesFilter<"Logo"> | string;
        url?: StringWithAggregatesFilter<"Logo"> | string;
        expiredAt?: DateTimeWithAggregatesFilter<"Logo"> | Date | string;
        width?: FloatWithAggregatesFilter<"Logo"> | number;
        height?: FloatWithAggregatesFilter<"Logo"> | number;
        teamId?: StringWithAggregatesFilter<"Logo"> | string;
    };

    export type UserCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        avatar?: AvatarCreateNestedOneWithoutUserInput;
        notificationPreferences?: NotificationPreferenceCreateNestedOneWithoutUserInput;
    };

    export type UserUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput;
        notificationPreferences?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    };

    export type UserUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
        avatar?: AvatarUpdateOneWithoutUserNestedInput;
        notificationPreferences?: NotificationPreferenceUpdateOneWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
        avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput;
        notificationPreferences?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    };

    export type UserCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
    };

    export type UserUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
    };

    export type UserUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
    };

    export type AvatarCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
        user: UserCreateNestedOneWithoutAvatarInput;
    };

    export type AvatarUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
        userId: string;
    };

    export type AvatarUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
        user?: UserUpdateOneRequiredWithoutAvatarNestedInput;
    };

    export type AvatarUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type AvatarCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
        userId: string;
    };

    export type AvatarUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
    };

    export type AvatarUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type NotificationPreferenceCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        offerUpdates: boolean;
        companyNews: boolean;
        comments: boolean;
        purchases: boolean;
        user: UserCreateNestedOneWithoutNotificationPreferencesInput;
    };

    export type NotificationPreferenceUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        offerUpdates: boolean;
        companyNews: boolean;
        comments: boolean;
        purchases: boolean;
        userId: string;
    };

    export type NotificationPreferenceUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        offerUpdates?: BoolFieldUpdateOperationsInput | boolean;
        companyNews?: BoolFieldUpdateOperationsInput | boolean;
        comments?: BoolFieldUpdateOperationsInput | boolean;
        purchases?: BoolFieldUpdateOperationsInput | boolean;
        user?: UserUpdateOneRequiredWithoutNotificationPreferencesNestedInput;
    };

    export type NotificationPreferenceUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        offerUpdates?: BoolFieldUpdateOperationsInput | boolean;
        companyNews?: BoolFieldUpdateOperationsInput | boolean;
        comments?: BoolFieldUpdateOperationsInput | boolean;
        purchases?: BoolFieldUpdateOperationsInput | boolean;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type NotificationPreferenceCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        offerUpdates: boolean;
        companyNews: boolean;
        comments: boolean;
        purchases: boolean;
        userId: string;
    };

    export type NotificationPreferenceUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        offerUpdates?: BoolFieldUpdateOperationsInput | boolean;
        companyNews?: BoolFieldUpdateOperationsInput | boolean;
        comments?: BoolFieldUpdateOperationsInput | boolean;
        purchases?: BoolFieldUpdateOperationsInput | boolean;
    };

    export type NotificationPreferenceUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        offerUpdates?: BoolFieldUpdateOperationsInput | boolean;
        companyNews?: BoolFieldUpdateOperationsInput | boolean;
        comments?: BoolFieldUpdateOperationsInput | boolean;
        purchases?: BoolFieldUpdateOperationsInput | boolean;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type TeamCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        logo?: LogoCreateNestedOneWithoutTeamInput;
    };

    export type TeamUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        logo?: LogoUncheckedCreateNestedOneWithoutTeamInput;
    };

    export type TeamUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        logo?: LogoUpdateOneWithoutTeamNestedInput;
    };

    export type TeamUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        logo?: LogoUncheckedUpdateOneWithoutTeamNestedInput;
    };

    export type TeamCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
    };

    export type TeamUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
    };

    export type TeamUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
    };

    export type LogoCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
        team: TeamCreateNestedOneWithoutLogoInput;
    };

    export type LogoUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
        teamId: string;
    };

    export type LogoUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
        team?: TeamUpdateOneRequiredWithoutLogoNestedInput;
    };

    export type LogoUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
        teamId?: StringFieldUpdateOperationsInput | string;
    };

    export type LogoCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
        teamId: string;
    };

    export type LogoUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
    };

    export type LogoUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
        teamId?: StringFieldUpdateOperationsInput | string;
    };

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type EnumUserRolesFilter<$PrismaModel = never> = {
        equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>;
        in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserRoles[]
            | ListEnumUserRolesFieldRefInput<$PrismaModel>;
        not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles;
    };

    export type EnumUserStatusesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.UserStatuses
            | EnumUserStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        not?: NestedEnumUserStatusesFilter<$PrismaModel> | $Enums.UserStatuses;
    };

    export type AvatarNullableScalarRelationFilter = {
        is?: AvatarWhereInput | null;
        isNot?: AvatarWhereInput | null;
    };

    export type NotificationPreferenceNullableScalarRelationFilter = {
        is?: NotificationPreferenceWhereInput | null;
        isNot?: NotificationPreferenceWhereInput | null;
    };

    export type UserCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        fullName?: SortOrder;
        email?: SortOrder;
        phoneNumber?: SortOrder;
        password?: SortOrder;
        role?: SortOrder;
        status?: SortOrder;
    };

    export type UserMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        fullName?: SortOrder;
        email?: SortOrder;
        phoneNumber?: SortOrder;
        password?: SortOrder;
        role?: SortOrder;
        status?: SortOrder;
    };

    export type UserMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        fullName?: SortOrder;
        email?: SortOrder;
        phoneNumber?: SortOrder;
        password?: SortOrder;
        role?: SortOrder;
        status?: SortOrder;
    };

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>;
        in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserRoles[]
            | ListEnumUserRolesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumUserRolesWithAggregatesFilter<$PrismaModel>
            | $Enums.UserRoles;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumUserRolesFilter<$PrismaModel>;
        _max?: NestedEnumUserRolesFilter<$PrismaModel>;
    };

    export type EnumUserStatusesWithAggregatesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.UserStatuses
            | EnumUserStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumUserStatusesWithAggregatesFilter<$PrismaModel>
            | $Enums.UserStatuses;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumUserStatusesFilter<$PrismaModel>;
        _max?: NestedEnumUserStatusesFilter<$PrismaModel>;
    };

    export type FloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type UserScalarRelationFilter = {
        is?: UserWhereInput;
        isNot?: UserWhereInput;
    };

    export type AvatarCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        userId?: SortOrder;
    };

    export type AvatarAvgOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type AvatarMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        userId?: SortOrder;
    };

    export type AvatarMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        userId?: SortOrder;
    };

    export type AvatarSumOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type FloatWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedFloatFilter<$PrismaModel>;
        _min?: NestedFloatFilter<$PrismaModel>;
        _max?: NestedFloatFilter<$PrismaModel>;
    };

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type NotificationPreferenceCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        offerUpdates?: SortOrder;
        companyNews?: SortOrder;
        comments?: SortOrder;
        purchases?: SortOrder;
        userId?: SortOrder;
    };

    export type NotificationPreferenceMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        offerUpdates?: SortOrder;
        companyNews?: SortOrder;
        comments?: SortOrder;
        purchases?: SortOrder;
        userId?: SortOrder;
    };

    export type NotificationPreferenceMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        offerUpdates?: SortOrder;
        companyNews?: SortOrder;
        comments?: SortOrder;
        purchases?: SortOrder;
        userId?: SortOrder;
    };

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type LogoNullableScalarRelationFilter = {
        is?: LogoWhereInput | null;
        isNot?: LogoWhereInput | null;
    };

    export type TeamCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
    };

    export type TeamMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
    };

    export type TeamMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
    };

    export type TeamScalarRelationFilter = {
        is?: TeamWhereInput;
        isNot?: TeamWhereInput;
    };

    export type LogoCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        teamId?: SortOrder;
    };

    export type LogoAvgOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type LogoMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        teamId?: SortOrder;
    };

    export type LogoMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        teamId?: SortOrder;
    };

    export type LogoSumOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type AvatarCreateNestedOneWithoutUserInput = {
        create?: XOR<
            AvatarCreateWithoutUserInput,
            AvatarUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: AvatarCreateOrConnectWithoutUserInput;
        connect?: AvatarWhereUniqueInput;
    };

    export type NotificationPreferenceCreateNestedOneWithoutUserInput = {
        create?: XOR<
            NotificationPreferenceCreateWithoutUserInput,
            NotificationPreferenceUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput;
        connect?: NotificationPreferenceWhereUniqueInput;
    };

    export type AvatarUncheckedCreateNestedOneWithoutUserInput = {
        create?: XOR<
            AvatarCreateWithoutUserInput,
            AvatarUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: AvatarCreateOrConnectWithoutUserInput;
        connect?: AvatarWhereUniqueInput;
    };

    export type NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput =
        {
            create?: XOR<
                NotificationPreferenceCreateWithoutUserInput,
                NotificationPreferenceUncheckedCreateWithoutUserInput
            >;
            connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput;
            connect?: NotificationPreferenceWhereUniqueInput;
        };

    export type StringFieldUpdateOperationsInput = {
        set?: string;
    };

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string;
    };

    export type EnumUserRolesFieldUpdateOperationsInput = {
        set?: $Enums.UserRoles;
    };

    export type EnumUserStatusesFieldUpdateOperationsInput = {
        set?: $Enums.UserStatuses;
    };

    export type AvatarUpdateOneWithoutUserNestedInput = {
        create?: XOR<
            AvatarCreateWithoutUserInput,
            AvatarUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: AvatarCreateOrConnectWithoutUserInput;
        upsert?: AvatarUpsertWithoutUserInput;
        disconnect?: AvatarWhereInput | boolean;
        delete?: AvatarWhereInput | boolean;
        connect?: AvatarWhereUniqueInput;
        update?: XOR<
            XOR<
                AvatarUpdateToOneWithWhereWithoutUserInput,
                AvatarUpdateWithoutUserInput
            >,
            AvatarUncheckedUpdateWithoutUserInput
        >;
    };

    export type NotificationPreferenceUpdateOneWithoutUserNestedInput = {
        create?: XOR<
            NotificationPreferenceCreateWithoutUserInput,
            NotificationPreferenceUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput;
        upsert?: NotificationPreferenceUpsertWithoutUserInput;
        disconnect?: NotificationPreferenceWhereInput | boolean;
        delete?: NotificationPreferenceWhereInput | boolean;
        connect?: NotificationPreferenceWhereUniqueInput;
        update?: XOR<
            XOR<
                NotificationPreferenceUpdateToOneWithWhereWithoutUserInput,
                NotificationPreferenceUpdateWithoutUserInput
            >,
            NotificationPreferenceUncheckedUpdateWithoutUserInput
        >;
    };

    export type AvatarUncheckedUpdateOneWithoutUserNestedInput = {
        create?: XOR<
            AvatarCreateWithoutUserInput,
            AvatarUncheckedCreateWithoutUserInput
        >;
        connectOrCreate?: AvatarCreateOrConnectWithoutUserInput;
        upsert?: AvatarUpsertWithoutUserInput;
        disconnect?: AvatarWhereInput | boolean;
        delete?: AvatarWhereInput | boolean;
        connect?: AvatarWhereUniqueInput;
        update?: XOR<
            XOR<
                AvatarUpdateToOneWithWhereWithoutUserInput,
                AvatarUpdateWithoutUserInput
            >,
            AvatarUncheckedUpdateWithoutUserInput
        >;
    };

    export type NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput =
        {
            create?: XOR<
                NotificationPreferenceCreateWithoutUserInput,
                NotificationPreferenceUncheckedCreateWithoutUserInput
            >;
            connectOrCreate?: NotificationPreferenceCreateOrConnectWithoutUserInput;
            upsert?: NotificationPreferenceUpsertWithoutUserInput;
            disconnect?: NotificationPreferenceWhereInput | boolean;
            delete?: NotificationPreferenceWhereInput | boolean;
            connect?: NotificationPreferenceWhereUniqueInput;
            update?: XOR<
                XOR<
                    NotificationPreferenceUpdateToOneWithWhereWithoutUserInput,
                    NotificationPreferenceUpdateWithoutUserInput
                >,
                NotificationPreferenceUncheckedUpdateWithoutUserInput
            >;
        };

    export type UserCreateNestedOneWithoutAvatarInput = {
        create?: XOR<
            UserCreateWithoutAvatarInput,
            UserUncheckedCreateWithoutAvatarInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutAvatarInput;
        connect?: UserWhereUniqueInput;
    };

    export type FloatFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type UserUpdateOneRequiredWithoutAvatarNestedInput = {
        create?: XOR<
            UserCreateWithoutAvatarInput,
            UserUncheckedCreateWithoutAvatarInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutAvatarInput;
        upsert?: UserUpsertWithoutAvatarInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutAvatarInput,
                UserUpdateWithoutAvatarInput
            >,
            UserUncheckedUpdateWithoutAvatarInput
        >;
    };

    export type UserCreateNestedOneWithoutNotificationPreferencesInput = {
        create?: XOR<
            UserCreateWithoutNotificationPreferencesInput,
            UserUncheckedCreateWithoutNotificationPreferencesInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutNotificationPreferencesInput;
        connect?: UserWhereUniqueInput;
    };

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean;
    };

    export type UserUpdateOneRequiredWithoutNotificationPreferencesNestedInput =
        {
            create?: XOR<
                UserCreateWithoutNotificationPreferencesInput,
                UserUncheckedCreateWithoutNotificationPreferencesInput
            >;
            connectOrCreate?: UserCreateOrConnectWithoutNotificationPreferencesInput;
            upsert?: UserUpsertWithoutNotificationPreferencesInput;
            connect?: UserWhereUniqueInput;
            update?: XOR<
                XOR<
                    UserUpdateToOneWithWhereWithoutNotificationPreferencesInput,
                    UserUpdateWithoutNotificationPreferencesInput
                >,
                UserUncheckedUpdateWithoutNotificationPreferencesInput
            >;
        };

    export type LogoCreateNestedOneWithoutTeamInput = {
        create?: XOR<
            LogoCreateWithoutTeamInput,
            LogoUncheckedCreateWithoutTeamInput
        >;
        connectOrCreate?: LogoCreateOrConnectWithoutTeamInput;
        connect?: LogoWhereUniqueInput;
    };

    export type LogoUncheckedCreateNestedOneWithoutTeamInput = {
        create?: XOR<
            LogoCreateWithoutTeamInput,
            LogoUncheckedCreateWithoutTeamInput
        >;
        connectOrCreate?: LogoCreateOrConnectWithoutTeamInput;
        connect?: LogoWhereUniqueInput;
    };

    export type LogoUpdateOneWithoutTeamNestedInput = {
        create?: XOR<
            LogoCreateWithoutTeamInput,
            LogoUncheckedCreateWithoutTeamInput
        >;
        connectOrCreate?: LogoCreateOrConnectWithoutTeamInput;
        upsert?: LogoUpsertWithoutTeamInput;
        disconnect?: LogoWhereInput | boolean;
        delete?: LogoWhereInput | boolean;
        connect?: LogoWhereUniqueInput;
        update?: XOR<
            XOR<
                LogoUpdateToOneWithWhereWithoutTeamInput,
                LogoUpdateWithoutTeamInput
            >,
            LogoUncheckedUpdateWithoutTeamInput
        >;
    };

    export type LogoUncheckedUpdateOneWithoutTeamNestedInput = {
        create?: XOR<
            LogoCreateWithoutTeamInput,
            LogoUncheckedCreateWithoutTeamInput
        >;
        connectOrCreate?: LogoCreateOrConnectWithoutTeamInput;
        upsert?: LogoUpsertWithoutTeamInput;
        disconnect?: LogoWhereInput | boolean;
        delete?: LogoWhereInput | boolean;
        connect?: LogoWhereUniqueInput;
        update?: XOR<
            XOR<
                LogoUpdateToOneWithWhereWithoutTeamInput,
                LogoUpdateWithoutTeamInput
            >,
            LogoUncheckedUpdateWithoutTeamInput
        >;
    };

    export type TeamCreateNestedOneWithoutLogoInput = {
        create?: XOR<
            TeamCreateWithoutLogoInput,
            TeamUncheckedCreateWithoutLogoInput
        >;
        connectOrCreate?: TeamCreateOrConnectWithoutLogoInput;
        connect?: TeamWhereUniqueInput;
    };

    export type TeamUpdateOneRequiredWithoutLogoNestedInput = {
        create?: XOR<
            TeamCreateWithoutLogoInput,
            TeamUncheckedCreateWithoutLogoInput
        >;
        connectOrCreate?: TeamCreateOrConnectWithoutLogoInput;
        upsert?: TeamUpsertWithoutLogoInput;
        connect?: TeamWhereUniqueInput;
        update?: XOR<
            XOR<
                TeamUpdateToOneWithWhereWithoutLogoInput,
                TeamUpdateWithoutLogoInput
            >,
            TeamUncheckedUpdateWithoutLogoInput
        >;
    };

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
        equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>;
        in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserRoles[]
            | ListEnumUserRolesFieldRefInput<$PrismaModel>;
        not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles;
    };

    export type NestedEnumUserStatusesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.UserStatuses
            | EnumUserStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        not?: NestedEnumUserStatusesFilter<$PrismaModel> | $Enums.UserStatuses;
    };

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?:
                | $Enums.UserRoles
                | EnumUserRolesFieldRefInput<$PrismaModel>;
            in?:
                | $Enums.UserRoles[]
                | ListEnumUserRolesFieldRefInput<$PrismaModel>;
            notIn?:
                | $Enums.UserRoles[]
                | ListEnumUserRolesFieldRefInput<$PrismaModel>;
            not?:
                | NestedEnumUserRolesWithAggregatesFilter<$PrismaModel>
                | $Enums.UserRoles;
            _count?: NestedIntFilter<$PrismaModel>;
            _min?: NestedEnumUserRolesFilter<$PrismaModel>;
            _max?: NestedEnumUserRolesFilter<$PrismaModel>;
        };

    export type NestedEnumUserStatusesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.UserStatuses
            | EnumUserStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.UserStatuses[]
            | ListEnumUserStatusesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumUserStatusesWithAggregatesFilter<$PrismaModel>
            | $Enums.UserStatuses;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumUserStatusesFilter<$PrismaModel>;
        _max?: NestedEnumUserStatusesFilter<$PrismaModel>;
    };

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedFloatFilter<$PrismaModel>;
        _min?: NestedFloatFilter<$PrismaModel>;
        _max?: NestedFloatFilter<$PrismaModel>;
    };

    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type AvatarCreateWithoutUserInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
    };

    export type AvatarUncheckedCreateWithoutUserInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
    };

    export type AvatarCreateOrConnectWithoutUserInput = {
        where: AvatarWhereUniqueInput;
        create: XOR<
            AvatarCreateWithoutUserInput,
            AvatarUncheckedCreateWithoutUserInput
        >;
    };

    export type NotificationPreferenceCreateWithoutUserInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        offerUpdates: boolean;
        companyNews: boolean;
        comments: boolean;
        purchases: boolean;
    };

    export type NotificationPreferenceUncheckedCreateWithoutUserInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        offerUpdates: boolean;
        companyNews: boolean;
        comments: boolean;
        purchases: boolean;
    };

    export type NotificationPreferenceCreateOrConnectWithoutUserInput = {
        where: NotificationPreferenceWhereUniqueInput;
        create: XOR<
            NotificationPreferenceCreateWithoutUserInput,
            NotificationPreferenceUncheckedCreateWithoutUserInput
        >;
    };

    export type AvatarUpsertWithoutUserInput = {
        update: XOR<
            AvatarUpdateWithoutUserInput,
            AvatarUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            AvatarCreateWithoutUserInput,
            AvatarUncheckedCreateWithoutUserInput
        >;
        where?: AvatarWhereInput;
    };

    export type AvatarUpdateToOneWithWhereWithoutUserInput = {
        where?: AvatarWhereInput;
        data: XOR<
            AvatarUpdateWithoutUserInput,
            AvatarUncheckedUpdateWithoutUserInput
        >;
    };

    export type AvatarUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
    };

    export type AvatarUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
    };

    export type NotificationPreferenceUpsertWithoutUserInput = {
        update: XOR<
            NotificationPreferenceUpdateWithoutUserInput,
            NotificationPreferenceUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            NotificationPreferenceCreateWithoutUserInput,
            NotificationPreferenceUncheckedCreateWithoutUserInput
        >;
        where?: NotificationPreferenceWhereInput;
    };

    export type NotificationPreferenceUpdateToOneWithWhereWithoutUserInput = {
        where?: NotificationPreferenceWhereInput;
        data: XOR<
            NotificationPreferenceUpdateWithoutUserInput,
            NotificationPreferenceUncheckedUpdateWithoutUserInput
        >;
    };

    export type NotificationPreferenceUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        offerUpdates?: BoolFieldUpdateOperationsInput | boolean;
        companyNews?: BoolFieldUpdateOperationsInput | boolean;
        comments?: BoolFieldUpdateOperationsInput | boolean;
        purchases?: BoolFieldUpdateOperationsInput | boolean;
    };

    export type NotificationPreferenceUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        offerUpdates?: BoolFieldUpdateOperationsInput | boolean;
        companyNews?: BoolFieldUpdateOperationsInput | boolean;
        comments?: BoolFieldUpdateOperationsInput | boolean;
        purchases?: BoolFieldUpdateOperationsInput | boolean;
    };

    export type UserCreateWithoutAvatarInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        notificationPreferences?: NotificationPreferenceCreateNestedOneWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutAvatarInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        notificationPreferences?: NotificationPreferenceUncheckedCreateNestedOneWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutAvatarInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutAvatarInput,
            UserUncheckedCreateWithoutAvatarInput
        >;
    };

    export type UserUpsertWithoutAvatarInput = {
        update: XOR<
            UserUpdateWithoutAvatarInput,
            UserUncheckedUpdateWithoutAvatarInput
        >;
        create: XOR<
            UserCreateWithoutAvatarInput,
            UserUncheckedCreateWithoutAvatarInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutAvatarInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutAvatarInput,
            UserUncheckedUpdateWithoutAvatarInput
        >;
    };

    export type UserUpdateWithoutAvatarInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
        notificationPreferences?: NotificationPreferenceUpdateOneWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutAvatarInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
        notificationPreferences?: NotificationPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    };

    export type UserCreateWithoutNotificationPreferencesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        avatar?: AvatarCreateNestedOneWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutNotificationPreferencesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        role: $Enums.UserRoles;
        status: $Enums.UserStatuses;
        avatar?: AvatarUncheckedCreateNestedOneWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutNotificationPreferencesInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutNotificationPreferencesInput,
            UserUncheckedCreateWithoutNotificationPreferencesInput
        >;
    };

    export type UserUpsertWithoutNotificationPreferencesInput = {
        update: XOR<
            UserUpdateWithoutNotificationPreferencesInput,
            UserUncheckedUpdateWithoutNotificationPreferencesInput
        >;
        create: XOR<
            UserCreateWithoutNotificationPreferencesInput,
            UserUncheckedCreateWithoutNotificationPreferencesInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutNotificationPreferencesInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutNotificationPreferencesInput,
            UserUncheckedUpdateWithoutNotificationPreferencesInput
        >;
    };

    export type UserUpdateWithoutNotificationPreferencesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
        avatar?: AvatarUpdateOneWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutNotificationPreferencesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        fullName?: StringFieldUpdateOperationsInput | string;
        email?: StringFieldUpdateOperationsInput | string;
        phoneNumber?: StringFieldUpdateOperationsInput | string;
        password?: StringFieldUpdateOperationsInput | string;
        role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles;
        status?:
            | EnumUserStatusesFieldUpdateOperationsInput
            | $Enums.UserStatuses;
        avatar?: AvatarUncheckedUpdateOneWithoutUserNestedInput;
    };

    export type LogoCreateWithoutTeamInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
    };

    export type LogoUncheckedCreateWithoutTeamInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width: number;
        height: number;
    };

    export type LogoCreateOrConnectWithoutTeamInput = {
        where: LogoWhereUniqueInput;
        create: XOR<
            LogoCreateWithoutTeamInput,
            LogoUncheckedCreateWithoutTeamInput
        >;
    };

    export type LogoUpsertWithoutTeamInput = {
        update: XOR<
            LogoUpdateWithoutTeamInput,
            LogoUncheckedUpdateWithoutTeamInput
        >;
        create: XOR<
            LogoCreateWithoutTeamInput,
            LogoUncheckedCreateWithoutTeamInput
        >;
        where?: LogoWhereInput;
    };

    export type LogoUpdateToOneWithWhereWithoutTeamInput = {
        where?: LogoWhereInput;
        data: XOR<
            LogoUpdateWithoutTeamInput,
            LogoUncheckedUpdateWithoutTeamInput
        >;
    };

    export type LogoUpdateWithoutTeamInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
    };

    export type LogoUncheckedUpdateWithoutTeamInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: FloatFieldUpdateOperationsInput | number;
        height?: FloatFieldUpdateOperationsInput | number;
    };

    export type TeamCreateWithoutLogoInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
    };

    export type TeamUncheckedCreateWithoutLogoInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
    };

    export type TeamCreateOrConnectWithoutLogoInput = {
        where: TeamWhereUniqueInput;
        create: XOR<
            TeamCreateWithoutLogoInput,
            TeamUncheckedCreateWithoutLogoInput
        >;
    };

    export type TeamUpsertWithoutLogoInput = {
        update: XOR<
            TeamUpdateWithoutLogoInput,
            TeamUncheckedUpdateWithoutLogoInput
        >;
        create: XOR<
            TeamCreateWithoutLogoInput,
            TeamUncheckedCreateWithoutLogoInput
        >;
        where?: TeamWhereInput;
    };

    export type TeamUpdateToOneWithWhereWithoutLogoInput = {
        where?: TeamWhereInput;
        data: XOR<
            TeamUpdateWithoutLogoInput,
            TeamUncheckedUpdateWithoutLogoInput
        >;
    };

    export type TeamUpdateWithoutLogoInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
    };

    export type TeamUncheckedUpdateWithoutLogoInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
    };

    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number;
    };

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;
}
