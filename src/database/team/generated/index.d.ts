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
 * Model Chat
 *
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>;
/**
 * Model ChatMember
 *
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>;
/**
 * Model ChatMessage
 *
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>;
/**
 * Model ChatMessageReadStatus
 *
 */
export type ChatMessageReadStatus =
    $Result.DefaultSelection<Prisma.$ChatMessageReadStatusPayload>;

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

    export const RiskLevels: {
        LOW: "LOW";
        MEDIUM: "MEDIUM";
        HIGH: "HIGH";
    };

    export type RiskLevels = (typeof RiskLevels)[keyof typeof RiskLevels];

    export const ExtractedFieldTypes: {
        EXPIRY_DATE: "EXPIRY_DATE";
        ISSUE_DATE: "ISSUE_DATE";
        COUNTERPARTY: "COUNTERPARTY";
        AMOUNT: "AMOUNT";
    };

    export type ExtractedFieldTypes =
        (typeof ExtractedFieldTypes)[keyof typeof ExtractedFieldTypes];

    export const ExtractedFieldSources: {
        OCR: "OCR";
        REGEX: "REGEX";
        MANUAL: "MANUAL";
    };

    export type ExtractedFieldSources =
        (typeof ExtractedFieldSources)[keyof typeof ExtractedFieldSources];

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

    export const ChatMemberStatus: {
        ACTIVE: "ACTIVE";
        DELETED: "DELETED";
    };

    export type ChatMemberStatus =
        (typeof ChatMemberStatus)[keyof typeof ChatMemberStatus];
}

export type DocumentStatuses = $Enums.DocumentStatuses;

export const DocumentStatuses: typeof $Enums.DocumentStatuses;

export type RiskLevels = $Enums.RiskLevels;

export const RiskLevels: typeof $Enums.RiskLevels;

export type ExtractedFieldTypes = $Enums.ExtractedFieldTypes;

export const ExtractedFieldTypes: typeof $Enums.ExtractedFieldTypes;

export type ExtractedFieldSources = $Enums.ExtractedFieldSources;

export const ExtractedFieldSources: typeof $Enums.ExtractedFieldSources;

export type ActionLogTypes = $Enums.ActionLogTypes;

export const ActionLogTypes: typeof $Enums.ActionLogTypes;

export type ChatMemberStatus = $Enums.ChatMemberStatus;

export const ChatMemberStatus: typeof $Enums.ChatMemberStatus;

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

    /**
     * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Chats
     * const chats = await prisma.chat.findMany()
     * ```
     */
    get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.chatMember`: Exposes CRUD operations for the **ChatMember** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ChatMembers
     * const chatMembers = await prisma.chatMember.findMany()
     * ```
     */
    get chatMember(): Prisma.ChatMemberDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * ```
     */
    get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.chatMessageReadStatus`: Exposes CRUD operations for the **ChatMessageReadStatus** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ChatMessageReadStatuses
     * const chatMessageReadStatuses = await prisma.chatMessageReadStatus.findMany()
     * ```
     */
    get chatMessageReadStatus(): Prisma.ChatMessageReadStatusDelegate<
        ExtArgs,
        ClientOptions
    >;
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
        Chat: "Chat";
        ChatMember: "ChatMember";
        ChatMessage: "ChatMessage";
        ChatMessageReadStatus: "ChatMessageReadStatus";
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
                | "actionLog"
                | "chat"
                | "chatMember"
                | "chatMessage"
                | "chatMessageReadStatus";
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
            Chat: {
                payload: Prisma.$ChatPayload<ExtArgs>;
                fields: Prisma.ChatFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ChatFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>;
                    };
                    findFirst: {
                        args: Prisma.ChatFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>;
                    };
                    findMany: {
                        args: Prisma.ChatFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>[];
                    };
                    create: {
                        args: Prisma.ChatCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>;
                    };
                    createMany: {
                        args: Prisma.ChatCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>[];
                    };
                    delete: {
                        args: Prisma.ChatDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>;
                    };
                    update: {
                        args: Prisma.ChatUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>;
                    };
                    deleteMany: {
                        args: Prisma.ChatDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ChatUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>[];
                    };
                    upsert: {
                        args: Prisma.ChatUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatPayload>;
                    };
                    aggregate: {
                        args: Prisma.ChatAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateChat>;
                    };
                    groupBy: {
                        args: Prisma.ChatGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ChatGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ChatCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<ChatCountAggregateOutputType>
                            | number;
                    };
                };
            };
            ChatMember: {
                payload: Prisma.$ChatMemberPayload<ExtArgs>;
                fields: Prisma.ChatMemberFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ChatMemberFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ChatMemberFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>;
                    };
                    findFirst: {
                        args: Prisma.ChatMemberFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ChatMemberFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>;
                    };
                    findMany: {
                        args: Prisma.ChatMemberFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[];
                    };
                    create: {
                        args: Prisma.ChatMemberCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>;
                    };
                    createMany: {
                        args: Prisma.ChatMemberCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ChatMemberCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[];
                    };
                    delete: {
                        args: Prisma.ChatMemberDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>;
                    };
                    update: {
                        args: Prisma.ChatMemberUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>;
                    };
                    deleteMany: {
                        args: Prisma.ChatMemberDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ChatMemberUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ChatMemberUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[];
                    };
                    upsert: {
                        args: Prisma.ChatMemberUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>;
                    };
                    aggregate: {
                        args: Prisma.ChatMemberAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateChatMember>;
                    };
                    groupBy: {
                        args: Prisma.ChatMemberGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ChatMemberGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ChatMemberCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<ChatMemberCountAggregateOutputType>
                            | number;
                    };
                };
            };
            ChatMessage: {
                payload: Prisma.$ChatMessagePayload<ExtArgs>;
                fields: Prisma.ChatMessageFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                    };
                    findFirst: {
                        args: Prisma.ChatMessageFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                    };
                    findMany: {
                        args: Prisma.ChatMessageFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                    };
                    create: {
                        args: Prisma.ChatMessageCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                    };
                    createMany: {
                        args: Prisma.ChatMessageCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                    };
                    delete: {
                        args: Prisma.ChatMessageDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                    };
                    update: {
                        args: Prisma.ChatMessageUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                    };
                    deleteMany: {
                        args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                    };
                    upsert: {
                        args: Prisma.ChatMessageUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                    };
                    aggregate: {
                        args: Prisma.ChatMessageAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateChatMessage>;
                    };
                    groupBy: {
                        args: Prisma.ChatMessageGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ChatMessageGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ChatMessageCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<ChatMessageCountAggregateOutputType>
                            | number;
                    };
                };
            };
            ChatMessageReadStatus: {
                payload: Prisma.$ChatMessageReadStatusPayload<ExtArgs>;
                fields: Prisma.ChatMessageReadStatusFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ChatMessageReadStatusFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ChatMessageReadStatusFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>;
                    };
                    findFirst: {
                        args: Prisma.ChatMessageReadStatusFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ChatMessageReadStatusFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>;
                    };
                    findMany: {
                        args: Prisma.ChatMessageReadStatusFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>[];
                    };
                    create: {
                        args: Prisma.ChatMessageReadStatusCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>;
                    };
                    createMany: {
                        args: Prisma.ChatMessageReadStatusCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ChatMessageReadStatusCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>[];
                    };
                    delete: {
                        args: Prisma.ChatMessageReadStatusDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>;
                    };
                    update: {
                        args: Prisma.ChatMessageReadStatusUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>;
                    };
                    deleteMany: {
                        args: Prisma.ChatMessageReadStatusDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ChatMessageReadStatusUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ChatMessageReadStatusUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>[];
                    };
                    upsert: {
                        args: Prisma.ChatMessageReadStatusUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ChatMessageReadStatusPayload>;
                    };
                    aggregate: {
                        args: Prisma.ChatMessageReadStatusAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateChatMessageReadStatus>;
                    };
                    groupBy: {
                        args: Prisma.ChatMessageReadStatusGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ChatMessageReadStatusGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ChatMessageReadStatusCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<ChatMessageReadStatusCountAggregateOutputType>
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
        chat?: ChatOmit;
        chatMember?: ChatMemberOmit;
        chatMessage?: ChatMessageOmit;
        chatMessageReadStatus?: ChatMessageReadStatusOmit;
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
        chatMessages: number;
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
        chatMessages?: boolean | DocumentCountOutputTypeCountChatMessagesArgs;
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
     * DocumentCountOutputType without action
     */
    export type DocumentCountOutputTypeCountChatMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageWhereInput;
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
     * Count Type FileCountOutputType
     */

    export type FileCountOutputType = {
        chatMessages: number;
    };

    export type FileCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chatMessages?: boolean | FileCountOutputTypeCountChatMessagesArgs;
    };

    // Custom InputTypes
    /**
     * FileCountOutputType without action
     */
    export type FileCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FileCountOutputType
         */
        select?: FileCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * FileCountOutputType without action
     */
    export type FileCountOutputTypeCountChatMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageWhereInput;
    };

    /**
     * Count Type ChatCountOutputType
     */

    export type ChatCountOutputType = {
        messages: number;
        members: number;
    };

    export type ChatCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        messages?: boolean | ChatCountOutputTypeCountMessagesArgs;
        members?: boolean | ChatCountOutputTypeCountMembersArgs;
    };

    // Custom InputTypes
    /**
     * ChatCountOutputType without action
     */
    export type ChatCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatCountOutputType
         */
        select?: ChatCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * ChatCountOutputType without action
     */
    export type ChatCountOutputTypeCountMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageWhereInput;
    };

    /**
     * ChatCountOutputType without action
     */
    export type ChatCountOutputTypeCountMembersArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMemberWhereInput;
    };

    /**
     * Count Type ChatMemberCountOutputType
     */

    export type ChatMemberCountOutputType = {
        messages: number;
        chatMessageReadStatuses: number;
    };

    export type ChatMemberCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        messages?: boolean | ChatMemberCountOutputTypeCountMessagesArgs;
        chatMessageReadStatuses?:
            | boolean
            | ChatMemberCountOutputTypeCountChatMessageReadStatusesArgs;
    };

    // Custom InputTypes
    /**
     * ChatMemberCountOutputType without action
     */
    export type ChatMemberCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMemberCountOutputType
         */
        select?: ChatMemberCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * ChatMemberCountOutputType without action
     */
    export type ChatMemberCountOutputTypeCountMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageWhereInput;
    };

    /**
     * ChatMemberCountOutputType without action
     */
    export type ChatMemberCountOutputTypeCountChatMessageReadStatusesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageReadStatusWhereInput;
    };

    /**
     * Count Type ChatMessageCountOutputType
     */

    export type ChatMessageCountOutputType = {
        childMessages: number;
        chatMessageReadStatuses: number;
    };

    export type ChatMessageCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        childMessages?:
            | boolean
            | ChatMessageCountOutputTypeCountChildMessagesArgs;
        chatMessageReadStatuses?:
            | boolean
            | ChatMessageCountOutputTypeCountChatMessageReadStatusesArgs;
    };

    // Custom InputTypes
    /**
     * ChatMessageCountOutputType without action
     */
    export type ChatMessageCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageCountOutputType
         */
        select?: ChatMessageCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * ChatMessageCountOutputType without action
     */
    export type ChatMessageCountOutputTypeCountChildMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageWhereInput;
    };

    /**
     * ChatMessageCountOutputType without action
     */
    export type ChatMessageCountOutputTypeCountChatMessageReadStatusesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageReadStatusWhereInput;
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
        riskLevel: $Enums.RiskLevels | null;
    };

    export type DocumentMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.DocumentStatuses | null;
        name: string | null;
        expiresAt: Date | null;
        riskLevel: $Enums.RiskLevels | null;
    };

    export type DocumentCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        status: number;
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
        name: string;
        expiresAt: Date | null;
        riskLevel: $Enums.RiskLevels | null;
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
            name?: boolean;
            expiresAt?: boolean;
            riskLevel?: boolean;
            documentExtractedFields?:
                | boolean
                | Document$documentExtractedFieldsArgs<ExtArgs>;
            actionLogs?: boolean | Document$actionLogsArgs<ExtArgs>;
            files?: boolean | Document$filesArgs<ExtArgs>;
            documentTags?: boolean | Document$documentTagsArgs<ExtArgs>;
            chat?: boolean | Document$chatArgs<ExtArgs>;
            chatMessages?: boolean | Document$chatMessagesArgs<ExtArgs>;
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
        chat?: boolean | Document$chatArgs<ExtArgs>;
        chatMessages?: boolean | Document$chatMessagesArgs<ExtArgs>;
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
            chat: Prisma.$ChatPayload<ExtArgs> | null;
            chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: $Enums.DocumentStatuses;
                name: string;
                expiresAt: Date | null;
                riskLevel: $Enums.RiskLevels | null;
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
        chat<T extends Document$chatArgs<ExtArgs> = {}>(
            args?: Subset<T, Document$chatArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        chatMessages<T extends Document$chatMessagesArgs<ExtArgs> = {}>(
            args?: Subset<T, Document$chatMessagesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessagePayload<ExtArgs>,
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
        readonly name: FieldRef<"Document", "String">;
        readonly expiresAt: FieldRef<"Document", "DateTime">;
        readonly riskLevel: FieldRef<"Document", "RiskLevels">;
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
     * Document.chat
     */
    export type Document$chatArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        where?: ChatWhereInput;
    };

    /**
     * Document.chatMessages
     */
    export type Document$chatMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        where?: ChatMessageWhereInput;
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        cursor?: ChatMessageWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
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
            chatMessages?: boolean | File$chatMessagesArgs<ExtArgs>;
            _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>;
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
        chatMessages?: boolean | File$chatMessagesArgs<ExtArgs>;
        _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>;
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
            chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[];
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
        chatMessages<T extends File$chatMessagesArgs<ExtArgs> = {}>(
            args?: Subset<T, File$chatMessagesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessagePayload<ExtArgs>,
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
     * File.chatMessages
     */
    export type File$chatMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        where?: ChatMessageWhereInput;
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        cursor?: ChatMessageWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
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
        type: $Enums.ExtractedFieldTypes | null;
        value: string | null;
        confidence: number | null;
        source: $Enums.ExtractedFieldSources | null;
        documentId: string | null;
    };

    export type DocumentExtractedFieldMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        type: $Enums.ExtractedFieldTypes | null;
        value: string | null;
        confidence: number | null;
        source: $Enums.ExtractedFieldSources | null;
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
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
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
                type: $Enums.ExtractedFieldTypes;
                value: string;
                confidence: number;
                source: $Enums.ExtractedFieldSources;
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
        readonly type: FieldRef<
            "DocumentExtractedField",
            "ExtractedFieldTypes"
        >;
        readonly value: FieldRef<"DocumentExtractedField", "String">;
        readonly confidence: FieldRef<"DocumentExtractedField", "Float">;
        readonly source: FieldRef<
            "DocumentExtractedField",
            "ExtractedFieldSources"
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
     * Model Chat
     */

    export type AggregateChat = {
        _count: ChatCountAggregateOutputType | null;
        _min: ChatMinAggregateOutputType | null;
        _max: ChatMaxAggregateOutputType | null;
    };

    export type ChatMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
        documentId: string | null;
    };

    export type ChatMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        name: string | null;
        documentId: string | null;
    };

    export type ChatCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        name: number;
        documentId: number;
        _all: number;
    };

    export type ChatMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        documentId?: true;
    };

    export type ChatMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        documentId?: true;
    };

    export type ChatCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        name?: true;
        documentId?: true;
        _all?: true;
    };

    export type ChatAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Chat to aggregate.
         */
        where?: ChatWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Chats to fetch.
         */
        orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ChatWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Chats from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Chats.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Chats
         **/
        _count?: true | ChatCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ChatMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ChatMaxAggregateInputType;
    };

    export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateChat[P]>
            : GetScalarType<T[P], AggregateChat[P]>;
    };

    export type ChatGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatWhereInput;
        orderBy?:
            | ChatOrderByWithAggregationInput
            | ChatOrderByWithAggregationInput[];
        by: ChatScalarFieldEnum[] | ChatScalarFieldEnum;
        having?: ChatScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ChatCountAggregateInputType | true;
        _min?: ChatMinAggregateInputType;
        _max?: ChatMaxAggregateInputType;
    };

    export type ChatGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        documentId: string | null;
        _count: ChatCountAggregateOutputType | null;
        _min: ChatMinAggregateOutputType | null;
        _max: ChatMaxAggregateOutputType | null;
    };

    type GetChatGroupByPayload<T extends ChatGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<ChatGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof ChatGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], ChatGroupByOutputType[P]>
                        : GetScalarType<T[P], ChatGroupByOutputType[P]>;
                }
            >
        >;

    export type ChatSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            documentId?: boolean;
            document?: boolean | Chat$documentArgs<ExtArgs>;
            messages?: boolean | Chat$messagesArgs<ExtArgs>;
            members?: boolean | Chat$membersArgs<ExtArgs>;
            _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chat"]
    >;

    export type ChatSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            documentId?: boolean;
            document?: boolean | Chat$documentArgs<ExtArgs>;
        },
        ExtArgs["result"]["chat"]
    >;

    export type ChatSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            name?: boolean;
            documentId?: boolean;
            document?: boolean | Chat$documentArgs<ExtArgs>;
        },
        ExtArgs["result"]["chat"]
    >;

    export type ChatSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        name?: boolean;
        documentId?: boolean;
    };

    export type ChatOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "createdAt" | "updatedAt" | "name" | "documentId",
        ExtArgs["result"]["chat"]
    >;
    export type ChatInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | Chat$documentArgs<ExtArgs>;
        messages?: boolean | Chat$messagesArgs<ExtArgs>;
        members?: boolean | Chat$membersArgs<ExtArgs>;
        _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type ChatIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | Chat$documentArgs<ExtArgs>;
    };
    export type ChatIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        document?: boolean | Chat$documentArgs<ExtArgs>;
    };

    export type $ChatPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Chat";
        objects: {
            document: Prisma.$DocumentPayload<ExtArgs> | null;
            messages: Prisma.$ChatMessagePayload<ExtArgs>[];
            members: Prisma.$ChatMemberPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                documentId: string | null;
            },
            ExtArgs["result"]["chat"]
        >;
        composites: {};
    };

    type ChatGetPayload<
        S extends boolean | null | undefined | ChatDefaultArgs,
    > = $Result.GetResult<Prisma.$ChatPayload, S>;

    type ChatCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<ChatFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: ChatCountAggregateInputType | true;
    };

    export interface ChatDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Chat"];
            meta: { name: "Chat" };
        };
        /**
         * Find zero or one Chat that matches the filter.
         * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
         * @example
         * // Get one Chat
         * const chat = await prisma.chat.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ChatFindUniqueArgs>(
            args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
         * @example
         * // Get one Chat
         * const chat = await prisma.chat.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Chat that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatFindFirstArgs} args - Arguments to find a Chat
         * @example
         * // Get one Chat
         * const chat = await prisma.chat.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ChatFindFirstArgs>(
            args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Chat that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
         * @example
         * // Get one Chat
         * const chat = await prisma.chat.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Chats that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Chats
         * const chats = await prisma.chat.findMany()
         *
         * // Get first 10 Chats
         * const chats = await prisma.chat.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ChatFindManyArgs>(
            args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Chat.
         * @param {ChatCreateArgs} args - Arguments to create a Chat.
         * @example
         * // Create one Chat
         * const Chat = await prisma.chat.create({
         *   data: {
         *     // ... data to create a Chat
         *   }
         * })
         *
         */
        create<T extends ChatCreateArgs>(
            args: SelectSubset<T, ChatCreateArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Chats.
         * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
         * @example
         * // Create many Chats
         * const chat = await prisma.chat.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ChatCreateManyArgs>(
            args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Chats and returns the data saved in the database.
         * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
         * @example
         * // Create many Chats
         * const chat = await prisma.chat.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Chats and only return the `id`
         * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Chat.
         * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
         * @example
         * // Delete one Chat
         * const Chat = await prisma.chat.delete({
         *   where: {
         *     // ... filter to delete one Chat
         *   }
         * })
         *
         */
        delete<T extends ChatDeleteArgs>(
            args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Chat.
         * @param {ChatUpdateArgs} args - Arguments to update one Chat.
         * @example
         * // Update one Chat
         * const chat = await prisma.chat.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ChatUpdateArgs>(
            args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Chats.
         * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
         * @example
         * // Delete a few Chats
         * const { count } = await prisma.chat.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ChatDeleteManyArgs>(
            args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Chats.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Chats
         * const chat = await prisma.chat.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ChatUpdateManyArgs>(
            args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Chats and returns the data updated in the database.
         * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
         * @example
         * // Update many Chats
         * const chat = await prisma.chat.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Chats and only return the `id`
         * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
        updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Chat.
         * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
         * @example
         * // Update or create a Chat
         * const chat = await prisma.chat.upsert({
         *   create: {
         *     // ... data to create a Chat
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Chat we want to update
         *   }
         * })
         */
        upsert<T extends ChatUpsertArgs>(
            args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>
        ): Prisma__ChatClient<
            $Result.GetResult<
                Prisma.$ChatPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Chats.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatCountArgs} args - Arguments to filter Chats to count.
         * @example
         * // Count the number of Chats
         * const count = await prisma.chat.count({
         *   where: {
         *     // ... the filter for the Chats we want to count
         *   }
         * })
         **/
        count<T extends ChatCountArgs>(
            args?: Subset<T, ChatCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], ChatCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Chat.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ChatAggregateArgs>(
            args: Subset<T, ChatAggregateArgs>
        ): Prisma.PrismaPromise<GetChatAggregateType<T>>;

        /**
         * Group by Chat.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatGroupByArgs} args - Group by arguments.
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
            T extends ChatGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ChatGroupByArgs["orderBy"] }
                : { orderBy?: ChatGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetChatGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Chat model
         */
        readonly fields: ChatFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Chat.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ChatClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        document<T extends Chat$documentArgs<ExtArgs> = {}>(
            args?: Subset<T, Chat$documentArgs<ExtArgs>>
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
        messages<T extends Chat$messagesArgs<ExtArgs> = {}>(
            args?: Subset<T, Chat$messagesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessagePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        members<T extends Chat$membersArgs<ExtArgs> = {}>(
            args?: Subset<T, Chat$membersArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMemberPayload<ExtArgs>,
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
     * Fields of the Chat model
     */
    interface ChatFieldRefs {
        readonly id: FieldRef<"Chat", "String">;
        readonly createdAt: FieldRef<"Chat", "DateTime">;
        readonly updatedAt: FieldRef<"Chat", "DateTime">;
        readonly name: FieldRef<"Chat", "String">;
        readonly documentId: FieldRef<"Chat", "String">;
    }

    // Custom InputTypes
    /**
     * Chat findUnique
     */
    export type ChatFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * Filter, which Chat to fetch.
         */
        where: ChatWhereUniqueInput;
    };

    /**
     * Chat findUniqueOrThrow
     */
    export type ChatFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * Filter, which Chat to fetch.
         */
        where: ChatWhereUniqueInput;
    };

    /**
     * Chat findFirst
     */
    export type ChatFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * Filter, which Chat to fetch.
         */
        where?: ChatWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Chats to fetch.
         */
        orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Chats.
         */
        cursor?: ChatWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Chats from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Chats.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Chats.
         */
        distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
    };

    /**
     * Chat findFirstOrThrow
     */
    export type ChatFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * Filter, which Chat to fetch.
         */
        where?: ChatWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Chats to fetch.
         */
        orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Chats.
         */
        cursor?: ChatWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Chats from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Chats.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Chats.
         */
        distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
    };

    /**
     * Chat findMany
     */
    export type ChatFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * Filter, which Chats to fetch.
         */
        where?: ChatWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Chats to fetch.
         */
        orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Chats.
         */
        cursor?: ChatWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Chats from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Chats.
         */
        skip?: number;
        distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
    };

    /**
     * Chat create
     */
    export type ChatCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * The data needed to create a Chat.
         */
        data: XOR<ChatCreateInput, ChatUncheckedCreateInput>;
    };

    /**
     * Chat createMany
     */
    export type ChatCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Chats.
         */
        data: ChatCreateManyInput | ChatCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Chat createManyAndReturn
     */
    export type ChatCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * The data used to create many Chats.
         */
        data: ChatCreateManyInput | ChatCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Chat update
     */
    export type ChatUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * The data needed to update a Chat.
         */
        data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>;
        /**
         * Choose, which Chat to update.
         */
        where: ChatWhereUniqueInput;
    };

    /**
     * Chat updateMany
     */
    export type ChatUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Chats.
         */
        data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>;
        /**
         * Filter which Chats to update
         */
        where?: ChatWhereInput;
        /**
         * Limit how many Chats to update.
         */
        limit?: number;
    };

    /**
     * Chat updateManyAndReturn
     */
    export type ChatUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * The data used to update Chats.
         */
        data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>;
        /**
         * Filter which Chats to update
         */
        where?: ChatWhereInput;
        /**
         * Limit how many Chats to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Chat upsert
     */
    export type ChatUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * The filter to search for the Chat to update in case it exists.
         */
        where: ChatWhereUniqueInput;
        /**
         * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
         */
        create: XOR<ChatCreateInput, ChatUncheckedCreateInput>;
        /**
         * In case the Chat was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>;
    };

    /**
     * Chat delete
     */
    export type ChatDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
        /**
         * Filter which Chat to delete.
         */
        where: ChatWhereUniqueInput;
    };

    /**
     * Chat deleteMany
     */
    export type ChatDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Chats to delete
         */
        where?: ChatWhereInput;
        /**
         * Limit how many Chats to delete.
         */
        limit?: number;
    };

    /**
     * Chat.document
     */
    export type Chat$documentArgs<
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
     * Chat.messages
     */
    export type Chat$messagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        where?: ChatMessageWhereInput;
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        cursor?: ChatMessageWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
    };

    /**
     * Chat.members
     */
    export type Chat$membersArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        where?: ChatMemberWhereInput;
        orderBy?:
            | ChatMemberOrderByWithRelationInput
            | ChatMemberOrderByWithRelationInput[];
        cursor?: ChatMemberWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[];
    };

    /**
     * Chat without action
     */
    export type ChatDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Chat
         */
        select?: ChatSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Chat
         */
        omit?: ChatOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatInclude<ExtArgs> | null;
    };

    /**
     * Model ChatMember
     */

    export type AggregateChatMember = {
        _count: ChatMemberCountAggregateOutputType | null;
        _min: ChatMemberMinAggregateOutputType | null;
        _max: ChatMemberMaxAggregateOutputType | null;
    };

    export type ChatMemberMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.ChatMemberStatus | null;
        userId: string | null;
        userFullName: string | null;
        userAvatarUrl: string | null;
        chatId: string | null;
    };

    export type ChatMemberMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        status: $Enums.ChatMemberStatus | null;
        userId: string | null;
        userFullName: string | null;
        userAvatarUrl: string | null;
        chatId: string | null;
    };

    export type ChatMemberCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        status: number;
        userId: number;
        userFullName: number;
        userAvatarUrl: number;
        chatId: number;
        _all: number;
    };

    export type ChatMemberMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        userId?: true;
        userFullName?: true;
        userAvatarUrl?: true;
        chatId?: true;
    };

    export type ChatMemberMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        userId?: true;
        userFullName?: true;
        userAvatarUrl?: true;
        chatId?: true;
    };

    export type ChatMemberCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        status?: true;
        userId?: true;
        userFullName?: true;
        userAvatarUrl?: true;
        chatId?: true;
        _all?: true;
    };

    export type ChatMemberAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ChatMember to aggregate.
         */
        where?: ChatMemberWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMembers to fetch.
         */
        orderBy?:
            | ChatMemberOrderByWithRelationInput
            | ChatMemberOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ChatMemberWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMembers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMembers.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned ChatMembers
         **/
        _count?: true | ChatMemberCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ChatMemberMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ChatMemberMaxAggregateInputType;
    };

    export type GetChatMemberAggregateType<T extends ChatMemberAggregateArgs> =
        {
            [P in keyof T & keyof AggregateChatMember]: P extends
                | "_count"
                | "count"
                ? T[P] extends true
                    ? number
                    : GetScalarType<T[P], AggregateChatMember[P]>
                : GetScalarType<T[P], AggregateChatMember[P]>;
        };

    export type ChatMemberGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMemberWhereInput;
        orderBy?:
            | ChatMemberOrderByWithAggregationInput
            | ChatMemberOrderByWithAggregationInput[];
        by: ChatMemberScalarFieldEnum[] | ChatMemberScalarFieldEnum;
        having?: ChatMemberScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ChatMemberCountAggregateInputType | true;
        _min?: ChatMemberMinAggregateInputType;
        _max?: ChatMemberMaxAggregateInputType;
    };

    export type ChatMemberGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl: string | null;
        chatId: string;
        _count: ChatMemberCountAggregateOutputType | null;
        _min: ChatMemberMinAggregateOutputType | null;
        _max: ChatMemberMaxAggregateOutputType | null;
    };

    type GetChatMemberGroupByPayload<T extends ChatMemberGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<ChatMemberGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof ChatMemberGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  ChatMemberGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>;
                }
            >
        >;

    export type ChatMemberSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            status?: boolean;
            userId?: boolean;
            userFullName?: boolean;
            userAvatarUrl?: boolean;
            chatId?: boolean;
            chat?: boolean | ChatDefaultArgs<ExtArgs>;
            messages?: boolean | ChatMember$messagesArgs<ExtArgs>;
            chatMessageReadStatuses?:
                | boolean
                | ChatMember$chatMessageReadStatusesArgs<ExtArgs>;
            _count?: boolean | ChatMemberCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMember"]
    >;

    export type ChatMemberSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            status?: boolean;
            userId?: boolean;
            userFullName?: boolean;
            userAvatarUrl?: boolean;
            chatId?: boolean;
            chat?: boolean | ChatDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMember"]
    >;

    export type ChatMemberSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            status?: boolean;
            userId?: boolean;
            userFullName?: boolean;
            userAvatarUrl?: boolean;
            chatId?: boolean;
            chat?: boolean | ChatDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMember"]
    >;

    export type ChatMemberSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        status?: boolean;
        userId?: boolean;
        userFullName?: boolean;
        userAvatarUrl?: boolean;
        chatId?: boolean;
    };

    export type ChatMemberOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "status"
        | "userId"
        | "userFullName"
        | "userAvatarUrl"
        | "chatId",
        ExtArgs["result"]["chatMember"]
    >;
    export type ChatMemberInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chat?: boolean | ChatDefaultArgs<ExtArgs>;
        messages?: boolean | ChatMember$messagesArgs<ExtArgs>;
        chatMessageReadStatuses?:
            | boolean
            | ChatMember$chatMessageReadStatusesArgs<ExtArgs>;
        _count?: boolean | ChatMemberCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type ChatMemberIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chat?: boolean | ChatDefaultArgs<ExtArgs>;
    };
    export type ChatMemberIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chat?: boolean | ChatDefaultArgs<ExtArgs>;
    };

    export type $ChatMemberPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "ChatMember";
        objects: {
            chat: Prisma.$ChatPayload<ExtArgs>;
            messages: Prisma.$ChatMessagePayload<ExtArgs>[];
            chatMessageReadStatuses: Prisma.$ChatMessageReadStatusPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: $Enums.ChatMemberStatus;
                userId: string;
                userFullName: string;
                userAvatarUrl: string | null;
                chatId: string;
            },
            ExtArgs["result"]["chatMember"]
        >;
        composites: {};
    };

    type ChatMemberGetPayload<
        S extends boolean | null | undefined | ChatMemberDefaultArgs,
    > = $Result.GetResult<Prisma.$ChatMemberPayload, S>;

    type ChatMemberCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        ChatMemberFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: ChatMemberCountAggregateInputType | true;
    };

    export interface ChatMemberDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["ChatMember"];
            meta: { name: "ChatMember" };
        };
        /**
         * Find zero or one ChatMember that matches the filter.
         * @param {ChatMemberFindUniqueArgs} args - Arguments to find a ChatMember
         * @example
         * // Get one ChatMember
         * const chatMember = await prisma.chatMember.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ChatMemberFindUniqueArgs>(
            args: SelectSubset<T, ChatMemberFindUniqueArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one ChatMember that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ChatMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatMember
         * @example
         * // Get one ChatMember
         * const chatMember = await prisma.chatMember.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ChatMemberFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ChatMemberFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ChatMember that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberFindFirstArgs} args - Arguments to find a ChatMember
         * @example
         * // Get one ChatMember
         * const chatMember = await prisma.chatMember.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ChatMemberFindFirstArgs>(
            args?: SelectSubset<T, ChatMemberFindFirstArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ChatMember that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberFindFirstOrThrowArgs} args - Arguments to find a ChatMember
         * @example
         * // Get one ChatMember
         * const chatMember = await prisma.chatMember.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ChatMemberFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ChatMemberFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more ChatMembers that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ChatMembers
         * const chatMembers = await prisma.chatMember.findMany()
         *
         * // Get first 10 ChatMembers
         * const chatMembers = await prisma.chatMember.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const chatMemberWithIdOnly = await prisma.chatMember.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ChatMemberFindManyArgs>(
            args?: SelectSubset<T, ChatMemberFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a ChatMember.
         * @param {ChatMemberCreateArgs} args - Arguments to create a ChatMember.
         * @example
         * // Create one ChatMember
         * const ChatMember = await prisma.chatMember.create({
         *   data: {
         *     // ... data to create a ChatMember
         *   }
         * })
         *
         */
        create<T extends ChatMemberCreateArgs>(
            args: SelectSubset<T, ChatMemberCreateArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many ChatMembers.
         * @param {ChatMemberCreateManyArgs} args - Arguments to create many ChatMembers.
         * @example
         * // Create many ChatMembers
         * const chatMember = await prisma.chatMember.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ChatMemberCreateManyArgs>(
            args?: SelectSubset<T, ChatMemberCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many ChatMembers and returns the data saved in the database.
         * @param {ChatMemberCreateManyAndReturnArgs} args - Arguments to create many ChatMembers.
         * @example
         * // Create many ChatMembers
         * const chatMember = await prisma.chatMember.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ChatMembers and only return the `id`
         * const chatMemberWithIdOnly = await prisma.chatMember.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ChatMemberCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ChatMemberCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a ChatMember.
         * @param {ChatMemberDeleteArgs} args - Arguments to delete one ChatMember.
         * @example
         * // Delete one ChatMember
         * const ChatMember = await prisma.chatMember.delete({
         *   where: {
         *     // ... filter to delete one ChatMember
         *   }
         * })
         *
         */
        delete<T extends ChatMemberDeleteArgs>(
            args: SelectSubset<T, ChatMemberDeleteArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one ChatMember.
         * @param {ChatMemberUpdateArgs} args - Arguments to update one ChatMember.
         * @example
         * // Update one ChatMember
         * const chatMember = await prisma.chatMember.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ChatMemberUpdateArgs>(
            args: SelectSubset<T, ChatMemberUpdateArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more ChatMembers.
         * @param {ChatMemberDeleteManyArgs} args - Arguments to filter ChatMembers to delete.
         * @example
         * // Delete a few ChatMembers
         * const { count } = await prisma.chatMember.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ChatMemberDeleteManyArgs>(
            args?: SelectSubset<T, ChatMemberDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ChatMembers.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ChatMembers
         * const chatMember = await prisma.chatMember.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ChatMemberUpdateManyArgs>(
            args: SelectSubset<T, ChatMemberUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ChatMembers and returns the data updated in the database.
         * @param {ChatMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatMembers.
         * @example
         * // Update many ChatMembers
         * const chatMember = await prisma.chatMember.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more ChatMembers and only return the `id`
         * const chatMemberWithIdOnly = await prisma.chatMember.updateManyAndReturn({
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
        updateManyAndReturn<T extends ChatMemberUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ChatMemberUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one ChatMember.
         * @param {ChatMemberUpsertArgs} args - Arguments to update or create a ChatMember.
         * @example
         * // Update or create a ChatMember
         * const chatMember = await prisma.chatMember.upsert({
         *   create: {
         *     // ... data to create a ChatMember
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ChatMember we want to update
         *   }
         * })
         */
        upsert<T extends ChatMemberUpsertArgs>(
            args: SelectSubset<T, ChatMemberUpsertArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            $Result.GetResult<
                Prisma.$ChatMemberPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of ChatMembers.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberCountArgs} args - Arguments to filter ChatMembers to count.
         * @example
         * // Count the number of ChatMembers
         * const count = await prisma.chatMember.count({
         *   where: {
         *     // ... the filter for the ChatMembers we want to count
         *   }
         * })
         **/
        count<T extends ChatMemberCountArgs>(
            args?: Subset<T, ChatMemberCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          ChatMemberCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a ChatMember.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ChatMemberAggregateArgs>(
            args: Subset<T, ChatMemberAggregateArgs>
        ): Prisma.PrismaPromise<GetChatMemberAggregateType<T>>;

        /**
         * Group by ChatMember.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMemberGroupByArgs} args - Group by arguments.
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
            T extends ChatMemberGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ChatMemberGroupByArgs["orderBy"] }
                : { orderBy?: ChatMemberGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, ChatMemberGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetChatMemberGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the ChatMember model
         */
        readonly fields: ChatMemberFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ChatMember.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ChatMemberClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        chat<T extends ChatDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatDefaultArgs<ExtArgs>>
        ): Prisma__ChatClient<
            | $Result.GetResult<
                  Prisma.$ChatPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        messages<T extends ChatMember$messagesArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMember$messagesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessagePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        chatMessageReadStatuses<
            T extends ChatMember$chatMessageReadStatusesArgs<ExtArgs> = {},
        >(
            args?: Subset<T, ChatMember$chatMessageReadStatusesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
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
     * Fields of the ChatMember model
     */
    interface ChatMemberFieldRefs {
        readonly id: FieldRef<"ChatMember", "String">;
        readonly createdAt: FieldRef<"ChatMember", "DateTime">;
        readonly updatedAt: FieldRef<"ChatMember", "DateTime">;
        readonly status: FieldRef<"ChatMember", "ChatMemberStatus">;
        readonly userId: FieldRef<"ChatMember", "String">;
        readonly userFullName: FieldRef<"ChatMember", "String">;
        readonly userAvatarUrl: FieldRef<"ChatMember", "String">;
        readonly chatId: FieldRef<"ChatMember", "String">;
    }

    // Custom InputTypes
    /**
     * ChatMember findUnique
     */
    export type ChatMemberFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMember to fetch.
         */
        where: ChatMemberWhereUniqueInput;
    };

    /**
     * ChatMember findUniqueOrThrow
     */
    export type ChatMemberFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMember to fetch.
         */
        where: ChatMemberWhereUniqueInput;
    };

    /**
     * ChatMember findFirst
     */
    export type ChatMemberFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMember to fetch.
         */
        where?: ChatMemberWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMembers to fetch.
         */
        orderBy?:
            | ChatMemberOrderByWithRelationInput
            | ChatMemberOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ChatMembers.
         */
        cursor?: ChatMemberWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMembers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMembers.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ChatMembers.
         */
        distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[];
    };

    /**
     * ChatMember findFirstOrThrow
     */
    export type ChatMemberFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMember to fetch.
         */
        where?: ChatMemberWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMembers to fetch.
         */
        orderBy?:
            | ChatMemberOrderByWithRelationInput
            | ChatMemberOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ChatMembers.
         */
        cursor?: ChatMemberWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMembers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMembers.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ChatMembers.
         */
        distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[];
    };

    /**
     * ChatMember findMany
     */
    export type ChatMemberFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMembers to fetch.
         */
        where?: ChatMemberWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMembers to fetch.
         */
        orderBy?:
            | ChatMemberOrderByWithRelationInput
            | ChatMemberOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing ChatMembers.
         */
        cursor?: ChatMemberWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMembers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMembers.
         */
        skip?: number;
        distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[];
    };

    /**
     * ChatMember create
     */
    export type ChatMemberCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * The data needed to create a ChatMember.
         */
        data: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>;
    };

    /**
     * ChatMember createMany
     */
    export type ChatMemberCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many ChatMembers.
         */
        data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * ChatMember createManyAndReturn
     */
    export type ChatMemberCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * The data used to create many ChatMembers.
         */
        data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ChatMember update
     */
    export type ChatMemberUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * The data needed to update a ChatMember.
         */
        data: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>;
        /**
         * Choose, which ChatMember to update.
         */
        where: ChatMemberWhereUniqueInput;
    };

    /**
     * ChatMember updateMany
     */
    export type ChatMemberUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update ChatMembers.
         */
        data: XOR<
            ChatMemberUpdateManyMutationInput,
            ChatMemberUncheckedUpdateManyInput
        >;
        /**
         * Filter which ChatMembers to update
         */
        where?: ChatMemberWhereInput;
        /**
         * Limit how many ChatMembers to update.
         */
        limit?: number;
    };

    /**
     * ChatMember updateManyAndReturn
     */
    export type ChatMemberUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * The data used to update ChatMembers.
         */
        data: XOR<
            ChatMemberUpdateManyMutationInput,
            ChatMemberUncheckedUpdateManyInput
        >;
        /**
         * Filter which ChatMembers to update
         */
        where?: ChatMemberWhereInput;
        /**
         * Limit how many ChatMembers to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ChatMember upsert
     */
    export type ChatMemberUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * The filter to search for the ChatMember to update in case it exists.
         */
        where: ChatMemberWhereUniqueInput;
        /**
         * In case the ChatMember found by the `where` argument doesn't exist, create a new ChatMember with this data.
         */
        create: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>;
        /**
         * In case the ChatMember was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>;
    };

    /**
     * ChatMember delete
     */
    export type ChatMemberDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
        /**
         * Filter which ChatMember to delete.
         */
        where: ChatMemberWhereUniqueInput;
    };

    /**
     * ChatMember deleteMany
     */
    export type ChatMemberDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ChatMembers to delete
         */
        where?: ChatMemberWhereInput;
        /**
         * Limit how many ChatMembers to delete.
         */
        limit?: number;
    };

    /**
     * ChatMember.messages
     */
    export type ChatMember$messagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        where?: ChatMessageWhereInput;
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        cursor?: ChatMessageWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
    };

    /**
     * ChatMember.chatMessageReadStatuses
     */
    export type ChatMember$chatMessageReadStatusesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        where?: ChatMessageReadStatusWhereInput;
        orderBy?:
            | ChatMessageReadStatusOrderByWithRelationInput
            | ChatMessageReadStatusOrderByWithRelationInput[];
        cursor?: ChatMessageReadStatusWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | ChatMessageReadStatusScalarFieldEnum
            | ChatMessageReadStatusScalarFieldEnum[];
    };

    /**
     * ChatMember without action
     */
    export type ChatMemberDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMember
         */
        select?: ChatMemberSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMember
         */
        omit?: ChatMemberOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMemberInclude<ExtArgs> | null;
    };

    /**
     * Model ChatMessage
     */

    export type AggregateChatMessage = {
        _count: ChatMessageCountAggregateOutputType | null;
        _min: ChatMessageMinAggregateOutputType | null;
        _max: ChatMessageMaxAggregateOutputType | null;
    };

    export type ChatMessageMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        message: string | null;
        autoGenerated: boolean | null;
        parentMessageId: string | null;
        authorId: string | null;
        chatId: string | null;
        documentId: string | null;
        documentVersionId: string | null;
    };

    export type ChatMessageMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        message: string | null;
        autoGenerated: boolean | null;
        parentMessageId: string | null;
        authorId: string | null;
        chatId: string | null;
        documentId: string | null;
        documentVersionId: string | null;
    };

    export type ChatMessageCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        message: number;
        autoGenerated: number;
        parentMessageId: number;
        authorId: number;
        chatId: number;
        documentId: number;
        documentVersionId: number;
        _all: number;
    };

    export type ChatMessageMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        message?: true;
        autoGenerated?: true;
        parentMessageId?: true;
        authorId?: true;
        chatId?: true;
        documentId?: true;
        documentVersionId?: true;
    };

    export type ChatMessageMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        message?: true;
        autoGenerated?: true;
        parentMessageId?: true;
        authorId?: true;
        chatId?: true;
        documentId?: true;
        documentVersionId?: true;
    };

    export type ChatMessageCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        message?: true;
        autoGenerated?: true;
        parentMessageId?: true;
        authorId?: true;
        chatId?: true;
        documentId?: true;
        documentVersionId?: true;
        _all?: true;
    };

    export type ChatMessageAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ChatMessage to aggregate.
         */
        where?: ChatMessageWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessages to fetch.
         */
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ChatMessageWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessages from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessages.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned ChatMessages
         **/
        _count?: true | ChatMessageCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ChatMessageMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ChatMessageMaxAggregateInputType;
    };

    export type GetChatMessageAggregateType<
        T extends ChatMessageAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateChatMessage]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateChatMessage[P]>
            : GetScalarType<T[P], AggregateChatMessage[P]>;
    };

    export type ChatMessageGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageWhereInput;
        orderBy?:
            | ChatMessageOrderByWithAggregationInput
            | ChatMessageOrderByWithAggregationInput[];
        by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum;
        having?: ChatMessageScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ChatMessageCountAggregateInputType | true;
        _min?: ChatMessageMinAggregateInputType;
        _max?: ChatMessageMaxAggregateInputType;
    };

    export type ChatMessageGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        autoGenerated: boolean;
        parentMessageId: string | null;
        authorId: string;
        chatId: string;
        documentId: string | null;
        documentVersionId: string | null;
        _count: ChatMessageCountAggregateOutputType | null;
        _min: ChatMessageMinAggregateOutputType | null;
        _max: ChatMessageMaxAggregateOutputType | null;
    };

    type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<ChatMessageGroupByOutputType, T["by"]> & {
                    [P in keyof T &
                        keyof ChatMessageGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  ChatMessageGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>;
                }
            >
        >;

    export type ChatMessageSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            message?: boolean;
            autoGenerated?: boolean;
            parentMessageId?: boolean;
            authorId?: boolean;
            chatId?: boolean;
            documentId?: boolean;
            documentVersionId?: boolean;
            parentMessage?: boolean | ChatMessage$parentMessageArgs<ExtArgs>;
            author?: boolean | ChatMemberDefaultArgs<ExtArgs>;
            chat?: boolean | ChatDefaultArgs<ExtArgs>;
            document?: boolean | ChatMessage$documentArgs<ExtArgs>;
            documentVersion?:
                | boolean
                | ChatMessage$documentVersionArgs<ExtArgs>;
            childMessages?: boolean | ChatMessage$childMessagesArgs<ExtArgs>;
            chatMessageReadStatuses?:
                | boolean
                | ChatMessage$chatMessageReadStatusesArgs<ExtArgs>;
            _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMessage"]
    >;

    export type ChatMessageSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            message?: boolean;
            autoGenerated?: boolean;
            parentMessageId?: boolean;
            authorId?: boolean;
            chatId?: boolean;
            documentId?: boolean;
            documentVersionId?: boolean;
            parentMessage?: boolean | ChatMessage$parentMessageArgs<ExtArgs>;
            author?: boolean | ChatMemberDefaultArgs<ExtArgs>;
            chat?: boolean | ChatDefaultArgs<ExtArgs>;
            document?: boolean | ChatMessage$documentArgs<ExtArgs>;
            documentVersion?:
                | boolean
                | ChatMessage$documentVersionArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMessage"]
    >;

    export type ChatMessageSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            message?: boolean;
            autoGenerated?: boolean;
            parentMessageId?: boolean;
            authorId?: boolean;
            chatId?: boolean;
            documentId?: boolean;
            documentVersionId?: boolean;
            parentMessage?: boolean | ChatMessage$parentMessageArgs<ExtArgs>;
            author?: boolean | ChatMemberDefaultArgs<ExtArgs>;
            chat?: boolean | ChatDefaultArgs<ExtArgs>;
            document?: boolean | ChatMessage$documentArgs<ExtArgs>;
            documentVersion?:
                | boolean
                | ChatMessage$documentVersionArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMessage"]
    >;

    export type ChatMessageSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        message?: boolean;
        autoGenerated?: boolean;
        parentMessageId?: boolean;
        authorId?: boolean;
        chatId?: boolean;
        documentId?: boolean;
        documentVersionId?: boolean;
    };

    export type ChatMessageOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "createdAt"
        | "updatedAt"
        | "message"
        | "autoGenerated"
        | "parentMessageId"
        | "authorId"
        | "chatId"
        | "documentId"
        | "documentVersionId",
        ExtArgs["result"]["chatMessage"]
    >;
    export type ChatMessageInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        parentMessage?: boolean | ChatMessage$parentMessageArgs<ExtArgs>;
        author?: boolean | ChatMemberDefaultArgs<ExtArgs>;
        chat?: boolean | ChatDefaultArgs<ExtArgs>;
        document?: boolean | ChatMessage$documentArgs<ExtArgs>;
        documentVersion?: boolean | ChatMessage$documentVersionArgs<ExtArgs>;
        childMessages?: boolean | ChatMessage$childMessagesArgs<ExtArgs>;
        chatMessageReadStatuses?:
            | boolean
            | ChatMessage$chatMessageReadStatusesArgs<ExtArgs>;
        _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type ChatMessageIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        parentMessage?: boolean | ChatMessage$parentMessageArgs<ExtArgs>;
        author?: boolean | ChatMemberDefaultArgs<ExtArgs>;
        chat?: boolean | ChatDefaultArgs<ExtArgs>;
        document?: boolean | ChatMessage$documentArgs<ExtArgs>;
        documentVersion?: boolean | ChatMessage$documentVersionArgs<ExtArgs>;
    };
    export type ChatMessageIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        parentMessage?: boolean | ChatMessage$parentMessageArgs<ExtArgs>;
        author?: boolean | ChatMemberDefaultArgs<ExtArgs>;
        chat?: boolean | ChatDefaultArgs<ExtArgs>;
        document?: boolean | ChatMessage$documentArgs<ExtArgs>;
        documentVersion?: boolean | ChatMessage$documentVersionArgs<ExtArgs>;
    };

    export type $ChatMessagePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "ChatMessage";
        objects: {
            parentMessage: Prisma.$ChatMessagePayload<ExtArgs> | null;
            author: Prisma.$ChatMemberPayload<ExtArgs>;
            chat: Prisma.$ChatPayload<ExtArgs>;
            document: Prisma.$DocumentPayload<ExtArgs> | null;
            documentVersion: Prisma.$FilePayload<ExtArgs> | null;
            childMessages: Prisma.$ChatMessagePayload<ExtArgs>[];
            chatMessageReadStatuses: Prisma.$ChatMessageReadStatusPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                message: string;
                autoGenerated: boolean;
                parentMessageId: string | null;
                authorId: string;
                chatId: string;
                documentId: string | null;
                documentVersionId: string | null;
            },
            ExtArgs["result"]["chatMessage"]
        >;
        composites: {};
    };

    type ChatMessageGetPayload<
        S extends boolean | null | undefined | ChatMessageDefaultArgs,
    > = $Result.GetResult<Prisma.$ChatMessagePayload, S>;

    type ChatMessageCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        ChatMessageFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: ChatMessageCountAggregateInputType | true;
    };

    export interface ChatMessageDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["ChatMessage"];
            meta: { name: "ChatMessage" };
        };
        /**
         * Find zero or one ChatMessage that matches the filter.
         * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
         * @example
         * // Get one ChatMessage
         * const chatMessage = await prisma.chatMessage.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ChatMessageFindUniqueArgs>(
            args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
         * @example
         * // Get one ChatMessage
         * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ChatMessage that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
         * @example
         * // Get one ChatMessage
         * const chatMessage = await prisma.chatMessage.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ChatMessageFindFirstArgs>(
            args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ChatMessage that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
         * @example
         * // Get one ChatMessage
         * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more ChatMessages that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ChatMessages
         * const chatMessages = await prisma.chatMessage.findMany()
         *
         * // Get first 10 ChatMessages
         * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ChatMessageFindManyArgs>(
            args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a ChatMessage.
         * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
         * @example
         * // Create one ChatMessage
         * const ChatMessage = await prisma.chatMessage.create({
         *   data: {
         *     // ... data to create a ChatMessage
         *   }
         * })
         *
         */
        create<T extends ChatMessageCreateArgs>(
            args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many ChatMessages.
         * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
         * @example
         * // Create many ChatMessages
         * const chatMessage = await prisma.chatMessage.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ChatMessageCreateManyArgs>(
            args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many ChatMessages and returns the data saved in the database.
         * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
         * @example
         * // Create many ChatMessages
         * const chatMessage = await prisma.chatMessage.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ChatMessages and only return the `id`
         * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a ChatMessage.
         * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
         * @example
         * // Delete one ChatMessage
         * const ChatMessage = await prisma.chatMessage.delete({
         *   where: {
         *     // ... filter to delete one ChatMessage
         *   }
         * })
         *
         */
        delete<T extends ChatMessageDeleteArgs>(
            args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one ChatMessage.
         * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
         * @example
         * // Update one ChatMessage
         * const chatMessage = await prisma.chatMessage.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ChatMessageUpdateArgs>(
            args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more ChatMessages.
         * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
         * @example
         * // Delete a few ChatMessages
         * const { count } = await prisma.chatMessage.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ChatMessageDeleteManyArgs>(
            args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ChatMessages.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ChatMessages
         * const chatMessage = await prisma.chatMessage.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ChatMessageUpdateManyArgs>(
            args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ChatMessages and returns the data updated in the database.
         * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
         * @example
         * // Update many ChatMessages
         * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more ChatMessages and only return the `id`
         * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
        updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one ChatMessage.
         * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
         * @example
         * // Update or create a ChatMessage
         * const chatMessage = await prisma.chatMessage.upsert({
         *   create: {
         *     // ... data to create a ChatMessage
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ChatMessage we want to update
         *   }
         * })
         */
        upsert<T extends ChatMessageUpsertArgs>(
            args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of ChatMessages.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
         * @example
         * // Count the number of ChatMessages
         * const count = await prisma.chatMessage.count({
         *   where: {
         *     // ... the filter for the ChatMessages we want to count
         *   }
         * })
         **/
        count<T extends ChatMessageCountArgs>(
            args?: Subset<T, ChatMessageCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          ChatMessageCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a ChatMessage.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ChatMessageAggregateArgs>(
            args: Subset<T, ChatMessageAggregateArgs>
        ): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>;

        /**
         * Group by ChatMessage.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
            T extends ChatMessageGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ChatMessageGroupByArgs["orderBy"] }
                : { orderBy?: ChatMessageGroupByArgs["orderBy"] },
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
            args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> &
                InputErrors
        ): {} extends InputErrors
            ? GetChatMessageGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the ChatMessage model
         */
        readonly fields: ChatMessageFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ChatMessage.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ChatMessageClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        parentMessage<T extends ChatMessage$parentMessageArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMessage$parentMessageArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            $Result.GetResult<
                Prisma.$ChatMessagePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        author<T extends ChatMemberDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMemberDefaultArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            | $Result.GetResult<
                  Prisma.$ChatMemberPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        chat<T extends ChatDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatDefaultArgs<ExtArgs>>
        ): Prisma__ChatClient<
            | $Result.GetResult<
                  Prisma.$ChatPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        document<T extends ChatMessage$documentArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMessage$documentArgs<ExtArgs>>
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
        documentVersion<
            T extends ChatMessage$documentVersionArgs<ExtArgs> = {},
        >(
            args?: Subset<T, ChatMessage$documentVersionArgs<ExtArgs>>
        ): Prisma__FileClient<
            $Result.GetResult<
                Prisma.$FilePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        childMessages<T extends ChatMessage$childMessagesArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMessage$childMessagesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessagePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        chatMessageReadStatuses<
            T extends ChatMessage$chatMessageReadStatusesArgs<ExtArgs> = {},
        >(
            args?: Subset<T, ChatMessage$chatMessageReadStatusesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
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
     * Fields of the ChatMessage model
     */
    interface ChatMessageFieldRefs {
        readonly id: FieldRef<"ChatMessage", "String">;
        readonly createdAt: FieldRef<"ChatMessage", "DateTime">;
        readonly updatedAt: FieldRef<"ChatMessage", "DateTime">;
        readonly message: FieldRef<"ChatMessage", "String">;
        readonly autoGenerated: FieldRef<"ChatMessage", "Boolean">;
        readonly parentMessageId: FieldRef<"ChatMessage", "String">;
        readonly authorId: FieldRef<"ChatMessage", "String">;
        readonly chatId: FieldRef<"ChatMessage", "String">;
        readonly documentId: FieldRef<"ChatMessage", "String">;
        readonly documentVersionId: FieldRef<"ChatMessage", "String">;
    }

    // Custom InputTypes
    /**
     * ChatMessage findUnique
     */
    export type ChatMessageFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessage to fetch.
         */
        where: ChatMessageWhereUniqueInput;
    };

    /**
     * ChatMessage findUniqueOrThrow
     */
    export type ChatMessageFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessage to fetch.
         */
        where: ChatMessageWhereUniqueInput;
    };

    /**
     * ChatMessage findFirst
     */
    export type ChatMessageFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessage to fetch.
         */
        where?: ChatMessageWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessages to fetch.
         */
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ChatMessages.
         */
        cursor?: ChatMessageWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessages from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessages.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ChatMessages.
         */
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
    };

    /**
     * ChatMessage findFirstOrThrow
     */
    export type ChatMessageFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessage to fetch.
         */
        where?: ChatMessageWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessages to fetch.
         */
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ChatMessages.
         */
        cursor?: ChatMessageWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessages from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessages.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ChatMessages.
         */
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
    };

    /**
     * ChatMessage findMany
     */
    export type ChatMessageFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessages to fetch.
         */
        where?: ChatMessageWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessages to fetch.
         */
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing ChatMessages.
         */
        cursor?: ChatMessageWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessages from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessages.
         */
        skip?: number;
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
    };

    /**
     * ChatMessage create
     */
    export type ChatMessageCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * The data needed to create a ChatMessage.
         */
        data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>;
    };

    /**
     * ChatMessage createMany
     */
    export type ChatMessageCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many ChatMessages.
         */
        data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * ChatMessage createManyAndReturn
     */
    export type ChatMessageCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * The data used to create many ChatMessages.
         */
        data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ChatMessage update
     */
    export type ChatMessageUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * The data needed to update a ChatMessage.
         */
        data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>;
        /**
         * Choose, which ChatMessage to update.
         */
        where: ChatMessageWhereUniqueInput;
    };

    /**
     * ChatMessage updateMany
     */
    export type ChatMessageUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update ChatMessages.
         */
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyInput
        >;
        /**
         * Filter which ChatMessages to update
         */
        where?: ChatMessageWhereInput;
        /**
         * Limit how many ChatMessages to update.
         */
        limit?: number;
    };

    /**
     * ChatMessage updateManyAndReturn
     */
    export type ChatMessageUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * The data used to update ChatMessages.
         */
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyInput
        >;
        /**
         * Filter which ChatMessages to update
         */
        where?: ChatMessageWhereInput;
        /**
         * Limit how many ChatMessages to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ChatMessage upsert
     */
    export type ChatMessageUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * The filter to search for the ChatMessage to update in case it exists.
         */
        where: ChatMessageWhereUniqueInput;
        /**
         * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
         */
        create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>;
        /**
         * In case the ChatMessage was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>;
    };

    /**
     * ChatMessage delete
     */
    export type ChatMessageDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        /**
         * Filter which ChatMessage to delete.
         */
        where: ChatMessageWhereUniqueInput;
    };

    /**
     * ChatMessage deleteMany
     */
    export type ChatMessageDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ChatMessages to delete
         */
        where?: ChatMessageWhereInput;
        /**
         * Limit how many ChatMessages to delete.
         */
        limit?: number;
    };

    /**
     * ChatMessage.parentMessage
     */
    export type ChatMessage$parentMessageArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        where?: ChatMessageWhereInput;
    };

    /**
     * ChatMessage.document
     */
    export type ChatMessage$documentArgs<
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
     * ChatMessage.documentVersion
     */
    export type ChatMessage$documentVersionArgs<
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
    };

    /**
     * ChatMessage.childMessages
     */
    export type ChatMessage$childMessagesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
        where?: ChatMessageWhereInput;
        orderBy?:
            | ChatMessageOrderByWithRelationInput
            | ChatMessageOrderByWithRelationInput[];
        cursor?: ChatMessageWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
    };

    /**
     * ChatMessage.chatMessageReadStatuses
     */
    export type ChatMessage$chatMessageReadStatusesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        where?: ChatMessageReadStatusWhereInput;
        orderBy?:
            | ChatMessageReadStatusOrderByWithRelationInput
            | ChatMessageReadStatusOrderByWithRelationInput[];
        cursor?: ChatMessageReadStatusWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | ChatMessageReadStatusScalarFieldEnum
            | ChatMessageReadStatusScalarFieldEnum[];
    };

    /**
     * ChatMessage without action
     */
    export type ChatMessageDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessage
         */
        select?: ChatMessageSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessage
         */
        omit?: ChatMessageOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageInclude<ExtArgs> | null;
    };

    /**
     * Model ChatMessageReadStatus
     */

    export type AggregateChatMessageReadStatus = {
        _count: ChatMessageReadStatusCountAggregateOutputType | null;
        _min: ChatMessageReadStatusMinAggregateOutputType | null;
        _max: ChatMessageReadStatusMaxAggregateOutputType | null;
    };

    export type ChatMessageReadStatusMinAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        chatMessageId: string | null;
        readById: string | null;
    };

    export type ChatMessageReadStatusMaxAggregateOutputType = {
        id: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        chatMessageId: string | null;
        readById: string | null;
    };

    export type ChatMessageReadStatusCountAggregateOutputType = {
        id: number;
        createdAt: number;
        updatedAt: number;
        chatMessageId: number;
        readById: number;
        _all: number;
    };

    export type ChatMessageReadStatusMinAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        chatMessageId?: true;
        readById?: true;
    };

    export type ChatMessageReadStatusMaxAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        chatMessageId?: true;
        readById?: true;
    };

    export type ChatMessageReadStatusCountAggregateInputType = {
        id?: true;
        createdAt?: true;
        updatedAt?: true;
        chatMessageId?: true;
        readById?: true;
        _all?: true;
    };

    export type ChatMessageReadStatusAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ChatMessageReadStatus to aggregate.
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessageReadStatuses to fetch.
         */
        orderBy?:
            | ChatMessageReadStatusOrderByWithRelationInput
            | ChatMessageReadStatusOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ChatMessageReadStatusWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessageReadStatuses from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessageReadStatuses.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned ChatMessageReadStatuses
         **/
        _count?: true | ChatMessageReadStatusCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ChatMessageReadStatusMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ChatMessageReadStatusMaxAggregateInputType;
    };

    export type GetChatMessageReadStatusAggregateType<
        T extends ChatMessageReadStatusAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateChatMessageReadStatus]: P extends
            | "_count"
            | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateChatMessageReadStatus[P]>
            : GetScalarType<T[P], AggregateChatMessageReadStatus[P]>;
    };

    export type ChatMessageReadStatusGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ChatMessageReadStatusWhereInput;
        orderBy?:
            | ChatMessageReadStatusOrderByWithAggregationInput
            | ChatMessageReadStatusOrderByWithAggregationInput[];
        by:
            | ChatMessageReadStatusScalarFieldEnum[]
            | ChatMessageReadStatusScalarFieldEnum;
        having?: ChatMessageReadStatusScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ChatMessageReadStatusCountAggregateInputType | true;
        _min?: ChatMessageReadStatusMinAggregateInputType;
        _max?: ChatMessageReadStatusMaxAggregateInputType;
    };

    export type ChatMessageReadStatusGroupByOutputType = {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        chatMessageId: string;
        readById: string;
        _count: ChatMessageReadStatusCountAggregateOutputType | null;
        _min: ChatMessageReadStatusMinAggregateOutputType | null;
        _max: ChatMessageReadStatusMaxAggregateOutputType | null;
    };

    type GetChatMessageReadStatusGroupByPayload<
        T extends ChatMessageReadStatusGroupByArgs,
    > = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ChatMessageReadStatusGroupByOutputType, T["by"]> & {
                [P in keyof T &
                    keyof ChatMessageReadStatusGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<
                              T[P],
                              ChatMessageReadStatusGroupByOutputType[P]
                          >
                    : GetScalarType<
                          T[P],
                          ChatMessageReadStatusGroupByOutputType[P]
                      >;
            }
        >
    >;

    export type ChatMessageReadStatusSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            chatMessageId?: boolean;
            readById?: boolean;
            chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>;
            readBy?: boolean | ChatMemberDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMessageReadStatus"]
    >;

    export type ChatMessageReadStatusSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            chatMessageId?: boolean;
            readById?: boolean;
            chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>;
            readBy?: boolean | ChatMemberDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMessageReadStatus"]
    >;

    export type ChatMessageReadStatusSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            chatMessageId?: boolean;
            readById?: boolean;
            chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>;
            readBy?: boolean | ChatMemberDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["chatMessageReadStatus"]
    >;

    export type ChatMessageReadStatusSelectScalar = {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        chatMessageId?: boolean;
        readById?: boolean;
    };

    export type ChatMessageReadStatusOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "createdAt" | "updatedAt" | "chatMessageId" | "readById",
        ExtArgs["result"]["chatMessageReadStatus"]
    >;
    export type ChatMessageReadStatusInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>;
        readBy?: boolean | ChatMemberDefaultArgs<ExtArgs>;
    };
    export type ChatMessageReadStatusIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>;
        readBy?: boolean | ChatMemberDefaultArgs<ExtArgs>;
    };
    export type ChatMessageReadStatusIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        chatMessage?: boolean | ChatMessageDefaultArgs<ExtArgs>;
        readBy?: boolean | ChatMemberDefaultArgs<ExtArgs>;
    };

    export type $ChatMessageReadStatusPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "ChatMessageReadStatus";
        objects: {
            chatMessage: Prisma.$ChatMessagePayload<ExtArgs>;
            readBy: Prisma.$ChatMemberPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                chatMessageId: string;
                readById: string;
            },
            ExtArgs["result"]["chatMessageReadStatus"]
        >;
        composites: {};
    };

    type ChatMessageReadStatusGetPayload<
        S extends boolean | null | undefined | ChatMessageReadStatusDefaultArgs,
    > = $Result.GetResult<Prisma.$ChatMessageReadStatusPayload, S>;

    type ChatMessageReadStatusCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        ChatMessageReadStatusFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: ChatMessageReadStatusCountAggregateInputType | true;
    };

    export interface ChatMessageReadStatusDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["ChatMessageReadStatus"];
            meta: { name: "ChatMessageReadStatus" };
        };
        /**
         * Find zero or one ChatMessageReadStatus that matches the filter.
         * @param {ChatMessageReadStatusFindUniqueArgs} args - Arguments to find a ChatMessageReadStatus
         * @example
         * // Get one ChatMessageReadStatus
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ChatMessageReadStatusFindUniqueArgs>(
            args: SelectSubset<T, ChatMessageReadStatusFindUniqueArgs<ExtArgs>>
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one ChatMessageReadStatus that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ChatMessageReadStatusFindUniqueOrThrowArgs} args - Arguments to find a ChatMessageReadStatus
         * @example
         * // Get one ChatMessageReadStatus
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ChatMessageReadStatusFindUniqueOrThrowArgs>(
            args: SelectSubset<
                T,
                ChatMessageReadStatusFindUniqueOrThrowArgs<ExtArgs>
            >
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ChatMessageReadStatus that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusFindFirstArgs} args - Arguments to find a ChatMessageReadStatus
         * @example
         * // Get one ChatMessageReadStatus
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ChatMessageReadStatusFindFirstArgs>(
            args?: SelectSubset<T, ChatMessageReadStatusFindFirstArgs<ExtArgs>>
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ChatMessageReadStatus that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusFindFirstOrThrowArgs} args - Arguments to find a ChatMessageReadStatus
         * @example
         * // Get one ChatMessageReadStatus
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ChatMessageReadStatusFindFirstOrThrowArgs>(
            args?: SelectSubset<
                T,
                ChatMessageReadStatusFindFirstOrThrowArgs<ExtArgs>
            >
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more ChatMessageReadStatuses that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ChatMessageReadStatuses
         * const chatMessageReadStatuses = await prisma.chatMessageReadStatus.findMany()
         *
         * // Get first 10 ChatMessageReadStatuses
         * const chatMessageReadStatuses = await prisma.chatMessageReadStatus.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const chatMessageReadStatusWithIdOnly = await prisma.chatMessageReadStatus.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ChatMessageReadStatusFindManyArgs>(
            args?: SelectSubset<T, ChatMessageReadStatusFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a ChatMessageReadStatus.
         * @param {ChatMessageReadStatusCreateArgs} args - Arguments to create a ChatMessageReadStatus.
         * @example
         * // Create one ChatMessageReadStatus
         * const ChatMessageReadStatus = await prisma.chatMessageReadStatus.create({
         *   data: {
         *     // ... data to create a ChatMessageReadStatus
         *   }
         * })
         *
         */
        create<T extends ChatMessageReadStatusCreateArgs>(
            args: SelectSubset<T, ChatMessageReadStatusCreateArgs<ExtArgs>>
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many ChatMessageReadStatuses.
         * @param {ChatMessageReadStatusCreateManyArgs} args - Arguments to create many ChatMessageReadStatuses.
         * @example
         * // Create many ChatMessageReadStatuses
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ChatMessageReadStatusCreateManyArgs>(
            args?: SelectSubset<T, ChatMessageReadStatusCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many ChatMessageReadStatuses and returns the data saved in the database.
         * @param {ChatMessageReadStatusCreateManyAndReturnArgs} args - Arguments to create many ChatMessageReadStatuses.
         * @example
         * // Create many ChatMessageReadStatuses
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ChatMessageReadStatuses and only return the `id`
         * const chatMessageReadStatusWithIdOnly = await prisma.chatMessageReadStatus.createManyAndReturn({
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
            T extends ChatMessageReadStatusCreateManyAndReturnArgs,
        >(
            args?: SelectSubset<
                T,
                ChatMessageReadStatusCreateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a ChatMessageReadStatus.
         * @param {ChatMessageReadStatusDeleteArgs} args - Arguments to delete one ChatMessageReadStatus.
         * @example
         * // Delete one ChatMessageReadStatus
         * const ChatMessageReadStatus = await prisma.chatMessageReadStatus.delete({
         *   where: {
         *     // ... filter to delete one ChatMessageReadStatus
         *   }
         * })
         *
         */
        delete<T extends ChatMessageReadStatusDeleteArgs>(
            args: SelectSubset<T, ChatMessageReadStatusDeleteArgs<ExtArgs>>
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one ChatMessageReadStatus.
         * @param {ChatMessageReadStatusUpdateArgs} args - Arguments to update one ChatMessageReadStatus.
         * @example
         * // Update one ChatMessageReadStatus
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ChatMessageReadStatusUpdateArgs>(
            args: SelectSubset<T, ChatMessageReadStatusUpdateArgs<ExtArgs>>
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more ChatMessageReadStatuses.
         * @param {ChatMessageReadStatusDeleteManyArgs} args - Arguments to filter ChatMessageReadStatuses to delete.
         * @example
         * // Delete a few ChatMessageReadStatuses
         * const { count } = await prisma.chatMessageReadStatus.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ChatMessageReadStatusDeleteManyArgs>(
            args?: SelectSubset<T, ChatMessageReadStatusDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ChatMessageReadStatuses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ChatMessageReadStatuses
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ChatMessageReadStatusUpdateManyArgs>(
            args: SelectSubset<T, ChatMessageReadStatusUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ChatMessageReadStatuses and returns the data updated in the database.
         * @param {ChatMessageReadStatusUpdateManyAndReturnArgs} args - Arguments to update many ChatMessageReadStatuses.
         * @example
         * // Update many ChatMessageReadStatuses
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more ChatMessageReadStatuses and only return the `id`
         * const chatMessageReadStatusWithIdOnly = await prisma.chatMessageReadStatus.updateManyAndReturn({
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
            T extends ChatMessageReadStatusUpdateManyAndReturnArgs,
        >(
            args: SelectSubset<
                T,
                ChatMessageReadStatusUpdateManyAndReturnArgs<ExtArgs>
            >
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one ChatMessageReadStatus.
         * @param {ChatMessageReadStatusUpsertArgs} args - Arguments to update or create a ChatMessageReadStatus.
         * @example
         * // Update or create a ChatMessageReadStatus
         * const chatMessageReadStatus = await prisma.chatMessageReadStatus.upsert({
         *   create: {
         *     // ... data to create a ChatMessageReadStatus
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ChatMessageReadStatus we want to update
         *   }
         * })
         */
        upsert<T extends ChatMessageReadStatusUpsertArgs>(
            args: SelectSubset<T, ChatMessageReadStatusUpsertArgs<ExtArgs>>
        ): Prisma__ChatMessageReadStatusClient<
            $Result.GetResult<
                Prisma.$ChatMessageReadStatusPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of ChatMessageReadStatuses.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusCountArgs} args - Arguments to filter ChatMessageReadStatuses to count.
         * @example
         * // Count the number of ChatMessageReadStatuses
         * const count = await prisma.chatMessageReadStatus.count({
         *   where: {
         *     // ... the filter for the ChatMessageReadStatuses we want to count
         *   }
         * })
         **/
        count<T extends ChatMessageReadStatusCountArgs>(
            args?: Subset<T, ChatMessageReadStatusCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<
                          T["select"],
                          ChatMessageReadStatusCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a ChatMessageReadStatus.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ChatMessageReadStatusAggregateArgs>(
            args: Subset<T, ChatMessageReadStatusAggregateArgs>
        ): Prisma.PrismaPromise<GetChatMessageReadStatusAggregateType<T>>;

        /**
         * Group by ChatMessageReadStatus.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ChatMessageReadStatusGroupByArgs} args - Group by arguments.
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
            T extends ChatMessageReadStatusGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<"skip", Keys<T>>,
                Extends<"take", Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ChatMessageReadStatusGroupByArgs["orderBy"] }
                : { orderBy?: ChatMessageReadStatusGroupByArgs["orderBy"] },
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
                ChatMessageReadStatusGroupByArgs,
                OrderByArg
            > &
                InputErrors
        ): {} extends InputErrors
            ? GetChatMessageReadStatusGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the ChatMessageReadStatus model
         */
        readonly fields: ChatMessageReadStatusFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ChatMessageReadStatus.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ChatMessageReadStatusClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        chatMessage<T extends ChatMessageDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMessageDefaultArgs<ExtArgs>>
        ): Prisma__ChatMessageClient<
            | $Result.GetResult<
                  Prisma.$ChatMessagePayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        readBy<T extends ChatMemberDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ChatMemberDefaultArgs<ExtArgs>>
        ): Prisma__ChatMemberClient<
            | $Result.GetResult<
                  Prisma.$ChatMemberPayload<ExtArgs>,
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
     * Fields of the ChatMessageReadStatus model
     */
    interface ChatMessageReadStatusFieldRefs {
        readonly id: FieldRef<"ChatMessageReadStatus", "String">;
        readonly createdAt: FieldRef<"ChatMessageReadStatus", "DateTime">;
        readonly updatedAt: FieldRef<"ChatMessageReadStatus", "DateTime">;
        readonly chatMessageId: FieldRef<"ChatMessageReadStatus", "String">;
        readonly readById: FieldRef<"ChatMessageReadStatus", "String">;
    }

    // Custom InputTypes
    /**
     * ChatMessageReadStatus findUnique
     */
    export type ChatMessageReadStatusFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessageReadStatus to fetch.
         */
        where: ChatMessageReadStatusWhereUniqueInput;
    };

    /**
     * ChatMessageReadStatus findUniqueOrThrow
     */
    export type ChatMessageReadStatusFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessageReadStatus to fetch.
         */
        where: ChatMessageReadStatusWhereUniqueInput;
    };

    /**
     * ChatMessageReadStatus findFirst
     */
    export type ChatMessageReadStatusFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessageReadStatus to fetch.
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessageReadStatuses to fetch.
         */
        orderBy?:
            | ChatMessageReadStatusOrderByWithRelationInput
            | ChatMessageReadStatusOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ChatMessageReadStatuses.
         */
        cursor?: ChatMessageReadStatusWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessageReadStatuses from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessageReadStatuses.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ChatMessageReadStatuses.
         */
        distinct?:
            | ChatMessageReadStatusScalarFieldEnum
            | ChatMessageReadStatusScalarFieldEnum[];
    };

    /**
     * ChatMessageReadStatus findFirstOrThrow
     */
    export type ChatMessageReadStatusFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessageReadStatus to fetch.
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessageReadStatuses to fetch.
         */
        orderBy?:
            | ChatMessageReadStatusOrderByWithRelationInput
            | ChatMessageReadStatusOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ChatMessageReadStatuses.
         */
        cursor?: ChatMessageReadStatusWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessageReadStatuses from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessageReadStatuses.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ChatMessageReadStatuses.
         */
        distinct?:
            | ChatMessageReadStatusScalarFieldEnum
            | ChatMessageReadStatusScalarFieldEnum[];
    };

    /**
     * ChatMessageReadStatus findMany
     */
    export type ChatMessageReadStatusFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * Filter, which ChatMessageReadStatuses to fetch.
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ChatMessageReadStatuses to fetch.
         */
        orderBy?:
            | ChatMessageReadStatusOrderByWithRelationInput
            | ChatMessageReadStatusOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing ChatMessageReadStatuses.
         */
        cursor?: ChatMessageReadStatusWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ChatMessageReadStatuses from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ChatMessageReadStatuses.
         */
        skip?: number;
        distinct?:
            | ChatMessageReadStatusScalarFieldEnum
            | ChatMessageReadStatusScalarFieldEnum[];
    };

    /**
     * ChatMessageReadStatus create
     */
    export type ChatMessageReadStatusCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * The data needed to create a ChatMessageReadStatus.
         */
        data: XOR<
            ChatMessageReadStatusCreateInput,
            ChatMessageReadStatusUncheckedCreateInput
        >;
    };

    /**
     * ChatMessageReadStatus createMany
     */
    export type ChatMessageReadStatusCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many ChatMessageReadStatuses.
         */
        data:
            | ChatMessageReadStatusCreateManyInput
            | ChatMessageReadStatusCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * ChatMessageReadStatus createManyAndReturn
     */
    export type ChatMessageReadStatusCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * The data used to create many ChatMessageReadStatuses.
         */
        data:
            | ChatMessageReadStatusCreateManyInput
            | ChatMessageReadStatusCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ChatMessageReadStatus update
     */
    export type ChatMessageReadStatusUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * The data needed to update a ChatMessageReadStatus.
         */
        data: XOR<
            ChatMessageReadStatusUpdateInput,
            ChatMessageReadStatusUncheckedUpdateInput
        >;
        /**
         * Choose, which ChatMessageReadStatus to update.
         */
        where: ChatMessageReadStatusWhereUniqueInput;
    };

    /**
     * ChatMessageReadStatus updateMany
     */
    export type ChatMessageReadStatusUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update ChatMessageReadStatuses.
         */
        data: XOR<
            ChatMessageReadStatusUpdateManyMutationInput,
            ChatMessageReadStatusUncheckedUpdateManyInput
        >;
        /**
         * Filter which ChatMessageReadStatuses to update
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * Limit how many ChatMessageReadStatuses to update.
         */
        limit?: number;
    };

    /**
     * ChatMessageReadStatus updateManyAndReturn
     */
    export type ChatMessageReadStatusUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * The data used to update ChatMessageReadStatuses.
         */
        data: XOR<
            ChatMessageReadStatusUpdateManyMutationInput,
            ChatMessageReadStatusUncheckedUpdateManyInput
        >;
        /**
         * Filter which ChatMessageReadStatuses to update
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * Limit how many ChatMessageReadStatuses to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ChatMessageReadStatus upsert
     */
    export type ChatMessageReadStatusUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * The filter to search for the ChatMessageReadStatus to update in case it exists.
         */
        where: ChatMessageReadStatusWhereUniqueInput;
        /**
         * In case the ChatMessageReadStatus found by the `where` argument doesn't exist, create a new ChatMessageReadStatus with this data.
         */
        create: XOR<
            ChatMessageReadStatusCreateInput,
            ChatMessageReadStatusUncheckedCreateInput
        >;
        /**
         * In case the ChatMessageReadStatus was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            ChatMessageReadStatusUpdateInput,
            ChatMessageReadStatusUncheckedUpdateInput
        >;
    };

    /**
     * ChatMessageReadStatus delete
     */
    export type ChatMessageReadStatusDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
        /**
         * Filter which ChatMessageReadStatus to delete.
         */
        where: ChatMessageReadStatusWhereUniqueInput;
    };

    /**
     * ChatMessageReadStatus deleteMany
     */
    export type ChatMessageReadStatusDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ChatMessageReadStatuses to delete
         */
        where?: ChatMessageReadStatusWhereInput;
        /**
         * Limit how many ChatMessageReadStatuses to delete.
         */
        limit?: number;
    };

    /**
     * ChatMessageReadStatus without action
     */
    export type ChatMessageReadStatusDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ChatMessageReadStatus
         */
        select?: ChatMessageReadStatusSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ChatMessageReadStatus
         */
        omit?: ChatMessageReadStatusOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ChatMessageReadStatusInclude<ExtArgs> | null;
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

    export const ChatScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        name: "name";
        documentId: "documentId";
    };

    export type ChatScalarFieldEnum =
        (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum];

    export const ChatMemberScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        status: "status";
        userId: "userId";
        userFullName: "userFullName";
        userAvatarUrl: "userAvatarUrl";
        chatId: "chatId";
    };

    export type ChatMemberScalarFieldEnum =
        (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum];

    export const ChatMessageScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        message: "message";
        autoGenerated: "autoGenerated";
        parentMessageId: "parentMessageId";
        authorId: "authorId";
        chatId: "chatId";
        documentId: "documentId";
        documentVersionId: "documentVersionId";
    };

    export type ChatMessageScalarFieldEnum =
        (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum];

    export const ChatMessageReadStatusScalarFieldEnum: {
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        chatMessageId: "chatMessageId";
        readById: "readById";
    };

    export type ChatMessageReadStatusScalarFieldEnum =
        (typeof ChatMessageReadStatusScalarFieldEnum)[keyof typeof ChatMessageReadStatusScalarFieldEnum];

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
     * Reference to a field of type 'RiskLevels'
     */
    export type EnumRiskLevelsFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "RiskLevels"
    >;

    /**
     * Reference to a field of type 'RiskLevels[]'
     */
    export type ListEnumRiskLevelsFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "RiskLevels[]">;

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
     * Reference to a field of type 'ExtractedFieldTypes'
     */
    export type EnumExtractedFieldTypesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldTypes">;

    /**
     * Reference to a field of type 'ExtractedFieldTypes[]'
     */
    export type ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldTypes[]">;

    /**
     * Reference to a field of type 'ExtractedFieldSources'
     */
    export type EnumExtractedFieldSourcesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldSources">;

    /**
     * Reference to a field of type 'ExtractedFieldSources[]'
     */
    export type ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ExtractedFieldSources[]">;

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
     * Reference to a field of type 'ChatMemberStatus'
     */
    export type EnumChatMemberStatusFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ChatMemberStatus">;

    /**
     * Reference to a field of type 'ChatMemberStatus[]'
     */
    export type ListEnumChatMemberStatusFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, "ChatMemberStatus[]">;

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

    export type DocumentWhereInput = {
        AND?: DocumentWhereInput | DocumentWhereInput[];
        OR?: DocumentWhereInput[];
        NOT?: DocumentWhereInput | DocumentWhereInput[];
        id?: UuidFilter<"Document"> | string;
        createdAt?: DateTimeFilter<"Document"> | Date | string;
        updatedAt?: DateTimeFilter<"Document"> | Date | string;
        status?:
            | EnumDocumentStatusesFilter<"Document">
            | $Enums.DocumentStatuses;
        name?: StringFilter<"Document"> | string;
        expiresAt?: DateTimeNullableFilter<"Document"> | Date | string | null;
        riskLevel?:
            | EnumRiskLevelsNullableFilter<"Document">
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldListRelationFilter;
        actionLogs?: ActionLogListRelationFilter;
        files?: FileListRelationFilter;
        documentTags?: DocumentTagListRelationFilter;
        chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null;
        chatMessages?: ChatMessageListRelationFilter;
    };

    export type DocumentOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        name?: SortOrder;
        expiresAt?: SortOrderInput | SortOrder;
        riskLevel?: SortOrderInput | SortOrder;
        documentExtractedFields?: DocumentExtractedFieldOrderByRelationAggregateInput;
        actionLogs?: ActionLogOrderByRelationAggregateInput;
        files?: FileOrderByRelationAggregateInput;
        documentTags?: DocumentTagOrderByRelationAggregateInput;
        chat?: ChatOrderByWithRelationInput;
        chatMessages?: ChatMessageOrderByRelationAggregateInput;
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
            expiresAt?:
                | DateTimeNullableFilter<"Document">
                | Date
                | string
                | null;
            riskLevel?:
                | EnumRiskLevelsNullableFilter<"Document">
                | $Enums.RiskLevels
                | null;
            documentExtractedFields?: DocumentExtractedFieldListRelationFilter;
            actionLogs?: ActionLogListRelationFilter;
            files?: FileListRelationFilter;
            documentTags?: DocumentTagListRelationFilter;
            chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null;
            chatMessages?: ChatMessageListRelationFilter;
        },
        "id" | "name"
    >;

    export type DocumentOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
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
        id?: UuidWithAggregatesFilter<"Document"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string;
        status?:
            | EnumDocumentStatusesWithAggregatesFilter<"Document">
            | $Enums.DocumentStatuses;
        name?: StringWithAggregatesFilter<"Document"> | string;
        expiresAt?:
            | DateTimeNullableWithAggregatesFilter<"Document">
            | Date
            | string
            | null;
        riskLevel?:
            | EnumRiskLevelsNullableWithAggregatesFilter<"Document">
            | $Enums.RiskLevels
            | null;
    };

    export type DocumentTagWhereInput = {
        AND?: DocumentTagWhereInput | DocumentTagWhereInput[];
        OR?: DocumentTagWhereInput[];
        NOT?: DocumentTagWhereInput | DocumentTagWhereInput[];
        id?: UuidFilter<"DocumentTag"> | string;
        createdAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        documentId?: UuidFilter<"DocumentTag"> | string;
        tagId?: UuidFilter<"DocumentTag"> | string;
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
            documentId?: UuidFilter<"DocumentTag"> | string;
            tagId?: UuidFilter<"DocumentTag"> | string;
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
        id?: UuidWithAggregatesFilter<"DocumentTag"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"DocumentTag"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"DocumentTag"> | Date | string;
        documentId?: UuidWithAggregatesFilter<"DocumentTag"> | string;
        tagId?: UuidWithAggregatesFilter<"DocumentTag"> | string;
    };

    export type TagWhereInput = {
        AND?: TagWhereInput | TagWhereInput[];
        OR?: TagWhereInput[];
        NOT?: TagWhereInput | TagWhereInput[];
        id?: UuidFilter<"Tag"> | string;
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
        id?: UuidWithAggregatesFilter<"Tag"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string;
        tag?: StringWithAggregatesFilter<"Tag"> | string;
    };

    export type FileWhereInput = {
        AND?: FileWhereInput | FileWhereInput[];
        OR?: FileWhereInput[];
        NOT?: FileWhereInput | FileWhereInput[];
        id?: UuidFilter<"File"> | string;
        createdAt?: DateTimeFilter<"File"> | Date | string;
        updatedAt?: DateTimeFilter<"File"> | Date | string;
        key?: StringFilter<"File"> | string;
        fileSize?: FloatFilter<"File"> | number;
        mimeType?: StringFilter<"File"> | string;
        url?: StringFilter<"File"> | string;
        urlExpiresAt?: DateTimeFilter<"File"> | Date | string;
        width?: FloatNullableFilter<"File"> | number | null;
        height?: FloatNullableFilter<"File"> | number | null;
        documentId?: UuidFilter<"File"> | string;
        document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
        chatMessages?: ChatMessageListRelationFilter;
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
        chatMessages?: ChatMessageOrderByRelationAggregateInput;
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
            documentId?: UuidFilter<"File"> | string;
            document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
            chatMessages?: ChatMessageListRelationFilter;
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
        id?: UuidWithAggregatesFilter<"File"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
        key?: StringWithAggregatesFilter<"File"> | string;
        fileSize?: FloatWithAggregatesFilter<"File"> | number;
        mimeType?: StringWithAggregatesFilter<"File"> | string;
        url?: StringWithAggregatesFilter<"File"> | string;
        urlExpiresAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
        width?: FloatNullableWithAggregatesFilter<"File"> | number | null;
        height?: FloatNullableWithAggregatesFilter<"File"> | number | null;
        documentId?: UuidWithAggregatesFilter<"File"> | string;
    };

    export type DocumentExtractedFieldWhereInput = {
        AND?:
            | DocumentExtractedFieldWhereInput
            | DocumentExtractedFieldWhereInput[];
        OR?: DocumentExtractedFieldWhereInput[];
        NOT?:
            | DocumentExtractedFieldWhereInput
            | DocumentExtractedFieldWhereInput[];
        id?: UuidFilter<"DocumentExtractedField"> | string;
        createdAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        type?:
            | EnumExtractedFieldTypesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldTypes;
        value?: StringFilter<"DocumentExtractedField"> | string;
        confidence?: FloatFilter<"DocumentExtractedField"> | number;
        source?:
            | EnumExtractedFieldSourcesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldSources;
        documentId?: UuidFilter<"DocumentExtractedField"> | string;
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
                | EnumExtractedFieldTypesFilter<"DocumentExtractedField">
                | $Enums.ExtractedFieldTypes;
            value?: StringFilter<"DocumentExtractedField"> | string;
            confidence?: FloatFilter<"DocumentExtractedField"> | number;
            source?:
                | EnumExtractedFieldSourcesFilter<"DocumentExtractedField">
                | $Enums.ExtractedFieldSources;
            documentId?: UuidFilter<"DocumentExtractedField"> | string;
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
        id?: UuidWithAggregatesFilter<"DocumentExtractedField"> | string;
        createdAt?:
            | DateTimeWithAggregatesFilter<"DocumentExtractedField">
            | Date
            | string;
        updatedAt?:
            | DateTimeWithAggregatesFilter<"DocumentExtractedField">
            | Date
            | string;
        type?:
            | EnumExtractedFieldTypesWithAggregatesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldTypes;
        value?: StringWithAggregatesFilter<"DocumentExtractedField"> | string;
        confidence?:
            | FloatWithAggregatesFilter<"DocumentExtractedField">
            | number;
        source?:
            | EnumExtractedFieldSourcesWithAggregatesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldSources;
        documentId?:
            | UuidWithAggregatesFilter<"DocumentExtractedField">
            | string;
    };

    export type ActionLogWhereInput = {
        AND?: ActionLogWhereInput | ActionLogWhereInput[];
        OR?: ActionLogWhereInput[];
        NOT?: ActionLogWhereInput | ActionLogWhereInput[];
        id?: UuidFilter<"ActionLog"> | string;
        createdAt?: DateTimeFilter<"ActionLog"> | Date | string;
        updatedAt?: DateTimeFilter<"ActionLog"> | Date | string;
        type?: EnumActionLogTypesFilter<"ActionLog"> | $Enums.ActionLogTypes;
        documentName?: StringNullableFilter<"ActionLog"> | string | null;
        documentId?: UuidNullableFilter<"ActionLog"> | string | null;
        actorId?: UuidFilter<"ActionLog"> | string;
        actorFullName?: StringFilter<"ActionLog"> | string;
        actorAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
        userId?: UuidNullableFilter<"ActionLog"> | string | null;
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
            documentId?: UuidNullableFilter<"ActionLog"> | string | null;
            actorId?: UuidFilter<"ActionLog"> | string;
            actorFullName?: StringFilter<"ActionLog"> | string;
            actorAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
            userId?: UuidNullableFilter<"ActionLog"> | string | null;
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
        id?: UuidWithAggregatesFilter<"ActionLog"> | string;
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
            | UuidNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        actorId?: UuidWithAggregatesFilter<"ActionLog"> | string;
        actorFullName?: StringWithAggregatesFilter<"ActionLog"> | string;
        actorAvatarUrl?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        userId?: UuidNullableWithAggregatesFilter<"ActionLog"> | string | null;
        userFullName?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
        userAvatarUrl?:
            | StringNullableWithAggregatesFilter<"ActionLog">
            | string
            | null;
    };

    export type ChatWhereInput = {
        AND?: ChatWhereInput | ChatWhereInput[];
        OR?: ChatWhereInput[];
        NOT?: ChatWhereInput | ChatWhereInput[];
        id?: UuidFilter<"Chat"> | string;
        createdAt?: DateTimeFilter<"Chat"> | Date | string;
        updatedAt?: DateTimeFilter<"Chat"> | Date | string;
        name?: StringFilter<"Chat"> | string;
        documentId?: UuidNullableFilter<"Chat"> | string | null;
        document?: XOR<
            DocumentNullableScalarRelationFilter,
            DocumentWhereInput
        > | null;
        messages?: ChatMessageListRelationFilter;
        members?: ChatMemberListRelationFilter;
    };

    export type ChatOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        documentId?: SortOrderInput | SortOrder;
        document?: DocumentOrderByWithRelationInput;
        messages?: ChatMessageOrderByRelationAggregateInput;
        members?: ChatMemberOrderByRelationAggregateInput;
    };

    export type ChatWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            name?: string;
            documentId?: string;
            AND?: ChatWhereInput | ChatWhereInput[];
            OR?: ChatWhereInput[];
            NOT?: ChatWhereInput | ChatWhereInput[];
            createdAt?: DateTimeFilter<"Chat"> | Date | string;
            updatedAt?: DateTimeFilter<"Chat"> | Date | string;
            document?: XOR<
                DocumentNullableScalarRelationFilter,
                DocumentWhereInput
            > | null;
            messages?: ChatMessageListRelationFilter;
            members?: ChatMemberListRelationFilter;
        },
        "id" | "name" | "documentId"
    >;

    export type ChatOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        documentId?: SortOrderInput | SortOrder;
        _count?: ChatCountOrderByAggregateInput;
        _max?: ChatMaxOrderByAggregateInput;
        _min?: ChatMinOrderByAggregateInput;
    };

    export type ChatScalarWhereWithAggregatesInput = {
        AND?:
            | ChatScalarWhereWithAggregatesInput
            | ChatScalarWhereWithAggregatesInput[];
        OR?: ChatScalarWhereWithAggregatesInput[];
        NOT?:
            | ChatScalarWhereWithAggregatesInput
            | ChatScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"Chat"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string;
        name?: StringWithAggregatesFilter<"Chat"> | string;
        documentId?: UuidNullableWithAggregatesFilter<"Chat"> | string | null;
    };

    export type ChatMemberWhereInput = {
        AND?: ChatMemberWhereInput | ChatMemberWhereInput[];
        OR?: ChatMemberWhereInput[];
        NOT?: ChatMemberWhereInput | ChatMemberWhereInput[];
        id?: UuidFilter<"ChatMember"> | string;
        createdAt?: DateTimeFilter<"ChatMember"> | Date | string;
        updatedAt?: DateTimeFilter<"ChatMember"> | Date | string;
        status?:
            | EnumChatMemberStatusFilter<"ChatMember">
            | $Enums.ChatMemberStatus;
        userId?: UuidFilter<"ChatMember"> | string;
        userFullName?: StringFilter<"ChatMember"> | string;
        userAvatarUrl?: StringNullableFilter<"ChatMember"> | string | null;
        chatId?: UuidFilter<"ChatMember"> | string;
        chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>;
        messages?: ChatMessageListRelationFilter;
        chatMessageReadStatuses?: ChatMessageReadStatusListRelationFilter;
    };

    export type ChatMemberOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrderInput | SortOrder;
        chatId?: SortOrder;
        chat?: ChatOrderByWithRelationInput;
        messages?: ChatMessageOrderByRelationAggregateInput;
        chatMessageReadStatuses?: ChatMessageReadStatusOrderByRelationAggregateInput;
    };

    export type ChatMemberWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            chatId_userId?: ChatMemberChatIdUserIdCompoundUniqueInput;
            AND?: ChatMemberWhereInput | ChatMemberWhereInput[];
            OR?: ChatMemberWhereInput[];
            NOT?: ChatMemberWhereInput | ChatMemberWhereInput[];
            createdAt?: DateTimeFilter<"ChatMember"> | Date | string;
            updatedAt?: DateTimeFilter<"ChatMember"> | Date | string;
            status?:
                | EnumChatMemberStatusFilter<"ChatMember">
                | $Enums.ChatMemberStatus;
            userId?: UuidFilter<"ChatMember"> | string;
            userFullName?: StringFilter<"ChatMember"> | string;
            userAvatarUrl?: StringNullableFilter<"ChatMember"> | string | null;
            chatId?: UuidFilter<"ChatMember"> | string;
            chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>;
            messages?: ChatMessageListRelationFilter;
            chatMessageReadStatuses?: ChatMessageReadStatusListRelationFilter;
        },
        "id" | "chatId_userId"
    >;

    export type ChatMemberOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrderInput | SortOrder;
        chatId?: SortOrder;
        _count?: ChatMemberCountOrderByAggregateInput;
        _max?: ChatMemberMaxOrderByAggregateInput;
        _min?: ChatMemberMinOrderByAggregateInput;
    };

    export type ChatMemberScalarWhereWithAggregatesInput = {
        AND?:
            | ChatMemberScalarWhereWithAggregatesInput
            | ChatMemberScalarWhereWithAggregatesInput[];
        OR?: ChatMemberScalarWhereWithAggregatesInput[];
        NOT?:
            | ChatMemberScalarWhereWithAggregatesInput
            | ChatMemberScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"ChatMember"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string;
        status?:
            | EnumChatMemberStatusWithAggregatesFilter<"ChatMember">
            | $Enums.ChatMemberStatus;
        userId?: UuidWithAggregatesFilter<"ChatMember"> | string;
        userFullName?: StringWithAggregatesFilter<"ChatMember"> | string;
        userAvatarUrl?:
            | StringNullableWithAggregatesFilter<"ChatMember">
            | string
            | null;
        chatId?: UuidWithAggregatesFilter<"ChatMember"> | string;
    };

    export type ChatMessageWhereInput = {
        AND?: ChatMessageWhereInput | ChatMessageWhereInput[];
        OR?: ChatMessageWhereInput[];
        NOT?: ChatMessageWhereInput | ChatMessageWhereInput[];
        id?: UuidFilter<"ChatMessage"> | string;
        createdAt?: DateTimeFilter<"ChatMessage"> | Date | string;
        updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string;
        message?: StringFilter<"ChatMessage"> | string;
        autoGenerated?: BoolFilter<"ChatMessage"> | boolean;
        parentMessageId?: UuidNullableFilter<"ChatMessage"> | string | null;
        authorId?: UuidFilter<"ChatMessage"> | string;
        chatId?: UuidFilter<"ChatMessage"> | string;
        documentId?: UuidNullableFilter<"ChatMessage"> | string | null;
        documentVersionId?: UuidNullableFilter<"ChatMessage"> | string | null;
        parentMessage?: XOR<
            ChatMessageNullableScalarRelationFilter,
            ChatMessageWhereInput
        > | null;
        author?: XOR<ChatMemberScalarRelationFilter, ChatMemberWhereInput>;
        chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>;
        document?: XOR<
            DocumentNullableScalarRelationFilter,
            DocumentWhereInput
        > | null;
        documentVersion?: XOR<
            FileNullableScalarRelationFilter,
            FileWhereInput
        > | null;
        childMessages?: ChatMessageListRelationFilter;
        chatMessageReadStatuses?: ChatMessageReadStatusListRelationFilter;
    };

    export type ChatMessageOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        message?: SortOrder;
        autoGenerated?: SortOrder;
        parentMessageId?: SortOrderInput | SortOrder;
        authorId?: SortOrder;
        chatId?: SortOrder;
        documentId?: SortOrderInput | SortOrder;
        documentVersionId?: SortOrderInput | SortOrder;
        parentMessage?: ChatMessageOrderByWithRelationInput;
        author?: ChatMemberOrderByWithRelationInput;
        chat?: ChatOrderByWithRelationInput;
        document?: DocumentOrderByWithRelationInput;
        documentVersion?: FileOrderByWithRelationInput;
        childMessages?: ChatMessageOrderByRelationAggregateInput;
        chatMessageReadStatuses?: ChatMessageReadStatusOrderByRelationAggregateInput;
    };

    export type ChatMessageWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            documentId?: string;
            documentVersionId?: string;
            AND?: ChatMessageWhereInput | ChatMessageWhereInput[];
            OR?: ChatMessageWhereInput[];
            NOT?: ChatMessageWhereInput | ChatMessageWhereInput[];
            createdAt?: DateTimeFilter<"ChatMessage"> | Date | string;
            updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string;
            message?: StringFilter<"ChatMessage"> | string;
            autoGenerated?: BoolFilter<"ChatMessage"> | boolean;
            parentMessageId?: UuidNullableFilter<"ChatMessage"> | string | null;
            authorId?: UuidFilter<"ChatMessage"> | string;
            chatId?: UuidFilter<"ChatMessage"> | string;
            parentMessage?: XOR<
                ChatMessageNullableScalarRelationFilter,
                ChatMessageWhereInput
            > | null;
            author?: XOR<ChatMemberScalarRelationFilter, ChatMemberWhereInput>;
            chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>;
            document?: XOR<
                DocumentNullableScalarRelationFilter,
                DocumentWhereInput
            > | null;
            documentVersion?: XOR<
                FileNullableScalarRelationFilter,
                FileWhereInput
            > | null;
            childMessages?: ChatMessageListRelationFilter;
            chatMessageReadStatuses?: ChatMessageReadStatusListRelationFilter;
        },
        "id" | "documentId" | "documentVersionId"
    >;

    export type ChatMessageOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        message?: SortOrder;
        autoGenerated?: SortOrder;
        parentMessageId?: SortOrderInput | SortOrder;
        authorId?: SortOrder;
        chatId?: SortOrder;
        documentId?: SortOrderInput | SortOrder;
        documentVersionId?: SortOrderInput | SortOrder;
        _count?: ChatMessageCountOrderByAggregateInput;
        _max?: ChatMessageMaxOrderByAggregateInput;
        _min?: ChatMessageMinOrderByAggregateInput;
    };

    export type ChatMessageScalarWhereWithAggregatesInput = {
        AND?:
            | ChatMessageScalarWhereWithAggregatesInput
            | ChatMessageScalarWhereWithAggregatesInput[];
        OR?: ChatMessageScalarWhereWithAggregatesInput[];
        NOT?:
            | ChatMessageScalarWhereWithAggregatesInput
            | ChatMessageScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"ChatMessage"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string;
        message?: StringWithAggregatesFilter<"ChatMessage"> | string;
        autoGenerated?: BoolWithAggregatesFilter<"ChatMessage"> | boolean;
        parentMessageId?:
            | UuidNullableWithAggregatesFilter<"ChatMessage">
            | string
            | null;
        authorId?: UuidWithAggregatesFilter<"ChatMessage"> | string;
        chatId?: UuidWithAggregatesFilter<"ChatMessage"> | string;
        documentId?:
            | UuidNullableWithAggregatesFilter<"ChatMessage">
            | string
            | null;
        documentVersionId?:
            | UuidNullableWithAggregatesFilter<"ChatMessage">
            | string
            | null;
    };

    export type ChatMessageReadStatusWhereInput = {
        AND?:
            | ChatMessageReadStatusWhereInput
            | ChatMessageReadStatusWhereInput[];
        OR?: ChatMessageReadStatusWhereInput[];
        NOT?:
            | ChatMessageReadStatusWhereInput
            | ChatMessageReadStatusWhereInput[];
        id?: UuidFilter<"ChatMessageReadStatus"> | string;
        createdAt?: DateTimeFilter<"ChatMessageReadStatus"> | Date | string;
        updatedAt?: DateTimeFilter<"ChatMessageReadStatus"> | Date | string;
        chatMessageId?: UuidFilter<"ChatMessageReadStatus"> | string;
        readById?: UuidFilter<"ChatMessageReadStatus"> | string;
        chatMessage?: XOR<
            ChatMessageScalarRelationFilter,
            ChatMessageWhereInput
        >;
        readBy?: XOR<ChatMemberScalarRelationFilter, ChatMemberWhereInput>;
    };

    export type ChatMessageReadStatusOrderByWithRelationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        chatMessageId?: SortOrder;
        readById?: SortOrder;
        chatMessage?: ChatMessageOrderByWithRelationInput;
        readBy?: ChatMemberOrderByWithRelationInput;
    };

    export type ChatMessageReadStatusWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            chatMessageId_readById?: ChatMessageReadStatusChatMessageIdReadByIdCompoundUniqueInput;
            AND?:
                | ChatMessageReadStatusWhereInput
                | ChatMessageReadStatusWhereInput[];
            OR?: ChatMessageReadStatusWhereInput[];
            NOT?:
                | ChatMessageReadStatusWhereInput
                | ChatMessageReadStatusWhereInput[];
            createdAt?: DateTimeFilter<"ChatMessageReadStatus"> | Date | string;
            updatedAt?: DateTimeFilter<"ChatMessageReadStatus"> | Date | string;
            chatMessageId?: UuidFilter<"ChatMessageReadStatus"> | string;
            readById?: UuidFilter<"ChatMessageReadStatus"> | string;
            chatMessage?: XOR<
                ChatMessageScalarRelationFilter,
                ChatMessageWhereInput
            >;
            readBy?: XOR<ChatMemberScalarRelationFilter, ChatMemberWhereInput>;
        },
        "id" | "chatMessageId_readById"
    >;

    export type ChatMessageReadStatusOrderByWithAggregationInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        chatMessageId?: SortOrder;
        readById?: SortOrder;
        _count?: ChatMessageReadStatusCountOrderByAggregateInput;
        _max?: ChatMessageReadStatusMaxOrderByAggregateInput;
        _min?: ChatMessageReadStatusMinOrderByAggregateInput;
    };

    export type ChatMessageReadStatusScalarWhereWithAggregatesInput = {
        AND?:
            | ChatMessageReadStatusScalarWhereWithAggregatesInput
            | ChatMessageReadStatusScalarWhereWithAggregatesInput[];
        OR?: ChatMessageReadStatusScalarWhereWithAggregatesInput[];
        NOT?:
            | ChatMessageReadStatusScalarWhereWithAggregatesInput
            | ChatMessageReadStatusScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"ChatMessageReadStatus"> | string;
        createdAt?:
            | DateTimeWithAggregatesFilter<"ChatMessageReadStatus">
            | Date
            | string;
        updatedAt?:
            | DateTimeWithAggregatesFilter<"ChatMessageReadStatus">
            | Date
            | string;
        chatMessageId?:
            | UuidWithAggregatesFilter<"ChatMessageReadStatus">
            | string;
        readById?: UuidWithAggregatesFilter<"ChatMessageReadStatus"> | string;
    };

    export type DocumentCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
        chat?: ChatCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
        chat?: ChatUncheckedCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUncheckedUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
    };

    export type DocumentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
    };

    export type DocumentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
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
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentVersionInput;
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
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentVersionInput;
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
        chatMessages?: ChatMessageUpdateManyWithoutDocumentVersionNestedInput;
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
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentVersionNestedInput;
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
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
        document: DocumentCreateNestedOneWithoutDocumentExtractedFieldsInput;
    };

    export type DocumentExtractedFieldUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
        documentId: string;
    };

    export type DocumentExtractedFieldUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldTypes;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourcesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSources;
        document?: DocumentUpdateOneRequiredWithoutDocumentExtractedFieldsNestedInput;
    };

    export type DocumentExtractedFieldUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldTypes;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourcesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSources;
        documentId?: StringFieldUpdateOperationsInput | string;
    };

    export type DocumentExtractedFieldCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
        documentId: string;
    };

    export type DocumentExtractedFieldUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldTypes;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourcesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSources;
    };

    export type DocumentExtractedFieldUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldTypes;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourcesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSources;
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

    export type ChatCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        document?: DocumentCreateNestedOneWithoutChatInput;
        messages?: ChatMessageCreateNestedManyWithoutChatInput;
        members?: ChatMemberCreateNestedManyWithoutChatInput;
    };

    export type ChatUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        documentId?: string | null;
        messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput;
        members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput;
    };

    export type ChatUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        document?: DocumentUpdateOneWithoutChatNestedInput;
        messages?: ChatMessageUpdateManyWithoutChatNestedInput;
        members?: ChatMemberUpdateManyWithoutChatNestedInput;
    };

    export type ChatUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput;
        members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput;
    };

    export type ChatCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        documentId?: string | null;
    };

    export type ChatUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
    };

    export type ChatUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
    };

    export type ChatMemberCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chat: ChatCreateNestedOneWithoutMembersInput;
        messages?: ChatMessageCreateNestedManyWithoutAuthorInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutReadByInput;
    };

    export type ChatMemberUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chatId: string;
        messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutReadByInput;
    };

    export type ChatMemberUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chat?: ChatUpdateOneRequiredWithoutMembersNestedInput;
        messages?: ChatMessageUpdateManyWithoutAuthorNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutReadByNestedInput;
    };

    export type ChatMemberUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatId?: StringFieldUpdateOperationsInput | string;
        messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutReadByNestedInput;
    };

    export type ChatMemberCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chatId: string;
    };

    export type ChatMemberUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ChatMemberUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatId?: StringFieldUpdateOperationsInput | string;
    };

    export type ChatMessageCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
        childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
    };

    export type ChatMessageUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
    };

    export type ChatMessageUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ChatMessageReadStatusCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        chatMessage: ChatMessageCreateNestedOneWithoutChatMessageReadStatusesInput;
        readBy: ChatMemberCreateNestedOneWithoutChatMessageReadStatusesInput;
    };

    export type ChatMessageReadStatusUncheckedCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        chatMessageId: string;
        readById: string;
    };

    export type ChatMessageReadStatusUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        chatMessage?: ChatMessageUpdateOneRequiredWithoutChatMessageReadStatusesNestedInput;
        readBy?: ChatMemberUpdateOneRequiredWithoutChatMessageReadStatusesNestedInput;
    };

    export type ChatMessageReadStatusUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        chatMessageId?: StringFieldUpdateOperationsInput | string;
        readById?: StringFieldUpdateOperationsInput | string;
    };

    export type ChatMessageReadStatusCreateManyInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        chatMessageId: string;
        readById: string;
    };

    export type ChatMessageReadStatusUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ChatMessageReadStatusUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        chatMessageId?: StringFieldUpdateOperationsInput | string;
        readById?: StringFieldUpdateOperationsInput | string;
    };

    export type UuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidFilter<$PrismaModel> | string;
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

    export type EnumRiskLevelsNullableFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.RiskLevels
            | EnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelsNullableFilter<$PrismaModel>
            | $Enums.RiskLevels
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

    export type ChatNullableScalarRelationFilter = {
        is?: ChatWhereInput | null;
        isNot?: ChatWhereInput | null;
    };

    export type ChatMessageListRelationFilter = {
        every?: ChatMessageWhereInput;
        some?: ChatMessageWhereInput;
        none?: ChatMessageWhereInput;
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

    export type ChatMessageOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type DocumentCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
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

    export type UuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
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

    export type EnumRiskLevelsNullableWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.RiskLevels
            | EnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelsNullableWithAggregatesFilter<$PrismaModel>
            | $Enums.RiskLevels
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedEnumRiskLevelsNullableFilter<$PrismaModel>;
        _max?: NestedEnumRiskLevelsNullableFilter<$PrismaModel>;
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

    export type EnumExtractedFieldTypesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldTypes
            | EnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypesFilter<$PrismaModel>
            | $Enums.ExtractedFieldTypes;
    };

    export type EnumExtractedFieldSourcesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldSources
            | EnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourcesFilter<$PrismaModel>
            | $Enums.ExtractedFieldSources;
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

    export type EnumExtractedFieldTypesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldTypes
            | EnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypesWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldTypes;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldTypesFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldTypesFilter<$PrismaModel>;
    };

    export type EnumExtractedFieldSourcesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldSources
            | EnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourcesWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldSources;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldSourcesFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldSourcesFilter<$PrismaModel>;
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

    export type UuidNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
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

    export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?:
            | NestedUuidNullableWithAggregatesFilter<$PrismaModel>
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type ChatMemberListRelationFilter = {
        every?: ChatMemberWhereInput;
        some?: ChatMemberWhereInput;
        none?: ChatMemberWhereInput;
    };

    export type ChatMemberOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type ChatCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        documentId?: SortOrder;
    };

    export type ChatMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        documentId?: SortOrder;
    };

    export type ChatMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        name?: SortOrder;
        documentId?: SortOrder;
    };

    export type EnumChatMemberStatusFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ChatMemberStatus
            | EnumChatMemberStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ChatMemberStatus[]
            | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ChatMemberStatus[]
            | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumChatMemberStatusFilter<$PrismaModel>
            | $Enums.ChatMemberStatus;
    };

    export type ChatScalarRelationFilter = {
        is?: ChatWhereInput;
        isNot?: ChatWhereInput;
    };

    export type ChatMessageReadStatusListRelationFilter = {
        every?: ChatMessageReadStatusWhereInput;
        some?: ChatMessageReadStatusWhereInput;
        none?: ChatMessageReadStatusWhereInput;
    };

    export type ChatMessageReadStatusOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type ChatMemberChatIdUserIdCompoundUniqueInput = {
        chatId: string;
        userId: string;
    };

    export type ChatMemberCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrder;
        chatId?: SortOrder;
    };

    export type ChatMemberMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrder;
        chatId?: SortOrder;
    };

    export type ChatMemberMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        status?: SortOrder;
        userId?: SortOrder;
        userFullName?: SortOrder;
        userAvatarUrl?: SortOrder;
        chatId?: SortOrder;
    };

    export type EnumChatMemberStatusWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?:
                | $Enums.ChatMemberStatus
                | EnumChatMemberStatusFieldRefInput<$PrismaModel>;
            in?:
                | $Enums.ChatMemberStatus[]
                | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
            notIn?:
                | $Enums.ChatMemberStatus[]
                | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
            not?:
                | NestedEnumChatMemberStatusWithAggregatesFilter<$PrismaModel>
                | $Enums.ChatMemberStatus;
            _count?: NestedIntFilter<$PrismaModel>;
            _min?: NestedEnumChatMemberStatusFilter<$PrismaModel>;
            _max?: NestedEnumChatMemberStatusFilter<$PrismaModel>;
        };

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type ChatMessageNullableScalarRelationFilter = {
        is?: ChatMessageWhereInput | null;
        isNot?: ChatMessageWhereInput | null;
    };

    export type ChatMemberScalarRelationFilter = {
        is?: ChatMemberWhereInput;
        isNot?: ChatMemberWhereInput;
    };

    export type FileNullableScalarRelationFilter = {
        is?: FileWhereInput | null;
        isNot?: FileWhereInput | null;
    };

    export type ChatMessageCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        message?: SortOrder;
        autoGenerated?: SortOrder;
        parentMessageId?: SortOrder;
        authorId?: SortOrder;
        chatId?: SortOrder;
        documentId?: SortOrder;
        documentVersionId?: SortOrder;
    };

    export type ChatMessageMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        message?: SortOrder;
        autoGenerated?: SortOrder;
        parentMessageId?: SortOrder;
        authorId?: SortOrder;
        chatId?: SortOrder;
        documentId?: SortOrder;
        documentVersionId?: SortOrder;
    };

    export type ChatMessageMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        message?: SortOrder;
        autoGenerated?: SortOrder;
        parentMessageId?: SortOrder;
        authorId?: SortOrder;
        chatId?: SortOrder;
        documentId?: SortOrder;
        documentVersionId?: SortOrder;
    };

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type ChatMessageScalarRelationFilter = {
        is?: ChatMessageWhereInput;
        isNot?: ChatMessageWhereInput;
    };

    export type ChatMessageReadStatusChatMessageIdReadByIdCompoundUniqueInput =
        {
            chatMessageId: string;
            readById: string;
        };

    export type ChatMessageReadStatusCountOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        chatMessageId?: SortOrder;
        readById?: SortOrder;
    };

    export type ChatMessageReadStatusMaxOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        chatMessageId?: SortOrder;
        readById?: SortOrder;
    };

    export type ChatMessageReadStatusMinOrderByAggregateInput = {
        id?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        chatMessageId?: SortOrder;
        readById?: SortOrder;
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

    export type ChatCreateNestedOneWithoutDocumentInput = {
        create?: XOR<
            ChatCreateWithoutDocumentInput,
            ChatUncheckedCreateWithoutDocumentInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutDocumentInput;
        connect?: ChatWhereUniqueInput;
    };

    export type ChatMessageCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutDocumentInput,
                  ChatMessageUncheckedCreateWithoutDocumentInput
              >
            | ChatMessageCreateWithoutDocumentInput[]
            | ChatMessageUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutDocumentInput
            | ChatMessageCreateOrConnectWithoutDocumentInput[];
        createMany?: ChatMessageCreateManyDocumentInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
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

    export type ChatUncheckedCreateNestedOneWithoutDocumentInput = {
        create?: XOR<
            ChatCreateWithoutDocumentInput,
            ChatUncheckedCreateWithoutDocumentInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutDocumentInput;
        connect?: ChatWhereUniqueInput;
    };

    export type ChatMessageUncheckedCreateNestedManyWithoutDocumentInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutDocumentInput,
                  ChatMessageUncheckedCreateWithoutDocumentInput
              >
            | ChatMessageCreateWithoutDocumentInput[]
            | ChatMessageUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutDocumentInput
            | ChatMessageCreateOrConnectWithoutDocumentInput[];
        createMany?: ChatMessageCreateManyDocumentInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
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

    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null;
    };

    export type NullableEnumRiskLevelsFieldUpdateOperationsInput = {
        set?: $Enums.RiskLevels | null;
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

    export type ChatUpdateOneWithoutDocumentNestedInput = {
        create?: XOR<
            ChatCreateWithoutDocumentInput,
            ChatUncheckedCreateWithoutDocumentInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutDocumentInput;
        upsert?: ChatUpsertWithoutDocumentInput;
        disconnect?: ChatWhereInput | boolean;
        delete?: ChatWhereInput | boolean;
        connect?: ChatWhereUniqueInput;
        update?: XOR<
            XOR<
                ChatUpdateToOneWithWhereWithoutDocumentInput,
                ChatUpdateWithoutDocumentInput
            >,
            ChatUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type ChatMessageUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutDocumentInput,
                  ChatMessageUncheckedCreateWithoutDocumentInput
              >
            | ChatMessageCreateWithoutDocumentInput[]
            | ChatMessageUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutDocumentInput
            | ChatMessageCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutDocumentInput
            | ChatMessageUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: ChatMessageCreateManyDocumentInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutDocumentInput
            | ChatMessageUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutDocumentInput
            | ChatMessageUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
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

    export type ChatUncheckedUpdateOneWithoutDocumentNestedInput = {
        create?: XOR<
            ChatCreateWithoutDocumentInput,
            ChatUncheckedCreateWithoutDocumentInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutDocumentInput;
        upsert?: ChatUpsertWithoutDocumentInput;
        disconnect?: ChatWhereInput | boolean;
        delete?: ChatWhereInput | boolean;
        connect?: ChatWhereUniqueInput;
        update?: XOR<
            XOR<
                ChatUpdateToOneWithWhereWithoutDocumentInput,
                ChatUpdateWithoutDocumentInput
            >,
            ChatUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutDocumentInput,
                  ChatMessageUncheckedCreateWithoutDocumentInput
              >
            | ChatMessageCreateWithoutDocumentInput[]
            | ChatMessageUncheckedCreateWithoutDocumentInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutDocumentInput
            | ChatMessageCreateOrConnectWithoutDocumentInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutDocumentInput
            | ChatMessageUpsertWithWhereUniqueWithoutDocumentInput[];
        createMany?: ChatMessageCreateManyDocumentInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutDocumentInput
            | ChatMessageUpdateWithWhereUniqueWithoutDocumentInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutDocumentInput
            | ChatMessageUpdateManyWithWhereWithoutDocumentInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
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

    export type ChatMessageCreateNestedManyWithoutDocumentVersionInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutDocumentVersionInput,
                  ChatMessageUncheckedCreateWithoutDocumentVersionInput
              >
            | ChatMessageCreateWithoutDocumentVersionInput[]
            | ChatMessageUncheckedCreateWithoutDocumentVersionInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutDocumentVersionInput
            | ChatMessageCreateOrConnectWithoutDocumentVersionInput[];
        createMany?: ChatMessageCreateManyDocumentVersionInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    };

    export type ChatMessageUncheckedCreateNestedManyWithoutDocumentVersionInput =
        {
            create?:
                | XOR<
                      ChatMessageCreateWithoutDocumentVersionInput,
                      ChatMessageUncheckedCreateWithoutDocumentVersionInput
                  >
                | ChatMessageCreateWithoutDocumentVersionInput[]
                | ChatMessageUncheckedCreateWithoutDocumentVersionInput[];
            connectOrCreate?:
                | ChatMessageCreateOrConnectWithoutDocumentVersionInput
                | ChatMessageCreateOrConnectWithoutDocumentVersionInput[];
            createMany?: ChatMessageCreateManyDocumentVersionInputEnvelope;
            connect?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
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

    export type ChatMessageUpdateManyWithoutDocumentVersionNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutDocumentVersionInput,
                  ChatMessageUncheckedCreateWithoutDocumentVersionInput
              >
            | ChatMessageCreateWithoutDocumentVersionInput[]
            | ChatMessageUncheckedCreateWithoutDocumentVersionInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutDocumentVersionInput
            | ChatMessageCreateOrConnectWithoutDocumentVersionInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutDocumentVersionInput
            | ChatMessageUpsertWithWhereUniqueWithoutDocumentVersionInput[];
        createMany?: ChatMessageCreateManyDocumentVersionInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutDocumentVersionInput
            | ChatMessageUpdateWithWhereUniqueWithoutDocumentVersionInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutDocumentVersionInput
            | ChatMessageUpdateManyWithWhereWithoutDocumentVersionInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
    };

    export type ChatMessageUncheckedUpdateManyWithoutDocumentVersionNestedInput =
        {
            create?:
                | XOR<
                      ChatMessageCreateWithoutDocumentVersionInput,
                      ChatMessageUncheckedCreateWithoutDocumentVersionInput
                  >
                | ChatMessageCreateWithoutDocumentVersionInput[]
                | ChatMessageUncheckedCreateWithoutDocumentVersionInput[];
            connectOrCreate?:
                | ChatMessageCreateOrConnectWithoutDocumentVersionInput
                | ChatMessageCreateOrConnectWithoutDocumentVersionInput[];
            upsert?:
                | ChatMessageUpsertWithWhereUniqueWithoutDocumentVersionInput
                | ChatMessageUpsertWithWhereUniqueWithoutDocumentVersionInput[];
            createMany?: ChatMessageCreateManyDocumentVersionInputEnvelope;
            set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
            disconnect?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
            delete?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
            connect?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
            update?:
                | ChatMessageUpdateWithWhereUniqueWithoutDocumentVersionInput
                | ChatMessageUpdateWithWhereUniqueWithoutDocumentVersionInput[];
            updateMany?:
                | ChatMessageUpdateManyWithWhereWithoutDocumentVersionInput
                | ChatMessageUpdateManyWithWhereWithoutDocumentVersionInput[];
            deleteMany?:
                | ChatMessageScalarWhereInput
                | ChatMessageScalarWhereInput[];
        };

    export type DocumentCreateNestedOneWithoutDocumentExtractedFieldsInput = {
        create?: XOR<
            DocumentCreateWithoutDocumentExtractedFieldsInput,
            DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutDocumentExtractedFieldsInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type EnumExtractedFieldTypesFieldUpdateOperationsInput = {
        set?: $Enums.ExtractedFieldTypes;
    };

    export type EnumExtractedFieldSourcesFieldUpdateOperationsInput = {
        set?: $Enums.ExtractedFieldSources;
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

    export type DocumentCreateNestedOneWithoutChatInput = {
        create?: XOR<
            DocumentCreateWithoutChatInput,
            DocumentUncheckedCreateWithoutChatInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutChatInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type ChatMessageCreateNestedManyWithoutChatInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutChatInput,
                  ChatMessageUncheckedCreateWithoutChatInput
              >
            | ChatMessageCreateWithoutChatInput[]
            | ChatMessageUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutChatInput
            | ChatMessageCreateOrConnectWithoutChatInput[];
        createMany?: ChatMessageCreateManyChatInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    };

    export type ChatMemberCreateNestedManyWithoutChatInput = {
        create?:
            | XOR<
                  ChatMemberCreateWithoutChatInput,
                  ChatMemberUncheckedCreateWithoutChatInput
              >
            | ChatMemberCreateWithoutChatInput[]
            | ChatMemberUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMemberCreateOrConnectWithoutChatInput
            | ChatMemberCreateOrConnectWithoutChatInput[];
        createMany?: ChatMemberCreateManyChatInputEnvelope;
        connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
    };

    export type ChatMessageUncheckedCreateNestedManyWithoutChatInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutChatInput,
                  ChatMessageUncheckedCreateWithoutChatInput
              >
            | ChatMessageCreateWithoutChatInput[]
            | ChatMessageUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutChatInput
            | ChatMessageCreateOrConnectWithoutChatInput[];
        createMany?: ChatMessageCreateManyChatInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    };

    export type ChatMemberUncheckedCreateNestedManyWithoutChatInput = {
        create?:
            | XOR<
                  ChatMemberCreateWithoutChatInput,
                  ChatMemberUncheckedCreateWithoutChatInput
              >
            | ChatMemberCreateWithoutChatInput[]
            | ChatMemberUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMemberCreateOrConnectWithoutChatInput
            | ChatMemberCreateOrConnectWithoutChatInput[];
        createMany?: ChatMemberCreateManyChatInputEnvelope;
        connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
    };

    export type DocumentUpdateOneWithoutChatNestedInput = {
        create?: XOR<
            DocumentCreateWithoutChatInput,
            DocumentUncheckedCreateWithoutChatInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutChatInput;
        upsert?: DocumentUpsertWithoutChatInput;
        disconnect?: DocumentWhereInput | boolean;
        delete?: DocumentWhereInput | boolean;
        connect?: DocumentWhereUniqueInput;
        update?: XOR<
            XOR<
                DocumentUpdateToOneWithWhereWithoutChatInput,
                DocumentUpdateWithoutChatInput
            >,
            DocumentUncheckedUpdateWithoutChatInput
        >;
    };

    export type ChatMessageUpdateManyWithoutChatNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutChatInput,
                  ChatMessageUncheckedCreateWithoutChatInput
              >
            | ChatMessageCreateWithoutChatInput[]
            | ChatMessageUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutChatInput
            | ChatMessageCreateOrConnectWithoutChatInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutChatInput
            | ChatMessageUpsertWithWhereUniqueWithoutChatInput[];
        createMany?: ChatMessageCreateManyChatInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutChatInput
            | ChatMessageUpdateWithWhereUniqueWithoutChatInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutChatInput
            | ChatMessageUpdateManyWithWhereWithoutChatInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
    };

    export type ChatMemberUpdateManyWithoutChatNestedInput = {
        create?:
            | XOR<
                  ChatMemberCreateWithoutChatInput,
                  ChatMemberUncheckedCreateWithoutChatInput
              >
            | ChatMemberCreateWithoutChatInput[]
            | ChatMemberUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMemberCreateOrConnectWithoutChatInput
            | ChatMemberCreateOrConnectWithoutChatInput[];
        upsert?:
            | ChatMemberUpsertWithWhereUniqueWithoutChatInput
            | ChatMemberUpsertWithWhereUniqueWithoutChatInput[];
        createMany?: ChatMemberCreateManyChatInputEnvelope;
        set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        update?:
            | ChatMemberUpdateWithWhereUniqueWithoutChatInput
            | ChatMemberUpdateWithWhereUniqueWithoutChatInput[];
        updateMany?:
            | ChatMemberUpdateManyWithWhereWithoutChatInput
            | ChatMemberUpdateManyWithWhereWithoutChatInput[];
        deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[];
    };

    export type ChatMessageUncheckedUpdateManyWithoutChatNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutChatInput,
                  ChatMessageUncheckedCreateWithoutChatInput
              >
            | ChatMessageCreateWithoutChatInput[]
            | ChatMessageUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutChatInput
            | ChatMessageCreateOrConnectWithoutChatInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutChatInput
            | ChatMessageUpsertWithWhereUniqueWithoutChatInput[];
        createMany?: ChatMessageCreateManyChatInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutChatInput
            | ChatMessageUpdateWithWhereUniqueWithoutChatInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutChatInput
            | ChatMessageUpdateManyWithWhereWithoutChatInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
    };

    export type ChatMemberUncheckedUpdateManyWithoutChatNestedInput = {
        create?:
            | XOR<
                  ChatMemberCreateWithoutChatInput,
                  ChatMemberUncheckedCreateWithoutChatInput
              >
            | ChatMemberCreateWithoutChatInput[]
            | ChatMemberUncheckedCreateWithoutChatInput[];
        connectOrCreate?:
            | ChatMemberCreateOrConnectWithoutChatInput
            | ChatMemberCreateOrConnectWithoutChatInput[];
        upsert?:
            | ChatMemberUpsertWithWhereUniqueWithoutChatInput
            | ChatMemberUpsertWithWhereUniqueWithoutChatInput[];
        createMany?: ChatMemberCreateManyChatInputEnvelope;
        set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[];
        update?:
            | ChatMemberUpdateWithWhereUniqueWithoutChatInput
            | ChatMemberUpdateWithWhereUniqueWithoutChatInput[];
        updateMany?:
            | ChatMemberUpdateManyWithWhereWithoutChatInput
            | ChatMemberUpdateManyWithWhereWithoutChatInput[];
        deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[];
    };

    export type ChatCreateNestedOneWithoutMembersInput = {
        create?: XOR<
            ChatCreateWithoutMembersInput,
            ChatUncheckedCreateWithoutMembersInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutMembersInput;
        connect?: ChatWhereUniqueInput;
    };

    export type ChatMessageCreateNestedManyWithoutAuthorInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutAuthorInput,
                  ChatMessageUncheckedCreateWithoutAuthorInput
              >
            | ChatMessageCreateWithoutAuthorInput[]
            | ChatMessageUncheckedCreateWithoutAuthorInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutAuthorInput
            | ChatMessageCreateOrConnectWithoutAuthorInput[];
        createMany?: ChatMessageCreateManyAuthorInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    };

    export type ChatMessageReadStatusCreateNestedManyWithoutReadByInput = {
        create?:
            | XOR<
                  ChatMessageReadStatusCreateWithoutReadByInput,
                  ChatMessageReadStatusUncheckedCreateWithoutReadByInput
              >
            | ChatMessageReadStatusCreateWithoutReadByInput[]
            | ChatMessageReadStatusUncheckedCreateWithoutReadByInput[];
        connectOrCreate?:
            | ChatMessageReadStatusCreateOrConnectWithoutReadByInput
            | ChatMessageReadStatusCreateOrConnectWithoutReadByInput[];
        createMany?: ChatMessageReadStatusCreateManyReadByInputEnvelope;
        connect?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
    };

    export type ChatMessageUncheckedCreateNestedManyWithoutAuthorInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutAuthorInput,
                  ChatMessageUncheckedCreateWithoutAuthorInput
              >
            | ChatMessageCreateWithoutAuthorInput[]
            | ChatMessageUncheckedCreateWithoutAuthorInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutAuthorInput
            | ChatMessageCreateOrConnectWithoutAuthorInput[];
        createMany?: ChatMessageCreateManyAuthorInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    };

    export type ChatMessageReadStatusUncheckedCreateNestedManyWithoutReadByInput =
        {
            create?:
                | XOR<
                      ChatMessageReadStatusCreateWithoutReadByInput,
                      ChatMessageReadStatusUncheckedCreateWithoutReadByInput
                  >
                | ChatMessageReadStatusCreateWithoutReadByInput[]
                | ChatMessageReadStatusUncheckedCreateWithoutReadByInput[];
            connectOrCreate?:
                | ChatMessageReadStatusCreateOrConnectWithoutReadByInput
                | ChatMessageReadStatusCreateOrConnectWithoutReadByInput[];
            createMany?: ChatMessageReadStatusCreateManyReadByInputEnvelope;
            connect?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
        };

    export type EnumChatMemberStatusFieldUpdateOperationsInput = {
        set?: $Enums.ChatMemberStatus;
    };

    export type ChatUpdateOneRequiredWithoutMembersNestedInput = {
        create?: XOR<
            ChatCreateWithoutMembersInput,
            ChatUncheckedCreateWithoutMembersInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutMembersInput;
        upsert?: ChatUpsertWithoutMembersInput;
        connect?: ChatWhereUniqueInput;
        update?: XOR<
            XOR<
                ChatUpdateToOneWithWhereWithoutMembersInput,
                ChatUpdateWithoutMembersInput
            >,
            ChatUncheckedUpdateWithoutMembersInput
        >;
    };

    export type ChatMessageUpdateManyWithoutAuthorNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutAuthorInput,
                  ChatMessageUncheckedCreateWithoutAuthorInput
              >
            | ChatMessageCreateWithoutAuthorInput[]
            | ChatMessageUncheckedCreateWithoutAuthorInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutAuthorInput
            | ChatMessageCreateOrConnectWithoutAuthorInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput
            | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[];
        createMany?: ChatMessageCreateManyAuthorInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput
            | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutAuthorInput
            | ChatMessageUpdateManyWithWhereWithoutAuthorInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
    };

    export type ChatMessageReadStatusUpdateManyWithoutReadByNestedInput = {
        create?:
            | XOR<
                  ChatMessageReadStatusCreateWithoutReadByInput,
                  ChatMessageReadStatusUncheckedCreateWithoutReadByInput
              >
            | ChatMessageReadStatusCreateWithoutReadByInput[]
            | ChatMessageReadStatusUncheckedCreateWithoutReadByInput[];
        connectOrCreate?:
            | ChatMessageReadStatusCreateOrConnectWithoutReadByInput
            | ChatMessageReadStatusCreateOrConnectWithoutReadByInput[];
        upsert?:
            | ChatMessageReadStatusUpsertWithWhereUniqueWithoutReadByInput
            | ChatMessageReadStatusUpsertWithWhereUniqueWithoutReadByInput[];
        createMany?: ChatMessageReadStatusCreateManyReadByInputEnvelope;
        set?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        disconnect?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        delete?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        connect?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        update?:
            | ChatMessageReadStatusUpdateWithWhereUniqueWithoutReadByInput
            | ChatMessageReadStatusUpdateWithWhereUniqueWithoutReadByInput[];
        updateMany?:
            | ChatMessageReadStatusUpdateManyWithWhereWithoutReadByInput
            | ChatMessageReadStatusUpdateManyWithWhereWithoutReadByInput[];
        deleteMany?:
            | ChatMessageReadStatusScalarWhereInput
            | ChatMessageReadStatusScalarWhereInput[];
    };

    export type ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutAuthorInput,
                  ChatMessageUncheckedCreateWithoutAuthorInput
              >
            | ChatMessageCreateWithoutAuthorInput[]
            | ChatMessageUncheckedCreateWithoutAuthorInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutAuthorInput
            | ChatMessageCreateOrConnectWithoutAuthorInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput
            | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[];
        createMany?: ChatMessageCreateManyAuthorInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput
            | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutAuthorInput
            | ChatMessageUpdateManyWithWhereWithoutAuthorInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
    };

    export type ChatMessageReadStatusUncheckedUpdateManyWithoutReadByNestedInput =
        {
            create?:
                | XOR<
                      ChatMessageReadStatusCreateWithoutReadByInput,
                      ChatMessageReadStatusUncheckedCreateWithoutReadByInput
                  >
                | ChatMessageReadStatusCreateWithoutReadByInput[]
                | ChatMessageReadStatusUncheckedCreateWithoutReadByInput[];
            connectOrCreate?:
                | ChatMessageReadStatusCreateOrConnectWithoutReadByInput
                | ChatMessageReadStatusCreateOrConnectWithoutReadByInput[];
            upsert?:
                | ChatMessageReadStatusUpsertWithWhereUniqueWithoutReadByInput
                | ChatMessageReadStatusUpsertWithWhereUniqueWithoutReadByInput[];
            createMany?: ChatMessageReadStatusCreateManyReadByInputEnvelope;
            set?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            disconnect?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            delete?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            connect?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            update?:
                | ChatMessageReadStatusUpdateWithWhereUniqueWithoutReadByInput
                | ChatMessageReadStatusUpdateWithWhereUniqueWithoutReadByInput[];
            updateMany?:
                | ChatMessageReadStatusUpdateManyWithWhereWithoutReadByInput
                | ChatMessageReadStatusUpdateManyWithWhereWithoutReadByInput[];
            deleteMany?:
                | ChatMessageReadStatusScalarWhereInput
                | ChatMessageReadStatusScalarWhereInput[];
        };

    export type ChatMessageCreateNestedOneWithoutChildMessagesInput = {
        create?: XOR<
            ChatMessageCreateWithoutChildMessagesInput,
            ChatMessageUncheckedCreateWithoutChildMessagesInput
        >;
        connectOrCreate?: ChatMessageCreateOrConnectWithoutChildMessagesInput;
        connect?: ChatMessageWhereUniqueInput;
    };

    export type ChatMemberCreateNestedOneWithoutMessagesInput = {
        create?: XOR<
            ChatMemberCreateWithoutMessagesInput,
            ChatMemberUncheckedCreateWithoutMessagesInput
        >;
        connectOrCreate?: ChatMemberCreateOrConnectWithoutMessagesInput;
        connect?: ChatMemberWhereUniqueInput;
    };

    export type ChatCreateNestedOneWithoutMessagesInput = {
        create?: XOR<
            ChatCreateWithoutMessagesInput,
            ChatUncheckedCreateWithoutMessagesInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput;
        connect?: ChatWhereUniqueInput;
    };

    export type DocumentCreateNestedOneWithoutChatMessagesInput = {
        create?: XOR<
            DocumentCreateWithoutChatMessagesInput,
            DocumentUncheckedCreateWithoutChatMessagesInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutChatMessagesInput;
        connect?: DocumentWhereUniqueInput;
    };

    export type FileCreateNestedOneWithoutChatMessagesInput = {
        create?: XOR<
            FileCreateWithoutChatMessagesInput,
            FileUncheckedCreateWithoutChatMessagesInput
        >;
        connectOrCreate?: FileCreateOrConnectWithoutChatMessagesInput;
        connect?: FileWhereUniqueInput;
    };

    export type ChatMessageCreateNestedManyWithoutParentMessageInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutParentMessageInput,
                  ChatMessageUncheckedCreateWithoutParentMessageInput
              >
            | ChatMessageCreateWithoutParentMessageInput[]
            | ChatMessageUncheckedCreateWithoutParentMessageInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutParentMessageInput
            | ChatMessageCreateOrConnectWithoutParentMessageInput[];
        createMany?: ChatMessageCreateManyParentMessageInputEnvelope;
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    };

    export type ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput = {
        create?:
            | XOR<
                  ChatMessageReadStatusCreateWithoutChatMessageInput,
                  ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput
              >
            | ChatMessageReadStatusCreateWithoutChatMessageInput[]
            | ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput[];
        connectOrCreate?:
            | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput
            | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput[];
        createMany?: ChatMessageReadStatusCreateManyChatMessageInputEnvelope;
        connect?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
    };

    export type ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput =
        {
            create?:
                | XOR<
                      ChatMessageCreateWithoutParentMessageInput,
                      ChatMessageUncheckedCreateWithoutParentMessageInput
                  >
                | ChatMessageCreateWithoutParentMessageInput[]
                | ChatMessageUncheckedCreateWithoutParentMessageInput[];
            connectOrCreate?:
                | ChatMessageCreateOrConnectWithoutParentMessageInput
                | ChatMessageCreateOrConnectWithoutParentMessageInput[];
            createMany?: ChatMessageCreateManyParentMessageInputEnvelope;
            connect?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
        };

    export type ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput =
        {
            create?:
                | XOR<
                      ChatMessageReadStatusCreateWithoutChatMessageInput,
                      ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput
                  >
                | ChatMessageReadStatusCreateWithoutChatMessageInput[]
                | ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput[];
            connectOrCreate?:
                | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput
                | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput[];
            createMany?: ChatMessageReadStatusCreateManyChatMessageInputEnvelope;
            connect?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
        };

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean;
    };

    export type ChatMessageUpdateOneWithoutChildMessagesNestedInput = {
        create?: XOR<
            ChatMessageCreateWithoutChildMessagesInput,
            ChatMessageUncheckedCreateWithoutChildMessagesInput
        >;
        connectOrCreate?: ChatMessageCreateOrConnectWithoutChildMessagesInput;
        upsert?: ChatMessageUpsertWithoutChildMessagesInput;
        disconnect?: ChatMessageWhereInput | boolean;
        delete?: ChatMessageWhereInput | boolean;
        connect?: ChatMessageWhereUniqueInput;
        update?: XOR<
            XOR<
                ChatMessageUpdateToOneWithWhereWithoutChildMessagesInput,
                ChatMessageUpdateWithoutChildMessagesInput
            >,
            ChatMessageUncheckedUpdateWithoutChildMessagesInput
        >;
    };

    export type ChatMemberUpdateOneRequiredWithoutMessagesNestedInput = {
        create?: XOR<
            ChatMemberCreateWithoutMessagesInput,
            ChatMemberUncheckedCreateWithoutMessagesInput
        >;
        connectOrCreate?: ChatMemberCreateOrConnectWithoutMessagesInput;
        upsert?: ChatMemberUpsertWithoutMessagesInput;
        connect?: ChatMemberWhereUniqueInput;
        update?: XOR<
            XOR<
                ChatMemberUpdateToOneWithWhereWithoutMessagesInput,
                ChatMemberUpdateWithoutMessagesInput
            >,
            ChatMemberUncheckedUpdateWithoutMessagesInput
        >;
    };

    export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
        create?: XOR<
            ChatCreateWithoutMessagesInput,
            ChatUncheckedCreateWithoutMessagesInput
        >;
        connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput;
        upsert?: ChatUpsertWithoutMessagesInput;
        connect?: ChatWhereUniqueInput;
        update?: XOR<
            XOR<
                ChatUpdateToOneWithWhereWithoutMessagesInput,
                ChatUpdateWithoutMessagesInput
            >,
            ChatUncheckedUpdateWithoutMessagesInput
        >;
    };

    export type DocumentUpdateOneWithoutChatMessagesNestedInput = {
        create?: XOR<
            DocumentCreateWithoutChatMessagesInput,
            DocumentUncheckedCreateWithoutChatMessagesInput
        >;
        connectOrCreate?: DocumentCreateOrConnectWithoutChatMessagesInput;
        upsert?: DocumentUpsertWithoutChatMessagesInput;
        disconnect?: DocumentWhereInput | boolean;
        delete?: DocumentWhereInput | boolean;
        connect?: DocumentWhereUniqueInput;
        update?: XOR<
            XOR<
                DocumentUpdateToOneWithWhereWithoutChatMessagesInput,
                DocumentUpdateWithoutChatMessagesInput
            >,
            DocumentUncheckedUpdateWithoutChatMessagesInput
        >;
    };

    export type FileUpdateOneWithoutChatMessagesNestedInput = {
        create?: XOR<
            FileCreateWithoutChatMessagesInput,
            FileUncheckedCreateWithoutChatMessagesInput
        >;
        connectOrCreate?: FileCreateOrConnectWithoutChatMessagesInput;
        upsert?: FileUpsertWithoutChatMessagesInput;
        disconnect?: FileWhereInput | boolean;
        delete?: FileWhereInput | boolean;
        connect?: FileWhereUniqueInput;
        update?: XOR<
            XOR<
                FileUpdateToOneWithWhereWithoutChatMessagesInput,
                FileUpdateWithoutChatMessagesInput
            >,
            FileUncheckedUpdateWithoutChatMessagesInput
        >;
    };

    export type ChatMessageUpdateManyWithoutParentMessageNestedInput = {
        create?:
            | XOR<
                  ChatMessageCreateWithoutParentMessageInput,
                  ChatMessageUncheckedCreateWithoutParentMessageInput
              >
            | ChatMessageCreateWithoutParentMessageInput[]
            | ChatMessageUncheckedCreateWithoutParentMessageInput[];
        connectOrCreate?:
            | ChatMessageCreateOrConnectWithoutParentMessageInput
            | ChatMessageCreateOrConnectWithoutParentMessageInput[];
        upsert?:
            | ChatMessageUpsertWithWhereUniqueWithoutParentMessageInput
            | ChatMessageUpsertWithWhereUniqueWithoutParentMessageInput[];
        createMany?: ChatMessageCreateManyParentMessageInputEnvelope;
        set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        disconnect?:
            | ChatMessageWhereUniqueInput
            | ChatMessageWhereUniqueInput[];
        delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
        update?:
            | ChatMessageUpdateWithWhereUniqueWithoutParentMessageInput
            | ChatMessageUpdateWithWhereUniqueWithoutParentMessageInput[];
        updateMany?:
            | ChatMessageUpdateManyWithWhereWithoutParentMessageInput
            | ChatMessageUpdateManyWithWhereWithoutParentMessageInput[];
        deleteMany?:
            | ChatMessageScalarWhereInput
            | ChatMessageScalarWhereInput[];
    };

    export type ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput = {
        create?:
            | XOR<
                  ChatMessageReadStatusCreateWithoutChatMessageInput,
                  ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput
              >
            | ChatMessageReadStatusCreateWithoutChatMessageInput[]
            | ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput[];
        connectOrCreate?:
            | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput
            | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput[];
        upsert?:
            | ChatMessageReadStatusUpsertWithWhereUniqueWithoutChatMessageInput
            | ChatMessageReadStatusUpsertWithWhereUniqueWithoutChatMessageInput[];
        createMany?: ChatMessageReadStatusCreateManyChatMessageInputEnvelope;
        set?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        disconnect?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        delete?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        connect?:
            | ChatMessageReadStatusWhereUniqueInput
            | ChatMessageReadStatusWhereUniqueInput[];
        update?:
            | ChatMessageReadStatusUpdateWithWhereUniqueWithoutChatMessageInput
            | ChatMessageReadStatusUpdateWithWhereUniqueWithoutChatMessageInput[];
        updateMany?:
            | ChatMessageReadStatusUpdateManyWithWhereWithoutChatMessageInput
            | ChatMessageReadStatusUpdateManyWithWhereWithoutChatMessageInput[];
        deleteMany?:
            | ChatMessageReadStatusScalarWhereInput
            | ChatMessageReadStatusScalarWhereInput[];
    };

    export type ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput =
        {
            create?:
                | XOR<
                      ChatMessageCreateWithoutParentMessageInput,
                      ChatMessageUncheckedCreateWithoutParentMessageInput
                  >
                | ChatMessageCreateWithoutParentMessageInput[]
                | ChatMessageUncheckedCreateWithoutParentMessageInput[];
            connectOrCreate?:
                | ChatMessageCreateOrConnectWithoutParentMessageInput
                | ChatMessageCreateOrConnectWithoutParentMessageInput[];
            upsert?:
                | ChatMessageUpsertWithWhereUniqueWithoutParentMessageInput
                | ChatMessageUpsertWithWhereUniqueWithoutParentMessageInput[];
            createMany?: ChatMessageCreateManyParentMessageInputEnvelope;
            set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
            disconnect?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
            delete?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
            connect?:
                | ChatMessageWhereUniqueInput
                | ChatMessageWhereUniqueInput[];
            update?:
                | ChatMessageUpdateWithWhereUniqueWithoutParentMessageInput
                | ChatMessageUpdateWithWhereUniqueWithoutParentMessageInput[];
            updateMany?:
                | ChatMessageUpdateManyWithWhereWithoutParentMessageInput
                | ChatMessageUpdateManyWithWhereWithoutParentMessageInput[];
            deleteMany?:
                | ChatMessageScalarWhereInput
                | ChatMessageScalarWhereInput[];
        };

    export type ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput =
        {
            create?:
                | XOR<
                      ChatMessageReadStatusCreateWithoutChatMessageInput,
                      ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput
                  >
                | ChatMessageReadStatusCreateWithoutChatMessageInput[]
                | ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput[];
            connectOrCreate?:
                | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput
                | ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput[];
            upsert?:
                | ChatMessageReadStatusUpsertWithWhereUniqueWithoutChatMessageInput
                | ChatMessageReadStatusUpsertWithWhereUniqueWithoutChatMessageInput[];
            createMany?: ChatMessageReadStatusCreateManyChatMessageInputEnvelope;
            set?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            disconnect?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            delete?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            connect?:
                | ChatMessageReadStatusWhereUniqueInput
                | ChatMessageReadStatusWhereUniqueInput[];
            update?:
                | ChatMessageReadStatusUpdateWithWhereUniqueWithoutChatMessageInput
                | ChatMessageReadStatusUpdateWithWhereUniqueWithoutChatMessageInput[];
            updateMany?:
                | ChatMessageReadStatusUpdateManyWithWhereWithoutChatMessageInput
                | ChatMessageReadStatusUpdateManyWithWhereWithoutChatMessageInput[];
            deleteMany?:
                | ChatMessageReadStatusScalarWhereInput
                | ChatMessageReadStatusScalarWhereInput[];
        };

    export type ChatMessageCreateNestedOneWithoutChatMessageReadStatusesInput =
        {
            create?: XOR<
                ChatMessageCreateWithoutChatMessageReadStatusesInput,
                ChatMessageUncheckedCreateWithoutChatMessageReadStatusesInput
            >;
            connectOrCreate?: ChatMessageCreateOrConnectWithoutChatMessageReadStatusesInput;
            connect?: ChatMessageWhereUniqueInput;
        };

    export type ChatMemberCreateNestedOneWithoutChatMessageReadStatusesInput = {
        create?: XOR<
            ChatMemberCreateWithoutChatMessageReadStatusesInput,
            ChatMemberUncheckedCreateWithoutChatMessageReadStatusesInput
        >;
        connectOrCreate?: ChatMemberCreateOrConnectWithoutChatMessageReadStatusesInput;
        connect?: ChatMemberWhereUniqueInput;
    };

    export type ChatMessageUpdateOneRequiredWithoutChatMessageReadStatusesNestedInput =
        {
            create?: XOR<
                ChatMessageCreateWithoutChatMessageReadStatusesInput,
                ChatMessageUncheckedCreateWithoutChatMessageReadStatusesInput
            >;
            connectOrCreate?: ChatMessageCreateOrConnectWithoutChatMessageReadStatusesInput;
            upsert?: ChatMessageUpsertWithoutChatMessageReadStatusesInput;
            connect?: ChatMessageWhereUniqueInput;
            update?: XOR<
                XOR<
                    ChatMessageUpdateToOneWithWhereWithoutChatMessageReadStatusesInput,
                    ChatMessageUpdateWithoutChatMessageReadStatusesInput
                >,
                ChatMessageUncheckedUpdateWithoutChatMessageReadStatusesInput
            >;
        };

    export type ChatMemberUpdateOneRequiredWithoutChatMessageReadStatusesNestedInput =
        {
            create?: XOR<
                ChatMemberCreateWithoutChatMessageReadStatusesInput,
                ChatMemberUncheckedCreateWithoutChatMessageReadStatusesInput
            >;
            connectOrCreate?: ChatMemberCreateOrConnectWithoutChatMessageReadStatusesInput;
            upsert?: ChatMemberUpsertWithoutChatMessageReadStatusesInput;
            connect?: ChatMemberWhereUniqueInput;
            update?: XOR<
                XOR<
                    ChatMemberUpdateToOneWithWhereWithoutChatMessageReadStatusesInput,
                    ChatMemberUpdateWithoutChatMessageReadStatusesInput
                >,
                ChatMemberUncheckedUpdateWithoutChatMessageReadStatusesInput
            >;
        };

    export type NestedUuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidFilter<$PrismaModel> | string;
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

    export type NestedEnumRiskLevelsNullableFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.RiskLevels
            | EnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelsNullableFilter<$PrismaModel>
            | $Enums.RiskLevels
            | null;
    };

    export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
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

    export type NestedEnumRiskLevelsNullableWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.RiskLevels
            | EnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        in?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | $Enums.RiskLevels[]
            | ListEnumRiskLevelsFieldRefInput<$PrismaModel>
            | null;
        not?:
            | NestedEnumRiskLevelsNullableWithAggregatesFilter<$PrismaModel>
            | $Enums.RiskLevels
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedEnumRiskLevelsNullableFilter<$PrismaModel>;
        _max?: NestedEnumRiskLevelsNullableFilter<$PrismaModel>;
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

    export type NestedEnumExtractedFieldTypesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldTypes
            | EnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypesFilter<$PrismaModel>
            | $Enums.ExtractedFieldTypes;
    };

    export type NestedEnumExtractedFieldSourcesFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ExtractedFieldSources
            | EnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourcesFilter<$PrismaModel>
            | $Enums.ExtractedFieldSources;
    };

    export type NestedEnumExtractedFieldTypesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldTypes
            | EnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldTypes[]
            | ListEnumExtractedFieldTypesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldTypesWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldTypes;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldTypesFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldTypesFilter<$PrismaModel>;
    };

    export type NestedEnumExtractedFieldSourcesWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ExtractedFieldSources
            | EnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ExtractedFieldSources[]
            | ListEnumExtractedFieldSourcesFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumExtractedFieldSourcesWithAggregatesFilter<$PrismaModel>
            | $Enums.ExtractedFieldSources;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumExtractedFieldSourcesFilter<$PrismaModel>;
        _max?: NestedEnumExtractedFieldSourcesFilter<$PrismaModel>;
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

    export type NestedUuidNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
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

    export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?:
            | NestedUuidNullableWithAggregatesFilter<$PrismaModel>
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type NestedEnumChatMemberStatusFilter<$PrismaModel = never> = {
        equals?:
            | $Enums.ChatMemberStatus
            | EnumChatMemberStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ChatMemberStatus[]
            | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ChatMemberStatus[]
            | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumChatMemberStatusFilter<$PrismaModel>
            | $Enums.ChatMemberStatus;
    };

    export type NestedEnumChatMemberStatusWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?:
            | $Enums.ChatMemberStatus
            | EnumChatMemberStatusFieldRefInput<$PrismaModel>;
        in?:
            | $Enums.ChatMemberStatus[]
            | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.ChatMemberStatus[]
            | ListEnumChatMemberStatusFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumChatMemberStatusWithAggregatesFilter<$PrismaModel>
            | $Enums.ChatMemberStatus;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumChatMemberStatusFilter<$PrismaModel>;
        _max?: NestedEnumChatMemberStatusFilter<$PrismaModel>;
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

    export type DocumentExtractedFieldCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
    };

    export type DocumentExtractedFieldUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
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
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentVersionInput;
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
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentVersionInput;
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

    export type ChatCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        messages?: ChatMessageCreateNestedManyWithoutChatInput;
        members?: ChatMemberCreateNestedManyWithoutChatInput;
    };

    export type ChatUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput;
        members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput;
    };

    export type ChatCreateOrConnectWithoutDocumentInput = {
        where: ChatWhereUniqueInput;
        create: XOR<
            ChatCreateWithoutDocumentInput,
            ChatUncheckedCreateWithoutDocumentInput
        >;
    };

    export type ChatMessageCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentVersionId?: string | null;
        childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageCreateOrConnectWithoutDocumentInput = {
        where: ChatMessageWhereUniqueInput;
        create: XOR<
            ChatMessageCreateWithoutDocumentInput,
            ChatMessageUncheckedCreateWithoutDocumentInput
        >;
    };

    export type ChatMessageCreateManyDocumentInputEnvelope = {
        data:
            | ChatMessageCreateManyDocumentInput
            | ChatMessageCreateManyDocumentInput[];
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
        id?: UuidFilter<"DocumentExtractedField"> | string;
        createdAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentExtractedField"> | Date | string;
        type?:
            | EnumExtractedFieldTypesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldTypes;
        value?: StringFilter<"DocumentExtractedField"> | string;
        confidence?: FloatFilter<"DocumentExtractedField"> | number;
        source?:
            | EnumExtractedFieldSourcesFilter<"DocumentExtractedField">
            | $Enums.ExtractedFieldSources;
        documentId?: UuidFilter<"DocumentExtractedField"> | string;
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
        id?: UuidFilter<"ActionLog"> | string;
        createdAt?: DateTimeFilter<"ActionLog"> | Date | string;
        updatedAt?: DateTimeFilter<"ActionLog"> | Date | string;
        type?: EnumActionLogTypesFilter<"ActionLog"> | $Enums.ActionLogTypes;
        documentName?: StringNullableFilter<"ActionLog"> | string | null;
        documentId?: UuidNullableFilter<"ActionLog"> | string | null;
        actorId?: UuidFilter<"ActionLog"> | string;
        actorFullName?: StringFilter<"ActionLog"> | string;
        actorAvatarUrl?: StringNullableFilter<"ActionLog"> | string | null;
        userId?: UuidNullableFilter<"ActionLog"> | string | null;
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
        id?: UuidFilter<"File"> | string;
        createdAt?: DateTimeFilter<"File"> | Date | string;
        updatedAt?: DateTimeFilter<"File"> | Date | string;
        key?: StringFilter<"File"> | string;
        fileSize?: FloatFilter<"File"> | number;
        mimeType?: StringFilter<"File"> | string;
        url?: StringFilter<"File"> | string;
        urlExpiresAt?: DateTimeFilter<"File"> | Date | string;
        width?: FloatNullableFilter<"File"> | number | null;
        height?: FloatNullableFilter<"File"> | number | null;
        documentId?: UuidFilter<"File"> | string;
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
        id?: UuidFilter<"DocumentTag"> | string;
        createdAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        updatedAt?: DateTimeFilter<"DocumentTag"> | Date | string;
        documentId?: UuidFilter<"DocumentTag"> | string;
        tagId?: UuidFilter<"DocumentTag"> | string;
    };

    export type ChatUpsertWithoutDocumentInput = {
        update: XOR<
            ChatUpdateWithoutDocumentInput,
            ChatUncheckedUpdateWithoutDocumentInput
        >;
        create: XOR<
            ChatCreateWithoutDocumentInput,
            ChatUncheckedCreateWithoutDocumentInput
        >;
        where?: ChatWhereInput;
    };

    export type ChatUpdateToOneWithWhereWithoutDocumentInput = {
        where?: ChatWhereInput;
        data: XOR<
            ChatUpdateWithoutDocumentInput,
            ChatUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type ChatUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        messages?: ChatMessageUpdateManyWithoutChatNestedInput;
        members?: ChatMemberUpdateManyWithoutChatNestedInput;
    };

    export type ChatUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput;
        members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput;
    };

    export type ChatMessageUpsertWithWhereUniqueWithoutDocumentInput = {
        where: ChatMessageWhereUniqueInput;
        update: XOR<
            ChatMessageUpdateWithoutDocumentInput,
            ChatMessageUncheckedUpdateWithoutDocumentInput
        >;
        create: XOR<
            ChatMessageCreateWithoutDocumentInput,
            ChatMessageUncheckedCreateWithoutDocumentInput
        >;
    };

    export type ChatMessageUpdateWithWhereUniqueWithoutDocumentInput = {
        where: ChatMessageWhereUniqueInput;
        data: XOR<
            ChatMessageUpdateWithoutDocumentInput,
            ChatMessageUncheckedUpdateWithoutDocumentInput
        >;
    };

    export type ChatMessageUpdateManyWithWhereWithoutDocumentInput = {
        where: ChatMessageScalarWhereInput;
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyWithoutDocumentInput
        >;
    };

    export type ChatMessageScalarWhereInput = {
        AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
        OR?: ChatMessageScalarWhereInput[];
        NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
        id?: UuidFilter<"ChatMessage"> | string;
        createdAt?: DateTimeFilter<"ChatMessage"> | Date | string;
        updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string;
        message?: StringFilter<"ChatMessage"> | string;
        autoGenerated?: BoolFilter<"ChatMessage"> | boolean;
        parentMessageId?: UuidNullableFilter<"ChatMessage"> | string | null;
        authorId?: UuidFilter<"ChatMessage"> | string;
        chatId?: UuidFilter<"ChatMessage"> | string;
        documentId?: UuidNullableFilter<"ChatMessage"> | string | null;
        documentVersionId?: UuidNullableFilter<"ChatMessage"> | string | null;
    };

    export type DocumentCreateWithoutDocumentTagsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        chat?: ChatCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutDocumentTagsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        chat?: ChatUncheckedCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentInput;
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
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutDocumentTagsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUncheckedUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput;
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
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
        chat?: ChatCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutFilesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
        chat?: ChatUncheckedCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutFilesInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutFilesInput,
            DocumentUncheckedCreateWithoutFilesInput
        >;
    };

    export type ChatMessageCreateWithoutDocumentVersionInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutDocumentVersionInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentId?: string | null;
        childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageCreateOrConnectWithoutDocumentVersionInput = {
        where: ChatMessageWhereUniqueInput;
        create: XOR<
            ChatMessageCreateWithoutDocumentVersionInput,
            ChatMessageUncheckedCreateWithoutDocumentVersionInput
        >;
    };

    export type ChatMessageCreateManyDocumentVersionInputEnvelope = {
        data:
            | ChatMessageCreateManyDocumentVersionInput
            | ChatMessageCreateManyDocumentVersionInput[];
        skipDuplicates?: boolean;
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
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutFilesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUncheckedUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type ChatMessageUpsertWithWhereUniqueWithoutDocumentVersionInput = {
        where: ChatMessageWhereUniqueInput;
        update: XOR<
            ChatMessageUpdateWithoutDocumentVersionInput,
            ChatMessageUncheckedUpdateWithoutDocumentVersionInput
        >;
        create: XOR<
            ChatMessageCreateWithoutDocumentVersionInput,
            ChatMessageUncheckedCreateWithoutDocumentVersionInput
        >;
    };

    export type ChatMessageUpdateWithWhereUniqueWithoutDocumentVersionInput = {
        where: ChatMessageWhereUniqueInput;
        data: XOR<
            ChatMessageUpdateWithoutDocumentVersionInput,
            ChatMessageUncheckedUpdateWithoutDocumentVersionInput
        >;
    };

    export type ChatMessageUpdateManyWithWhereWithoutDocumentVersionInput = {
        where: ChatMessageScalarWhereInput;
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyWithoutDocumentVersionInput
        >;
    };

    export type DocumentCreateWithoutDocumentExtractedFieldsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
        chat?: ChatCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutDocumentExtractedFieldsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
        chat?: ChatUncheckedCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentInput;
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
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutDocumentExtractedFieldsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUncheckedUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateWithoutActionLogsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
        chat?: ChatCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutActionLogsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
        chat?: ChatUncheckedCreateNestedOneWithoutDocumentInput;
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentInput;
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
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutActionLogsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUncheckedUpdateOneWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentCreateWithoutChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
        chatMessages?: ChatMessageCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
        chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutChatInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutChatInput,
            DocumentUncheckedCreateWithoutChatInput
        >;
    };

    export type ChatMessageCreateWithoutChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
        childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageCreateOrConnectWithoutChatInput = {
        where: ChatMessageWhereUniqueInput;
        create: XOR<
            ChatMessageCreateWithoutChatInput,
            ChatMessageUncheckedCreateWithoutChatInput
        >;
    };

    export type ChatMessageCreateManyChatInputEnvelope = {
        data: ChatMessageCreateManyChatInput | ChatMessageCreateManyChatInput[];
        skipDuplicates?: boolean;
    };

    export type ChatMemberCreateWithoutChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        messages?: ChatMessageCreateNestedManyWithoutAuthorInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutReadByInput;
    };

    export type ChatMemberUncheckedCreateWithoutChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutReadByInput;
    };

    export type ChatMemberCreateOrConnectWithoutChatInput = {
        where: ChatMemberWhereUniqueInput;
        create: XOR<
            ChatMemberCreateWithoutChatInput,
            ChatMemberUncheckedCreateWithoutChatInput
        >;
    };

    export type ChatMemberCreateManyChatInputEnvelope = {
        data: ChatMemberCreateManyChatInput | ChatMemberCreateManyChatInput[];
        skipDuplicates?: boolean;
    };

    export type DocumentUpsertWithoutChatInput = {
        update: XOR<
            DocumentUpdateWithoutChatInput,
            DocumentUncheckedUpdateWithoutChatInput
        >;
        create: XOR<
            DocumentCreateWithoutChatInput,
            DocumentUncheckedCreateWithoutChatInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutChatInput = {
        where?: DocumentWhereInput;
        data: XOR<
            DocumentUpdateWithoutChatInput,
            DocumentUncheckedUpdateWithoutChatInput
        >;
    };

    export type DocumentUpdateWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUpdateManyWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentNestedInput;
    };

    export type ChatMessageUpsertWithWhereUniqueWithoutChatInput = {
        where: ChatMessageWhereUniqueInput;
        update: XOR<
            ChatMessageUpdateWithoutChatInput,
            ChatMessageUncheckedUpdateWithoutChatInput
        >;
        create: XOR<
            ChatMessageCreateWithoutChatInput,
            ChatMessageUncheckedCreateWithoutChatInput
        >;
    };

    export type ChatMessageUpdateWithWhereUniqueWithoutChatInput = {
        where: ChatMessageWhereUniqueInput;
        data: XOR<
            ChatMessageUpdateWithoutChatInput,
            ChatMessageUncheckedUpdateWithoutChatInput
        >;
    };

    export type ChatMessageUpdateManyWithWhereWithoutChatInput = {
        where: ChatMessageScalarWhereInput;
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyWithoutChatInput
        >;
    };

    export type ChatMemberUpsertWithWhereUniqueWithoutChatInput = {
        where: ChatMemberWhereUniqueInput;
        update: XOR<
            ChatMemberUpdateWithoutChatInput,
            ChatMemberUncheckedUpdateWithoutChatInput
        >;
        create: XOR<
            ChatMemberCreateWithoutChatInput,
            ChatMemberUncheckedCreateWithoutChatInput
        >;
    };

    export type ChatMemberUpdateWithWhereUniqueWithoutChatInput = {
        where: ChatMemberWhereUniqueInput;
        data: XOR<
            ChatMemberUpdateWithoutChatInput,
            ChatMemberUncheckedUpdateWithoutChatInput
        >;
    };

    export type ChatMemberUpdateManyWithWhereWithoutChatInput = {
        where: ChatMemberScalarWhereInput;
        data: XOR<
            ChatMemberUpdateManyMutationInput,
            ChatMemberUncheckedUpdateManyWithoutChatInput
        >;
    };

    export type ChatMemberScalarWhereInput = {
        AND?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[];
        OR?: ChatMemberScalarWhereInput[];
        NOT?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[];
        id?: UuidFilter<"ChatMember"> | string;
        createdAt?: DateTimeFilter<"ChatMember"> | Date | string;
        updatedAt?: DateTimeFilter<"ChatMember"> | Date | string;
        status?:
            | EnumChatMemberStatusFilter<"ChatMember">
            | $Enums.ChatMemberStatus;
        userId?: UuidFilter<"ChatMember"> | string;
        userFullName?: StringFilter<"ChatMember"> | string;
        userAvatarUrl?: StringNullableFilter<"ChatMember"> | string | null;
        chatId?: UuidFilter<"ChatMember"> | string;
    };

    export type ChatCreateWithoutMembersInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        document?: DocumentCreateNestedOneWithoutChatInput;
        messages?: ChatMessageCreateNestedManyWithoutChatInput;
    };

    export type ChatUncheckedCreateWithoutMembersInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        documentId?: string | null;
        messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput;
    };

    export type ChatCreateOrConnectWithoutMembersInput = {
        where: ChatWhereUniqueInput;
        create: XOR<
            ChatCreateWithoutMembersInput,
            ChatUncheckedCreateWithoutMembersInput
        >;
    };

    export type ChatMessageCreateWithoutAuthorInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutAuthorInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
        childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageCreateOrConnectWithoutAuthorInput = {
        where: ChatMessageWhereUniqueInput;
        create: XOR<
            ChatMessageCreateWithoutAuthorInput,
            ChatMessageUncheckedCreateWithoutAuthorInput
        >;
    };

    export type ChatMessageCreateManyAuthorInputEnvelope = {
        data:
            | ChatMessageCreateManyAuthorInput
            | ChatMessageCreateManyAuthorInput[];
        skipDuplicates?: boolean;
    };

    export type ChatMessageReadStatusCreateWithoutReadByInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        chatMessage: ChatMessageCreateNestedOneWithoutChatMessageReadStatusesInput;
    };

    export type ChatMessageReadStatusUncheckedCreateWithoutReadByInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        chatMessageId: string;
    };

    export type ChatMessageReadStatusCreateOrConnectWithoutReadByInput = {
        where: ChatMessageReadStatusWhereUniqueInput;
        create: XOR<
            ChatMessageReadStatusCreateWithoutReadByInput,
            ChatMessageReadStatusUncheckedCreateWithoutReadByInput
        >;
    };

    export type ChatMessageReadStatusCreateManyReadByInputEnvelope = {
        data:
            | ChatMessageReadStatusCreateManyReadByInput
            | ChatMessageReadStatusCreateManyReadByInput[];
        skipDuplicates?: boolean;
    };

    export type ChatUpsertWithoutMembersInput = {
        update: XOR<
            ChatUpdateWithoutMembersInput,
            ChatUncheckedUpdateWithoutMembersInput
        >;
        create: XOR<
            ChatCreateWithoutMembersInput,
            ChatUncheckedCreateWithoutMembersInput
        >;
        where?: ChatWhereInput;
    };

    export type ChatUpdateToOneWithWhereWithoutMembersInput = {
        where?: ChatWhereInput;
        data: XOR<
            ChatUpdateWithoutMembersInput,
            ChatUncheckedUpdateWithoutMembersInput
        >;
    };

    export type ChatUpdateWithoutMembersInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        document?: DocumentUpdateOneWithoutChatNestedInput;
        messages?: ChatMessageUpdateManyWithoutChatNestedInput;
    };

    export type ChatUncheckedUpdateWithoutMembersInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput;
    };

    export type ChatMessageUpsertWithWhereUniqueWithoutAuthorInput = {
        where: ChatMessageWhereUniqueInput;
        update: XOR<
            ChatMessageUpdateWithoutAuthorInput,
            ChatMessageUncheckedUpdateWithoutAuthorInput
        >;
        create: XOR<
            ChatMessageCreateWithoutAuthorInput,
            ChatMessageUncheckedCreateWithoutAuthorInput
        >;
    };

    export type ChatMessageUpdateWithWhereUniqueWithoutAuthorInput = {
        where: ChatMessageWhereUniqueInput;
        data: XOR<
            ChatMessageUpdateWithoutAuthorInput,
            ChatMessageUncheckedUpdateWithoutAuthorInput
        >;
    };

    export type ChatMessageUpdateManyWithWhereWithoutAuthorInput = {
        where: ChatMessageScalarWhereInput;
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyWithoutAuthorInput
        >;
    };

    export type ChatMessageReadStatusUpsertWithWhereUniqueWithoutReadByInput = {
        where: ChatMessageReadStatusWhereUniqueInput;
        update: XOR<
            ChatMessageReadStatusUpdateWithoutReadByInput,
            ChatMessageReadStatusUncheckedUpdateWithoutReadByInput
        >;
        create: XOR<
            ChatMessageReadStatusCreateWithoutReadByInput,
            ChatMessageReadStatusUncheckedCreateWithoutReadByInput
        >;
    };

    export type ChatMessageReadStatusUpdateWithWhereUniqueWithoutReadByInput = {
        where: ChatMessageReadStatusWhereUniqueInput;
        data: XOR<
            ChatMessageReadStatusUpdateWithoutReadByInput,
            ChatMessageReadStatusUncheckedUpdateWithoutReadByInput
        >;
    };

    export type ChatMessageReadStatusUpdateManyWithWhereWithoutReadByInput = {
        where: ChatMessageReadStatusScalarWhereInput;
        data: XOR<
            ChatMessageReadStatusUpdateManyMutationInput,
            ChatMessageReadStatusUncheckedUpdateManyWithoutReadByInput
        >;
    };

    export type ChatMessageReadStatusScalarWhereInput = {
        AND?:
            | ChatMessageReadStatusScalarWhereInput
            | ChatMessageReadStatusScalarWhereInput[];
        OR?: ChatMessageReadStatusScalarWhereInput[];
        NOT?:
            | ChatMessageReadStatusScalarWhereInput
            | ChatMessageReadStatusScalarWhereInput[];
        id?: UuidFilter<"ChatMessageReadStatus"> | string;
        createdAt?: DateTimeFilter<"ChatMessageReadStatus"> | Date | string;
        updatedAt?: DateTimeFilter<"ChatMessageReadStatus"> | Date | string;
        chatMessageId?: UuidFilter<"ChatMessageReadStatus"> | string;
        readById?: UuidFilter<"ChatMessageReadStatus"> | string;
    };

    export type ChatMessageCreateWithoutChildMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutChildMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageCreateOrConnectWithoutChildMessagesInput = {
        where: ChatMessageWhereUniqueInput;
        create: XOR<
            ChatMessageCreateWithoutChildMessagesInput,
            ChatMessageUncheckedCreateWithoutChildMessagesInput
        >;
    };

    export type ChatMemberCreateWithoutMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chat: ChatCreateNestedOneWithoutMembersInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutReadByInput;
    };

    export type ChatMemberUncheckedCreateWithoutMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chatId: string;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutReadByInput;
    };

    export type ChatMemberCreateOrConnectWithoutMessagesInput = {
        where: ChatMemberWhereUniqueInput;
        create: XOR<
            ChatMemberCreateWithoutMessagesInput,
            ChatMemberUncheckedCreateWithoutMessagesInput
        >;
    };

    export type ChatCreateWithoutMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        document?: DocumentCreateNestedOneWithoutChatInput;
        members?: ChatMemberCreateNestedManyWithoutChatInput;
    };

    export type ChatUncheckedCreateWithoutMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        name: string;
        documentId?: string | null;
        members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput;
    };

    export type ChatCreateOrConnectWithoutMessagesInput = {
        where: ChatWhereUniqueInput;
        create: XOR<
            ChatCreateWithoutMessagesInput,
            ChatUncheckedCreateWithoutMessagesInput
        >;
    };

    export type DocumentCreateWithoutChatMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogCreateNestedManyWithoutDocumentInput;
        files?: FileCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagCreateNestedManyWithoutDocumentInput;
        chat?: ChatCreateNestedOneWithoutDocumentInput;
    };

    export type DocumentUncheckedCreateWithoutChatMessagesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.DocumentStatuses;
        name: string;
        expiresAt?: Date | string | null;
        riskLevel?: $Enums.RiskLevels | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedCreateNestedManyWithoutDocumentInput;
        actionLogs?: ActionLogUncheckedCreateNestedManyWithoutDocumentInput;
        files?: FileUncheckedCreateNestedManyWithoutDocumentInput;
        documentTags?: DocumentTagUncheckedCreateNestedManyWithoutDocumentInput;
        chat?: ChatUncheckedCreateNestedOneWithoutDocumentInput;
    };

    export type DocumentCreateOrConnectWithoutChatMessagesInput = {
        where: DocumentWhereUniqueInput;
        create: XOR<
            DocumentCreateWithoutChatMessagesInput,
            DocumentUncheckedCreateWithoutChatMessagesInput
        >;
    };

    export type FileCreateWithoutChatMessagesInput = {
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

    export type FileUncheckedCreateWithoutChatMessagesInput = {
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

    export type FileCreateOrConnectWithoutChatMessagesInput = {
        where: FileWhereUniqueInput;
        create: XOR<
            FileCreateWithoutChatMessagesInput,
            FileUncheckedCreateWithoutChatMessagesInput
        >;
    };

    export type ChatMessageCreateWithoutParentMessageInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutParentMessageInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        authorId: string;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
        childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedCreateNestedManyWithoutChatMessageInput;
    };

    export type ChatMessageCreateOrConnectWithoutParentMessageInput = {
        where: ChatMessageWhereUniqueInput;
        create: XOR<
            ChatMessageCreateWithoutParentMessageInput,
            ChatMessageUncheckedCreateWithoutParentMessageInput
        >;
    };

    export type ChatMessageCreateManyParentMessageInputEnvelope = {
        data:
            | ChatMessageCreateManyParentMessageInput
            | ChatMessageCreateManyParentMessageInput[];
        skipDuplicates?: boolean;
    };

    export type ChatMessageReadStatusCreateWithoutChatMessageInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        readBy: ChatMemberCreateNestedOneWithoutChatMessageReadStatusesInput;
    };

    export type ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        readById: string;
    };

    export type ChatMessageReadStatusCreateOrConnectWithoutChatMessageInput = {
        where: ChatMessageReadStatusWhereUniqueInput;
        create: XOR<
            ChatMessageReadStatusCreateWithoutChatMessageInput,
            ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput
        >;
    };

    export type ChatMessageReadStatusCreateManyChatMessageInputEnvelope = {
        data:
            | ChatMessageReadStatusCreateManyChatMessageInput
            | ChatMessageReadStatusCreateManyChatMessageInput[];
        skipDuplicates?: boolean;
    };

    export type ChatMessageUpsertWithoutChildMessagesInput = {
        update: XOR<
            ChatMessageUpdateWithoutChildMessagesInput,
            ChatMessageUncheckedUpdateWithoutChildMessagesInput
        >;
        create: XOR<
            ChatMessageCreateWithoutChildMessagesInput,
            ChatMessageUncheckedCreateWithoutChildMessagesInput
        >;
        where?: ChatMessageWhereInput;
    };

    export type ChatMessageUpdateToOneWithWhereWithoutChildMessagesInput = {
        where?: ChatMessageWhereInput;
        data: XOR<
            ChatMessageUpdateWithoutChildMessagesInput,
            ChatMessageUncheckedUpdateWithoutChildMessagesInput
        >;
    };

    export type ChatMessageUpdateWithoutChildMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutChildMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMemberUpsertWithoutMessagesInput = {
        update: XOR<
            ChatMemberUpdateWithoutMessagesInput,
            ChatMemberUncheckedUpdateWithoutMessagesInput
        >;
        create: XOR<
            ChatMemberCreateWithoutMessagesInput,
            ChatMemberUncheckedCreateWithoutMessagesInput
        >;
        where?: ChatMemberWhereInput;
    };

    export type ChatMemberUpdateToOneWithWhereWithoutMessagesInput = {
        where?: ChatMemberWhereInput;
        data: XOR<
            ChatMemberUpdateWithoutMessagesInput,
            ChatMemberUncheckedUpdateWithoutMessagesInput
        >;
    };

    export type ChatMemberUpdateWithoutMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chat?: ChatUpdateOneRequiredWithoutMembersNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutReadByNestedInput;
    };

    export type ChatMemberUncheckedUpdateWithoutMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatId?: StringFieldUpdateOperationsInput | string;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutReadByNestedInput;
    };

    export type ChatUpsertWithoutMessagesInput = {
        update: XOR<
            ChatUpdateWithoutMessagesInput,
            ChatUncheckedUpdateWithoutMessagesInput
        >;
        create: XOR<
            ChatCreateWithoutMessagesInput,
            ChatUncheckedCreateWithoutMessagesInput
        >;
        where?: ChatWhereInput;
    };

    export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
        where?: ChatWhereInput;
        data: XOR<
            ChatUpdateWithoutMessagesInput,
            ChatUncheckedUpdateWithoutMessagesInput
        >;
    };

    export type ChatUpdateWithoutMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        document?: DocumentUpdateOneWithoutChatNestedInput;
        members?: ChatMemberUpdateManyWithoutChatNestedInput;
    };

    export type ChatUncheckedUpdateWithoutMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        name?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput;
    };

    export type DocumentUpsertWithoutChatMessagesInput = {
        update: XOR<
            DocumentUpdateWithoutChatMessagesInput,
            DocumentUncheckedUpdateWithoutChatMessagesInput
        >;
        create: XOR<
            DocumentCreateWithoutChatMessagesInput,
            DocumentUncheckedCreateWithoutChatMessagesInput
        >;
        where?: DocumentWhereInput;
    };

    export type DocumentUpdateToOneWithWhereWithoutChatMessagesInput = {
        where?: DocumentWhereInput;
        data: XOR<
            DocumentUpdateWithoutChatMessagesInput,
            DocumentUncheckedUpdateWithoutChatMessagesInput
        >;
    };

    export type DocumentUpdateWithoutChatMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUpdateManyWithoutDocumentNestedInput;
        files?: FileUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUpdateOneWithoutDocumentNestedInput;
    };

    export type DocumentUncheckedUpdateWithoutChatMessagesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumDocumentStatusesFieldUpdateOperationsInput
            | $Enums.DocumentStatuses;
        name?: StringFieldUpdateOperationsInput | string;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        riskLevel?:
            | NullableEnumRiskLevelsFieldUpdateOperationsInput
            | $Enums.RiskLevels
            | null;
        documentExtractedFields?: DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentNestedInput;
        actionLogs?: ActionLogUncheckedUpdateManyWithoutDocumentNestedInput;
        files?: FileUncheckedUpdateManyWithoutDocumentNestedInput;
        documentTags?: DocumentTagUncheckedUpdateManyWithoutDocumentNestedInput;
        chat?: ChatUncheckedUpdateOneWithoutDocumentNestedInput;
    };

    export type FileUpsertWithoutChatMessagesInput = {
        update: XOR<
            FileUpdateWithoutChatMessagesInput,
            FileUncheckedUpdateWithoutChatMessagesInput
        >;
        create: XOR<
            FileCreateWithoutChatMessagesInput,
            FileUncheckedCreateWithoutChatMessagesInput
        >;
        where?: FileWhereInput;
    };

    export type FileUpdateToOneWithWhereWithoutChatMessagesInput = {
        where?: FileWhereInput;
        data: XOR<
            FileUpdateWithoutChatMessagesInput,
            FileUncheckedUpdateWithoutChatMessagesInput
        >;
    };

    export type FileUpdateWithoutChatMessagesInput = {
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

    export type FileUncheckedUpdateWithoutChatMessagesInput = {
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

    export type ChatMessageUpsertWithWhereUniqueWithoutParentMessageInput = {
        where: ChatMessageWhereUniqueInput;
        update: XOR<
            ChatMessageUpdateWithoutParentMessageInput,
            ChatMessageUncheckedUpdateWithoutParentMessageInput
        >;
        create: XOR<
            ChatMessageCreateWithoutParentMessageInput,
            ChatMessageUncheckedCreateWithoutParentMessageInput
        >;
    };

    export type ChatMessageUpdateWithWhereUniqueWithoutParentMessageInput = {
        where: ChatMessageWhereUniqueInput;
        data: XOR<
            ChatMessageUpdateWithoutParentMessageInput,
            ChatMessageUncheckedUpdateWithoutParentMessageInput
        >;
    };

    export type ChatMessageUpdateManyWithWhereWithoutParentMessageInput = {
        where: ChatMessageScalarWhereInput;
        data: XOR<
            ChatMessageUpdateManyMutationInput,
            ChatMessageUncheckedUpdateManyWithoutParentMessageInput
        >;
    };

    export type ChatMessageReadStatusUpsertWithWhereUniqueWithoutChatMessageInput =
        {
            where: ChatMessageReadStatusWhereUniqueInput;
            update: XOR<
                ChatMessageReadStatusUpdateWithoutChatMessageInput,
                ChatMessageReadStatusUncheckedUpdateWithoutChatMessageInput
            >;
            create: XOR<
                ChatMessageReadStatusCreateWithoutChatMessageInput,
                ChatMessageReadStatusUncheckedCreateWithoutChatMessageInput
            >;
        };

    export type ChatMessageReadStatusUpdateWithWhereUniqueWithoutChatMessageInput =
        {
            where: ChatMessageReadStatusWhereUniqueInput;
            data: XOR<
                ChatMessageReadStatusUpdateWithoutChatMessageInput,
                ChatMessageReadStatusUncheckedUpdateWithoutChatMessageInput
            >;
        };

    export type ChatMessageReadStatusUpdateManyWithWhereWithoutChatMessageInput =
        {
            where: ChatMessageReadStatusScalarWhereInput;
            data: XOR<
                ChatMessageReadStatusUpdateManyMutationInput,
                ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageInput
            >;
        };

    export type ChatMessageCreateWithoutChatMessageReadStatusesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessage?: ChatMessageCreateNestedOneWithoutChildMessagesInput;
        author: ChatMemberCreateNestedOneWithoutMessagesInput;
        chat: ChatCreateNestedOneWithoutMessagesInput;
        document?: DocumentCreateNestedOneWithoutChatMessagesInput;
        documentVersion?: FileCreateNestedOneWithoutChatMessagesInput;
        childMessages?: ChatMessageCreateNestedManyWithoutParentMessageInput;
    };

    export type ChatMessageUncheckedCreateWithoutChatMessageReadStatusesInput =
        {
            id?: string;
            createdAt?: Date | string;
            updatedAt?: Date | string;
            message: string;
            autoGenerated: boolean;
            parentMessageId?: string | null;
            authorId: string;
            chatId: string;
            documentId?: string | null;
            documentVersionId?: string | null;
            childMessages?: ChatMessageUncheckedCreateNestedManyWithoutParentMessageInput;
        };

    export type ChatMessageCreateOrConnectWithoutChatMessageReadStatusesInput =
        {
            where: ChatMessageWhereUniqueInput;
            create: XOR<
                ChatMessageCreateWithoutChatMessageReadStatusesInput,
                ChatMessageUncheckedCreateWithoutChatMessageReadStatusesInput
            >;
        };

    export type ChatMemberCreateWithoutChatMessageReadStatusesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chat: ChatCreateNestedOneWithoutMembersInput;
        messages?: ChatMessageCreateNestedManyWithoutAuthorInput;
    };

    export type ChatMemberUncheckedCreateWithoutChatMessageReadStatusesInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
        chatId: string;
        messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput;
    };

    export type ChatMemberCreateOrConnectWithoutChatMessageReadStatusesInput = {
        where: ChatMemberWhereUniqueInput;
        create: XOR<
            ChatMemberCreateWithoutChatMessageReadStatusesInput,
            ChatMemberUncheckedCreateWithoutChatMessageReadStatusesInput
        >;
    };

    export type ChatMessageUpsertWithoutChatMessageReadStatusesInput = {
        update: XOR<
            ChatMessageUpdateWithoutChatMessageReadStatusesInput,
            ChatMessageUncheckedUpdateWithoutChatMessageReadStatusesInput
        >;
        create: XOR<
            ChatMessageCreateWithoutChatMessageReadStatusesInput,
            ChatMessageUncheckedCreateWithoutChatMessageReadStatusesInput
        >;
        where?: ChatMessageWhereInput;
    };

    export type ChatMessageUpdateToOneWithWhereWithoutChatMessageReadStatusesInput =
        {
            where?: ChatMessageWhereInput;
            data: XOR<
                ChatMessageUpdateWithoutChatMessageReadStatusesInput,
                ChatMessageUncheckedUpdateWithoutChatMessageReadStatusesInput
            >;
        };

    export type ChatMessageUpdateWithoutChatMessageReadStatusesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutChatMessageReadStatusesInput =
        {
            id?: StringFieldUpdateOperationsInput | string;
            createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            message?: StringFieldUpdateOperationsInput | string;
            autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
            parentMessageId?:
                | NullableStringFieldUpdateOperationsInput
                | string
                | null;
            authorId?: StringFieldUpdateOperationsInput | string;
            chatId?: StringFieldUpdateOperationsInput | string;
            documentId?:
                | NullableStringFieldUpdateOperationsInput
                | string
                | null;
            documentVersionId?:
                | NullableStringFieldUpdateOperationsInput
                | string
                | null;
            childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        };

    export type ChatMemberUpsertWithoutChatMessageReadStatusesInput = {
        update: XOR<
            ChatMemberUpdateWithoutChatMessageReadStatusesInput,
            ChatMemberUncheckedUpdateWithoutChatMessageReadStatusesInput
        >;
        create: XOR<
            ChatMemberCreateWithoutChatMessageReadStatusesInput,
            ChatMemberUncheckedCreateWithoutChatMessageReadStatusesInput
        >;
        where?: ChatMemberWhereInput;
    };

    export type ChatMemberUpdateToOneWithWhereWithoutChatMessageReadStatusesInput =
        {
            where?: ChatMemberWhereInput;
            data: XOR<
                ChatMemberUpdateWithoutChatMessageReadStatusesInput,
                ChatMemberUncheckedUpdateWithoutChatMessageReadStatusesInput
            >;
        };

    export type ChatMemberUpdateWithoutChatMessageReadStatusesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chat?: ChatUpdateOneRequiredWithoutMembersNestedInput;
        messages?: ChatMessageUpdateManyWithoutAuthorNestedInput;
    };

    export type ChatMemberUncheckedUpdateWithoutChatMessageReadStatusesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatId?: StringFieldUpdateOperationsInput | string;
        messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput;
    };

    export type DocumentExtractedFieldCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        type: $Enums.ExtractedFieldTypes;
        value: string;
        confidence: number;
        source: $Enums.ExtractedFieldSources;
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

    export type ChatMessageCreateManyDocumentInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentVersionId?: string | null;
    };

    export type DocumentExtractedFieldUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldTypes;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourcesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSources;
    };

    export type DocumentExtractedFieldUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        type?:
            | EnumExtractedFieldTypesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldTypes;
        value?: StringFieldUpdateOperationsInput | string;
        confidence?: FloatFieldUpdateOperationsInput | number;
        source?:
            | EnumExtractedFieldSourcesFieldUpdateOperationsInput
            | $Enums.ExtractedFieldSources;
    };

    export type DocumentExtractedFieldUncheckedUpdateManyWithoutDocumentInput =
        {
            id?: StringFieldUpdateOperationsInput | string;
            createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            type?:
                | EnumExtractedFieldTypesFieldUpdateOperationsInput
                | $Enums.ExtractedFieldTypes;
            value?: StringFieldUpdateOperationsInput | string;
            confidence?: FloatFieldUpdateOperationsInput | number;
            source?:
                | EnumExtractedFieldSourcesFieldUpdateOperationsInput
                | $Enums.ExtractedFieldSources;
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
        chatMessages?: ChatMessageUpdateManyWithoutDocumentVersionNestedInput;
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
        chatMessages?: ChatMessageUncheckedUpdateManyWithoutDocumentVersionNestedInput;
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

    export type ChatMessageUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateManyWithoutDocumentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
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

    export type ChatMessageCreateManyDocumentVersionInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        chatId: string;
        documentId?: string | null;
    };

    export type ChatMessageUpdateWithoutDocumentVersionInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutDocumentVersionInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateManyWithoutDocumentVersionInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
    };

    export type ChatMessageCreateManyChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        authorId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
    };

    export type ChatMemberCreateManyChatInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        status: $Enums.ChatMemberStatus;
        userId: string;
        userFullName: string;
        userAvatarUrl?: string | null;
    };

    export type ChatMessageUpdateWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateManyWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        authorId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ChatMemberUpdateWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        messages?: ChatMessageUpdateManyWithoutAuthorNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutReadByNestedInput;
    };

    export type ChatMemberUncheckedUpdateWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutReadByNestedInput;
    };

    export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        status?:
            | EnumChatMemberStatusFieldUpdateOperationsInput
            | $Enums.ChatMemberStatus;
        userId?: StringFieldUpdateOperationsInput | string;
        userFullName?: StringFieldUpdateOperationsInput | string;
        userAvatarUrl?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ChatMessageCreateManyAuthorInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        parentMessageId?: string | null;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
    };

    export type ChatMessageReadStatusCreateManyReadByInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        chatMessageId: string;
    };

    export type ChatMessageUpdateWithoutAuthorInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessage?: ChatMessageUpdateOneWithoutChildMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutAuthorInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateManyWithoutAuthorInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        parentMessageId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ChatMessageReadStatusUpdateWithoutReadByInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        chatMessage?: ChatMessageUpdateOneRequiredWithoutChatMessageReadStatusesNestedInput;
    };

    export type ChatMessageReadStatusUncheckedUpdateWithoutReadByInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        chatMessageId?: StringFieldUpdateOperationsInput | string;
    };

    export type ChatMessageReadStatusUncheckedUpdateManyWithoutReadByInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        chatMessageId?: StringFieldUpdateOperationsInput | string;
    };

    export type ChatMessageCreateManyParentMessageInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        message: string;
        autoGenerated: boolean;
        authorId: string;
        chatId: string;
        documentId?: string | null;
        documentVersionId?: string | null;
    };

    export type ChatMessageReadStatusCreateManyChatMessageInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        readById: string;
    };

    export type ChatMessageUpdateWithoutParentMessageInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        author?: ChatMemberUpdateOneRequiredWithoutMessagesNestedInput;
        chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
        document?: DocumentUpdateOneWithoutChatMessagesNestedInput;
        documentVersion?: FileUpdateOneWithoutChatMessagesNestedInput;
        childMessages?: ChatMessageUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateWithoutParentMessageInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
        childMessages?: ChatMessageUncheckedUpdateManyWithoutParentMessageNestedInput;
        chatMessageReadStatuses?: ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageNestedInput;
    };

    export type ChatMessageUncheckedUpdateManyWithoutParentMessageInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        message?: StringFieldUpdateOperationsInput | string;
        autoGenerated?: BoolFieldUpdateOperationsInput | boolean;
        authorId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        documentId?: NullableStringFieldUpdateOperationsInput | string | null;
        documentVersionId?:
            | NullableStringFieldUpdateOperationsInput
            | string
            | null;
    };

    export type ChatMessageReadStatusUpdateWithoutChatMessageInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readBy?: ChatMemberUpdateOneRequiredWithoutChatMessageReadStatusesNestedInput;
    };

    export type ChatMessageReadStatusUncheckedUpdateWithoutChatMessageInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readById?: StringFieldUpdateOperationsInput | string;
    };

    export type ChatMessageReadStatusUncheckedUpdateManyWithoutChatMessageInput =
        {
            id?: StringFieldUpdateOperationsInput | string;
            createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
            readById?: StringFieldUpdateOperationsInput | string;
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
