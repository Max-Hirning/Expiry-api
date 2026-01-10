
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CompanyLink
 * 
 */
export type CompanyLink = $Result.DefaultSelection<Prisma.$CompanyLinkPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LocationComment
 * 
 */
export type LocationComment = $Result.DefaultSelection<Prisma.$LocationCommentPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model OfferComment
 * 
 */
export type OfferComment = $Result.DefaultSelection<Prisma.$OfferCommentPayload>
/**
 * Model OfferPublishSchedule
 * 
 */
export type OfferPublishSchedule = $Result.DefaultSelection<Prisma.$OfferPublishSchedulePayload>
/**
 * Model OfferImage
 * 
 */
export type OfferImage = $Result.DefaultSelection<Prisma.$OfferImagePayload>
/**
 * Model OfferDiscount
 * 
 */
export type OfferDiscount = $Result.DefaultSelection<Prisma.$OfferDiscountPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatMember
 * 
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ActionLog
 * 
 */
export type ActionLog = $Result.DefaultSelection<Prisma.$ActionLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LocationStatuses: {
  ACTIVE: 'ACTIVE',
  DEACTIVATED: 'DEACTIVATED'
};

export type LocationStatuses = (typeof LocationStatuses)[keyof typeof LocationStatuses]


export const OfferStatuses: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  DEACTIVATED: 'DEACTIVATED'
};

export type OfferStatuses = (typeof OfferStatuses)[keyof typeof OfferStatuses]


export const OfferDiscountTypes: {
  PERCENTAGE: 'PERCENTAGE',
  AMOUNT: 'AMOUNT'
};

export type OfferDiscountTypes = (typeof OfferDiscountTypes)[keyof typeof OfferDiscountTypes]


export const OfferDiscountStatuses: {
  ACTIVE: 'ACTIVE',
  DEACTIVATED: 'DEACTIVATED'
};

export type OfferDiscountStatuses = (typeof OfferDiscountStatuses)[keyof typeof OfferDiscountStatuses]


export const TransactionStatuses: {
  PAID: 'PAID',
  PENDING: 'PENDING'
};

export type TransactionStatuses = (typeof TransactionStatuses)[keyof typeof TransactionStatuses]

}

export type LocationStatuses = $Enums.LocationStatuses

export const LocationStatuses: typeof $Enums.LocationStatuses

export type OfferStatuses = $Enums.OfferStatuses

export const OfferStatuses: typeof $Enums.OfferStatuses

export type OfferDiscountTypes = $Enums.OfferDiscountTypes

export const OfferDiscountTypes: typeof $Enums.OfferDiscountTypes

export type OfferDiscountStatuses = $Enums.OfferDiscountStatuses

export const OfferDiscountStatuses: typeof $Enums.OfferDiscountStatuses

export type TransactionStatuses = $Enums.TransactionStatuses

export const TransactionStatuses: typeof $Enums.TransactionStatuses

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CompanyLinks
 * const companyLinks = await prisma.companyLink.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CompanyLinks
   * const companyLinks = await prisma.companyLink.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.companyLink`: Exposes CRUD operations for the **CompanyLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyLinks
    * const companyLinks = await prisma.companyLink.findMany()
    * ```
    */
  get companyLink(): Prisma.CompanyLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationComment`: Exposes CRUD operations for the **LocationComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationComments
    * const locationComments = await prisma.locationComment.findMany()
    * ```
    */
  get locationComment(): Prisma.LocationCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerComment`: Exposes CRUD operations for the **OfferComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferComments
    * const offerComments = await prisma.offerComment.findMany()
    * ```
    */
  get offerComment(): Prisma.OfferCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerPublishSchedule`: Exposes CRUD operations for the **OfferPublishSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferPublishSchedules
    * const offerPublishSchedules = await prisma.offerPublishSchedule.findMany()
    * ```
    */
  get offerPublishSchedule(): Prisma.OfferPublishScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerImage`: Exposes CRUD operations for the **OfferImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferImages
    * const offerImages = await prisma.offerImage.findMany()
    * ```
    */
  get offerImage(): Prisma.OfferImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerDiscount`: Exposes CRUD operations for the **OfferDiscount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferDiscounts
    * const offerDiscounts = await prisma.offerDiscount.findMany()
    * ```
    */
  get offerDiscount(): Prisma.OfferDiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.actionLog`: Exposes CRUD operations for the **ActionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionLogs
    * const actionLogs = await prisma.actionLog.findMany()
    * ```
    */
  get actionLog(): Prisma.ActionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CompanyLink: 'CompanyLink',
    Location: 'Location',
    LocationComment: 'LocationComment',
    Offer: 'Offer',
    OfferComment: 'OfferComment',
    OfferPublishSchedule: 'OfferPublishSchedule',
    OfferImage: 'OfferImage',
    OfferDiscount: 'OfferDiscount',
    Transaction: 'Transaction',
    Chat: 'Chat',
    ChatMember: 'ChatMember',
    ChatMessage: 'ChatMessage',
    ActionLog: 'ActionLog',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "companyLink" | "location" | "locationComment" | "offer" | "offerComment" | "offerPublishSchedule" | "offerImage" | "offerDiscount" | "transaction" | "chat" | "chatMember" | "chatMessage" | "actionLog" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CompanyLink: {
        payload: Prisma.$CompanyLinkPayload<ExtArgs>
        fields: Prisma.CompanyLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>
          }
          findFirst: {
            args: Prisma.CompanyLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>
          }
          findMany: {
            args: Prisma.CompanyLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>[]
          }
          create: {
            args: Prisma.CompanyLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>
          }
          createMany: {
            args: Prisma.CompanyLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>[]
          }
          delete: {
            args: Prisma.CompanyLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>
          }
          update: {
            args: Prisma.CompanyLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>
          }
          deleteMany: {
            args: Prisma.CompanyLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>[]
          }
          upsert: {
            args: Prisma.CompanyLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyLinkPayload>
          }
          aggregate: {
            args: Prisma.CompanyLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyLink>
          }
          groupBy: {
            args: Prisma.CompanyLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyLinkCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyLinkCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LocationComment: {
        payload: Prisma.$LocationCommentPayload<ExtArgs>
        fields: Prisma.LocationCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>
          }
          findFirst: {
            args: Prisma.LocationCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>
          }
          findMany: {
            args: Prisma.LocationCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>[]
          }
          create: {
            args: Prisma.LocationCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>
          }
          createMany: {
            args: Prisma.LocationCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>[]
          }
          delete: {
            args: Prisma.LocationCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>
          }
          update: {
            args: Prisma.LocationCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>
          }
          deleteMany: {
            args: Prisma.LocationCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>[]
          }
          upsert: {
            args: Prisma.LocationCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationCommentPayload>
          }
          aggregate: {
            args: Prisma.LocationCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationComment>
          }
          groupBy: {
            args: Prisma.LocationCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCommentCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCommentCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      OfferComment: {
        payload: Prisma.$OfferCommentPayload<ExtArgs>
        fields: Prisma.OfferCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>
          }
          findFirst: {
            args: Prisma.OfferCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>
          }
          findMany: {
            args: Prisma.OfferCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>[]
          }
          create: {
            args: Prisma.OfferCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>
          }
          createMany: {
            args: Prisma.OfferCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>[]
          }
          delete: {
            args: Prisma.OfferCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>
          }
          update: {
            args: Prisma.OfferCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>
          }
          deleteMany: {
            args: Prisma.OfferCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>[]
          }
          upsert: {
            args: Prisma.OfferCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferCommentPayload>
          }
          aggregate: {
            args: Prisma.OfferCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferComment>
          }
          groupBy: {
            args: Prisma.OfferCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCommentCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCommentCountAggregateOutputType> | number
          }
        }
      }
      OfferPublishSchedule: {
        payload: Prisma.$OfferPublishSchedulePayload<ExtArgs>
        fields: Prisma.OfferPublishScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferPublishScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferPublishScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>
          }
          findFirst: {
            args: Prisma.OfferPublishScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferPublishScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>
          }
          findMany: {
            args: Prisma.OfferPublishScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>[]
          }
          create: {
            args: Prisma.OfferPublishScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>
          }
          createMany: {
            args: Prisma.OfferPublishScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferPublishScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>[]
          }
          delete: {
            args: Prisma.OfferPublishScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>
          }
          update: {
            args: Prisma.OfferPublishScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>
          }
          deleteMany: {
            args: Prisma.OfferPublishScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferPublishScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferPublishScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>[]
          }
          upsert: {
            args: Prisma.OfferPublishScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPublishSchedulePayload>
          }
          aggregate: {
            args: Prisma.OfferPublishScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferPublishSchedule>
          }
          groupBy: {
            args: Prisma.OfferPublishScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferPublishScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferPublishScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<OfferPublishScheduleCountAggregateOutputType> | number
          }
        }
      }
      OfferImage: {
        payload: Prisma.$OfferImagePayload<ExtArgs>
        fields: Prisma.OfferImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>
          }
          findFirst: {
            args: Prisma.OfferImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>
          }
          findMany: {
            args: Prisma.OfferImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>[]
          }
          create: {
            args: Prisma.OfferImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>
          }
          createMany: {
            args: Prisma.OfferImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>[]
          }
          delete: {
            args: Prisma.OfferImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>
          }
          update: {
            args: Prisma.OfferImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>
          }
          deleteMany: {
            args: Prisma.OfferImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>[]
          }
          upsert: {
            args: Prisma.OfferImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferImagePayload>
          }
          aggregate: {
            args: Prisma.OfferImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferImage>
          }
          groupBy: {
            args: Prisma.OfferImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferImageCountArgs<ExtArgs>
            result: $Utils.Optional<OfferImageCountAggregateOutputType> | number
          }
        }
      }
      OfferDiscount: {
        payload: Prisma.$OfferDiscountPayload<ExtArgs>
        fields: Prisma.OfferDiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferDiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferDiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>
          }
          findFirst: {
            args: Prisma.OfferDiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferDiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>
          }
          findMany: {
            args: Prisma.OfferDiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>[]
          }
          create: {
            args: Prisma.OfferDiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>
          }
          createMany: {
            args: Prisma.OfferDiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferDiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>[]
          }
          delete: {
            args: Prisma.OfferDiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>
          }
          update: {
            args: Prisma.OfferDiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>
          }
          deleteMany: {
            args: Prisma.OfferDiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferDiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferDiscountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>[]
          }
          upsert: {
            args: Prisma.OfferDiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferDiscountPayload>
          }
          aggregate: {
            args: Prisma.OfferDiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferDiscount>
          }
          groupBy: {
            args: Prisma.OfferDiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferDiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferDiscountCountArgs<ExtArgs>
            result: $Utils.Optional<OfferDiscountCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatMember: {
        payload: Prisma.$ChatMemberPayload<ExtArgs>
        fields: Prisma.ChatMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findMany: {
            args: Prisma.ChatMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          create: {
            args: Prisma.ChatMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          createMany: {
            args: Prisma.ChatMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          update: {
            args: Prisma.ChatMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMember>
          }
          groupBy: {
            args: Prisma.ChatMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ActionLog: {
        payload: Prisma.$ActionLogPayload<ExtArgs>
        fields: Prisma.ActionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>
          }
          findFirst: {
            args: Prisma.ActionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>
          }
          findMany: {
            args: Prisma.ActionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>[]
          }
          create: {
            args: Prisma.ActionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>
          }
          createMany: {
            args: Prisma.ActionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>[]
          }
          delete: {
            args: Prisma.ActionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>
          }
          update: {
            args: Prisma.ActionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>
          }
          deleteMany: {
            args: Prisma.ActionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>[]
          }
          upsert: {
            args: Prisma.ActionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionLogPayload>
          }
          aggregate: {
            args: Prisma.ActionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionLog>
          }
          groupBy: {
            args: Prisma.ActionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActionLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    omit?: Prisma.GlobalOmitConfig
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
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    companyLink?: CompanyLinkOmit
    location?: LocationOmit
    locationComment?: LocationCommentOmit
    offer?: OfferOmit
    offerComment?: OfferCommentOmit
    offerPublishSchedule?: OfferPublishScheduleOmit
    offerImage?: OfferImageOmit
    offerDiscount?: OfferDiscountOmit
    transaction?: TransactionOmit
    chat?: ChatOmit
    chatMember?: ChatMemberOmit
    chatMessage?: ChatMessageOmit
    actionLog?: ActionLogOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    locationComments: number
    actionLogs: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationComments?: boolean | LocationCountOutputTypeCountLocationCommentsArgs
    actionLogs?: boolean | LocationCountOutputTypeCountActionLogsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountLocationCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationCommentWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountActionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionLogWhereInput
  }


  /**
   * Count Type LocationCommentCountOutputType
   */

  export type LocationCommentCountOutputType = {
    chats: number
  }

  export type LocationCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | LocationCommentCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * LocationCommentCountOutputType without action
   */
  export type LocationCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCommentCountOutputType
     */
    select?: LocationCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCommentCountOutputType without action
   */
  export type LocationCommentCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type OfferCountOutputType
   */

  export type OfferCountOutputType = {
    images: number
    transactions: number
    offerPublishSchedules: number
    offerComments: number
    offerDiscounts: number
    chats: number
    actionLogs: number
  }

  export type OfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | OfferCountOutputTypeCountImagesArgs
    transactions?: boolean | OfferCountOutputTypeCountTransactionsArgs
    offerPublishSchedules?: boolean | OfferCountOutputTypeCountOfferPublishSchedulesArgs
    offerComments?: boolean | OfferCountOutputTypeCountOfferCommentsArgs
    offerDiscounts?: boolean | OfferCountOutputTypeCountOfferDiscountsArgs
    chats?: boolean | OfferCountOutputTypeCountChatsArgs
    actionLogs?: boolean | OfferCountOutputTypeCountActionLogsArgs
  }

  // Custom InputTypes
  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCountOutputType
     */
    select?: OfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferImageWhereInput
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountOfferPublishSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferPublishScheduleWhereInput
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountOfferCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferCommentWhereInput
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountOfferDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferDiscountWhereInput
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountActionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionLogWhereInput
  }


  /**
   * Count Type OfferCommentCountOutputType
   */

  export type OfferCommentCountOutputType = {
    chats: number
  }

  export type OfferCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | OfferCommentCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * OfferCommentCountOutputType without action
   */
  export type OfferCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCommentCountOutputType
     */
    select?: OfferCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCommentCountOutputType without action
   */
  export type OfferCommentCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type OfferDiscountCountOutputType
   */

  export type OfferDiscountCountOutputType = {
    transactions: number
    actionLogs: number
  }

  export type OfferDiscountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | OfferDiscountCountOutputTypeCountTransactionsArgs
    actionLogs?: boolean | OfferDiscountCountOutputTypeCountActionLogsArgs
  }

  // Custom InputTypes
  /**
   * OfferDiscountCountOutputType without action
   */
  export type OfferDiscountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscountCountOutputType
     */
    select?: OfferDiscountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferDiscountCountOutputType without action
   */
  export type OfferDiscountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * OfferDiscountCountOutputType without action
   */
  export type OfferDiscountCountOutputTypeCountActionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionLogWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    chatMembers: number
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMembers?: boolean | ChatCountOutputTypeCountChatMembersArgs
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountChatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CompanyLink
   */

  export type AggregateCompanyLink = {
    _count: CompanyLinkCountAggregateOutputType | null
    _min: CompanyLinkMinAggregateOutputType | null
    _max: CompanyLinkMaxAggregateOutputType | null
  }

  export type CompanyLinkMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    icon: string | null
  }

  export type CompanyLinkMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
    icon: string | null
  }

  export type CompanyLinkCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    url: number
    icon: number
    _all: number
  }


  export type CompanyLinkMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    icon?: true
  }

  export type CompanyLinkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    icon?: true
  }

  export type CompanyLinkCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    icon?: true
    _all?: true
  }

  export type CompanyLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyLink to aggregate.
     */
    where?: CompanyLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLinks to fetch.
     */
    orderBy?: CompanyLinkOrderByWithRelationInput | CompanyLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyLinks
    **/
    _count?: true | CompanyLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyLinkMaxAggregateInputType
  }

  export type GetCompanyLinkAggregateType<T extends CompanyLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyLink[P]>
      : GetScalarType<T[P], AggregateCompanyLink[P]>
  }




  export type CompanyLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyLinkWhereInput
    orderBy?: CompanyLinkOrderByWithAggregationInput | CompanyLinkOrderByWithAggregationInput[]
    by: CompanyLinkScalarFieldEnum[] | CompanyLinkScalarFieldEnum
    having?: CompanyLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyLinkCountAggregateInputType | true
    _min?: CompanyLinkMinAggregateInputType
    _max?: CompanyLinkMaxAggregateInputType
  }

  export type CompanyLinkGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    url: string
    icon: string
    _count: CompanyLinkCountAggregateOutputType | null
    _min: CompanyLinkMinAggregateOutputType | null
    _max: CompanyLinkMaxAggregateOutputType | null
  }

  type GetCompanyLinkGroupByPayload<T extends CompanyLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyLinkGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyLinkGroupByOutputType[P]>
        }
      >
    >


  export type CompanyLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    icon?: boolean
  }, ExtArgs["result"]["companyLink"]>

  export type CompanyLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    icon?: boolean
  }, ExtArgs["result"]["companyLink"]>

  export type CompanyLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    icon?: boolean
  }, ExtArgs["result"]["companyLink"]>

  export type CompanyLinkSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    icon?: boolean
  }

  export type CompanyLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "url" | "icon", ExtArgs["result"]["companyLink"]>

  export type $CompanyLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      url: string
      icon: string
    }, ExtArgs["result"]["companyLink"]>
    composites: {}
  }

  type CompanyLinkGetPayload<S extends boolean | null | undefined | CompanyLinkDefaultArgs> = $Result.GetResult<Prisma.$CompanyLinkPayload, S>

  type CompanyLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyLinkCountAggregateInputType | true
    }

  export interface CompanyLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyLink'], meta: { name: 'CompanyLink' } }
    /**
     * Find zero or one CompanyLink that matches the filter.
     * @param {CompanyLinkFindUniqueArgs} args - Arguments to find a CompanyLink
     * @example
     * // Get one CompanyLink
     * const companyLink = await prisma.companyLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyLinkFindUniqueArgs>(args: SelectSubset<T, CompanyLinkFindUniqueArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyLinkFindUniqueOrThrowArgs} args - Arguments to find a CompanyLink
     * @example
     * // Get one CompanyLink
     * const companyLink = await prisma.companyLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkFindFirstArgs} args - Arguments to find a CompanyLink
     * @example
     * // Get one CompanyLink
     * const companyLink = await prisma.companyLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyLinkFindFirstArgs>(args?: SelectSubset<T, CompanyLinkFindFirstArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkFindFirstOrThrowArgs} args - Arguments to find a CompanyLink
     * @example
     * // Get one CompanyLink
     * const companyLink = await prisma.companyLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyLinks
     * const companyLinks = await prisma.companyLink.findMany()
     * 
     * // Get first 10 CompanyLinks
     * const companyLinks = await prisma.companyLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyLinkWithIdOnly = await prisma.companyLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyLinkFindManyArgs>(args?: SelectSubset<T, CompanyLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyLink.
     * @param {CompanyLinkCreateArgs} args - Arguments to create a CompanyLink.
     * @example
     * // Create one CompanyLink
     * const CompanyLink = await prisma.companyLink.create({
     *   data: {
     *     // ... data to create a CompanyLink
     *   }
     * })
     * 
     */
    create<T extends CompanyLinkCreateArgs>(args: SelectSubset<T, CompanyLinkCreateArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyLinks.
     * @param {CompanyLinkCreateManyArgs} args - Arguments to create many CompanyLinks.
     * @example
     * // Create many CompanyLinks
     * const companyLink = await prisma.companyLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyLinkCreateManyArgs>(args?: SelectSubset<T, CompanyLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyLinks and returns the data saved in the database.
     * @param {CompanyLinkCreateManyAndReturnArgs} args - Arguments to create many CompanyLinks.
     * @example
     * // Create many CompanyLinks
     * const companyLink = await prisma.companyLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyLinks and only return the `id`
     * const companyLinkWithIdOnly = await prisma.companyLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyLink.
     * @param {CompanyLinkDeleteArgs} args - Arguments to delete one CompanyLink.
     * @example
     * // Delete one CompanyLink
     * const CompanyLink = await prisma.companyLink.delete({
     *   where: {
     *     // ... filter to delete one CompanyLink
     *   }
     * })
     * 
     */
    delete<T extends CompanyLinkDeleteArgs>(args: SelectSubset<T, CompanyLinkDeleteArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyLink.
     * @param {CompanyLinkUpdateArgs} args - Arguments to update one CompanyLink.
     * @example
     * // Update one CompanyLink
     * const companyLink = await prisma.companyLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyLinkUpdateArgs>(args: SelectSubset<T, CompanyLinkUpdateArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyLinks.
     * @param {CompanyLinkDeleteManyArgs} args - Arguments to filter CompanyLinks to delete.
     * @example
     * // Delete a few CompanyLinks
     * const { count } = await prisma.companyLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyLinkDeleteManyArgs>(args?: SelectSubset<T, CompanyLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyLinks
     * const companyLink = await prisma.companyLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyLinkUpdateManyArgs>(args: SelectSubset<T, CompanyLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyLinks and returns the data updated in the database.
     * @param {CompanyLinkUpdateManyAndReturnArgs} args - Arguments to update many CompanyLinks.
     * @example
     * // Update many CompanyLinks
     * const companyLink = await prisma.companyLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyLinks and only return the `id`
     * const companyLinkWithIdOnly = await prisma.companyLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyLink.
     * @param {CompanyLinkUpsertArgs} args - Arguments to update or create a CompanyLink.
     * @example
     * // Update or create a CompanyLink
     * const companyLink = await prisma.companyLink.upsert({
     *   create: {
     *     // ... data to create a CompanyLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyLink we want to update
     *   }
     * })
     */
    upsert<T extends CompanyLinkUpsertArgs>(args: SelectSubset<T, CompanyLinkUpsertArgs<ExtArgs>>): Prisma__CompanyLinkClient<$Result.GetResult<Prisma.$CompanyLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkCountArgs} args - Arguments to filter CompanyLinks to count.
     * @example
     * // Count the number of CompanyLinks
     * const count = await prisma.companyLink.count({
     *   where: {
     *     // ... the filter for the CompanyLinks we want to count
     *   }
     * })
    **/
    count<T extends CompanyLinkCountArgs>(
      args?: Subset<T, CompanyLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyLinkAggregateArgs>(args: Subset<T, CompanyLinkAggregateArgs>): Prisma.PrismaPromise<GetCompanyLinkAggregateType<T>>

    /**
     * Group by CompanyLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyLinkGroupByArgs} args - Group by arguments.
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
      T extends CompanyLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyLinkGroupByArgs['orderBy'] }
        : { orderBy?: CompanyLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyLink model
   */
  readonly fields: CompanyLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyLink model
   */
  interface CompanyLinkFieldRefs {
    readonly id: FieldRef<"CompanyLink", 'String'>
    readonly createdAt: FieldRef<"CompanyLink", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyLink", 'DateTime'>
    readonly url: FieldRef<"CompanyLink", 'String'>
    readonly icon: FieldRef<"CompanyLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanyLink findUnique
   */
  export type CompanyLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * Filter, which CompanyLink to fetch.
     */
    where: CompanyLinkWhereUniqueInput
  }

  /**
   * CompanyLink findUniqueOrThrow
   */
  export type CompanyLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * Filter, which CompanyLink to fetch.
     */
    where: CompanyLinkWhereUniqueInput
  }

  /**
   * CompanyLink findFirst
   */
  export type CompanyLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * Filter, which CompanyLink to fetch.
     */
    where?: CompanyLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLinks to fetch.
     */
    orderBy?: CompanyLinkOrderByWithRelationInput | CompanyLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyLinks.
     */
    cursor?: CompanyLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyLinks.
     */
    distinct?: CompanyLinkScalarFieldEnum | CompanyLinkScalarFieldEnum[]
  }

  /**
   * CompanyLink findFirstOrThrow
   */
  export type CompanyLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * Filter, which CompanyLink to fetch.
     */
    where?: CompanyLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLinks to fetch.
     */
    orderBy?: CompanyLinkOrderByWithRelationInput | CompanyLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyLinks.
     */
    cursor?: CompanyLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyLinks.
     */
    distinct?: CompanyLinkScalarFieldEnum | CompanyLinkScalarFieldEnum[]
  }

  /**
   * CompanyLink findMany
   */
  export type CompanyLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * Filter, which CompanyLinks to fetch.
     */
    where?: CompanyLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyLinks to fetch.
     */
    orderBy?: CompanyLinkOrderByWithRelationInput | CompanyLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyLinks.
     */
    cursor?: CompanyLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyLinks.
     */
    skip?: number
    distinct?: CompanyLinkScalarFieldEnum | CompanyLinkScalarFieldEnum[]
  }

  /**
   * CompanyLink create
   */
  export type CompanyLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanyLink.
     */
    data: XOR<CompanyLinkCreateInput, CompanyLinkUncheckedCreateInput>
  }

  /**
   * CompanyLink createMany
   */
  export type CompanyLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyLinks.
     */
    data: CompanyLinkCreateManyInput | CompanyLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyLink createManyAndReturn
   */
  export type CompanyLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyLinks.
     */
    data: CompanyLinkCreateManyInput | CompanyLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyLink update
   */
  export type CompanyLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanyLink.
     */
    data: XOR<CompanyLinkUpdateInput, CompanyLinkUncheckedUpdateInput>
    /**
     * Choose, which CompanyLink to update.
     */
    where: CompanyLinkWhereUniqueInput
  }

  /**
   * CompanyLink updateMany
   */
  export type CompanyLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyLinks.
     */
    data: XOR<CompanyLinkUpdateManyMutationInput, CompanyLinkUncheckedUpdateManyInput>
    /**
     * Filter which CompanyLinks to update
     */
    where?: CompanyLinkWhereInput
    /**
     * Limit how many CompanyLinks to update.
     */
    limit?: number
  }

  /**
   * CompanyLink updateManyAndReturn
   */
  export type CompanyLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * The data used to update CompanyLinks.
     */
    data: XOR<CompanyLinkUpdateManyMutationInput, CompanyLinkUncheckedUpdateManyInput>
    /**
     * Filter which CompanyLinks to update
     */
    where?: CompanyLinkWhereInput
    /**
     * Limit how many CompanyLinks to update.
     */
    limit?: number
  }

  /**
   * CompanyLink upsert
   */
  export type CompanyLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanyLink to update in case it exists.
     */
    where: CompanyLinkWhereUniqueInput
    /**
     * In case the CompanyLink found by the `where` argument doesn't exist, create a new CompanyLink with this data.
     */
    create: XOR<CompanyLinkCreateInput, CompanyLinkUncheckedCreateInput>
    /**
     * In case the CompanyLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyLinkUpdateInput, CompanyLinkUncheckedUpdateInput>
  }

  /**
   * CompanyLink delete
   */
  export type CompanyLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
    /**
     * Filter which CompanyLink to delete.
     */
    where: CompanyLinkWhereUniqueInput
  }

  /**
   * CompanyLink deleteMany
   */
  export type CompanyLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyLinks to delete
     */
    where?: CompanyLinkWhereInput
    /**
     * Limit how many CompanyLinks to delete.
     */
    limit?: number
  }

  /**
   * CompanyLink without action
   */
  export type CompanyLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyLink
     */
    select?: CompanyLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyLink
     */
    omit?: CompanyLinkOmit<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.LocationStatuses | null
    placeId: string | null
    location: string | null
    city: string | null
    state: string | null
    stateIndex: string | null
    postalCode: string | null
    title: string | null
    country: string | null
    countryIndex: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.LocationStatuses | null
    placeId: string | null
    location: string | null
    city: string | null
    state: string | null
    stateIndex: string | null
    postalCode: string | null
    title: string | null
    country: string | null
    countryIndex: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    placeId: number
    location: number
    city: number
    state: number
    stateIndex: number
    postalCode: number
    title: number
    country: number
    countryIndex: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    placeId?: true
    location?: true
    city?: true
    state?: true
    stateIndex?: true
    postalCode?: true
    title?: true
    country?: true
    countryIndex?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    placeId?: true
    location?: true
    city?: true
    state?: true
    stateIndex?: true
    postalCode?: true
    title?: true
    country?: true
    countryIndex?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    placeId?: true
    location?: true
    city?: true
    state?: true
    stateIndex?: true
    postalCode?: true
    title?: true
    country?: true
    countryIndex?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.LocationStatuses
    placeId: string
    location: string
    city: string
    state: string
    stateIndex: string
    postalCode: string
    title: string
    country: string
    countryIndex: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    placeId?: boolean
    location?: boolean
    city?: boolean
    state?: boolean
    stateIndex?: boolean
    postalCode?: boolean
    title?: boolean
    country?: boolean
    countryIndex?: boolean
    locationComments?: boolean | Location$locationCommentsArgs<ExtArgs>
    actionLogs?: boolean | Location$actionLogsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    placeId?: boolean
    location?: boolean
    city?: boolean
    state?: boolean
    stateIndex?: boolean
    postalCode?: boolean
    title?: boolean
    country?: boolean
    countryIndex?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    placeId?: boolean
    location?: boolean
    city?: boolean
    state?: boolean
    stateIndex?: boolean
    postalCode?: boolean
    title?: boolean
    country?: boolean
    countryIndex?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "status" | "placeId" | "location" | "city" | "state" | "stateIndex" | "postalCode" | "title" | "country" | "countryIndex", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationComments?: boolean | Location$locationCommentsArgs<ExtArgs>
    actionLogs?: boolean | Location$actionLogsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      locationComments: Prisma.$LocationCommentPayload<ExtArgs>[]
      actionLogs: Prisma.$ActionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.LocationStatuses
      placeId: string
      location: string
      city: string
      state: string
      stateIndex: string
      postalCode: string
      title: string
      country: string
      countryIndex: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locationComments<T extends Location$locationCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Location$locationCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionLogs<T extends Location$actionLogsArgs<ExtArgs> = {}>(args?: Subset<T, Location$actionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
    readonly status: FieldRef<"Location", 'LocationStatuses'>
    readonly placeId: FieldRef<"Location", 'String'>
    readonly location: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly stateIndex: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
    readonly title: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly countryIndex: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.locationComments
   */
  export type Location$locationCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    where?: LocationCommentWhereInput
    orderBy?: LocationCommentOrderByWithRelationInput | LocationCommentOrderByWithRelationInput[]
    cursor?: LocationCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationCommentScalarFieldEnum | LocationCommentScalarFieldEnum[]
  }

  /**
   * Location.actionLogs
   */
  export type Location$actionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    where?: ActionLogWhereInput
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    cursor?: ActionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LocationComment
   */

  export type AggregateLocationComment = {
    _count: LocationCommentCountAggregateOutputType | null
    _min: LocationCommentMinAggregateOutputType | null
    _max: LocationCommentMaxAggregateOutputType | null
  }

  export type LocationCommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    authorId: string | null
    locationId: string | null
  }

  export type LocationCommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    authorId: string | null
    locationId: string | null
  }

  export type LocationCommentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    comment: number
    authorId: number
    locationId: number
    _all: number
  }


  export type LocationCommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    authorId?: true
    locationId?: true
  }

  export type LocationCommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    authorId?: true
    locationId?: true
  }

  export type LocationCommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    authorId?: true
    locationId?: true
    _all?: true
  }

  export type LocationCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationComment to aggregate.
     */
    where?: LocationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationComments to fetch.
     */
    orderBy?: LocationCommentOrderByWithRelationInput | LocationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationComments
    **/
    _count?: true | LocationCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationCommentMaxAggregateInputType
  }

  export type GetLocationCommentAggregateType<T extends LocationCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationComment[P]>
      : GetScalarType<T[P], AggregateLocationComment[P]>
  }




  export type LocationCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationCommentWhereInput
    orderBy?: LocationCommentOrderByWithAggregationInput | LocationCommentOrderByWithAggregationInput[]
    by: LocationCommentScalarFieldEnum[] | LocationCommentScalarFieldEnum
    having?: LocationCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCommentCountAggregateInputType | true
    _min?: LocationCommentMinAggregateInputType
    _max?: LocationCommentMaxAggregateInputType
  }

  export type LocationCommentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    comment: string
    authorId: string
    locationId: string
    _count: LocationCommentCountAggregateOutputType | null
    _min: LocationCommentMinAggregateOutputType | null
    _max: LocationCommentMaxAggregateOutputType | null
  }

  type GetLocationCommentGroupByPayload<T extends LocationCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationCommentGroupByOutputType[P]>
            : GetScalarType<T[P], LocationCommentGroupByOutputType[P]>
        }
      >
    >


  export type LocationCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    locationId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    chats?: boolean | LocationComment$chatsArgs<ExtArgs>
    _count?: boolean | LocationCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationComment"]>

  export type LocationCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    locationId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationComment"]>

  export type LocationCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    locationId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationComment"]>

  export type LocationCommentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    locationId?: boolean
  }

  export type LocationCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "comment" | "authorId" | "locationId", ExtArgs["result"]["locationComment"]>
  export type LocationCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    chats?: boolean | LocationComment$chatsArgs<ExtArgs>
    _count?: boolean | LocationCommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type LocationCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $LocationCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationComment"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      chats: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      comment: string
      authorId: string
      locationId: string
    }, ExtArgs["result"]["locationComment"]>
    composites: {}
  }

  type LocationCommentGetPayload<S extends boolean | null | undefined | LocationCommentDefaultArgs> = $Result.GetResult<Prisma.$LocationCommentPayload, S>

  type LocationCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCommentCountAggregateInputType | true
    }

  export interface LocationCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationComment'], meta: { name: 'LocationComment' } }
    /**
     * Find zero or one LocationComment that matches the filter.
     * @param {LocationCommentFindUniqueArgs} args - Arguments to find a LocationComment
     * @example
     * // Get one LocationComment
     * const locationComment = await prisma.locationComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationCommentFindUniqueArgs>(args: SelectSubset<T, LocationCommentFindUniqueArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationCommentFindUniqueOrThrowArgs} args - Arguments to find a LocationComment
     * @example
     * // Get one LocationComment
     * const locationComment = await prisma.locationComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentFindFirstArgs} args - Arguments to find a LocationComment
     * @example
     * // Get one LocationComment
     * const locationComment = await prisma.locationComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationCommentFindFirstArgs>(args?: SelectSubset<T, LocationCommentFindFirstArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentFindFirstOrThrowArgs} args - Arguments to find a LocationComment
     * @example
     * // Get one LocationComment
     * const locationComment = await prisma.locationComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationComments
     * const locationComments = await prisma.locationComment.findMany()
     * 
     * // Get first 10 LocationComments
     * const locationComments = await prisma.locationComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationCommentWithIdOnly = await prisma.locationComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationCommentFindManyArgs>(args?: SelectSubset<T, LocationCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationComment.
     * @param {LocationCommentCreateArgs} args - Arguments to create a LocationComment.
     * @example
     * // Create one LocationComment
     * const LocationComment = await prisma.locationComment.create({
     *   data: {
     *     // ... data to create a LocationComment
     *   }
     * })
     * 
     */
    create<T extends LocationCommentCreateArgs>(args: SelectSubset<T, LocationCommentCreateArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationComments.
     * @param {LocationCommentCreateManyArgs} args - Arguments to create many LocationComments.
     * @example
     * // Create many LocationComments
     * const locationComment = await prisma.locationComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCommentCreateManyArgs>(args?: SelectSubset<T, LocationCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationComments and returns the data saved in the database.
     * @param {LocationCommentCreateManyAndReturnArgs} args - Arguments to create many LocationComments.
     * @example
     * // Create many LocationComments
     * const locationComment = await prisma.locationComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationComments and only return the `id`
     * const locationCommentWithIdOnly = await prisma.locationComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationComment.
     * @param {LocationCommentDeleteArgs} args - Arguments to delete one LocationComment.
     * @example
     * // Delete one LocationComment
     * const LocationComment = await prisma.locationComment.delete({
     *   where: {
     *     // ... filter to delete one LocationComment
     *   }
     * })
     * 
     */
    delete<T extends LocationCommentDeleteArgs>(args: SelectSubset<T, LocationCommentDeleteArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationComment.
     * @param {LocationCommentUpdateArgs} args - Arguments to update one LocationComment.
     * @example
     * // Update one LocationComment
     * const locationComment = await prisma.locationComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationCommentUpdateArgs>(args: SelectSubset<T, LocationCommentUpdateArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationComments.
     * @param {LocationCommentDeleteManyArgs} args - Arguments to filter LocationComments to delete.
     * @example
     * // Delete a few LocationComments
     * const { count } = await prisma.locationComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationCommentDeleteManyArgs>(args?: SelectSubset<T, LocationCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationComments
     * const locationComment = await prisma.locationComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationCommentUpdateManyArgs>(args: SelectSubset<T, LocationCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationComments and returns the data updated in the database.
     * @param {LocationCommentUpdateManyAndReturnArgs} args - Arguments to update many LocationComments.
     * @example
     * // Update many LocationComments
     * const locationComment = await prisma.locationComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationComments and only return the `id`
     * const locationCommentWithIdOnly = await prisma.locationComment.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationComment.
     * @param {LocationCommentUpsertArgs} args - Arguments to update or create a LocationComment.
     * @example
     * // Update or create a LocationComment
     * const locationComment = await prisma.locationComment.upsert({
     *   create: {
     *     // ... data to create a LocationComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationComment we want to update
     *   }
     * })
     */
    upsert<T extends LocationCommentUpsertArgs>(args: SelectSubset<T, LocationCommentUpsertArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentCountArgs} args - Arguments to filter LocationComments to count.
     * @example
     * // Count the number of LocationComments
     * const count = await prisma.locationComment.count({
     *   where: {
     *     // ... the filter for the LocationComments we want to count
     *   }
     * })
    **/
    count<T extends LocationCommentCountArgs>(
      args?: Subset<T, LocationCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationCommentAggregateArgs>(args: Subset<T, LocationCommentAggregateArgs>): Prisma.PrismaPromise<GetLocationCommentAggregateType<T>>

    /**
     * Group by LocationComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCommentGroupByArgs} args - Group by arguments.
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
      T extends LocationCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationCommentGroupByArgs['orderBy'] }
        : { orderBy?: LocationCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationComment model
   */
  readonly fields: LocationCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chats<T extends LocationComment$chatsArgs<ExtArgs> = {}>(args?: Subset<T, LocationComment$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LocationComment model
   */
  interface LocationCommentFieldRefs {
    readonly id: FieldRef<"LocationComment", 'String'>
    readonly createdAt: FieldRef<"LocationComment", 'DateTime'>
    readonly updatedAt: FieldRef<"LocationComment", 'DateTime'>
    readonly comment: FieldRef<"LocationComment", 'String'>
    readonly authorId: FieldRef<"LocationComment", 'String'>
    readonly locationId: FieldRef<"LocationComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LocationComment findUnique
   */
  export type LocationCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * Filter, which LocationComment to fetch.
     */
    where: LocationCommentWhereUniqueInput
  }

  /**
   * LocationComment findUniqueOrThrow
   */
  export type LocationCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * Filter, which LocationComment to fetch.
     */
    where: LocationCommentWhereUniqueInput
  }

  /**
   * LocationComment findFirst
   */
  export type LocationCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * Filter, which LocationComment to fetch.
     */
    where?: LocationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationComments to fetch.
     */
    orderBy?: LocationCommentOrderByWithRelationInput | LocationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationComments.
     */
    cursor?: LocationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationComments.
     */
    distinct?: LocationCommentScalarFieldEnum | LocationCommentScalarFieldEnum[]
  }

  /**
   * LocationComment findFirstOrThrow
   */
  export type LocationCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * Filter, which LocationComment to fetch.
     */
    where?: LocationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationComments to fetch.
     */
    orderBy?: LocationCommentOrderByWithRelationInput | LocationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationComments.
     */
    cursor?: LocationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationComments.
     */
    distinct?: LocationCommentScalarFieldEnum | LocationCommentScalarFieldEnum[]
  }

  /**
   * LocationComment findMany
   */
  export type LocationCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * Filter, which LocationComments to fetch.
     */
    where?: LocationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationComments to fetch.
     */
    orderBy?: LocationCommentOrderByWithRelationInput | LocationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationComments.
     */
    cursor?: LocationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationComments.
     */
    skip?: number
    distinct?: LocationCommentScalarFieldEnum | LocationCommentScalarFieldEnum[]
  }

  /**
   * LocationComment create
   */
  export type LocationCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationComment.
     */
    data: XOR<LocationCommentCreateInput, LocationCommentUncheckedCreateInput>
  }

  /**
   * LocationComment createMany
   */
  export type LocationCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationComments.
     */
    data: LocationCommentCreateManyInput | LocationCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationComment createManyAndReturn
   */
  export type LocationCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * The data used to create many LocationComments.
     */
    data: LocationCommentCreateManyInput | LocationCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationComment update
   */
  export type LocationCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationComment.
     */
    data: XOR<LocationCommentUpdateInput, LocationCommentUncheckedUpdateInput>
    /**
     * Choose, which LocationComment to update.
     */
    where: LocationCommentWhereUniqueInput
  }

  /**
   * LocationComment updateMany
   */
  export type LocationCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationComments.
     */
    data: XOR<LocationCommentUpdateManyMutationInput, LocationCommentUncheckedUpdateManyInput>
    /**
     * Filter which LocationComments to update
     */
    where?: LocationCommentWhereInput
    /**
     * Limit how many LocationComments to update.
     */
    limit?: number
  }

  /**
   * LocationComment updateManyAndReturn
   */
  export type LocationCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * The data used to update LocationComments.
     */
    data: XOR<LocationCommentUpdateManyMutationInput, LocationCommentUncheckedUpdateManyInput>
    /**
     * Filter which LocationComments to update
     */
    where?: LocationCommentWhereInput
    /**
     * Limit how many LocationComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationComment upsert
   */
  export type LocationCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationComment to update in case it exists.
     */
    where: LocationCommentWhereUniqueInput
    /**
     * In case the LocationComment found by the `where` argument doesn't exist, create a new LocationComment with this data.
     */
    create: XOR<LocationCommentCreateInput, LocationCommentUncheckedCreateInput>
    /**
     * In case the LocationComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationCommentUpdateInput, LocationCommentUncheckedUpdateInput>
  }

  /**
   * LocationComment delete
   */
  export type LocationCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    /**
     * Filter which LocationComment to delete.
     */
    where: LocationCommentWhereUniqueInput
  }

  /**
   * LocationComment deleteMany
   */
  export type LocationCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationComments to delete
     */
    where?: LocationCommentWhereInput
    /**
     * Limit how many LocationComments to delete.
     */
    limit?: number
  }

  /**
   * LocationComment.chats
   */
  export type LocationComment$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * LocationComment without action
   */
  export type LocationCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    priceAmount: number | null
  }

  export type OfferSumAggregateOutputType = {
    priceAmount: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    keyFeatures: string | null
    priceAmount: number | null
    status: $Enums.OfferStatuses | null
    companyId: string | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    keyFeatures: string | null
    priceAmount: number | null
    status: $Enums.OfferStatuses | null
    companyId: string | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    keyFeatures: number
    priceAmount: number
    tags: number
    status: number
    companyId: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    priceAmount?: true
  }

  export type OfferSumAggregateInputType = {
    priceAmount?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    keyFeatures?: true
    priceAmount?: true
    status?: true
    companyId?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    keyFeatures?: true
    priceAmount?: true
    status?: true
    companyId?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    keyFeatures?: true
    priceAmount?: true
    tags?: true
    status?: true
    companyId?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags: string[]
    status: $Enums.OfferStatuses
    companyId: string
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    keyFeatures?: boolean
    priceAmount?: boolean
    tags?: boolean
    status?: boolean
    companyId?: boolean
    images?: boolean | Offer$imagesArgs<ExtArgs>
    transactions?: boolean | Offer$transactionsArgs<ExtArgs>
    offerPublishSchedules?: boolean | Offer$offerPublishSchedulesArgs<ExtArgs>
    offerComments?: boolean | Offer$offerCommentsArgs<ExtArgs>
    offerDiscounts?: boolean | Offer$offerDiscountsArgs<ExtArgs>
    chats?: boolean | Offer$chatsArgs<ExtArgs>
    actionLogs?: boolean | Offer$actionLogsArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    keyFeatures?: boolean
    priceAmount?: boolean
    tags?: boolean
    status?: boolean
    companyId?: boolean
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    keyFeatures?: boolean
    priceAmount?: boolean
    tags?: boolean
    status?: boolean
    companyId?: boolean
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    keyFeatures?: boolean
    priceAmount?: boolean
    tags?: boolean
    status?: boolean
    companyId?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "keyFeatures" | "priceAmount" | "tags" | "status" | "companyId", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Offer$imagesArgs<ExtArgs>
    transactions?: boolean | Offer$transactionsArgs<ExtArgs>
    offerPublishSchedules?: boolean | Offer$offerPublishSchedulesArgs<ExtArgs>
    offerComments?: boolean | Offer$offerCommentsArgs<ExtArgs>
    offerDiscounts?: boolean | Offer$offerDiscountsArgs<ExtArgs>
    chats?: boolean | Offer$chatsArgs<ExtArgs>
    actionLogs?: boolean | Offer$actionLogsArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      images: Prisma.$OfferImagePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      offerPublishSchedules: Prisma.$OfferPublishSchedulePayload<ExtArgs>[]
      offerComments: Prisma.$OfferCommentPayload<ExtArgs>[]
      offerDiscounts: Prisma.$OfferDiscountPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      actionLogs: Prisma.$ActionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      keyFeatures: string
      priceAmount: number
      tags: string[]
      status: $Enums.OfferStatuses
      companyId: string
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
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
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Offer$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Offer$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Offer$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Offer$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offerPublishSchedules<T extends Offer$offerPublishSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Offer$offerPublishSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offerComments<T extends Offer$offerCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Offer$offerCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offerDiscounts<T extends Offer$offerDiscountsArgs<ExtArgs> = {}>(args?: Subset<T, Offer$offerDiscountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Offer$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Offer$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionLogs<T extends Offer$actionLogsArgs<ExtArgs> = {}>(args?: Subset<T, Offer$actionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
    readonly updatedAt: FieldRef<"Offer", 'DateTime'>
    readonly title: FieldRef<"Offer", 'String'>
    readonly description: FieldRef<"Offer", 'String'>
    readonly keyFeatures: FieldRef<"Offer", 'String'>
    readonly priceAmount: FieldRef<"Offer", 'Float'>
    readonly tags: FieldRef<"Offer", 'String[]'>
    readonly status: FieldRef<"Offer", 'OfferStatuses'>
    readonly companyId: FieldRef<"Offer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer.images
   */
  export type Offer$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    where?: OfferImageWhereInput
    orderBy?: OfferImageOrderByWithRelationInput | OfferImageOrderByWithRelationInput[]
    cursor?: OfferImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferImageScalarFieldEnum | OfferImageScalarFieldEnum[]
  }

  /**
   * Offer.transactions
   */
  export type Offer$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Offer.offerPublishSchedules
   */
  export type Offer$offerPublishSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    where?: OfferPublishScheduleWhereInput
    orderBy?: OfferPublishScheduleOrderByWithRelationInput | OfferPublishScheduleOrderByWithRelationInput[]
    cursor?: OfferPublishScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferPublishScheduleScalarFieldEnum | OfferPublishScheduleScalarFieldEnum[]
  }

  /**
   * Offer.offerComments
   */
  export type Offer$offerCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    where?: OfferCommentWhereInput
    orderBy?: OfferCommentOrderByWithRelationInput | OfferCommentOrderByWithRelationInput[]
    cursor?: OfferCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferCommentScalarFieldEnum | OfferCommentScalarFieldEnum[]
  }

  /**
   * Offer.offerDiscounts
   */
  export type Offer$offerDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    where?: OfferDiscountWhereInput
    orderBy?: OfferDiscountOrderByWithRelationInput | OfferDiscountOrderByWithRelationInput[]
    cursor?: OfferDiscountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferDiscountScalarFieldEnum | OfferDiscountScalarFieldEnum[]
  }

  /**
   * Offer.chats
   */
  export type Offer$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Offer.actionLogs
   */
  export type Offer$actionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    where?: ActionLogWhereInput
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    cursor?: ActionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[]
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model OfferComment
   */

  export type AggregateOfferComment = {
    _count: OfferCommentCountAggregateOutputType | null
    _min: OfferCommentMinAggregateOutputType | null
    _max: OfferCommentMaxAggregateOutputType | null
  }

  export type OfferCommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    authorId: string | null
    offerId: string | null
  }

  export type OfferCommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    comment: string | null
    authorId: string | null
    offerId: string | null
  }

  export type OfferCommentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    comment: number
    authorId: number
    offerId: number
    _all: number
  }


  export type OfferCommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    authorId?: true
    offerId?: true
  }

  export type OfferCommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    authorId?: true
    offerId?: true
  }

  export type OfferCommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    comment?: true
    authorId?: true
    offerId?: true
    _all?: true
  }

  export type OfferCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferComment to aggregate.
     */
    where?: OfferCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferComments to fetch.
     */
    orderBy?: OfferCommentOrderByWithRelationInput | OfferCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferComments
    **/
    _count?: true | OfferCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferCommentMaxAggregateInputType
  }

  export type GetOfferCommentAggregateType<T extends OfferCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferComment[P]>
      : GetScalarType<T[P], AggregateOfferComment[P]>
  }




  export type OfferCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferCommentWhereInput
    orderBy?: OfferCommentOrderByWithAggregationInput | OfferCommentOrderByWithAggregationInput[]
    by: OfferCommentScalarFieldEnum[] | OfferCommentScalarFieldEnum
    having?: OfferCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCommentCountAggregateInputType | true
    _min?: OfferCommentMinAggregateInputType
    _max?: OfferCommentMaxAggregateInputType
  }

  export type OfferCommentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    comment: string
    authorId: string
    offerId: string
    _count: OfferCommentCountAggregateOutputType | null
    _min: OfferCommentMinAggregateOutputType | null
    _max: OfferCommentMaxAggregateOutputType | null
  }

  type GetOfferCommentGroupByPayload<T extends OfferCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferCommentGroupByOutputType[P]>
            : GetScalarType<T[P], OfferCommentGroupByOutputType[P]>
        }
      >
    >


  export type OfferCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    chats?: boolean | OfferComment$chatsArgs<ExtArgs>
    _count?: boolean | OfferCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerComment"]>

  export type OfferCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerComment"]>

  export type OfferCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerComment"]>

  export type OfferCommentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean
    authorId?: boolean
    offerId?: boolean
  }

  export type OfferCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "comment" | "authorId" | "offerId", ExtArgs["result"]["offerComment"]>
  export type OfferCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    chats?: boolean | OfferComment$chatsArgs<ExtArgs>
    _count?: boolean | OfferCommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type OfferCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $OfferCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferComment"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
      chats: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      comment: string
      authorId: string
      offerId: string
    }, ExtArgs["result"]["offerComment"]>
    composites: {}
  }

  type OfferCommentGetPayload<S extends boolean | null | undefined | OfferCommentDefaultArgs> = $Result.GetResult<Prisma.$OfferCommentPayload, S>

  type OfferCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCommentCountAggregateInputType | true
    }

  export interface OfferCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferComment'], meta: { name: 'OfferComment' } }
    /**
     * Find zero or one OfferComment that matches the filter.
     * @param {OfferCommentFindUniqueArgs} args - Arguments to find a OfferComment
     * @example
     * // Get one OfferComment
     * const offerComment = await prisma.offerComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferCommentFindUniqueArgs>(args: SelectSubset<T, OfferCommentFindUniqueArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferCommentFindUniqueOrThrowArgs} args - Arguments to find a OfferComment
     * @example
     * // Get one OfferComment
     * const offerComment = await prisma.offerComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentFindFirstArgs} args - Arguments to find a OfferComment
     * @example
     * // Get one OfferComment
     * const offerComment = await prisma.offerComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferCommentFindFirstArgs>(args?: SelectSubset<T, OfferCommentFindFirstArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentFindFirstOrThrowArgs} args - Arguments to find a OfferComment
     * @example
     * // Get one OfferComment
     * const offerComment = await prisma.offerComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferComments
     * const offerComments = await prisma.offerComment.findMany()
     * 
     * // Get first 10 OfferComments
     * const offerComments = await prisma.offerComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerCommentWithIdOnly = await prisma.offerComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferCommentFindManyArgs>(args?: SelectSubset<T, OfferCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferComment.
     * @param {OfferCommentCreateArgs} args - Arguments to create a OfferComment.
     * @example
     * // Create one OfferComment
     * const OfferComment = await prisma.offerComment.create({
     *   data: {
     *     // ... data to create a OfferComment
     *   }
     * })
     * 
     */
    create<T extends OfferCommentCreateArgs>(args: SelectSubset<T, OfferCommentCreateArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferComments.
     * @param {OfferCommentCreateManyArgs} args - Arguments to create many OfferComments.
     * @example
     * // Create many OfferComments
     * const offerComment = await prisma.offerComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCommentCreateManyArgs>(args?: SelectSubset<T, OfferCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferComments and returns the data saved in the database.
     * @param {OfferCommentCreateManyAndReturnArgs} args - Arguments to create many OfferComments.
     * @example
     * // Create many OfferComments
     * const offerComment = await prisma.offerComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferComments and only return the `id`
     * const offerCommentWithIdOnly = await prisma.offerComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferComment.
     * @param {OfferCommentDeleteArgs} args - Arguments to delete one OfferComment.
     * @example
     * // Delete one OfferComment
     * const OfferComment = await prisma.offerComment.delete({
     *   where: {
     *     // ... filter to delete one OfferComment
     *   }
     * })
     * 
     */
    delete<T extends OfferCommentDeleteArgs>(args: SelectSubset<T, OfferCommentDeleteArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferComment.
     * @param {OfferCommentUpdateArgs} args - Arguments to update one OfferComment.
     * @example
     * // Update one OfferComment
     * const offerComment = await prisma.offerComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferCommentUpdateArgs>(args: SelectSubset<T, OfferCommentUpdateArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferComments.
     * @param {OfferCommentDeleteManyArgs} args - Arguments to filter OfferComments to delete.
     * @example
     * // Delete a few OfferComments
     * const { count } = await prisma.offerComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferCommentDeleteManyArgs>(args?: SelectSubset<T, OfferCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferComments
     * const offerComment = await prisma.offerComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferCommentUpdateManyArgs>(args: SelectSubset<T, OfferCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferComments and returns the data updated in the database.
     * @param {OfferCommentUpdateManyAndReturnArgs} args - Arguments to update many OfferComments.
     * @example
     * // Update many OfferComments
     * const offerComment = await prisma.offerComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferComments and only return the `id`
     * const offerCommentWithIdOnly = await prisma.offerComment.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferComment.
     * @param {OfferCommentUpsertArgs} args - Arguments to update or create a OfferComment.
     * @example
     * // Update or create a OfferComment
     * const offerComment = await prisma.offerComment.upsert({
     *   create: {
     *     // ... data to create a OfferComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferComment we want to update
     *   }
     * })
     */
    upsert<T extends OfferCommentUpsertArgs>(args: SelectSubset<T, OfferCommentUpsertArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentCountArgs} args - Arguments to filter OfferComments to count.
     * @example
     * // Count the number of OfferComments
     * const count = await prisma.offerComment.count({
     *   where: {
     *     // ... the filter for the OfferComments we want to count
     *   }
     * })
    **/
    count<T extends OfferCommentCountArgs>(
      args?: Subset<T, OfferCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferCommentAggregateArgs>(args: Subset<T, OfferCommentAggregateArgs>): Prisma.PrismaPromise<GetOfferCommentAggregateType<T>>

    /**
     * Group by OfferComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCommentGroupByArgs} args - Group by arguments.
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
      T extends OfferCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferCommentGroupByArgs['orderBy'] }
        : { orderBy?: OfferCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferComment model
   */
  readonly fields: OfferCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chats<T extends OfferComment$chatsArgs<ExtArgs> = {}>(args?: Subset<T, OfferComment$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfferComment model
   */
  interface OfferCommentFieldRefs {
    readonly id: FieldRef<"OfferComment", 'String'>
    readonly createdAt: FieldRef<"OfferComment", 'DateTime'>
    readonly updatedAt: FieldRef<"OfferComment", 'DateTime'>
    readonly comment: FieldRef<"OfferComment", 'String'>
    readonly authorId: FieldRef<"OfferComment", 'String'>
    readonly offerId: FieldRef<"OfferComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfferComment findUnique
   */
  export type OfferCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * Filter, which OfferComment to fetch.
     */
    where: OfferCommentWhereUniqueInput
  }

  /**
   * OfferComment findUniqueOrThrow
   */
  export type OfferCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * Filter, which OfferComment to fetch.
     */
    where: OfferCommentWhereUniqueInput
  }

  /**
   * OfferComment findFirst
   */
  export type OfferCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * Filter, which OfferComment to fetch.
     */
    where?: OfferCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferComments to fetch.
     */
    orderBy?: OfferCommentOrderByWithRelationInput | OfferCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferComments.
     */
    cursor?: OfferCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferComments.
     */
    distinct?: OfferCommentScalarFieldEnum | OfferCommentScalarFieldEnum[]
  }

  /**
   * OfferComment findFirstOrThrow
   */
  export type OfferCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * Filter, which OfferComment to fetch.
     */
    where?: OfferCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferComments to fetch.
     */
    orderBy?: OfferCommentOrderByWithRelationInput | OfferCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferComments.
     */
    cursor?: OfferCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferComments.
     */
    distinct?: OfferCommentScalarFieldEnum | OfferCommentScalarFieldEnum[]
  }

  /**
   * OfferComment findMany
   */
  export type OfferCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * Filter, which OfferComments to fetch.
     */
    where?: OfferCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferComments to fetch.
     */
    orderBy?: OfferCommentOrderByWithRelationInput | OfferCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferComments.
     */
    cursor?: OfferCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferComments.
     */
    skip?: number
    distinct?: OfferCommentScalarFieldEnum | OfferCommentScalarFieldEnum[]
  }

  /**
   * OfferComment create
   */
  export type OfferCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferComment.
     */
    data: XOR<OfferCommentCreateInput, OfferCommentUncheckedCreateInput>
  }

  /**
   * OfferComment createMany
   */
  export type OfferCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferComments.
     */
    data: OfferCommentCreateManyInput | OfferCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferComment createManyAndReturn
   */
  export type OfferCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * The data used to create many OfferComments.
     */
    data: OfferCommentCreateManyInput | OfferCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferComment update
   */
  export type OfferCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferComment.
     */
    data: XOR<OfferCommentUpdateInput, OfferCommentUncheckedUpdateInput>
    /**
     * Choose, which OfferComment to update.
     */
    where: OfferCommentWhereUniqueInput
  }

  /**
   * OfferComment updateMany
   */
  export type OfferCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferComments.
     */
    data: XOR<OfferCommentUpdateManyMutationInput, OfferCommentUncheckedUpdateManyInput>
    /**
     * Filter which OfferComments to update
     */
    where?: OfferCommentWhereInput
    /**
     * Limit how many OfferComments to update.
     */
    limit?: number
  }

  /**
   * OfferComment updateManyAndReturn
   */
  export type OfferCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * The data used to update OfferComments.
     */
    data: XOR<OfferCommentUpdateManyMutationInput, OfferCommentUncheckedUpdateManyInput>
    /**
     * Filter which OfferComments to update
     */
    where?: OfferCommentWhereInput
    /**
     * Limit how many OfferComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferComment upsert
   */
  export type OfferCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferComment to update in case it exists.
     */
    where: OfferCommentWhereUniqueInput
    /**
     * In case the OfferComment found by the `where` argument doesn't exist, create a new OfferComment with this data.
     */
    create: XOR<OfferCommentCreateInput, OfferCommentUncheckedCreateInput>
    /**
     * In case the OfferComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferCommentUpdateInput, OfferCommentUncheckedUpdateInput>
  }

  /**
   * OfferComment delete
   */
  export type OfferCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    /**
     * Filter which OfferComment to delete.
     */
    where: OfferCommentWhereUniqueInput
  }

  /**
   * OfferComment deleteMany
   */
  export type OfferCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferComments to delete
     */
    where?: OfferCommentWhereInput
    /**
     * Limit how many OfferComments to delete.
     */
    limit?: number
  }

  /**
   * OfferComment.chats
   */
  export type OfferComment$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * OfferComment without action
   */
  export type OfferCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
  }


  /**
   * Model OfferPublishSchedule
   */

  export type AggregateOfferPublishSchedule = {
    _count: OfferPublishScheduleCountAggregateOutputType | null
    _min: OfferPublishScheduleMinAggregateOutputType | null
    _max: OfferPublishScheduleMaxAggregateOutputType | null
  }

  export type OfferPublishScheduleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dateTime: Date | null
    status: $Enums.OfferStatuses | null
    offerId: string | null
  }

  export type OfferPublishScheduleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dateTime: Date | null
    status: $Enums.OfferStatuses | null
    offerId: string | null
  }

  export type OfferPublishScheduleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    dateTime: number
    status: number
    offerId: number
    _all: number
  }


  export type OfferPublishScheduleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    dateTime?: true
    status?: true
    offerId?: true
  }

  export type OfferPublishScheduleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    dateTime?: true
    status?: true
    offerId?: true
  }

  export type OfferPublishScheduleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    dateTime?: true
    status?: true
    offerId?: true
    _all?: true
  }

  export type OfferPublishScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferPublishSchedule to aggregate.
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPublishSchedules to fetch.
     */
    orderBy?: OfferPublishScheduleOrderByWithRelationInput | OfferPublishScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferPublishScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPublishSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPublishSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferPublishSchedules
    **/
    _count?: true | OfferPublishScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferPublishScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferPublishScheduleMaxAggregateInputType
  }

  export type GetOfferPublishScheduleAggregateType<T extends OfferPublishScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferPublishSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferPublishSchedule[P]>
      : GetScalarType<T[P], AggregateOfferPublishSchedule[P]>
  }




  export type OfferPublishScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferPublishScheduleWhereInput
    orderBy?: OfferPublishScheduleOrderByWithAggregationInput | OfferPublishScheduleOrderByWithAggregationInput[]
    by: OfferPublishScheduleScalarFieldEnum[] | OfferPublishScheduleScalarFieldEnum
    having?: OfferPublishScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferPublishScheduleCountAggregateInputType | true
    _min?: OfferPublishScheduleMinAggregateInputType
    _max?: OfferPublishScheduleMaxAggregateInputType
  }

  export type OfferPublishScheduleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    dateTime: Date
    status: $Enums.OfferStatuses
    offerId: string
    _count: OfferPublishScheduleCountAggregateOutputType | null
    _min: OfferPublishScheduleMinAggregateOutputType | null
    _max: OfferPublishScheduleMaxAggregateOutputType | null
  }

  type GetOfferPublishScheduleGroupByPayload<T extends OfferPublishScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferPublishScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferPublishScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferPublishScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], OfferPublishScheduleGroupByOutputType[P]>
        }
      >
    >


  export type OfferPublishScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateTime?: boolean
    status?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerPublishSchedule"]>

  export type OfferPublishScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateTime?: boolean
    status?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerPublishSchedule"]>

  export type OfferPublishScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateTime?: boolean
    status?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerPublishSchedule"]>

  export type OfferPublishScheduleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateTime?: boolean
    status?: boolean
    offerId?: boolean
  }

  export type OfferPublishScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "dateTime" | "status" | "offerId", ExtArgs["result"]["offerPublishSchedule"]>
  export type OfferPublishScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type OfferPublishScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type OfferPublishScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $OfferPublishSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferPublishSchedule"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      dateTime: Date
      status: $Enums.OfferStatuses
      offerId: string
    }, ExtArgs["result"]["offerPublishSchedule"]>
    composites: {}
  }

  type OfferPublishScheduleGetPayload<S extends boolean | null | undefined | OfferPublishScheduleDefaultArgs> = $Result.GetResult<Prisma.$OfferPublishSchedulePayload, S>

  type OfferPublishScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferPublishScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferPublishScheduleCountAggregateInputType | true
    }

  export interface OfferPublishScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferPublishSchedule'], meta: { name: 'OfferPublishSchedule' } }
    /**
     * Find zero or one OfferPublishSchedule that matches the filter.
     * @param {OfferPublishScheduleFindUniqueArgs} args - Arguments to find a OfferPublishSchedule
     * @example
     * // Get one OfferPublishSchedule
     * const offerPublishSchedule = await prisma.offerPublishSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferPublishScheduleFindUniqueArgs>(args: SelectSubset<T, OfferPublishScheduleFindUniqueArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferPublishSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferPublishScheduleFindUniqueOrThrowArgs} args - Arguments to find a OfferPublishSchedule
     * @example
     * // Get one OfferPublishSchedule
     * const offerPublishSchedule = await prisma.offerPublishSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferPublishScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferPublishScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferPublishSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleFindFirstArgs} args - Arguments to find a OfferPublishSchedule
     * @example
     * // Get one OfferPublishSchedule
     * const offerPublishSchedule = await prisma.offerPublishSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferPublishScheduleFindFirstArgs>(args?: SelectSubset<T, OfferPublishScheduleFindFirstArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferPublishSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleFindFirstOrThrowArgs} args - Arguments to find a OfferPublishSchedule
     * @example
     * // Get one OfferPublishSchedule
     * const offerPublishSchedule = await prisma.offerPublishSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferPublishScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferPublishScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferPublishSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferPublishSchedules
     * const offerPublishSchedules = await prisma.offerPublishSchedule.findMany()
     * 
     * // Get first 10 OfferPublishSchedules
     * const offerPublishSchedules = await prisma.offerPublishSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerPublishScheduleWithIdOnly = await prisma.offerPublishSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferPublishScheduleFindManyArgs>(args?: SelectSubset<T, OfferPublishScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferPublishSchedule.
     * @param {OfferPublishScheduleCreateArgs} args - Arguments to create a OfferPublishSchedule.
     * @example
     * // Create one OfferPublishSchedule
     * const OfferPublishSchedule = await prisma.offerPublishSchedule.create({
     *   data: {
     *     // ... data to create a OfferPublishSchedule
     *   }
     * })
     * 
     */
    create<T extends OfferPublishScheduleCreateArgs>(args: SelectSubset<T, OfferPublishScheduleCreateArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferPublishSchedules.
     * @param {OfferPublishScheduleCreateManyArgs} args - Arguments to create many OfferPublishSchedules.
     * @example
     * // Create many OfferPublishSchedules
     * const offerPublishSchedule = await prisma.offerPublishSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferPublishScheduleCreateManyArgs>(args?: SelectSubset<T, OfferPublishScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferPublishSchedules and returns the data saved in the database.
     * @param {OfferPublishScheduleCreateManyAndReturnArgs} args - Arguments to create many OfferPublishSchedules.
     * @example
     * // Create many OfferPublishSchedules
     * const offerPublishSchedule = await prisma.offerPublishSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferPublishSchedules and only return the `id`
     * const offerPublishScheduleWithIdOnly = await prisma.offerPublishSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferPublishScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferPublishScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferPublishSchedule.
     * @param {OfferPublishScheduleDeleteArgs} args - Arguments to delete one OfferPublishSchedule.
     * @example
     * // Delete one OfferPublishSchedule
     * const OfferPublishSchedule = await prisma.offerPublishSchedule.delete({
     *   where: {
     *     // ... filter to delete one OfferPublishSchedule
     *   }
     * })
     * 
     */
    delete<T extends OfferPublishScheduleDeleteArgs>(args: SelectSubset<T, OfferPublishScheduleDeleteArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferPublishSchedule.
     * @param {OfferPublishScheduleUpdateArgs} args - Arguments to update one OfferPublishSchedule.
     * @example
     * // Update one OfferPublishSchedule
     * const offerPublishSchedule = await prisma.offerPublishSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferPublishScheduleUpdateArgs>(args: SelectSubset<T, OfferPublishScheduleUpdateArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferPublishSchedules.
     * @param {OfferPublishScheduleDeleteManyArgs} args - Arguments to filter OfferPublishSchedules to delete.
     * @example
     * // Delete a few OfferPublishSchedules
     * const { count } = await prisma.offerPublishSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferPublishScheduleDeleteManyArgs>(args?: SelectSubset<T, OfferPublishScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferPublishSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferPublishSchedules
     * const offerPublishSchedule = await prisma.offerPublishSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferPublishScheduleUpdateManyArgs>(args: SelectSubset<T, OfferPublishScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferPublishSchedules and returns the data updated in the database.
     * @param {OfferPublishScheduleUpdateManyAndReturnArgs} args - Arguments to update many OfferPublishSchedules.
     * @example
     * // Update many OfferPublishSchedules
     * const offerPublishSchedule = await prisma.offerPublishSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferPublishSchedules and only return the `id`
     * const offerPublishScheduleWithIdOnly = await prisma.offerPublishSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferPublishScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferPublishScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferPublishSchedule.
     * @param {OfferPublishScheduleUpsertArgs} args - Arguments to update or create a OfferPublishSchedule.
     * @example
     * // Update or create a OfferPublishSchedule
     * const offerPublishSchedule = await prisma.offerPublishSchedule.upsert({
     *   create: {
     *     // ... data to create a OfferPublishSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferPublishSchedule we want to update
     *   }
     * })
     */
    upsert<T extends OfferPublishScheduleUpsertArgs>(args: SelectSubset<T, OfferPublishScheduleUpsertArgs<ExtArgs>>): Prisma__OfferPublishScheduleClient<$Result.GetResult<Prisma.$OfferPublishSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferPublishSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleCountArgs} args - Arguments to filter OfferPublishSchedules to count.
     * @example
     * // Count the number of OfferPublishSchedules
     * const count = await prisma.offerPublishSchedule.count({
     *   where: {
     *     // ... the filter for the OfferPublishSchedules we want to count
     *   }
     * })
    **/
    count<T extends OfferPublishScheduleCountArgs>(
      args?: Subset<T, OfferPublishScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferPublishScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferPublishSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferPublishScheduleAggregateArgs>(args: Subset<T, OfferPublishScheduleAggregateArgs>): Prisma.PrismaPromise<GetOfferPublishScheduleAggregateType<T>>

    /**
     * Group by OfferPublishSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferPublishScheduleGroupByArgs} args - Group by arguments.
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
      T extends OfferPublishScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferPublishScheduleGroupByArgs['orderBy'] }
        : { orderBy?: OfferPublishScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferPublishScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferPublishScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferPublishSchedule model
   */
  readonly fields: OfferPublishScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferPublishSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferPublishScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfferPublishSchedule model
   */
  interface OfferPublishScheduleFieldRefs {
    readonly id: FieldRef<"OfferPublishSchedule", 'String'>
    readonly createdAt: FieldRef<"OfferPublishSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"OfferPublishSchedule", 'DateTime'>
    readonly dateTime: FieldRef<"OfferPublishSchedule", 'DateTime'>
    readonly status: FieldRef<"OfferPublishSchedule", 'OfferStatuses'>
    readonly offerId: FieldRef<"OfferPublishSchedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfferPublishSchedule findUnique
   */
  export type OfferPublishScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * Filter, which OfferPublishSchedule to fetch.
     */
    where: OfferPublishScheduleWhereUniqueInput
  }

  /**
   * OfferPublishSchedule findUniqueOrThrow
   */
  export type OfferPublishScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * Filter, which OfferPublishSchedule to fetch.
     */
    where: OfferPublishScheduleWhereUniqueInput
  }

  /**
   * OfferPublishSchedule findFirst
   */
  export type OfferPublishScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * Filter, which OfferPublishSchedule to fetch.
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPublishSchedules to fetch.
     */
    orderBy?: OfferPublishScheduleOrderByWithRelationInput | OfferPublishScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferPublishSchedules.
     */
    cursor?: OfferPublishScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPublishSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPublishSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferPublishSchedules.
     */
    distinct?: OfferPublishScheduleScalarFieldEnum | OfferPublishScheduleScalarFieldEnum[]
  }

  /**
   * OfferPublishSchedule findFirstOrThrow
   */
  export type OfferPublishScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * Filter, which OfferPublishSchedule to fetch.
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPublishSchedules to fetch.
     */
    orderBy?: OfferPublishScheduleOrderByWithRelationInput | OfferPublishScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferPublishSchedules.
     */
    cursor?: OfferPublishScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPublishSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPublishSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferPublishSchedules.
     */
    distinct?: OfferPublishScheduleScalarFieldEnum | OfferPublishScheduleScalarFieldEnum[]
  }

  /**
   * OfferPublishSchedule findMany
   */
  export type OfferPublishScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * Filter, which OfferPublishSchedules to fetch.
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferPublishSchedules to fetch.
     */
    orderBy?: OfferPublishScheduleOrderByWithRelationInput | OfferPublishScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferPublishSchedules.
     */
    cursor?: OfferPublishScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferPublishSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferPublishSchedules.
     */
    skip?: number
    distinct?: OfferPublishScheduleScalarFieldEnum | OfferPublishScheduleScalarFieldEnum[]
  }

  /**
   * OfferPublishSchedule create
   */
  export type OfferPublishScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferPublishSchedule.
     */
    data: XOR<OfferPublishScheduleCreateInput, OfferPublishScheduleUncheckedCreateInput>
  }

  /**
   * OfferPublishSchedule createMany
   */
  export type OfferPublishScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferPublishSchedules.
     */
    data: OfferPublishScheduleCreateManyInput | OfferPublishScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferPublishSchedule createManyAndReturn
   */
  export type OfferPublishScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many OfferPublishSchedules.
     */
    data: OfferPublishScheduleCreateManyInput | OfferPublishScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferPublishSchedule update
   */
  export type OfferPublishScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferPublishSchedule.
     */
    data: XOR<OfferPublishScheduleUpdateInput, OfferPublishScheduleUncheckedUpdateInput>
    /**
     * Choose, which OfferPublishSchedule to update.
     */
    where: OfferPublishScheduleWhereUniqueInput
  }

  /**
   * OfferPublishSchedule updateMany
   */
  export type OfferPublishScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferPublishSchedules.
     */
    data: XOR<OfferPublishScheduleUpdateManyMutationInput, OfferPublishScheduleUncheckedUpdateManyInput>
    /**
     * Filter which OfferPublishSchedules to update
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * Limit how many OfferPublishSchedules to update.
     */
    limit?: number
  }

  /**
   * OfferPublishSchedule updateManyAndReturn
   */
  export type OfferPublishScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * The data used to update OfferPublishSchedules.
     */
    data: XOR<OfferPublishScheduleUpdateManyMutationInput, OfferPublishScheduleUncheckedUpdateManyInput>
    /**
     * Filter which OfferPublishSchedules to update
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * Limit how many OfferPublishSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferPublishSchedule upsert
   */
  export type OfferPublishScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferPublishSchedule to update in case it exists.
     */
    where: OfferPublishScheduleWhereUniqueInput
    /**
     * In case the OfferPublishSchedule found by the `where` argument doesn't exist, create a new OfferPublishSchedule with this data.
     */
    create: XOR<OfferPublishScheduleCreateInput, OfferPublishScheduleUncheckedCreateInput>
    /**
     * In case the OfferPublishSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferPublishScheduleUpdateInput, OfferPublishScheduleUncheckedUpdateInput>
  }

  /**
   * OfferPublishSchedule delete
   */
  export type OfferPublishScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
    /**
     * Filter which OfferPublishSchedule to delete.
     */
    where: OfferPublishScheduleWhereUniqueInput
  }

  /**
   * OfferPublishSchedule deleteMany
   */
  export type OfferPublishScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferPublishSchedules to delete
     */
    where?: OfferPublishScheduleWhereInput
    /**
     * Limit how many OfferPublishSchedules to delete.
     */
    limit?: number
  }

  /**
   * OfferPublishSchedule without action
   */
  export type OfferPublishScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferPublishSchedule
     */
    select?: OfferPublishScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferPublishSchedule
     */
    omit?: OfferPublishScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferPublishScheduleInclude<ExtArgs> | null
  }


  /**
   * Model OfferImage
   */

  export type AggregateOfferImage = {
    _count: OfferImageCountAggregateOutputType | null
    _avg: OfferImageAvgAggregateOutputType | null
    _sum: OfferImageSumAggregateOutputType | null
    _min: OfferImageMinAggregateOutputType | null
    _max: OfferImageMaxAggregateOutputType | null
  }

  export type OfferImageAvgAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type OfferImageSumAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type OfferImageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    fileSize: number | null
    mimeType: string | null
    url: string | null
    expiredAt: Date | null
    width: number | null
    height: number | null
    offerId: string | null
  }

  export type OfferImageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    fileSize: number | null
    mimeType: string | null
    url: string | null
    expiredAt: Date | null
    width: number | null
    height: number | null
    offerId: string | null
  }

  export type OfferImageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    key: number
    fileSize: number
    mimeType: number
    url: number
    expiredAt: number
    width: number
    height: number
    offerId: number
    _all: number
  }


  export type OfferImageAvgAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
  }

  export type OfferImageSumAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
  }

  export type OfferImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    fileSize?: true
    mimeType?: true
    url?: true
    expiredAt?: true
    width?: true
    height?: true
    offerId?: true
  }

  export type OfferImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    fileSize?: true
    mimeType?: true
    url?: true
    expiredAt?: true
    width?: true
    height?: true
    offerId?: true
  }

  export type OfferImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    fileSize?: true
    mimeType?: true
    url?: true
    expiredAt?: true
    width?: true
    height?: true
    offerId?: true
    _all?: true
  }

  export type OfferImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferImage to aggregate.
     */
    where?: OfferImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferImages to fetch.
     */
    orderBy?: OfferImageOrderByWithRelationInput | OfferImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferImages
    **/
    _count?: true | OfferImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferImageMaxAggregateInputType
  }

  export type GetOfferImageAggregateType<T extends OfferImageAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferImage[P]>
      : GetScalarType<T[P], AggregateOfferImage[P]>
  }




  export type OfferImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferImageWhereInput
    orderBy?: OfferImageOrderByWithAggregationInput | OfferImageOrderByWithAggregationInput[]
    by: OfferImageScalarFieldEnum[] | OfferImageScalarFieldEnum
    having?: OfferImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferImageCountAggregateInputType | true
    _avg?: OfferImageAvgAggregateInputType
    _sum?: OfferImageSumAggregateInputType
    _min?: OfferImageMinAggregateInputType
    _max?: OfferImageMaxAggregateInputType
  }

  export type OfferImageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date
    width: number
    height: number
    offerId: string
    _count: OfferImageCountAggregateOutputType | null
    _avg: OfferImageAvgAggregateOutputType | null
    _sum: OfferImageSumAggregateOutputType | null
    _min: OfferImageMinAggregateOutputType | null
    _max: OfferImageMaxAggregateOutputType | null
  }

  type GetOfferImageGroupByPayload<T extends OfferImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferImageGroupByOutputType[P]>
            : GetScalarType<T[P], OfferImageGroupByOutputType[P]>
        }
      >
    >


  export type OfferImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    fileSize?: boolean
    mimeType?: boolean
    url?: boolean
    expiredAt?: boolean
    width?: boolean
    height?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerImage"]>

  export type OfferImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    fileSize?: boolean
    mimeType?: boolean
    url?: boolean
    expiredAt?: boolean
    width?: boolean
    height?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerImage"]>

  export type OfferImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    fileSize?: boolean
    mimeType?: boolean
    url?: boolean
    expiredAt?: boolean
    width?: boolean
    height?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerImage"]>

  export type OfferImageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    fileSize?: boolean
    mimeType?: boolean
    url?: boolean
    expiredAt?: boolean
    width?: boolean
    height?: boolean
    offerId?: boolean
  }

  export type OfferImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "key" | "fileSize" | "mimeType" | "url" | "expiredAt" | "width" | "height" | "offerId", ExtArgs["result"]["offerImage"]>
  export type OfferImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type OfferImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type OfferImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $OfferImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferImage"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      key: string
      fileSize: number
      mimeType: string
      url: string
      expiredAt: Date
      width: number
      height: number
      offerId: string
    }, ExtArgs["result"]["offerImage"]>
    composites: {}
  }

  type OfferImageGetPayload<S extends boolean | null | undefined | OfferImageDefaultArgs> = $Result.GetResult<Prisma.$OfferImagePayload, S>

  type OfferImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferImageCountAggregateInputType | true
    }

  export interface OfferImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferImage'], meta: { name: 'OfferImage' } }
    /**
     * Find zero or one OfferImage that matches the filter.
     * @param {OfferImageFindUniqueArgs} args - Arguments to find a OfferImage
     * @example
     * // Get one OfferImage
     * const offerImage = await prisma.offerImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferImageFindUniqueArgs>(args: SelectSubset<T, OfferImageFindUniqueArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferImageFindUniqueOrThrowArgs} args - Arguments to find a OfferImage
     * @example
     * // Get one OfferImage
     * const offerImage = await prisma.offerImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferImageFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageFindFirstArgs} args - Arguments to find a OfferImage
     * @example
     * // Get one OfferImage
     * const offerImage = await prisma.offerImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferImageFindFirstArgs>(args?: SelectSubset<T, OfferImageFindFirstArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageFindFirstOrThrowArgs} args - Arguments to find a OfferImage
     * @example
     * // Get one OfferImage
     * const offerImage = await prisma.offerImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferImageFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferImages
     * const offerImages = await prisma.offerImage.findMany()
     * 
     * // Get first 10 OfferImages
     * const offerImages = await prisma.offerImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerImageWithIdOnly = await prisma.offerImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferImageFindManyArgs>(args?: SelectSubset<T, OfferImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferImage.
     * @param {OfferImageCreateArgs} args - Arguments to create a OfferImage.
     * @example
     * // Create one OfferImage
     * const OfferImage = await prisma.offerImage.create({
     *   data: {
     *     // ... data to create a OfferImage
     *   }
     * })
     * 
     */
    create<T extends OfferImageCreateArgs>(args: SelectSubset<T, OfferImageCreateArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferImages.
     * @param {OfferImageCreateManyArgs} args - Arguments to create many OfferImages.
     * @example
     * // Create many OfferImages
     * const offerImage = await prisma.offerImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferImageCreateManyArgs>(args?: SelectSubset<T, OfferImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferImages and returns the data saved in the database.
     * @param {OfferImageCreateManyAndReturnArgs} args - Arguments to create many OfferImages.
     * @example
     * // Create many OfferImages
     * const offerImage = await prisma.offerImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferImages and only return the `id`
     * const offerImageWithIdOnly = await prisma.offerImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferImageCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferImage.
     * @param {OfferImageDeleteArgs} args - Arguments to delete one OfferImage.
     * @example
     * // Delete one OfferImage
     * const OfferImage = await prisma.offerImage.delete({
     *   where: {
     *     // ... filter to delete one OfferImage
     *   }
     * })
     * 
     */
    delete<T extends OfferImageDeleteArgs>(args: SelectSubset<T, OfferImageDeleteArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferImage.
     * @param {OfferImageUpdateArgs} args - Arguments to update one OfferImage.
     * @example
     * // Update one OfferImage
     * const offerImage = await prisma.offerImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferImageUpdateArgs>(args: SelectSubset<T, OfferImageUpdateArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferImages.
     * @param {OfferImageDeleteManyArgs} args - Arguments to filter OfferImages to delete.
     * @example
     * // Delete a few OfferImages
     * const { count } = await prisma.offerImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferImageDeleteManyArgs>(args?: SelectSubset<T, OfferImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferImages
     * const offerImage = await prisma.offerImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferImageUpdateManyArgs>(args: SelectSubset<T, OfferImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferImages and returns the data updated in the database.
     * @param {OfferImageUpdateManyAndReturnArgs} args - Arguments to update many OfferImages.
     * @example
     * // Update many OfferImages
     * const offerImage = await prisma.offerImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferImages and only return the `id`
     * const offerImageWithIdOnly = await prisma.offerImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferImageUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferImage.
     * @param {OfferImageUpsertArgs} args - Arguments to update or create a OfferImage.
     * @example
     * // Update or create a OfferImage
     * const offerImage = await prisma.offerImage.upsert({
     *   create: {
     *     // ... data to create a OfferImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferImage we want to update
     *   }
     * })
     */
    upsert<T extends OfferImageUpsertArgs>(args: SelectSubset<T, OfferImageUpsertArgs<ExtArgs>>): Prisma__OfferImageClient<$Result.GetResult<Prisma.$OfferImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageCountArgs} args - Arguments to filter OfferImages to count.
     * @example
     * // Count the number of OfferImages
     * const count = await prisma.offerImage.count({
     *   where: {
     *     // ... the filter for the OfferImages we want to count
     *   }
     * })
    **/
    count<T extends OfferImageCountArgs>(
      args?: Subset<T, OfferImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferImageAggregateArgs>(args: Subset<T, OfferImageAggregateArgs>): Prisma.PrismaPromise<GetOfferImageAggregateType<T>>

    /**
     * Group by OfferImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferImageGroupByArgs} args - Group by arguments.
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
      T extends OfferImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferImageGroupByArgs['orderBy'] }
        : { orderBy?: OfferImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferImage model
   */
  readonly fields: OfferImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfferImage model
   */
  interface OfferImageFieldRefs {
    readonly id: FieldRef<"OfferImage", 'String'>
    readonly createdAt: FieldRef<"OfferImage", 'DateTime'>
    readonly updatedAt: FieldRef<"OfferImage", 'DateTime'>
    readonly key: FieldRef<"OfferImage", 'String'>
    readonly fileSize: FieldRef<"OfferImage", 'Float'>
    readonly mimeType: FieldRef<"OfferImage", 'String'>
    readonly url: FieldRef<"OfferImage", 'String'>
    readonly expiredAt: FieldRef<"OfferImage", 'DateTime'>
    readonly width: FieldRef<"OfferImage", 'Float'>
    readonly height: FieldRef<"OfferImage", 'Float'>
    readonly offerId: FieldRef<"OfferImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfferImage findUnique
   */
  export type OfferImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * Filter, which OfferImage to fetch.
     */
    where: OfferImageWhereUniqueInput
  }

  /**
   * OfferImage findUniqueOrThrow
   */
  export type OfferImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * Filter, which OfferImage to fetch.
     */
    where: OfferImageWhereUniqueInput
  }

  /**
   * OfferImage findFirst
   */
  export type OfferImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * Filter, which OfferImage to fetch.
     */
    where?: OfferImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferImages to fetch.
     */
    orderBy?: OfferImageOrderByWithRelationInput | OfferImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferImages.
     */
    cursor?: OfferImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferImages.
     */
    distinct?: OfferImageScalarFieldEnum | OfferImageScalarFieldEnum[]
  }

  /**
   * OfferImage findFirstOrThrow
   */
  export type OfferImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * Filter, which OfferImage to fetch.
     */
    where?: OfferImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferImages to fetch.
     */
    orderBy?: OfferImageOrderByWithRelationInput | OfferImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferImages.
     */
    cursor?: OfferImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferImages.
     */
    distinct?: OfferImageScalarFieldEnum | OfferImageScalarFieldEnum[]
  }

  /**
   * OfferImage findMany
   */
  export type OfferImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * Filter, which OfferImages to fetch.
     */
    where?: OfferImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferImages to fetch.
     */
    orderBy?: OfferImageOrderByWithRelationInput | OfferImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferImages.
     */
    cursor?: OfferImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferImages.
     */
    skip?: number
    distinct?: OfferImageScalarFieldEnum | OfferImageScalarFieldEnum[]
  }

  /**
   * OfferImage create
   */
  export type OfferImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferImage.
     */
    data: XOR<OfferImageCreateInput, OfferImageUncheckedCreateInput>
  }

  /**
   * OfferImage createMany
   */
  export type OfferImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferImages.
     */
    data: OfferImageCreateManyInput | OfferImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferImage createManyAndReturn
   */
  export type OfferImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * The data used to create many OfferImages.
     */
    data: OfferImageCreateManyInput | OfferImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferImage update
   */
  export type OfferImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferImage.
     */
    data: XOR<OfferImageUpdateInput, OfferImageUncheckedUpdateInput>
    /**
     * Choose, which OfferImage to update.
     */
    where: OfferImageWhereUniqueInput
  }

  /**
   * OfferImage updateMany
   */
  export type OfferImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferImages.
     */
    data: XOR<OfferImageUpdateManyMutationInput, OfferImageUncheckedUpdateManyInput>
    /**
     * Filter which OfferImages to update
     */
    where?: OfferImageWhereInput
    /**
     * Limit how many OfferImages to update.
     */
    limit?: number
  }

  /**
   * OfferImage updateManyAndReturn
   */
  export type OfferImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * The data used to update OfferImages.
     */
    data: XOR<OfferImageUpdateManyMutationInput, OfferImageUncheckedUpdateManyInput>
    /**
     * Filter which OfferImages to update
     */
    where?: OfferImageWhereInput
    /**
     * Limit how many OfferImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferImage upsert
   */
  export type OfferImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferImage to update in case it exists.
     */
    where: OfferImageWhereUniqueInput
    /**
     * In case the OfferImage found by the `where` argument doesn't exist, create a new OfferImage with this data.
     */
    create: XOR<OfferImageCreateInput, OfferImageUncheckedCreateInput>
    /**
     * In case the OfferImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferImageUpdateInput, OfferImageUncheckedUpdateInput>
  }

  /**
   * OfferImage delete
   */
  export type OfferImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
    /**
     * Filter which OfferImage to delete.
     */
    where: OfferImageWhereUniqueInput
  }

  /**
   * OfferImage deleteMany
   */
  export type OfferImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferImages to delete
     */
    where?: OfferImageWhereInput
    /**
     * Limit how many OfferImages to delete.
     */
    limit?: number
  }

  /**
   * OfferImage without action
   */
  export type OfferImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferImage
     */
    select?: OfferImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferImage
     */
    omit?: OfferImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferImageInclude<ExtArgs> | null
  }


  /**
   * Model OfferDiscount
   */

  export type AggregateOfferDiscount = {
    _count: OfferDiscountCountAggregateOutputType | null
    _avg: OfferDiscountAvgAggregateOutputType | null
    _sum: OfferDiscountSumAggregateOutputType | null
    _min: OfferDiscountMinAggregateOutputType | null
    _max: OfferDiscountMaxAggregateOutputType | null
  }

  export type OfferDiscountAvgAggregateOutputType = {
    discount: number | null
  }

  export type OfferDiscountSumAggregateOutputType = {
    discount: number | null
  }

  export type OfferDiscountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discount: number | null
    type: $Enums.OfferDiscountTypes | null
    status: $Enums.OfferDiscountStatuses | null
    offerId: string | null
  }

  export type OfferDiscountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discount: number | null
    type: $Enums.OfferDiscountTypes | null
    status: $Enums.OfferDiscountStatuses | null
    offerId: string | null
  }

  export type OfferDiscountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    discount: number
    type: number
    status: number
    offerId: number
    _all: number
  }


  export type OfferDiscountAvgAggregateInputType = {
    discount?: true
  }

  export type OfferDiscountSumAggregateInputType = {
    discount?: true
  }

  export type OfferDiscountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    discount?: true
    type?: true
    status?: true
    offerId?: true
  }

  export type OfferDiscountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    discount?: true
    type?: true
    status?: true
    offerId?: true
  }

  export type OfferDiscountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    discount?: true
    type?: true
    status?: true
    offerId?: true
    _all?: true
  }

  export type OfferDiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferDiscount to aggregate.
     */
    where?: OfferDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferDiscounts to fetch.
     */
    orderBy?: OfferDiscountOrderByWithRelationInput | OfferDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferDiscounts
    **/
    _count?: true | OfferDiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferDiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferDiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferDiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferDiscountMaxAggregateInputType
  }

  export type GetOfferDiscountAggregateType<T extends OfferDiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferDiscount[P]>
      : GetScalarType<T[P], AggregateOfferDiscount[P]>
  }




  export type OfferDiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferDiscountWhereInput
    orderBy?: OfferDiscountOrderByWithAggregationInput | OfferDiscountOrderByWithAggregationInput[]
    by: OfferDiscountScalarFieldEnum[] | OfferDiscountScalarFieldEnum
    having?: OfferDiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferDiscountCountAggregateInputType | true
    _avg?: OfferDiscountAvgAggregateInputType
    _sum?: OfferDiscountSumAggregateInputType
    _min?: OfferDiscountMinAggregateInputType
    _max?: OfferDiscountMaxAggregateInputType
  }

  export type OfferDiscountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offerId: string
    _count: OfferDiscountCountAggregateOutputType | null
    _avg: OfferDiscountAvgAggregateOutputType | null
    _sum: OfferDiscountSumAggregateOutputType | null
    _min: OfferDiscountMinAggregateOutputType | null
    _max: OfferDiscountMaxAggregateOutputType | null
  }

  type GetOfferDiscountGroupByPayload<T extends OfferDiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferDiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferDiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferDiscountGroupByOutputType[P]>
            : GetScalarType<T[P], OfferDiscountGroupByOutputType[P]>
        }
      >
    >


  export type OfferDiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discount?: boolean
    type?: boolean
    status?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    transactions?: boolean | OfferDiscount$transactionsArgs<ExtArgs>
    actionLogs?: boolean | OfferDiscount$actionLogsArgs<ExtArgs>
    _count?: boolean | OfferDiscountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerDiscount"]>

  export type OfferDiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discount?: boolean
    type?: boolean
    status?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerDiscount"]>

  export type OfferDiscountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discount?: boolean
    type?: boolean
    status?: boolean
    offerId?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerDiscount"]>

  export type OfferDiscountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discount?: boolean
    type?: boolean
    status?: boolean
    offerId?: boolean
  }

  export type OfferDiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "discount" | "type" | "status" | "offerId", ExtArgs["result"]["offerDiscount"]>
  export type OfferDiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    transactions?: boolean | OfferDiscount$transactionsArgs<ExtArgs>
    actionLogs?: boolean | OfferDiscount$actionLogsArgs<ExtArgs>
    _count?: boolean | OfferDiscountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferDiscountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }
  export type OfferDiscountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
  }

  export type $OfferDiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferDiscount"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      actionLogs: Prisma.$ActionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      discount: number
      type: $Enums.OfferDiscountTypes
      status: $Enums.OfferDiscountStatuses
      offerId: string
    }, ExtArgs["result"]["offerDiscount"]>
    composites: {}
  }

  type OfferDiscountGetPayload<S extends boolean | null | undefined | OfferDiscountDefaultArgs> = $Result.GetResult<Prisma.$OfferDiscountPayload, S>

  type OfferDiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferDiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferDiscountCountAggregateInputType | true
    }

  export interface OfferDiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferDiscount'], meta: { name: 'OfferDiscount' } }
    /**
     * Find zero or one OfferDiscount that matches the filter.
     * @param {OfferDiscountFindUniqueArgs} args - Arguments to find a OfferDiscount
     * @example
     * // Get one OfferDiscount
     * const offerDiscount = await prisma.offerDiscount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferDiscountFindUniqueArgs>(args: SelectSubset<T, OfferDiscountFindUniqueArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferDiscount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferDiscountFindUniqueOrThrowArgs} args - Arguments to find a OfferDiscount
     * @example
     * // Get one OfferDiscount
     * const offerDiscount = await prisma.offerDiscount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferDiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferDiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferDiscount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountFindFirstArgs} args - Arguments to find a OfferDiscount
     * @example
     * // Get one OfferDiscount
     * const offerDiscount = await prisma.offerDiscount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferDiscountFindFirstArgs>(args?: SelectSubset<T, OfferDiscountFindFirstArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferDiscount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountFindFirstOrThrowArgs} args - Arguments to find a OfferDiscount
     * @example
     * // Get one OfferDiscount
     * const offerDiscount = await prisma.offerDiscount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferDiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferDiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferDiscounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferDiscounts
     * const offerDiscounts = await prisma.offerDiscount.findMany()
     * 
     * // Get first 10 OfferDiscounts
     * const offerDiscounts = await prisma.offerDiscount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerDiscountWithIdOnly = await prisma.offerDiscount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferDiscountFindManyArgs>(args?: SelectSubset<T, OfferDiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferDiscount.
     * @param {OfferDiscountCreateArgs} args - Arguments to create a OfferDiscount.
     * @example
     * // Create one OfferDiscount
     * const OfferDiscount = await prisma.offerDiscount.create({
     *   data: {
     *     // ... data to create a OfferDiscount
     *   }
     * })
     * 
     */
    create<T extends OfferDiscountCreateArgs>(args: SelectSubset<T, OfferDiscountCreateArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferDiscounts.
     * @param {OfferDiscountCreateManyArgs} args - Arguments to create many OfferDiscounts.
     * @example
     * // Create many OfferDiscounts
     * const offerDiscount = await prisma.offerDiscount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferDiscountCreateManyArgs>(args?: SelectSubset<T, OfferDiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferDiscounts and returns the data saved in the database.
     * @param {OfferDiscountCreateManyAndReturnArgs} args - Arguments to create many OfferDiscounts.
     * @example
     * // Create many OfferDiscounts
     * const offerDiscount = await prisma.offerDiscount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferDiscounts and only return the `id`
     * const offerDiscountWithIdOnly = await prisma.offerDiscount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferDiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferDiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferDiscount.
     * @param {OfferDiscountDeleteArgs} args - Arguments to delete one OfferDiscount.
     * @example
     * // Delete one OfferDiscount
     * const OfferDiscount = await prisma.offerDiscount.delete({
     *   where: {
     *     // ... filter to delete one OfferDiscount
     *   }
     * })
     * 
     */
    delete<T extends OfferDiscountDeleteArgs>(args: SelectSubset<T, OfferDiscountDeleteArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferDiscount.
     * @param {OfferDiscountUpdateArgs} args - Arguments to update one OfferDiscount.
     * @example
     * // Update one OfferDiscount
     * const offerDiscount = await prisma.offerDiscount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferDiscountUpdateArgs>(args: SelectSubset<T, OfferDiscountUpdateArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferDiscounts.
     * @param {OfferDiscountDeleteManyArgs} args - Arguments to filter OfferDiscounts to delete.
     * @example
     * // Delete a few OfferDiscounts
     * const { count } = await prisma.offerDiscount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDiscountDeleteManyArgs>(args?: SelectSubset<T, OfferDiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferDiscounts
     * const offerDiscount = await prisma.offerDiscount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferDiscountUpdateManyArgs>(args: SelectSubset<T, OfferDiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferDiscounts and returns the data updated in the database.
     * @param {OfferDiscountUpdateManyAndReturnArgs} args - Arguments to update many OfferDiscounts.
     * @example
     * // Update many OfferDiscounts
     * const offerDiscount = await prisma.offerDiscount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferDiscounts and only return the `id`
     * const offerDiscountWithIdOnly = await prisma.offerDiscount.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferDiscountUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferDiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferDiscount.
     * @param {OfferDiscountUpsertArgs} args - Arguments to update or create a OfferDiscount.
     * @example
     * // Update or create a OfferDiscount
     * const offerDiscount = await prisma.offerDiscount.upsert({
     *   create: {
     *     // ... data to create a OfferDiscount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferDiscount we want to update
     *   }
     * })
     */
    upsert<T extends OfferDiscountUpsertArgs>(args: SelectSubset<T, OfferDiscountUpsertArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountCountArgs} args - Arguments to filter OfferDiscounts to count.
     * @example
     * // Count the number of OfferDiscounts
     * const count = await prisma.offerDiscount.count({
     *   where: {
     *     // ... the filter for the OfferDiscounts we want to count
     *   }
     * })
    **/
    count<T extends OfferDiscountCountArgs>(
      args?: Subset<T, OfferDiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferDiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferDiscountAggregateArgs>(args: Subset<T, OfferDiscountAggregateArgs>): Prisma.PrismaPromise<GetOfferDiscountAggregateType<T>>

    /**
     * Group by OfferDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferDiscountGroupByArgs} args - Group by arguments.
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
      T extends OfferDiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferDiscountGroupByArgs['orderBy'] }
        : { orderBy?: OfferDiscountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferDiscount model
   */
  readonly fields: OfferDiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferDiscount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferDiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends OfferDiscount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, OfferDiscount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionLogs<T extends OfferDiscount$actionLogsArgs<ExtArgs> = {}>(args?: Subset<T, OfferDiscount$actionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfferDiscount model
   */
  interface OfferDiscountFieldRefs {
    readonly id: FieldRef<"OfferDiscount", 'String'>
    readonly createdAt: FieldRef<"OfferDiscount", 'DateTime'>
    readonly updatedAt: FieldRef<"OfferDiscount", 'DateTime'>
    readonly discount: FieldRef<"OfferDiscount", 'Float'>
    readonly type: FieldRef<"OfferDiscount", 'OfferDiscountTypes'>
    readonly status: FieldRef<"OfferDiscount", 'OfferDiscountStatuses'>
    readonly offerId: FieldRef<"OfferDiscount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfferDiscount findUnique
   */
  export type OfferDiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * Filter, which OfferDiscount to fetch.
     */
    where: OfferDiscountWhereUniqueInput
  }

  /**
   * OfferDiscount findUniqueOrThrow
   */
  export type OfferDiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * Filter, which OfferDiscount to fetch.
     */
    where: OfferDiscountWhereUniqueInput
  }

  /**
   * OfferDiscount findFirst
   */
  export type OfferDiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * Filter, which OfferDiscount to fetch.
     */
    where?: OfferDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferDiscounts to fetch.
     */
    orderBy?: OfferDiscountOrderByWithRelationInput | OfferDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferDiscounts.
     */
    cursor?: OfferDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferDiscounts.
     */
    distinct?: OfferDiscountScalarFieldEnum | OfferDiscountScalarFieldEnum[]
  }

  /**
   * OfferDiscount findFirstOrThrow
   */
  export type OfferDiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * Filter, which OfferDiscount to fetch.
     */
    where?: OfferDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferDiscounts to fetch.
     */
    orderBy?: OfferDiscountOrderByWithRelationInput | OfferDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferDiscounts.
     */
    cursor?: OfferDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferDiscounts.
     */
    distinct?: OfferDiscountScalarFieldEnum | OfferDiscountScalarFieldEnum[]
  }

  /**
   * OfferDiscount findMany
   */
  export type OfferDiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * Filter, which OfferDiscounts to fetch.
     */
    where?: OfferDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferDiscounts to fetch.
     */
    orderBy?: OfferDiscountOrderByWithRelationInput | OfferDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferDiscounts.
     */
    cursor?: OfferDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferDiscounts.
     */
    skip?: number
    distinct?: OfferDiscountScalarFieldEnum | OfferDiscountScalarFieldEnum[]
  }

  /**
   * OfferDiscount create
   */
  export type OfferDiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferDiscount.
     */
    data: XOR<OfferDiscountCreateInput, OfferDiscountUncheckedCreateInput>
  }

  /**
   * OfferDiscount createMany
   */
  export type OfferDiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferDiscounts.
     */
    data: OfferDiscountCreateManyInput | OfferDiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferDiscount createManyAndReturn
   */
  export type OfferDiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * The data used to create many OfferDiscounts.
     */
    data: OfferDiscountCreateManyInput | OfferDiscountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferDiscount update
   */
  export type OfferDiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferDiscount.
     */
    data: XOR<OfferDiscountUpdateInput, OfferDiscountUncheckedUpdateInput>
    /**
     * Choose, which OfferDiscount to update.
     */
    where: OfferDiscountWhereUniqueInput
  }

  /**
   * OfferDiscount updateMany
   */
  export type OfferDiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferDiscounts.
     */
    data: XOR<OfferDiscountUpdateManyMutationInput, OfferDiscountUncheckedUpdateManyInput>
    /**
     * Filter which OfferDiscounts to update
     */
    where?: OfferDiscountWhereInput
    /**
     * Limit how many OfferDiscounts to update.
     */
    limit?: number
  }

  /**
   * OfferDiscount updateManyAndReturn
   */
  export type OfferDiscountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * The data used to update OfferDiscounts.
     */
    data: XOR<OfferDiscountUpdateManyMutationInput, OfferDiscountUncheckedUpdateManyInput>
    /**
     * Filter which OfferDiscounts to update
     */
    where?: OfferDiscountWhereInput
    /**
     * Limit how many OfferDiscounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferDiscount upsert
   */
  export type OfferDiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferDiscount to update in case it exists.
     */
    where: OfferDiscountWhereUniqueInput
    /**
     * In case the OfferDiscount found by the `where` argument doesn't exist, create a new OfferDiscount with this data.
     */
    create: XOR<OfferDiscountCreateInput, OfferDiscountUncheckedCreateInput>
    /**
     * In case the OfferDiscount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferDiscountUpdateInput, OfferDiscountUncheckedUpdateInput>
  }

  /**
   * OfferDiscount delete
   */
  export type OfferDiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    /**
     * Filter which OfferDiscount to delete.
     */
    where: OfferDiscountWhereUniqueInput
  }

  /**
   * OfferDiscount deleteMany
   */
  export type OfferDiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferDiscounts to delete
     */
    where?: OfferDiscountWhereInput
    /**
     * Limit how many OfferDiscounts to delete.
     */
    limit?: number
  }

  /**
   * OfferDiscount.transactions
   */
  export type OfferDiscount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * OfferDiscount.actionLogs
   */
  export type OfferDiscount$actionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    where?: ActionLogWhereInput
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    cursor?: ActionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[]
  }

  /**
   * OfferDiscount without action
   */
  export type OfferDiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
    netAmount: number | null
    fee: number | null
    discount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
    netAmount: number | null
    fee: number | null
    discount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    netAmount: number | null
    fee: number | null
    discount: number | null
    title: string | null
    offerId: string | null
    offerDiscountId: string | null
    payerId: string | null
    status: $Enums.TransactionStatuses | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    netAmount: number | null
    fee: number | null
    discount: number | null
    title: string | null
    offerId: string | null
    offerDiscountId: string | null
    payerId: string | null
    status: $Enums.TransactionStatuses | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: number
    offerId: number
    offerDiscountId: number
    payerId: number
    status: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
    netAmount?: true
    fee?: true
    discount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
    netAmount?: true
    fee?: true
    discount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    netAmount?: true
    fee?: true
    discount?: true
    title?: true
    offerId?: true
    offerDiscountId?: true
    payerId?: true
    status?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    netAmount?: true
    fee?: true
    discount?: true
    title?: true
    offerId?: true
    offerDiscountId?: true
    payerId?: true
    status?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    netAmount?: true
    fee?: true
    discount?: true
    title?: true
    offerId?: true
    offerDiscountId?: true
    payerId?: true
    status?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerId: string
    offerDiscountId: string | null
    payerId: string
    status: $Enums.TransactionStatuses
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    netAmount?: boolean
    fee?: boolean
    discount?: boolean
    title?: boolean
    offerId?: boolean
    offerDiscountId?: boolean
    payerId?: boolean
    status?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    offerDiscount?: boolean | Transaction$offerDiscountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    netAmount?: boolean
    fee?: boolean
    discount?: boolean
    title?: boolean
    offerId?: boolean
    offerDiscountId?: boolean
    payerId?: boolean
    status?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    offerDiscount?: boolean | Transaction$offerDiscountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    netAmount?: boolean
    fee?: boolean
    discount?: boolean
    title?: boolean
    offerId?: boolean
    offerDiscountId?: boolean
    payerId?: boolean
    status?: boolean
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    offerDiscount?: boolean | Transaction$offerDiscountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    netAmount?: boolean
    fee?: boolean
    discount?: boolean
    title?: boolean
    offerId?: boolean
    offerDiscountId?: boolean
    payerId?: boolean
    status?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "amount" | "netAmount" | "fee" | "discount" | "title" | "offerId" | "offerDiscountId" | "payerId" | "status", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    offerDiscount?: boolean | Transaction$offerDiscountArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    offerDiscount?: boolean | Transaction$offerDiscountArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | OfferDefaultArgs<ExtArgs>
    offerDiscount?: boolean | Transaction$offerDiscountArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs>
      offerDiscount: Prisma.$OfferDiscountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      amount: number
      netAmount: number
      fee: number
      discount: number
      title: string
      offerId: string
      offerDiscountId: string | null
      payerId: string
      status: $Enums.TransactionStatuses
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends OfferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfferDefaultArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offerDiscount<T extends Transaction$offerDiscountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$offerDiscountArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly netAmount: FieldRef<"Transaction", 'Float'>
    readonly fee: FieldRef<"Transaction", 'Float'>
    readonly discount: FieldRef<"Transaction", 'Float'>
    readonly title: FieldRef<"Transaction", 'String'>
    readonly offerId: FieldRef<"Transaction", 'String'>
    readonly offerDiscountId: FieldRef<"Transaction", 'String'>
    readonly payerId: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'TransactionStatuses'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.offerDiscount
   */
  export type Transaction$offerDiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    where?: OfferDiscountWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    offerId: string | null
    offerCommentId: string | null
    locationCommentId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    offerId: string | null
    offerCommentId: string | null
    locationCommentId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    offerId: number
    offerCommentId: number
    locationCommentId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    offerId?: true
    offerCommentId?: true
    locationCommentId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    offerId?: true
    offerCommentId?: true
    locationCommentId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    offerId?: true
    offerCommentId?: true
    locationCommentId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    offerId: string | null
    offerCommentId: string | null
    locationCommentId: string | null
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    offerId?: boolean
    offerCommentId?: boolean
    locationCommentId?: boolean
    offer?: boolean | Chat$offerArgs<ExtArgs>
    offerComment?: boolean | Chat$offerCommentArgs<ExtArgs>
    locationComment?: boolean | Chat$locationCommentArgs<ExtArgs>
    chatMembers?: boolean | Chat$chatMembersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    offerId?: boolean
    offerCommentId?: boolean
    locationCommentId?: boolean
    offer?: boolean | Chat$offerArgs<ExtArgs>
    offerComment?: boolean | Chat$offerCommentArgs<ExtArgs>
    locationComment?: boolean | Chat$locationCommentArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    offerId?: boolean
    offerCommentId?: boolean
    locationCommentId?: boolean
    offer?: boolean | Chat$offerArgs<ExtArgs>
    offerComment?: boolean | Chat$offerCommentArgs<ExtArgs>
    locationComment?: boolean | Chat$locationCommentArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    offerId?: boolean
    offerCommentId?: boolean
    locationCommentId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "offerId" | "offerCommentId" | "locationCommentId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | Chat$offerArgs<ExtArgs>
    offerComment?: boolean | Chat$offerCommentArgs<ExtArgs>
    locationComment?: boolean | Chat$locationCommentArgs<ExtArgs>
    chatMembers?: boolean | Chat$chatMembersArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | Chat$offerArgs<ExtArgs>
    offerComment?: boolean | Chat$offerCommentArgs<ExtArgs>
    locationComment?: boolean | Chat$locationCommentArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | Chat$offerArgs<ExtArgs>
    offerComment?: boolean | Chat$offerCommentArgs<ExtArgs>
    locationComment?: boolean | Chat$locationCommentArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs> | null
      offerComment: Prisma.$OfferCommentPayload<ExtArgs> | null
      locationComment: Prisma.$LocationCommentPayload<ExtArgs> | null
      chatMembers: Prisma.$ChatMemberPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      offerId: string | null
      offerCommentId: string | null
      locationCommentId: string | null
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
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
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends Chat$offerArgs<ExtArgs> = {}>(args?: Subset<T, Chat$offerArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    offerComment<T extends Chat$offerCommentArgs<ExtArgs> = {}>(args?: Subset<T, Chat$offerCommentArgs<ExtArgs>>): Prisma__OfferCommentClient<$Result.GetResult<Prisma.$OfferCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locationComment<T extends Chat$locationCommentArgs<ExtArgs> = {}>(args?: Subset<T, Chat$locationCommentArgs<ExtArgs>>): Prisma__LocationCommentClient<$Result.GetResult<Prisma.$LocationCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatMembers<T extends Chat$chatMembersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$chatMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
    readonly name: FieldRef<"Chat", 'String'>
    readonly offerId: FieldRef<"Chat", 'String'>
    readonly offerCommentId: FieldRef<"Chat", 'String'>
    readonly locationCommentId: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.offer
   */
  export type Chat$offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
  }

  /**
   * Chat.offerComment
   */
  export type Chat$offerCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferComment
     */
    select?: OfferCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferComment
     */
    omit?: OfferCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferCommentInclude<ExtArgs> | null
    where?: OfferCommentWhereInput
  }

  /**
   * Chat.locationComment
   */
  export type Chat$locationCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationComment
     */
    select?: LocationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationComment
     */
    omit?: LocationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationCommentInclude<ExtArgs> | null
    where?: LocationCommentWhereInput
  }

  /**
   * Chat.chatMembers
   */
  export type Chat$chatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatMember
   */

  export type AggregateChatMember = {
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  export type ChatMemberMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    chatId: string | null
  }

  export type ChatMemberMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    chatId: string | null
  }

  export type ChatMemberCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    chatId: number
    _all: number
  }


  export type ChatMemberMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    chatId?: true
  }

  export type ChatMemberMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    chatId?: true
  }

  export type ChatMemberCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    chatId?: true
    _all?: true
  }

  export type ChatMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMember to aggregate.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMembers
    **/
    _count?: true | ChatMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMemberMaxAggregateInputType
  }

  export type GetChatMemberAggregateType<T extends ChatMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMember[P]>
      : GetScalarType<T[P], AggregateChatMember[P]>
  }




  export type ChatMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithAggregationInput | ChatMemberOrderByWithAggregationInput[]
    by: ChatMemberScalarFieldEnum[] | ChatMemberScalarFieldEnum
    having?: ChatMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMemberCountAggregateInputType | true
    _min?: ChatMemberMinAggregateInputType
    _max?: ChatMemberMaxAggregateInputType
  }

  export type ChatMemberGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    chatId: string
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  type GetChatMemberGroupByPayload<T extends ChatMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    chatId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    chatId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    chatId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    chatId?: boolean
  }

  export type ChatMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "chatId", ExtArgs["result"]["chatMember"]>
  export type ChatMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMember"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      chatId: string
    }, ExtArgs["result"]["chatMember"]>
    composites: {}
  }

  type ChatMemberGetPayload<S extends boolean | null | undefined | ChatMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatMemberPayload, S>

  type ChatMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMemberCountAggregateInputType | true
    }

  export interface ChatMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMember'], meta: { name: 'ChatMember' } }
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
    findUnique<T extends ChatMemberFindUniqueArgs>(args: SelectSubset<T, ChatMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ChatMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ChatMemberFindFirstArgs>(args?: SelectSubset<T, ChatMemberFindFirstArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ChatMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ChatMemberFindManyArgs>(args?: SelectSubset<T, ChatMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ChatMemberCreateArgs>(args: SelectSubset<T, ChatMemberCreateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends ChatMemberCreateManyArgs>(args?: SelectSubset<T, ChatMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends ChatMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ChatMemberDeleteArgs>(args: SelectSubset<T, ChatMemberDeleteArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ChatMemberUpdateArgs>(args: SelectSubset<T, ChatMemberUpdateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends ChatMemberDeleteManyArgs>(args?: SelectSubset<T, ChatMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends ChatMemberUpdateManyArgs>(args: SelectSubset<T, ChatMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends ChatMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ChatMemberUpsertArgs>(args: SelectSubset<T, ChatMemberUpsertArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, ChatMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMemberCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ChatMemberAggregateArgs>(args: Subset<T, ChatMemberAggregateArgs>): Prisma.PrismaPromise<GetChatMemberAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__ChatMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMember model
   */
  interface ChatMemberFieldRefs {
    readonly id: FieldRef<"ChatMember", 'String'>
    readonly createdAt: FieldRef<"ChatMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMember", 'DateTime'>
    readonly userId: FieldRef<"ChatMember", 'String'>
    readonly chatId: FieldRef<"ChatMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMember findUnique
   */
  export type ChatMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findUniqueOrThrow
   */
  export type ChatMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findFirst
   */
  export type ChatMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findFirstOrThrow
   */
  export type ChatMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findMany
   */
  export type ChatMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember create
   */
  export type ChatMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMember.
     */
    data: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
  }

  /**
   * ChatMember createMany
   */
  export type ChatMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMember createManyAndReturn
   */
  export type ChatMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember update
   */
  export type ChatMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMember.
     */
    data: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatMember to update.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember updateMany
   */
  export type ChatMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
  }

  /**
   * ChatMember updateManyAndReturn
   */
  export type ChatMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember upsert
   */
  export type ChatMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMember to update in case it exists.
     */
    where: ChatMemberWhereUniqueInput
    /**
     * In case the ChatMember found by the `where` argument doesn't exist, create a new ChatMember with this data.
     */
    create: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
    /**
     * In case the ChatMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
  }

  /**
   * ChatMember delete
   */
  export type ChatMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatMember to delete.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember deleteMany
   */
  export type ChatMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to delete
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatMember without action
   */
  export type ChatMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    authorId: string | null
    chatId: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    authorId: string | null
    chatId: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    authorId: number
    chatId: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    authorId?: true
    chatId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    authorId?: true
    chatId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    authorId?: true
    chatId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    text: string
    authorId: string
    chatId: string
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    chatId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    chatId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    chatId?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    authorId?: boolean
    chatId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "text" | "authorId" | "chatId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      text: string
      authorId: string
      chatId: string
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
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
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly text: FieldRef<"ChatMessage", 'String'>
    readonly authorId: FieldRef<"ChatMessage", 'String'>
    readonly chatId: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model ActionLog
   */

  export type AggregateActionLog = {
    _count: ActionLogCountAggregateOutputType | null
    _min: ActionLogMinAggregateOutputType | null
    _max: ActionLogMaxAggregateOutputType | null
  }

  export type ActionLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    offerId: string | null
    locationId: string | null
    offerDiscountId: string | null
    initiatorId: string | null
  }

  export type ActionLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    text: string | null
    offerId: string | null
    locationId: string | null
    offerDiscountId: string | null
    initiatorId: string | null
  }

  export type ActionLogCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    text: number
    offerId: number
    locationId: number
    offerDiscountId: number
    initiatorId: number
    _all: number
  }


  export type ActionLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    offerId?: true
    locationId?: true
    offerDiscountId?: true
    initiatorId?: true
  }

  export type ActionLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    offerId?: true
    locationId?: true
    offerDiscountId?: true
    initiatorId?: true
  }

  export type ActionLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    text?: true
    offerId?: true
    locationId?: true
    offerDiscountId?: true
    initiatorId?: true
    _all?: true
  }

  export type ActionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionLog to aggregate.
     */
    where?: ActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionLogs to fetch.
     */
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionLogs
    **/
    _count?: true | ActionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionLogMaxAggregateInputType
  }

  export type GetActionLogAggregateType<T extends ActionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionLog[P]>
      : GetScalarType<T[P], AggregateActionLog[P]>
  }




  export type ActionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionLogWhereInput
    orderBy?: ActionLogOrderByWithAggregationInput | ActionLogOrderByWithAggregationInput[]
    by: ActionLogScalarFieldEnum[] | ActionLogScalarFieldEnum
    having?: ActionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionLogCountAggregateInputType | true
    _min?: ActionLogMinAggregateInputType
    _max?: ActionLogMaxAggregateInputType
  }

  export type ActionLogGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    text: string
    offerId: string | null
    locationId: string | null
    offerDiscountId: string | null
    initiatorId: string
    _count: ActionLogCountAggregateOutputType | null
    _min: ActionLogMinAggregateOutputType | null
    _max: ActionLogMaxAggregateOutputType | null
  }

  type GetActionLogGroupByPayload<T extends ActionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActionLogGroupByOutputType[P]>
        }
      >
    >


  export type ActionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    offerId?: boolean
    locationId?: boolean
    offerDiscountId?: boolean
    initiatorId?: boolean
    offer?: boolean | ActionLog$offerArgs<ExtArgs>
    location?: boolean | ActionLog$locationArgs<ExtArgs>
    offerDiscount?: boolean | ActionLog$offerDiscountArgs<ExtArgs>
  }, ExtArgs["result"]["actionLog"]>

  export type ActionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    offerId?: boolean
    locationId?: boolean
    offerDiscountId?: boolean
    initiatorId?: boolean
    offer?: boolean | ActionLog$offerArgs<ExtArgs>
    location?: boolean | ActionLog$locationArgs<ExtArgs>
    offerDiscount?: boolean | ActionLog$offerDiscountArgs<ExtArgs>
  }, ExtArgs["result"]["actionLog"]>

  export type ActionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    offerId?: boolean
    locationId?: boolean
    offerDiscountId?: boolean
    initiatorId?: boolean
    offer?: boolean | ActionLog$offerArgs<ExtArgs>
    location?: boolean | ActionLog$locationArgs<ExtArgs>
    offerDiscount?: boolean | ActionLog$offerDiscountArgs<ExtArgs>
  }, ExtArgs["result"]["actionLog"]>

  export type ActionLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean
    offerId?: boolean
    locationId?: boolean
    offerDiscountId?: boolean
    initiatorId?: boolean
  }

  export type ActionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "text" | "offerId" | "locationId" | "offerDiscountId" | "initiatorId", ExtArgs["result"]["actionLog"]>
  export type ActionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | ActionLog$offerArgs<ExtArgs>
    location?: boolean | ActionLog$locationArgs<ExtArgs>
    offerDiscount?: boolean | ActionLog$offerDiscountArgs<ExtArgs>
  }
  export type ActionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | ActionLog$offerArgs<ExtArgs>
    location?: boolean | ActionLog$locationArgs<ExtArgs>
    offerDiscount?: boolean | ActionLog$offerDiscountArgs<ExtArgs>
  }
  export type ActionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offer?: boolean | ActionLog$offerArgs<ExtArgs>
    location?: boolean | ActionLog$locationArgs<ExtArgs>
    offerDiscount?: boolean | ActionLog$offerDiscountArgs<ExtArgs>
  }

  export type $ActionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionLog"
    objects: {
      offer: Prisma.$OfferPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
      offerDiscount: Prisma.$OfferDiscountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      text: string
      offerId: string | null
      locationId: string | null
      offerDiscountId: string | null
      initiatorId: string
    }, ExtArgs["result"]["actionLog"]>
    composites: {}
  }

  type ActionLogGetPayload<S extends boolean | null | undefined | ActionLogDefaultArgs> = $Result.GetResult<Prisma.$ActionLogPayload, S>

  type ActionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionLogCountAggregateInputType | true
    }

  export interface ActionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionLog'], meta: { name: 'ActionLog' } }
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
    findUnique<T extends ActionLogFindUniqueArgs>(args: SelectSubset<T, ActionLogFindUniqueArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ActionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ActionLogFindFirstArgs>(args?: SelectSubset<T, ActionLogFindFirstArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ActionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ActionLogFindManyArgs>(args?: SelectSubset<T, ActionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ActionLogCreateArgs>(args: SelectSubset<T, ActionLogCreateArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends ActionLogCreateManyArgs>(args?: SelectSubset<T, ActionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends ActionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ActionLogDeleteArgs>(args: SelectSubset<T, ActionLogDeleteArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ActionLogUpdateArgs>(args: SelectSubset<T, ActionLogUpdateArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends ActionLogDeleteManyArgs>(args?: SelectSubset<T, ActionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends ActionLogUpdateManyArgs>(args: SelectSubset<T, ActionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends ActionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ActionLogUpsertArgs>(args: SelectSubset<T, ActionLogUpsertArgs<ExtArgs>>): Prisma__ActionLogClient<$Result.GetResult<Prisma.$ActionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, ActionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionLogCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends ActionLogAggregateArgs>(args: Subset<T, ActionLogAggregateArgs>): Prisma.PrismaPromise<GetActionLogAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionLogGroupByArgs['orderBy'] }
        : { orderBy?: ActionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__ActionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offer<T extends ActionLog$offerArgs<ExtArgs> = {}>(args?: Subset<T, ActionLog$offerArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends ActionLog$locationArgs<ExtArgs> = {}>(args?: Subset<T, ActionLog$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    offerDiscount<T extends ActionLog$offerDiscountArgs<ExtArgs> = {}>(args?: Subset<T, ActionLog$offerDiscountArgs<ExtArgs>>): Prisma__OfferDiscountClient<$Result.GetResult<Prisma.$OfferDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActionLog model
   */
  interface ActionLogFieldRefs {
    readonly id: FieldRef<"ActionLog", 'String'>
    readonly createdAt: FieldRef<"ActionLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ActionLog", 'DateTime'>
    readonly text: FieldRef<"ActionLog", 'String'>
    readonly offerId: FieldRef<"ActionLog", 'String'>
    readonly locationId: FieldRef<"ActionLog", 'String'>
    readonly offerDiscountId: FieldRef<"ActionLog", 'String'>
    readonly initiatorId: FieldRef<"ActionLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionLog findUnique
   */
  export type ActionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * Filter, which ActionLog to fetch.
     */
    where: ActionLogWhereUniqueInput
  }

  /**
   * ActionLog findUniqueOrThrow
   */
  export type ActionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * Filter, which ActionLog to fetch.
     */
    where: ActionLogWhereUniqueInput
  }

  /**
   * ActionLog findFirst
   */
  export type ActionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * Filter, which ActionLog to fetch.
     */
    where?: ActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionLogs to fetch.
     */
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionLogs.
     */
    cursor?: ActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionLogs.
     */
    distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[]
  }

  /**
   * ActionLog findFirstOrThrow
   */
  export type ActionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * Filter, which ActionLog to fetch.
     */
    where?: ActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionLogs to fetch.
     */
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionLogs.
     */
    cursor?: ActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionLogs.
     */
    distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[]
  }

  /**
   * ActionLog findMany
   */
  export type ActionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * Filter, which ActionLogs to fetch.
     */
    where?: ActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionLogs to fetch.
     */
    orderBy?: ActionLogOrderByWithRelationInput | ActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionLogs.
     */
    cursor?: ActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionLogs.
     */
    skip?: number
    distinct?: ActionLogScalarFieldEnum | ActionLogScalarFieldEnum[]
  }

  /**
   * ActionLog create
   */
  export type ActionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionLog.
     */
    data: XOR<ActionLogCreateInput, ActionLogUncheckedCreateInput>
  }

  /**
   * ActionLog createMany
   */
  export type ActionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionLogs.
     */
    data: ActionLogCreateManyInput | ActionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionLog createManyAndReturn
   */
  export type ActionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActionLogs.
     */
    data: ActionLogCreateManyInput | ActionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionLog update
   */
  export type ActionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionLog.
     */
    data: XOR<ActionLogUpdateInput, ActionLogUncheckedUpdateInput>
    /**
     * Choose, which ActionLog to update.
     */
    where: ActionLogWhereUniqueInput
  }

  /**
   * ActionLog updateMany
   */
  export type ActionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionLogs.
     */
    data: XOR<ActionLogUpdateManyMutationInput, ActionLogUncheckedUpdateManyInput>
    /**
     * Filter which ActionLogs to update
     */
    where?: ActionLogWhereInput
    /**
     * Limit how many ActionLogs to update.
     */
    limit?: number
  }

  /**
   * ActionLog updateManyAndReturn
   */
  export type ActionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * The data used to update ActionLogs.
     */
    data: XOR<ActionLogUpdateManyMutationInput, ActionLogUncheckedUpdateManyInput>
    /**
     * Filter which ActionLogs to update
     */
    where?: ActionLogWhereInput
    /**
     * Limit how many ActionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionLog upsert
   */
  export type ActionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionLog to update in case it exists.
     */
    where: ActionLogWhereUniqueInput
    /**
     * In case the ActionLog found by the `where` argument doesn't exist, create a new ActionLog with this data.
     */
    create: XOR<ActionLogCreateInput, ActionLogUncheckedCreateInput>
    /**
     * In case the ActionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionLogUpdateInput, ActionLogUncheckedUpdateInput>
  }

  /**
   * ActionLog delete
   */
  export type ActionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
    /**
     * Filter which ActionLog to delete.
     */
    where: ActionLogWhereUniqueInput
  }

  /**
   * ActionLog deleteMany
   */
  export type ActionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionLogs to delete
     */
    where?: ActionLogWhereInput
    /**
     * Limit how many ActionLogs to delete.
     */
    limit?: number
  }

  /**
   * ActionLog.offer
   */
  export type ActionLog$offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
  }

  /**
   * ActionLog.location
   */
  export type ActionLog$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * ActionLog.offerDiscount
   */
  export type ActionLog$offerDiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferDiscount
     */
    select?: OfferDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferDiscount
     */
    omit?: OfferDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferDiscountInclude<ExtArgs> | null
    where?: OfferDiscountWhereInput
  }

  /**
   * ActionLog without action
   */
  export type ActionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionLog
     */
    select?: ActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionLog
     */
    omit?: ActionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    message: string | null
    image: string | null
    isRead: boolean | null
    receiverId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    message: string | null
    image: string | null
    isRead: boolean | null
    receiverId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    message: number
    image: number
    isRead: number
    receiverId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    message?: true
    image?: true
    isRead?: true
    receiverId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    message?: true
    image?: true
    isRead?: true
    receiverId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    message?: true
    image?: true
    isRead?: true
    receiverId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    message: string
    image: string
    isRead: boolean
    receiverId: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    isRead?: boolean
    receiverId?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    isRead?: boolean
    receiverId?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    isRead?: boolean
    receiverId?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    isRead?: boolean
    receiverId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "message" | "image" | "isRead" | "receiverId", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      message: string
      image: string
      isRead: boolean
      receiverId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
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
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly image: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly receiverId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyLinkScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url',
    icon: 'icon'
  };

  export type CompanyLinkScalarFieldEnum = (typeof CompanyLinkScalarFieldEnum)[keyof typeof CompanyLinkScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    placeId: 'placeId',
    location: 'location',
    city: 'city',
    state: 'state',
    stateIndex: 'stateIndex',
    postalCode: 'postalCode',
    title: 'title',
    country: 'country',
    countryIndex: 'countryIndex'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LocationCommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    comment: 'comment',
    authorId: 'authorId',
    locationId: 'locationId'
  };

  export type LocationCommentScalarFieldEnum = (typeof LocationCommentScalarFieldEnum)[keyof typeof LocationCommentScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    keyFeatures: 'keyFeatures',
    priceAmount: 'priceAmount',
    tags: 'tags',
    status: 'status',
    companyId: 'companyId'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const OfferCommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    comment: 'comment',
    authorId: 'authorId',
    offerId: 'offerId'
  };

  export type OfferCommentScalarFieldEnum = (typeof OfferCommentScalarFieldEnum)[keyof typeof OfferCommentScalarFieldEnum]


  export const OfferPublishScheduleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dateTime: 'dateTime',
    status: 'status',
    offerId: 'offerId'
  };

  export type OfferPublishScheduleScalarFieldEnum = (typeof OfferPublishScheduleScalarFieldEnum)[keyof typeof OfferPublishScheduleScalarFieldEnum]


  export const OfferImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    key: 'key',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    url: 'url',
    expiredAt: 'expiredAt',
    width: 'width',
    height: 'height',
    offerId: 'offerId'
  };

  export type OfferImageScalarFieldEnum = (typeof OfferImageScalarFieldEnum)[keyof typeof OfferImageScalarFieldEnum]


  export const OfferDiscountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    discount: 'discount',
    type: 'type',
    status: 'status',
    offerId: 'offerId'
  };

  export type OfferDiscountScalarFieldEnum = (typeof OfferDiscountScalarFieldEnum)[keyof typeof OfferDiscountScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    netAmount: 'netAmount',
    fee: 'fee',
    discount: 'discount',
    title: 'title',
    offerId: 'offerId',
    offerDiscountId: 'offerDiscountId',
    payerId: 'payerId',
    status: 'status'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    offerId: 'offerId',
    offerCommentId: 'offerCommentId',
    locationCommentId: 'locationCommentId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatMemberScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    chatId: 'chatId'
  };

  export type ChatMemberScalarFieldEnum = (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    authorId: 'authorId',
    chatId: 'chatId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ActionLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    text: 'text',
    offerId: 'offerId',
    locationId: 'locationId',
    offerDiscountId: 'offerDiscountId',
    initiatorId: 'initiatorId'
  };

  export type ActionLogScalarFieldEnum = (typeof ActionLogScalarFieldEnum)[keyof typeof ActionLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    message: 'message',
    image: 'image',
    isRead: 'isRead',
    receiverId: 'receiverId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LocationStatuses'
   */
  export type EnumLocationStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationStatuses'>
    


  /**
   * Reference to a field of type 'LocationStatuses[]'
   */
  export type ListEnumLocationStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationStatuses[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OfferStatuses'
   */
  export type EnumOfferStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatuses'>
    


  /**
   * Reference to a field of type 'OfferStatuses[]'
   */
  export type ListEnumOfferStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatuses[]'>
    


  /**
   * Reference to a field of type 'OfferDiscountTypes'
   */
  export type EnumOfferDiscountTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferDiscountTypes'>
    


  /**
   * Reference to a field of type 'OfferDiscountTypes[]'
   */
  export type ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferDiscountTypes[]'>
    


  /**
   * Reference to a field of type 'OfferDiscountStatuses'
   */
  export type EnumOfferDiscountStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferDiscountStatuses'>
    


  /**
   * Reference to a field of type 'OfferDiscountStatuses[]'
   */
  export type ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferDiscountStatuses[]'>
    


  /**
   * Reference to a field of type 'TransactionStatuses'
   */
  export type EnumTransactionStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatuses'>
    


  /**
   * Reference to a field of type 'TransactionStatuses[]'
   */
  export type ListEnumTransactionStatusesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatuses[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyLinkWhereInput = {
    AND?: CompanyLinkWhereInput | CompanyLinkWhereInput[]
    OR?: CompanyLinkWhereInput[]
    NOT?: CompanyLinkWhereInput | CompanyLinkWhereInput[]
    id?: StringFilter<"CompanyLink"> | string
    createdAt?: DateTimeFilter<"CompanyLink"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyLink"> | Date | string
    url?: StringFilter<"CompanyLink"> | string
    icon?: StringFilter<"CompanyLink"> | string
  }

  export type CompanyLinkOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type CompanyLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyLinkWhereInput | CompanyLinkWhereInput[]
    OR?: CompanyLinkWhereInput[]
    NOT?: CompanyLinkWhereInput | CompanyLinkWhereInput[]
    createdAt?: DateTimeFilter<"CompanyLink"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyLink"> | Date | string
    url?: StringFilter<"CompanyLink"> | string
    icon?: StringFilter<"CompanyLink"> | string
  }, "id">

  export type CompanyLinkOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    _count?: CompanyLinkCountOrderByAggregateInput
    _max?: CompanyLinkMaxOrderByAggregateInput
    _min?: CompanyLinkMinOrderByAggregateInput
  }

  export type CompanyLinkScalarWhereWithAggregatesInput = {
    AND?: CompanyLinkScalarWhereWithAggregatesInput | CompanyLinkScalarWhereWithAggregatesInput[]
    OR?: CompanyLinkScalarWhereWithAggregatesInput[]
    NOT?: CompanyLinkScalarWhereWithAggregatesInput | CompanyLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompanyLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyLink"> | Date | string
    url?: StringWithAggregatesFilter<"CompanyLink"> | string
    icon?: StringWithAggregatesFilter<"CompanyLink"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    status?: EnumLocationStatusesFilter<"Location"> | $Enums.LocationStatuses
    placeId?: StringFilter<"Location"> | string
    location?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    stateIndex?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    title?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    countryIndex?: StringFilter<"Location"> | string
    locationComments?: LocationCommentListRelationFilter
    actionLogs?: ActionLogListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    placeId?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    stateIndex?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    country?: SortOrder
    countryIndex?: SortOrder
    locationComments?: LocationCommentOrderByRelationAggregateInput
    actionLogs?: ActionLogOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    status?: EnumLocationStatusesFilter<"Location"> | $Enums.LocationStatuses
    placeId?: StringFilter<"Location"> | string
    location?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    stateIndex?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    title?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    countryIndex?: StringFilter<"Location"> | string
    locationComments?: LocationCommentListRelationFilter
    actionLogs?: ActionLogListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    placeId?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    stateIndex?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    country?: SortOrder
    countryIndex?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    status?: EnumLocationStatusesWithAggregatesFilter<"Location"> | $Enums.LocationStatuses
    placeId?: StringWithAggregatesFilter<"Location"> | string
    location?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    stateIndex?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
    title?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    countryIndex?: StringWithAggregatesFilter<"Location"> | string
  }

  export type LocationCommentWhereInput = {
    AND?: LocationCommentWhereInput | LocationCommentWhereInput[]
    OR?: LocationCommentWhereInput[]
    NOT?: LocationCommentWhereInput | LocationCommentWhereInput[]
    id?: StringFilter<"LocationComment"> | string
    createdAt?: DateTimeFilter<"LocationComment"> | Date | string
    updatedAt?: DateTimeFilter<"LocationComment"> | Date | string
    comment?: StringFilter<"LocationComment"> | string
    authorId?: StringFilter<"LocationComment"> | string
    locationId?: StringFilter<"LocationComment"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    chats?: ChatListRelationFilter
  }

  export type LocationCommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    locationId?: SortOrder
    location?: LocationOrderByWithRelationInput
    chats?: ChatOrderByRelationAggregateInput
  }

  export type LocationCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationCommentWhereInput | LocationCommentWhereInput[]
    OR?: LocationCommentWhereInput[]
    NOT?: LocationCommentWhereInput | LocationCommentWhereInput[]
    createdAt?: DateTimeFilter<"LocationComment"> | Date | string
    updatedAt?: DateTimeFilter<"LocationComment"> | Date | string
    comment?: StringFilter<"LocationComment"> | string
    authorId?: StringFilter<"LocationComment"> | string
    locationId?: StringFilter<"LocationComment"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    chats?: ChatListRelationFilter
  }, "id">

  export type LocationCommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    locationId?: SortOrder
    _count?: LocationCommentCountOrderByAggregateInput
    _max?: LocationCommentMaxOrderByAggregateInput
    _min?: LocationCommentMinOrderByAggregateInput
  }

  export type LocationCommentScalarWhereWithAggregatesInput = {
    AND?: LocationCommentScalarWhereWithAggregatesInput | LocationCommentScalarWhereWithAggregatesInput[]
    OR?: LocationCommentScalarWhereWithAggregatesInput[]
    NOT?: LocationCommentScalarWhereWithAggregatesInput | LocationCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocationComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LocationComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LocationComment"> | Date | string
    comment?: StringWithAggregatesFilter<"LocationComment"> | string
    authorId?: StringWithAggregatesFilter<"LocationComment"> | string
    locationId?: StringWithAggregatesFilter<"LocationComment"> | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    title?: StringFilter<"Offer"> | string
    description?: StringFilter<"Offer"> | string
    keyFeatures?: StringFilter<"Offer"> | string
    priceAmount?: FloatFilter<"Offer"> | number
    tags?: StringNullableListFilter<"Offer">
    status?: EnumOfferStatusesFilter<"Offer"> | $Enums.OfferStatuses
    companyId?: StringFilter<"Offer"> | string
    images?: OfferImageListRelationFilter
    transactions?: TransactionListRelationFilter
    offerPublishSchedules?: OfferPublishScheduleListRelationFilter
    offerComments?: OfferCommentListRelationFilter
    offerDiscounts?: OfferDiscountListRelationFilter
    chats?: ChatListRelationFilter
    actionLogs?: ActionLogListRelationFilter
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keyFeatures?: SortOrder
    priceAmount?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    images?: OfferImageOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    offerPublishSchedules?: OfferPublishScheduleOrderByRelationAggregateInput
    offerComments?: OfferCommentOrderByRelationAggregateInput
    offerDiscounts?: OfferDiscountOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    actionLogs?: ActionLogOrderByRelationAggregateInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    status_title?: OfferStatusTitleCompoundUniqueInput
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    title?: StringFilter<"Offer"> | string
    description?: StringFilter<"Offer"> | string
    keyFeatures?: StringFilter<"Offer"> | string
    priceAmount?: FloatFilter<"Offer"> | number
    tags?: StringNullableListFilter<"Offer">
    status?: EnumOfferStatusesFilter<"Offer"> | $Enums.OfferStatuses
    companyId?: StringFilter<"Offer"> | string
    images?: OfferImageListRelationFilter
    transactions?: TransactionListRelationFilter
    offerPublishSchedules?: OfferPublishScheduleListRelationFilter
    offerComments?: OfferCommentListRelationFilter
    offerDiscounts?: OfferDiscountListRelationFilter
    chats?: ChatListRelationFilter
    actionLogs?: ActionLogListRelationFilter
  }, "id" | "status_title">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keyFeatures?: SortOrder
    priceAmount?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    title?: StringWithAggregatesFilter<"Offer"> | string
    description?: StringWithAggregatesFilter<"Offer"> | string
    keyFeatures?: StringWithAggregatesFilter<"Offer"> | string
    priceAmount?: FloatWithAggregatesFilter<"Offer"> | number
    tags?: StringNullableListFilter<"Offer">
    status?: EnumOfferStatusesWithAggregatesFilter<"Offer"> | $Enums.OfferStatuses
    companyId?: StringWithAggregatesFilter<"Offer"> | string
  }

  export type OfferCommentWhereInput = {
    AND?: OfferCommentWhereInput | OfferCommentWhereInput[]
    OR?: OfferCommentWhereInput[]
    NOT?: OfferCommentWhereInput | OfferCommentWhereInput[]
    id?: StringFilter<"OfferComment"> | string
    createdAt?: DateTimeFilter<"OfferComment"> | Date | string
    updatedAt?: DateTimeFilter<"OfferComment"> | Date | string
    comment?: StringFilter<"OfferComment"> | string
    authorId?: StringFilter<"OfferComment"> | string
    offerId?: StringFilter<"OfferComment"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    chats?: ChatListRelationFilter
  }

  export type OfferCommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    offerId?: SortOrder
    offer?: OfferOrderByWithRelationInput
    chats?: ChatOrderByRelationAggregateInput
  }

  export type OfferCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferCommentWhereInput | OfferCommentWhereInput[]
    OR?: OfferCommentWhereInput[]
    NOT?: OfferCommentWhereInput | OfferCommentWhereInput[]
    createdAt?: DateTimeFilter<"OfferComment"> | Date | string
    updatedAt?: DateTimeFilter<"OfferComment"> | Date | string
    comment?: StringFilter<"OfferComment"> | string
    authorId?: StringFilter<"OfferComment"> | string
    offerId?: StringFilter<"OfferComment"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    chats?: ChatListRelationFilter
  }, "id">

  export type OfferCommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    offerId?: SortOrder
    _count?: OfferCommentCountOrderByAggregateInput
    _max?: OfferCommentMaxOrderByAggregateInput
    _min?: OfferCommentMinOrderByAggregateInput
  }

  export type OfferCommentScalarWhereWithAggregatesInput = {
    AND?: OfferCommentScalarWhereWithAggregatesInput | OfferCommentScalarWhereWithAggregatesInput[]
    OR?: OfferCommentScalarWhereWithAggregatesInput[]
    NOT?: OfferCommentScalarWhereWithAggregatesInput | OfferCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfferComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OfferComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OfferComment"> | Date | string
    comment?: StringWithAggregatesFilter<"OfferComment"> | string
    authorId?: StringWithAggregatesFilter<"OfferComment"> | string
    offerId?: StringWithAggregatesFilter<"OfferComment"> | string
  }

  export type OfferPublishScheduleWhereInput = {
    AND?: OfferPublishScheduleWhereInput | OfferPublishScheduleWhereInput[]
    OR?: OfferPublishScheduleWhereInput[]
    NOT?: OfferPublishScheduleWhereInput | OfferPublishScheduleWhereInput[]
    id?: StringFilter<"OfferPublishSchedule"> | string
    createdAt?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    dateTime?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    status?: EnumOfferStatusesFilter<"OfferPublishSchedule"> | $Enums.OfferStatuses
    offerId?: StringFilter<"OfferPublishSchedule"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
  }

  export type OfferPublishScheduleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
    offer?: OfferOrderByWithRelationInput
  }

  export type OfferPublishScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    offerId?: string
    AND?: OfferPublishScheduleWhereInput | OfferPublishScheduleWhereInput[]
    OR?: OfferPublishScheduleWhereInput[]
    NOT?: OfferPublishScheduleWhereInput | OfferPublishScheduleWhereInput[]
    createdAt?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    dateTime?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    status?: EnumOfferStatusesFilter<"OfferPublishSchedule"> | $Enums.OfferStatuses
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
  }, "id" | "offerId">

  export type OfferPublishScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
    _count?: OfferPublishScheduleCountOrderByAggregateInput
    _max?: OfferPublishScheduleMaxOrderByAggregateInput
    _min?: OfferPublishScheduleMinOrderByAggregateInput
  }

  export type OfferPublishScheduleScalarWhereWithAggregatesInput = {
    AND?: OfferPublishScheduleScalarWhereWithAggregatesInput | OfferPublishScheduleScalarWhereWithAggregatesInput[]
    OR?: OfferPublishScheduleScalarWhereWithAggregatesInput[]
    NOT?: OfferPublishScheduleScalarWhereWithAggregatesInput | OfferPublishScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfferPublishSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OfferPublishSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OfferPublishSchedule"> | Date | string
    dateTime?: DateTimeWithAggregatesFilter<"OfferPublishSchedule"> | Date | string
    status?: EnumOfferStatusesWithAggregatesFilter<"OfferPublishSchedule"> | $Enums.OfferStatuses
    offerId?: StringWithAggregatesFilter<"OfferPublishSchedule"> | string
  }

  export type OfferImageWhereInput = {
    AND?: OfferImageWhereInput | OfferImageWhereInput[]
    OR?: OfferImageWhereInput[]
    NOT?: OfferImageWhereInput | OfferImageWhereInput[]
    id?: StringFilter<"OfferImage"> | string
    createdAt?: DateTimeFilter<"OfferImage"> | Date | string
    updatedAt?: DateTimeFilter<"OfferImage"> | Date | string
    key?: StringFilter<"OfferImage"> | string
    fileSize?: FloatFilter<"OfferImage"> | number
    mimeType?: StringFilter<"OfferImage"> | string
    url?: StringFilter<"OfferImage"> | string
    expiredAt?: DateTimeFilter<"OfferImage"> | Date | string
    width?: FloatFilter<"OfferImage"> | number
    height?: FloatFilter<"OfferImage"> | number
    offerId?: StringFilter<"OfferImage"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
  }

  export type OfferImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    url?: SortOrder
    expiredAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    offerId?: SortOrder
    offer?: OfferOrderByWithRelationInput
  }

  export type OfferImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: OfferImageWhereInput | OfferImageWhereInput[]
    OR?: OfferImageWhereInput[]
    NOT?: OfferImageWhereInput | OfferImageWhereInput[]
    createdAt?: DateTimeFilter<"OfferImage"> | Date | string
    updatedAt?: DateTimeFilter<"OfferImage"> | Date | string
    fileSize?: FloatFilter<"OfferImage"> | number
    mimeType?: StringFilter<"OfferImage"> | string
    url?: StringFilter<"OfferImage"> | string
    expiredAt?: DateTimeFilter<"OfferImage"> | Date | string
    width?: FloatFilter<"OfferImage"> | number
    height?: FloatFilter<"OfferImage"> | number
    offerId?: StringFilter<"OfferImage"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
  }, "id" | "key">

  export type OfferImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    url?: SortOrder
    expiredAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    offerId?: SortOrder
    _count?: OfferImageCountOrderByAggregateInput
    _avg?: OfferImageAvgOrderByAggregateInput
    _max?: OfferImageMaxOrderByAggregateInput
    _min?: OfferImageMinOrderByAggregateInput
    _sum?: OfferImageSumOrderByAggregateInput
  }

  export type OfferImageScalarWhereWithAggregatesInput = {
    AND?: OfferImageScalarWhereWithAggregatesInput | OfferImageScalarWhereWithAggregatesInput[]
    OR?: OfferImageScalarWhereWithAggregatesInput[]
    NOT?: OfferImageScalarWhereWithAggregatesInput | OfferImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfferImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OfferImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OfferImage"> | Date | string
    key?: StringWithAggregatesFilter<"OfferImage"> | string
    fileSize?: FloatWithAggregatesFilter<"OfferImage"> | number
    mimeType?: StringWithAggregatesFilter<"OfferImage"> | string
    url?: StringWithAggregatesFilter<"OfferImage"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"OfferImage"> | Date | string
    width?: FloatWithAggregatesFilter<"OfferImage"> | number
    height?: FloatWithAggregatesFilter<"OfferImage"> | number
    offerId?: StringWithAggregatesFilter<"OfferImage"> | string
  }

  export type OfferDiscountWhereInput = {
    AND?: OfferDiscountWhereInput | OfferDiscountWhereInput[]
    OR?: OfferDiscountWhereInput[]
    NOT?: OfferDiscountWhereInput | OfferDiscountWhereInput[]
    id?: StringFilter<"OfferDiscount"> | string
    createdAt?: DateTimeFilter<"OfferDiscount"> | Date | string
    updatedAt?: DateTimeFilter<"OfferDiscount"> | Date | string
    discount?: FloatFilter<"OfferDiscount"> | number
    type?: EnumOfferDiscountTypesFilter<"OfferDiscount"> | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFilter<"OfferDiscount"> | $Enums.OfferDiscountStatuses
    offerId?: StringFilter<"OfferDiscount"> | string
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    transactions?: TransactionListRelationFilter
    actionLogs?: ActionLogListRelationFilter
  }

  export type OfferDiscountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
    offer?: OfferOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    actionLogs?: ActionLogOrderByRelationAggregateInput
  }

  export type OfferDiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    offerId?: string
    AND?: OfferDiscountWhereInput | OfferDiscountWhereInput[]
    OR?: OfferDiscountWhereInput[]
    NOT?: OfferDiscountWhereInput | OfferDiscountWhereInput[]
    createdAt?: DateTimeFilter<"OfferDiscount"> | Date | string
    updatedAt?: DateTimeFilter<"OfferDiscount"> | Date | string
    discount?: FloatFilter<"OfferDiscount"> | number
    type?: EnumOfferDiscountTypesFilter<"OfferDiscount"> | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFilter<"OfferDiscount"> | $Enums.OfferDiscountStatuses
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    transactions?: TransactionListRelationFilter
    actionLogs?: ActionLogListRelationFilter
  }, "id" | "offerId">

  export type OfferDiscountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
    _count?: OfferDiscountCountOrderByAggregateInput
    _avg?: OfferDiscountAvgOrderByAggregateInput
    _max?: OfferDiscountMaxOrderByAggregateInput
    _min?: OfferDiscountMinOrderByAggregateInput
    _sum?: OfferDiscountSumOrderByAggregateInput
  }

  export type OfferDiscountScalarWhereWithAggregatesInput = {
    AND?: OfferDiscountScalarWhereWithAggregatesInput | OfferDiscountScalarWhereWithAggregatesInput[]
    OR?: OfferDiscountScalarWhereWithAggregatesInput[]
    NOT?: OfferDiscountScalarWhereWithAggregatesInput | OfferDiscountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfferDiscount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OfferDiscount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OfferDiscount"> | Date | string
    discount?: FloatWithAggregatesFilter<"OfferDiscount"> | number
    type?: EnumOfferDiscountTypesWithAggregatesFilter<"OfferDiscount"> | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesWithAggregatesFilter<"OfferDiscount"> | $Enums.OfferDiscountStatuses
    offerId?: StringWithAggregatesFilter<"OfferDiscount"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    amount?: FloatFilter<"Transaction"> | number
    netAmount?: FloatFilter<"Transaction"> | number
    fee?: FloatFilter<"Transaction"> | number
    discount?: FloatFilter<"Transaction"> | number
    title?: StringFilter<"Transaction"> | string
    offerId?: StringFilter<"Transaction"> | string
    offerDiscountId?: StringNullableFilter<"Transaction"> | string | null
    payerId?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusesFilter<"Transaction"> | $Enums.TransactionStatuses
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    offerDiscount?: XOR<OfferDiscountNullableScalarRelationFilter, OfferDiscountWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
    title?: SortOrder
    offerId?: SortOrder
    offerDiscountId?: SortOrderInput | SortOrder
    payerId?: SortOrder
    status?: SortOrder
    offer?: OfferOrderByWithRelationInput
    offerDiscount?: OfferDiscountOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    amount?: FloatFilter<"Transaction"> | number
    netAmount?: FloatFilter<"Transaction"> | number
    fee?: FloatFilter<"Transaction"> | number
    discount?: FloatFilter<"Transaction"> | number
    title?: StringFilter<"Transaction"> | string
    offerId?: StringFilter<"Transaction"> | string
    offerDiscountId?: StringNullableFilter<"Transaction"> | string | null
    payerId?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusesFilter<"Transaction"> | $Enums.TransactionStatuses
    offer?: XOR<OfferScalarRelationFilter, OfferWhereInput>
    offerDiscount?: XOR<OfferDiscountNullableScalarRelationFilter, OfferDiscountWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
    title?: SortOrder
    offerId?: SortOrder
    offerDiscountId?: SortOrderInput | SortOrder
    payerId?: SortOrder
    status?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    netAmount?: FloatWithAggregatesFilter<"Transaction"> | number
    fee?: FloatWithAggregatesFilter<"Transaction"> | number
    discount?: FloatWithAggregatesFilter<"Transaction"> | number
    title?: StringWithAggregatesFilter<"Transaction"> | string
    offerId?: StringWithAggregatesFilter<"Transaction"> | string
    offerDiscountId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    payerId?: StringWithAggregatesFilter<"Transaction"> | string
    status?: EnumTransactionStatusesWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatuses
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    name?: StringFilter<"Chat"> | string
    offerId?: StringNullableFilter<"Chat"> | string | null
    offerCommentId?: StringNullableFilter<"Chat"> | string | null
    locationCommentId?: StringNullableFilter<"Chat"> | string | null
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
    offerComment?: XOR<OfferCommentNullableScalarRelationFilter, OfferCommentWhereInput> | null
    locationComment?: XOR<LocationCommentNullableScalarRelationFilter, LocationCommentWhereInput> | null
    chatMembers?: ChatMemberListRelationFilter
    messages?: ChatMessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    offerId?: SortOrderInput | SortOrder
    offerCommentId?: SortOrderInput | SortOrder
    locationCommentId?: SortOrderInput | SortOrder
    offer?: OfferOrderByWithRelationInput
    offerComment?: OfferCommentOrderByWithRelationInput
    locationComment?: LocationCommentOrderByWithRelationInput
    chatMembers?: ChatMemberOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    name?: StringFilter<"Chat"> | string
    offerId?: StringNullableFilter<"Chat"> | string | null
    offerCommentId?: StringNullableFilter<"Chat"> | string | null
    locationCommentId?: StringNullableFilter<"Chat"> | string | null
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
    offerComment?: XOR<OfferCommentNullableScalarRelationFilter, OfferCommentWhereInput> | null
    locationComment?: XOR<LocationCommentNullableScalarRelationFilter, LocationCommentWhereInput> | null
    chatMembers?: ChatMemberListRelationFilter
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    offerId?: SortOrderInput | SortOrder
    offerCommentId?: SortOrderInput | SortOrder
    locationCommentId?: SortOrderInput | SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    name?: StringWithAggregatesFilter<"Chat"> | string
    offerId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    offerCommentId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    locationCommentId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
  }

  export type ChatMemberWhereInput = {
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    userId?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMemberOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    userId?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatMemberOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    _count?: ChatMemberCountOrderByAggregateInput
    _max?: ChatMemberMaxOrderByAggregateInput
    _min?: ChatMemberMinOrderByAggregateInput
  }

  export type ChatMemberScalarWhereWithAggregatesInput = {
    AND?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    OR?: ChatMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMember"> | Date | string
    userId?: StringWithAggregatesFilter<"ChatMember"> | string
    chatId?: StringWithAggregatesFilter<"ChatMember"> | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    text?: StringFilter<"ChatMessage"> | string
    authorId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    chatId?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    text?: StringFilter<"ChatMessage"> | string
    authorId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    chatId?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    text?: StringWithAggregatesFilter<"ChatMessage"> | string
    authorId?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatId?: StringWithAggregatesFilter<"ChatMessage"> | string
  }

  export type ActionLogWhereInput = {
    AND?: ActionLogWhereInput | ActionLogWhereInput[]
    OR?: ActionLogWhereInput[]
    NOT?: ActionLogWhereInput | ActionLogWhereInput[]
    id?: StringFilter<"ActionLog"> | string
    createdAt?: DateTimeFilter<"ActionLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActionLog"> | Date | string
    text?: StringFilter<"ActionLog"> | string
    offerId?: StringNullableFilter<"ActionLog"> | string | null
    locationId?: StringNullableFilter<"ActionLog"> | string | null
    offerDiscountId?: StringNullableFilter<"ActionLog"> | string | null
    initiatorId?: StringFilter<"ActionLog"> | string
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    offerDiscount?: XOR<OfferDiscountNullableScalarRelationFilter, OfferDiscountWhereInput> | null
  }

  export type ActionLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    offerId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    offerDiscountId?: SortOrderInput | SortOrder
    initiatorId?: SortOrder
    offer?: OfferOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    offerDiscount?: OfferDiscountOrderByWithRelationInput
  }

  export type ActionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionLogWhereInput | ActionLogWhereInput[]
    OR?: ActionLogWhereInput[]
    NOT?: ActionLogWhereInput | ActionLogWhereInput[]
    createdAt?: DateTimeFilter<"ActionLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActionLog"> | Date | string
    text?: StringFilter<"ActionLog"> | string
    offerId?: StringNullableFilter<"ActionLog"> | string | null
    locationId?: StringNullableFilter<"ActionLog"> | string | null
    offerDiscountId?: StringNullableFilter<"ActionLog"> | string | null
    initiatorId?: StringFilter<"ActionLog"> | string
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    offerDiscount?: XOR<OfferDiscountNullableScalarRelationFilter, OfferDiscountWhereInput> | null
  }, "id">

  export type ActionLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    offerId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    offerDiscountId?: SortOrderInput | SortOrder
    initiatorId?: SortOrder
    _count?: ActionLogCountOrderByAggregateInput
    _max?: ActionLogMaxOrderByAggregateInput
    _min?: ActionLogMinOrderByAggregateInput
  }

  export type ActionLogScalarWhereWithAggregatesInput = {
    AND?: ActionLogScalarWhereWithAggregatesInput | ActionLogScalarWhereWithAggregatesInput[]
    OR?: ActionLogScalarWhereWithAggregatesInput[]
    NOT?: ActionLogScalarWhereWithAggregatesInput | ActionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActionLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActionLog"> | Date | string
    text?: StringWithAggregatesFilter<"ActionLog"> | string
    offerId?: StringNullableWithAggregatesFilter<"ActionLog"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"ActionLog"> | string | null
    offerDiscountId?: StringNullableWithAggregatesFilter<"ActionLog"> | string | null
    initiatorId?: StringWithAggregatesFilter<"ActionLog"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    image?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    receiverId?: StringFilter<"Notification"> | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    isRead?: SortOrder
    receiverId?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    image?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    receiverId?: StringFilter<"Notification"> | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    isRead?: SortOrder
    receiverId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    image?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    receiverId?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type CompanyLinkCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    icon: string
  }

  export type CompanyLinkUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    icon: string
  }

  export type CompanyLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyLinkCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: string
    icon: string
  }

  export type CompanyLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
    locationComments?: LocationCommentUpdateManyWithoutLocationNestedInput
    actionLogs?: ActionLogUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
    locationComments?: LocationCommentUncheckedUpdateManyWithoutLocationNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCommentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    location: LocationCreateNestedOneWithoutLocationCommentsInput
    chats?: ChatCreateNestedManyWithoutLocationCommentInput
  }

  export type LocationCommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    locationId: string
    chats?: ChatUncheckedCreateNestedManyWithoutLocationCommentInput
  }

  export type LocationCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutLocationCommentsNestedInput
    chats?: ChatUpdateManyWithoutLocationCommentNestedInput
  }

  export type LocationCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutLocationCommentNestedInput
  }

  export type LocationCommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    locationId: string
  }

  export type LocationCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCommentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    offer: OfferCreateNestedOneWithoutOfferCommentsInput
    chats?: ChatCreateNestedManyWithoutOfferCommentInput
  }

  export type OfferCommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    offerId: string
    chats?: ChatUncheckedCreateNestedManyWithoutOfferCommentInput
  }

  export type OfferCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneRequiredWithoutOfferCommentsNestedInput
    chats?: ChatUpdateManyWithoutOfferCommentNestedInput
  }

  export type OfferCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutOfferCommentNestedInput
  }

  export type OfferCommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    offerId: string
  }

  export type OfferCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferPublishScheduleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateTime: Date | string
    status: $Enums.OfferStatuses
    offer: OfferCreateNestedOneWithoutOfferPublishSchedulesInput
  }

  export type OfferPublishScheduleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateTime: Date | string
    status: $Enums.OfferStatuses
    offerId: string
  }

  export type OfferPublishScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    offer?: OfferUpdateOneRequiredWithoutOfferPublishSchedulesNestedInput
  }

  export type OfferPublishScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferPublishScheduleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateTime: Date | string
    status: $Enums.OfferStatuses
    offerId: string
  }

  export type OfferPublishScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
  }

  export type OfferPublishScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferImageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date | string
    width: number
    height: number
    offer: OfferCreateNestedOneWithoutImagesInput
  }

  export type OfferImageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date | string
    width: number
    height: number
    offerId: string
  }

  export type OfferImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    offer?: OfferUpdateOneRequiredWithoutImagesNestedInput
  }

  export type OfferImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferImageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date | string
    width: number
    height: number
    offerId: string
  }

  export type OfferImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
  }

  export type OfferImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferDiscountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offer: OfferCreateNestedOneWithoutOfferDiscountsInput
    transactions?: TransactionCreateNestedManyWithoutOfferDiscountInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offerId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferDiscountInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offer?: OfferUpdateOneRequiredWithoutOfferDiscountsNestedInput
    transactions?: TransactionUpdateManyWithoutOfferDiscountNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferDiscountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offerId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutOfferDiscountNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferDiscountCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offerId: string
  }

  export type OfferDiscountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
  }

  export type OfferDiscountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    payerId: string
    status: $Enums.TransactionStatuses
    offer: OfferCreateNestedOneWithoutTransactionsInput
    offerDiscount?: OfferDiscountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerId: string
    offerDiscountId?: string | null
    payerId: string
    status: $Enums.TransactionStatuses
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
    offer?: OfferUpdateOneRequiredWithoutTransactionsNestedInput
    offerDiscount?: OfferDiscountUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type TransactionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerId: string
    offerDiscountId?: string | null
    payerId: string
    status: $Enums.TransactionStatuses
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offer?: OfferCreateNestedOneWithoutChatsInput
    offerComment?: OfferCommentCreateNestedOneWithoutChatsInput
    locationComment?: LocationCommentCreateNestedOneWithoutChatsInput
    chatMembers?: ChatMemberCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    offerCommentId?: string | null
    locationCommentId?: string | null
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutChatsNestedInput
    offerComment?: OfferCommentUpdateOneWithoutChatsNestedInput
    locationComment?: LocationCommentUpdateOneWithoutChatsNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    offerCommentId?: string | null
    locationCommentId?: string | null
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMemberCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chat: ChatCreateNestedOneWithoutChatMembersInput
  }

  export type ChatMemberUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chatId: string
  }

  export type ChatMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutChatMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    chatId: string
  }

  export type ChatMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    chatId: string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
    chatId: string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    initiatorId: string
    offer?: OfferCreateNestedOneWithoutActionLogsInput
    location?: LocationCreateNestedOneWithoutActionLogsInput
    offerDiscount?: OfferDiscountCreateNestedOneWithoutActionLogsInput
  }

  export type ActionLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    offerId?: string | null
    locationId?: string | null
    offerDiscountId?: string | null
    initiatorId: string
  }

  export type ActionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutActionLogsNestedInput
    location?: LocationUpdateOneWithoutActionLogsNestedInput
    offerDiscount?: OfferDiscountUpdateOneWithoutActionLogsNestedInput
  }

  export type ActionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    offerId?: string | null
    locationId?: string | null
    offerDiscountId?: string | null
    initiatorId: string
  }

  export type ActionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    message: string
    image: string
    isRead?: boolean
    receiverId: string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    message: string
    image: string
    isRead?: boolean
    receiverId: string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    message: string
    image: string
    isRead?: boolean
    receiverId: string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyLinkCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type CompanyLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type CompanyLinkMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    icon?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLocationStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationStatuses | EnumLocationStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationStatusesFilter<$PrismaModel> | $Enums.LocationStatuses
  }

  export type LocationCommentListRelationFilter = {
    every?: LocationCommentWhereInput
    some?: LocationCommentWhereInput
    none?: LocationCommentWhereInput
  }

  export type ActionLogListRelationFilter = {
    every?: ActionLogWhereInput
    some?: ActionLogWhereInput
    none?: ActionLogWhereInput
  }

  export type LocationCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    placeId?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    stateIndex?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    country?: SortOrder
    countryIndex?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    placeId?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    stateIndex?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    country?: SortOrder
    countryIndex?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    placeId?: SortOrder
    location?: SortOrder
    city?: SortOrder
    state?: SortOrder
    stateIndex?: SortOrder
    postalCode?: SortOrder
    title?: SortOrder
    country?: SortOrder
    countryIndex?: SortOrder
  }

  export type EnumLocationStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationStatuses | EnumLocationStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationStatusesWithAggregatesFilter<$PrismaModel> | $Enums.LocationStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationStatusesFilter<$PrismaModel>
    _max?: NestedEnumLocationStatusesFilter<$PrismaModel>
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    locationId?: SortOrder
  }

  export type LocationCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    locationId?: SortOrder
  }

  export type LocationCommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    locationId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumOfferStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatuses | EnumOfferStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusesFilter<$PrismaModel> | $Enums.OfferStatuses
  }

  export type OfferImageListRelationFilter = {
    every?: OfferImageWhereInput
    some?: OfferImageWhereInput
    none?: OfferImageWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type OfferPublishScheduleListRelationFilter = {
    every?: OfferPublishScheduleWhereInput
    some?: OfferPublishScheduleWhereInput
    none?: OfferPublishScheduleWhereInput
  }

  export type OfferCommentListRelationFilter = {
    every?: OfferCommentWhereInput
    some?: OfferCommentWhereInput
    none?: OfferCommentWhereInput
  }

  export type OfferDiscountListRelationFilter = {
    every?: OfferDiscountWhereInput
    some?: OfferDiscountWhereInput
    none?: OfferDiscountWhereInput
  }

  export type OfferImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferPublishScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferDiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferStatusTitleCompoundUniqueInput = {
    status: $Enums.OfferStatuses
    title: string
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keyFeatures?: SortOrder
    priceAmount?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    priceAmount?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keyFeatures?: SortOrder
    priceAmount?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keyFeatures?: SortOrder
    priceAmount?: SortOrder
    status?: SortOrder
    companyId?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    priceAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOfferStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatuses | EnumOfferStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusesWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusesFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusesFilter<$PrismaModel>
  }

  export type OfferScalarRelationFilter = {
    is?: OfferWhereInput
    isNot?: OfferWhereInput
  }

  export type OfferCommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    offerId?: SortOrder
  }

  export type OfferCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    offerId?: SortOrder
  }

  export type OfferCommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    offerId?: SortOrder
  }

  export type OfferPublishScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
  }

  export type OfferPublishScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
  }

  export type OfferPublishScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateTime?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
  }

  export type OfferImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    url?: SortOrder
    expiredAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    offerId?: SortOrder
  }

  export type OfferImageAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type OfferImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    url?: SortOrder
    expiredAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    offerId?: SortOrder
  }

  export type OfferImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    url?: SortOrder
    expiredAt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    offerId?: SortOrder
  }

  export type OfferImageSumOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type EnumOfferDiscountTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountTypes | EnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountTypesFilter<$PrismaModel> | $Enums.OfferDiscountTypes
  }

  export type EnumOfferDiscountStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountStatuses | EnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountStatusesFilter<$PrismaModel> | $Enums.OfferDiscountStatuses
  }

  export type OfferDiscountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
  }

  export type OfferDiscountAvgOrderByAggregateInput = {
    discount?: SortOrder
  }

  export type OfferDiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
  }

  export type OfferDiscountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    offerId?: SortOrder
  }

  export type OfferDiscountSumOrderByAggregateInput = {
    discount?: SortOrder
  }

  export type EnumOfferDiscountTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountTypes | EnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountTypesWithAggregatesFilter<$PrismaModel> | $Enums.OfferDiscountTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferDiscountTypesFilter<$PrismaModel>
    _max?: NestedEnumOfferDiscountTypesFilter<$PrismaModel>
  }

  export type EnumOfferDiscountStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountStatuses | EnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountStatusesWithAggregatesFilter<$PrismaModel> | $Enums.OfferDiscountStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferDiscountStatusesFilter<$PrismaModel>
    _max?: NestedEnumOfferDiscountStatusesFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTransactionStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatuses | EnumTransactionStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusesFilter<$PrismaModel> | $Enums.TransactionStatuses
  }

  export type OfferDiscountNullableScalarRelationFilter = {
    is?: OfferDiscountWhereInput | null
    isNot?: OfferDiscountWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
    title?: SortOrder
    offerId?: SortOrder
    offerDiscountId?: SortOrder
    payerId?: SortOrder
    status?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
    title?: SortOrder
    offerId?: SortOrder
    offerDiscountId?: SortOrder
    payerId?: SortOrder
    status?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
    title?: SortOrder
    offerId?: SortOrder
    offerDiscountId?: SortOrder
    payerId?: SortOrder
    status?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    netAmount?: SortOrder
    fee?: SortOrder
    discount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTransactionStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatuses | EnumTransactionStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusesWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusesFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusesFilter<$PrismaModel>
  }

  export type OfferNullableScalarRelationFilter = {
    is?: OfferWhereInput | null
    isNot?: OfferWhereInput | null
  }

  export type OfferCommentNullableScalarRelationFilter = {
    is?: OfferCommentWhereInput | null
    isNot?: OfferCommentWhereInput | null
  }

  export type LocationCommentNullableScalarRelationFilter = {
    is?: LocationCommentWhereInput | null
    isNot?: LocationCommentWhereInput | null
  }

  export type ChatMemberListRelationFilter = {
    every?: ChatMemberWhereInput
    some?: ChatMemberWhereInput
    none?: ChatMemberWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    offerId?: SortOrder
    offerCommentId?: SortOrder
    locationCommentId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    offerId?: SortOrder
    offerCommentId?: SortOrder
    locationCommentId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    offerId?: SortOrder
    offerCommentId?: SortOrder
    locationCommentId?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatMemberCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatMemberMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    chatId?: SortOrder
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type ActionLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    offerId?: SortOrder
    locationId?: SortOrder
    offerDiscountId?: SortOrder
    initiatorId?: SortOrder
  }

  export type ActionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    offerId?: SortOrder
    locationId?: SortOrder
    offerDiscountId?: SortOrder
    initiatorId?: SortOrder
  }

  export type ActionLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: SortOrder
    offerId?: SortOrder
    locationId?: SortOrder
    offerDiscountId?: SortOrder
    initiatorId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    isRead?: SortOrder
    receiverId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    isRead?: SortOrder
    receiverId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    isRead?: SortOrder
    receiverId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumLocationStatusesFieldUpdateOperationsInput = {
    set?: $Enums.LocationStatuses
  }

  export type LocationCommentUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationCommentCreateWithoutLocationInput, LocationCommentUncheckedCreateWithoutLocationInput> | LocationCommentCreateWithoutLocationInput[] | LocationCommentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationCommentCreateOrConnectWithoutLocationInput | LocationCommentCreateOrConnectWithoutLocationInput[]
    upsert?: LocationCommentUpsertWithWhereUniqueWithoutLocationInput | LocationCommentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationCommentCreateManyLocationInputEnvelope
    set?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    disconnect?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    delete?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    connect?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    update?: LocationCommentUpdateWithWhereUniqueWithoutLocationInput | LocationCommentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationCommentUpdateManyWithWhereWithoutLocationInput | LocationCommentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationCommentScalarWhereInput | LocationCommentScalarWhereInput[]
  }

  export type ActionLogUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ActionLogCreateWithoutLocationInput, ActionLogUncheckedCreateWithoutLocationInput> | ActionLogCreateWithoutLocationInput[] | ActionLogUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutLocationInput | ActionLogCreateOrConnectWithoutLocationInput[]
    upsert?: ActionLogUpsertWithWhereUniqueWithoutLocationInput | ActionLogUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ActionLogCreateManyLocationInputEnvelope
    set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    update?: ActionLogUpdateWithWhereUniqueWithoutLocationInput | ActionLogUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ActionLogUpdateManyWithWhereWithoutLocationInput | ActionLogUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
  }

  export type LocationCommentUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationCommentCreateWithoutLocationInput, LocationCommentUncheckedCreateWithoutLocationInput> | LocationCommentCreateWithoutLocationInput[] | LocationCommentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationCommentCreateOrConnectWithoutLocationInput | LocationCommentCreateOrConnectWithoutLocationInput[]
    upsert?: LocationCommentUpsertWithWhereUniqueWithoutLocationInput | LocationCommentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationCommentCreateManyLocationInputEnvelope
    set?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    disconnect?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    delete?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    connect?: LocationCommentWhereUniqueInput | LocationCommentWhereUniqueInput[]
    update?: LocationCommentUpdateWithWhereUniqueWithoutLocationInput | LocationCommentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationCommentUpdateManyWithWhereWithoutLocationInput | LocationCommentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationCommentScalarWhereInput | LocationCommentScalarWhereInput[]
  }

  export type ActionLogUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ActionLogCreateWithoutLocationInput, ActionLogUncheckedCreateWithoutLocationInput> | ActionLogCreateWithoutLocationInput[] | ActionLogUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutLocationInput | ActionLogCreateOrConnectWithoutLocationInput[]
    upsert?: ActionLogUpsertWithWhereUniqueWithoutLocationInput | ActionLogUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ActionLogCreateManyLocationInputEnvelope
    set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    update?: ActionLogUpdateWithWhereUniqueWithoutLocationInput | ActionLogUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ActionLogUpdateManyWithWhereWithoutLocationInput | ActionLogUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutLocationCommentsInput = {
    connect?: LocationWhereUniqueInput
  }

  export type ChatCreateNestedManyWithoutLocationCommentInput = {
    create?: XOR<ChatCreateWithoutLocationCommentInput, ChatUncheckedCreateWithoutLocationCommentInput> | ChatCreateWithoutLocationCommentInput[] | ChatUncheckedCreateWithoutLocationCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutLocationCommentInput | ChatCreateOrConnectWithoutLocationCommentInput[]
    createMany?: ChatCreateManyLocationCommentInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutLocationCommentInput = {
    create?: XOR<ChatCreateWithoutLocationCommentInput, ChatUncheckedCreateWithoutLocationCommentInput> | ChatCreateWithoutLocationCommentInput[] | ChatUncheckedCreateWithoutLocationCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutLocationCommentInput | ChatCreateOrConnectWithoutLocationCommentInput[]
    createMany?: ChatCreateManyLocationCommentInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type LocationUpdateOneRequiredWithoutLocationCommentsNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutLocationCommentsInput, LocationUpdateWithoutLocationCommentsInput>, LocationUncheckedUpdateWithoutLocationCommentsInput>
  }

  export type ChatUpdateManyWithoutLocationCommentNestedInput = {
    create?: XOR<ChatCreateWithoutLocationCommentInput, ChatUncheckedCreateWithoutLocationCommentInput> | ChatCreateWithoutLocationCommentInput[] | ChatUncheckedCreateWithoutLocationCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutLocationCommentInput | ChatCreateOrConnectWithoutLocationCommentInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutLocationCommentInput | ChatUpsertWithWhereUniqueWithoutLocationCommentInput[]
    createMany?: ChatCreateManyLocationCommentInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutLocationCommentInput | ChatUpdateWithWhereUniqueWithoutLocationCommentInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutLocationCommentInput | ChatUpdateManyWithWhereWithoutLocationCommentInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutLocationCommentNestedInput = {
    create?: XOR<ChatCreateWithoutLocationCommentInput, ChatUncheckedCreateWithoutLocationCommentInput> | ChatCreateWithoutLocationCommentInput[] | ChatUncheckedCreateWithoutLocationCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutLocationCommentInput | ChatCreateOrConnectWithoutLocationCommentInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutLocationCommentInput | ChatUpsertWithWhereUniqueWithoutLocationCommentInput[]
    createMany?: ChatCreateManyLocationCommentInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutLocationCommentInput | ChatUpdateWithWhereUniqueWithoutLocationCommentInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutLocationCommentInput | ChatUpdateManyWithWhereWithoutLocationCommentInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type OfferCreatetagsInput = {
    set: string[]
  }

  export type OfferImageCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferImageCreateWithoutOfferInput, OfferImageUncheckedCreateWithoutOfferInput> | OfferImageCreateWithoutOfferInput[] | OfferImageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferImageCreateOrConnectWithoutOfferInput | OfferImageCreateOrConnectWithoutOfferInput[]
    createMany?: OfferImageCreateManyOfferInputEnvelope
    connect?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutOfferInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput> | TransactionCreateWithoutOfferInput[] | TransactionUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput | TransactionCreateOrConnectWithoutOfferInput[]
    createMany?: TransactionCreateManyOfferInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OfferPublishScheduleCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferPublishScheduleCreateWithoutOfferInput, OfferPublishScheduleUncheckedCreateWithoutOfferInput> | OfferPublishScheduleCreateWithoutOfferInput[] | OfferPublishScheduleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferPublishScheduleCreateOrConnectWithoutOfferInput | OfferPublishScheduleCreateOrConnectWithoutOfferInput[]
    createMany?: OfferPublishScheduleCreateManyOfferInputEnvelope
    connect?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
  }

  export type OfferCommentCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferCommentCreateWithoutOfferInput, OfferCommentUncheckedCreateWithoutOfferInput> | OfferCommentCreateWithoutOfferInput[] | OfferCommentUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferCommentCreateOrConnectWithoutOfferInput | OfferCommentCreateOrConnectWithoutOfferInput[]
    createMany?: OfferCommentCreateManyOfferInputEnvelope
    connect?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
  }

  export type OfferDiscountCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferDiscountCreateWithoutOfferInput, OfferDiscountUncheckedCreateWithoutOfferInput> | OfferDiscountCreateWithoutOfferInput[] | OfferDiscountUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutOfferInput | OfferDiscountCreateOrConnectWithoutOfferInput[]
    createMany?: OfferDiscountCreateManyOfferInputEnvelope
    connect?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutOfferInput = {
    create?: XOR<ChatCreateWithoutOfferInput, ChatUncheckedCreateWithoutOfferInput> | ChatCreateWithoutOfferInput[] | ChatUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferInput | ChatCreateOrConnectWithoutOfferInput[]
    createMany?: ChatCreateManyOfferInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ActionLogCreateNestedManyWithoutOfferInput = {
    create?: XOR<ActionLogCreateWithoutOfferInput, ActionLogUncheckedCreateWithoutOfferInput> | ActionLogCreateWithoutOfferInput[] | ActionLogUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferInput | ActionLogCreateOrConnectWithoutOfferInput[]
    createMany?: ActionLogCreateManyOfferInputEnvelope
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
  }

  export type OfferImageUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferImageCreateWithoutOfferInput, OfferImageUncheckedCreateWithoutOfferInput> | OfferImageCreateWithoutOfferInput[] | OfferImageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferImageCreateOrConnectWithoutOfferInput | OfferImageCreateOrConnectWithoutOfferInput[]
    createMany?: OfferImageCreateManyOfferInputEnvelope
    connect?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput> | TransactionCreateWithoutOfferInput[] | TransactionUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput | TransactionCreateOrConnectWithoutOfferInput[]
    createMany?: TransactionCreateManyOfferInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferPublishScheduleCreateWithoutOfferInput, OfferPublishScheduleUncheckedCreateWithoutOfferInput> | OfferPublishScheduleCreateWithoutOfferInput[] | OfferPublishScheduleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferPublishScheduleCreateOrConnectWithoutOfferInput | OfferPublishScheduleCreateOrConnectWithoutOfferInput[]
    createMany?: OfferPublishScheduleCreateManyOfferInputEnvelope
    connect?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
  }

  export type OfferCommentUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferCommentCreateWithoutOfferInput, OfferCommentUncheckedCreateWithoutOfferInput> | OfferCommentCreateWithoutOfferInput[] | OfferCommentUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferCommentCreateOrConnectWithoutOfferInput | OfferCommentCreateOrConnectWithoutOfferInput[]
    createMany?: OfferCommentCreateManyOfferInputEnvelope
    connect?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
  }

  export type OfferDiscountUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<OfferDiscountCreateWithoutOfferInput, OfferDiscountUncheckedCreateWithoutOfferInput> | OfferDiscountCreateWithoutOfferInput[] | OfferDiscountUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutOfferInput | OfferDiscountCreateOrConnectWithoutOfferInput[]
    createMany?: OfferDiscountCreateManyOfferInputEnvelope
    connect?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<ChatCreateWithoutOfferInput, ChatUncheckedCreateWithoutOfferInput> | ChatCreateWithoutOfferInput[] | ChatUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferInput | ChatCreateOrConnectWithoutOfferInput[]
    createMany?: ChatCreateManyOfferInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ActionLogUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<ActionLogCreateWithoutOfferInput, ActionLogUncheckedCreateWithoutOfferInput> | ActionLogCreateWithoutOfferInput[] | ActionLogUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferInput | ActionLogCreateOrConnectWithoutOfferInput[]
    createMany?: ActionLogCreateManyOfferInputEnvelope
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OfferUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumOfferStatusesFieldUpdateOperationsInput = {
    set?: $Enums.OfferStatuses
  }

  export type OfferImageUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferImageCreateWithoutOfferInput, OfferImageUncheckedCreateWithoutOfferInput> | OfferImageCreateWithoutOfferInput[] | OfferImageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferImageCreateOrConnectWithoutOfferInput | OfferImageCreateOrConnectWithoutOfferInput[]
    upsert?: OfferImageUpsertWithWhereUniqueWithoutOfferInput | OfferImageUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferImageCreateManyOfferInputEnvelope
    set?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    disconnect?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    delete?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    connect?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    update?: OfferImageUpdateWithWhereUniqueWithoutOfferInput | OfferImageUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferImageUpdateManyWithWhereWithoutOfferInput | OfferImageUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferImageScalarWhereInput | OfferImageScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutOfferNestedInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput> | TransactionCreateWithoutOfferInput[] | TransactionUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput | TransactionCreateOrConnectWithoutOfferInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOfferInput | TransactionUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: TransactionCreateManyOfferInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOfferInput | TransactionUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOfferInput | TransactionUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OfferPublishScheduleUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferPublishScheduleCreateWithoutOfferInput, OfferPublishScheduleUncheckedCreateWithoutOfferInput> | OfferPublishScheduleCreateWithoutOfferInput[] | OfferPublishScheduleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferPublishScheduleCreateOrConnectWithoutOfferInput | OfferPublishScheduleCreateOrConnectWithoutOfferInput[]
    upsert?: OfferPublishScheduleUpsertWithWhereUniqueWithoutOfferInput | OfferPublishScheduleUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferPublishScheduleCreateManyOfferInputEnvelope
    set?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    disconnect?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    delete?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    connect?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    update?: OfferPublishScheduleUpdateWithWhereUniqueWithoutOfferInput | OfferPublishScheduleUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferPublishScheduleUpdateManyWithWhereWithoutOfferInput | OfferPublishScheduleUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferPublishScheduleScalarWhereInput | OfferPublishScheduleScalarWhereInput[]
  }

  export type OfferCommentUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferCommentCreateWithoutOfferInput, OfferCommentUncheckedCreateWithoutOfferInput> | OfferCommentCreateWithoutOfferInput[] | OfferCommentUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferCommentCreateOrConnectWithoutOfferInput | OfferCommentCreateOrConnectWithoutOfferInput[]
    upsert?: OfferCommentUpsertWithWhereUniqueWithoutOfferInput | OfferCommentUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferCommentCreateManyOfferInputEnvelope
    set?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    disconnect?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    delete?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    connect?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    update?: OfferCommentUpdateWithWhereUniqueWithoutOfferInput | OfferCommentUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferCommentUpdateManyWithWhereWithoutOfferInput | OfferCommentUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferCommentScalarWhereInput | OfferCommentScalarWhereInput[]
  }

  export type OfferDiscountUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferDiscountCreateWithoutOfferInput, OfferDiscountUncheckedCreateWithoutOfferInput> | OfferDiscountCreateWithoutOfferInput[] | OfferDiscountUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutOfferInput | OfferDiscountCreateOrConnectWithoutOfferInput[]
    upsert?: OfferDiscountUpsertWithWhereUniqueWithoutOfferInput | OfferDiscountUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferDiscountCreateManyOfferInputEnvelope
    set?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    disconnect?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    delete?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    connect?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    update?: OfferDiscountUpdateWithWhereUniqueWithoutOfferInput | OfferDiscountUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferDiscountUpdateManyWithWhereWithoutOfferInput | OfferDiscountUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferDiscountScalarWhereInput | OfferDiscountScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutOfferNestedInput = {
    create?: XOR<ChatCreateWithoutOfferInput, ChatUncheckedCreateWithoutOfferInput> | ChatCreateWithoutOfferInput[] | ChatUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferInput | ChatCreateOrConnectWithoutOfferInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOfferInput | ChatUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: ChatCreateManyOfferInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOfferInput | ChatUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOfferInput | ChatUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ActionLogUpdateManyWithoutOfferNestedInput = {
    create?: XOR<ActionLogCreateWithoutOfferInput, ActionLogUncheckedCreateWithoutOfferInput> | ActionLogCreateWithoutOfferInput[] | ActionLogUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferInput | ActionLogCreateOrConnectWithoutOfferInput[]
    upsert?: ActionLogUpsertWithWhereUniqueWithoutOfferInput | ActionLogUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: ActionLogCreateManyOfferInputEnvelope
    set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    update?: ActionLogUpdateWithWhereUniqueWithoutOfferInput | ActionLogUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: ActionLogUpdateManyWithWhereWithoutOfferInput | ActionLogUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
  }

  export type OfferImageUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferImageCreateWithoutOfferInput, OfferImageUncheckedCreateWithoutOfferInput> | OfferImageCreateWithoutOfferInput[] | OfferImageUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferImageCreateOrConnectWithoutOfferInput | OfferImageCreateOrConnectWithoutOfferInput[]
    upsert?: OfferImageUpsertWithWhereUniqueWithoutOfferInput | OfferImageUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferImageCreateManyOfferInputEnvelope
    set?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    disconnect?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    delete?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    connect?: OfferImageWhereUniqueInput | OfferImageWhereUniqueInput[]
    update?: OfferImageUpdateWithWhereUniqueWithoutOfferInput | OfferImageUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferImageUpdateManyWithWhereWithoutOfferInput | OfferImageUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferImageScalarWhereInput | OfferImageScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput> | TransactionCreateWithoutOfferInput[] | TransactionUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferInput | TransactionCreateOrConnectWithoutOfferInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOfferInput | TransactionUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: TransactionCreateManyOfferInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOfferInput | TransactionUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOfferInput | TransactionUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferPublishScheduleCreateWithoutOfferInput, OfferPublishScheduleUncheckedCreateWithoutOfferInput> | OfferPublishScheduleCreateWithoutOfferInput[] | OfferPublishScheduleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferPublishScheduleCreateOrConnectWithoutOfferInput | OfferPublishScheduleCreateOrConnectWithoutOfferInput[]
    upsert?: OfferPublishScheduleUpsertWithWhereUniqueWithoutOfferInput | OfferPublishScheduleUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferPublishScheduleCreateManyOfferInputEnvelope
    set?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    disconnect?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    delete?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    connect?: OfferPublishScheduleWhereUniqueInput | OfferPublishScheduleWhereUniqueInput[]
    update?: OfferPublishScheduleUpdateWithWhereUniqueWithoutOfferInput | OfferPublishScheduleUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferPublishScheduleUpdateManyWithWhereWithoutOfferInput | OfferPublishScheduleUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferPublishScheduleScalarWhereInput | OfferPublishScheduleScalarWhereInput[]
  }

  export type OfferCommentUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferCommentCreateWithoutOfferInput, OfferCommentUncheckedCreateWithoutOfferInput> | OfferCommentCreateWithoutOfferInput[] | OfferCommentUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferCommentCreateOrConnectWithoutOfferInput | OfferCommentCreateOrConnectWithoutOfferInput[]
    upsert?: OfferCommentUpsertWithWhereUniqueWithoutOfferInput | OfferCommentUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferCommentCreateManyOfferInputEnvelope
    set?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    disconnect?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    delete?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    connect?: OfferCommentWhereUniqueInput | OfferCommentWhereUniqueInput[]
    update?: OfferCommentUpdateWithWhereUniqueWithoutOfferInput | OfferCommentUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferCommentUpdateManyWithWhereWithoutOfferInput | OfferCommentUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferCommentScalarWhereInput | OfferCommentScalarWhereInput[]
  }

  export type OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<OfferDiscountCreateWithoutOfferInput, OfferDiscountUncheckedCreateWithoutOfferInput> | OfferDiscountCreateWithoutOfferInput[] | OfferDiscountUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutOfferInput | OfferDiscountCreateOrConnectWithoutOfferInput[]
    upsert?: OfferDiscountUpsertWithWhereUniqueWithoutOfferInput | OfferDiscountUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: OfferDiscountCreateManyOfferInputEnvelope
    set?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    disconnect?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    delete?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    connect?: OfferDiscountWhereUniqueInput | OfferDiscountWhereUniqueInput[]
    update?: OfferDiscountUpdateWithWhereUniqueWithoutOfferInput | OfferDiscountUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: OfferDiscountUpdateManyWithWhereWithoutOfferInput | OfferDiscountUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: OfferDiscountScalarWhereInput | OfferDiscountScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<ChatCreateWithoutOfferInput, ChatUncheckedCreateWithoutOfferInput> | ChatCreateWithoutOfferInput[] | ChatUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferInput | ChatCreateOrConnectWithoutOfferInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOfferInput | ChatUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: ChatCreateManyOfferInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOfferInput | ChatUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOfferInput | ChatUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ActionLogUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<ActionLogCreateWithoutOfferInput, ActionLogUncheckedCreateWithoutOfferInput> | ActionLogCreateWithoutOfferInput[] | ActionLogUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferInput | ActionLogCreateOrConnectWithoutOfferInput[]
    upsert?: ActionLogUpsertWithWhereUniqueWithoutOfferInput | ActionLogUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: ActionLogCreateManyOfferInputEnvelope
    set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    update?: ActionLogUpdateWithWhereUniqueWithoutOfferInput | ActionLogUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: ActionLogUpdateManyWithWhereWithoutOfferInput | ActionLogUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
  }

  export type OfferCreateNestedOneWithoutOfferCommentsInput = {
    create?: XOR<OfferCreateWithoutOfferCommentsInput, OfferUncheckedCreateWithoutOfferCommentsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutOfferCommentsInput
    connect?: OfferWhereUniqueInput
  }

  export type ChatCreateNestedManyWithoutOfferCommentInput = {
    create?: XOR<ChatCreateWithoutOfferCommentInput, ChatUncheckedCreateWithoutOfferCommentInput> | ChatCreateWithoutOfferCommentInput[] | ChatUncheckedCreateWithoutOfferCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferCommentInput | ChatCreateOrConnectWithoutOfferCommentInput[]
    createMany?: ChatCreateManyOfferCommentInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutOfferCommentInput = {
    create?: XOR<ChatCreateWithoutOfferCommentInput, ChatUncheckedCreateWithoutOfferCommentInput> | ChatCreateWithoutOfferCommentInput[] | ChatUncheckedCreateWithoutOfferCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferCommentInput | ChatCreateOrConnectWithoutOfferCommentInput[]
    createMany?: ChatCreateManyOfferCommentInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type OfferUpdateOneRequiredWithoutOfferCommentsNestedInput = {
    create?: XOR<OfferCreateWithoutOfferCommentsInput, OfferUncheckedCreateWithoutOfferCommentsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutOfferCommentsInput
    upsert?: OfferUpsertWithoutOfferCommentsInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutOfferCommentsInput, OfferUpdateWithoutOfferCommentsInput>, OfferUncheckedUpdateWithoutOfferCommentsInput>
  }

  export type ChatUpdateManyWithoutOfferCommentNestedInput = {
    create?: XOR<ChatCreateWithoutOfferCommentInput, ChatUncheckedCreateWithoutOfferCommentInput> | ChatCreateWithoutOfferCommentInput[] | ChatUncheckedCreateWithoutOfferCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferCommentInput | ChatCreateOrConnectWithoutOfferCommentInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOfferCommentInput | ChatUpsertWithWhereUniqueWithoutOfferCommentInput[]
    createMany?: ChatCreateManyOfferCommentInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOfferCommentInput | ChatUpdateWithWhereUniqueWithoutOfferCommentInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOfferCommentInput | ChatUpdateManyWithWhereWithoutOfferCommentInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutOfferCommentNestedInput = {
    create?: XOR<ChatCreateWithoutOfferCommentInput, ChatUncheckedCreateWithoutOfferCommentInput> | ChatCreateWithoutOfferCommentInput[] | ChatUncheckedCreateWithoutOfferCommentInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutOfferCommentInput | ChatCreateOrConnectWithoutOfferCommentInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutOfferCommentInput | ChatUpsertWithWhereUniqueWithoutOfferCommentInput[]
    createMany?: ChatCreateManyOfferCommentInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutOfferCommentInput | ChatUpdateWithWhereUniqueWithoutOfferCommentInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutOfferCommentInput | ChatUpdateManyWithWhereWithoutOfferCommentInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type OfferCreateNestedOneWithoutOfferPublishSchedulesInput = {
    create?: XOR<OfferCreateWithoutOfferPublishSchedulesInput, OfferUncheckedCreateWithoutOfferPublishSchedulesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutOfferPublishSchedulesInput
    connect?: OfferWhereUniqueInput
  }

  export type OfferUpdateOneRequiredWithoutOfferPublishSchedulesNestedInput = {
    create?: XOR<OfferCreateWithoutOfferPublishSchedulesInput, OfferUncheckedCreateWithoutOfferPublishSchedulesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutOfferPublishSchedulesInput
    upsert?: OfferUpsertWithoutOfferPublishSchedulesInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutOfferPublishSchedulesInput, OfferUpdateWithoutOfferPublishSchedulesInput>, OfferUncheckedUpdateWithoutOfferPublishSchedulesInput>
  }

  export type OfferCreateNestedOneWithoutImagesInput = {
    create?: XOR<OfferCreateWithoutImagesInput, OfferUncheckedCreateWithoutImagesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutImagesInput
    connect?: OfferWhereUniqueInput
  }

  export type OfferUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<OfferCreateWithoutImagesInput, OfferUncheckedCreateWithoutImagesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutImagesInput
    upsert?: OfferUpsertWithoutImagesInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutImagesInput, OfferUpdateWithoutImagesInput>, OfferUncheckedUpdateWithoutImagesInput>
  }

  export type OfferCreateNestedOneWithoutOfferDiscountsInput = {
    create?: XOR<OfferCreateWithoutOfferDiscountsInput, OfferUncheckedCreateWithoutOfferDiscountsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutOfferDiscountsInput
    connect?: OfferWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutOfferDiscountInput = {
    create?: XOR<TransactionCreateWithoutOfferDiscountInput, TransactionUncheckedCreateWithoutOfferDiscountInput> | TransactionCreateWithoutOfferDiscountInput[] | TransactionUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferDiscountInput | TransactionCreateOrConnectWithoutOfferDiscountInput[]
    createMany?: TransactionCreateManyOfferDiscountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ActionLogCreateNestedManyWithoutOfferDiscountInput = {
    create?: XOR<ActionLogCreateWithoutOfferDiscountInput, ActionLogUncheckedCreateWithoutOfferDiscountInput> | ActionLogCreateWithoutOfferDiscountInput[] | ActionLogUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferDiscountInput | ActionLogCreateOrConnectWithoutOfferDiscountInput[]
    createMany?: ActionLogCreateManyOfferDiscountInputEnvelope
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOfferDiscountInput = {
    create?: XOR<TransactionCreateWithoutOfferDiscountInput, TransactionUncheckedCreateWithoutOfferDiscountInput> | TransactionCreateWithoutOfferDiscountInput[] | TransactionUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferDiscountInput | TransactionCreateOrConnectWithoutOfferDiscountInput[]
    createMany?: TransactionCreateManyOfferDiscountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ActionLogUncheckedCreateNestedManyWithoutOfferDiscountInput = {
    create?: XOR<ActionLogCreateWithoutOfferDiscountInput, ActionLogUncheckedCreateWithoutOfferDiscountInput> | ActionLogCreateWithoutOfferDiscountInput[] | ActionLogUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferDiscountInput | ActionLogCreateOrConnectWithoutOfferDiscountInput[]
    createMany?: ActionLogCreateManyOfferDiscountInputEnvelope
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
  }

  export type EnumOfferDiscountTypesFieldUpdateOperationsInput = {
    set?: $Enums.OfferDiscountTypes
  }

  export type EnumOfferDiscountStatusesFieldUpdateOperationsInput = {
    set?: $Enums.OfferDiscountStatuses
  }

  export type OfferUpdateOneRequiredWithoutOfferDiscountsNestedInput = {
    create?: XOR<OfferCreateWithoutOfferDiscountsInput, OfferUncheckedCreateWithoutOfferDiscountsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutOfferDiscountsInput
    upsert?: OfferUpsertWithoutOfferDiscountsInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutOfferDiscountsInput, OfferUpdateWithoutOfferDiscountsInput>, OfferUncheckedUpdateWithoutOfferDiscountsInput>
  }

  export type TransactionUpdateManyWithoutOfferDiscountNestedInput = {
    create?: XOR<TransactionCreateWithoutOfferDiscountInput, TransactionUncheckedCreateWithoutOfferDiscountInput> | TransactionCreateWithoutOfferDiscountInput[] | TransactionUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferDiscountInput | TransactionCreateOrConnectWithoutOfferDiscountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOfferDiscountInput | TransactionUpsertWithWhereUniqueWithoutOfferDiscountInput[]
    createMany?: TransactionCreateManyOfferDiscountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOfferDiscountInput | TransactionUpdateWithWhereUniqueWithoutOfferDiscountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOfferDiscountInput | TransactionUpdateManyWithWhereWithoutOfferDiscountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ActionLogUpdateManyWithoutOfferDiscountNestedInput = {
    create?: XOR<ActionLogCreateWithoutOfferDiscountInput, ActionLogUncheckedCreateWithoutOfferDiscountInput> | ActionLogCreateWithoutOfferDiscountInput[] | ActionLogUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferDiscountInput | ActionLogCreateOrConnectWithoutOfferDiscountInput[]
    upsert?: ActionLogUpsertWithWhereUniqueWithoutOfferDiscountInput | ActionLogUpsertWithWhereUniqueWithoutOfferDiscountInput[]
    createMany?: ActionLogCreateManyOfferDiscountInputEnvelope
    set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    update?: ActionLogUpdateWithWhereUniqueWithoutOfferDiscountInput | ActionLogUpdateWithWhereUniqueWithoutOfferDiscountInput[]
    updateMany?: ActionLogUpdateManyWithWhereWithoutOfferDiscountInput | ActionLogUpdateManyWithWhereWithoutOfferDiscountInput[]
    deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutOfferDiscountNestedInput = {
    create?: XOR<TransactionCreateWithoutOfferDiscountInput, TransactionUncheckedCreateWithoutOfferDiscountInput> | TransactionCreateWithoutOfferDiscountInput[] | TransactionUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOfferDiscountInput | TransactionCreateOrConnectWithoutOfferDiscountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOfferDiscountInput | TransactionUpsertWithWhereUniqueWithoutOfferDiscountInput[]
    createMany?: TransactionCreateManyOfferDiscountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOfferDiscountInput | TransactionUpdateWithWhereUniqueWithoutOfferDiscountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOfferDiscountInput | TransactionUpdateManyWithWhereWithoutOfferDiscountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ActionLogUncheckedUpdateManyWithoutOfferDiscountNestedInput = {
    create?: XOR<ActionLogCreateWithoutOfferDiscountInput, ActionLogUncheckedCreateWithoutOfferDiscountInput> | ActionLogCreateWithoutOfferDiscountInput[] | ActionLogUncheckedCreateWithoutOfferDiscountInput[]
    connectOrCreate?: ActionLogCreateOrConnectWithoutOfferDiscountInput | ActionLogCreateOrConnectWithoutOfferDiscountInput[]
    upsert?: ActionLogUpsertWithWhereUniqueWithoutOfferDiscountInput | ActionLogUpsertWithWhereUniqueWithoutOfferDiscountInput[]
    createMany?: ActionLogCreateManyOfferDiscountInputEnvelope
    set?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    disconnect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    delete?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    connect?: ActionLogWhereUniqueInput | ActionLogWhereUniqueInput[]
    update?: ActionLogUpdateWithWhereUniqueWithoutOfferDiscountInput | ActionLogUpdateWithWhereUniqueWithoutOfferDiscountInput[]
    updateMany?: ActionLogUpdateManyWithWhereWithoutOfferDiscountInput | ActionLogUpdateManyWithWhereWithoutOfferDiscountInput[]
    deleteMany?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
  }

  export type OfferCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<OfferCreateWithoutTransactionsInput, OfferUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutTransactionsInput
    connect?: OfferWhereUniqueInput
  }

  export type OfferDiscountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<OfferDiscountCreateWithoutTransactionsInput, OfferDiscountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutTransactionsInput
    connect?: OfferDiscountWhereUniqueInput
  }

  export type EnumTransactionStatusesFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatuses
  }

  export type OfferUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<OfferCreateWithoutTransactionsInput, OfferUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutTransactionsInput
    upsert?: OfferUpsertWithoutTransactionsInput
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutTransactionsInput, OfferUpdateWithoutTransactionsInput>, OfferUncheckedUpdateWithoutTransactionsInput>
  }

  export type OfferDiscountUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<OfferDiscountCreateWithoutTransactionsInput, OfferDiscountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutTransactionsInput
    upsert?: OfferDiscountUpsertWithoutTransactionsInput
    disconnect?: OfferDiscountWhereInput | boolean
    delete?: OfferDiscountWhereInput | boolean
    connect?: OfferDiscountWhereUniqueInput
    update?: XOR<XOR<OfferDiscountUpdateToOneWithWhereWithoutTransactionsInput, OfferDiscountUpdateWithoutTransactionsInput>, OfferDiscountUncheckedUpdateWithoutTransactionsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OfferCreateNestedOneWithoutChatsInput = {
    create?: XOR<OfferCreateWithoutChatsInput, OfferUncheckedCreateWithoutChatsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutChatsInput
    connect?: OfferWhereUniqueInput
  }

  export type OfferCommentCreateNestedOneWithoutChatsInput = {
    create?: XOR<OfferCommentCreateWithoutChatsInput, OfferCommentUncheckedCreateWithoutChatsInput>
    connectOrCreate?: OfferCommentCreateOrConnectWithoutChatsInput
    connect?: OfferCommentWhereUniqueInput
  }

  export type LocationCommentCreateNestedOneWithoutChatsInput = {
    create?: XOR<LocationCommentCreateWithoutChatsInput, LocationCommentUncheckedCreateWithoutChatsInput>
    connectOrCreate?: LocationCommentCreateOrConnectWithoutChatsInput
    connect?: LocationCommentWhereUniqueInput
  }

  export type ChatMemberCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type OfferUpdateOneWithoutChatsNestedInput = {
    create?: XOR<OfferCreateWithoutChatsInput, OfferUncheckedCreateWithoutChatsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutChatsInput
    upsert?: OfferUpsertWithoutChatsInput
    disconnect?: OfferWhereInput | boolean
    delete?: OfferWhereInput | boolean
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutChatsInput, OfferUpdateWithoutChatsInput>, OfferUncheckedUpdateWithoutChatsInput>
  }

  export type OfferCommentUpdateOneWithoutChatsNestedInput = {
    create?: XOR<OfferCommentCreateWithoutChatsInput, OfferCommentUncheckedCreateWithoutChatsInput>
    connectOrCreate?: OfferCommentCreateOrConnectWithoutChatsInput
    upsert?: OfferCommentUpsertWithoutChatsInput
    disconnect?: OfferCommentWhereInput | boolean
    delete?: OfferCommentWhereInput | boolean
    connect?: OfferCommentWhereUniqueInput
    update?: XOR<XOR<OfferCommentUpdateToOneWithWhereWithoutChatsInput, OfferCommentUpdateWithoutChatsInput>, OfferCommentUncheckedUpdateWithoutChatsInput>
  }

  export type LocationCommentUpdateOneWithoutChatsNestedInput = {
    create?: XOR<LocationCommentCreateWithoutChatsInput, LocationCommentUncheckedCreateWithoutChatsInput>
    connectOrCreate?: LocationCommentCreateOrConnectWithoutChatsInput
    upsert?: LocationCommentUpsertWithoutChatsInput
    disconnect?: LocationCommentWhereInput | boolean
    delete?: LocationCommentWhereInput | boolean
    connect?: LocationCommentWhereUniqueInput
    update?: XOR<XOR<LocationCommentUpdateToOneWithWhereWithoutChatsInput, LocationCommentUpdateWithoutChatsInput>, LocationCommentUncheckedUpdateWithoutChatsInput>
  }

  export type ChatMemberUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatInput | ChatMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatInput | ChatMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatInput | ChatMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput> | ChatMessageCreateWithoutChatInput[] | ChatMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput | ChatMessageCreateOrConnectWithoutChatInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatInput | ChatMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMessageCreateManyChatInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatInput | ChatMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatInput | ChatMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutChatMembersInput = {
    create?: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatMembersInput
    connect?: ChatWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutChatMembersNestedInput = {
    create?: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatMembersInput
    upsert?: ChatUpsertWithoutChatMembersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutChatMembersInput, ChatUpdateWithoutChatMembersInput>, ChatUncheckedUpdateWithoutChatMembersInput>
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type OfferCreateNestedOneWithoutActionLogsInput = {
    create?: XOR<OfferCreateWithoutActionLogsInput, OfferUncheckedCreateWithoutActionLogsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutActionLogsInput
    connect?: OfferWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutActionLogsInput = {
    connect?: LocationWhereUniqueInput
  }

  export type OfferDiscountCreateNestedOneWithoutActionLogsInput = {
    create?: XOR<OfferDiscountCreateWithoutActionLogsInput, OfferDiscountUncheckedCreateWithoutActionLogsInput>
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutActionLogsInput
    connect?: OfferDiscountWhereUniqueInput
  }

  export type OfferUpdateOneWithoutActionLogsNestedInput = {
    create?: XOR<OfferCreateWithoutActionLogsInput, OfferUncheckedCreateWithoutActionLogsInput>
    connectOrCreate?: OfferCreateOrConnectWithoutActionLogsInput
    upsert?: OfferUpsertWithoutActionLogsInput
    disconnect?: OfferWhereInput | boolean
    delete?: OfferWhereInput | boolean
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutActionLogsInput, OfferUpdateWithoutActionLogsInput>, OfferUncheckedUpdateWithoutActionLogsInput>
  }

  export type LocationUpdateOneWithoutActionLogsNestedInput = {
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutActionLogsInput, LocationUpdateWithoutActionLogsInput>, LocationUncheckedUpdateWithoutActionLogsInput>
  }

  export type OfferDiscountUpdateOneWithoutActionLogsNestedInput = {
    create?: XOR<OfferDiscountCreateWithoutActionLogsInput, OfferDiscountUncheckedCreateWithoutActionLogsInput>
    connectOrCreate?: OfferDiscountCreateOrConnectWithoutActionLogsInput
    upsert?: OfferDiscountUpsertWithoutActionLogsInput
    disconnect?: OfferDiscountWhereInput | boolean
    delete?: OfferDiscountWhereInput | boolean
    connect?: OfferDiscountWhereUniqueInput
    update?: XOR<XOR<OfferDiscountUpdateToOneWithWhereWithoutActionLogsInput, OfferDiscountUpdateWithoutActionLogsInput>, OfferDiscountUncheckedUpdateWithoutActionLogsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLocationStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationStatuses | EnumLocationStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationStatusesFilter<$PrismaModel> | $Enums.LocationStatuses
  }

  export type NestedEnumLocationStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationStatuses | EnumLocationStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationStatuses[] | ListEnumLocationStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationStatusesWithAggregatesFilter<$PrismaModel> | $Enums.LocationStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationStatusesFilter<$PrismaModel>
    _max?: NestedEnumLocationStatusesFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOfferStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatuses | EnumOfferStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusesFilter<$PrismaModel> | $Enums.OfferStatuses
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOfferStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatuses | EnumOfferStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatuses[] | ListEnumOfferStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusesWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusesFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusesFilter<$PrismaModel>
  }

  export type NestedEnumOfferDiscountTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountTypes | EnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountTypesFilter<$PrismaModel> | $Enums.OfferDiscountTypes
  }

  export type NestedEnumOfferDiscountStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountStatuses | EnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountStatusesFilter<$PrismaModel> | $Enums.OfferDiscountStatuses
  }

  export type NestedEnumOfferDiscountTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountTypes | EnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountTypes[] | ListEnumOfferDiscountTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountTypesWithAggregatesFilter<$PrismaModel> | $Enums.OfferDiscountTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferDiscountTypesFilter<$PrismaModel>
    _max?: NestedEnumOfferDiscountTypesFilter<$PrismaModel>
  }

  export type NestedEnumOfferDiscountStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferDiscountStatuses | EnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferDiscountStatuses[] | ListEnumOfferDiscountStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferDiscountStatusesWithAggregatesFilter<$PrismaModel> | $Enums.OfferDiscountStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferDiscountStatusesFilter<$PrismaModel>
    _max?: NestedEnumOfferDiscountStatusesFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTransactionStatusesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatuses | EnumTransactionStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusesFilter<$PrismaModel> | $Enums.TransactionStatuses
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTransactionStatusesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatuses | EnumTransactionStatusesFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatuses[] | ListEnumTransactionStatusesFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusesWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatuses
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusesFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusesFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationCommentCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    chats?: ChatCreateNestedManyWithoutLocationCommentInput
  }

  export type LocationCommentUncheckedCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    chats?: ChatUncheckedCreateNestedManyWithoutLocationCommentInput
  }

  export type LocationCommentCreateOrConnectWithoutLocationInput = {
    where: LocationCommentWhereUniqueInput
    create: XOR<LocationCommentCreateWithoutLocationInput, LocationCommentUncheckedCreateWithoutLocationInput>
  }

  export type LocationCommentUpsertWithWhereUniqueWithoutLocationInput = {
    where: LocationCommentWhereUniqueInput
    update: XOR<LocationCommentUpdateWithoutLocationInput, LocationCommentUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationCommentCreateWithoutLocationInput, LocationCommentUncheckedCreateWithoutLocationInput>
  }

  export type LocationCommentCreateManyLocationInputEnvelope = {
    data: LocationCommentCreateManyLocationInput | LocationCommentCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type LocationCommentUpdateWithWhereUniqueWithoutLocationInput = {
    where: LocationCommentWhereUniqueInput
    data: XOR<LocationCommentUpdateWithoutLocationInput, LocationCommentUncheckedUpdateWithoutLocationInput>
  }

  export type LocationCommentUpdateManyWithWhereWithoutLocationInput = {
    where: LocationCommentScalarWhereInput
    data: XOR<LocationCommentUpdateManyMutationInput, LocationCommentUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCommentScalarWhereInput = {
    AND?: LocationCommentScalarWhereInput | LocationCommentScalarWhereInput[]
    OR?: LocationCommentScalarWhereInput[]
    NOT?: LocationCommentScalarWhereInput | LocationCommentScalarWhereInput[]
    id?: StringFilter<"LocationComment"> | string
    createdAt?: DateTimeFilter<"LocationComment"> | Date | string
    updatedAt?: DateTimeFilter<"LocationComment"> | Date | string
    comment?: StringFilter<"LocationComment"> | string
    authorId?: StringFilter<"LocationComment"> | string
    locationId?: StringFilter<"LocationComment"> | string
  }

  export type ActionLogCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    initiatorId: string
    offer?: OfferCreateNestedOneWithoutActionLogsInput
    offerDiscount?: OfferDiscountCreateNestedOneWithoutActionLogsInput
  }

  export type ActionLogUncheckedCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    offerId?: string | null
    offerDiscountId?: string | null
    initiatorId: string
  }

  export type ActionLogCreateOrConnectWithoutLocationInput = {
    where: ActionLogWhereUniqueInput
    create: XOR<ActionLogCreateWithoutLocationInput, ActionLogUncheckedCreateWithoutLocationInput>
  }

  export type ActionLogUpsertWithWhereUniqueWithoutLocationInput = {
    where: ActionLogWhereUniqueInput
    update: XOR<ActionLogUpdateWithoutLocationInput, ActionLogUncheckedUpdateWithoutLocationInput>
    create: XOR<ActionLogCreateWithoutLocationInput, ActionLogUncheckedCreateWithoutLocationInput>
  }

  export type ActionLogCreateManyLocationInputEnvelope = {
    data: ActionLogCreateManyLocationInput | ActionLogCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ActionLogUpdateWithWhereUniqueWithoutLocationInput = {
    where: ActionLogWhereUniqueInput
    data: XOR<ActionLogUpdateWithoutLocationInput, ActionLogUncheckedUpdateWithoutLocationInput>
  }

  export type ActionLogUpdateManyWithWhereWithoutLocationInput = {
    where: ActionLogScalarWhereInput
    data: XOR<ActionLogUpdateManyMutationInput, ActionLogUncheckedUpdateManyWithoutLocationInput>
  }

  export type ActionLogScalarWhereInput = {
    AND?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
    OR?: ActionLogScalarWhereInput[]
    NOT?: ActionLogScalarWhereInput | ActionLogScalarWhereInput[]
    id?: StringFilter<"ActionLog"> | string
    createdAt?: DateTimeFilter<"ActionLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActionLog"> | Date | string
    text?: StringFilter<"ActionLog"> | string
    offerId?: StringNullableFilter<"ActionLog"> | string | null
    locationId?: StringNullableFilter<"ActionLog"> | string | null
    offerDiscountId?: StringNullableFilter<"ActionLog"> | string | null
    initiatorId?: StringFilter<"ActionLog"> | string
  }

  export type ChatCreateWithoutLocationCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offer?: OfferCreateNestedOneWithoutChatsInput
    offerComment?: OfferCommentCreateNestedOneWithoutChatsInput
    chatMembers?: ChatMemberCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutLocationCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    offerCommentId?: string | null
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutLocationCommentInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutLocationCommentInput, ChatUncheckedCreateWithoutLocationCommentInput>
  }

  export type ChatCreateManyLocationCommentInputEnvelope = {
    data: ChatCreateManyLocationCommentInput | ChatCreateManyLocationCommentInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpdateToOneWithWhereWithoutLocationCommentsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutLocationCommentsInput, LocationUncheckedUpdateWithoutLocationCommentsInput>
  }

  export type LocationUpdateWithoutLocationCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
    actionLogs?: ActionLogUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutLocationCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
    actionLogs?: ActionLogUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ChatUpsertWithWhereUniqueWithoutLocationCommentInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutLocationCommentInput, ChatUncheckedUpdateWithoutLocationCommentInput>
    create: XOR<ChatCreateWithoutLocationCommentInput, ChatUncheckedCreateWithoutLocationCommentInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutLocationCommentInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutLocationCommentInput, ChatUncheckedUpdateWithoutLocationCommentInput>
  }

  export type ChatUpdateManyWithWhereWithoutLocationCommentInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutLocationCommentInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    name?: StringFilter<"Chat"> | string
    offerId?: StringNullableFilter<"Chat"> | string | null
    offerCommentId?: StringNullableFilter<"Chat"> | string | null
    locationCommentId?: StringNullableFilter<"Chat"> | string | null
  }

  export type OfferImageCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date | string
    width: number
    height: number
  }

  export type OfferImageUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date | string
    width: number
    height: number
  }

  export type OfferImageCreateOrConnectWithoutOfferInput = {
    where: OfferImageWhereUniqueInput
    create: XOR<OfferImageCreateWithoutOfferInput, OfferImageUncheckedCreateWithoutOfferInput>
  }

  export type OfferImageCreateManyOfferInputEnvelope = {
    data: OfferImageCreateManyOfferInput | OfferImageCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    payerId: string
    status: $Enums.TransactionStatuses
    offerDiscount?: OfferDiscountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerDiscountId?: string | null
    payerId: string
    status: $Enums.TransactionStatuses
  }

  export type TransactionCreateOrConnectWithoutOfferInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
  }

  export type TransactionCreateManyOfferInputEnvelope = {
    data: TransactionCreateManyOfferInput | TransactionCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type OfferPublishScheduleCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateTime: Date | string
    status: $Enums.OfferStatuses
  }

  export type OfferPublishScheduleUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateTime: Date | string
    status: $Enums.OfferStatuses
  }

  export type OfferPublishScheduleCreateOrConnectWithoutOfferInput = {
    where: OfferPublishScheduleWhereUniqueInput
    create: XOR<OfferPublishScheduleCreateWithoutOfferInput, OfferPublishScheduleUncheckedCreateWithoutOfferInput>
  }

  export type OfferPublishScheduleCreateManyOfferInputEnvelope = {
    data: OfferPublishScheduleCreateManyOfferInput | OfferPublishScheduleCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type OfferCommentCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    chats?: ChatCreateNestedManyWithoutOfferCommentInput
  }

  export type OfferCommentUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    chats?: ChatUncheckedCreateNestedManyWithoutOfferCommentInput
  }

  export type OfferCommentCreateOrConnectWithoutOfferInput = {
    where: OfferCommentWhereUniqueInput
    create: XOR<OfferCommentCreateWithoutOfferInput, OfferCommentUncheckedCreateWithoutOfferInput>
  }

  export type OfferCommentCreateManyOfferInputEnvelope = {
    data: OfferCommentCreateManyOfferInput | OfferCommentCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type OfferDiscountCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    transactions?: TransactionCreateNestedManyWithoutOfferDiscountInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferDiscountInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountCreateOrConnectWithoutOfferInput = {
    where: OfferDiscountWhereUniqueInput
    create: XOR<OfferDiscountCreateWithoutOfferInput, OfferDiscountUncheckedCreateWithoutOfferInput>
  }

  export type OfferDiscountCreateManyOfferInputEnvelope = {
    data: OfferDiscountCreateManyOfferInput | OfferDiscountCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerComment?: OfferCommentCreateNestedOneWithoutChatsInput
    locationComment?: LocationCommentCreateNestedOneWithoutChatsInput
    chatMembers?: ChatMemberCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerCommentId?: string | null
    locationCommentId?: string | null
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutOfferInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutOfferInput, ChatUncheckedCreateWithoutOfferInput>
  }

  export type ChatCreateManyOfferInputEnvelope = {
    data: ChatCreateManyOfferInput | ChatCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type ActionLogCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    initiatorId: string
    location?: LocationCreateNestedOneWithoutActionLogsInput
    offerDiscount?: OfferDiscountCreateNestedOneWithoutActionLogsInput
  }

  export type ActionLogUncheckedCreateWithoutOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    locationId?: string | null
    offerDiscountId?: string | null
    initiatorId: string
  }

  export type ActionLogCreateOrConnectWithoutOfferInput = {
    where: ActionLogWhereUniqueInput
    create: XOR<ActionLogCreateWithoutOfferInput, ActionLogUncheckedCreateWithoutOfferInput>
  }

  export type ActionLogCreateManyOfferInputEnvelope = {
    data: ActionLogCreateManyOfferInput | ActionLogCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type OfferImageUpsertWithWhereUniqueWithoutOfferInput = {
    where: OfferImageWhereUniqueInput
    update: XOR<OfferImageUpdateWithoutOfferInput, OfferImageUncheckedUpdateWithoutOfferInput>
    create: XOR<OfferImageCreateWithoutOfferInput, OfferImageUncheckedCreateWithoutOfferInput>
  }

  export type OfferImageUpdateWithWhereUniqueWithoutOfferInput = {
    where: OfferImageWhereUniqueInput
    data: XOR<OfferImageUpdateWithoutOfferInput, OfferImageUncheckedUpdateWithoutOfferInput>
  }

  export type OfferImageUpdateManyWithWhereWithoutOfferInput = {
    where: OfferImageScalarWhereInput
    data: XOR<OfferImageUpdateManyMutationInput, OfferImageUncheckedUpdateManyWithoutOfferInput>
  }

  export type OfferImageScalarWhereInput = {
    AND?: OfferImageScalarWhereInput | OfferImageScalarWhereInput[]
    OR?: OfferImageScalarWhereInput[]
    NOT?: OfferImageScalarWhereInput | OfferImageScalarWhereInput[]
    id?: StringFilter<"OfferImage"> | string
    createdAt?: DateTimeFilter<"OfferImage"> | Date | string
    updatedAt?: DateTimeFilter<"OfferImage"> | Date | string
    key?: StringFilter<"OfferImage"> | string
    fileSize?: FloatFilter<"OfferImage"> | number
    mimeType?: StringFilter<"OfferImage"> | string
    url?: StringFilter<"OfferImage"> | string
    expiredAt?: DateTimeFilter<"OfferImage"> | Date | string
    width?: FloatFilter<"OfferImage"> | number
    height?: FloatFilter<"OfferImage"> | number
    offerId?: StringFilter<"OfferImage"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutOfferInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOfferInput, TransactionUncheckedUpdateWithoutOfferInput>
    create: XOR<TransactionCreateWithoutOfferInput, TransactionUncheckedCreateWithoutOfferInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOfferInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOfferInput, TransactionUncheckedUpdateWithoutOfferInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOfferInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOfferInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    amount?: FloatFilter<"Transaction"> | number
    netAmount?: FloatFilter<"Transaction"> | number
    fee?: FloatFilter<"Transaction"> | number
    discount?: FloatFilter<"Transaction"> | number
    title?: StringFilter<"Transaction"> | string
    offerId?: StringFilter<"Transaction"> | string
    offerDiscountId?: StringNullableFilter<"Transaction"> | string | null
    payerId?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusesFilter<"Transaction"> | $Enums.TransactionStatuses
  }

  export type OfferPublishScheduleUpsertWithWhereUniqueWithoutOfferInput = {
    where: OfferPublishScheduleWhereUniqueInput
    update: XOR<OfferPublishScheduleUpdateWithoutOfferInput, OfferPublishScheduleUncheckedUpdateWithoutOfferInput>
    create: XOR<OfferPublishScheduleCreateWithoutOfferInput, OfferPublishScheduleUncheckedCreateWithoutOfferInput>
  }

  export type OfferPublishScheduleUpdateWithWhereUniqueWithoutOfferInput = {
    where: OfferPublishScheduleWhereUniqueInput
    data: XOR<OfferPublishScheduleUpdateWithoutOfferInput, OfferPublishScheduleUncheckedUpdateWithoutOfferInput>
  }

  export type OfferPublishScheduleUpdateManyWithWhereWithoutOfferInput = {
    where: OfferPublishScheduleScalarWhereInput
    data: XOR<OfferPublishScheduleUpdateManyMutationInput, OfferPublishScheduleUncheckedUpdateManyWithoutOfferInput>
  }

  export type OfferPublishScheduleScalarWhereInput = {
    AND?: OfferPublishScheduleScalarWhereInput | OfferPublishScheduleScalarWhereInput[]
    OR?: OfferPublishScheduleScalarWhereInput[]
    NOT?: OfferPublishScheduleScalarWhereInput | OfferPublishScheduleScalarWhereInput[]
    id?: StringFilter<"OfferPublishSchedule"> | string
    createdAt?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    dateTime?: DateTimeFilter<"OfferPublishSchedule"> | Date | string
    status?: EnumOfferStatusesFilter<"OfferPublishSchedule"> | $Enums.OfferStatuses
    offerId?: StringFilter<"OfferPublishSchedule"> | string
  }

  export type OfferCommentUpsertWithWhereUniqueWithoutOfferInput = {
    where: OfferCommentWhereUniqueInput
    update: XOR<OfferCommentUpdateWithoutOfferInput, OfferCommentUncheckedUpdateWithoutOfferInput>
    create: XOR<OfferCommentCreateWithoutOfferInput, OfferCommentUncheckedCreateWithoutOfferInput>
  }

  export type OfferCommentUpdateWithWhereUniqueWithoutOfferInput = {
    where: OfferCommentWhereUniqueInput
    data: XOR<OfferCommentUpdateWithoutOfferInput, OfferCommentUncheckedUpdateWithoutOfferInput>
  }

  export type OfferCommentUpdateManyWithWhereWithoutOfferInput = {
    where: OfferCommentScalarWhereInput
    data: XOR<OfferCommentUpdateManyMutationInput, OfferCommentUncheckedUpdateManyWithoutOfferInput>
  }

  export type OfferCommentScalarWhereInput = {
    AND?: OfferCommentScalarWhereInput | OfferCommentScalarWhereInput[]
    OR?: OfferCommentScalarWhereInput[]
    NOT?: OfferCommentScalarWhereInput | OfferCommentScalarWhereInput[]
    id?: StringFilter<"OfferComment"> | string
    createdAt?: DateTimeFilter<"OfferComment"> | Date | string
    updatedAt?: DateTimeFilter<"OfferComment"> | Date | string
    comment?: StringFilter<"OfferComment"> | string
    authorId?: StringFilter<"OfferComment"> | string
    offerId?: StringFilter<"OfferComment"> | string
  }

  export type OfferDiscountUpsertWithWhereUniqueWithoutOfferInput = {
    where: OfferDiscountWhereUniqueInput
    update: XOR<OfferDiscountUpdateWithoutOfferInput, OfferDiscountUncheckedUpdateWithoutOfferInput>
    create: XOR<OfferDiscountCreateWithoutOfferInput, OfferDiscountUncheckedCreateWithoutOfferInput>
  }

  export type OfferDiscountUpdateWithWhereUniqueWithoutOfferInput = {
    where: OfferDiscountWhereUniqueInput
    data: XOR<OfferDiscountUpdateWithoutOfferInput, OfferDiscountUncheckedUpdateWithoutOfferInput>
  }

  export type OfferDiscountUpdateManyWithWhereWithoutOfferInput = {
    where: OfferDiscountScalarWhereInput
    data: XOR<OfferDiscountUpdateManyMutationInput, OfferDiscountUncheckedUpdateManyWithoutOfferInput>
  }

  export type OfferDiscountScalarWhereInput = {
    AND?: OfferDiscountScalarWhereInput | OfferDiscountScalarWhereInput[]
    OR?: OfferDiscountScalarWhereInput[]
    NOT?: OfferDiscountScalarWhereInput | OfferDiscountScalarWhereInput[]
    id?: StringFilter<"OfferDiscount"> | string
    createdAt?: DateTimeFilter<"OfferDiscount"> | Date | string
    updatedAt?: DateTimeFilter<"OfferDiscount"> | Date | string
    discount?: FloatFilter<"OfferDiscount"> | number
    type?: EnumOfferDiscountTypesFilter<"OfferDiscount"> | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFilter<"OfferDiscount"> | $Enums.OfferDiscountStatuses
    offerId?: StringFilter<"OfferDiscount"> | string
  }

  export type ChatUpsertWithWhereUniqueWithoutOfferInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutOfferInput, ChatUncheckedUpdateWithoutOfferInput>
    create: XOR<ChatCreateWithoutOfferInput, ChatUncheckedCreateWithoutOfferInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutOfferInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutOfferInput, ChatUncheckedUpdateWithoutOfferInput>
  }

  export type ChatUpdateManyWithWhereWithoutOfferInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutOfferInput>
  }

  export type ActionLogUpsertWithWhereUniqueWithoutOfferInput = {
    where: ActionLogWhereUniqueInput
    update: XOR<ActionLogUpdateWithoutOfferInput, ActionLogUncheckedUpdateWithoutOfferInput>
    create: XOR<ActionLogCreateWithoutOfferInput, ActionLogUncheckedCreateWithoutOfferInput>
  }

  export type ActionLogUpdateWithWhereUniqueWithoutOfferInput = {
    where: ActionLogWhereUniqueInput
    data: XOR<ActionLogUpdateWithoutOfferInput, ActionLogUncheckedUpdateWithoutOfferInput>
  }

  export type ActionLogUpdateManyWithWhereWithoutOfferInput = {
    where: ActionLogScalarWhereInput
    data: XOR<ActionLogUpdateManyMutationInput, ActionLogUncheckedUpdateManyWithoutOfferInput>
  }

  export type OfferCreateWithoutOfferCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutOfferCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutOfferCommentsInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutOfferCommentsInput, OfferUncheckedCreateWithoutOfferCommentsInput>
  }

  export type ChatCreateWithoutOfferCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offer?: OfferCreateNestedOneWithoutChatsInput
    locationComment?: LocationCommentCreateNestedOneWithoutChatsInput
    chatMembers?: ChatMemberCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutOfferCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    locationCommentId?: string | null
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutOfferCommentInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutOfferCommentInput, ChatUncheckedCreateWithoutOfferCommentInput>
  }

  export type ChatCreateManyOfferCommentInputEnvelope = {
    data: ChatCreateManyOfferCommentInput | ChatCreateManyOfferCommentInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithoutOfferCommentsInput = {
    update: XOR<OfferUpdateWithoutOfferCommentsInput, OfferUncheckedUpdateWithoutOfferCommentsInput>
    create: XOR<OfferCreateWithoutOfferCommentsInput, OfferUncheckedCreateWithoutOfferCommentsInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutOfferCommentsInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutOfferCommentsInput, OfferUncheckedUpdateWithoutOfferCommentsInput>
  }

  export type OfferUpdateWithoutOfferCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutOfferCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type ChatUpsertWithWhereUniqueWithoutOfferCommentInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutOfferCommentInput, ChatUncheckedUpdateWithoutOfferCommentInput>
    create: XOR<ChatCreateWithoutOfferCommentInput, ChatUncheckedCreateWithoutOfferCommentInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutOfferCommentInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutOfferCommentInput, ChatUncheckedUpdateWithoutOfferCommentInput>
  }

  export type ChatUpdateManyWithWhereWithoutOfferCommentInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutOfferCommentInput>
  }

  export type OfferCreateWithoutOfferPublishSchedulesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutOfferPublishSchedulesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutOfferPublishSchedulesInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutOfferPublishSchedulesInput, OfferUncheckedCreateWithoutOfferPublishSchedulesInput>
  }

  export type OfferUpsertWithoutOfferPublishSchedulesInput = {
    update: XOR<OfferUpdateWithoutOfferPublishSchedulesInput, OfferUncheckedUpdateWithoutOfferPublishSchedulesInput>
    create: XOR<OfferCreateWithoutOfferPublishSchedulesInput, OfferUncheckedCreateWithoutOfferPublishSchedulesInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutOfferPublishSchedulesInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutOfferPublishSchedulesInput, OfferUncheckedUpdateWithoutOfferPublishSchedulesInput>
  }

  export type OfferUpdateWithoutOfferPublishSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutOfferPublishSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutImagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutImagesInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutImagesInput, OfferUncheckedCreateWithoutImagesInput>
  }

  export type OfferUpsertWithoutImagesInput = {
    update: XOR<OfferUpdateWithoutImagesInput, OfferUncheckedUpdateWithoutImagesInput>
    create: XOR<OfferCreateWithoutImagesInput, OfferUncheckedCreateWithoutImagesInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutImagesInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutImagesInput, OfferUncheckedUpdateWithoutImagesInput>
  }

  export type OfferUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateWithoutOfferDiscountsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutOfferDiscountsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutOfferDiscountsInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutOfferDiscountsInput, OfferUncheckedCreateWithoutOfferDiscountsInput>
  }

  export type TransactionCreateWithoutOfferDiscountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    payerId: string
    status: $Enums.TransactionStatuses
    offer: OfferCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOfferDiscountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerId: string
    payerId: string
    status: $Enums.TransactionStatuses
  }

  export type TransactionCreateOrConnectWithoutOfferDiscountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOfferDiscountInput, TransactionUncheckedCreateWithoutOfferDiscountInput>
  }

  export type TransactionCreateManyOfferDiscountInputEnvelope = {
    data: TransactionCreateManyOfferDiscountInput | TransactionCreateManyOfferDiscountInput[]
    skipDuplicates?: boolean
  }

  export type ActionLogCreateWithoutOfferDiscountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    initiatorId: string
    offer?: OfferCreateNestedOneWithoutActionLogsInput
    location?: LocationCreateNestedOneWithoutActionLogsInput
  }

  export type ActionLogUncheckedCreateWithoutOfferDiscountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    offerId?: string | null
    locationId?: string | null
    initiatorId: string
  }

  export type ActionLogCreateOrConnectWithoutOfferDiscountInput = {
    where: ActionLogWhereUniqueInput
    create: XOR<ActionLogCreateWithoutOfferDiscountInput, ActionLogUncheckedCreateWithoutOfferDiscountInput>
  }

  export type ActionLogCreateManyOfferDiscountInputEnvelope = {
    data: ActionLogCreateManyOfferDiscountInput | ActionLogCreateManyOfferDiscountInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithoutOfferDiscountsInput = {
    update: XOR<OfferUpdateWithoutOfferDiscountsInput, OfferUncheckedUpdateWithoutOfferDiscountsInput>
    create: XOR<OfferCreateWithoutOfferDiscountsInput, OfferUncheckedCreateWithoutOfferDiscountsInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutOfferDiscountsInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutOfferDiscountsInput, OfferUncheckedUpdateWithoutOfferDiscountsInput>
  }

  export type OfferUpdateWithoutOfferDiscountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutOfferDiscountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutOfferDiscountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOfferDiscountInput, TransactionUncheckedUpdateWithoutOfferDiscountInput>
    create: XOR<TransactionCreateWithoutOfferDiscountInput, TransactionUncheckedCreateWithoutOfferDiscountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOfferDiscountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOfferDiscountInput, TransactionUncheckedUpdateWithoutOfferDiscountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOfferDiscountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOfferDiscountInput>
  }

  export type ActionLogUpsertWithWhereUniqueWithoutOfferDiscountInput = {
    where: ActionLogWhereUniqueInput
    update: XOR<ActionLogUpdateWithoutOfferDiscountInput, ActionLogUncheckedUpdateWithoutOfferDiscountInput>
    create: XOR<ActionLogCreateWithoutOfferDiscountInput, ActionLogUncheckedCreateWithoutOfferDiscountInput>
  }

  export type ActionLogUpdateWithWhereUniqueWithoutOfferDiscountInput = {
    where: ActionLogWhereUniqueInput
    data: XOR<ActionLogUpdateWithoutOfferDiscountInput, ActionLogUncheckedUpdateWithoutOfferDiscountInput>
  }

  export type ActionLogUpdateManyWithWhereWithoutOfferDiscountInput = {
    where: ActionLogScalarWhereInput
    data: XOR<ActionLogUpdateManyMutationInput, ActionLogUncheckedUpdateManyWithoutOfferDiscountInput>
  }

  export type OfferCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutTransactionsInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutTransactionsInput, OfferUncheckedCreateWithoutTransactionsInput>
  }

  export type OfferDiscountCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offer: OfferCreateNestedOneWithoutOfferDiscountsInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offerId: string
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountCreateOrConnectWithoutTransactionsInput = {
    where: OfferDiscountWhereUniqueInput
    create: XOR<OfferDiscountCreateWithoutTransactionsInput, OfferDiscountUncheckedCreateWithoutTransactionsInput>
  }

  export type OfferUpsertWithoutTransactionsInput = {
    update: XOR<OfferUpdateWithoutTransactionsInput, OfferUncheckedUpdateWithoutTransactionsInput>
    create: XOR<OfferCreateWithoutTransactionsInput, OfferUncheckedCreateWithoutTransactionsInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutTransactionsInput, OfferUncheckedUpdateWithoutTransactionsInput>
  }

  export type OfferUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferDiscountUpsertWithoutTransactionsInput = {
    update: XOR<OfferDiscountUpdateWithoutTransactionsInput, OfferDiscountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<OfferDiscountCreateWithoutTransactionsInput, OfferDiscountUncheckedCreateWithoutTransactionsInput>
    where?: OfferDiscountWhereInput
  }

  export type OfferDiscountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: OfferDiscountWhereInput
    data: XOR<OfferDiscountUpdateWithoutTransactionsInput, OfferDiscountUncheckedUpdateWithoutTransactionsInput>
  }

  export type OfferDiscountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offer?: OfferUpdateOneRequiredWithoutOfferDiscountsNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferDiscountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offerId?: StringFieldUpdateOperationsInput | string
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    actionLogs?: ActionLogUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutChatsInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutChatsInput, OfferUncheckedCreateWithoutChatsInput>
  }

  export type OfferCommentCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    offer: OfferCreateNestedOneWithoutOfferCommentsInput
  }

  export type OfferCommentUncheckedCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    offerId: string
  }

  export type OfferCommentCreateOrConnectWithoutChatsInput = {
    where: OfferCommentWhereUniqueInput
    create: XOR<OfferCommentCreateWithoutChatsInput, OfferCommentUncheckedCreateWithoutChatsInput>
  }

  export type LocationCommentCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    location: LocationCreateNestedOneWithoutLocationCommentsInput
  }

  export type LocationCommentUncheckedCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
    locationId: string
  }

  export type LocationCommentCreateOrConnectWithoutChatsInput = {
    where: LocationCommentWhereUniqueInput
    create: XOR<LocationCommentCreateWithoutChatsInput, LocationCommentUncheckedCreateWithoutChatsInput>
  }

  export type ChatMemberCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ChatMemberUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ChatMemberCreateOrConnectWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberCreateManyChatInputEnvelope = {
    data: ChatMemberCreateManyChatInput | ChatMemberCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
  }

  export type ChatMessageUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
  }

  export type ChatMessageCreateOrConnectWithoutChatInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput>
  }

  export type ChatMessageCreateManyChatInputEnvelope = {
    data: ChatMessageCreateManyChatInput | ChatMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithoutChatsInput = {
    update: XOR<OfferUpdateWithoutChatsInput, OfferUncheckedUpdateWithoutChatsInput>
    create: XOR<OfferCreateWithoutChatsInput, OfferUncheckedCreateWithoutChatsInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutChatsInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutChatsInput, OfferUncheckedUpdateWithoutChatsInput>
  }

  export type OfferUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCommentUpsertWithoutChatsInput = {
    update: XOR<OfferCommentUpdateWithoutChatsInput, OfferCommentUncheckedUpdateWithoutChatsInput>
    create: XOR<OfferCommentCreateWithoutChatsInput, OfferCommentUncheckedCreateWithoutChatsInput>
    where?: OfferCommentWhereInput
  }

  export type OfferCommentUpdateToOneWithWhereWithoutChatsInput = {
    where?: OfferCommentWhereInput
    data: XOR<OfferCommentUpdateWithoutChatsInput, OfferCommentUncheckedUpdateWithoutChatsInput>
  }

  export type OfferCommentUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneRequiredWithoutOfferCommentsNestedInput
  }

  export type OfferCommentUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCommentUpsertWithoutChatsInput = {
    update: XOR<LocationCommentUpdateWithoutChatsInput, LocationCommentUncheckedUpdateWithoutChatsInput>
    create: XOR<LocationCommentCreateWithoutChatsInput, LocationCommentUncheckedCreateWithoutChatsInput>
    where?: LocationCommentWhereInput
  }

  export type LocationCommentUpdateToOneWithWhereWithoutChatsInput = {
    where?: LocationCommentWhereInput
    data: XOR<LocationCommentUpdateWithoutChatsInput, LocationCommentUncheckedUpdateWithoutChatsInput>
  }

  export type LocationCommentUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutLocationCommentsNestedInput
  }

  export type LocationCommentUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutChatInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatMemberScalarWhereInput = {
    AND?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    OR?: ChatMemberScalarWhereInput[]
    NOT?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    id?: StringFilter<"ChatMember"> | string
    createdAt?: DateTimeFilter<"ChatMember"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMember"> | Date | string
    userId?: StringFilter<"ChatMember"> | string
    chatId?: StringFilter<"ChatMember"> | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatInput, ChatMessageUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMessageCreateWithoutChatInput, ChatMessageUncheckedCreateWithoutChatInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatInput, ChatMessageUncheckedUpdateWithoutChatInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    text?: StringFilter<"ChatMessage"> | string
    authorId?: StringFilter<"ChatMessage"> | string
    chatId?: StringFilter<"ChatMessage"> | string
  }

  export type ChatCreateWithoutChatMembersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offer?: OfferCreateNestedOneWithoutChatsInput
    offerComment?: OfferCommentCreateNestedOneWithoutChatsInput
    locationComment?: LocationCommentCreateNestedOneWithoutChatsInput
    messages?: ChatMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutChatMembersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    offerCommentId?: string | null
    locationCommentId?: string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutChatMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
  }

  export type ChatUpsertWithoutChatMembersInput = {
    update: XOR<ChatUpdateWithoutChatMembersInput, ChatUncheckedUpdateWithoutChatMembersInput>
    create: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutChatMembersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutChatMembersInput, ChatUncheckedUpdateWithoutChatMembersInput>
  }

  export type ChatUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutChatsNestedInput
    offerComment?: OfferCommentUpdateOneWithoutChatsNestedInput
    locationComment?: LocationCommentUpdateOneWithoutChatsNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offer?: OfferCreateNestedOneWithoutChatsInput
    offerComment?: OfferCommentCreateNestedOneWithoutChatsInput
    locationComment?: LocationCommentCreateNestedOneWithoutChatsInput
    chatMembers?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    offerCommentId?: string | null
    locationCommentId?: string | null
    chatMembers?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutChatsNestedInput
    offerComment?: OfferCommentUpdateOneWithoutChatsNestedInput
    locationComment?: LocationCommentUpdateOneWithoutChatsNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type OfferCreateWithoutActionLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageCreateNestedManyWithoutOfferInput
    transactions?: TransactionCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountCreateNestedManyWithoutOfferInput
    chats?: ChatCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutActionLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    keyFeatures: string
    priceAmount: number
    tags?: OfferCreatetagsInput | string[]
    status: $Enums.OfferStatuses
    companyId: string
    images?: OfferImageUncheckedCreateNestedManyWithoutOfferInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedCreateNestedManyWithoutOfferInput
    offerComments?: OfferCommentUncheckedCreateNestedManyWithoutOfferInput
    offerDiscounts?: OfferDiscountUncheckedCreateNestedManyWithoutOfferInput
    chats?: ChatUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutActionLogsInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutActionLogsInput, OfferUncheckedCreateWithoutActionLogsInput>
  }

  export type OfferDiscountCreateWithoutActionLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offer: OfferCreateNestedOneWithoutOfferDiscountsInput
    transactions?: TransactionCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountUncheckedCreateWithoutActionLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
    offerId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOfferDiscountInput
  }

  export type OfferDiscountCreateOrConnectWithoutActionLogsInput = {
    where: OfferDiscountWhereUniqueInput
    create: XOR<OfferDiscountCreateWithoutActionLogsInput, OfferDiscountUncheckedCreateWithoutActionLogsInput>
  }

  export type OfferUpsertWithoutActionLogsInput = {
    update: XOR<OfferUpdateWithoutActionLogsInput, OfferUncheckedUpdateWithoutActionLogsInput>
    create: XOR<OfferCreateWithoutActionLogsInput, OfferUncheckedCreateWithoutActionLogsInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutActionLogsInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutActionLogsInput, OfferUncheckedUpdateWithoutActionLogsInput>
  }

  export type OfferUpdateWithoutActionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUpdateManyWithoutOfferNestedInput
    chats?: ChatUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutActionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keyFeatures?: StringFieldUpdateOperationsInput | string
    priceAmount?: FloatFieldUpdateOperationsInput | number
    tags?: OfferUpdatetagsInput | string[]
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
    companyId?: StringFieldUpdateOperationsInput | string
    images?: OfferImageUncheckedUpdateManyWithoutOfferNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutOfferNestedInput
    offerPublishSchedules?: OfferPublishScheduleUncheckedUpdateManyWithoutOfferNestedInput
    offerComments?: OfferCommentUncheckedUpdateManyWithoutOfferNestedInput
    offerDiscounts?: OfferDiscountUncheckedUpdateManyWithoutOfferNestedInput
    chats?: ChatUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type LocationUpdateToOneWithWhereWithoutActionLogsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutActionLogsInput, LocationUncheckedUpdateWithoutActionLogsInput>
  }

  export type LocationUpdateWithoutActionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
    locationComments?: LocationCommentUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutActionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLocationStatusesFieldUpdateOperationsInput | $Enums.LocationStatuses
    placeId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    stateIndex?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    countryIndex?: StringFieldUpdateOperationsInput | string
    locationComments?: LocationCommentUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type OfferDiscountUpsertWithoutActionLogsInput = {
    update: XOR<OfferDiscountUpdateWithoutActionLogsInput, OfferDiscountUncheckedUpdateWithoutActionLogsInput>
    create: XOR<OfferDiscountCreateWithoutActionLogsInput, OfferDiscountUncheckedCreateWithoutActionLogsInput>
    where?: OfferDiscountWhereInput
  }

  export type OfferDiscountUpdateToOneWithWhereWithoutActionLogsInput = {
    where?: OfferDiscountWhereInput
    data: XOR<OfferDiscountUpdateWithoutActionLogsInput, OfferDiscountUncheckedUpdateWithoutActionLogsInput>
  }

  export type OfferDiscountUpdateWithoutActionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offer?: OfferUpdateOneRequiredWithoutOfferDiscountsNestedInput
    transactions?: TransactionUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferDiscountUncheckedUpdateWithoutActionLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    offerId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutOfferDiscountNestedInput
  }

  export type LocationCommentUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chats?: ChatUpdateManyWithoutLocationCommentNestedInput
  }

  export type LocationCommentUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutLocationCommentNestedInput
  }

  export type LocationCommentCreateManyLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
  }

  export type LocationCommentUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutActionLogsNestedInput
    offerDiscount?: OfferDiscountUpdateOneWithoutActionLogsNestedInput
  }

  export type ActionLogUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogCreateManyLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    offerId?: string | null
    offerDiscountId?: string | null
    initiatorId: string
  }

  export type ActionLogUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateManyLocationCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    offerCommentId?: string | null
  }

  export type ChatUpdateWithoutLocationCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutChatsNestedInput
    offerComment?: OfferCommentUpdateOneWithoutChatsNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutLocationCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutLocationCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfferImageCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    fileSize: number
    mimeType: string
    url: string
    expiredAt: Date | string
    width: number
    height: number
  }

  export type TransactionCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerDiscountId?: string | null
    payerId: string
    status: $Enums.TransactionStatuses
  }

  export type OfferPublishScheduleCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateTime: Date | string
    status: $Enums.OfferStatuses
  }

  export type OfferCommentCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment: string
    authorId: string
  }

  export type OfferDiscountCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discount: number
    type: $Enums.OfferDiscountTypes
    status: $Enums.OfferDiscountStatuses
  }

  export type ChatCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerCommentId?: string | null
    locationCommentId?: string | null
  }

  export type ActionLogCreateManyOfferInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    locationId?: string | null
    offerDiscountId?: string | null
    initiatorId: string
  }

  export type OfferImageUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
  }

  export type OfferImageUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
  }

  export type OfferImageUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    fileSize?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
    offerDiscount?: OfferDiscountUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type TransactionUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type OfferPublishScheduleUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
  }

  export type OfferPublishScheduleUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
  }

  export type OfferPublishScheduleUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOfferStatusesFieldUpdateOperationsInput | $Enums.OfferStatuses
  }

  export type OfferCommentUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chats?: ChatUpdateManyWithoutOfferCommentNestedInput
  }

  export type OfferCommentUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutOfferCommentNestedInput
  }

  export type OfferCommentUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferDiscountUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    transactions?: TransactionUpdateManyWithoutOfferDiscountNestedInput
    actionLogs?: ActionLogUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferDiscountUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
    transactions?: TransactionUncheckedUpdateManyWithoutOfferDiscountNestedInput
    actionLogs?: ActionLogUncheckedUpdateManyWithoutOfferDiscountNestedInput
  }

  export type OfferDiscountUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    type?: EnumOfferDiscountTypesFieldUpdateOperationsInput | $Enums.OfferDiscountTypes
    status?: EnumOfferDiscountStatusesFieldUpdateOperationsInput | $Enums.OfferDiscountStatuses
  }

  export type ChatUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerComment?: OfferCommentUpdateOneWithoutChatsNestedInput
    locationComment?: LocationCommentUpdateOneWithoutChatsNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionLogUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneWithoutActionLogsNestedInput
    offerDiscount?: OfferDiscountUpdateOneWithoutActionLogsNestedInput
  }

  export type ActionLogUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    offerDiscountId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateManyOfferCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    offerId?: string | null
    locationCommentId?: string | null
  }

  export type ChatUpdateWithoutOfferCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutChatsNestedInput
    locationComment?: LocationCommentUpdateOneWithoutChatsNestedInput
    chatMembers?: ChatMemberUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutOfferCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatMembers?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutOfferCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    locationCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyOfferDiscountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    netAmount: number
    fee: number
    discount: number
    title: string
    offerId: string
    payerId: string
    status: $Enums.TransactionStatuses
  }

  export type ActionLogCreateManyOfferDiscountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    offerId?: string | null
    locationId?: string | null
    initiatorId: string
  }

  export type TransactionUpdateWithoutOfferDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
    offer?: OfferUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOfferDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type TransactionUncheckedUpdateManyWithoutOfferDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    offerId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusesFieldUpdateOperationsInput | $Enums.TransactionStatuses
  }

  export type ActionLogUpdateWithoutOfferDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    offer?: OfferUpdateOneWithoutActionLogsNestedInput
    location?: LocationUpdateOneWithoutActionLogsNestedInput
  }

  export type ActionLogUncheckedUpdateWithoutOfferDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionLogUncheckedUpdateManyWithoutOfferDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    initiatorId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberCreateManyChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ChatMessageCreateManyChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    text: string
    authorId: string
  }

  export type ChatMemberUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}