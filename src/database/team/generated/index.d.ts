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
 * Model DocumentExtractedField
 *
 */
export type DocumentExtractedField =
    $Result.DefaultSelection<Prisma.$DocumentExtractedFieldPayload>;
/**
 * Model DocumentDeadline
 *
 */
export type DocumentDeadline =
    $Result.DefaultSelection<Prisma.$DocumentDeadlinePayload>;
/**
 * Model Notification
 *
 */
export type Notification =
    $Result.DefaultSelection<Prisma.$NotificationPayload>;
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
    };

    export type DocumentStatuses =
        (typeof DocumentStatuses)[keyof typeof DocumentStatuses];

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

    export const DeadlineStatus: {
        ACTIVE: "ACTIVE";
        COMPLETED: "COMPLETED";
        OVERDUE: "OVERDUE";
    };

    export type DeadlineStatus =
        (typeof DeadlineStatus)[keyof typeof DeadlineStatus];

    export const ActionLogTypes: {
        CREATE_TEAM: "CREATE_TEAM";
        UPDATE_TEAM: "UPDATE_TEAM";
        ADD_USER: "ADD_USER";
        INVITE_USER: "INVITE_USER";
        DELETE_USER: "DELETE_USER";
        CREATE_DOCUMENT: "CREATE_DOCUMENT";
        UPDATE_DOCUMENT: "UPDATE_DOCUMENT";
        DELETE_DOCUMENT: "DELETE_DOCUMENT";
    };

    export type ActionLogTypes =
        (typeof ActionLogTypes)[keyof typeof ActionLogTypes];
}

export type DocumentStatuses = $Enums.DocumentStatuses;

export const DocumentStatuses: typeof $Enums.DocumentStatuses;

export type ExtractedFieldType = $Enums.ExtractedFieldType;

export const ExtractedFieldType: typeof $Enums.ExtractedFieldType;

export type ExtractedFieldSource = $Enums.ExtractedFieldSource;

export const ExtractedFieldSource: typeof $Enums.ExtractedFieldSource;

export type DeadlineStatus = $Enums.DeadlineStatus;

export const DeadlineStatus: typeof $Enums.DeadlineStatus;

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
     * `prisma.documentDeadline`: Exposes CRUD operations for the **DocumentDeadline** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more DocumentDeadlines
     * const documentDeadlines = await prisma.documentDeadline.findMany()
     * ```
     */
    get documentDeadline(): Prisma.DocumentDeadlineDelegate<
        ExtArgs,
        ClientOptions
    >;

    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Notifications
     * const notifications = await prisma.notification.findMany()
     * ```
     */
    get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

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
        DocumentExtractedField: "DocumentExtractedField";
        DocumentDeadline: "DocumentDeadline";
        Notification: "Notification";
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
                | "documentExtractedField"
                | "documentDeadline"
                | "notification"
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
            DocumentDeadline: {
                payload: Prisma.$DocumentDeadlinePayload<ExtArgs>;
                fields: Prisma.DocumentDeadlineFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.DocumentDeadlineFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.DocumentDeadlineFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>;
                    };
                    findFirst: {
                        args: Prisma.DocumentDeadlineFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.DocumentDeadlineFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>;
                    };
                    findMany: {
                        args: Prisma.DocumentDeadlineFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>[];
                    };
                    create: {
                        args: Prisma.DocumentDeadlineCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>;
                    };
                    createMany: {
                        args: Prisma.DocumentDeadlineCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.DocumentDeadlineCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>[];
                    };
                    delete: {
                        args: Prisma.DocumentDeadlineDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>;
                    };
                    update: {
                        args: Prisma.DocumentDeadlineUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>;
                    };
                    deleteMany: {
                        args: Prisma.DocumentDeadlineDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.DocumentDeadlineUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.DocumentDeadlineUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>[];
                    };
                    upsert: {
                        args: Prisma.DocumentDeadlineUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$DocumentDeadlinePayload>;
                    };
                    aggregate: {
                        args: Prisma.DocumentDeadlineAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateDocumentDeadline>;
                    };
                    groupBy: {
                        args: Prisma.DocumentDeadlineGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<DocumentDeadlineGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.DocumentDeadlineCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<DocumentDeadlineCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Notification: {
                payload: Prisma.$NotificationPayload<ExtArgs>;
                fields: Prisma.NotificationFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
                    };
                    findFirst: {
                        args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
                    };
                    findMany: {
                        args: Prisma.NotificationFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                    };
                    create: {
                        args: Prisma.NotificationCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
                    };
                    createMany: {
                        args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                    };
                    delete: {
                        args: Prisma.NotificationDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
                    };
                    update: {
                        args: Prisma.NotificationUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
                    };
                    deleteMany: {
                        args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                    };
                    upsert: {
                        args: Prisma.NotificationUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
                    };
                    aggregate: {
                        args: Prisma.NotificationAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateNotification>;
                    };
                    groupBy: {
                        args: Prisma.NotificationGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<NotificationGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.NotificationCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<NotificationCountAggregateOutputType>
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
        documentExtractedField?: DocumentExtractedFieldOmit;
        documentDeadline?: DocumentDeadlineOmit;
        notification?: NotificationOmit;
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
        documentDeadlines: number;
        actionLogs: number;
    };

    export type DocumentCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        documentExtractedFields?:
            | boolean
            | DocumentCountOutputTypeCountDocumentExtractedFieldsArgs;
        documentDeadlines?:
            | boolean
            | DocumentCountOutputTypeCountDocumentDeadlinesArgs;
        actionLogs?: boolean | DocumentCountOutputTypeCountActionLogsArgs;
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
    export type DocumentCountOutputTypeCountDocumentDeadlinesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentDeadlineWhereInput;
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
     * Models
     */

    /**
     * Model Document
     */

    export type AggregateDocument = {
        _count: DocumentCountAggregateOutputType | null;
        _avg: DocumentAvgAggregateOutputType | null;
        _sum: DocumentSumAggregateOutputType | null;
        _min: DocumentMinAggregateOutputType | null;
        _max: DocumentMaxAggregateOutputType | null;
    };

    export type DocumentAvgAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type DocumentSumAggregateOutputType = {
        fileSize: number | null;
        width: number | null;
        height: number | null;
    };

    export type DocumentMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.DocumentStatuses | null;
        name: string | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        expiredAt: Date | null;
        width: number | null;
        height: number | null;
    };

    export type DocumentMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.DocumentStatuses | null;
        name: string | null;
        key: string | null;
        fileSize: number | null;
        mimeType: string | null;
        url: string | null;
        expiredAt: Date | null;
        width: number | null;
        height: number | null;
    };

    export type DocumentCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        status: number;
        tags: number;
        name: number;
        key: number;
        fileSize: number;
        mimeType: number;
        url: number;
        expiredAt: number;
        width: number;
        height: number;
        _all: number;
    };

    export type DocumentAvgAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type DocumentSumAggregateInputType = {
        fileSize?: true;
        width?: true;
        height?: true;
    };

    export type DocumentMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        name?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
    };

    export type DocumentMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        name?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
    };

    export type DocumentCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        tags?: true;
        name?: true;
        key?: true;
        fileSize?: true;
        mimeType?: true;
        url?: true;
        expiredAt?: true;
        width?: true;
        height?: true;
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
         * Select which fields to average
         **/
        _avg?: DocumentAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: DocumentSumAggregateInputType;
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
        _avg?: DocumentAvgAggregateInputType;
        _sum?: DocumentSumAggregateInputType;
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
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date;
        width: number | null;
        height: number | null;
        _count: DocumentCountAggregateOutputType | null;
        _avg: DocumentAvgAggregateOutputType | null;
        _sum: DocumentSumAggregateOutputType | null;
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
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
            documentExtractedFields?:
                | boolean
                | Document$documentExtractedFieldsArgs<ExtArgs>;
            documentDeadlines?:
                | boolean
                | Document$documentDeadlinesArgs<ExtArgs>;
            actionLogs?: boolean | Document$actionLogsArgs<ExtArgs>;
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
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
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
            key?: boolean;
            fileSize?: boolean;
            mimeType?: boolean;
            url?: boolean;
            expiredAt?: boolean;
            width?: boolean;
            height?: boolean;
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
        key?: boolean;
        fileSize?: boolean;
        mimeType?: boolean;
        url?: boolean;
        expiredAt?: boolean;
        width?: boolean;
        height?: boolean;
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
        | "key"
        | "fileSize"
        | "mimeType"
        | "url"
        | "expiredAt"
        | "width"
        | "height",
        ExtArgs["result"]["document"]
    >;
    export type DocumentInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        documentExtractedFields?:
            | boolean
            | Document$documentExtractedFieldsArgs<ExtArgs>;
        documentDeadlines?: boolean | Document$documentDeadlinesArgs<ExtArgs>;
        actionLogs?: boolean | Document$actionLogsArgs<ExtArgs>;
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
            documentDeadlines: Prisma.$DocumentDeadlinePayload<ExtArgs>[];
            actionLogs: Prisma.$ActionLogPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: $Enums.DocumentStatuses;
                tags: string[];
                name: string;
                key: string;
                fileSize: number;
                mimeType: string;
                url: string;
                expiredAt: Date;
                width: number | null;
                height: number | null;
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
        documentDeadlines<
            T extends Document$documentDeadlinesArgs<ExtArgs> = {},
        >(
            args?: Subset<T, Document$documentDeadlinesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$DocumentDeadlinePayload<ExtArgs>,
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
        readonly key: FieldRef<"Document", "String">;
        readonly fileSize: FieldRef<"Document", "Float">;
        readonly mimeType: FieldRef<"Document", "String">;
        readonly url: FieldRef<"Document", "String">;
        readonly expiredAt: FieldRef<"Document", "DateTime">;
        readonly width: FieldRef<"Document", "Float">;
        readonly height: FieldRef<"Document", "Float">;
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
     * Document.documentDeadlines
     */
    export type Document$documentDeadlinesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        where?: DocumentDeadlineWhereInput;
        orderBy?:
            | DocumentDeadlineOrderByWithRelationInput
            | DocumentDeadlineOrderByWithRelationInput[];
        cursor?: DocumentDeadlineWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | DocumentDeadlineScalarFieldEnum
            | DocumentDeadlineScalarFieldEnum[];
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
     * Model DocumentDeadline
     */

    export type AggregateDocumentDeadline = {
        _count: DocumentDeadlineCountAggregateOutputType | null;
        _min: DocumentDeadlineMinAggregateOutputType | null;
        _max: DocumentDeadlineMaxAggregateOutputType | null;
    };

    export type DocumentDeadlineMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
        dueAt: Date | null;
        status: $Enums.DeadlineStatus | null;
        riskLevel: string | null;
        documentId: string | null;
    };

    export type DocumentDeadlineMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
        dueAt: Date | null;
        status: $Enums.DeadlineStatus | null;
        riskLevel: string | null;
        documentId: string | null;
    };

    export type DocumentDeadlineCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        name: number;
        dueAt: number;
        status: number;
        riskLevel: number;
        documentId: number;
        _all: number;
    };

    export type DocumentDeadlineMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        dueAt?: true;
        status?: true;
        riskLevel?: true;
        documentId?: true;
    };

    export type DocumentDeadlineMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        dueAt?: true;
        status?: true;
        riskLevel?: true;
        documentId?: true;
    };

    export type DocumentDeadlineCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        dueAt?: true;
        status?: true;
        riskLevel?: true;
        documentId?: true;
        _all?: true;
    };

    export type DocumentDeadlineAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which DocumentDeadline to aggregate.
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentDeadlines to fetch.
         */
        orderBy?:
            | DocumentDeadlineOrderByWithRelationInput
            | DocumentDeadlineOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: DocumentDeadlineWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentDeadlines from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentDeadlines.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned DocumentDeadlines
         **/
        _count?: true | DocumentDeadlineCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: DocumentDeadlineMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: DocumentDeadlineMaxAggregateInputType;
    };

    export type GetDocumentDeadlineAggregateType<
        T extends DocumentDeadlineAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateDocumentDeadline]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateDocumentDeadline[P]>
            : GetScalarType<T[P], AggregateDocumentDeadline[P]>;
    };

    export type DocumentDeadlineGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: DocumentDeadlineWhereInput;
        orderBy?:
            | DocumentDeadlineOrderByWithAggregationInput
            | DocumentDeadlineOrderByWithAggregationInput[];
        by: DocumentDeadlineScalarFieldEnum[] | DocumentDeadlineScalarFieldEnum;
        having?: DocumentDeadlineScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: DocumentDeadlineCountAggregateInputType | true;
        _min?: DocumentDeadlineMinAggregateInputType;
        _max?: DocumentDeadlineMaxAggregateInputType;
    };

    export type DocumentDeadlineGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        dueAt: Date;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
        documentId: string;
        _count: DocumentDeadlineCountAggregateOutputType | null;
        _min: DocumentDeadlineMinAggregateOutputType | null;
        _max: DocumentDeadlineMaxAggregateOutputType | null;
    };

    type GetDocumentDeadlineGroupByPayload<
        T extends DocumentDeadlineGroupByArgs,
    > = Prisma.PrismaPromise<
        Array<
            PickEnumerable<DocumentDeadlineGroupByOutputType, T["by"]> & {
                [P in keyof T &
                    keyof DocumentDeadlineGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<
                              T[P],
                              DocumentDeadlineGroupByOutputType[P]
                          >
                    : GetScalarType<T[P], DocumentDeadlineGroupByOutputType[P]>;
            }
        >
    >;

    export type DocumentDeadlineSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            dueAt?: boolean;
            status?: boolean;
            riskLevel?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentDeadline"]
    >;

    export type DocumentDeadlineSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            dueAt?: boolean;
            status?: boolean;
            riskLevel?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentDeadline"]
    >;

    export type DocumentDeadlineSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            dueAt?: boolean;
            status?: boolean;
            riskLevel?: boolean;
            documentId?: boolean;
            document?: boolean | DocumentDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["documentDeadline"]
    >;

    export type DocumentDeadlineSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        name?: boolean;
        dueAt?: boolean;
        status?: boolean;
        riskLevel?: boolean;
        documentId?: boolean;
    };

    export type DocumentDeadlineOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "name"
        | "dueAt"
        | "status"
        | "riskLevel"
        | "documentId",
        ExtArgs["result"]["documentDeadline"]
    >;
    export type DocumentDeadlineInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };
    export type DocumentDeadlineIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };
    export type DocumentDeadlineIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | DocumentDefaultArgs<ExtArgs>;
    };

    export type $DocumentDeadlinePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "DocumentDeadline";
        objects: {
            document: Prisma.$DocumentPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                dueAt: Date;
                status: $Enums.DeadlineStatus;
                riskLevel: string;
                documentId: string;
            },
            ExtArgs["result"]["documentDeadline"]
        >;
        composites: {};
    };

    type DocumentDeadlineGetPayload<
        S extends boolean | null | undefined | DocumentDeadlineDefaultArgs,
    > = $Result.GetResult<Prisma.$DocumentDeadlinePayload, S>;

    type DocumentDeadlineCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        DocumentDeadlineFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: DocumentDeadlineCountAggregateInputType | true;
    };

    export interface DocumentDeadlineDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["DocumentDeadline"];
            meta: { name: "DocumentDeadline" };
        };
        /**
         * Find zero or one DocumentDeadline that matches the filter.
         * @param {DocumentDeadlineFindUniqueArgs} args - Arguments to find a DocumentDeadline
         * @example
         * // Get one DocumentDeadline
         * const documentDeadline = await prisma.documentDeadline.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends DocumentDeadlineFindUniqueArgs>(
            args: SelectSubset<T, DocumentDeadlineFindUniqueArgs<ExtArgs>>
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one DocumentDeadline that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {DocumentDeadlineFindUniqueOrThrowArgs} args - Arguments to find a DocumentDeadline
         * @example
         * // Get one DocumentDeadline
         * const documentDeadline = await prisma.documentDeadline.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends DocumentDeadlineFindUniqueOrThrowArgs>(
            args: SelectSubset<
                T,
                DocumentDeadlineFindUniqueOrThrowArgs<ExtArgs>
            >
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first DocumentDeadline that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineFindFirstArgs} args - Arguments to find a DocumentDeadline
         * @example
         * // Get one DocumentDeadline
         * const documentDeadline = await prisma.documentDeadline.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends DocumentDeadlineFindFirstArgs>(
            args?: SelectSubset<T, DocumentDeadlineFindFirstArgs<ExtArgs>>
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first DocumentDeadline that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineFindFirstOrThrowArgs} args - Arguments to find a DocumentDeadline
         * @example
         * // Get one DocumentDeadline
         * const documentDeadline = await prisma.documentDeadline.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends DocumentDeadlineFindFirstOrThrowArgs>(
            args?: SelectSubset<
                T,
                DocumentDeadlineFindFirstOrThrowArgs<ExtArgs>
            >
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more DocumentDeadlines that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all DocumentDeadlines
         * const documentDeadlines = await prisma.documentDeadline.findMany()
         *
         * // Get first 10 DocumentDeadlines
         * const documentDeadlines = await prisma.documentDeadline.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const documentDeadlineWithIdOnly = await prisma.documentDeadline.findMany({ select: { id: true } })
         *
         */
        findMany<T extends DocumentDeadlineFindManyArgs>(
            args?: SelectSubset<T, DocumentDeadlineFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a DocumentDeadline.
         * @param {DocumentDeadlineCreateArgs} args - Arguments to create a DocumentDeadline.
         * @example
         * // Create one DocumentDeadline
         * const DocumentDeadline = await prisma.documentDeadline.create({
         *   data: {
         *     // ... data to create a DocumentDeadline
         *   }
         * })
         *
         */
        create<T extends DocumentDeadlineCreateArgs>(
            args: SelectSubset<T, DocumentDeadlineCreateArgs<ExtArgs>>
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many DocumentDeadlines.
         * @param {DocumentDeadlineCreateManyArgs} args - Arguments to create many DocumentDeadlines.
         * @example
         * // Create many DocumentDeadlines
         * const documentDeadline = await prisma.documentDeadline.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends DocumentDeadlineCreateManyArgs>(
            args?: SelectSubset<T, DocumentDeadlineCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many DocumentDeadlines and returns the data saved in the database.
         * @param {DocumentDeadlineCreateManyAndReturnArgs} args - Arguments to create many DocumentDeadlines.
         * @example
         * // Create many DocumentDeadlines
         * const documentDeadline = await prisma.documentDeadline.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many DocumentDeadlines and only return the `id`
         * const documentDeadlineWithIdOnly = await prisma.documentDeadline.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends DocumentDeadlineCreateManyAndReturnArgs>(
            args?: SelectSubset<
                T,
                DocumentDeadlineCreateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a DocumentDeadline.
         * @param {DocumentDeadlineDeleteArgs} args - Arguments to delete one DocumentDeadline.
         * @example
         * // Delete one DocumentDeadline
         * const DocumentDeadline = await prisma.documentDeadline.delete({
         *   where: {
         *     // ... filter to delete one DocumentDeadline
         *   }
         * })
         *
         */
        delete<T extends DocumentDeadlineDeleteArgs>(
            args: SelectSubset<T, DocumentDeadlineDeleteArgs<ExtArgs>>
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one DocumentDeadline.
         * @param {DocumentDeadlineUpdateArgs} args - Arguments to update one DocumentDeadline.
         * @example
         * // Update one DocumentDeadline
         * const documentDeadline = await prisma.documentDeadline.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends DocumentDeadlineUpdateArgs>(
            args: SelectSubset<T, DocumentDeadlineUpdateArgs<ExtArgs>>
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more DocumentDeadlines.
         * @param {DocumentDeadlineDeleteManyArgs} args - Arguments to filter DocumentDeadlines to delete.
         * @example
         * // Delete a few DocumentDeadlines
         * const { count } = await prisma.documentDeadline.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends DocumentDeadlineDeleteManyArgs>(
            args?: SelectSubset<T, DocumentDeadlineDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more DocumentDeadlines.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many DocumentDeadlines
         * const documentDeadline = await prisma.documentDeadline.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends DocumentDeadlineUpdateManyArgs>(
            args: SelectSubset<T, DocumentDeadlineUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more DocumentDeadlines and returns the data updated in the database.
         * @param {DocumentDeadlineUpdateManyAndReturnArgs} args - Arguments to update many DocumentDeadlines.
         * @example
         * // Update many DocumentDeadlines
         * const documentDeadline = await prisma.documentDeadline.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more DocumentDeadlines and only return the `id`
         * const documentDeadlineWithIdOnly = await prisma.documentDeadline.updateManyAndReturn({
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
        updateManyAndReturn<T extends DocumentDeadlineUpdateManyAndReturnArgs>(
            args: SelectSubset<
                T,
                DocumentDeadlineUpdateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one DocumentDeadline.
         * @param {DocumentDeadlineUpsertArgs} args - Arguments to update or create a DocumentDeadline.
         * @example
         * // Update or create a DocumentDeadline
         * const documentDeadline = await prisma.documentDeadline.upsert({
         *   create: {
         *     // ... data to create a DocumentDeadline
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the DocumentDeadline we want to update
         *   }
         * })
         */
        upsert<T extends DocumentDeadlineUpsertArgs>(
            args: SelectSubset<T, DocumentDeadlineUpsertArgs<ExtArgs>>
        ): Prisma__DocumentDeadlineClient<
            $Result.GetResult<
                Prisma.$DocumentDeadlinePayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of DocumentDeadlines.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineCountArgs} args - Arguments to filter DocumentDeadlines to count.
         * @example
         * // Count the number of DocumentDeadlines
         * const count = await prisma.documentDeadline.count({
         *   where: {
         *     // ... the filter for the DocumentDeadlines we want to count
         *   }
         * })
         **/
        count<T extends DocumentDeadlineCountArgs>(
            args?: Subset<T, DocumentDeadlineCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          DocumentDeadlineCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a DocumentDeadline.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends DocumentDeadlineAggregateArgs>(
            args: Subset<T, DocumentDeadlineAggregateArgs>
        ): Prisma.PrismaPromise<GetDocumentDeadlineAggregateType<T>>;

        /**
         * Group by DocumentDeadline.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {DocumentDeadlineGroupByArgs} args - Group by arguments.
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
            T extends DocumentDeadlineGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: DocumentDeadlineGroupByArgs["orderBy"] }
                : { orderBy?: DocumentDeadlineGroupByArgs["orderBy"] },
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
                DocumentDeadlineGroupByArgs,
                OrderByArg
            > &
                InputErrors
        ): {} extends InputErrors
            ? GetDocumentDeadlineGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the DocumentDeadline model
         */
        readonly fields: DocumentDeadlineFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for DocumentDeadline.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__DocumentDeadlineClient<
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
     * Fields of the DocumentDeadline model
     */
    interface DocumentDeadlineFieldRefs {
        readonly id: FieldRef<"DocumentDeadline", "String">;
        readonly createdAt: FieldRef<"DocumentDeadline", "DateTime">;
        readonly updatedAt: FieldRef<"DocumentDeadline", "DateTime">;
        readonly name: FieldRef<"DocumentDeadline", "String">;
        readonly dueAt: FieldRef<"DocumentDeadline", "DateTime">;
        readonly status: FieldRef<"DocumentDeadline", "DeadlineStatus">;
        readonly riskLevel: FieldRef<"DocumentDeadline", "String">;
        readonly documentId: FieldRef<"DocumentDeadline", "String">;
    }

    // Custom InputTypes
    /**
     * DocumentDeadline findUnique
     */
    export type DocumentDeadlineFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentDeadline to fetch.
         */
        where: DocumentDeadlineWhereUniqueInput;
    };

    /**
     * DocumentDeadline findUniqueOrThrow
     */
    export type DocumentDeadlineFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentDeadline to fetch.
         */
        where: DocumentDeadlineWhereUniqueInput;
    };

    /**
     * DocumentDeadline findFirst
     */
    export type DocumentDeadlineFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentDeadline to fetch.
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentDeadlines to fetch.
         */
        orderBy?:
            | DocumentDeadlineOrderByWithRelationInput
            | DocumentDeadlineOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for DocumentDeadlines.
         */
        cursor?: DocumentDeadlineWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentDeadlines from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentDeadlines.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of DocumentDeadlines.
         */
        distinct?:
            | DocumentDeadlineScalarFieldEnum
            | DocumentDeadlineScalarFieldEnum[];
    };

    /**
     * DocumentDeadline findFirstOrThrow
     */
    export type DocumentDeadlineFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentDeadline to fetch.
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentDeadlines to fetch.
         */
        orderBy?:
            | DocumentDeadlineOrderByWithRelationInput
            | DocumentDeadlineOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for DocumentDeadlines.
         */
        cursor?: DocumentDeadlineWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentDeadlines from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentDeadlines.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of DocumentDeadlines.
         */
        distinct?:
            | DocumentDeadlineScalarFieldEnum
            | DocumentDeadlineScalarFieldEnum[];
    };

    /**
     * DocumentDeadline findMany
     */
    export type DocumentDeadlineFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * Filter, which DocumentDeadlines to fetch.
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of DocumentDeadlines to fetch.
         */
        orderBy?:
            | DocumentDeadlineOrderByWithRelationInput
            | DocumentDeadlineOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing DocumentDeadlines.
         */
        cursor?: DocumentDeadlineWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` DocumentDeadlines from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` DocumentDeadlines.
         */
        skip?: number;
        distinct?:
            | DocumentDeadlineScalarFieldEnum
            | DocumentDeadlineScalarFieldEnum[];
    };

    /**
     * DocumentDeadline create
     */
    export type DocumentDeadlineCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * The data needed to create a DocumentDeadline.
         */
        data: XOR<
            DocumentDeadlineCreateInput,
            DocumentDeadlineUncheckedCreateInput
        >;
    };

    /**
     * DocumentDeadline createMany
     */
    export type DocumentDeadlineCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many DocumentDeadlines.
         */
        data:
            | DocumentDeadlineCreateManyInput
            | DocumentDeadlineCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * DocumentDeadline createManyAndReturn
     */
    export type DocumentDeadlineCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * The data used to create many DocumentDeadlines.
         */
        data:
            | DocumentDeadlineCreateManyInput
            | DocumentDeadlineCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * DocumentDeadline update
     */
    export type DocumentDeadlineUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * The data needed to update a DocumentDeadline.
         */
        data: XOR<
            DocumentDeadlineUpdateInput,
            DocumentDeadlineUncheckedUpdateInput
        >;
        /**
         * Choose, which DocumentDeadline to update.
         */
        where: DocumentDeadlineWhereUniqueInput;
    };

    /**
     * DocumentDeadline updateMany
     */
    export type DocumentDeadlineUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update DocumentDeadlines.
         */
        data: XOR<
            DocumentDeadlineUpdateManyMutationInput,
            DocumentDeadlineUncheckedUpdateManyInput
        >;
        /**
         * Filter which DocumentDeadlines to update
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * Limit how many DocumentDeadlines to update.
         */
        limit?: number;
    };

    /**
     * DocumentDeadline updateManyAndReturn
     */
    export type DocumentDeadlineUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * The data used to update DocumentDeadlines.
         */
        data: XOR<
            DocumentDeadlineUpdateManyMutationInput,
            DocumentDeadlineUncheckedUpdateManyInput
        >;
        /**
         * Filter which DocumentDeadlines to update
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * Limit how many DocumentDeadlines to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * DocumentDeadline upsert
     */
    export type DocumentDeadlineUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * The filter to search for the DocumentDeadline to update in case it exists.
         */
        where: DocumentDeadlineWhereUniqueInput;
        /**
         * In case the DocumentDeadline found by the `where` argument doesn't exist, create a new DocumentDeadline with this data.
         */
        create: XOR<
            DocumentDeadlineCreateInput,
            DocumentDeadlineUncheckedCreateInput
        >;
        /**
         * In case the DocumentDeadline was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            DocumentDeadlineUpdateInput,
            DocumentDeadlineUncheckedUpdateInput
        >;
    };

    /**
     * DocumentDeadline delete
     */
    export type DocumentDeadlineDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
        /**
         * Filter which DocumentDeadline to delete.
         */
        where: DocumentDeadlineWhereUniqueInput;
    };

    /**
     * DocumentDeadline deleteMany
     */
    export type DocumentDeadlineDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which DocumentDeadlines to delete
         */
        where?: DocumentDeadlineWhereInput;
        /**
         * Limit how many DocumentDeadlines to delete.
         */
        limit?: number;
    };

    /**
     * DocumentDeadline without action
     */
    export type DocumentDeadlineDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the DocumentDeadline
         */
        select?: DocumentDeadlineSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the DocumentDeadline
         */
        omit?: DocumentDeadlineOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: DocumentDeadlineInclude<ExtArgs> | null;
    };

    /**
     * Model Notification
     */

    export type AggregateNotification = {
        _count: NotificationCountAggregateOutputType | null;
        _min: NotificationMinAggregateOutputType | null;
        _max: NotificationMaxAggregateOutputType | null;
    };

    export type NotificationMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        title: string | null;
        description: string | null;
        userId: string | null;
    };

    export type NotificationMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        title: string | null;
        description: string | null;
        userId: string | null;
    };

    export type NotificationCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        title: number;
        description: number;
        userId: number;
        _all: number;
    };

    export type NotificationMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        title?: true;
        description?: true;
        userId?: true;
    };

    export type NotificationMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        title?: true;
        description?: true;
        userId?: true;
    };

    export type NotificationCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        title?: true;
        description?: true;
        userId?: true;
        _all?: true;
    };

    export type NotificationAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Notification to aggregate.
         */
        where?: NotificationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Notifications to fetch.
         */
        orderBy?:
            | NotificationOrderByWithRelationInput
            | NotificationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: NotificationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Notifications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Notifications.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Notifications
         **/
        _count?: true | NotificationCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: NotificationMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: NotificationMaxAggregateInputType;
    };

    export type GetNotificationAggregateType<
        T extends NotificationAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateNotification]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateNotification[P]>
            : GetScalarType<T[P], AggregateNotification[P]>;
    };

    export type NotificationGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: NotificationWhereInput;
        orderBy?:
            | NotificationOrderByWithAggregationInput
            | NotificationOrderByWithAggregationInput[];
        by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum;
        having?: NotificationScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: NotificationCountAggregateInputType | true;
        _min?: NotificationMinAggregateInputType;
        _max?: NotificationMaxAggregateInputType;
    };

    export type NotificationGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        userId: string;
        _count: NotificationCountAggregateOutputType | null;
        _min: NotificationMinAggregateOutputType | null;
        _max: NotificationMaxAggregateOutputType | null;
    };

    type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<NotificationGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof NotificationGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  NotificationGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], NotificationGroupByOutputType[P]>;
                }
            >
        >;

    export type NotificationSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            title?: boolean;
            description?: boolean;
            userId?: boolean;
        },
        ExtArgs["result"]["notification"]
    >;

    export type NotificationSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            title?: boolean;
            description?: boolean;
            userId?: boolean;
        },
        ExtArgs["result"]["notification"]
    >;

    export type NotificationSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            title?: boolean;
            description?: boolean;
            userId?: boolean;
        },
        ExtArgs["result"]["notification"]
    >;

    export type NotificationSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        title?: boolean;
        description?: boolean;
        userId?: boolean;
    };

    export type NotificationOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "createdAt" | "updatedAt" | "title" | "description" | "userId",
        ExtArgs["result"]["notification"]
    >;

    export type $NotificationPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Notification";
        objects: {};
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                userId: string;
            },
            ExtArgs["result"]["notification"]
        >;
        composites: {};
    };

    type NotificationGetPayload<
        S extends boolean | null | undefined | NotificationDefaultArgs,
    > = $Result.GetResult<Prisma.$NotificationPayload, S>;

    type NotificationCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        NotificationFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: NotificationCountAggregateInputType | true;
    };

    export interface NotificationDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Notification"];
            meta: { name: "Notification" };
        };
        /**
         * Find zero or one Notification that matches the filter.
         * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
         * @example
         * // Get one Notification
         * const notification = await prisma.notification.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends NotificationFindUniqueArgs>(
            args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
         * @example
         * // Get one Notification
         * const notification = await prisma.notification.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
            args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Notification that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
         * @example
         * // Get one Notification
         * const notification = await prisma.notification.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends NotificationFindFirstArgs>(
            args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Notification that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
         * @example
         * // Get one Notification
         * const notification = await prisma.notification.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
            args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Notifications that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Notifications
         * const notifications = await prisma.notification.findMany()
         *
         * // Get first 10 Notifications
         * const notifications = await prisma.notification.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
         *
         */
        findMany<T extends NotificationFindManyArgs>(
            args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Notification.
         * @param {NotificationCreateArgs} args - Arguments to create a Notification.
         * @example
         * // Create one Notification
         * const Notification = await prisma.notification.create({
         *   data: {
         *     // ... data to create a Notification
         *   }
         * })
         *
         */
        create<T extends NotificationCreateArgs>(
            args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Notifications.
         * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
         * @example
         * // Create many Notifications
         * const notification = await prisma.notification.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends NotificationCreateManyArgs>(
            args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Notifications and returns the data saved in the database.
         * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
         * @example
         * // Create many Notifications
         * const notification = await prisma.notification.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Notifications and only return the `id`
         * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
            args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Notification.
         * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
         * @example
         * // Delete one Notification
         * const Notification = await prisma.notification.delete({
         *   where: {
         *     // ... filter to delete one Notification
         *   }
         * })
         *
         */
        delete<T extends NotificationDeleteArgs>(
            args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Notification.
         * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
         * @example
         * // Update one Notification
         * const notification = await prisma.notification.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends NotificationUpdateArgs>(
            args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Notifications.
         * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
         * @example
         * // Delete a few Notifications
         * const { count } = await prisma.notification.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends NotificationDeleteManyArgs>(
            args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Notifications.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Notifications
         * const notification = await prisma.notification.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends NotificationUpdateManyArgs>(
            args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Notifications and returns the data updated in the database.
         * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
         * @example
         * // Update many Notifications
         * const notification = await prisma.notification.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Notifications and only return the `id`
         * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
        updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
            args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Notification.
         * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
         * @example
         * // Update or create a Notification
         * const notification = await prisma.notification.upsert({
         *   create: {
         *     // ... data to create a Notification
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Notification we want to update
         *   }
         * })
         */
        upsert<T extends NotificationUpsertArgs>(
            args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
        ): Prisma__NotificationClient<
            $Result.GetResult<
                Prisma.$NotificationPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Notifications.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
         * @example
         * // Count the number of Notifications
         * const count = await prisma.notification.count({
         *   where: {
         *     // ... the filter for the Notifications we want to count
         *   }
         * })
         **/
        count<T extends NotificationCountArgs>(
            args?: Subset<T, NotificationCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          NotificationCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Notification.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends NotificationAggregateArgs>(
            args: Subset<T, NotificationAggregateArgs>
        ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;

        /**
         * Group by Notification.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {NotificationGroupByArgs} args - Group by arguments.
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
            T extends NotificationGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: NotificationGroupByArgs["orderBy"] }
                : { orderBy?: NotificationGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetNotificationGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Notification model
         */
        readonly fields: NotificationFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Notification.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__NotificationClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
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
     * Fields of the Notification model
     */
    interface NotificationFieldRefs {
        readonly id: FieldRef<"Notification", "String">;
        readonly createdAt: FieldRef<"Notification", "DateTime">;
        readonly updatedAt: FieldRef<"Notification", "DateTime">;
        readonly title: FieldRef<"Notification", "String">;
        readonly description: FieldRef<"Notification", "String">;
        readonly userId: FieldRef<"Notification", "String">;
    }

    // Custom InputTypes
    /**
     * Notification findUnique
     */
    export type NotificationFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * Filter, which Notification to fetch.
         */
        where: NotificationWhereUniqueInput;
    };

    /**
     * Notification findUniqueOrThrow
     */
    export type NotificationFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * Filter, which Notification to fetch.
         */
        where: NotificationWhereUniqueInput;
    };

    /**
     * Notification findFirst
     */
    export type NotificationFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * Filter, which Notification to fetch.
         */
        where?: NotificationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Notifications to fetch.
         */
        orderBy?:
            | NotificationOrderByWithRelationInput
            | NotificationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Notifications.
         */
        cursor?: NotificationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Notifications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Notifications.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Notifications.
         */
        distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
    };

    /**
     * Notification findFirstOrThrow
     */
    export type NotificationFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * Filter, which Notification to fetch.
         */
        where?: NotificationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Notifications to fetch.
         */
        orderBy?:
            | NotificationOrderByWithRelationInput
            | NotificationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Notifications.
         */
        cursor?: NotificationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Notifications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Notifications.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Notifications.
         */
        distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
    };

    /**
     * Notification findMany
     */
    export type NotificationFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * Filter, which Notifications to fetch.
         */
        where?: NotificationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Notifications to fetch.
         */
        orderBy?:
            | NotificationOrderByWithRelationInput
            | NotificationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Notifications.
         */
        cursor?: NotificationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Notifications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Notifications.
         */
        skip?: number;
        distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
    };

    /**
     * Notification create
     */
    export type NotificationCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * The data needed to create a Notification.
         */
        data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
    };

    /**
     * Notification createMany
     */
    export type NotificationCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Notifications.
         */
        data: NotificationCreateManyInput | NotificationCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Notification createManyAndReturn
     */
    export type NotificationCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * The data used to create many Notifications.
         */
        data: NotificationCreateManyInput | NotificationCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Notification update
     */
    export type NotificationUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * The data needed to update a Notification.
         */
        data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
        /**
         * Choose, which Notification to update.
         */
        where: NotificationWhereUniqueInput;
    };

    /**
     * Notification updateMany
     */
    export type NotificationUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Notifications.
         */
        data: XOR<
            NotificationUpdateManyMutationInput,
            NotificationUncheckedUpdateManyInput
        >;
        /**
         * Filter which Notifications to update
         */
        where?: NotificationWhereInput;
        /**
         * Limit how many Notifications to update.
         */
        limit?: number;
    };

    /**
     * Notification updateManyAndReturn
     */
    export type NotificationUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * The data used to update Notifications.
         */
        data: XOR<
            NotificationUpdateManyMutationInput,
            NotificationUncheckedUpdateManyInput
        >;
        /**
         * Filter which Notifications to update
         */
        where?: NotificationWhereInput;
        /**
         * Limit how many Notifications to update.
         */
        limit?: number;
    };

    /**
     * Notification upsert
     */
    export type NotificationUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * The filter to search for the Notification to update in case it exists.
         */
        where: NotificationWhereUniqueInput;
        /**
         * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
         */
        create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
        /**
         * In case the Notification was found with the provided `where` argument, update it with this data.
         */
        update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
    };

    /**
     * Notification delete
     */
    export type NotificationDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
        /**
         * Filter which Notification to delete.
         */
        where: NotificationWhereUniqueInput;
    };

    /**
     * Notification deleteMany
     */
    export type NotificationDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Notifications to delete
         */
        where?: NotificationWhereInput;
        /**
         * Limit how many Notifications to delete.
         */
        limit?: number;
    };

    /**
     * Notification without action
     */
    export type NotificationDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Notification
         */
        select?: NotificationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Notification
         */
        omit?: NotificationOmit<ExtArgs> | null;
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
        key: "key";
        fileSize: "fileSize";
        mimeType: "mimeType";
        url: "url";
        expiredAt: "expiredAt";
        width: "width";
        height: "height";
    };

    export type DocumentScalarFieldEnum =
        (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];

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

    export const DocumentDeadlineScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        name: "name";
        dueAt: "dueAt";
        status: "status";
        riskLevel: "riskLevel";
        documentId: "documentId";
    };

    export type DocumentDeadlineScalarFieldEnum =
        (typeof DocumentDeadlineScalarFieldEnum)[keyof typeof DocumentDeadlineScalarFieldEnum];

    export const NotificationScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        title: "title";
        description: "description";
        userId: "userId";
    };

    export type NotificationScalarFieldEnum =
        (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];

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
     * Reference to a field of type 'DeadlineStatus'
     */
    export type EnumDeadlineStatusFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "DeadlineStatus">;

    /**
     * Reference to a field of type 'DeadlineStatus[]'
     */
    export type ListEnumDeadlineStatusFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "DeadlineStatus[]">;

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
        key?: StringFilter<"Document"> | string;
        fileSize?: FloatFilter<"Document"> | number;
        mimeType?: StringFilter<"Document"> | string;
        url?: StringFilter<"Document"> | string;
        expiredAt?: DateTimeFilter<"Document"> | Date | string;
        width?: FloatNullableFilter<"Document"> | number | null;
        height?: FloatNullableFilter<"Document"> | number | null;
        documentExtractedFields?: DocumentExtractedFieldListRelationFilter;
        documentDeadlines?: DocumentDeadlineListRelationFilter;
        actionLogs?: ActionLogListRelationFilter;
    };

    export type DocumentOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        tags?: SortOrder;
        name?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrderInput | SortOrder;
        height?: SortOrderInput | SortOrder;
        documentExtractedFields?: DocumentExtractedFieldOrderByRelationAggregateInput;
        documentDeadlines?: DocumentDeadlineOrderByRelationAggregateInput;
        actionLogs?: ActionLogOrderByRelationAggregateInput;
    };

    export type DocumentWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            name?: string;
            key?: string;
            AND?: DocumentWhereInput | DocumentWhereInput[];
            OR?: DocumentWhereInput[];
            NOT?: DocumentWhereInput | DocumentWhereInput[];
            createdAt?: DateTimeFilter<"Document"> | Date | string;
            updatedAt?: DateTimeFilter<"Document"> | Date | string;
            status?:
                | EnumDocumentStatusesFilter<"Document">
                | $Enums.DocumentStatuses;
            tags?: StringNullableListFilter<"Document">;
            fileSize?: FloatFilter<"Document"> | number;
            mimeType?: StringFilter<"Document"> | string;
            url?: StringFilter<"Document"> | string;
            expiredAt?: DateTimeFilter<"Document"> | Date | string;
            width?: FloatNullableFilter<"Document"> | number | null;
            height?: FloatNullableFilter<"Document"> | number | null;
            documentExtractedFields?: DocumentExtractedFieldListRelationFilter;
            documentDeadlines?: DocumentDeadlineListRelationFilter;
            actionLogs?: ActionLogListRelationFilter;
        },
        "id" | "name" | "key"
    >;

    export type DocumentOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        tags?: SortOrder;
        name?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrderInput | SortOrder;
        height?: SortOrderInput | SortOrder;
        _count?: DocumentCountOrderByAggregateInput;
        _avg?: DocumentAvgOrderByAggregateInput;
        _max?: DocumentMaxOrderByAggregateInput;
        _min?: DocumentMinOrderByAggregateInput;
        _sum?: DocumentSumOrderByAggregateInput;
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
        key?: StringWithAggregatesFilter<"Document"> | string;
        fileSize?: FloatWithAggregatesFilter<"Document"> | number;
        mimeType?: StringWithAggregatesFilter<"Document"> | string;
        url?: StringWithAggregatesFilter<"Document"> | string;
        expiredAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string;
        width?: FloatNullableWithAggregatesFilter<"Document"> | number | null;
        height?: FloatNullableWithAggregatesFilter<"Document"> | number | null;
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

    export type DocumentDeadlineWhereInput = {
        AND?: DocumentDeadlineWhereInput | DocumentDeadlineWhereInput[];
        OR?: DocumentDeadlineWhereInput[];
        NOT?: DocumentDeadlineWhereInput | DocumentDeadlineWhereInput[];
        id?: StringFilter<"DocumentDeadline"> | string;
        createdAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
        name?: StringFilter<"DocumentDeadline"> | string;
        dueAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
        status?:
            | EnumDeadlineStatusFilter<"DocumentDeadline">
            | $Enums.DeadlineStatus;
        riskLevel?: StringFilter<"DocumentDeadline"> | string;
        documentId?: StringFilter<"DocumentDeadline"> | string;
        document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    };

    export type DocumentDeadlineOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        dueAt?: SortOrder;
        status?: SortOrder;
        riskLevel?: SortOrder;
        documentId?: SortOrder;
        document?: DocumentOrderByWithRelationInput;
    };

    export type DocumentDeadlineWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: DocumentDeadlineWhereInput | DocumentDeadlineWhereInput[];
            OR?: DocumentDeadlineWhereInput[];
            NOT?: DocumentDeadlineWhereInput | DocumentDeadlineWhereInput[];
            createdAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
            updatedAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
            name?: StringFilter<"DocumentDeadline"> | string;
            dueAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
            status?:
                | EnumDeadlineStatusFilter<"DocumentDeadline">
                | $Enums.DeadlineStatus;
            riskLevel?: StringFilter<"DocumentDeadline"> | string;
            documentId?: StringFilter<"DocumentDeadline"> | string;
            document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
        },
        "id"
    >;

    export type DocumentDeadlineOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        dueAt?: SortOrder;
        status?: SortOrder;
        riskLevel?: SortOrder;
        documentId?: SortOrder;
        _count?: DocumentDeadlineCountOrderByAggregateInput;
        _max?: DocumentDeadlineMaxOrderByAggregateInput;
        _min?: DocumentDeadlineMinOrderByAggregateInput;
    };

    export type DocumentDeadlineScalarWhereWithAggregatesInput = {
        AND?:
            | DocumentDeadlineScalarWhereWithAggregatesInput
            | DocumentDeadlineScalarWhereWithAggregatesInput[];
        OR?: DocumentDeadlineScalarWhereWithAggregatesInput[];
        NOT?:
            | DocumentDeadlineScalarWhereWithAggregatesInput
            | DocumentDeadlineScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"DocumentDeadline"> | string;
        createdAt?:
            | DateTimeWithAggregatesFilter<"DocumentDeadline">
            | Date
            | string;
        updatedAt?:
            | DateTimeWithAggregatesFilter<"DocumentDeadline">
            | Date
            | string;
        name?: StringWithAggregatesFilter<"DocumentDeadline"> | string;
        dueAt?:
            | DateTimeWithAggregatesFilter<"DocumentDeadline">
            | Date
            | string;
        status?:
            | EnumDeadlineStatusWithAggregatesFilter<"DocumentDeadline">
            | $Enums.DeadlineStatus;
        riskLevel?: StringWithAggregatesFilter<"DocumentDeadline"> | string;
        documentId?: StringWithAggregatesFilter<"DocumentDeadline"> | string;
    };

    export type NotificationWhereInput = {
        AND?: NotificationWhereInput | NotificationWhereInput[];
        OR?: NotificationWhereInput[];
        NOT?: NotificationWhereInput | NotificationWhereInput[];
        id?: StringFilter<"Notification"> | string;
        createdAt?: DateTimeFilter<"Notification"> | Date | string;
        updatedAt?: DateTimeFilter<"Notification"> | Date | string;
        title?: StringFilter<"Notification"> | string;
        description?: StringFilter<"Notification"> | string;
        userId?: StringFilter<"Notification"> | string;
    };

    export type NotificationOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        title?: SortOrder;
        description?: SortOrder;
        userId?: SortOrder;
    };

    export type NotificationWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: NotificationWhereInput | NotificationWhereInput[];
            OR?: NotificationWhereInput[];
            NOT?: NotificationWhereInput | NotificationWhereInput[];
            createdAt?: DateTimeFilter<"Notification"> | Date | string;
            updatedAt?: DateTimeFilter<"Notification"> | Date | string;
            title?: StringFilter<"Notification"> | string;
            description?: StringFilter<"Notification"> | string;
            userId?: StringFilter<"Notification"> | string;
        },
        "id"
    >;

    export type NotificationOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        title?: SortOrder;
        description?: SortOrder;
        userId?: SortOrder;
        _count?: NotificationCountOrderByAggregateInput;
        _max?: NotificationMaxOrderByAggregateInput;
        _min?: NotificationMinOrderByAggregateInput;
    };

    export type NotificationScalarWhereWithAggregatesInput = {
        AND?:
            | NotificationScalarWhereWithAggregatesInput
            | NotificationScalarWhereWithAggregatesInput[];
        OR?: NotificationScalarWhereWithAggregatesInput[];
        NOT?:
            | NotificationScalarWhereWithAggregatesInput
            | NotificationScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<"Notification"> | string;
        createdAt?:
            | DateTimeWithAggregatesFilter<"Notification">
            | Date
            | string;
        updatedAt?:
            | DateTimeWithAggregatesFilter<"Notification">
            | Date
            | string;
        title?: StringWithAggregatesFilter<"Notification"> | string;
        description?: StringWithAggregatesFilter<"Notification"> | string;
        userId?: StringWithAggregatesFilter<"Notification"> | string;
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
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        documentDeadlines?: DocumentDeadlineCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        documentDeadlines?: DocumentDeadlineUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        documentDeadlines?: DocumentDeadlineUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        documentDeadlines?: DocumentDeadlineUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
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

    export type DocumentDeadlineCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        dueAt: Date | string;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
        document: DocumentCreateNestedOneWithoutDocumentDeadlinesInput;
    };

    export type DocumentDeadlineUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        dueAt: Date | string;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
        documentId: string;
    };

    export type DocumentDeadlineUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
        document?: DocumentUpdateOneRequiredWithoutDocumentDeadlinesNestedInput;
    };

    export type DocumentDeadlineUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentDeadlineCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        dueAt: Date | string;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
        documentId: string;
    };

    export type DocumentDeadlineUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentDeadlineUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type NotificationCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        title: string;
        description: string;
        userId: string;
    };

    export type NotificationUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        title: string;
        description: string;
        userId: string;
    };

    export type NotificationUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        title?: StringFieldUpdateOperationsInput | string;
        description?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type NotificationUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        title?: StringFieldUpdateOperationsInput | string;
        description?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type NotificationCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        title: string;
        description: string;
        userId: string;
    };

    export type NotificationUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        title?: StringFieldUpdateOperationsInput | string;
        description?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
    };

    export type NotificationUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        title?: StringFieldUpdateOperationsInput | string;
        description?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
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

    export type DocumentExtractedFieldListRelationFilter = {
        every?: DocumentExtractedFieldWhereInput;
        some?: DocumentExtractedFieldWhereInput;
        none?: DocumentExtractedFieldWhereInput;
    };

    export type DocumentDeadlineListRelationFilter = {
        every?: DocumentDeadlineWhereInput;
        some?: DocumentDeadlineWhereInput;
        none?: DocumentDeadlineWhereInput;
    };

    export type ActionLogListRelationFilter = {
        every?: ActionLogWhereInput;
        some?: ActionLogWhereInput;
        none?: ActionLogWhereInput;
    };

    export type SortOrderInput = {
        sort: SortOrder;
        nulls?: NullsOrder;
    };

    export type DocumentExtractedFieldOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type DocumentDeadlineOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type ActionLogOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type DocumentCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        tags?: SortOrder;
        name?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type DocumentAvgOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type DocumentMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        name?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type DocumentMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        name?: SortOrder;
        key?: SortOrder;
        fileSize?: SortOrder;
        mimeType?: SortOrder;
        url?: SortOrder;
        expiredAt?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
    };

    export type DocumentSumOrderByAggregateInput = {
        fileSize?: SortOrder;
        width?: SortOrder;
        height?: SortOrder;
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

    export type DocumentScalarRelationFilter = {
        is?: DocumentWhereInput;
        isNot?: DocumentWhereInput;
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

    export type EnumDeadlineStatusFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.DeadlineStatus
            | EnumDeadlineStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDeadlineStatusFilter<$PrismaModel>
            | $Enums.DeadlineStatus;
    };

    export type DocumentDeadlineCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        dueAt?: SortOrder;
        status?: SortOrder;
        riskLevel?: SortOrder;
        documentId?: SortOrder;
    };

    export type DocumentDeadlineMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        dueAt?: SortOrder;
        status?: SortOrder;
        riskLevel?: SortOrder;
        documentId?: SortOrder;
    };

    export type DocumentDeadlineMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        dueAt?: SortOrder;
        status?: SortOrder;
        riskLevel?: SortOrder;
        documentId?: SortOrder;
    };

    export type EnumDeadlineStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.DeadlineStatus
            | EnumDeadlineStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDeadlineStatusWithAggregatesFilter<$PrismaModel>
            | $Enums.DeadlineStatus;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumDeadlineStatusFilter<$PrismaModel>;
        _max?: NestedEnumDeadlineStatusFilter<$PrismaModel>;
    };

    export type NotificationCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        title?: SortOrder;
        description?: SortOrder;
        userId?: SortOrder;
    };

    export type NotificationMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        title?: SortOrder;
        description?: SortOrder;
        userId?: SortOrder;
    };

    export type NotificationMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        title?: SortOrder;
        description?: SortOrder;
        userId?: SortOrder;
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

    export type DocumentDeadlineCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  DocumentDeadlineCreateWithoutDocumentInput,
                  DocumentDeadlineUncheckedCreateWithoutDocumentInput
              >
            | DocumentDeadlineCreateWithoutDocumentInput[]
            | DocumentDeadlineUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentDeadlineCreateOrConnectWithoutDocumentInput
            | DocumentDeadlineCreateOrConnectWithoutDocumentInput[];
        createMany?: DocumentDeadlineCreateManyDocumentInputEnvelope;
        connect?:
            | DocumentDeadlineWhereUniqueInput
            | DocumentDeadlineWhereUniqueInput[];
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

    export type DocumentDeadlineUncheckedCreateNestedManyWithoutDocumentInput =
        {
            create?:
                | XOR<
                      DocumentDeadlineCreateWithoutDocumentInput,
                      DocumentDeadlineUncheckedCreateWithoutDocumentInput
                  >
                | DocumentDeadlineCreateWithoutDocumentInput[]
                | DocumentDeadlineUncheckedCreateWithoutDocumentInput[];
            connectOrCreate?:
                | DocumentDeadlineCreateOrConnectWithoutDocumentInput
                | DocumentDeadlineCreateOrConnectWithoutDocumentInput[];
            createMany?: DocumentDeadlineCreateManyDocumentInputEnvelope;
            connect?:
                | DocumentDeadlineWhereUniqueInput
                | DocumentDeadlineWhereUniqueInput[];
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

    export type DocumentDeadlineUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  DocumentDeadlineCreateWithoutDocumentInput,
                  DocumentDeadlineUncheckedCreateWithoutDocumentInput
              >
            | DocumentDeadlineCreateWithoutDocumentInput[]
            | DocumentDeadlineUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | DocumentDeadlineCreateOrConnectWithoutDocumentInput
            | DocumentDeadlineCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | DocumentDeadlineUpsertWithWhereUniqueWithoutDocumentInput
            | DocumentDeadlineUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: DocumentDeadlineCreateManyDocumentInputEnvelope;
        set?:
            | DocumentDeadlineWhereUniqueInput
            | DocumentDeadlineWhereUniqueInput[];
        disconnect?:
            | DocumentDeadlineWhereUniqueInput
            | DocumentDeadlineWhereUniqueInput[];
        delete?:
            | DocumentDeadlineWhereUniqueInput
            | DocumentDeadlineWhereUniqueInput[];
        connect?:
            | DocumentDeadlineWhereUniqueInput
            | DocumentDeadlineWhereUniqueInput[];
        update?:
            | DocumentDeadlineUpdateWithWhereUniqueWithoutDocumentInput
            | DocumentDeadlineUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | DocumentDeadlineUpdateManyWithWhereWithoutDocumentInput
            | DocumentDeadlineUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?:
            | DocumentDeadlineScalarWhereInput
            | DocumentDeadlineScalarWhereInput[];
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

    export type DocumentDeadlineUncheckedUpdateManyWithoutDocumentNestedInput =
        {
            create?:
                | XOR<
                      DocumentDeadlineCreateWithoutDocumentInput,
                      DocumentDeadlineUncheckedCreateWithoutDocumentInput
                  >
                | DocumentDeadlineCreateWithoutDocumentInput[]
                | DocumentDeadlineUncheckedCreateWithoutDocumentInput[];
            connectOrCreate?:
                | DocumentDeadlineCreateOrConnectWithoutDocumentInput
                | DocumentDeadlineCreateOrConnectWithoutDocumentInput[];
            upsert?:
                | DocumentDeadlineUpsertWithWhereUniqueWithoutDocumentInput
                | DocumentDeadlineUpsertWithWhereUniqueWithoutDocumentInput[];
            createMany?: DocumentDeadlineCreateManyDocumentInputEnvelope;
            set?:
                | DocumentDeadlineWhereUniqueInput
                | DocumentDeadlineWhereUniqueInput[];
            disconnect?:
                | DocumentDeadlineWhereUniqueInput
                | DocumentDeadlineWhereUniqueInput[];
            delete?:
                | DocumentDeadlineWhereUniqueInput
                | DocumentDeadlineWhereUniqueInput[];
            connect?:
                | DocumentDeadlineWhereUniqueInput
                | DocumentDeadlineWhereUniqueInput[];
            update?:
                | DocumentDeadlineUpdateWithWhereUniqueWithoutDocumentInput
                | DocumentDeadlineUpdateWithWhereUniqueWithoutDocumentInput[];
            updateMany?:
                | DocumentDeadlineUpdateManyWithWhereWithoutDocumentInput
                | DocumentDeadlineUpdateManyWithWhereWithoutDocumentInput[];
            deleteMany?:
                | DocumentDeadlineScalarWhereInput
                | DocumentDeadlineScalarWhereInput[];
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

    export type DocumentCreateNestedOneWithoutDocumentDeadlinesInput = {
        create?: XOR<
            DocumentCreateWithoutDocumentDeadlinesInput,
            DocumentUncheckedCreateWithoutDocumentDeadlinesInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutDocumentDeadlinesInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type EnumDeadlineStatusFieldUpdateOperationsInput = {
        set?: $Enums.DeadlineStatus;
    };

    export type DocumentUpdateOneRequiredWithoutDocumentDeadlinesNestedInput = {
        create?: XOR<
            DocumentCreateWithoutDocumentDeadlinesInput,
            DocumentUncheckedCreateWithoutDocumentDeadlinesInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutDocumentDeadlinesInput;
        upsert?: DocumentUpsertWithoutDocumentDeadlinesInput;
        connect?: DocumentWhereUniqueInput;
        update?: XOR<
            XOR<
                DocumentUpdateToOneWithWhereWithoutDocumentDeadlinesInput,
                DocumentUpdateWithoutDocumentDeadlinesInput
            >,
            DocumentUncheckedUpdateWithoutDocumentDeadlinesInput
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

    export type NestedEnumDeadlineStatusFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.DeadlineStatus
            | EnumDeadlineStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDeadlineStatusFilter<$PrismaModel>
            | $Enums.DeadlineStatus;
    };

    export type NestedEnumDeadlineStatusWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.DeadlineStatus
            | EnumDeadlineStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.DeadlineStatus[]
            | ListEnumDeadlineStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumDeadlineStatusWithAggregatesFilter<$PrismaModel>
            | $Enums.DeadlineStatus;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumDeadlineStatusFilter<$PrismaModel>;
        _max?: NestedEnumDeadlineStatusFilter<$PrismaModel>;
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

    export type DocumentDeadlineCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        dueAt: Date | string;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
    };

    export type DocumentDeadlineUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        dueAt: Date | string;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
    };

    export type DocumentDeadlineCreateOrConnectWithoutDocumentInput = {
        where: DocumentDeadlineWhereUniqueInput;
        create: XOR<
            DocumentDeadlineCreateWithoutDocumentInput,
            DocumentDeadlineUncheckedCreateWithoutDocumentInput
        >;
    };

    export type DocumentDeadlineCreateManyDocumentInputEnvelope = {
        data:
            | DocumentDeadlineCreateManyDocumentInput
            | DocumentDeadlineCreateManyDocumentInput[];
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

    export type DocumentDeadlineUpsertWithWhereUniqueWithoutDocumentInput = {
        where: DocumentDeadlineWhereUniqueInput;
        update: XOR<
            DocumentDeadlineUpdateWithoutDocumentInput,
            DocumentDeadlineUncheckedUpdateWithoutDocumentInput
        >;
        create: XOR<
            DocumentDeadlineCreateWithoutDocumentInput,
            DocumentDeadlineUncheckedCreateWithoutDocumentInput
        >;
    };

    export type DocumentDeadlineUpdateWithWhereUniqueWithoutDocumentInput = {
        where: DocumentDeadlineWhereUniqueInput;
        data: XOR<
            DocumentDeadlineUpdateWithoutDocumentInput,
            DocumentDeadlineUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type DocumentDeadlineUpdateManyWithWhereWithoutDocumentInput = {
        where: DocumentDeadlineScalarWhereInput;
        data: XOR<
            DocumentDeadlineUpdateManyMutationInput,
            DocumentDeadlineUncheckedUpdateManyWithoutDocumentInput
        >;
    };

    export type DocumentDeadlineScalarWhereInput = {
        AND?:
            | DocumentDeadlineScalarWhereInput
            | DocumentDeadlineScalarWhereInput[];
        OR?: DocumentDeadlineScalarWhereInput[];
        NOT?:
            | DocumentDeadlineScalarWhereInput
            | DocumentDeadlineScalarWhereInput[];
        id?: StringFilter<"DocumentDeadline"> | string;
        createdAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
        name?: StringFilter<"DocumentDeadline"> | string;
        dueAt?: DateTimeFilter<"DocumentDeadline"> | Date | string;
        status?:
            | EnumDeadlineStatusFilter<"DocumentDeadline">
            | $Enums.DeadlineStatus;
        riskLevel?: StringFilter<"DocumentDeadline"> | string;
        documentId?: StringFilter<"DocumentDeadline"> | string;
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

    export type DocumentCreateWithoutDocumentExtractedFieldsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentDeadlines?: DocumentDeadlineCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentDeadlines?: DocumentDeadlineUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentDeadlines?: DocumentDeadlineUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentDeadlines?: DocumentDeadlineUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateWithoutDocumentDeadlinesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutDocumentDeadlinesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutDocumentDeadlinesInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutDocumentDeadlinesInput,
            DocumentUncheckedCreateWithoutDocumentDeadlinesInput
        >;
    };

    export type DocumentUpsertWithoutDocumentDeadlinesInput = {
        update: XOR<
            DocumentUpdateWithoutDocumentDeadlinesInput,
            DocumentUncheckedUpdateWithoutDocumentDeadlinesInput
        >;
        create: XOR<
            DocumentCreateWithoutDocumentDeadlinesInput,
            DocumentUncheckedCreateWithoutDocumentDeadlinesInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutDocumentDeadlinesInput = {
        where?: DocumentWhereInput;
        data: XOR<
            DocumentUpdateWithoutDocumentDeadlinesInput,
            DocumentUncheckedUpdateWithoutDocumentDeadlinesInput
        >;
    };

    export type DocumentUpdateWithoutDocumentDeadlinesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutDocumentDeadlinesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        tags?: DocumentUpdatetagsInput | string[];
        name?: StringFieldUpdateOperationsInput | string;
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateWithoutActionLogsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        documentDeadlines?: DocumentDeadlineCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutActionLogsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        tags?: DocumentCreatetagsInput | string[];
        name: string;
        key: string;
        fileSize: number;
        mimeType: string;
        url: string;
        expiredAt: Date | string;
        width?: number | null;
        height?: number | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        documentDeadlines?: DocumentDeadlineUncheckedCreateNestedManyWithoutDocumentInput;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        documentDeadlines?: DocumentDeadlineUpdateManyWithoutDocumentNestedInput;
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
        key?: StringFieldUpdateOperationsInput | string;
        fileSize?: FloatFieldUpdateOperationsInput | number;
        mimeType?: StringFieldUpdateOperationsInput | string;
        url?: StringFieldUpdateOperationsInput | string;
        expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        width?: NullableFloatFieldUpdateOperationsInput | number | null;
        height?: NullableFloatFieldUpdateOperationsInput | number | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        documentDeadlines?: DocumentDeadlineUncheckedUpdateManyWithoutDocumentNestedInput;
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

    export type DocumentDeadlineCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        dueAt: Date | string;
        status: $Enums.DeadlineStatus;
        riskLevel: string;
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

    export type DocumentDeadlineUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentDeadlineUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentDeadlineUncheckedUpdateManyWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        dueAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDeadlineStatusFieldUpdateOperationsInput
            | $Enums.DeadlineStatus;
        riskLevel?: StringFieldUpdateOperationsInput | string;
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
