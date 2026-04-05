# Expiry API — Context Index

Quick reference guide to all project documentation. Start here to understand the codebase without scanning the entire project.

---

## 🚀 Getting Started

1. **[PROJECT_CONTEXT.md](PROJECT_CONTEXT.md)** — Comprehensive project overview
   - Project summary & architecture
   - Database schema (master + tenant)
   - Key patterns & conventions
   - Common workflows
   - Code style guidelines

2. **[CLAUDE.md](CLAUDE.md)** — Project instructions for Claude Code
   - Code generation commands
   - Architecture & directory structure
   - Dependency injection pattern
   - Common tasks & conventions

---

## 📦 Module Documentation

Each feature module has its own context file describing routes, behavior, and dependencies.

### Core Modules

| Module | Purpose | Doc Link |
|--------|---------|----------|
| **auth** | Login & registration | [auth/CLAUDE.md](src/modules/auth/CLAUDE.md) |
| **user** | User management, invites | [user/CLAUDE.md](src/modules/user/CLAUDE.md) |
| **team** | Team CRUD, DB provisioning | [team/CLAUDE.md](src/modules/team/CLAUDE.md) |
| **document** | Document CRUD, file uploads | [document/CLAUDE.md](src/modules/document/CLAUDE.md) |
| **tag** | Tag queries (read-only) | [tag/CLAUDE.md](src/modules/tag/CLAUDE.md) |
| **action-log** | Audit trail queries | [action-log/CLAUDE.md](src/modules/action-log/CLAUDE.md) |
| **notification** | In-app notifications | [notification/CLAUDE.md](src/modules/notification/CLAUDE.md) |
| **application** | Infrastructure utilities | [application/CLAUDE.md](src/modules/application/CLAUDE.md) |

---

## 🗂️ Key Directory Reference

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `src/database/master/prisma/` | Master DB schema | `schema.prisma` |
| `src/database/team/prisma/` | Tenant DB schema | `schema.prisma` |
| `src/database/master/repositories/` | Master DB data access | `user/`, `team/`, `notification/`, etc. |
| `src/database/team/repositories/` | Tenant DB data access | `document/`, `tag/`, `action-log/`, etc. |
| `src/lib/validation/` | Zod schemas (by module) | `auth/`, `user/`, `document/`, etc. |
| `src/lib/errors/` | Error factories | `errors.ts` |
| `src/lib/gcp/` | Google Cloud Storage | `gcp.service.ts`, `gcp.types.ts` |
| `src/lib/awilix/` | Dependency injection | `awilix.ts`, `resolver-registration.ts` |
| `src/types/` | TypeScript types | `di-container.type.ts`, `env.type.ts` |

---

## 🔍 Quick Reference

### Database Pattern
- **Master DB**: User, Team, Notification, Avatar, Roles, Preferences
- **Tenant DB** (per team): Document, Tag, File, ActionLog, ExtractedFields
- Each team's DB named after team UUID, connection URL built dynamically

### Route Naming Convention
- `GET /api/<module>/` — List (paginated)
- `GET /api/<module>/:id` — Fetch single
- `POST /api/<module>/` — Create
- `PUT /api/<module>/:id` — Full update
- `PATCH /api/<module>/:id/<action>` — Partial update / action
- `DELETE /api/<module>/:id` — Delete

### Authorization Levels
- `fastify.authorization` — Authenticated user required
- `fastify.checkAccess(action)` — Team-scoped permission required

### Module Structure
```
src/modules/<name>/
├── index.ts              # Route registration
├── <name>.route.ts       # Route definitions
├── <name>.handler.ts     # HTTP handlers (thin)
├── <name>.service.ts     # Business logic
├── <name>.types.ts       # (optional) Types
├── <name>.constants.ts   # (optional) Constants
└── CLAUDE.md             # Module documentation
```

### DI Container
- All dependencies registered in `src/types/di-container.type.ts` (Cradle)
- Factories use parameter names matching DI names
- Register with `addDIResolverName(factory, "serviceName")`
- Instantiation happens in Fastify plugins

---

## 📝 Common Tasks

**Add a new feature module:**
```bash
npm run generate:module featureName
# Define Zod schemas in src/lib/validation/<featureName>/
# Implement routes, handlers, services
npm run lint:fix && npm run typescript
```

**Add a new repository:**
```bash
npm run generate:repository entityName
```

**Add a database model:**
1. Edit `src/database/master/prisma/schema.prisma` or team schema
2. Run `npm run prisma:migrate:create`
3. Run `npm run prisma:migrate:apply`
4. (Optional) Run `npm run generate:repository modelName`

**Run tests:**
```bash
npm run test:unit
npm run test:int  # requires docker-compose
```

---

## 🐛 Debugging Tips

| Issue | Check |
|-------|-------|
| "Team not found" | Verify `applicationService.initDocumentRepository()` validates team exists |
| Tenant DB errors | Verify `MASTER_DATABASE_URL` format and database name replacement in application.service.ts |
| Missing action logs | Ensure action log creation happens **inside** the transaction |
| File upload failures | Check GCS bucket permissions and signed URL expiration times |
| Type errors | Run `npm run typescript` to validate DI container types |

---

## 📍 You Are Here

- **Project root**: `D:\Projects\max\Expiry\Expiry-api\`
- **Main branch**: `main`
- **Recent commits**: Type-related features, auth, user management, document actions

---

**Last updated**: 2026-04-04

To update this index: edit `CONTEXT_INDEX.md` or add module documentation to `src/modules/<name>/CLAUDE.md`
