# Expiry API — Project Context

## Project Summary

**Expiry** is a document lifecycle management system built with **Node.js**, **Fastify**, **TypeScript**, and **PostgreSQL**. The system helps teams track, manage, and extract information from documents (contracts, certificates, licenses, etc.) with expiration dates.

### Core Features
- **Multi-tenant architecture**: Each team gets its own PostgreSQL database (tenant DB) alongside the master DB for user/team management
- **Document management**: Create, update, delete documents; upload files to Google Cloud Storage
- **Automated field extraction**: OCR/regex-based extraction of expiry dates, issue dates, counterparty info, amounts
- **Risk assessment**: Documents are classified by risk level (LOW, MEDIUM, HIGH)
- **Audit logging**: All actions (create, update, delete) are logged in the tenant DB
- **Team collaboration**: Invite users, manage team membership, set roles
- **Notifications**: In-app notifications for user invites, deletions, and document changes
- **Tags**: Flexible tagging system for document organization

### Tech Stack
- **Framework**: Fastify (HTTP server)
- **Language**: TypeScript
- **Database**: PostgreSQL (master + multi-tenant)
- **ORM**: Prisma
- **Validation**: Zod
- **DI Container**: Awilix
- **File Storage**: Google Cloud Storage (GCS)
- **Authentication**: JWT (with refresh tokens)
- **API Docs**: Swagger/OpenAPI

---

## Project Structure

```
src/
├── database/
│   ├── infra/                    # Tenant DB provisioning, migrations, utilities
│   ├── master/
│   │   ├── prisma/               # Master DB schema
│   │   ├── generated/            # Prisma client (generated)
│   │   ├── dbml/                 # ER diagram
│   │   └── repositories/         # Data access layer for master DB
│   │       ├── user/
│   │       ├── team/
│   │       ├── team-member/
│   │       ├── team-stat/
│   │       ├── notification/
│   │       └── avatar/
│   └── team/
│       ├── prisma/               # Tenant DB schema
│       ├── generated/            # Prisma client (generated)
│       ├── dbml/                 # ER diagram
│       └── repositories/         # Data access layer for tenant DB
│           ├── document/
│           ├── document-tag/
│           ├── document-extracted-field/
│           ├── file/
│           ├── tag/
│           └── action-log/
├── lib/
│   ├── awilix/                   # DI container setup & utilities
│   ├── constants/                # Shared constants (time, etc.)
│   ├── errors/                   # Error factory functions
│   ├── fastify/                  # Fastify setup, middleware, decorators
│   ├── gcp/                      # Google Cloud Storage service
│   ├── hashing/                  # Password hashing utilities
│   ├── utils/                    # Shared utilities (repository helpers)
│   └── validation/               # Zod schemas (by module)
│       ├── action-log/
│       ├── auth/
│       ├── document/
│       ├── user/
│       ├── team/
│       └── ... (one per feature)
├── modules/                      # Feature modules
│   ├── auth/                     # Login & registration
│   ├── user/                     # User management, invites
│   ├── team/                     # Team CRUD, provisioning
│   ├── document/                 # Document CRUD, file uploads
│   ├── tag/                      # Tag queries
│   ├── action-log/               # Audit trail queries
│   ├── notification/             # In-app notifications
│   └── application/              # Infrastructure utilities (NOT a feature)
├── plugins/                      # Fastify plugins (auth, prisma, etc.)
└── types/                        # TypeScript type definitions
    ├── di-container.type.ts      # DI container type (Cradle)
    ├── env.type.ts               # Environment config type
    └── ... (other types)
```

---

## Database Architecture

### Master Database (`MASTER_DATABASE_URL`)
Central database shared across all teams. Holds:
- **User**: Global users (email, phone, password, roles, status)
- **Team**: Team metadata (name, logo, created/updated dates)
- **TeamMember**: Team membership (userId + teamId + role)
- **TeamStat**: Stats summary per team (document counts by status/risk)
- **Notification**: In-app notifications (user invites, deletions, document changes)
- **NotificationPreference**: User notification settings
- **Avatar**: User profile pictures
- **RefreshToken**: JWT refresh token records

### Tenant Databases
Each team gets a dedicated PostgreSQL database named `{teamId}` (UUID). The connection URL replaces the database name in `MASTER_DATABASE_URL`:
- **Master**: `postgres://user:pass@localhost:5432/expiry`
- **Tenant** (e.g., team `abc-123`): `postgres://user:pass@localhost:5432/abc-123`

**Tenant DB Schema**:
- **Document**: Document records with status, expiry date, risk level
- **DocumentTag**: M:M junction between documents and tags
- **Tag**: Tags (created inline during document create/update)
- **File**: File metadata for each document (stored in GCS, signed URLs)
- **DocumentExtractedField**: Extracted fields per document (expiry date, issue date, counterparty, amount)
- **ActionLog**: Audit trail (create, update, delete actions by user)

---

## Module Guide

### Modules (Feature Modules)

| Module | Purpose | Scope | DB |
|--------|---------|-------|-----|
| **auth** | Login & registration | Public (no team context) | Master |
| **user** | Invite, delete, update users | Master-level operations | Master |
| **team** | CRUD teams, provision/drop tenant DBs | Master + tenant provisioning | Master |
| **document** | CRUD documents, file uploads, tags | Team-scoped operations | Tenant |
| **tag** | Query tags | Team-scoped queries | Tenant |
| **action-log** | Query audit trail | Team-scoped queries | Tenant |
| **notification** | Query & toggle notifications | User-scoped operations | Master |
| **application** | Infrastructure utilities, tenant DB init | Shared infrastructure | Both |

### Module Anatomy

Every feature module follows this structure:
```
src/modules/<name>/
├── index.ts                  # Exports autoPrefix for route registration
├── <name>.route.ts           # Route definitions with Zod schemas
├── <name>.handler.ts         # Request handlers (thin wrapper around service)
├── <name>.service.ts         # Business logic
├── <name>.types.ts           # (optional) Module-specific types
├── <name>.constants.ts       # (optional) Module-specific constants
└── CLAUDE.md                 # Module documentation
```

Validation schemas live in `src/lib/validation/<module>/<module>.schema.ts` (one schema file per module).

---

## Key Patterns & Conventions

### 1. Dependency Injection (Awilix)
- Use **factory functions** (not classes)
- Parameter names must match registered DI names in the container
- Register all factories with `addDIResolverName(factory, "serviceName")`
- Types are declared in `src/types/di-container.type.ts` (Cradle)

**Example**:
```typescript
export const createDocumentService = (
    applicationService: ApplicationService,  // Param name = DI name
    gcpService: GcpService,
    log: FastifyBaseLogger
): DocumentService => ({
    // implementation
});

addDIResolverName(createDocumentService, "documentService");
```

### 2. Validation (Zod)
- Define schemas in `src/lib/validation/<module>/<module>.schema.ts`
- Export inferred types from schemas
- Use schemas in route definitions for automatic validation and OpenAPI docs

**Example**:
```typescript
const createDocumentBodySchema = z.object({
    name: z.string(),
    tags: z.array(z.string()),
});
type CreateDocumentInput = z.infer<typeof createDocumentBodySchema>;
```

### 3. Error Handling
Use predefined error factories from `src/lib/errors/errors.ts`:
```typescript
throw NotFoundError("Document not found");
throw BadRequestError("Invalid input");
throw ConflictError("Team already exists");
```

### 4. Multi-Tenant Pattern
Getting tenant repositories:
```typescript
// In application.service.ts
const documentRepository = 
    await applicationService.initDocumentRepository(teamId);

// This:
// 1. Verifies team exists in master DB
// 2. Builds tenant connection URL (replaces database name)
// 3. Instantiates Prisma client
// 4. Returns the repository
```

### 5. Pagination
All list endpoints return paginated results with offset-based pagination:
```typescript
{
    data: { items: [...], pagination: { page, perPage, total, totalPages, prevPage, nextPage } },
    message: "..."
}
```

### 6. Repository Pattern
Extend `BaseRepository` for custom data access logic:
```typescript
export type DocumentRepository = BaseRepository<"document"> & {
    findWithFilters: (filters) => Promise<Document[]>;
    findByTagId: (tagId: string) => Promise<Document[]>;
};
```

### 7. Transaction Management
Use `withRepositories` helper for transactional operations:
```typescript
await withRepositories(
    [documentRepository, tagRepository],
    (docRepo, tagRepo) => {
        // Atomic operations
    }
);
```

---

## Route Registration & Authorization

Routes are registered in route files with:
- **Zod schemas** for request/response validation and OpenAPI docs
- **Prehandlers** for auth and access control

**Example**:
```typescript
fastify.post("/", {
    schema: {
        tags: ["document"],
        summary: "Create document",
        body: createDocumentBodySchema,
        response: { 200: createDocumentResponseSchema },
    },
    preHandler: [
        fastify.authorization,
        fastify.checkAccess(Actions.CREATE_DOCUMENT),
    ],
}, handler.createDocument);
```

### Authorization Levels
- `fastify.authorization` — User must be authenticated
- `fastify.checkAccess(action)` — User must have permission for the action in the team context

---

## Common Workflows

### Creating a New Feature Module
1. Run: `npm run generate:module featureName`
2. Define Zod schema in `src/lib/validation/<featureName>/<featureName>.schema.ts`
3. Add routes in `<featureName>.route.ts`
4. Implement service logic in `<featureName>.service.ts`
5. Register routes in main Fastify setup
6. Run: `npm run lint:fix && npm run typescript`

### Creating a New Repository
1. Run: `npm run generate:repository entityName`
2. Extend `BaseRepository` with custom methods
3. Register in DI container (Cradle type)
4. Use in services

### Adding a Database Model
1. Edit `src/database/master/prisma/schema.prisma` (or team schema)
2. Run: `npm run prisma:migrate:create`
3. Run: `npm run prisma:migrate:apply`
4. (Optional) Run: `npm run generate:repository modelName`

### Running Tests
- Unit: `npm run test:unit`
- Integration: Docker Compose + `npm run test:int`

---

## Code Style & Conventions

- **No inline comments** — Code should be self-documenting
- **JSDoc only for functions** — When needed for non-obvious behavior
- **No barrel files** — Import directly from source files, not `index.ts` re-exports
- **No premature abstractions** — Keep it simple, no hypothetical generics
- **Thin handlers** — Delegate business logic to services
- **Factory functions** — Not classes (Awilix pattern)
- **Validate at boundaries** — Only at API endpoints or external integrations, not internal calls
- **Trust internal guarantees** — No defensive checks for internal code
- **Absolute imports** — Use `@/` prefix for imports from `src/`

---

## Key Files & Locations

| What | Where |
|------|-------|
| Master DB schema | `src/database/master/prisma/schema.prisma` |
| Tenant DB schema | `src/database/team/prisma/schema.prisma` |
| DI container type | `src/types/di-container.type.ts` |
| Environment config | `src/types/env.type.ts` |
| Error factories | `src/lib/errors/errors.ts` |
| Validation schemas | `src/lib/validation/<module>/` |
| Repositories (master) | `src/database/master/repositories/` |
| Repositories (tenant) | `src/database/team/repositories/` |
| Module docs | `src/modules/<name>/CLAUDE.md` |

---

## Important Notes

### Multi-Tenant DB Provisioning
- Creating a team provisions a new PostgreSQL database
- The database name = team UUID
- Connection URL is dynamically built by replacing the database name
- Migrations run automatically via `migrateTenantDatabase()`
- Deleting a team drops the entire database

### Audit Logging
- All document/user/team changes are logged in the tenant DB (ActionLog table)
- Logs are written **inside the same transaction** as the mutation
- Logs include: action type, actor info, subject info, timestamp
- Logs are read-only — never deleted

### File Storage
- All files (documents, avatars, logos) are stored in Google Cloud Storage
- Signed URLs are generated with expiration times
- GCS cleanup is best-effort in error handlers

### Notifications
- Notifications are created by business logic (team, document, user modules)
- The notification module only reads and updates them
- Notifications are scoped to the master DB (user-level)

---

## Troubleshooting & Debugging

### "Team not found" errors
- Check team exists in master DB before accessing tenant DB
- Use `applicationService.initDocumentRepository(teamId)` which validates

### Tenant DB connection failures
- Verify `MASTER_DATABASE_URL` format
- Check database name replacement logic in `applicationService`
- Ensure PostgreSQL allows dynamic database creation

### Missing action logs
- Verify action log creation happens **inside** the transaction
- Check `ActionLogTypes` enum matches the action being logged

### Avatar/logo upload failures
- Check GCS bucket permissions
- Verify signed URLs aren't expired before download
- Check cleanup in error handlers (delete uploaded files on rollback)

---

Last updated: 2026-04-04
