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
 * Model Document
 *
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>;
/**
 * Model DocumentTag
 *
 */
export type DocumentTag = $Result.DefaultSelection<Prisma.$DocumentTagPayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model File
 *
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>;
/**
 * Model DocumentExtractedField
 *
 */
export type DocumentExtractedField =
    $Result.DefaultSelection<Prisma.$DocumentExtractedFieldPayload>;
/**
 * Model ActionLog
 *
 */
export type ActionLog = $Result.DefaultSelection<Prisma.$ActionLogPayload>;

/**
 * Enums
 */
export namespace $Enums {
    export const DocumentStatuses: {
        PROCESSING: "PROCESSING";
        ACTIVE: "ACTIVE";
        ARCHIVED: "ARCHIVED";
        FAILED: "FAILED";
        NEEDS_REVIEW: "NEEDS_REVIEW";
    };

    export type DocumentStatuses =
        (typeof DocumentStatuses)[keyof typeof DocumentStatuses];

    export const RiskLevel: {
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
    };

    export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];

    export const ExtractedFieldType: {
        EXPIRY_DATE: "EXPIRY_DATE";
        ISSUE_DATE: "ISSUE_DATE";
        COUNTERPARTY: "COUNTERPARTY";
        AMOUNT: "AMOUNT";
    };

    export type ExtractedFieldType =
        (typeof ExtractedFieldType)[keyof typeof ExtractedFieldType];

    export const ExtractedFieldSource: {
        OCR: "OCR";
        REGEX: "REGEX";
        MANUAL: "MANUAL";
    };

    export type ExtractedFieldSource =
        (typeof ExtractedFieldSource)[keyof typeof ExtractedFieldSource];

    export const ActionLogTypes: {
        CREATE_TEAM: "CREATE_TEAM";
        UPDATE_TEAM: "UPDATE_TEAM";
        ADD_USER: "ADD_USER";
        INVITE_USER: "INVITE_USER";
        DELETE_USER: "DELETE_USER";
        DELETE_HIMSELF: "DELETE_HIMSELF";
        CREATE_DOCUMENT: "CREATE_DOCUMENT";
        UPDATE_DOCUMENT: "UPDATE_DOCUMENT";
        DELETE_DOCUMENT: "DELETE_DOCUMENT";
    };

    export type ActionLogTypes =
        (typeof ActionLogTypes)[keyof typeof ActionLogTypes];
}

export type DocumentStatuses = $Enums.DocumentStatuses;

export const DocumentStatuses: typeof $Enums.DocumentStatuses;

export type RiskLevel = $Enums.RiskLevel;

export const RiskLevel: typeof $Enums.RiskLevel;

export type ExtractedFieldType = $Enums.ExtractedFieldType;

export const ExtractedFieldType: typeof $Enums.ExtractedFieldType;

export type ExtractedFieldSource = $Enums.ExtractedFieldSource;

export const ExtractedFieldSource: typeof $Enums.ExtractedFieldSource;

export type ActionLogTypes = $Enums.ActionLogTypes;

export const ActionLogTypes: typeof $Enums.ActionLogTypes;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
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
     * // Fetch zero or more Documents
     * const documents = await prisma.document.findMany()
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
     * `prisma.document`: Exposes CRUD operations for the **Document** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Documents
     * const documents = await prisma.document.findMany()
     * ```
     */
    get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.documentTag`: Exposes CRUD operations for the **DocumentTag** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more DocumentTags
     * const documentTags = await prisma.documentTag.findMany()
     * ```
     */
    get documentTag(): Prisma.DocumentTagDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tags
     * const tags = await prisma.tag.findMany()
     * ```
     */
    get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.file`: Exposes CRUD operations for the **File** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Files
     * const files = await prisma.file.findMany()
     * ```
     */
    get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.documentExtractedField`: Exposes CRUD operations for the **DocumentExtractedField** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more DocumentExtractedFields
     * const documentExtractedFields = await prisma.documentExtractedField.findMany()
     * ```
     */
    get documentExtractedField(): Prisma.DocumentExtractedFieldDelegate<
        ExtArgs,
        ClientOptions
    >;

    /**
     * `prisma.actionLog`: Exposes CRUD operations for the **ActionLog** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ActionLogs
     * const actionLogs = await prisma.actionLog.findMany()
     * ```
     */
    get actionLog(): Prisma.ActionLogDelegate<ExtArgs, ClientOptions>;
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
        Document: "Document";
        DocumentTag: "DocumentTag";
        Tag: "Tag";
        File: "File";
        DocumentExtractedField: "DocumentExtractedField";
        ActionLog: "ActionLog";
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
                | "document"
                | "documentTag"
                | "tag"
                | "file"
                | "documentExtractedField"
                | "actionLog";
            txIsolationLevel: Prisma.TransactionIsolationLevel;
        };
        model: {
            Document: {
                payload: Prisma.$DocumentPayload<ExtArgs>;
                fields: Prisma.DocumentFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.DocumentFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
                    };
                    findFirst: {
                        args: Prisma.DocumentFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
                    };
                    findMany: {
                        args: Prisma.DocumentFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                    };
                    create: {
                        args: Prisma.DocumentCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
                    };
                    createMany: {
                        args: Prisma.DocumentCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                    };
                    delete: {
                        args: Prisma.DocumentDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
                    };
                    update: {
                        args: Prisma.DocumentUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
                    };
                    deleteMany: {
                        args: Prisma.DocumentDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.DocumentUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[];
                    };
                    upsert: {
                        args: Prisma.DocumentUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
                    };
                    aggregate: {
                        args: Prisma.DocumentAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateDocument>;
                    };
                    groupBy: {
                        args: Prisma.DocumentGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<DocumentGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.DocumentCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<DocumentCountAggregateOutputType>
                            | number;
                    };
                };
            };
            DocumentTag: {
                payload: Prisma.$DocumentTagPayload<ExtArgs>;
                fields: Prisma.DocumentTagFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.DocumentTagFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.DocumentTagFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>;
                    };
                    findFirst: {
                        args: Prisma.DocumentTagFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.DocumentTagFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>;
                    };
                    findMany: {
                        args: Prisma.DocumentTagFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>[];
                    };
                    create: {
                        args: Prisma.DocumentTagCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>;
                    };
                    createMany: {
                        args: Prisma.DocumentTagCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.DocumentTagCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>[];
                    };
                    delete: {
                        args: Prisma.DocumentTagDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>;
                    };
                    update: {
                        args: Prisma.DocumentTagUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>;
                    };
                    deleteMany: {
                        args: Prisma.DocumentTagDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.DocumentTagUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.DocumentTagUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>[];
                    };
                    upsert: {
                        args: Prisma.DocumentTagUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentTagPayload>;
                    };
                    aggregate: {
                        args: Prisma.DocumentTagAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateDocumentTag>;
                    };
                    groupBy: {
                        args: Prisma.DocumentTagGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<DocumentTagGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.DocumentTagCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<DocumentTagCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Tag: {
                payload: Prisma.$TagPayload<ExtArgs>;
                fields: Prisma.TagFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.TagFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>;
                    };
                    findFirst: {
                        args: Prisma.TagFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>;
                    };
                    findMany: {
                        args: Prisma.TagFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
                    };
                    create: {
                        args: Prisma.TagCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>;
                    };
                    createMany: {
                        args: Prisma.TagCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
                    };
                    delete: {
                        args: Prisma.TagDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>;
                    };
                    update: {
                        args: Prisma.TagUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>;
                    };
                    deleteMany: {
                        args: Prisma.TagDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.TagUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
                    };
                    upsert: {
                        args: Prisma.TagUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>;
                    };
                    aggregate: {
                        args: Prisma.TagAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateTag>;
                    };
                    groupBy: {
                        args: Prisma.TagGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<TagGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.TagCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<TagCountAggregateOutputType>
                            | number;
                    };
                };
            };
            File: {
                payload: Prisma.$FilePayload<ExtArgs>;
                fields: Prisma.FileFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.FileFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>;
                    };
                    findFirst: {
                        args: Prisma.FileFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>;
                    };
                    findMany: {
                        args: Prisma.FileFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>[];
                    };
                    create: {
                        args: Prisma.FileCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>;
                    };
                    createMany: {
                        args: Prisma.FileCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>[];
                    };
                    delete: {
                        args: Prisma.FileDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>;
                    };
                    update: {
                        args: Prisma.FileUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>;
                    };
                    deleteMany: {
                        args: Prisma.FileDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.FileUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>[];
                    };
                    upsert: {
                        args: Prisma.FileUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FilePayload>;
                    };
                    aggregate: {
                        args: Prisma.FileAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateFile>;
                    };
                    groupBy: {
                        args: Prisma.FileGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<FileGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.FileCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<FileCountAggregateOutputType>
                            | number;
                    };
                };
            };
            DocumentExtractedField: {
                payload: Prisma.$DocumentExtractedFieldPayload<ExtArgs>;
                fields: Prisma.DocumentExtractedFieldFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.DocumentExtractedFieldFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.DocumentExtractedFieldFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>;
                    };
                    findFirst: {
                        args: Prisma.DocumentExtractedFieldFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.DocumentExtractedFieldFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>;
                    };
                    findMany: {
                        args: Prisma.DocumentExtractedFieldFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>[];
                    };
                    create: {
                        args: Prisma.DocumentExtractedFieldCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>;
                    };
                    createMany: {
                        args: Prisma.DocumentExtractedFieldCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.DocumentExtractedFieldCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>[];
                    };
                    delete: {
                        args: Prisma.DocumentExtractedFieldDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>;
                    };
                    update: {
                        args: Prisma.DocumentExtractedFieldUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>;
                    };
                    deleteMany: {
                        args: Prisma.DocumentExtractedFieldDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.DocumentExtractedFieldUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.DocumentExtractedFieldUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>[];
                    };
                    upsert: {
                        args: Prisma.DocumentExtractedFieldUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentExtractedFieldPayload>;
                    };
                    aggregate: {
                        args: Prisma.DocumentExtractedFieldAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateDocumentExtractedField>;
                    };
                    groupBy: {
                        args: Prisma.DocumentExtractedFieldGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<DocumentExtractedFieldGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.DocumentExtractedFieldCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<DocumentExtractedFieldCountAggregateOutputType>
                            | number;
                    };
                };
            };
            ActionLog: {
                payload: Prisma.$ActionLogPayload<ExtArgs>;
                fields: Prisma.ActionLogFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ActionLogFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ActionLogFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>;
                    };
                    findFirst: {
                        args: Prisma.ActionLogFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ActionLogFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>;
                    };
                    findMany: {
                        args: Prisma.ActionLogFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>[];
                    };
                    create: {
                        args: Prisma.ActionLogCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>;
                    };
                    createMany: {
                        args: Prisma.ActionLogCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ActionLogCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>[];
                    };
                    delete: {
                        args: Prisma.ActionLogDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>;
                    };
                    update: {
                        args: Prisma.ActionLogUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>;
                    };
                    deleteMany: {
                        args: Prisma.ActionLogDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ActionLogUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ActionLogUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>[];
                    };
                    upsert: {
                        args: Prisma.ActionLogUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>;
                    };
                    aggregate: {
                        args: Prisma.ActionLogAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateActionLog>;
                    };
                    groupBy: {
                        args: Prisma.ActionLogGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ActionLogGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ActionLogCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<ActionLogCountAggregateOutputType>
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
        document?: DocumentOmit;
        documentTag?: DocumentTagOmit;
        tag?: TagOmit;
        file?: FileOmit;
        documentExtractedField?: DocumentExtractedFieldOmit;
        actionLog?: ActionLogOmit;
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
     * Count Type DocumentCountOutputType
     */

    export type DocumentCountOutputType = {
        documentExtractedFields: number;
        actionLogs: number;
        files: number;
        documentTags: number;
    };

    export type DocumentCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        documentExtractedFields?:
            | boolean
            | DocumentCountOutputTypeCountDocumentExtractedFieldsArgs;
        actionLogs?: boolean | DocumentCountOutputTypeCountActionLogsArgs;
        files?: boolean | DocumentCountOutputTypeCountFilesArgs;
        documentTags?: boolean | DocumentCountOutputTypeCountDocumentTagsArgs;
    };

    // Custom InputTypes
    /**
     * DocumentCountOutputType without action
     */
    export type DocumentCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentCountOutputType
         */
        select?: DocumentCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * DocumentCountOutputType without action
     */
    export type DocumentCountOutputTypeCountDocumentExtractedFieldsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentExtractedFieldWhereInput;
    };

    /**
     * DocumentCountOutputType without action
     */
    export type DocumentCountOutputTypeCountActionLogsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ActionLogWhereInput;
    };

    /**
     * DocumentCountOutputType without action
     */
    export type DocumentCountOutputTypeCountFilesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: FileWhereInput;
    };

    /**
     * DocumentCountOutputType without action
     */
    export type DocumentCountOutputTypeCountDocumentTagsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentTagWhereInput;
    };

    /**
     * Count Type TagCountOutputType
     */

    export type TagCountOutputType = {
        documentTags: number;
    };

    export type TagCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        documentTags?: boolean | TagCountOutputTypeCountDocumentTagsArgs;
    };

    // Custom InputTypes
    /**
     * TagCountOutputType without action
     */
    export type TagCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the TagCountOutputType
         */
        select?: TagCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * TagCountOutputType without action
     */
    export type TagCountOutputTypeCountDocumentTagsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentTagWhereInput;
    };

    /**
     * Models
     */

    /**
     * Model Document
     */

    export type AggregateDocument = {
        _count: DocumentCountAggregateOutputType | null;
        _min: DocumentMinAggregateOutputType | null;
        _max: DocumentMaxAggregateOutputType | null;
    };

    export type DocumentMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.DocumentStatuses | null;
        name: string | null;
        expiresAt: Date | null;
        riskLevel: $Enums.RiskLevel | null;
    };

    export type DocumentMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.DocumentStatuses | null;
        name: string | null;
        expiresAt: Date | null;
        riskLevel: $Enums.RiskLevel | null;
    };

    export type DocumentCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        status: number;
        tags: number;
        name: number;
        expiresAt: number;
        riskLevel: number;
        _all: number;
    };

    export type DocumentMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        name?: true;
        expiresAt?: true;
        riskLevel?: true;
    };

    export type DocumentMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        name?: true;
        expiresAt?: true;
        riskLevel?: true;
    };

    export type DocumentCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        tags?: true;
        name?: true;
        expiresAt?: true;
        riskLevel?: true;
        _all?: true;
    };

    export type DocumentAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Document to aggregate.
         */
        where?: DocumentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?:
            | DocumentOrderByWithRelationInput
            | DocumentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: DocumentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Documents
         **/
        _count?: true | DocumentCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: DocumentMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: DocumentMaxAggregateInputType;
    };

    export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateDocument[P]>
            : GetScalarType<T[P], AggregateDocument[P]>;
    };

    export type DocumentGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentWhereInput;
        orderBy?:
            | DocumentOrderByWithAggregationInput
            | DocumentOrderByWithAggregationInput[];
        by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum;
        having?: DocumentScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: DocumentCountAggregateInputType | true;
        _min?: DocumentMinAggregateInputType;
        _max?: DocumentMaxAggregateInputType;
    };

    export type DocumentGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: $Enums.DocumentStatuses;
        tags: string[];
        name: string;
        expiresAt: Date | null;
        riskLevel: $Enums.RiskLevel | null;
        _count: DocumentCountAggregateOutputType | null;
        _min: DocumentMinAggregateOutputType | null;
        _max: DocumentMaxAggregateOutputType | null;
    };

    type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<DocumentGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof DocumentGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
                        : GetScalarType<T[P], DocumentGroupByOutputType[P]>;
                }
            >
        >;

    export type DocumentSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            status?: boolean;
            tags?: boolean;
            name?: boolean;
            expiresAt?: boolean;
            riskLevel?: boolean;
            documentExtractedFields?:
                | boolean
                | Document$documentExtractedFieldsArgs<ExtArgs>;
            actionLogs?: boolean | Document$actionLogsArgs<ExtArgs>;
            files?: boolean | Document$filesArgs<ExtArgs>;
            documentTags?: boolean | Document$documentTagsArgs<ExtArgs>;
            _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["document"]
    >;

    export type DocumentSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            status?: boolean;
            tags?: boolean;
            name?: boolean;
            expiresAt?: boolean;
            riskLevel?: boolean;
        },
        ExtArgs["result"]["document"]
    >;

    export type DocumentSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            status?: boolean;
            tags?: boolean;
            name?: boolean;
            expiresAt?: boolean;
            riskLevel?: boolean;
        },
        ExtArgs["result"]["document"]
    >;

    export type DocumentSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        status?: boolean;
        tags?: boolean;
        name?: boolean;
        expiresAt?: boolean;
        riskLevel?: boolean;
    };

    export type DocumentOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "status"
        | "tags"
        | "name"
        | "expiresAt"
        | "riskLevel",
        ExtArgs["result"]["document"]
    >;
    export type DocumentInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        documentExtractedFields?:
            | boolean
            | Document$documentExtractedFieldsArgs<ExtArgs>;
        actionLogs?: boolean | Document$actionLogsArgs<ExtArgs>;
        files?: boolean | Document$filesArgs<ExtArgs>;
        documentTags?: boolean | Document$documentTagsArgs<ExtArgs>;
        _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type DocumentIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type DocumentIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $DocumentPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Document";
        objects: {
            documentExtractedFields: Prisma.$DocumentExtractedFieldPayload<ExtArgs>[];
            actionLogs: Prisma.$ActionLogPayload<ExtArgs>[];
            files: Prisma.$FilePayload<ExtArgs>[];
            documentTags: Prisma.$DocumentTagPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: $Enums.DocumentStatuses;
                tags: string[];
                name: string;
                expiresAt: Date | null;
                riskLevel: $Enums.RiskLevel | null;
            },
            ExtArgs["result"]["document"]
        >;
        composites: {};
    };

    type DocumentGetPayload<
        S extends boolean | null | undefined | DocumentDefaultArgs,
    > = $Result.GetResult<Prisma.$DocumentPayload, S>;

    type DocumentCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        DocumentFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: DocumentCountAggregateInputType | true;
    };

    export interface DocumentDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Document"];
            meta: { name: "Document" };
        };
        /**
         * Find zero or one Document that matches the filter.
         * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends DocumentFindUniqueArgs>(
            args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Document that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(
            args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Document that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentFindFirstArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends DocumentFindFirstArgs>(
            args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Document that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
         * @example
         * // Get one Document
         * const document = await prisma.document.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(
            args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Documents that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Documents
         * const documents = await prisma.document.findMany()
         *
         * // Get first 10 Documents
         * const documents = await prisma.document.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
         *
         */
        findMany<T extends DocumentFindManyArgs>(
            args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Document.
         * @param {DocumentCreateArgs} args - Arguments to create a Document.
         * @example
         * // Create one Document
         * const Document = await prisma.document.create({
         *   data: {
         *     // ... data to create a Document
         *   }
         * })
         *
         */
        create<T extends DocumentCreateArgs>(
            args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Documents.
         * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
         * @example
         * // Create many Documents
         * const document = await prisma.document.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends DocumentCreateManyArgs>(
            args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Documents and returns the data saved in the database.
         * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
         * @example
         * // Create many Documents
         * const document = await prisma.document.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Documents and only return the `id`
         * const documentWithIdOnly = await prisma.document.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(
            args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Document.
         * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
         * @example
         * // Delete one Document
         * const Document = await prisma.document.delete({
         *   where: {
         *     // ... filter to delete one Document
         *   }
         * })
         *
         */
        delete<T extends DocumentDeleteArgs>(
            args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Document.
         * @param {DocumentUpdateArgs} args - Arguments to update one Document.
         * @example
         * // Update one Document
         * const document = await prisma.document.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends DocumentUpdateArgs>(
            args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Documents.
         * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
         * @example
         * // Delete a few Documents
         * const { count } = await prisma.document.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends DocumentDeleteManyArgs>(
            args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Documents.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Documents
         * const document = await prisma.document.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends DocumentUpdateManyArgs>(
            args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Documents and returns the data updated in the database.
         * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
         * @example
         * // Update many Documents
         * const document = await prisma.document.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Documents and only return the `id`
         * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
        updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(
            args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Document.
         * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
         * @example
         * // Update or create a Document
         * const document = await prisma.document.upsert({
         *   create: {
         *     // ... data to create a Document
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Document we want to update
         *   }
         * })
         */
        upsert<T extends DocumentUpsertArgs>(
            args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Documents.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
         * @example
         * // Count the number of Documents
         * const count = await prisma.document.count({
         *   where: {
         *     // ... the filter for the Documents we want to count
         *   }
         * })
         **/
        count<T extends DocumentCountArgs>(
            args?: Subset<T, DocumentCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          DocumentCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Document.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends DocumentAggregateArgs>(
            args: Subset<T, DocumentAggregateArgs>
        ): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;

        /**
         * Group by Document.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentGroupByArgs} args - Group by arguments.
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
            T extends DocumentGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: DocumentGroupByArgs["orderBy"] }
                : { orderBy?: DocumentGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetDocumentGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Document model
         */
        readonly fields: DocumentFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Document.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__DocumentClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        documentExtractedFields<
            T extends Document$documentExtractedFieldsArgs<ExtArgs> = {},
        >(
            args?: Subset<T, Document$documentExtractedFieldsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        actionLogs<T extends Document$actionLogsArgs<ExtArgs> = {}>(
            args?: Subset<T, Document$actionLogsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ActionLogPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        files<T extends Document$filesArgs<ExtArgs> = {}>(
            args?: Subset<T, Document$filesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$FilePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        documentTags<T extends Document$documentTagsArgs<ExtArgs> = {}>(
            args?: Subset<T, Document$documentTagsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$DocumentTagPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
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
     * Fields of the Document model
     */
    interface DocumentFieldRefs {
        readonly id: FieldRef<"Document", "String">;
        readonly createdAt: FieldRef<"Document", "DateTime">;
        readonly updatedAt: FieldRef<"Document", "DateTime">;
        readonly status: FieldRef<"Document", "DocumentStatuses">;
        readonly tags: FieldRef<"Document", "String[]">;
        readonly name: FieldRef<"Document", "String">;
        readonly expiresAt: FieldRef<"Document", "DateTime">;
        readonly riskLevel: FieldRef<"Document", "RiskLevel">;
    }

    // Custom InputTypes
    /**
     * Document findUnique
     */
    export type DocumentFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * Filter, which Document to fetch.
         */
        where: DocumentWhereUniqueInput;
    };

    /**
     * Document findUniqueOrThrow
     */
    export type DocumentFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * Filter, which Document to fetch.
         */
        where: DocumentWhereUniqueInput;
    };

    /**
     * Document findFirst
     */
    export type DocumentFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * Filter, which Document to fetch.
         */
        where?: DocumentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?:
            | DocumentOrderByWithRelationInput
            | DocumentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Documents.
         */
        cursor?: DocumentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Documents.
         */
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
    };

    /**
     * Document findFirstOrThrow
     */
    export type DocumentFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * Filter, which Document to fetch.
         */
        where?: DocumentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?:
            | DocumentOrderByWithRelationInput
            | DocumentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Documents.
         */
        cursor?: DocumentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Documents.
         */
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
    };

    /**
     * Document findMany
     */
    export type DocumentFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * Filter, which Documents to fetch.
         */
        where?: DocumentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Documents to fetch.
         */
        orderBy?:
            | DocumentOrderByWithRelationInput
            | DocumentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Documents.
         */
        cursor?: DocumentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Documents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Documents.
         */
        skip?: number;
        distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
    };

    /**
     * Document create
     */
    export type DocumentCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * The data needed to create a Document.
         */
        data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>;
    };

    /**
     * Document createMany
     */
    export type DocumentCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Documents.
         */
        data: DocumentCreateManyInput | DocumentCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Document createManyAndReturn
     */
    export type DocumentCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * The data used to create many Documents.
         */
        data: DocumentCreateManyInput | DocumentCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Document update
     */
    export type DocumentUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * The data needed to update a Document.
         */
        data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>;
        /**
         * Choose, which Document to update.
         */
        where: DocumentWhereUniqueInput;
    };

    /**
     * Document updateMany
     */
    export type DocumentUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Documents.
         */
        data: XOR<
            DocumentUpdateManyMutationInput,
            DocumentUncheckedUpdateManyInput
        >;
        /**
         * Filter which Documents to update
         */
        where?: DocumentWhereInput;
        /**
         * Limit how many Documents to update.
         */
        limit?: number;
    };

    /**
     * Document updateManyAndReturn
     */
    export type DocumentUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * The data used to update Documents.
         */
        data: XOR<
            DocumentUpdateManyMutationInput,
            DocumentUncheckedUpdateManyInput
        >;
        /**
         * Filter which Documents to update
         */
        where?: DocumentWhereInput;
        /**
         * Limit how many Documents to update.
         */
        limit?: number;
    };

    /**
     * Document upsert
     */
    export type DocumentUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * The filter to search for the Document to update in case it exists.
         */
        where: DocumentWhereUniqueInput;
        /**
         * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
         */
        create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>;
        /**
         * In case the Document was found with the provided `where` argument, update it with this data.
         */
        update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>;
    };

    /**
     * Document delete
     */
    export type DocumentDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        /**
         * Filter which Document to delete.
         */
        where: DocumentWhereUniqueInput;
    };

    /**
     * Document deleteMany
     */
    export type DocumentDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Documents to delete
         */
        where?: DocumentWhereInput;
        /**
         * Limit how many Documents to delete.
         */
        limit?: number;
    };

    /**
     * Document.documentExtractedFields
     */
    export type Document$documentExtractedFieldsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        where?: DocumentExtractedFieldWhereInput;
        orderBy?:
            | DocumentExtractedFieldOrderByWithRelationInput
            | DocumentExtractedFieldOrderByWithRelationInput[];
        cursor?: DocumentExtractedFieldWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | DocumentExtractedFieldScalarFieldEnum
            | DocumentExtractedFieldScalarFieldEnum[];
    };

    /**
     * Document.actionLogs
     */
    export type Document$actionLogsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        where?: ActionLogWhereInput;
        orderBy?:
            | ActionLogOrderByWithRelationInput
            | ActionLogOrderByWithRelationInput[];
        cursor?: ActionLogWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[];
    };

    /**
     * Document.files
     */
    export type Document$filesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        where?: FileWhereInput;
        orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
        cursor?: FileWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
    };

    /**
     * Document.documentTags
     */
    export type Document$documentTagsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        where?: DocumentTagWhereInput;
        orderBy?:
            | DocumentTagOrderByWithRelationInput
            | DocumentTagOrderByWithRelationInput[];
        cursor?: DocumentTagWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: DocumentTagScalarFieldEnum | DocumentTagScalarFieldEnum[];
    };

    /**
     * Document without action
     */
    export type DocumentDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
    };

    /**
     * Model DocumentTag
     */

    export type AggregateDocumentTag = {
        _count: DocumentTagCountAggregateOutputType | null;
        _min: DocumentTagMinAggregateOutputType | null;
        _max: DocumentTagMaxAggregateOutputType | null;
    };

    export type DocumentTagMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        documentId: string | null;
        tagId: string | null;
    };

    export type DocumentTagMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        documentId: string | null;
        tagId: string | null;
    };

    export type DocumentTagCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        documentId: number;
        tagId: number;
        _all: number;
    };

    export type DocumentTagMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        documentId?: true;
        tagId?: true;
    };

    export type DocumentTagMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        documentId?: true;
        tagId?: true;
    };

    export type DocumentTagCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        documentId?: true;
        tagId?: true;
        _all?: true;
    };

    export type DocumentTagAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which DocumentTag to aggregate.
         */
        where?: DocumentTagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentTags to fetch.
         */
        orderBy?:
            | DocumentTagOrderByWithRelationInput
            | DocumentTagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: DocumentTagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentTags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentTags.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned DocumentTags
         **/
        _count?: true | DocumentTagCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: DocumentTagMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: DocumentTagMaxAggregateInputType;
    };

    export type GetDocumentTagAggregateType<
        T extends DocumentTagAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateDocumentTag]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateDocumentTag[P]>
            : GetScalarType<T[P], AggregateDocumentTag[P]>;
    };

    export type DocumentTagGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentTagWhereInput;
        orderBy?:
            | DocumentTagOrderByWithAggregationInput
            | DocumentTagOrderByWithAggregationInput[];
        by: DocumentTagScalarFieldEnum[] | DocumentTagScalarFieldEnum;
        having?: DocumentTagScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: DocumentTagCountAggregateInputType | true;
        _min?: DocumentTagMinAggregateInputType;
        _max?: DocumentTagMaxAggregateInputType;
    };

    export type DocumentTagGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        documentId: string;
        tagId: string;
        _count: DocumentTagCountAggregateOutputType | null;
        _min: DocumentTagMinAggregateOutputType | null;
        _max: DocumentTagMaxAggregateOutputType | null;
    };

    type GetDocumentTagGroupByPayload<T extends DocumentTagGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<DocumentTagGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof DocumentTagGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  DocumentTagGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], DocumentTagGroupByOutputType[P]>;
                }
            >
        >;

    export type DocumentTagSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            documentId?: boolean;
            tagId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
            tag?: boolean | TagDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentTag"]
    >;

    export type DocumentTagSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            documentId?: boolean;
            tagId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
            tag?: boolean | TagDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentTag"]
    >;

    export type DocumentTagSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            documentId?: boolean;
            tagId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
            tag?: boolean | TagDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentTag"]
    >;

    export type DocumentTagSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        documentId?: boolean;
        tagId?: boolean;
    };

    export type DocumentTagOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "createdAt" | "updatedAt" | "documentId" | "tagId",
        ExtArgs["result"]["documentTag"]
    >;
    export type DocumentTagInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
        tag?: boolean | TagDefaultArgs<ExtArgs>;
    };
    export type DocumentTagIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
        tag?: boolean | TagDefaultArgs<ExtArgs>;
    };
    export type DocumentTagIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
        tag?: boolean | TagDefaultArgs<ExtArgs>;
    };

    export type $DocumentTagPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "DocumentTag";
        objects: {
            document: Prisma.$DocumentPayload<ExtArgs>;
            tag: Prisma.$TagPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                documentId: string;
                tagId: string;
            },
            ExtArgs["result"]["documentTag"]
        >;
        composites: {};
    };

    type DocumentTagGetPayload<
        S extends boolean | null | undefined | DocumentTagDefaultArgs,
    > = $Result.GetResult<Prisma.$DocumentTagPayload, S>;

    type DocumentTagCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        DocumentTagFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: DocumentTagCountAggregateInputType | true;
    };

    export interface DocumentTagDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["DocumentTag"];
            meta: { name: "DocumentTag" };
        };
        /**
         * Find zero or one DocumentTag that matches the filter.
         * @param {DocumentTagFindUniqueArgs} args - Arguments to find a DocumentTag
         * @example
         * // Get one DocumentTag
         * const documentTag = await prisma.documentTag.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends DocumentTagFindUniqueArgs>(
            args: SelectSubset<T, DocumentTagFindUniqueArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one DocumentTag that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {DocumentTagFindUniqueOrThrowArgs} args - Arguments to find a DocumentTag
         * @example
         * // Get one DocumentTag
         * const documentTag = await prisma.documentTag.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends DocumentTagFindUniqueOrThrowArgs>(
            args: SelectSubset<T, DocumentTagFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first DocumentTag that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagFindFirstArgs} args - Arguments to find a DocumentTag
         * @example
         * // Get one DocumentTag
         * const documentTag = await prisma.documentTag.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends DocumentTagFindFirstArgs>(
            args?: SelectSubset<T, DocumentTagFindFirstArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first DocumentTag that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagFindFirstOrThrowArgs} args - Arguments to find a DocumentTag
         * @example
         * // Get one DocumentTag
         * const documentTag = await prisma.documentTag.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends DocumentTagFindFirstOrThrowArgs>(
            args?: SelectSubset<T, DocumentTagFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more DocumentTags that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all DocumentTags
         * const documentTags = await prisma.documentTag.findMany()
         *
         * // Get first 10 DocumentTags
         * const documentTags = await prisma.documentTag.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const documentTagWithIdOnly = await prisma.documentTag.findMany({ select: { id: true } })
         *
         */
        findMany<T extends DocumentTagFindManyArgs>(
            args?: SelectSubset<T, DocumentTagFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a DocumentTag.
         * @param {DocumentTagCreateArgs} args - Arguments to create a DocumentTag.
         * @example
         * // Create one DocumentTag
         * const DocumentTag = await prisma.documentTag.create({
         *   data: {
         *     // ... data to create a DocumentTag
         *   }
         * })
         *
         */
        create<T extends DocumentTagCreateArgs>(
            args: SelectSubset<T, DocumentTagCreateArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many DocumentTags.
         * @param {DocumentTagCreateManyArgs} args - Arguments to create many DocumentTags.
         * @example
         * // Create many DocumentTags
         * const documentTag = await prisma.documentTag.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends DocumentTagCreateManyArgs>(
            args?: SelectSubset<T, DocumentTagCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many DocumentTags and returns the data saved in the database.
         * @param {DocumentTagCreateManyAndReturnArgs} args - Arguments to create many DocumentTags.
         * @example
         * // Create many DocumentTags
         * const documentTag = await prisma.documentTag.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many DocumentTags and only return the `id`
         * const documentTagWithIdOnly = await prisma.documentTag.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends DocumentTagCreateManyAndReturnArgs>(
            args?: SelectSubset<T, DocumentTagCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a DocumentTag.
         * @param {DocumentTagDeleteArgs} args - Arguments to delete one DocumentTag.
         * @example
         * // Delete one DocumentTag
         * const DocumentTag = await prisma.documentTag.delete({
         *   where: {
         *     // ... filter to delete one DocumentTag
         *   }
         * })
         *
         */
        delete<T extends DocumentTagDeleteArgs>(
            args: SelectSubset<T, DocumentTagDeleteArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one DocumentTag.
         * @param {DocumentTagUpdateArgs} args - Arguments to update one DocumentTag.
         * @example
         * // Update one DocumentTag
         * const documentTag = await prisma.documentTag.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends DocumentTagUpdateArgs>(
            args: SelectSubset<T, DocumentTagUpdateArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more DocumentTags.
         * @param {DocumentTagDeleteManyArgs} args - Arguments to filter DocumentTags to delete.
         * @example
         * // Delete a few DocumentTags
         * const { count } = await prisma.documentTag.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends DocumentTagDeleteManyArgs>(
            args?: SelectSubset<T, DocumentTagDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more DocumentTags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many DocumentTags
         * const documentTag = await prisma.documentTag.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends DocumentTagUpdateManyArgs>(
            args: SelectSubset<T, DocumentTagUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more DocumentTags and returns the data updated in the database.
         * @param {DocumentTagUpdateManyAndReturnArgs} args - Arguments to update many DocumentTags.
         * @example
         * // Update many DocumentTags
         * const documentTag = await prisma.documentTag.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more DocumentTags and only return the `id`
         * const documentTagWithIdOnly = await prisma.documentTag.updateManyAndReturn({
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
        updateManyAndReturn<T extends DocumentTagUpdateManyAndReturnArgs>(
            args: SelectSubset<T, DocumentTagUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one DocumentTag.
         * @param {DocumentTagUpsertArgs} args - Arguments to update or create a DocumentTag.
         * @example
         * // Update or create a DocumentTag
         * const documentTag = await prisma.documentTag.upsert({
         *   create: {
         *     // ... data to create a DocumentTag
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the DocumentTag we want to update
         *   }
         * })
         */
        upsert<T extends DocumentTagUpsertArgs>(
            args: SelectSubset<T, DocumentTagUpsertArgs<ExtArgs>>
        ): Prisma__DocumentTagClient<
            $Result.GetResult<
                Prisma.$DocumentTagPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of DocumentTags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagCountArgs} args - Arguments to filter DocumentTags to count.
         * @example
         * // Count the number of DocumentTags
         * const count = await prisma.documentTag.count({
         *   where: {
         *     // ... the filter for the DocumentTags we want to count
         *   }
         * })
         **/
        count<T extends DocumentTagCountArgs>(
            args?: Subset<T, DocumentTagCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          DocumentTagCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a DocumentTag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends DocumentTagAggregateArgs>(
            args: Subset<T, DocumentTagAggregateArgs>
        ): Prisma.PrismaPromise<GetDocumentTagAggregateType<T>>;

        /**
         * Group by DocumentTag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentTagGroupByArgs} args - Group by arguments.
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
            T extends DocumentTagGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: DocumentTagGroupByArgs["orderBy"] }
                : { orderBy?: DocumentTagGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, DocumentTagGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetDocumentTagGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the DocumentTag model
         */
        readonly fields: DocumentTagFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for DocumentTag.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__DocumentTagClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            | $Result.GetResult<
                  Prisma.$DocumentPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        tag<T extends TagDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, TagDefaultArgs<ExtArgs>>
        ): Prisma__TagClient<
            | $Result.GetResult<
                  Prisma.$TagPayload<ExtArgs>,
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
     * Fields of the DocumentTag model
     */
    interface DocumentTagFieldRefs {
        readonly id: FieldRef<"DocumentTag", "String">;
        readonly createdAt: FieldRef<"DocumentTag", "DateTime">;
        readonly updatedAt: FieldRef<"DocumentTag", "DateTime">;
        readonly documentId: FieldRef<"DocumentTag", "String">;
        readonly tagId: FieldRef<"DocumentTag", "String">;
    }

    // Custom InputTypes
    /**
     * DocumentTag findUnique
     */
    export type DocumentTagFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentTag to fetch.
         */
        where: DocumentTagWhereUniqueInput;
    };

    /**
     * DocumentTag findUniqueOrThrow
     */
    export type DocumentTagFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentTag to fetch.
         */
        where: DocumentTagWhereUniqueInput;
    };

    /**
     * DocumentTag findFirst
     */
    export type DocumentTagFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentTag to fetch.
         */
        where?: DocumentTagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentTags to fetch.
         */
        orderBy?:
            | DocumentTagOrderByWithRelationInput
            | DocumentTagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for DocumentTags.
         */
        cursor?: DocumentTagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentTags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentTags.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of DocumentTags.
         */
        distinct?: DocumentTagScalarFieldEnum | DocumentTagScalarFieldEnum[];
    };

    /**
     * DocumentTag findFirstOrThrow
     */
    export type DocumentTagFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentTag to fetch.
         */
        where?: DocumentTagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentTags to fetch.
         */
        orderBy?:
            | DocumentTagOrderByWithRelationInput
            | DocumentTagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for DocumentTags.
         */
        cursor?: DocumentTagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentTags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentTags.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of DocumentTags.
         */
        distinct?: DocumentTagScalarFieldEnum | DocumentTagScalarFieldEnum[];
    };

    /**
     * DocumentTag findMany
     */
    export type DocumentTagFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentTags to fetch.
         */
        where?: DocumentTagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentTags to fetch.
         */
        orderBy?:
            | DocumentTagOrderByWithRelationInput
            | DocumentTagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing DocumentTags.
         */
        cursor?: DocumentTagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentTags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentTags.
         */
        skip?: number;
        distinct?: DocumentTagScalarFieldEnum | DocumentTagScalarFieldEnum[];
    };

    /**
     * DocumentTag create
     */
    export type DocumentTagCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * The data needed to create a DocumentTag.
         */
        data: XOR<DocumentTagCreateInput, DocumentTagUncheckedCreateInput>;
    };

    /**
     * DocumentTag createMany
     */
    export type DocumentTagCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many DocumentTags.
         */
        data: DocumentTagCreateManyInput | DocumentTagCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * DocumentTag createManyAndReturn
     */
    export type DocumentTagCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * The data used to create many DocumentTags.
         */
        data: DocumentTagCreateManyInput | DocumentTagCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * DocumentTag update
     */
    export type DocumentTagUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * The data needed to update a DocumentTag.
         */
        data: XOR<DocumentTagUpdateInput, DocumentTagUncheckedUpdateInput>;
        /**
         * Choose, which DocumentTag to update.
         */
        where: DocumentTagWhereUniqueInput;
    };

    /**
     * DocumentTag updateMany
     */
    export type DocumentTagUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update DocumentTags.
         */
        data: XOR<
            DocumentTagUpdateManyMutationInput,
            DocumentTagUncheckedUpdateManyInput
        >;
        /**
         * Filter which DocumentTags to update
         */
        where?: DocumentTagWhereInput;
        /**
         * Limit how many DocumentTags to update.
         */
        limit?: number;
    };

    /**
     * DocumentTag updateManyAndReturn
     */
    export type DocumentTagUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * The data used to update DocumentTags.
         */
        data: XOR<
            DocumentTagUpdateManyMutationInput,
            DocumentTagUncheckedUpdateManyInput
        >;
        /**
         * Filter which DocumentTags to update
         */
        where?: DocumentTagWhereInput;
        /**
         * Limit how many DocumentTags to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * DocumentTag upsert
     */
    export type DocumentTagUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * The filter to search for the DocumentTag to update in case it exists.
         */
        where: DocumentTagWhereUniqueInput;
        /**
         * In case the DocumentTag found by the `where` argument doesn't exist, create a new DocumentTag with this data.
         */
        create: XOR<DocumentTagCreateInput, DocumentTagUncheckedCreateInput>;
        /**
         * In case the DocumentTag was found with the provided `where` argument, update it with this data.
         */
        update: XOR<DocumentTagUpdateInput, DocumentTagUncheckedUpdateInput>;
    };

    /**
     * DocumentTag delete
     */
    export type DocumentTagDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        /**
         * Filter which DocumentTag to delete.
         */
        where: DocumentTagWhereUniqueInput;
    };

    /**
     * DocumentTag deleteMany
     */
    export type DocumentTagDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which DocumentTags to delete
         */
        where?: DocumentTagWhereInput;
        /**
         * Limit how many DocumentTags to delete.
         */
        limit?: number;
    };

    /**
     * DocumentTag without action
     */
    export type DocumentTagDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
    };

    /**
     * Model Tag
     */

    export type AggregateTag = {
        _count: TagCountAggregateOutputType | null;
        _min: TagMinAggregateOutputType | null;
        _max: TagMaxAggregateOutputType | null;
    };

    export type TagMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        tag: string | null;
    };

    export type TagMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        tag: string | null;
    };

    export type TagCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        tag: number;
        _all: number;
    };

    export type TagMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        tag?: true;
    };

    export type TagMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        tag?: true;
    };

    export type TagCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        tag?: true;
        _all?: true;
    };

    export type TagAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Tag to aggregate.
         */
        where?: TagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Tags
         **/
        _count?: true | TagCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TagMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TagMaxAggregateInputType;
    };

    export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTag[P]>
            : GetScalarType<T[P], AggregateTag[P]>;
    };

    export type TagGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: TagWhereInput;
        orderBy?:
            | TagOrderByWithAggregationInput
            | TagOrderByWithAggregationInput[];
        by: TagScalarFieldEnum[] | TagScalarFieldEnum;
        having?: TagScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: TagCountAggregateInputType | true;
        _min?: TagMinAggregateInputType;
        _max?: TagMaxAggregateInputType;
    };

    export type TagGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tag: string;
        _count: TagCountAggregateOutputType | null;
        _min: TagMinAggregateOutputType | null;
        _max: TagMaxAggregateOutputType | null;
    };

    type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<TagGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof TagGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], TagGroupByOutputType[P]>
                    : GetScalarType<T[P], TagGroupByOutputType[P]>;
            }
        >
    >;

    export type TagSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            tag?: boolean;
            documentTags?: boolean | Tag$documentTagsArgs<ExtArgs>;
            _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["tag"]
    >;

    export type TagSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            tag?: boolean;
        },
        ExtArgs["result"]["tag"]
    >;

    export type TagSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            tag?: boolean;
        },
        ExtArgs["result"]["tag"]
    >;

    export type TagSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        tag?: boolean;
    };

    export type TagOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "createdAt" | "updatedAt" | "tag",
        ExtArgs["result"]["tag"]
    >;
    export type TagInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        documentTags?: boolean | Tag$documentTagsArgs<ExtArgs>;
        _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type TagIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type TagIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $TagPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Tag";
        objects: {
            documentTags: Prisma.$DocumentTagPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                tag: string;
            },
            ExtArgs["result"]["tag"]
        >;
        composites: {};
    };

    type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
        $Result.GetResult<Prisma.$TagPayload, S>;

    type TagCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<TagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: TagCountAggregateInputType | true;
    };

    export interface TagDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Tag"];
            meta: { name: "Tag" };
        };
        /**
         * Find zero or one Tag that matches the filter.
         * @param {TagFindUniqueArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TagFindUniqueArgs>(
            args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
            args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Tag that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagFindFirstArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TagFindFirstArgs>(
            args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Tag that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
            args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Tags that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tags
         * const tags = await prisma.tag.findMany()
         *
         * // Get first 10 Tags
         * const tags = await prisma.tag.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
         *
         */
        findMany<T extends TagFindManyArgs>(
            args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Tag.
         * @param {TagCreateArgs} args - Arguments to create a Tag.
         * @example
         * // Create one Tag
         * const Tag = await prisma.tag.create({
         *   data: {
         *     // ... data to create a Tag
         *   }
         * })
         *
         */
        create<T extends TagCreateArgs>(
            args: SelectSubset<T, TagCreateArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Tags.
         * @param {TagCreateManyArgs} args - Arguments to create many Tags.
         * @example
         * // Create many Tags
         * const tag = await prisma.tag.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TagCreateManyArgs>(
            args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Tags and returns the data saved in the database.
         * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
         * @example
         * // Create many Tags
         * const tag = await prisma.tag.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Tags and only return the `id`
         * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
            args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Tag.
         * @param {TagDeleteArgs} args - Arguments to delete one Tag.
         * @example
         * // Delete one Tag
         * const Tag = await prisma.tag.delete({
         *   where: {
         *     // ... filter to delete one Tag
         *   }
         * })
         *
         */
        delete<T extends TagDeleteArgs>(
            args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Tag.
         * @param {TagUpdateArgs} args - Arguments to update one Tag.
         * @example
         * // Update one Tag
         * const tag = await prisma.tag.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TagUpdateArgs>(
            args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Tags.
         * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
         * @example
         * // Delete a few Tags
         * const { count } = await prisma.tag.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TagDeleteManyArgs>(
            args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Tags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tags
         * const tag = await prisma.tag.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TagUpdateManyArgs>(
            args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Tags and returns the data updated in the database.
         * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
         * @example
         * // Update many Tags
         * const tag = await prisma.tag.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Tags and only return the `id`
         * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
        updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(
            args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Tag.
         * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
         * @example
         * // Update or create a Tag
         * const tag = await prisma.tag.upsert({
         *   create: {
         *     // ... data to create a Tag
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tag we want to update
         *   }
         * })
         */
        upsert<T extends TagUpsertArgs>(
            args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<
                Prisma.$TagPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Tags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagCountArgs} args - Arguments to filter Tags to count.
         * @example
         * // Count the number of Tags
         * const count = await prisma.tag.count({
         *   where: {
         *     // ... the filter for the Tags we want to count
         *   }
         * })
         **/
        count<T extends TagCountArgs>(
            args?: Subset<T, TagCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], TagCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Tag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends TagAggregateArgs>(
            args: Subset<T, TagAggregateArgs>
        ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

        /**
         * Group by Tag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagGroupByArgs} args - Group by arguments.
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
            T extends TagGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TagGroupByArgs["orderBy"] }
                : { orderBy?: TagGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetTagGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Tag model
         */
        readonly fields: TagFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Tag.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TagClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        documentTags<T extends Tag$documentTagsArgs<ExtArgs> = {}>(
            args?: Subset<T, Tag$documentTagsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$DocumentTagPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
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
     * Fields of the Tag model
     */
    interface TagFieldRefs {
        readonly id: FieldRef<"Tag", "String">;
        readonly createdAt: FieldRef<"Tag", "DateTime">;
        readonly updatedAt: FieldRef<"Tag", "DateTime">;
        readonly tag: FieldRef<"Tag", "String">;
    }

    // Custom InputTypes
    /**
     * Tag findUnique
     */
    export type TagFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * Filter, which Tag to fetch.
         */
        where: TagWhereUniqueInput;
    };

    /**
     * Tag findUniqueOrThrow
     */
    export type TagFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * Filter, which Tag to fetch.
         */
        where: TagWhereUniqueInput;
    };

    /**
     * Tag findFirst
     */
    export type TagFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * Filter, which Tag to fetch.
         */
        where?: TagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tags.
         */
        cursor?: TagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tags.
         */
        distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
    };

    /**
     * Tag findFirstOrThrow
     */
    export type TagFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * Filter, which Tag to fetch.
         */
        where?: TagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tags.
         */
        cursor?: TagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tags.
         */
        distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
    };

    /**
     * Tag findMany
     */
    export type TagFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * Filter, which Tags to fetch.
         */
        where?: TagWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Tags.
         */
        cursor?: TagWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number;
        distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
    };

    /**
     * Tag create
     */
    export type TagCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * The data needed to create a Tag.
         */
        data: XOR<TagCreateInput, TagUncheckedCreateInput>;
    };

    /**
     * Tag createMany
     */
    export type TagCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Tags.
         */
        data: TagCreateManyInput | TagCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Tag createManyAndReturn
     */
    export type TagCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * The data used to create many Tags.
         */
        data: TagCreateManyInput | TagCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Tag update
     */
    export type TagUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * The data needed to update a Tag.
         */
        data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
        /**
         * Choose, which Tag to update.
         */
        where: TagWhereUniqueInput;
    };

    /**
     * Tag updateMany
     */
    export type TagUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Tags.
         */
        data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
        /**
         * Filter which Tags to update
         */
        where?: TagWhereInput;
        /**
         * Limit how many Tags to update.
         */
        limit?: number;
    };

    /**
     * Tag updateManyAndReturn
     */
    export type TagUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * The data used to update Tags.
         */
        data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
        /**
         * Filter which Tags to update
         */
        where?: TagWhereInput;
        /**
         * Limit how many Tags to update.
         */
        limit?: number;
    };

    /**
     * Tag upsert
     */
    export type TagUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * The filter to search for the Tag to update in case it exists.
         */
        where: TagWhereUniqueInput;
        /**
         * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
         */
        create: XOR<TagCreateInput, TagUncheckedCreateInput>;
        /**
         * In case the Tag was found with the provided `where` argument, update it with this data.
         */
        update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    };

    /**
     * Tag delete
     */
    export type TagDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
        /**
         * Filter which Tag to delete.
         */
        where: TagWhereUniqueInput;
    };

    /**
     * Tag deleteMany
     */
    export type TagDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Tags to delete
         */
        where?: TagWhereInput;
        /**
         * Limit how many Tags to delete.
         */
        limit?: number;
    };

    /**
     * Tag.documentTags
     */
    export type Tag$documentTagsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentTag
         */
        select?: DocumentTagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentTag
         */
        omit?: DocumentTagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentTagInclude<ExtArgs> | null;
        where?: DocumentTagWhereInput;
        orderBy?:
            | DocumentTagOrderByWithRelationInput
            | DocumentTagOrderByWithRelationInput[];
        cursor?: DocumentTagWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: DocumentTagScalarFieldEnum | DocumentTagScalarFieldEnum[];
    };

    /**
     * Tag without action
     */
    export type TagDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null;
    };

    /**
     * Model File
     */

    export type AggregateFile = {
        _count: FileCountAggregateOutputType | null;
        _avg: FileAvgAggregateOutputType | null;
        _sum: FileSumAggregateOutputType | null;
        _min: FileMinAggregateOutputType | null;
        _max: FileMaxAggregateOutputType | null;
    };

    export type FileAvgAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type FileSumAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type FileMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        urlExpiresAt: Date | null;
        width: number | null;
        height: number | null;
        documentId: string | null;
    };

    export type FileMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        urlExpiresAt: Date | null;
        width: number | null;
        height: number | null;
        documentId: string | null;
    };

    export type FileCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        key: number;
        fileSize: number;
        mimeType: number;
        url: number;
        urlExpiresAt: number;
        width: number;
        height: number;
        documentId: number;
        _all: number;
    };

    export type FileAvgAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type FileSumAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type FileMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        urlExpiresAt?: true;
        width?: true;
        height?: true;
        documentId?: true;
    };

    export type FileMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        urlExpiresAt?: true;
        width?: true;
        height?: true;
        documentId?: true;
    };

    export type FileCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        urlExpiresAt?: true;
        width?: true;
        height?: true;
        documentId?: true;
        _all?: true;
    };

    export type FileAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which File to aggregate.
         */
        where?: FileWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Files to fetch.
         */
        orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: FileWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Files from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Files.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Files
         **/
        _count?: true | FileCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: FileAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: FileSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: FileMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: FileMaxAggregateInputType;
    };

    export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateFile[P]>
            : GetScalarType<T[P], AggregateFile[P]>;
    };

    export type FileGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: FileWhereInput;
        orderBy?:
            | FileOrderByWithAggregationInput
            | FileOrderByWithAggregationInput[];
        by: FileScalarFieldEnum[] | FileScalarFieldEnum;
        having?: FileScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: FileCountAggregateInputType | true;
        _avg?: FileAvgAggregateInputType;
        _sum?: FileSumAggregateInputType;
        _min?: FileMinAggregateInputType;
        _max?: FileMaxAggregateInputType;
    };

    export type FileGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date;
        width: number | null;
        height: number | null;
        documentId: string;
        _count: FileCountAggregateOutputType | null;
        _avg: FileAvgAggregateOutputType | null;
        _sum: FileSumAggregateOutputType | null;
        _min: FileMinAggregateOutputType | null;
        _max: FileMaxAggregateOutputType | null;
    };

    type GetFileGroupByPayload<T extends FileGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<FileGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof FileGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], FileGroupByOutputType[P]>
                        : GetScalarType<T[P], FileGroupByOutputType[P]>;
                }
            >
        >;

    export type FileSelect<
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
            urlExpiresAt?: boolean;
            width?: boolean;
            height?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["file"]
    >;

    export type FileSelectCreateManyAndReturn<
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
            urlExpiresAt?: boolean;
            width?: boolean;
            height?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["file"]
    >;

    export type FileSelectUpdateManyAndReturn<
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
            urlExpiresAt?: boolean;
            width?: boolean;
            height?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["file"]
    >;

    export type FileSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        key?: boolean;
        fileSize?: boolean;
        mimeType?: boolean;
        url?: boolean;
        urlExpiresAt?: boolean;
        width?: boolean;
        height?: boolean;
        documentId?: boolean;
    };

    export type FileOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "key"
        | "fileSize"
        | "mimeType"
        | "url"
        | "urlExpiresAt"
        | "width"
        | "height"
        | "documentId",
        ExtArgs["result"]["file"]
    >;
    export type FileInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };
    export type FileIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };
    export type FileIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };

    export type $FilePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "File";
        objects: {
            document: Prisma.$DocumentPayload<ExtArgs>;
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
                urlExpiresAt: Date;
                width: number | null;
                height: number | null;
                documentId: string;
            },
            ExtArgs["result"]["file"]
        >;
        composites: {};
    };

    type FileGetPayload<
        S extends boolean | null | undefined | FileDefaultArgs,
    > = $Result.GetResult<Prisma.$FilePayload, S>;

    type FileCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<FileFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: FileCountAggregateInputType | true;
    };

    export interface FileDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["File"];
            meta: { name: "File" };
        };
        /**
         * Find zero or one File that matches the filter.
         * @param {FileFindUniqueArgs} args - Arguments to find a File
         * @example
         * // Get one File
         * const file = await prisma.file.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends FileFindUniqueArgs>(
            args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one File that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
         * @example
         * // Get one File
         * const file = await prisma.file.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(
            args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first File that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileFindFirstArgs} args - Arguments to find a File
         * @example
         * // Get one File
         * const file = await prisma.file.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends FileFindFirstArgs>(
            args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first File that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
         * @example
         * // Get one File
         * const file = await prisma.file.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(
            args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Files that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Files
         * const files = await prisma.file.findMany()
         *
         * // Get first 10 Files
         * const files = await prisma.file.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
         *
         */
        findMany<T extends FileFindManyArgs>(
            args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a File.
         * @param {FileCreateArgs} args - Arguments to create a File.
         * @example
         * // Create one File
         * const File = await prisma.file.create({
         *   data: {
         *     // ... data to create a File
         *   }
         * })
         *
         */
        create<T extends FileCreateArgs>(
            args: SelectSubset<T, FileCreateArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Files.
         * @param {FileCreateManyArgs} args - Arguments to create many Files.
         * @example
         * // Create many Files
         * const file = await prisma.file.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends FileCreateManyArgs>(
            args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Files and returns the data saved in the database.
         * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
         * @example
         * // Create many Files
         * const file = await prisma.file.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Files and only return the `id`
         * const fileWithIdOnly = await prisma.file.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends FileCreateManyAndReturnArgs>(
            args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a File.
         * @param {FileDeleteArgs} args - Arguments to delete one File.
         * @example
         * // Delete one File
         * const File = await prisma.file.delete({
         *   where: {
         *     // ... filter to delete one File
         *   }
         * })
         *
         */
        delete<T extends FileDeleteArgs>(
            args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one File.
         * @param {FileUpdateArgs} args - Arguments to update one File.
         * @example
         * // Update one File
         * const file = await prisma.file.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends FileUpdateArgs>(
            args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Files.
         * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
         * @example
         * // Delete a few Files
         * const { count } = await prisma.file.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends FileDeleteManyArgs>(
            args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Files.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Files
         * const file = await prisma.file.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends FileUpdateManyArgs>(
            args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Files and returns the data updated in the database.
         * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
         * @example
         * // Update many Files
         * const file = await prisma.file.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Files and only return the `id`
         * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
        updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(
            args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one File.
         * @param {FileUpsertArgs} args - Arguments to update or create a File.
         * @example
         * // Update or create a File
         * const file = await prisma.file.upsert({
         *   create: {
         *     // ... data to create a File
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the File we want to update
         *   }
         * })
         */
        upsert<T extends FileUpsertArgs>(
            args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Files.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileCountArgs} args - Arguments to filter Files to count.
         * @example
         * // Count the number of Files
         * const count = await prisma.file.count({
         *   where: {
         *     // ... the filter for the Files we want to count
         *   }
         * })
         **/
        count<T extends FileCountArgs>(
            args?: Subset<T, FileCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], FileCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a File.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends FileAggregateArgs>(
            args: Subset<T, FileAggregateArgs>
        ): Prisma.PrismaPromise<GetFileAggregateType<T>>;

        /**
         * Group by File.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FileGroupByArgs} args - Group by arguments.
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
            T extends FileGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: FileGroupByArgs["orderBy"] }
                : { orderBy?: FileGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetFileGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the File model
         */
        readonly fields: FileFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for File.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__FileClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            | $Result.GetResult<
                  Prisma.$DocumentPayload<ExtArgs>,
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
     * Fields of the File model
     */
    interface FileFieldRefs {
        readonly id: FieldRef<"File", "String">;
        readonly createdAt: FieldRef<"File", "DateTime">;
        readonly updatedAt: FieldRef<"File", "DateTime">;
        readonly key: FieldRef<"File", "String">;
        readonly fileSize: FieldRef<"File", "Float">;
        readonly mimeType: FieldRef<"File", "String">;
        readonly url: FieldRef<"File", "String">;
        readonly urlExpiresAt: FieldRef<"File", "DateTime">;
        readonly width: FieldRef<"File", "Float">;
        readonly height: FieldRef<"File", "Float">;
        readonly documentId: FieldRef<"File", "String">;
    }

    // Custom InputTypes
    /**
     * File findUnique
     */
    export type FileFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * Filter, which File to fetch.
         */
        where: FileWhereUniqueInput;
    };

    /**
     * File findUniqueOrThrow
     */
    export type FileFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * Filter, which File to fetch.
         */
        where: FileWhereUniqueInput;
    };

    /**
     * File findFirst
     */
    export type FileFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * Filter, which File to fetch.
         */
        where?: FileWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Files to fetch.
         */
        orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Files.
         */
        cursor?: FileWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Files from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Files.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Files.
         */
        distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
    };

    /**
     * File findFirstOrThrow
     */
    export type FileFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * Filter, which File to fetch.
         */
        where?: FileWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Files to fetch.
         */
        orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Files.
         */
        cursor?: FileWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Files from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Files.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Files.
         */
        distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
    };

    /**
     * File findMany
     */
    export type FileFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * Filter, which Files to fetch.
         */
        where?: FileWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Files to fetch.
         */
        orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Files.
         */
        cursor?: FileWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Files from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Files.
         */
        skip?: number;
        distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
    };

    /**
     * File create
     */
    export type FileCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * The data needed to create a File.
         */
        data: XOR<FileCreateInput, FileUncheckedCreateInput>;
    };

    /**
     * File createMany
     */
    export type FileCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Files.
         */
        data: FileCreateManyInput | FileCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * File createManyAndReturn
     */
    export type FileCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * The data used to create many Files.
         */
        data: FileCreateManyInput | FileCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * File update
     */
    export type FileUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * The data needed to update a File.
         */
        data: XOR<FileUpdateInput, FileUncheckedUpdateInput>;
        /**
         * Choose, which File to update.
         */
        where: FileWhereUniqueInput;
    };

    /**
     * File updateMany
     */
    export type FileUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Files.
         */
        data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>;
        /**
         * Filter which Files to update
         */
        where?: FileWhereInput;
        /**
         * Limit how many Files to update.
         */
        limit?: number;
    };

    /**
     * File updateManyAndReturn
     */
    export type FileUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * The data used to update Files.
         */
        data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>;
        /**
         * Filter which Files to update
         */
        where?: FileWhereInput;
        /**
         * Limit how many Files to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * File upsert
     */
    export type FileUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * The filter to search for the File to update in case it exists.
         */
        where: FileWhereUniqueInput;
        /**
         * In case the File found by the `where` argument doesn't exist, create a new File with this data.
         */
        create: XOR<FileCreateInput, FileUncheckedCreateInput>;
        /**
         * In case the File was found with the provided `where` argument, update it with this data.
         */
        update: XOR<FileUpdateInput, FileUncheckedUpdateInput>;
    };

    /**
     * File delete
     */
    export type FileDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
        /**
         * Filter which File to delete.
         */
        where: FileWhereUniqueInput;
    };

    /**
     * File deleteMany
     */
    export type FileDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Files to delete
         */
        where?: FileWhereInput;
        /**
         * Limit how many Files to delete.
         */
        limit?: number;
    };

    /**
     * File without action
     */
    export type FileDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the File
         */
        select?: FileSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the File
         */
        omit?: FileOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FileInclude<ExtArgs> | null;
    };

    /**
     * Model DocumentExtractedField
     */

    export type AggregateDocumentExtractedField = {
        _count: DocumentExtractedFieldCountAggregateOutputType | null;
        _avg: DocumentExtractedFieldAvgAggregateOutputType | null;
        _sum: DocumentExtractedFieldSumAggregateOutputType | null;
        _min: DocumentExtractedFieldMinAggregateOutputType | null;
        _max: DocumentExtractedFieldMaxAggregateOutputType | null;
    };

    export type DocumentExtractedFieldAvgAggregateOutputType = {
        confidence: number | null;
    };

    export type DocumentExtractedFieldSumAggregateOutputType = {
        confidence: number | null;
    };

    export type DocumentExtractedFieldMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        type: $Enums.ExtractedFieldType | null;
        value: string | null;
        confidence: number | null;
        source: $Enums.ExtractedFieldSource | null;
        documentId: string | null;
    };

    export type DocumentExtractedFieldMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        type: $Enums.ExtractedFieldType | null;
        value: string | null;
        confidence: number | null;
        source: $Enums.ExtractedFieldSource | null;
        documentId: string | null;
    };

    export type DocumentExtractedFieldCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        type: number;
        value: number;
        confidence: number;
        source: number;
        documentId: number;
        _all: number;
    };

    export type DocumentExtractedFieldAvgAggregateInputType = {
        confidence?: true;
    };

    export type DocumentExtractedFieldSumAggregateInputType = {
        confidence?: true;
    };

    export type DocumentExtractedFieldMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        type?: true;
        value?: true;
        confidence?: true;
        source?: true;
        documentId?: true;
    };

    export type DocumentExtractedFieldMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        type?: true;
        value?: true;
        confidence?: true;
        source?: true;
        documentId?: true;
    };

    export type DocumentExtractedFieldCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        type?: true;
        value?: true;
        confidence?: true;
        source?: true;
        documentId?: true;
        _all?: true;
    };

    export type DocumentExtractedFieldAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which DocumentExtractedField to aggregate.
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentExtractedFields to fetch.
         */
        orderBy?:
            | DocumentExtractedFieldOrderByWithRelationInput
            | DocumentExtractedFieldOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: DocumentExtractedFieldWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentExtractedFields from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentExtractedFields.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned DocumentExtractedFields
         **/
        _count?: true | DocumentExtractedFieldCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: DocumentExtractedFieldAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: DocumentExtractedFieldSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: DocumentExtractedFieldMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: DocumentExtractedFieldMaxAggregateInputType;
    };

    export type GetDocumentExtractedFieldAggregateType<
        T extends DocumentExtractedFieldAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateDocumentExtractedField]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateDocumentExtractedField[P]>
            : GetScalarType<T[P], AggregateDocumentExtractedField[P]>;
    };

    export type DocumentExtractedFieldGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentExtractedFieldWhereInput;
        orderBy?:
            | DocumentExtractedFieldOrderByWithAggregationInput
            | DocumentExtractedFieldOrderByWithAggregationInput[];
        by:
            | DocumentExtractedFieldScalarFieldEnum[]
            | DocumentExtractedFieldScalarFieldEnum;
        having?: DocumentExtractedFieldScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: DocumentExtractedFieldCountAggregateInputType | true;
        _avg?: DocumentExtractedFieldAvgAggregateInputType;
        _sum?: DocumentExtractedFieldSumAggregateInputType;
        _min?: DocumentExtractedFieldMinAggregateInputType;
        _max?: DocumentExtractedFieldMaxAggregateInputType;
    };

    export type DocumentExtractedFieldGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
        documentId: string;
        _count: DocumentExtractedFieldCountAggregateOutputType | null;
        _avg: DocumentExtractedFieldAvgAggregateOutputType | null;
        _sum: DocumentExtractedFieldSumAggregateOutputType | null;
        _min: DocumentExtractedFieldMinAggregateOutputType | null;
        _max: DocumentExtractedFieldMaxAggregateOutputType | null;
    };

    type GetDocumentExtractedFieldGroupByPayload<
        T extends DocumentExtractedFieldGroupByArgs,
    > = Prisma.PrismaPromise<
        Array<
            PickEnumerable<DocumentExtractedFieldGroupByOutputType, T["by"]> & {
                [P in keyof T &
                    keyof DocumentExtractedFieldGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<
                              T[P],
                              DocumentExtractedFieldGroupByOutputType[P]
                          >
                    : GetScalarType<
                          T[P],
                          DocumentExtractedFieldGroupByOutputType[P]
                      >;
            }
        >
    >;

    export type DocumentExtractedFieldSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            type?: boolean;
            value?: boolean;
            confidence?: boolean;
            source?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentExtractedField"]
    >;

    export type DocumentExtractedFieldSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            type?: boolean;
            value?: boolean;
            confidence?: boolean;
            source?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentExtractedField"]
    >;

    export type DocumentExtractedFieldSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            type?: boolean;
            value?: boolean;
            confidence?: boolean;
            source?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentExtractedField"]
    >;

    export type DocumentExtractedFieldSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        type?: boolean;
        value?: boolean;
        confidence?: boolean;
        source?: boolean;
        documentId?: boolean;
    };

    export type DocumentExtractedFieldOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "type"
        | "value"
        | "confidence"
        | "source"
        | "documentId",
        ExtArgs["result"]["documentExtractedField"]
    >;
    export type DocumentExtractedFieldInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };
    export type DocumentExtractedFieldIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };
    export type DocumentExtractedFieldIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };

    export type $DocumentExtractedFieldPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "DocumentExtractedField";
        objects: {
            document: Prisma.$DocumentPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: $Enums.ExtractedFieldType;
                value: string;
                confidence: number;
                source: $Enums.ExtractedFieldSource;
                documentId: string;
            },
            ExtArgs["result"]["documentExtractedField"]
        >;
        composites: {};
    };

    type DocumentExtractedFieldGetPayload<
        S extends
            | boolean
            | null
            | undefined
            | DocumentExtractedFieldDefaultArgs,
    > = $Result.GetResult<Prisma.$DocumentExtractedFieldPayload, S>;

    type DocumentExtractedFieldCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        DocumentExtractedFieldFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: DocumentExtractedFieldCountAggregateInputType | true;
    };

    export interface DocumentExtractedFieldDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["DocumentExtractedField"];
            meta: { name: "DocumentExtractedField" };
        };
        /**
         * Find zero or one DocumentExtractedField that matches the filter.
         * @param {DocumentExtractedFieldFindUniqueArgs} args - Arguments to find a DocumentExtractedField
         * @example
         * // Get one DocumentExtractedField
         * const documentExtractedField = await prisma.documentExtractedField.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends DocumentExtractedFieldFindUniqueArgs>(
            args: SelectSubset<T, DocumentExtractedFieldFindUniqueArgs<ExtArgs>>
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one DocumentExtractedField that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {DocumentExtractedFieldFindUniqueOrThrowArgs} args - Arguments to find a DocumentExtractedField
         * @example
         * // Get one DocumentExtractedField
         * const documentExtractedField = await prisma.documentExtractedField.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<
            T extends DocumentExtractedFieldFindUniqueOrThrowArgs,
        >(
            args: SelectSubset<
                T,
                DocumentExtractedFieldFindUniqueOrThrowArgs<ExtArgs>
            >
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first DocumentExtractedField that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldFindFirstArgs} args - Arguments to find a DocumentExtractedField
         * @example
         * // Get one DocumentExtractedField
         * const documentExtractedField = await prisma.documentExtractedField.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends DocumentExtractedFieldFindFirstArgs>(
            args?: SelectSubset<T, DocumentExtractedFieldFindFirstArgs<ExtArgs>>
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first DocumentExtractedField that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldFindFirstOrThrowArgs} args - Arguments to find a DocumentExtractedField
         * @example
         * // Get one DocumentExtractedField
         * const documentExtractedField = await prisma.documentExtractedField.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends DocumentExtractedFieldFindFirstOrThrowArgs>(
            args?: SelectSubset<
                T,
                DocumentExtractedFieldFindFirstOrThrowArgs<ExtArgs>
            >
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more DocumentExtractedFields that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all DocumentExtractedFields
         * const documentExtractedFields = await prisma.documentExtractedField.findMany()
         *
         * // Get first 10 DocumentExtractedFields
         * const documentExtractedFields = await prisma.documentExtractedField.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const documentExtractedFieldWithIdOnly = await prisma.documentExtractedField.findMany({ select: { id: true } })
         *
         */
        findMany<T extends DocumentExtractedFieldFindManyArgs>(
            args?: SelectSubset<T, DocumentExtractedFieldFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a DocumentExtractedField.
         * @param {DocumentExtractedFieldCreateArgs} args - Arguments to create a DocumentExtractedField.
         * @example
         * // Create one DocumentExtractedField
         * const DocumentExtractedField = await prisma.documentExtractedField.create({
         *   data: {
         *     // ... data to create a DocumentExtractedField
         *   }
         * })
         *
         */
        create<T extends DocumentExtractedFieldCreateArgs>(
            args: SelectSubset<T, DocumentExtractedFieldCreateArgs<ExtArgs>>
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many DocumentExtractedFields.
         * @param {DocumentExtractedFieldCreateManyArgs} args - Arguments to create many DocumentExtractedFields.
         * @example
         * // Create many DocumentExtractedFields
         * const documentExtractedField = await prisma.documentExtractedField.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends DocumentExtractedFieldCreateManyArgs>(
            args?: SelectSubset<
                T,
                DocumentExtractedFieldCreateManyArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many DocumentExtractedFields and returns the data saved in the database.
         * @param {DocumentExtractedFieldCreateManyAndReturnArgs} args - Arguments to create many DocumentExtractedFields.
         * @example
         * // Create many DocumentExtractedFields
         * const documentExtractedField = await prisma.documentExtractedField.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many DocumentExtractedFields and only return the `id`
         * const documentExtractedFieldWithIdOnly = await prisma.documentExtractedField.createManyAndReturn({
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
            T extends DocumentExtractedFieldCreateManyAndReturnArgs,
        >(
            args?: SelectSubset<
                T,
                DocumentExtractedFieldCreateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a DocumentExtractedField.
         * @param {DocumentExtractedFieldDeleteArgs} args - Arguments to delete one DocumentExtractedField.
         * @example
         * // Delete one DocumentExtractedField
         * const DocumentExtractedField = await prisma.documentExtractedField.delete({
         *   where: {
         *     // ... filter to delete one DocumentExtractedField
         *   }
         * })
         *
         */
        delete<T extends DocumentExtractedFieldDeleteArgs>(
            args: SelectSubset<T, DocumentExtractedFieldDeleteArgs<ExtArgs>>
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one DocumentExtractedField.
         * @param {DocumentExtractedFieldUpdateArgs} args - Arguments to update one DocumentExtractedField.
         * @example
         * // Update one DocumentExtractedField
         * const documentExtractedField = await prisma.documentExtractedField.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends DocumentExtractedFieldUpdateArgs>(
            args: SelectSubset<T, DocumentExtractedFieldUpdateArgs<ExtArgs>>
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more DocumentExtractedFields.
         * @param {DocumentExtractedFieldDeleteManyArgs} args - Arguments to filter DocumentExtractedFields to delete.
         * @example
         * // Delete a few DocumentExtractedFields
         * const { count } = await prisma.documentExtractedField.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends DocumentExtractedFieldDeleteManyArgs>(
            args?: SelectSubset<
                T,
                DocumentExtractedFieldDeleteManyArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more DocumentExtractedFields.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many DocumentExtractedFields
         * const documentExtractedField = await prisma.documentExtractedField.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends DocumentExtractedFieldUpdateManyArgs>(
            args: SelectSubset<T, DocumentExtractedFieldUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more DocumentExtractedFields and returns the data updated in the database.
         * @param {DocumentExtractedFieldUpdateManyAndReturnArgs} args - Arguments to update many DocumentExtractedFields.
         * @example
         * // Update many DocumentExtractedFields
         * const documentExtractedField = await prisma.documentExtractedField.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more DocumentExtractedFields and only return the `id`
         * const documentExtractedFieldWithIdOnly = await prisma.documentExtractedField.updateManyAndReturn({
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
            T extends DocumentExtractedFieldUpdateManyAndReturnArgs,
        >(
            args: SelectSubset<
                T,
                DocumentExtractedFieldUpdateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one DocumentExtractedField.
         * @param {DocumentExtractedFieldUpsertArgs} args - Arguments to update or create a DocumentExtractedField.
         * @example
         * // Update or create a DocumentExtractedField
         * const documentExtractedField = await prisma.documentExtractedField.upsert({
         *   create: {
         *     // ... data to create a DocumentExtractedField
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the DocumentExtractedField we want to update
         *   }
         * })
         */
        upsert<T extends DocumentExtractedFieldUpsertArgs>(
            args: SelectSubset<T, DocumentExtractedFieldUpsertArgs<ExtArgs>>
        ): Prisma__DocumentExtractedFieldClient<
            $Result.GetResult<
                Prisma.$DocumentExtractedFieldPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of DocumentExtractedFields.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldCountArgs} args - Arguments to filter DocumentExtractedFields to count.
         * @example
         * // Count the number of DocumentExtractedFields
         * const count = await prisma.documentExtractedField.count({
         *   where: {
         *     // ... the filter for the DocumentExtractedFields we want to count
         *   }
         * })
         **/
        count<T extends DocumentExtractedFieldCountArgs>(
            args?: Subset<T, DocumentExtractedFieldCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          DocumentExtractedFieldCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a DocumentExtractedField.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends DocumentExtractedFieldAggregateArgs>(
            args: Subset<T, DocumentExtractedFieldAggregateArgs>
        ): Prisma.PrismaPromise<GetDocumentExtractedFieldAggregateType<T>>;

        /**
         * Group by DocumentExtractedField.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentExtractedFieldGroupByArgs} args - Group by arguments.
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
            T extends DocumentExtractedFieldGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: DocumentExtractedFieldGroupByArgs["orderBy"] }
                : { orderBy?: DocumentExtractedFieldGroupByArgs["orderBy"] },
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
                DocumentExtractedFieldGroupByArgs,
                OrderByArg
            > &
                InputErrors
        ): {} extends InputErrors
            ? GetDocumentExtractedFieldGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the DocumentExtractedField model
         */
        readonly fields: DocumentExtractedFieldFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for DocumentExtractedField.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__DocumentExtractedFieldClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            | $Result.GetResult<
                  Prisma.$DocumentPayload<ExtArgs>,
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
     * Fields of the DocumentExtractedField model
     */
    interface DocumentExtractedFieldFieldRefs {
        readonly id: FieldRef<"DocumentExtractedField", "String">;
        readonly createdAt: FieldRef<"DocumentExtractedField", "DateTime">;
        readonly updatedAt: FieldRef<"DocumentExtractedField", "DateTime">;
        readonly type: FieldRef<"DocumentExtractedField", "ExtractedFieldType">;
        readonly value: FieldRef<"DocumentExtractedField", "String">;
        readonly confidence: FieldRef<"DocumentExtractedField", "Float">;
        readonly source: FieldRef<
            "DocumentExtractedField",
            "ExtractedFieldSource"
        >;
        readonly documentId: FieldRef<"DocumentExtractedField", "String">;
    }

    // Custom InputTypes
    /**
     * DocumentExtractedField findUnique
     */
    export type DocumentExtractedFieldFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentExtractedField to fetch.
         */
        where: DocumentExtractedFieldWhereUniqueInput;
    };

    /**
     * DocumentExtractedField findUniqueOrThrow
     */
    export type DocumentExtractedFieldFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentExtractedField to fetch.
         */
        where: DocumentExtractedFieldWhereUniqueInput;
    };

    /**
     * DocumentExtractedField findFirst
     */
    export type DocumentExtractedFieldFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentExtractedField to fetch.
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentExtractedFields to fetch.
         */
        orderBy?:
            | DocumentExtractedFieldOrderByWithRelationInput
            | DocumentExtractedFieldOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for DocumentExtractedFields.
         */
        cursor?: DocumentExtractedFieldWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentExtractedFields from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentExtractedFields.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of DocumentExtractedFields.
         */
        distinct?:
            | DocumentExtractedFieldScalarFieldEnum
            | DocumentExtractedFieldScalarFieldEnum[];
    };

    /**
     * DocumentExtractedField findFirstOrThrow
     */
    export type DocumentExtractedFieldFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentExtractedField to fetch.
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentExtractedFields to fetch.
         */
        orderBy?:
            | DocumentExtractedFieldOrderByWithRelationInput
            | DocumentExtractedFieldOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for DocumentExtractedFields.
         */
        cursor?: DocumentExtractedFieldWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentExtractedFields from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentExtractedFields.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of DocumentExtractedFields.
         */
        distinct?:
            | DocumentExtractedFieldScalarFieldEnum
            | DocumentExtractedFieldScalarFieldEnum[];
    };

    /**
     * DocumentExtractedField findMany
     */
    export type DocumentExtractedFieldFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentExtractedFields to fetch.
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentExtractedFields to fetch.
         */
        orderBy?:
            | DocumentExtractedFieldOrderByWithRelationInput
            | DocumentExtractedFieldOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing DocumentExtractedFields.
         */
        cursor?: DocumentExtractedFieldWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentExtractedFields from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentExtractedFields.
         */
        skip?: number;
        distinct?:
            | DocumentExtractedFieldScalarFieldEnum
            | DocumentExtractedFieldScalarFieldEnum[];
    };

    /**
     * DocumentExtractedField create
     */
    export type DocumentExtractedFieldCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * The data needed to create a DocumentExtractedField.
         */
        data: XOR<
            DocumentExtractedFieldCreateInput,
            DocumentExtractedFieldUncheckedCreateInput
        >;
    };

    /**
     * DocumentExtractedField createMany
     */
    export type DocumentExtractedFieldCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many DocumentExtractedFields.
         */
        data:
            | DocumentExtractedFieldCreateManyInput
            | DocumentExtractedFieldCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * DocumentExtractedField createManyAndReturn
     */
    export type DocumentExtractedFieldCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * The data used to create many DocumentExtractedFields.
         */
        data:
            | DocumentExtractedFieldCreateManyInput
            | DocumentExtractedFieldCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * DocumentExtractedField update
     */
    export type DocumentExtractedFieldUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * The data needed to update a DocumentExtractedField.
         */
        data: XOR<
            DocumentExtractedFieldUpdateInput,
            DocumentExtractedFieldUncheckedUpdateInput
        >;
        /**
         * Choose, which DocumentExtractedField to update.
         */
        where: DocumentExtractedFieldWhereUniqueInput;
    };

    /**
     * DocumentExtractedField updateMany
     */
    export type DocumentExtractedFieldUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update DocumentExtractedFields.
         */
        data: XOR<
            DocumentExtractedFieldUpdateManyMutationInput,
            DocumentExtractedFieldUncheckedUpdateManyInput
        >;
        /**
         * Filter which DocumentExtractedFields to update
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * Limit how many DocumentExtractedFields to update.
         */
        limit?: number;
    };

    /**
     * DocumentExtractedField updateManyAndReturn
     */
    export type DocumentExtractedFieldUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * The data used to update DocumentExtractedFields.
         */
        data: XOR<
            DocumentExtractedFieldUpdateManyMutationInput,
            DocumentExtractedFieldUncheckedUpdateManyInput
        >;
        /**
         * Filter which DocumentExtractedFields to update
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * Limit how many DocumentExtractedFields to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * DocumentExtractedField upsert
     */
    export type DocumentExtractedFieldUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * The filter to search for the DocumentExtractedField to update in case it exists.
         */
        where: DocumentExtractedFieldWhereUniqueInput;
        /**
         * In case the DocumentExtractedField found by the `where` argument doesn't exist, create a new DocumentExtractedField with this data.
         */
        create: XOR<
            DocumentExtractedFieldCreateInput,
            DocumentExtractedFieldUncheckedCreateInput
        >;
        /**
         * In case the DocumentExtractedField was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            DocumentExtractedFieldUpdateInput,
            DocumentExtractedFieldUncheckedUpdateInput
        >;
    };

    /**
     * DocumentExtractedField delete
     */
    export type DocumentExtractedFieldDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
        /**
         * Filter which DocumentExtractedField to delete.
         */
        where: DocumentExtractedFieldWhereUniqueInput;
    };

    /**
     * DocumentExtractedField deleteMany
     */
    export type DocumentExtractedFieldDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which DocumentExtractedFields to delete
         */
        where?: DocumentExtractedFieldWhereInput;
        /**
         * Limit how many DocumentExtractedFields to delete.
         */
        limit?: number;
    };

    /**
     * DocumentExtractedField without action
     */
    export type DocumentExtractedFieldDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentExtractedField
         */
        select?: DocumentExtractedFieldSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentExtractedField
         */
        omit?: DocumentExtractedFieldOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentExtractedFieldInclude<ExtArgs> | null;
    };

    /**
     * Model ActionLog
     */

    export type AggregateActionLog = {
        _count: ActionLogCountAggregateOutputType | null;
        _min: ActionLogMinAggregateOutputType | null;
        _max: ActionLogMaxAggregateOutputType | null;
    };

    export type ActionLogMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        type: $Enums.ActionLogTypes | null;
        documentName: string | null;
        documentId: string | null;
        actorId: string | null;
        actorFullName: string | null;
        actorAvatarUrl: string | null;
        userId: string | null;
        userFullName: string | null;
        userAvatarUrl: string | null;
    };

    export type ActionLogMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        type: $Enums.ActionLogTypes | null;
        documentName: string | null;
        documentId: string | null;
        actorId: string | null;
        actorFullName: string | null;
        actorAvatarUrl: string | null;
        userId: string | null;
        userFullName: string | null;
        userAvatarUrl: string | null;
    };

    export type ActionLogCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        type: number;
        documentName: number;
        documentId: number;
        actorId: number;
        actorFullName: number;
        actorAvatarUrl: number;
        userId: number;
        userFullName: number;
        userAvatarUrl: number;
        _all: number;
    };

    export type ActionLogMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        type?: true;
        documentName?: true;
        documentId?: true;
        actorId?: true;
        actorFullName?: true;
        actorAvatarUrl?: true;
        userId?: true;
        userFullName?: true;
        userAvatarUrl?: true;
    };

    export type ActionLogMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        type?: true;
        documentName?: true;
        documentId?: true;
        actorId?: true;
        actorFullName?: true;
        actorAvatarUrl?: true;
        userId?: true;
        userFullName?: true;
        userAvatarUrl?: true;
    };

    export type ActionLogCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        type?: true;
        documentName?: true;
        documentId?: true;
        actorId?: true;
        actorFullName?: true;
        actorAvatarUrl?: true;
        userId?: true;
        userFullName?: true;
        userAvatarUrl?: true;
        _all?: true;
    };

    export type ActionLogAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ActionLog to aggregate.
         */
        where?: ActionLogWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ActionLogs to fetch.
         */
        orderBy?:
            | ActionLogOrderByWithRelationInput
            | ActionLogOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ActionLogWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ActionLogs from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ActionLogs.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned ActionLogs
         **/
        _count?: true | ActionLogCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ActionLogMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ActionLogMaxAggregateInputType;
    };

    export type GetActionLogAggregateType<T extends ActionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActionLog]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateActionLog[P]>
            : GetScalarType<T[P], AggregateActionLog[P]>;
    };

    export type ActionLogGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ActionLogWhereInput;
        orderBy?:
            | ActionLogOrderByWithAggregationInput
            | ActionLogOrderByWithAggregationInput[];
        by: ActionLogScalarFieldEnum[] | ActionLogScalarFieldEnum;
        having?: ActionLogScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ActionLogCountAggregateInputType | true;
        _min?: ActionLogMinAggregateInputType;
        _max?: ActionLogMaxAggregateInputType;
    };

    export type ActionLogGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: $Enums.ActionLogTypes;
        documentName: string | null;
        documentId: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl: string | null;
        userId: string | null;
        userFullName: string | null;
        userAvatarUrl: string | null;
        _count: ActionLogCountAggregateOutputType | null;
        _min: ActionLogMinAggregateOutputType | null;
        _max: ActionLogMaxAggregateOutputType | null;
    };

    type GetActionLogGroupByPayload<T extends ActionLogGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<ActionLogGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof ActionLogGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], ActionLogGroupByOutputType[P]>
                        : GetScalarType<T[P], ActionLogGroupByOutputType[P]>;
                }
            >
        >;

    export type ActionLogSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            type?: boolean;
            documentName?: boolean;
            documentId?: boolean;
            actorId?: boolean;
            actorFullName?: boolean;
            actorAvatarUrl?: boolean;
            userId?: boolean;
            userFullName?: boolean;
            userAvatarUrl?: boolean;
            document?: boolean | ActionLog$documentArgs<ExtArgs>;
        },
        ExtArgs["result"]["actionLog"]
    >;

    export type ActionLogSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            type?: boolean;
            documentName?: boolean;
            documentId?: boolean;
            actorId?: boolean;
            actorFullName?: boolean;
            actorAvatarUrl?: boolean;
            userId?: boolean;
            userFullName?: boolean;
            userAvatarUrl?: boolean;
            document?: boolean | ActionLog$documentArgs<ExtArgs>;
        },
        ExtArgs["result"]["actionLog"]
    >;

    export type ActionLogSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            type?: boolean;
            documentName?: boolean;
            documentId?: boolean;
            actorId?: boolean;
            actorFullName?: boolean;
            actorAvatarUrl?: boolean;
            userId?: boolean;
            userFullName?: boolean;
            userAvatarUrl?: boolean;
            document?: boolean | ActionLog$documentArgs<ExtArgs>;
        },
        ExtArgs["result"]["actionLog"]
    >;

    export type ActionLogSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        type?: boolean;
        documentName?: boolean;
        documentId?: boolean;
        actorId?: boolean;
        actorFullName?: boolean;
        actorAvatarUrl?: boolean;
        userId?: boolean;
        userFullName?: boolean;
        userAvatarUrl?: boolean;
    };

    export type ActionLogOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "type"
        | "documentName"
        | "documentId"
        | "actorId"
        | "actorFullName"
        | "actorAvatarUrl"
        | "userId"
        | "userFullName"
        | "userAvatarUrl",
        ExtArgs["result"]["actionLog"]
    >;
    export type ActionLogInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | ActionLog$documentArgs<ExtArgs>;
    };
    export type ActionLogIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | ActionLog$documentArgs<ExtArgs>;
    };
    export type ActionLogIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | ActionLog$documentArgs<ExtArgs>;
    };

    export type $ActionLogPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "ActionLog";
        objects: {
            document: Prisma.$DocumentPayload<ExtArgs> | null;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: $Enums.ActionLogTypes;
                documentName: string | null;
                documentId: string | null;
                actorId: string;
                actorFullName: string;
                actorAvatarUrl: string | null;
                userId: string | null;
                userFullName: string | null;
                userAvatarUrl: string | null;
            },
            ExtArgs["result"]["actionLog"]
        >;
        composites: {};
    };

    type ActionLogGetPayload<
        S extends boolean | null | undefined | ActionLogDefaultArgs,
    > = $Result.GetResult<Prisma.$ActionLogPayload, S>;

    type ActionLogCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        ActionLogFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: ActionLogCountAggregateInputType | true;
    };

    export interface ActionLogDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["ActionLog"];
            meta: { name: "ActionLog" };
        };
        /**
         * Find zero or one ActionLog that matches the filter.
         * @param {ActionLogFindUniqueArgs} args - Arguments to find a ActionLog
         * @example
         * // Get one ActionLog
         * const actionLog = await prisma.actionLog.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ActionLogFindUniqueArgs>(
            args: SelectSubset<T, ActionLogFindUniqueArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one ActionLog that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ActionLogFindUniqueOrThrowArgs} args - Arguments to find a ActionLog
         * @example
         * // Get one ActionLog
         * const actionLog = await prisma.actionLog.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ActionLogFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ActionLogFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ActionLog that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogFindFirstArgs} args - Arguments to find a ActionLog
         * @example
         * // Get one ActionLog
         * const actionLog = await prisma.actionLog.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ActionLogFindFirstArgs>(
            args?: SelectSubset<T, ActionLogFindFirstArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ActionLog that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogFindFirstOrThrowArgs} args - Arguments to find a ActionLog
         * @example
         * // Get one ActionLog
         * const actionLog = await prisma.actionLog.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ActionLogFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ActionLogFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more ActionLogs that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ActionLogs
         * const actionLogs = await prisma.actionLog.findMany()
         *
         * // Get first 10 ActionLogs
         * const actionLogs = await prisma.actionLog.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const actionLogWithIdOnly = await prisma.actionLog.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ActionLogFindManyArgs>(
            args?: SelectSubset<T, ActionLogFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a ActionLog.
         * @param {ActionLogCreateArgs} args - Arguments to create a ActionLog.
         * @example
         * // Create one ActionLog
         * const ActionLog = await prisma.actionLog.create({
         *   data: {
         *     // ... data to create a ActionLog
         *   }
         * })
         *
         */
        create<T extends ActionLogCreateArgs>(
            args: SelectSubset<T, ActionLogCreateArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many ActionLogs.
         * @param {ActionLogCreateManyArgs} args - Arguments to create many ActionLogs.
         * @example
         * // Create many ActionLogs
         * const actionLog = await prisma.actionLog.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ActionLogCreateManyArgs>(
            args?: SelectSubset<T, ActionLogCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many ActionLogs and returns the data saved in the database.
         * @param {ActionLogCreateManyAndReturnArgs} args - Arguments to create many ActionLogs.
         * @example
         * // Create many ActionLogs
         * const actionLog = await prisma.actionLog.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ActionLogs and only return the `id`
         * const actionLogWithIdOnly = await prisma.actionLog.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ActionLogCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ActionLogCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a ActionLog.
         * @param {ActionLogDeleteArgs} args - Arguments to delete one ActionLog.
         * @example
         * // Delete one ActionLog
         * const ActionLog = await prisma.actionLog.delete({
         *   where: {
         *     // ... filter to delete one ActionLog
         *   }
         * })
         *
         */
        delete<T extends ActionLogDeleteArgs>(
            args: SelectSubset<T, ActionLogDeleteArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one ActionLog.
         * @param {ActionLogUpdateArgs} args - Arguments to update one ActionLog.
         * @example
         * // Update one ActionLog
         * const actionLog = await prisma.actionLog.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ActionLogUpdateArgs>(
            args: SelectSubset<T, ActionLogUpdateArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more ActionLogs.
         * @param {ActionLogDeleteManyArgs} args - Arguments to filter ActionLogs to delete.
         * @example
         * // Delete a few ActionLogs
         * const { count } = await prisma.actionLog.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ActionLogDeleteManyArgs>(
            args?: SelectSubset<T, ActionLogDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ActionLogs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ActionLogs
         * const actionLog = await prisma.actionLog.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ActionLogUpdateManyArgs>(
            args: SelectSubset<T, ActionLogUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ActionLogs and returns the data updated in the database.
         * @param {ActionLogUpdateManyAndReturnArgs} args - Arguments to update many ActionLogs.
         * @example
         * // Update many ActionLogs
         * const actionLog = await prisma.actionLog.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more ActionLogs and only return the `id`
         * const actionLogWithIdOnly = await prisma.actionLog.updateManyAndReturn({
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
        updateManyAndReturn<T extends ActionLogUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ActionLogUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one ActionLog.
         * @param {ActionLogUpsertArgs} args - Arguments to update or create a ActionLog.
         * @example
         * // Update or create a ActionLog
         * const actionLog = await prisma.actionLog.upsert({
         *   create: {
         *     // ... data to create a ActionLog
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ActionLog we want to update
         *   }
         * })
         */
        upsert<T extends ActionLogUpsertArgs>(
            args: SelectSubset<T, ActionLogUpsertArgs<ExtArgs>>
        ): Prisma__ActionLogClient<
            $Result.GetResult<
                Prisma.$ActionLogPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of ActionLogs.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogCountArgs} args - Arguments to filter ActionLogs to count.
         * @example
         * // Count the number of ActionLogs
         * const count = await prisma.actionLog.count({
         *   where: {
         *     // ... the filter for the ActionLogs we want to count
         *   }
         * })
         **/
        count<T extends ActionLogCountArgs>(
            args?: Subset<T, ActionLogCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          ActionLogCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a ActionLog.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ActionLogAggregateArgs>(
            args: Subset<T, ActionLogAggregateArgs>
        ): Prisma.PrismaPromise<GetActionLogAggregateType<T>>;

        /**
         * Group by ActionLog.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ActionLogGroupByArgs} args - Group by arguments.
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
            T extends ActionLogGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ActionLogGroupByArgs["orderBy"] }
                : { orderBy?: ActionLogGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, ActionLogGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetActionLogGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the ActionLog model
         */
        readonly fields: ActionLogFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ActionLog.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ActionLogClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        document<T extends ActionLog$documentArgs<ExtArgs> = {}>(
            args?: Subset<T, ActionLog$documentArgs<ExtArgs>>
        ): Prisma__DocumentClient<
            $Result.GetResult<
                Prisma.$DocumentPayload<ExtArgs>,
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
     * Fields of the ActionLog model
     */
    interface ActionLogFieldRefs {
        readonly id: FieldRef<"ActionLog", "String">;
        readonly createdAt: FieldRef<"ActionLog", "DateTime">;
        readonly updatedAt: FieldRef<"ActionLog", "DateTime">;
        readonly type: FieldRef<"ActionLog", "ActionLogTypes">;
        readonly documentName: FieldRef<"ActionLog", "String">;
        readonly documentId: FieldRef<"ActionLog", "String">;
        readonly actorId: FieldRef<"ActionLog", "String">;
        readonly actorFullName: FieldRef<"ActionLog", "String">;
        readonly actorAvatarUrl: FieldRef<"ActionLog", "String">;
        readonly userId: FieldRef<"ActionLog", "String">;
        readonly userFullName: FieldRef<"ActionLog", "String">;
        readonly userAvatarUrl: FieldRef<"ActionLog", "String">;
    }

    // Custom InputTypes
    /**
     * ActionLog findUnique
     */
    export type ActionLogFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * Filter, which ActionLog to fetch.
         */
        where: ActionLogWhereUniqueInput;
    };

    /**
     * ActionLog findUniqueOrThrow
     */
    export type ActionLogFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * Filter, which ActionLog to fetch.
         */
        where: ActionLogWhereUniqueInput;
    };

    /**
     * ActionLog findFirst
     */
    export type ActionLogFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * Filter, which ActionLog to fetch.
         */
        where?: ActionLogWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ActionLogs to fetch.
         */
        orderBy?:
            | ActionLogOrderByWithRelationInput
            | ActionLogOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ActionLogs.
         */
        cursor?: ActionLogWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ActionLogs from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ActionLogs.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ActionLogs.
         */
        distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[];
    };

    /**
     * ActionLog findFirstOrThrow
     */
    export type ActionLogFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * Filter, which ActionLog to fetch.
         */
        where?: ActionLogWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ActionLogs to fetch.
         */
        orderBy?:
            | ActionLogOrderByWithRelationInput
            | ActionLogOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ActionLogs.
         */
        cursor?: ActionLogWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ActionLogs from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ActionLogs.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ActionLogs.
         */
        distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[];
    };

    /**
     * ActionLog findMany
     */
    export type ActionLogFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * Filter, which ActionLogs to fetch.
         */
        where?: ActionLogWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ActionLogs to fetch.
         */
        orderBy?:
            | ActionLogOrderByWithRelationInput
            | ActionLogOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing ActionLogs.
         */
        cursor?: ActionLogWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ActionLogs from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ActionLogs.
         */
        skip?: number;
        distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[];
    };

    /**
     * ActionLog create
     */
    export type ActionLogCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * The data needed to create a ActionLog.
         */
        data: XOR<ActionLogCreateInput, ActionLogUncheckedCreateInput>;
    };

    /**
     * ActionLog createMany
     */
    export type ActionLogCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many ActionLogs.
         */
        data: ActionLogCreateManyInput | ActionLogCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * ActionLog createManyAndReturn
     */
    export type ActionLogCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * The data used to create many ActionLogs.
         */
        data: ActionLogCreateManyInput | ActionLogCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ActionLog update
     */
    export type ActionLogUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * The data needed to update a ActionLog.
         */
        data: XOR<ActionLogUpdateInput, ActionLogUncheckedUpdateInput>;
        /**
         * Choose, which ActionLog to update.
         */
        where: ActionLogWhereUniqueInput;
    };

    /**
     * ActionLog updateMany
     */
    export type ActionLogUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update ActionLogs.
         */
        data: XOR<
            ActionLogUpdateManyMutationInput,
            ActionLogUncheckedUpdateManyInput
        >;
        /**
         * Filter which ActionLogs to update
         */
        where?: ActionLogWhereInput;
        /**
         * Limit how many ActionLogs to update.
         */
        limit?: number;
    };

    /**
     * ActionLog updateManyAndReturn
     */
    export type ActionLogUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * The data used to update ActionLogs.
         */
        data: XOR<
            ActionLogUpdateManyMutationInput,
            ActionLogUncheckedUpdateManyInput
        >;
        /**
         * Filter which ActionLogs to update
         */
        where?: ActionLogWhereInput;
        /**
         * Limit how many ActionLogs to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ActionLog upsert
     */
    export type ActionLogUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * The filter to search for the ActionLog to update in case it exists.
         */
        where: ActionLogWhereUniqueInput;
        /**
         * In case the ActionLog found by the `where` argument doesn't exist, create a new ActionLog with this data.
         */
        create: XOR<ActionLogCreateInput, ActionLogUncheckedCreateInput>;
        /**
         * In case the ActionLog was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ActionLogUpdateInput, ActionLogUncheckedUpdateInput>;
    };

    /**
     * ActionLog delete
     */
    export type ActionLogDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
        /**
         * Filter which ActionLog to delete.
         */
        where: ActionLogWhereUniqueInput;
    };

    /**
     * ActionLog deleteMany
     */
    export type ActionLogDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ActionLogs to delete
         */
        where?: ActionLogWhereInput;
        /**
         * Limit how many ActionLogs to delete.
         */
        limit?: number;
    };

    /**
     * ActionLog.document
     */
    export type ActionLog$documentArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Document
         */
        select?: DocumentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Document
         */
        omit?: DocumentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentInclude<ExtArgs> | null;
        where?: DocumentWhereInput;
    };

    /**
     * ActionLog without action
     */
    export type ActionLogDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ActionLog
         */
        select?: ActionLogSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ActionLog
         */
        omit?: ActionLogOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ActionLogInclude<ExtArgs> | null;
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

    export const DocumentScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        status: "status";
        tags: "tags";
        name: "name";
        expiresAt: "expiresAt";
        riskLevel: "riskLevel";
    };

    export type DocumentScalarFieldEnum =
        (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];

    export const DocumentTagScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        documentId: "documentId";
        tagId: "tagId";
    };

    export type DocumentTagScalarFieldEnum =
        (typeof DocumentTagScalarFieldEnum)[keyof typeof DocumentTagScalarFieldEnum];

    export const TagScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        tag: "tag";
    };

    export type TagScalarFieldEnum =
        (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

    export const FileScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        key: "key";
        fileSize: "fileSize";
        mimeType: "mimeType";
        url: "url";
        urlExpiresAt: "urlExpiresAt";
        width: "width";
        height: "height";
        documentId: "documentId";
    };

    export type FileScalarFieldEnum =
        (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];

    export const DocumentExtractedFieldScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        type: "type";
        value: "value";
        confidence: "confidence";
        source: "source";
        documentId: "documentId";
    };

    export type DocumentExtractedFieldScalarFieldEnum =
        (typeof DocumentExtractedFieldScalarFieldEnum)[keyof typeof DocumentExtractedFieldScalarFieldEnum];

    export const ActionLogScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        type: "type";
        documentName: "documentName";
        documentId: "documentId";
        actorId: "actorId";
        actorFullName: "actorFullName";
        actorAvatarUrl: "actorAvatarUrl";
        userId: "userId";
        userFullName: "userFullName";
        userAvatarUrl: "userAvatarUrl";
    };

    export type ActionLogScalarFieldEnum =
        (typeof ActionLogScalarFieldEnum)[keyof typeof ActionLogScalarFieldEnum];

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

    export const NullsOrder: {
        first: "first";
        last: "last";
    };

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

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
     * Reference to a field of type 'DocumentStatuses'
     */
    export type EnumDocumentStatusesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "DocumentStatuses">;

    /**
     * Reference to a field of type 'DocumentStatuses[]'
     */
    export type ListEnumDocumentStatusesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "DocumentStatuses[]">;

    /**
     * Reference to a field of type 'RiskLevel'
     */
    export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "RiskLevel"
    >;

    /**
     * Reference to a field of type 'RiskLevel[]'
     */
    export type ListEnumRiskLevelFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "RiskLevel[]">;

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
     * Reference to a field of type 'ExtractedFieldType'
     */
    export type EnumExtractedFieldTypeFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldType">;

    /**
     * Reference to a field of type 'ExtractedFieldType[]'
     */
    export type ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldType[]">;

    /**
     * Reference to a field of type 'ExtractedFieldSource'
     */
    export type EnumExtractedFieldSourceFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldSource">;

    /**
     * Reference to a field of type 'ExtractedFieldSource[]'
     */
    export type ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldSource[]">;

    /**
     * Reference to a field of type 'ActionLogTypes'
     */
    export type EnumActionLogTypesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ActionLogTypes">;

    /**
     * Reference to a field of type 'ActionLogTypes[]'
     */
    export type ListEnumActionLogTypesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ActionLogTypes[]">;

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

    export type DocumentWhereInput = {
        AND?: DocumentWhereInput | DocumentWhereInput[];
        OR?: DocumentWhereInput[];
        NOT?: DocumentWhereInput | DocumentWhereInput[];
        id?: StringFilter<"Document"> | string;
        createdAt?: DateTimeFilter<"Document"> | Date | string;
        updatedAt?: DateTimeFilter<"Document"> | Date | string;
        status?:
            | EnumDocumentStatusesFilter<"Document">
            | $Enums.DocumentStatuses;
        tags?: StringNullableListFilter<"Document">;
        name?: StringFilter<"Document"> | string;
        expiresAt?: DateTimeNullableFilter<"Document"> | Date | string | null;
        riskLevel?:
            | EnumRiskLevelNullableFilter<"Document">
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldListRelationFilter;
        actionLogs?: ActionLogListRelationFilter;
        files?: FileListRelationFilter;
        documentTags?: DocumentTagListRelationFilter;
    };

    export type DocumentOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        tags?: SortOrder;
        name?: SortOrder;
        expiresAt?: SortOrderInput | SortOrder;
        riskLevel?: SortOrderInput | SortOrder;
        documentExtractedFields?: DocumentExtractedFieldOrderByRelationAggregateInput;
        actionLogs?: ActionLogOrderByRelationAggregateInput;
        files?: FileOrderByRelationAggregateInput;
        documentTags?: DocumentTagOrderByRelationAggregateInput;
    };

    export type DocumentWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            name?: string;
            AND?: DocumentWhereInput | DocumentWhereInput[];
            OR?: DocumentWhereInput[];
            NOT?: DocumentWhereInput | DocumentWhereInput[];
            createdAt?: DateTimeFilter<"Document"> | Date | string;
            updatedAt?: DateTimeFilter<"Document"> | Date | string;
            status?:
                | EnumDocumentStatusesFilter<"Document">
                | $Enums.DocumentStatuses;
            tags?: StringNullableListFilter<"Document">;
            expiresAt?:
                | DateTimeNullableFilter<"Document">
                | Date
                | string
                | null;
            riskLevel?:
                | EnumRiskLevelNullableFilter<"Document">
                | $Enums.RiskLevel
                | null;
            documentExtractedFields?: DocumentExtractedFieldListRelationFilter;
            actionLogs?: ActionLogListRelationFilter;
            files?: FileListRelationFilter;
            documentTags?: DocumentTagListRelationFilter;
        },
        "id" | "name"
    >;

    export type DocumentOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        tags?: SortOrder;
        name?: SortOrder;
        expiresAt?: SortOrderInput | SortOrder;
        riskLevel?: SortOrderInput | SortOrder;
        _count?: DocumentCountOrderByAggregateInput;
        _max?: DocumentMaxOrderByAggregateInput;
        _min?: DocumentMinOrderByAggregateInput;
    };

    export type DocumentScalarWhereWithAggregatesInput = {
        AND?:
            | DocumentScalarWhereWithAggregatesInput
            | DocumentScalarWhereWithAggregatesInput[];
        OR?: DocumentScalarWhereWithAggregatesInput[];
        NOT?:
            | DocumentScalarWhereWithAggregatesInput
            | DocumentScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Document"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string;
        status?:
            | EnumDocumentStatusesWithAggregatesFilter<"Document">
            | $Enums.DocumentStatuses;
        tags?: StringNullableListFilter<"Document">;
        name?: StringWithAggregatesFilter<"Document"> | string;
        expiresAt?:
            | DateTimeNullableWithAggregatesFilter<"Document">
            | Date
            | string
            | null;
        riskLevel?:
            | EnumRiskLevelNullableWithAggregatesFilter<"Document">
            | $Enums.RiskLevel
            | null;
    };

    export type DocumentTagWhereInput = {
        AND?: DocumentTagWhereInput | DocumentTagWhereInput[];
        OR?: DocumentTagWhereInput[];
        NOT?: DocumentTagWhereInput | DocumentTagWhereInput[];
        id?: StringFilter<"DocumentTag"> | string;
        createdAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        documentId?: StringFilter<"DocumentTag"> | string;
        tagId?: StringFilter<"DocumentTag"> | string;
        document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
        tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
    };

    export type DocumentTagOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        documentId?: SortOrder;
        tagId?: SortOrder;
        document?: DocumentOrderByWithRelationInput;
        tag?: TagOrderByWithRelationInput;
    };

    export type DocumentTagWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: DocumentTagWhereInput | DocumentTagWhereInput[];
            OR?: DocumentTagWhereInput[];
            NOT?: DocumentTagWhereInput | DocumentTagWhereInput[];
            createdAt?: DateTimeFilter<"DocumentTag"> | Date | string;
            updatedAt?: DateTimeFilter<"DocumentTag"> | Date | string;
            documentId?: StringFilter<"DocumentTag"> | string;
            tagId?: StringFilter<"DocumentTag"> | string;
            document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
            tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
        },
        "id"
    >;

    export type DocumentTagOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        documentId?: SortOrder;
        tagId?: SortOrder;
        _count?: DocumentTagCountOrderByAggregateInput;
        _max?: DocumentTagMaxOrderByAggregateInput;
        _min?: DocumentTagMinOrderByAggregateInput;
    };

    export type DocumentTagScalarWhereWithAggregatesInput = {
        AND?:
            | DocumentTagScalarWhereWithAggregatesInput
            | DocumentTagScalarWhereWithAggregatesInput[];
        OR?: DocumentTagScalarWhereWithAggregatesInput[];
        NOT?:
            | DocumentTagScalarWhereWithAggregatesInput
            | DocumentTagScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"DocumentTag"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"DocumentTag"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"DocumentTag"> | Date | string;
        documentId?: StringWithAggregatesFilter<"DocumentTag"> | string;
        tagId?: StringWithAggregatesFilter<"DocumentTag"> | string;
    };

    export type TagWhereInput = {
        AND?: TagWhereInput | TagWhereInput[];
        OR?: TagWhereInput[];
        NOT?: TagWhereInput | TagWhereInput[];
        id?: StringFilter<"Tag"> | string;
        createdAt?: DateTimeFilter<"Tag"> | Date | string;
        updatedAt?: DateTimeFilter<"Tag"> | Date | string;
        tag?: StringFilter<"Tag"> | string;
        documentTags?: DocumentTagListRelationFilter;
    };

    export type TagOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        tag?: SortOrder;
        documentTags?: DocumentTagOrderByRelationAggregateInput;
    };

    export type TagWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            tag?: string;
            AND?: TagWhereInput | TagWhereInput[];
            OR?: TagWhereInput[];
            NOT?: TagWhereInput | TagWhereInput[];
            createdAt?: DateTimeFilter<"Tag"> | Date | string;
            updatedAt?: DateTimeFilter<"Tag"> | Date | string;
            documentTags?: DocumentTagListRelationFilter;
        },
        "id" | "tag"
    >;

    export type TagOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        tag?: SortOrder;
        _count?: TagCountOrderByAggregateInput;
        _max?: TagMaxOrderByAggregateInput;
        _min?: TagMinOrderByAggregateInput;
    };

    export type TagScalarWhereWithAggregatesInput = {
        AND?:
            | TagScalarWhereWithAggregatesInput
            | TagScalarWhereWithAggregatesInput[];
        OR?: TagScalarWhereWithAggregatesInput[];
        NOT?:
            | TagScalarWhereWithAggregatesInput
            | TagScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Tag"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string;
        tag?: StringWithAggregatesFilter<"Tag"> | string;
    };

    export type FileWhereInput = {
        AND?: FileWhereInput | FileWhereInput[];
        OR?: FileWhereInput[];
        NOT?: FileWhereInput | FileWhereInput[];
        id?: StringFilter<"File"> | string;
        createdAt?: DateTimeFilter<"File"> | Date | string;
        updatedAt?: DateTimeFilter<"File"> | Date | string;
        key?: StringFilter<"File"> | string;
        fileSize?: FloatFilter<"File"> | number;
        mimeType?: StringFilter<"File"> | string;
        url?: StringFilter<"File"> | string;
        urlExpiresAt?: DateTimeFilter<"File"> | Date | string;
        width?: FloatNullableFilter<"File"> | number | null;
        height?: FloatNullableFilter<"File"> | number | null;
        documentId?: StringFilter<"File"> | string;
        document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    };

    export type FileOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        urlExpiresAt?: SortOrder;
        width?: SortOrderInput | SortOrder;
        height?: SortOrderInput | SortOrder;
        documentId?: SortOrder;
        document?: DocumentOrderByWithRelationInput;
    };

    export type FileWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            key?: string;
            AND?: FileWhereInput | FileWhereInput[];
            OR?: FileWhereInput[];
            NOT?: FileWhereInput | FileWhereInput[];
            createdAt?: DateTimeFilter<"File"> | Date | string;
            updatedAt?: DateTimeFilter<"File"> | Date | string;
            fileSize?: FloatFilter<"File"> | number;
            mimeType?: StringFilter<"File"> | string;
            url?: StringFilter<"File"> | string;
            urlExpiresAt?: DateTimeFilter<"File"> | Date | string;
            width?: FloatNullableFilter<"File"> | number | null;
            height?: FloatNullableFilter<"File"> | number | null;
            documentId?: StringFilter<"File"> | string;
            document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
        },
        "id" | "key"
    >;

    export type FileOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        urlExpiresAt?: SortOrder;
        width?: SortOrderInput | SortOrder;
        height?: SortOrderInput | SortOrder;
        documentId?: SortOrder;
        _count?: FileCountOrderByAggregateInput;
        _avg?: FileAvgOrderByAggregateInput;
        _max?: FileMaxOrderByAggregateInput;
        _min?: FileMinOrderByAggregateInput;
        _sum?: FileSumOrderByAggregateInput;
    };

    export type FileScalarWhereWithAggregatesInput = {
        AND?:
            | FileScalarWhereWithAggregatesInput
            | FileScalarWhereWithAggregatesInput[];
        OR?: FileScalarWhereWithAggregatesInput[];
        NOT?:
            | FileScalarWhereWithAggregatesInput
            | FileScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"File"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
        key?: StringWithAggregatesFilter<"File"> | string;
        fileSize?: FloatWithAggregatesFilter<"File"> | number;
        mimeType?: StringWithAggregatesFilter<"File"> | string;
        url?: StringWithAggregatesFilter<"File"> | string;
        urlExpiresAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
        width?: FloatNullableWithAggregatesFilter<"File"> | number | null;
        height?: FloatNullableWithAggregatesFilter<"File"> | number | null;
        documentId?: StringWithAggregatesFilter<"File"> | string;
    };

    export type DocumentExtractedFieldWhereInput = {
        AND?:
            | DocumentExtractedFieldWhereInput
            | DocumentExtractedFieldWhereInput[];
        OR?: DocumentExtractedFieldWhereInput[];
        NOT?:
            | DocumentExtractedFieldWhereInput
            | DocumentExtractedFieldWhereInput[];
        id?: StringFilter<"DocumentExtractedField"> | string;
        createdAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        type?:
            | EnumExtractedFieldTypeFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldType;
        value?: StringFilter<"DocumentExtractedField"> | string;
        confidence?: FloatFilter<"DocumentExtractedField"> | number;
        source?:
            | EnumExtractedFieldSourceFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldSource;
        documentId?: StringFilter<"DocumentExtractedField"> | string;
        document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    };

    export type DocumentExtractedFieldOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        value?: SortOrder;
        confidence?: SortOrder;
        source?: SortOrder;
        documentId?: SortOrder;
        document?: DocumentOrderByWithRelationInput;
    };

    export type DocumentExtractedFieldWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?:
                | DocumentExtractedFieldWhereInput
                | DocumentExtractedFieldWhereInput[];
            OR?: DocumentExtractedFieldWhereInput[];
            NOT?:
                | DocumentExtractedFieldWhereInput
                | DocumentExtractedFieldWhereInput[];
            createdAt?:
                | DateTimeFilter<"DocumentExtractedField">
                | Date
                | string;
            updatedAt?:
                | DateTimeFilter<"DocumentExtractedField">
                | Date
                | string;
            type?:
                | EnumExtractedFieldTypeFilter<"DocumentExtractedField">
                | $Enums.ExtractedFieldType;
            value?: StringFilter<"DocumentExtractedField"> | string;
            confidence?: FloatFilter<"DocumentExtractedField"> | number;
            source?:
                | EnumExtractedFieldSourceFilter<"DocumentExtractedField">
                | $Enums.ExtractedFieldSource;
            documentId?: StringFilter<"DocumentExtractedField"> | string;
            document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
        },
        "id"
    >;

    export type DocumentExtractedFieldOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        value?: SortOrder;
        confidence?: SortOrder;
        source?: SortOrder;
        documentId?: SortOrder;
        _count?: DocumentExtractedFieldCountOrderByAggregateInput;
        _avg?: DocumentExtractedFieldAvgOrderByAggregateInput;
        _max?: DocumentExtractedFieldMaxOrderByAggregateInput;
        _min?: DocumentExtractedFieldMinOrderByAggregateInput;
        _sum?: DocumentExtractedFieldSumOrderByAggregateInput;
    };

    export type DocumentExtractedFieldScalarWhereWithAggregatesInput = {
        AND?:
            | DocumentExtractedFieldScalarWhereWithAggregatesInput
            | DocumentExtractedFieldScalarWhereWithAggregatesInput[];
        OR?: DocumentExtractedFieldScalarWhereWithAggregatesInput[];
        NOT?:
            | DocumentExtractedFieldScalarWhereWithAggregatesInput
            | DocumentExtractedFieldScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"DocumentExtractedField"> | string;
        createdAt?:
            | DateTimeWithAggregatesFilter<"DocumentExtractedField">
            | Date
            | string;
        updatedAt?:
            | DateTimeWithAggregatesFilter<"DocumentExtractedField">
            | Date
            | string;
        type?:
            | EnumExtractedFieldTypeWithAggregatesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldType;
        value?: StringWithAggregatesFilter<"DocumentExtractedField"> | string;
        confidence?:
            | FloatWithAggregatesFilter<"DocumentExtractedField">
            | number;
        source?:
            | EnumExtractedFieldSourceWithAggregatesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldSource;
        documentId?:
            | StringWithAggregatesFilter<"DocumentExtractedField">
            | string;
    };

    export type ActionLogWhereInput = {
        AND?: ActionLogWhereInput | ActionLogWhereInput[];
        OR?: ActionLogWhereInput[];
        NOT?: ActionLogWhereInput | ActionLogWhereInput[];
        id?: StringFilter<"ActionLog"> | string;
        createdAt?: DateTimeFilter<"ActionLog"> | Date | string;
        updatedAt?: DateTimeFilter<"ActionLog"> | Date | string;
        type?: EnumActionLogTypesFilter<"ActionLog"> | $Enums.ActionLogTypes;
        documentName?: StringNullableFilter<"ActionLog"> | string | null;
        documentId?: StringNullableFilter<"ActionLog"> | string | null;
        actorId?: StringFilter<"ActionLog"> | string;
        actorFullName?: StringFilter<"ActionLog"> | string;
        actorAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
        userId?: StringNullableFilter<"ActionLog"> | string | null;
        userFullName?: StringNullableFilter<"ActionLog"> | string | null;
        userAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
        document?: XOR<
            DocumentNullableScalarRelationFilter,
            DocumentWhereInput
        > | null;
    };

    export type ActionLogOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        documentName?: SortOrderInput | SortOrder;
        documentId?: SortOrderInput | SortOrder;
        actorId?: SortOrder;
        actorFullName?: SortOrder;
        actorAvatarUrl?: SortOrderInput | SortOrder;
        userId?: SortOrderInput | SortOrder;
        userFullName?: SortOrderInput | SortOrder;
        userAvatarUrl?: SortOrderInput | SortOrder;
        document?: DocumentOrderByWithRelationInput;
    };

    export type ActionLogWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: ActionLogWhereInput | ActionLogWhereInput[];
            OR?: ActionLogWhereInput[];
            NOT?: ActionLogWhereInput | ActionLogWhereInput[];
            createdAt?: DateTimeFilter<"ActionLog"> | Date | string;
            updatedAt?: DateTimeFilter<"ActionLog"> | Date | string;
            type?:
                | EnumActionLogTypesFilter<"ActionLog">
                | $Enums.ActionLogTypes;
            documentName?: StringNullableFilter<"ActionLog"> | string | null;
            documentId?: StringNullableFilter<"ActionLog"> | string | null;
            actorId?: StringFilter<"ActionLog"> | string;
            actorFullName?: StringFilter<"ActionLog"> | string;
            actorAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
            userId?: StringNullableFilter<"ActionLog"> | string | null;
            userFullName?: StringNullableFilter<"ActionLog"> | string | null;
            userAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
            document?: XOR<
                DocumentNullableScalarRelationFilter,
                DocumentWhereInput
            > | null;
        },
        "id"
    >;

    export type ActionLogOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        documentName?: SortOrderInput | SortOrder;
        documentId?: SortOrderInput | SortOrder;
        actorId?: SortOrder;
        actorFullName?: SortOrder;
        actorAvatarUrl?: SortOrderInput | SortOrder;
        userId?: SortOrderInput | SortOrder;
        userFullName?: SortOrderInput | SortOrder;
        userAvatarUrl?: SortOrderInput | SortOrder;
        _count?: ActionLogCountOrderByAggregateInput;
        _max?: ActionLogMaxOrderByAggregateInput;
        _min?: ActionLogMinOrderByAggregateInput;
    };

    export type ActionLogScalarWhereWithAggregatesInput = {
        AND?:
            | ActionLogScalarWhereWithAggregatesInput
            | ActionLogScalarWhereWithAggregatesInput[];
        OR?: ActionLogScalarWhereWithAggregatesInput[];
        NOT?:
            | ActionLogScalarWhereWithAggregatesInput
            | ActionLogScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"ActionLog"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"ActionLog"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"ActionLog"> | Date | string;
        type?:
            | EnumActionLogTypesWithAggregatesFilter<"ActionLog">
            | $Enums.ActionLogTypes;
        documentName?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        documentId?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        actorId?: StringWithAggregatesFilter<"ActionLog"> | string;
        actorFullName?: StringWithAggregatesFilter<"ActionLog"> | string;
        actorAvatarUrl?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        userId?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        userFullName?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        userAvatarUrl?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
    };

    export type DocumentCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
    };

    export type DocumentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
    };

    export type DocumentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
    };

    export type DocumentTagCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        document: DocumentCreateNestedOneWithoutDocumentTagsInput;
        tag: TagCreateNestedOneWithoutDocumentTagsInput;
    };

    export type DocumentTagUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        documentId: string;
        tagId: string;
    };

    export type DocumentTagUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        document?: DocumentUpdateOneRequiredWithoutDocumentTagsNestedInput;
        tag?: TagUpdateOneRequiredWithoutDocumentTagsNestedInput;
    };

    export type DocumentTagUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        documentId?: StringFieldUpdateOperationsInput | string;
        tagId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentTagCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        documentId: string;
        tagId: string;
    };

    export type DocumentTagUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type DocumentTagUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        documentId?: StringFieldUpdateOperationsInput | string;
        tagId?: StringFieldUpdateOperationsInput | string;
    };

    export type TagCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tag: string;
        documentTags?: DocumentTagCreateNestedManyWithoutTagInput;
    };

    export type TagUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tag: string;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutTagInput;
    };

    export type TagUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: StringFieldUpdateOperationsInput | string;
        documentTags?: DocumentTagUpdateManyWithoutTagNestedInput;
    };

    export type TagUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: StringFieldUpdateOperationsInput | string;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutTagNestedInput;
    };

    export type TagCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tag: string;
    };

    export type TagUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: StringFieldUpdateOperationsInput | string;
    };

    export type TagUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: StringFieldUpdateOperationsInput | string;
    };

    export type FileCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date | string;
        width?: number | null;
        height?: number | null;
        document: DocumentCreateNestedOneWithoutFilesInput;
    };

    export type FileUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentId: string;
    };

    export type FileUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        document?: DocumentUpdateOneRequiredWithoutFilesNestedInput;
    };

    export type FileUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type FileCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentId: string;
    };

    export type FileUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
    };

    export type FileUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentExtractedFieldCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
        document: DocumentCreateNestedOneWithoutDocumentExtractedFieldsInput;
    };

    export type DocumentExtractedFieldUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
        documentId: string;
    };

    export type DocumentExtractedFieldUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypeFieldUpdateOperationsInput
            | $Enums.ExtractedFieldType;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourceFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSource;
        document?: DocumentUpdateOneRequiredWithoutDocumentExtractedFieldsNestedInput;
    };

    export type DocumentExtractedFieldUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypeFieldUpdateOperationsInput
            | $Enums.ExtractedFieldType;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourceFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSource;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentExtractedFieldCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
        documentId: string;
    };

    export type DocumentExtractedFieldUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypeFieldUpdateOperationsInput
            | $Enums.ExtractedFieldType;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourceFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSource;
    };

    export type DocumentExtractedFieldUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypeFieldUpdateOperationsInput
            | $Enums.ExtractedFieldType;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourceFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSource;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type ActionLogCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ActionLogTypes;
        documentName?: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl?: string | null;
        userId?: string | null;
        userFullName?: string | null;
        userAvatarUrl?: string | null;
        document?: DocumentCreateNestedOneWithoutActionLogsInput;
    };

    export type ActionLogUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ActionLogTypes;
        documentName?: string | null;
        documentId?: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl?: string | null;
        userId?: string | null;
        userFullName?: string | null;
        userAvatarUrl?: string | null;
    };

    export type ActionLogUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        document?: DocumentUpdateOneWithoutActionLogsNestedInput;
    };

    export type ActionLogUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ActionLogCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ActionLogTypes;
        documentName?: string | null;
        documentId?: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl?: string | null;
        userId?: string | null;
        userFullName?: string | null;
        userAvatarUrl?: string | null;
    };

    export type ActionLogUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ActionLogUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
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

    export type EnumDocumentStatusesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.DocumentStatuses
            | EnumDocumentStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DocumentStatuses[]
            | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DocumentStatuses[]
            | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDocumentStatusesFilter<$PrismaModel>
            | $Enums.DocumentStatuses;
    };

    export type StringNullableListFilter<$PrismaModel = never> = {
        equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        has?: string | StringFieldRefInput<$PrismaModel> | null;
        hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
        hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
        isEmpty?: boolean;
    };

    export type DateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    };

    export type EnumRiskLevelNullableFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.RiskLevel
            | EnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelNullableFilter<$PrismaModel>
            | $Enums.RiskLevel
            | null;
    };

    export type DocumentExtractedFieldListRelationFilter = {
        every?: DocumentExtractedFieldWhereInput;
        some?: DocumentExtractedFieldWhereInput;
        none?: DocumentExtractedFieldWhereInput;
    };

    export type ActionLogListRelationFilter = {
        every?: ActionLogWhereInput;
        some?: ActionLogWhereInput;
        none?: ActionLogWhereInput;
    };

    export type FileListRelationFilter = {
        every?: FileWhereInput;
        some?: FileWhereInput;
        none?: FileWhereInput;
    };

    export type DocumentTagListRelationFilter = {
        every?: DocumentTagWhereInput;
        some?: DocumentTagWhereInput;
        none?: DocumentTagWhereInput;
    };

    export type SortOrderInput = {
        sort: SortOrder;
        nulls?: NullsOrder;
    };

    export type DocumentExtractedFieldOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type ActionLogOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type FileOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type DocumentTagOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type DocumentCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        tags?: SortOrder;
        name?: SortOrder;
        expiresAt?: SortOrder;
        riskLevel?: SortOrder;
    };

    export type DocumentMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        name?: SortOrder;
        expiresAt?: SortOrder;
        riskLevel?: SortOrder;
    };

    export type DocumentMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        name?: SortOrder;
        expiresAt?: SortOrder;
        riskLevel?: SortOrder;
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

    export type EnumDocumentStatusesWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?:
                | $Enums.DocumentStatuses
                | EnumDocumentStatusesFieldRefInput<$PrismaModel>;
            in?:
                | $Enums.DocumentStatuses[]
                | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
            notIn?:
                | $Enums.DocumentStatuses[]
                | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
            not?:
                | NestedEnumDocumentStatusesWithAggregatesFilter<$PrismaModel>
                | $Enums.DocumentStatuses;
            _count?: NestedIntFilter<$PrismaModel>;
            _min?: NestedEnumDocumentStatusesFilter<$PrismaModel>;
            _max?: NestedEnumDocumentStatusesFilter<$PrismaModel>;
        };

    export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?:
            | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
            | Date
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedDateTimeNullableFilter<$PrismaModel>;
        _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

    export type EnumRiskLevelNullableWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.RiskLevel
            | EnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel>
            | $Enums.RiskLevel
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedEnumRiskLevelNullableFilter<$PrismaModel>;
        _max?: NestedEnumRiskLevelNullableFilter<$PrismaModel>;
    };

    export type DocumentScalarRelationFilter = {
        is?: DocumentWhereInput;
        isNot?: DocumentWhereInput;
    };

    export type TagScalarRelationFilter = {
        is?: TagWhereInput;
        isNot?: TagWhereInput;
    };

    export type DocumentTagCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        documentId?: SortOrder;
        tagId?: SortOrder;
    };

    export type DocumentTagMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        documentId?: SortOrder;
        tagId?: SortOrder;
    };

    export type DocumentTagMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        documentId?: SortOrder;
        tagId?: SortOrder;
    };

    export type TagCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        tag?: SortOrder;
    };

    export type TagMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        tag?: SortOrder;
    };

    export type TagMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        tag?: SortOrder;
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

    export type FloatNullableFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    };

    export type FileCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        urlExpiresAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        documentId?: SortOrder;
    };

    export type FileAvgOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type FileMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        urlExpiresAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        documentId?: SortOrder;
    };

    export type FileMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        urlExpiresAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
        documentId?: SortOrder;
    };

    export type FileSumOrderByAggregateInput = {
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

    export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?:
            | NestedFloatNullableWithAggregatesFilter<$PrismaModel>
            | number
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _avg?: NestedFloatNullableFilter<$PrismaModel>;
        _sum?: NestedFloatNullableFilter<$PrismaModel>;
        _min?: NestedFloatNullableFilter<$PrismaModel>;
        _max?: NestedFloatNullableFilter<$PrismaModel>;
    };

    export type EnumExtractedFieldTypeFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldType
            | EnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypeFilter<$PrismaModel>
            | $Enums.ExtractedFieldType;
    };

    export type EnumExtractedFieldSourceFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldSource
            | EnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourceFilter<$PrismaModel>
            | $Enums.ExtractedFieldSource;
    };

    export type DocumentExtractedFieldCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        value?: SortOrder;
        confidence?: SortOrder;
        source?: SortOrder;
        documentId?: SortOrder;
    };

    export type DocumentExtractedFieldAvgOrderByAggregateInput = {
        confidence?: SortOrder;
    };

    export type DocumentExtractedFieldMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        value?: SortOrder;
        confidence?: SortOrder;
        source?: SortOrder;
        documentId?: SortOrder;
    };

    export type DocumentExtractedFieldMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        value?: SortOrder;
        confidence?: SortOrder;
        source?: SortOrder;
        documentId?: SortOrder;
    };

    export type DocumentExtractedFieldSumOrderByAggregateInput = {
        confidence?: SortOrder;
    };

    export type EnumExtractedFieldTypeWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldType
            | EnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypeWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldType;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldTypeFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldTypeFilter<$PrismaModel>;
    };

    export type EnumExtractedFieldSourceWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldSource
            | EnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourceWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldSource;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldSourceFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldSourceFilter<$PrismaModel>;
    };

    export type EnumActionLogTypesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ActionLogTypes
            | EnumActionLogTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumActionLogTypesFilter<$PrismaModel>
            | $Enums.ActionLogTypes;
    };

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type DocumentNullableScalarRelationFilter = {
        is?: DocumentWhereInput | null;
        isNot?: DocumentWhereInput | null;
    };

    export type ActionLogCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        documentName?: SortOrder;
        documentId?: SortOrder;
        actorId?: SortOrder;
        actorFullName?: SortOrder;
        actorAvatarUrl?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrder;
    };

    export type ActionLogMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        documentName?: SortOrder;
        documentId?: SortOrder;
        actorId?: SortOrder;
        actorFullName?: SortOrder;
        actorAvatarUrl?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrder;
    };

    export type ActionLogMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        type?: SortOrder;
        documentName?: SortOrder;
        documentId?: SortOrder;
        actorId?: SortOrder;
        actorFullName?: SortOrder;
        actorAvatarUrl?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrder;
    };

    export type EnumActionLogTypesWithAggregatesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ActionLogTypes
            | EnumActionLogTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumActionLogTypesWithAggregatesFilter<$PrismaModel>
            | $Enums.ActionLogTypes;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumActionLogTypesFilter<$PrismaModel>;
        _max?: NestedEnumActionLogTypesFilter<$PrismaModel>;
    };

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?:
            | NestedStringNullableWithAggregatesFilter<$PrismaModel>
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type DocumentCreatetagsInput = {
        set: string[];
    };

    export type DocumentExtractedFieldCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  DocumentExtractedFieldCreateWithoutDocumentInput,
                  DocumentExtractedFieldUncheckedCreateWithoutDocumentInput
              >
            | DocumentExtractedFieldCreateWithoutDocumentInput[]
            | DocumentExtractedFieldUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput
            | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput[];
        createMany?: DocumentExtractedFieldCreateManyDocumentInputEnvelope;
        connect?:
            | DocumentExtractedFieldWhereUniqueInput
            | DocumentExtractedFieldWhereUniqueInput[];
    };

    export type ActionLogCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  ActionLogCreateWithoutDocumentInput,
                  ActionLogUncheckedCreateWithoutDocumentInput
              >
            | ActionLogCreateWithoutDocumentInput[]
            | ActionLogUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ActionLogCreateOrConnectWithoutDocumentInput
            | ActionLogCreateOrConnectWithoutDocumentInput[];
        createMany?: ActionLogCreateManyDocumentInputEnvelope;
        connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
    };

    export type FileCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  FileCreateWithoutDocumentInput,
                  FileUncheckedCreateWithoutDocumentInput
              >
            | FileCreateWithoutDocumentInput[]
            | FileUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | FileCreateOrConnectWithoutDocumentInput
            | FileCreateOrConnectWithoutDocumentInput[];
        createMany?: FileCreateManyDocumentInputEnvelope;
        connect?: FileWhereUniqueInput | FileWhereUniqueInput[];
    };

    export type DocumentTagCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutDocumentInput,
                  DocumentTagUncheckedCreateWithoutDocumentInput
              >
            | DocumentTagCreateWithoutDocumentInput[]
            | DocumentTagUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutDocumentInput
            | DocumentTagCreateOrConnectWithoutDocumentInput[];
        createMany?: DocumentTagCreateManyDocumentInputEnvelope;
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
    };

    export type DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput =
        {
            create?:
                | XOR<
                      DocumentExtractedFieldCreateWithoutDocumentInput,
                      DocumentExtractedFieldUncheckedCreateWithoutDocumentInput
                  >
                | DocumentExtractedFieldCreateWithoutDocumentInput[]
                | DocumentExtractedFieldUncheckedCreateWithoutDocumentInput[];
            connectOrCreate?:
                | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput
                | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput[];
            createMany?: DocumentExtractedFieldCreateManyDocumentInputEnvelope;
            connect?:
                | DocumentExtractedFieldWhereUniqueInput
                | DocumentExtractedFieldWhereUniqueInput[];
        };

    export type ActionLogUncheckedCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  ActionLogCreateWithoutDocumentInput,
                  ActionLogUncheckedCreateWithoutDocumentInput
              >
            | ActionLogCreateWithoutDocumentInput[]
            | ActionLogUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ActionLogCreateOrConnectWithoutDocumentInput
            | ActionLogCreateOrConnectWithoutDocumentInput[];
        createMany?: ActionLogCreateManyDocumentInputEnvelope;
        connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
    };

    export type FileUncheckedCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  FileCreateWithoutDocumentInput,
                  FileUncheckedCreateWithoutDocumentInput
              >
            | FileCreateWithoutDocumentInput[]
            | FileUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | FileCreateOrConnectWithoutDocumentInput
            | FileCreateOrConnectWithoutDocumentInput[];
        createMany?: FileCreateManyDocumentInputEnvelope;
        connect?: FileWhereUniqueInput | FileWhereUniqueInput[];
    };

    export type DocumentTagUncheckedCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutDocumentInput,
                  DocumentTagUncheckedCreateWithoutDocumentInput
              >
            | DocumentTagCreateWithoutDocumentInput[]
            | DocumentTagUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutDocumentInput
            | DocumentTagCreateOrConnectWithoutDocumentInput[];
        createMany?: DocumentTagCreateManyDocumentInputEnvelope;
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
    };

    export type StringFieldUpdateOperationsInput = {
        set?: string;
    };

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string;
    };

    export type EnumDocumentStatusesFieldUpdateOperationsInput = {
        set?: $Enums.DocumentStatuses;
    };

    export type DocumentUpdatetagsInput = {
        set?: string[];
        push?: string | string[];
    };

    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null;
    };

    export type NullableEnumRiskLevelFieldUpdateOperationsInput = {
        set?: $Enums.RiskLevel | null;
    };

    export type DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  DocumentExtractedFieldCreateWithoutDocumentInput,
                  DocumentExtractedFieldUncheckedCreateWithoutDocumentInput
              >
            | DocumentExtractedFieldCreateWithoutDocumentInput[]
            | DocumentExtractedFieldUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput
            | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | DocumentExtractedFieldUpsertWithWhereUniqueWithoutDocumentInput
            | DocumentExtractedFieldUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: DocumentExtractedFieldCreateManyDocumentInputEnvelope;
        set?:
            | DocumentExtractedFieldWhereUniqueInput
            | DocumentExtractedFieldWhereUniqueInput[];
        disconnect?:
            | DocumentExtractedFieldWhereUniqueInput
            | DocumentExtractedFieldWhereUniqueInput[];
        delete?:
            | DocumentExtractedFieldWhereUniqueInput
            | DocumentExtractedFieldWhereUniqueInput[];
        connect?:
            | DocumentExtractedFieldWhereUniqueInput
            | DocumentExtractedFieldWhereUniqueInput[];
        update?:
            | DocumentExtractedFieldUpdateWithWhereUniqueWithoutDocumentInput
            | DocumentExtractedFieldUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | DocumentExtractedFieldUpdateManyWithWhereWithoutDocumentInput
            | DocumentExtractedFieldUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?:
            | DocumentExtractedFieldScalarWhereInput
            | DocumentExtractedFieldScalarWhereInput[];
    };

    export type ActionLogUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  ActionLogCreateWithoutDocumentInput,
                  ActionLogUncheckedCreateWithoutDocumentInput
              >
            | ActionLogCreateWithoutDocumentInput[]
            | ActionLogUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ActionLogCreateOrConnectWithoutDocumentInput
            | ActionLogCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | ActionLogUpsertWithWhereUniqueWithoutDocumentInput
            | ActionLogUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: ActionLogCreateManyDocumentInputEnvelope;
        set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        update?:
            | ActionLogUpdateWithWhereUniqueWithoutDocumentInput
            | ActionLogUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | ActionLogUpdateManyWithWhereWithoutDocumentInput
            | ActionLogUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[];
    };

    export type FileUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  FileCreateWithoutDocumentInput,
                  FileUncheckedCreateWithoutDocumentInput
              >
            | FileCreateWithoutDocumentInput[]
            | FileUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | FileCreateOrConnectWithoutDocumentInput
            | FileCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | FileUpsertWithWhereUniqueWithoutDocumentInput
            | FileUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: FileCreateManyDocumentInputEnvelope;
        set?: FileWhereUniqueInput | FileWhereUniqueInput[];
        disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[];
        delete?: FileWhereUniqueInput | FileWhereUniqueInput[];
        connect?: FileWhereUniqueInput | FileWhereUniqueInput[];
        update?:
            | FileUpdateWithWhereUniqueWithoutDocumentInput
            | FileUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | FileUpdateManyWithWhereWithoutDocumentInput
            | FileUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?: FileScalarWhereInput | FileScalarWhereInput[];
    };

    export type DocumentTagUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutDocumentInput,
                  DocumentTagUncheckedCreateWithoutDocumentInput
              >
            | DocumentTagCreateWithoutDocumentInput[]
            | DocumentTagUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutDocumentInput
            | DocumentTagCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | DocumentTagUpsertWithWhereUniqueWithoutDocumentInput
            | DocumentTagUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: DocumentTagCreateManyDocumentInputEnvelope;
        set?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        disconnect?:
            | DocumentTagWhereUniqueInput
            | DocumentTagWhereUniqueInput[];
        delete?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        update?:
            | DocumentTagUpdateWithWhereUniqueWithoutDocumentInput
            | DocumentTagUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | DocumentTagUpdateManyWithWhereWithoutDocumentInput
            | DocumentTagUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?:
            | DocumentTagScalarWhereInput
            | DocumentTagScalarWhereInput[];
    };

    export type DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput =
        {
            create?:
                | XOR<
                      DocumentExtractedFieldCreateWithoutDocumentInput,
                      DocumentExtractedFieldUncheckedCreateWithoutDocumentInput
                  >
                | DocumentExtractedFieldCreateWithoutDocumentInput[]
                | DocumentExtractedFieldUncheckedCreateWithoutDocumentInput[];
            connectOrCreate?:
                | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput
                | DocumentExtractedFieldCreateOrConnectWithoutDocumentInput[];
            upsert?:
                | DocumentExtractedFieldUpsertWithWhereUniqueWithoutDocumentInput
                | DocumentExtractedFieldUpsertWithWhereUniqueWithoutDocumentInput[];
            createMany?: DocumentExtractedFieldCreateManyDocumentInputEnvelope;
            set?:
                | DocumentExtractedFieldWhereUniqueInput
                | DocumentExtractedFieldWhereUniqueInput[];
            disconnect?:
                | DocumentExtractedFieldWhereUniqueInput
                | DocumentExtractedFieldWhereUniqueInput[];
            delete?:
                | DocumentExtractedFieldWhereUniqueInput
                | DocumentExtractedFieldWhereUniqueInput[];
            connect?:
                | DocumentExtractedFieldWhereUniqueInput
                | DocumentExtractedFieldWhereUniqueInput[];
            update?:
                | DocumentExtractedFieldUpdateWithWhereUniqueWithoutDocumentInput
                | DocumentExtractedFieldUpdateWithWhereUniqueWithoutDocumentInput[];
            updateMany?:
                | DocumentExtractedFieldUpdateManyWithWhereWithoutDocumentInput
                | DocumentExtractedFieldUpdateManyWithWhereWithoutDocumentInput[];
            deleteMany?:
                | DocumentExtractedFieldScalarWhereInput
                | DocumentExtractedFieldScalarWhereInput[];
        };

    export type ActionLogUncheckedUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  ActionLogCreateWithoutDocumentInput,
                  ActionLogUncheckedCreateWithoutDocumentInput
              >
            | ActionLogCreateWithoutDocumentInput[]
            | ActionLogUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ActionLogCreateOrConnectWithoutDocumentInput
            | ActionLogCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | ActionLogUpsertWithWhereUniqueWithoutDocumentInput
            | ActionLogUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: ActionLogCreateManyDocumentInputEnvelope;
        set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[];
        update?:
            | ActionLogUpdateWithWhereUniqueWithoutDocumentInput
            | ActionLogUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | ActionLogUpdateManyWithWhereWithoutDocumentInput
            | ActionLogUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[];
    };

    export type FileUncheckedUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  FileCreateWithoutDocumentInput,
                  FileUncheckedCreateWithoutDocumentInput
              >
            | FileCreateWithoutDocumentInput[]
            | FileUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | FileCreateOrConnectWithoutDocumentInput
            | FileCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | FileUpsertWithWhereUniqueWithoutDocumentInput
            | FileUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: FileCreateManyDocumentInputEnvelope;
        set?: FileWhereUniqueInput | FileWhereUniqueInput[];
        disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[];
        delete?: FileWhereUniqueInput | FileWhereUniqueInput[];
        connect?: FileWhereUniqueInput | FileWhereUniqueInput[];
        update?:
            | FileUpdateWithWhereUniqueWithoutDocumentInput
            | FileUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | FileUpdateManyWithWhereWithoutDocumentInput
            | FileUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?: FileScalarWhereInput | FileScalarWhereInput[];
    };

    export type DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutDocumentInput,
                  DocumentTagUncheckedCreateWithoutDocumentInput
              >
            | DocumentTagCreateWithoutDocumentInput[]
            | DocumentTagUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutDocumentInput
            | DocumentTagCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | DocumentTagUpsertWithWhereUniqueWithoutDocumentInput
            | DocumentTagUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: DocumentTagCreateManyDocumentInputEnvelope;
        set?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        disconnect?:
            | DocumentTagWhereUniqueInput
            | DocumentTagWhereUniqueInput[];
        delete?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        update?:
            | DocumentTagUpdateWithWhereUniqueWithoutDocumentInput
            | DocumentTagUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | DocumentTagUpdateManyWithWhereWithoutDocumentInput
            | DocumentTagUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?:
            | DocumentTagScalarWhereInput
            | DocumentTagScalarWhereInput[];
    };

    export type DocumentCreateNestedOneWithoutDocumentTagsInput = {
        create?: XOR<
            DocumentCreateWithoutDocumentTagsInput,
            DocumentUncheckedCreateWithoutDocumentTagsInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutDocumentTagsInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type TagCreateNestedOneWithoutDocumentTagsInput = {
        create?: XOR<
            TagCreateWithoutDocumentTagsInput,
            TagUncheckedCreateWithoutDocumentTagsInput
        >;
        connectOrCreate?: TagCreateOrConnectWithoutDocumentTagsInput;
        connect?: TagWhereUniqueInput;
    };

    export type DocumentUpdateOneRequiredWithoutDocumentTagsNestedInput = {
        create?: XOR<
            DocumentCreateWithoutDocumentTagsInput,
            DocumentUncheckedCreateWithoutDocumentTagsInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutDocumentTagsInput;
        upsert?: DocumentUpsertWithoutDocumentTagsInput;
        connect?: DocumentWhereUniqueInput;
        update?: XOR<
            XOR<
                DocumentUpdateToOneWithWhereWithoutDocumentTagsInput,
                DocumentUpdateWithoutDocumentTagsInput
            >,
            DocumentUncheckedUpdateWithoutDocumentTagsInput
        >;
    };

    export type TagUpdateOneRequiredWithoutDocumentTagsNestedInput = {
        create?: XOR<
            TagCreateWithoutDocumentTagsInput,
            TagUncheckedCreateWithoutDocumentTagsInput
        >;
        connectOrCreate?: TagCreateOrConnectWithoutDocumentTagsInput;
        upsert?: TagUpsertWithoutDocumentTagsInput;
        connect?: TagWhereUniqueInput;
        update?: XOR<
            XOR<
                TagUpdateToOneWithWhereWithoutDocumentTagsInput,
                TagUpdateWithoutDocumentTagsInput
            >,
            TagUncheckedUpdateWithoutDocumentTagsInput
        >;
    };

    export type DocumentTagCreateNestedManyWithoutTagInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutTagInput,
                  DocumentTagUncheckedCreateWithoutTagInput
              >
            | DocumentTagCreateWithoutTagInput[]
            | DocumentTagUncheckedCreateWithoutTagInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutTagInput
            | DocumentTagCreateOrConnectWithoutTagInput[];
        createMany?: DocumentTagCreateManyTagInputEnvelope;
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
    };

    export type DocumentTagUncheckedCreateNestedManyWithoutTagInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutTagInput,
                  DocumentTagUncheckedCreateWithoutTagInput
              >
            | DocumentTagCreateWithoutTagInput[]
            | DocumentTagUncheckedCreateWithoutTagInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutTagInput
            | DocumentTagCreateOrConnectWithoutTagInput[];
        createMany?: DocumentTagCreateManyTagInputEnvelope;
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
    };

    export type DocumentTagUpdateManyWithoutTagNestedInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutTagInput,
                  DocumentTagUncheckedCreateWithoutTagInput
              >
            | DocumentTagCreateWithoutTagInput[]
            | DocumentTagUncheckedCreateWithoutTagInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutTagInput
            | DocumentTagCreateOrConnectWithoutTagInput[];
        upsert?:
            | DocumentTagUpsertWithWhereUniqueWithoutTagInput
            | DocumentTagUpsertWithWhereUniqueWithoutTagInput[];
        createMany?: DocumentTagCreateManyTagInputEnvelope;
        set?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        disconnect?:
            | DocumentTagWhereUniqueInput
            | DocumentTagWhereUniqueInput[];
        delete?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        update?:
            | DocumentTagUpdateWithWhereUniqueWithoutTagInput
            | DocumentTagUpdateWithWhereUniqueWithoutTagInput[];
        updateMany?:
            | DocumentTagUpdateManyWithWhereWithoutTagInput
            | DocumentTagUpdateManyWithWhereWithoutTagInput[];
        deleteMany?:
            | DocumentTagScalarWhereInput
            | DocumentTagScalarWhereInput[];
    };

    export type DocumentTagUncheckedUpdateManyWithoutTagNestedInput = {
        create?:
            | XOR<
                  DocumentTagCreateWithoutTagInput,
                  DocumentTagUncheckedCreateWithoutTagInput
              >
            | DocumentTagCreateWithoutTagInput[]
            | DocumentTagUncheckedCreateWithoutTagInput[];
        connectOrCreate?:
            | DocumentTagCreateOrConnectWithoutTagInput
            | DocumentTagCreateOrConnectWithoutTagInput[];
        upsert?:
            | DocumentTagUpsertWithWhereUniqueWithoutTagInput
            | DocumentTagUpsertWithWhereUniqueWithoutTagInput[];
        createMany?: DocumentTagCreateManyTagInputEnvelope;
        set?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        disconnect?:
            | DocumentTagWhereUniqueInput
            | DocumentTagWhereUniqueInput[];
        delete?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        connect?: DocumentTagWhereUniqueInput | DocumentTagWhereUniqueInput[];
        update?:
            | DocumentTagUpdateWithWhereUniqueWithoutTagInput
            | DocumentTagUpdateWithWhereUniqueWithoutTagInput[];
        updateMany?:
            | DocumentTagUpdateManyWithWhereWithoutTagInput
            | DocumentTagUpdateManyWithWhereWithoutTagInput[];
        deleteMany?:
            | DocumentTagScalarWhereInput
            | DocumentTagScalarWhereInput[];
    };

    export type DocumentCreateNestedOneWithoutFilesInput = {
        create?: XOR<
            DocumentCreateWithoutFilesInput,
            DocumentUncheckedCreateWithoutFilesInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutFilesInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type FloatFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type NullableFloatFieldUpdateOperationsInput = {
        set?: number | null;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type DocumentUpdateOneRequiredWithoutFilesNestedInput = {
        create?: XOR<
            DocumentCreateWithoutFilesInput,
            DocumentUncheckedCreateWithoutFilesInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutFilesInput;
        upsert?: DocumentUpsertWithoutFilesInput;
        connect?: DocumentWhereUniqueInput;
        update?: XOR<
            XOR<
                DocumentUpdateToOneWithWhereWithoutFilesInput,
                DocumentUpdateWithoutFilesInput
            >,
            DocumentUncheckedUpdateWithoutFilesInput
        >;
    };

    export type DocumentCreateNestedOneWithoutDocumentExtractedFieldsInput = {
        create?: XOR<
            DocumentCreateWithoutDocumentExtractedFieldsInput,
            DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutDocumentExtractedFieldsInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type EnumExtractedFieldTypeFieldUpdateOperationsInput = {
        set?: $Enums.ExtractedFieldType;
    };

    export type EnumExtractedFieldSourceFieldUpdateOperationsInput = {
        set?: $Enums.ExtractedFieldSource;
    };

    export type DocumentUpdateOneRequiredWithoutDocumentExtractedFieldsNestedInput =
        {
            create?: XOR<
                DocumentCreateWithoutDocumentExtractedFieldsInput,
                DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput
            >;
            connectOrCreate?: DocumentCreateOrConnectWithoutDocumentExtractedFieldsInput;
            upsert?: DocumentUpsertWithoutDocumentExtractedFieldsInput;
            connect?: DocumentWhereUniqueInput;
            update?: XOR<
                XOR<
                    DocumentUpdateToOneWithWhereWithoutDocumentExtractedFieldsInput,
                    DocumentUpdateWithoutDocumentExtractedFieldsInput
                >,
                DocumentUncheckedUpdateWithoutDocumentExtractedFieldsInput
            >;
        };

    export type DocumentCreateNestedOneWithoutActionLogsInput = {
        create?: XOR<
            DocumentCreateWithoutActionLogsInput,
            DocumentUncheckedCreateWithoutActionLogsInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutActionLogsInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type EnumActionLogTypesFieldUpdateOperationsInput = {
        set?: $Enums.ActionLogTypes;
    };

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null;
    };

    export type DocumentUpdateOneWithoutActionLogsNestedInput = {
        create?: XOR<
            DocumentCreateWithoutActionLogsInput,
            DocumentUncheckedCreateWithoutActionLogsInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutActionLogsInput;
        upsert?: DocumentUpsertWithoutActionLogsInput;
        disconnect?: DocumentWhereInput | boolean;
        delete?: DocumentWhereInput | boolean;
        connect?: DocumentWhereUniqueInput;
        update?: XOR<
            XOR<
                DocumentUpdateToOneWithWhereWithoutActionLogsInput,
                DocumentUpdateWithoutActionLogsInput
            >,
            DocumentUncheckedUpdateWithoutActionLogsInput
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

    export type NestedEnumDocumentStatusesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.DocumentStatuses
            | EnumDocumentStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DocumentStatuses[]
            | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DocumentStatuses[]
            | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDocumentStatusesFilter<$PrismaModel>
            | $Enums.DocumentStatuses;
    };

    export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    };

    export type NestedEnumRiskLevelNullableFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.RiskLevel
            | EnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelNullableFilter<$PrismaModel>
            | $Enums.RiskLevel
            | null;
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

    export type NestedEnumDocumentStatusesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.DocumentStatuses
            | EnumDocumentStatusesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DocumentStatuses[]
            | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DocumentStatuses[]
            | ListEnumDocumentStatusesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDocumentStatusesWithAggregatesFilter<$PrismaModel>
            | $Enums.DocumentStatuses;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumDocumentStatusesFilter<$PrismaModel>;
        _max?: NestedEnumDocumentStatusesFilter<$PrismaModel>;
    };

    export type NestedDateTimeNullableWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?:
            | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
            | Date
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedDateTimeNullableFilter<$PrismaModel>;
        _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    };

    export type NestedEnumRiskLevelNullableWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.RiskLevel
            | EnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel>
            | $Enums.RiskLevel
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedEnumRiskLevelNullableFilter<$PrismaModel>;
        _max?: NestedEnumRiskLevelNullableFilter<$PrismaModel>;
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

    export type NestedFloatNullableFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
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

    export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?: number | FloatFieldRefInput<$PrismaModel> | null;
            in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
            notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
            lt?: number | FloatFieldRefInput<$PrismaModel>;
            lte?: number | FloatFieldRefInput<$PrismaModel>;
            gt?: number | FloatFieldRefInput<$PrismaModel>;
            gte?: number | FloatFieldRefInput<$PrismaModel>;
            not?:
                | NestedFloatNullableWithAggregatesFilter<$PrismaModel>
                | number
                | null;
            _count?: NestedIntNullableFilter<$PrismaModel>;
            _avg?: NestedFloatNullableFilter<$PrismaModel>;
            _sum?: NestedFloatNullableFilter<$PrismaModel>;
            _min?: NestedFloatNullableFilter<$PrismaModel>;
            _max?: NestedFloatNullableFilter<$PrismaModel>;
        };

    export type NestedEnumExtractedFieldTypeFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldType
            | EnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypeFilter<$PrismaModel>
            | $Enums.ExtractedFieldType;
    };

    export type NestedEnumExtractedFieldSourceFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldSource
            | EnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourceFilter<$PrismaModel>
            | $Enums.ExtractedFieldSource;
    };

    export type NestedEnumExtractedFieldTypeWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldType
            | EnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldType[]
            | ListEnumExtractedFieldTypeFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypeWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldType;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldTypeFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldTypeFilter<$PrismaModel>;
    };

    export type NestedEnumExtractedFieldSourceWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldSource
            | EnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSource[]
            | ListEnumExtractedFieldSourceFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourceWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldSource;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldSourceFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldSourceFilter<$PrismaModel>;
    };

    export type NestedEnumActionLogTypesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ActionLogTypes
            | EnumActionLogTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumActionLogTypesFilter<$PrismaModel>
            | $Enums.ActionLogTypes;
    };

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type NestedEnumActionLogTypesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ActionLogTypes
            | EnumActionLogTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ActionLogTypes[]
            | ListEnumActionLogTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumActionLogTypesWithAggregatesFilter<$PrismaModel>
            | $Enums.ActionLogTypes;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumActionLogTypesFilter<$PrismaModel>;
        _max?: NestedEnumActionLogTypesFilter<$PrismaModel>;
    };

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?: string | StringFieldRefInput<$PrismaModel> | null;
            in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
            notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
            lt?: string | StringFieldRefInput<$PrismaModel>;
            lte?: string | StringFieldRefInput<$PrismaModel>;
            gt?: string | StringFieldRefInput<$PrismaModel>;
            gte?: string | StringFieldRefInput<$PrismaModel>;
            contains?: string | StringFieldRefInput<$PrismaModel>;
            startsWith?: string | StringFieldRefInput<$PrismaModel>;
            endsWith?: string | StringFieldRefInput<$PrismaModel>;
            not?:
                | NestedStringNullableWithAggregatesFilter<$PrismaModel>
                | string
                | null;
            _count?: NestedIntNullableFilter<$PrismaModel>;
            _min?: NestedStringNullableFilter<$PrismaModel>;
            _max?: NestedStringNullableFilter<$PrismaModel>;
        };

    export type DocumentExtractedFieldCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
    };

    export type DocumentExtractedFieldUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
    };

    export type DocumentExtractedFieldCreateOrConnectWithoutDocumentInput = {
        where: DocumentExtractedFieldWhereUniqueInput;
        create: XOR<
            DocumentExtractedFieldCreateWithoutDocumentInput,
            DocumentExtractedFieldUncheckedCreateWithoutDocumentInput
        >;
    };

    export type DocumentExtractedFieldCreateManyDocumentInputEnvelope = {
        data:
            | DocumentExtractedFieldCreateManyDocumentInput
            | DocumentExtractedFieldCreateManyDocumentInput[];
        skipDuplicates?: boolean;
    };

    export type ActionLogCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ActionLogTypes;
        documentName?: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl?: string | null;
        userId?: string | null;
        userFullName?: string | null;
        userAvatarUrl?: string | null;
    };

    export type ActionLogUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ActionLogTypes;
        documentName?: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl?: string | null;
        userId?: string | null;
        userFullName?: string | null;
        userAvatarUrl?: string | null;
    };

    export type ActionLogCreateOrConnectWithoutDocumentInput = {
        where: ActionLogWhereUniqueInput;
        create: XOR<
            ActionLogCreateWithoutDocumentInput,
            ActionLogUncheckedCreateWithoutDocumentInput
        >;
    };

    export type ActionLogCreateManyDocumentInputEnvelope = {
        data:
            | ActionLogCreateManyDocumentInput
            | ActionLogCreateManyDocumentInput[];
        skipDuplicates?: boolean;
    };

    export type FileCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date | string;
        width?: number | null;
        height?: number | null;
    };

    export type FileUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date | string;
        width?: number | null;
        height?: number | null;
    };

    export type FileCreateOrConnectWithoutDocumentInput = {
        where: FileWhereUniqueInput;
        create: XOR<
            FileCreateWithoutDocumentInput,
            FileUncheckedCreateWithoutDocumentInput
        >;
    };

    export type FileCreateManyDocumentInputEnvelope = {
        data: FileCreateManyDocumentInput | FileCreateManyDocumentInput[];
        skipDuplicates?: boolean;
    };

    export type DocumentTagCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tag: TagCreateNestedOneWithoutDocumentTagsInput;
    };

    export type DocumentTagUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tagId: string;
    };

    export type DocumentTagCreateOrConnectWithoutDocumentInput = {
        where: DocumentTagWhereUniqueInput;
        create: XOR<
            DocumentTagCreateWithoutDocumentInput,
            DocumentTagUncheckedCreateWithoutDocumentInput
        >;
    };

    export type DocumentTagCreateManyDocumentInputEnvelope = {
        data:
            | DocumentTagCreateManyDocumentInput
            | DocumentTagCreateManyDocumentInput[];
        skipDuplicates?: boolean;
    };

    export type DocumentExtractedFieldUpsertWithWhereUniqueWithoutDocumentInput =
        {
            where: DocumentExtractedFieldWhereUniqueInput;
            update: XOR<
                DocumentExtractedFieldUpdateWithoutDocumentInput,
                DocumentExtractedFieldUncheckedUpdateWithoutDocumentInput
            >;
            create: XOR<
                DocumentExtractedFieldCreateWithoutDocumentInput,
                DocumentExtractedFieldUncheckedCreateWithoutDocumentInput
            >;
        };

    export type DocumentExtractedFieldUpdateWithWhereUniqueWithoutDocumentInput =
        {
            where: DocumentExtractedFieldWhereUniqueInput;
            data: XOR<
                DocumentExtractedFieldUpdateWithoutDocumentInput,
                DocumentExtractedFieldUncheckedUpdateWithoutDocumentInput
            >;
        };

    export type DocumentExtractedFieldUpdateManyWithWhereWithoutDocumentInput =
        {
            where: DocumentExtractedFieldScalarWhereInput;
            data: XOR<
                DocumentExtractedFieldUpdateManyMutationInput,
                DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentInput
            >;
        };

    export type DocumentExtractedFieldScalarWhereInput = {
        AND?:
            | DocumentExtractedFieldScalarWhereInput
            | DocumentExtractedFieldScalarWhereInput[];
        OR?: DocumentExtractedFieldScalarWhereInput[];
        NOT?:
            | DocumentExtractedFieldScalarWhereInput
            | DocumentExtractedFieldScalarWhereInput[];
        id?: StringFilter<"DocumentExtractedField"> | string;
        createdAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        type?:
            | EnumExtractedFieldTypeFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldType;
        value?: StringFilter<"DocumentExtractedField"> | string;
        confidence?: FloatFilter<"DocumentExtractedField"> | number;
        source?:
            | EnumExtractedFieldSourceFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldSource;
        documentId?: StringFilter<"DocumentExtractedField"> | string;
    };

    export type ActionLogUpsertWithWhereUniqueWithoutDocumentInput = {
        where: ActionLogWhereUniqueInput;
        update: XOR<
            ActionLogUpdateWithoutDocumentInput,
            ActionLogUncheckedUpdateWithoutDocumentInput
        >;
        create: XOR<
            ActionLogCreateWithoutDocumentInput,
            ActionLogUncheckedCreateWithoutDocumentInput
        >;
    };

    export type ActionLogUpdateWithWhereUniqueWithoutDocumentInput = {
        where: ActionLogWhereUniqueInput;
        data: XOR<
            ActionLogUpdateWithoutDocumentInput,
            ActionLogUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type ActionLogUpdateManyWithWhereWithoutDocumentInput = {
        where: ActionLogScalarWhereInput;
        data: XOR<
            ActionLogUpdateManyMutationInput,
            ActionLogUncheckedUpdateManyWithoutDocumentInput
        >;
    };

    export type ActionLogScalarWhereInput = {
        AND?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[];
        OR?: ActionLogScalarWhereInput[];
        NOT?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[];
        id?: StringFilter<"ActionLog"> | string;
        createdAt?: DateTimeFilter<"ActionLog"> | Date | string;
        updatedAt?: DateTimeFilter<"ActionLog"> | Date | string;
        type?: EnumActionLogTypesFilter<"ActionLog"> | $Enums.ActionLogTypes;
        documentName?: StringNullableFilter<"ActionLog"> | string | null;
        documentId?: StringNullableFilter<"ActionLog"> | string | null;
        actorId?: StringFilter<"ActionLog"> | string;
        actorFullName?: StringFilter<"ActionLog"> | string;
        actorAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
        userId?: StringNullableFilter<"ActionLog"> | string | null;
        userFullName?: StringNullableFilter<"ActionLog"> | string | null;
        userAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
    };

    export type FileUpsertWithWhereUniqueWithoutDocumentInput = {
        where: FileWhereUniqueInput;
        update: XOR<
            FileUpdateWithoutDocumentInput,
            FileUncheckedUpdateWithoutDocumentInput
        >;
        create: XOR<
            FileCreateWithoutDocumentInput,
            FileUncheckedCreateWithoutDocumentInput
        >;
    };

    export type FileUpdateWithWhereUniqueWithoutDocumentInput = {
        where: FileWhereUniqueInput;
        data: XOR<
            FileUpdateWithoutDocumentInput,
            FileUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type FileUpdateManyWithWhereWithoutDocumentInput = {
        where: FileScalarWhereInput;
        data: XOR<
            FileUpdateManyMutationInput,
            FileUncheckedUpdateManyWithoutDocumentInput
        >;
    };

    export type FileScalarWhereInput = {
        AND?: FileScalarWhereInput | FileScalarWhereInput[];
        OR?: FileScalarWhereInput[];
        NOT?: FileScalarWhereInput | FileScalarWhereInput[];
        id?: StringFilter<"File"> | string;
        createdAt?: DateTimeFilter<"File"> | Date | string;
        updatedAt?: DateTimeFilter<"File"> | Date | string;
        key?: StringFilter<"File"> | string;
        fileSize?: FloatFilter<"File"> | number;
        mimeType?: StringFilter<"File"> | string;
        url?: StringFilter<"File"> | string;
        urlExpiresAt?: DateTimeFilter<"File"> | Date | string;
        width?: FloatNullableFilter<"File"> | number | null;
        height?: FloatNullableFilter<"File"> | number | null;
        documentId?: StringFilter<"File"> | string;
    };

    export type DocumentTagUpsertWithWhereUniqueWithoutDocumentInput = {
        where: DocumentTagWhereUniqueInput;
        update: XOR<
            DocumentTagUpdateWithoutDocumentInput,
            DocumentTagUncheckedUpdateWithoutDocumentInput
        >;
        create: XOR<
            DocumentTagCreateWithoutDocumentInput,
            DocumentTagUncheckedCreateWithoutDocumentInput
        >;
    };

    export type DocumentTagUpdateWithWhereUniqueWithoutDocumentInput = {
        where: DocumentTagWhereUniqueInput;
        data: XOR<
            DocumentTagUpdateWithoutDocumentInput,
            DocumentTagUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type DocumentTagUpdateManyWithWhereWithoutDocumentInput = {
        where: DocumentTagScalarWhereInput;
        data: XOR<
            DocumentTagUpdateManyMutationInput,
            DocumentTagUncheckedUpdateManyWithoutDocumentInput
        >;
    };

    export type DocumentTagScalarWhereInput = {
        AND?: DocumentTagScalarWhereInput | DocumentTagScalarWhereInput[];
        OR?: DocumentTagScalarWhereInput[];
        NOT?: DocumentTagScalarWhereInput | DocumentTagScalarWhereInput[];
        id?: StringFilter<"DocumentTag"> | string;
        createdAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        documentId?: StringFilter<"DocumentTag"> | string;
        tagId?: StringFilter<"DocumentTag"> | string;
    };

    export type DocumentCreateWithoutDocumentTagsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutDocumentTagsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutDocumentTagsInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutDocumentTagsInput,
            DocumentUncheckedCreateWithoutDocumentTagsInput
        >;
    };

    export type TagCreateWithoutDocumentTagsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tag: string;
    };

    export type TagUncheckedCreateWithoutDocumentTagsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tag: string;
    };

    export type TagCreateOrConnectWithoutDocumentTagsInput = {
        where: TagWhereUniqueInput;
        create: XOR<
            TagCreateWithoutDocumentTagsInput,
            TagUncheckedCreateWithoutDocumentTagsInput
        >;
    };

    export type DocumentUpsertWithoutDocumentTagsInput = {
        update: XOR<
            DocumentUpdateWithoutDocumentTagsInput,
            DocumentUncheckedUpdateWithoutDocumentTagsInput
        >;
        create: XOR<
            DocumentCreateWithoutDocumentTagsInput,
            DocumentUncheckedCreateWithoutDocumentTagsInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutDocumentTagsInput = {
        where?: DocumentWhereInput;
        data: XOR<
            DocumentUpdateWithoutDocumentTagsInput,
            DocumentUncheckedUpdateWithoutDocumentTagsInput
        >;
    };

    export type DocumentUpdateWithoutDocumentTagsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutDocumentTagsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type TagUpsertWithoutDocumentTagsInput = {
        update: XOR<
            TagUpdateWithoutDocumentTagsInput,
            TagUncheckedUpdateWithoutDocumentTagsInput
        >;
        create: XOR<
            TagCreateWithoutDocumentTagsInput,
            TagUncheckedCreateWithoutDocumentTagsInput
        >;
        where?: TagWhereInput;
    };

    export type TagUpdateToOneWithWhereWithoutDocumentTagsInput = {
        where?: TagWhereInput;
        data: XOR<
            TagUpdateWithoutDocumentTagsInput,
            TagUncheckedUpdateWithoutDocumentTagsInput
        >;
    };

    export type TagUpdateWithoutDocumentTagsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: StringFieldUpdateOperationsInput | string;
    };

    export type TagUncheckedUpdateWithoutDocumentTagsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentTagCreateWithoutTagInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        document: DocumentCreateNestedOneWithoutDocumentTagsInput;
    };

    export type DocumentTagUncheckedCreateWithoutTagInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        documentId: string;
    };

    export type DocumentTagCreateOrConnectWithoutTagInput = {
        where: DocumentTagWhereUniqueInput;
        create: XOR<
            DocumentTagCreateWithoutTagInput,
            DocumentTagUncheckedCreateWithoutTagInput
        >;
    };

    export type DocumentTagCreateManyTagInputEnvelope = {
        data: DocumentTagCreateManyTagInput | DocumentTagCreateManyTagInput[];
        skipDuplicates?: boolean;
    };

    export type DocumentTagUpsertWithWhereUniqueWithoutTagInput = {
        where: DocumentTagWhereUniqueInput;
        update: XOR<
            DocumentTagUpdateWithoutTagInput,
            DocumentTagUncheckedUpdateWithoutTagInput
        >;
        create: XOR<
            DocumentTagCreateWithoutTagInput,
            DocumentTagUncheckedCreateWithoutTagInput
        >;
    };

    export type DocumentTagUpdateWithWhereUniqueWithoutTagInput = {
        where: DocumentTagWhereUniqueInput;
        data: XOR<
            DocumentTagUpdateWithoutTagInput,
            DocumentTagUncheckedUpdateWithoutTagInput
        >;
    };

    export type DocumentTagUpdateManyWithWhereWithoutTagInput = {
        where: DocumentTagScalarWhereInput;
        data: XOR<
            DocumentTagUpdateManyMutationInput,
            DocumentTagUncheckedUpdateManyWithoutTagInput
        >;
    };

    export type DocumentCreateWithoutFilesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutFilesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutFilesInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutFilesInput,
            DocumentUncheckedCreateWithoutFilesInput
        >;
    };

    export type DocumentUpsertWithoutFilesInput = {
        update: XOR<
            DocumentUpdateWithoutFilesInput,
            DocumentUncheckedUpdateWithoutFilesInput
        >;
        create: XOR<
            DocumentCreateWithoutFilesInput,
            DocumentUncheckedCreateWithoutFilesInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutFilesInput = {
        where?: DocumentWhereInput;
        data: XOR<
            DocumentUpdateWithoutFilesInput,
            DocumentUncheckedUpdateWithoutFilesInput
        >;
    };

    export type DocumentUpdateWithoutFilesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutFilesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateWithoutDocumentExtractedFieldsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutDocumentExtractedFieldsInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutDocumentExtractedFieldsInput,
            DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput
        >;
    };

    export type DocumentUpsertWithoutDocumentExtractedFieldsInput = {
        update: XOR<
            DocumentUpdateWithoutDocumentExtractedFieldsInput,
            DocumentUncheckedUpdateWithoutDocumentExtractedFieldsInput
        >;
        create: XOR<
            DocumentCreateWithoutDocumentExtractedFieldsInput,
            DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutDocumentExtractedFieldsInput =
        {
            where?: DocumentWhereInput;
            data: XOR<
                DocumentUpdateWithoutDocumentExtractedFieldsInput,
                DocumentUncheckedUpdateWithoutDocumentExtractedFieldsInput
            >;
        };

    export type DocumentUpdateWithoutDocumentExtractedFieldsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutDocumentExtractedFieldsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateWithoutActionLogsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutActionLogsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevel | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutActionLogsInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutActionLogsInput,
            DocumentUncheckedCreateWithoutActionLogsInput
        >;
    };

    export type DocumentUpsertWithoutActionLogsInput = {
        update: XOR<
            DocumentUpdateWithoutActionLogsInput,
            DocumentUncheckedUpdateWithoutActionLogsInput
        >;
        create: XOR<
            DocumentCreateWithoutActionLogsInput,
            DocumentUncheckedCreateWithoutActionLogsInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutActionLogsInput = {
        where?: DocumentWhereInput;
        data: XOR<
            DocumentUpdateWithoutActionLogsInput,
            DocumentUncheckedUpdateWithoutActionLogsInput
        >;
    };

    export type DocumentUpdateWithoutActionLogsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutActionLogsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelFieldUpdateOperationsInput
            | $Enums.RiskLevel
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentExtractedFieldCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldType;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSource;
    };

    export type ActionLogCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ActionLogTypes;
        documentName?: string | null;
        actorId: string;
        actorFullName: string;
        actorAvatarUrl?: string | null;
        userId?: string | null;
        userFullName?: string | null;
        userAvatarUrl?: string | null;
    };

    export type FileCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        urlExpiresAt: Date | string;
        width?: number | null;
        height?: number | null;
    };

    export type DocumentTagCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        tagId: string;
    };

    export type DocumentExtractedFieldUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypeFieldUpdateOperationsInput
            | $Enums.ExtractedFieldType;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourceFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSource;
    };

    export type DocumentExtractedFieldUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypeFieldUpdateOperationsInput
            | $Enums.ExtractedFieldType;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourceFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSource;
    };

    export type DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentInput =
        {
            id?: StringFieldUpdateOperationsInput | string;
            createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            type?:
                | EnumExtractedFieldTypeFieldUpdateOperationsInput
                | $Enums.ExtractedFieldType;
            value?: StringFieldUpdateOperationsInput | string;
            confidence?: FloatFieldUpdateOperationsInput | number;
            source?:
                | EnumExtractedFieldSourceFieldUpdateOperationsInput
                | $Enums.ExtractedFieldSource;
        };

    export type ActionLogUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ActionLogUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ActionLogUncheckedUpdateManyWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumActionLogTypesFieldUpdateOperationsInput
            | $Enums.ActionLogTypes;
        documentName?: NullableStringFieldUpdateOperationsInput | string | null;
        actorId?: StringFieldUpdateOperationsInput | string;
        actorFullName?: StringFieldUpdateOperationsInput | string;
        actorAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        userId?: NullableStringFieldUpdateOperationsInput | string | null;
        userFullName?: NullableStringFieldUpdateOperationsInput | string | null;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type FileUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
    };

    export type FileUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
    };

    export type FileUncheckedUpdateManyWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        urlExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
    };

    export type DocumentTagUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tag?: TagUpdateOneRequiredWithoutDocumentTagsNestedInput;
    };

    export type DocumentTagUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tagId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentTagUncheckedUpdateManyWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        tagId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentTagCreateManyTagInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        documentId: string;
    };

    export type DocumentTagUpdateWithoutTagInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        document?: DocumentUpdateOneRequiredWithoutDocumentTagsNestedInput;
    };

    export type DocumentTagUncheckedUpdateWithoutTagInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentTagUncheckedUpdateManyWithoutTagInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        documentId?: StringFieldUpdateOperationsInput | string;
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
