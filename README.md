<div align="center">
 <img width="524" src="https://github.com/user-attachments/assets/d460817f-058a-4d3f-b75c-b897c954ecdc" />
</div>

# Expiry — Document Lifecycle Management API

A robust, multi-tenant document management system built with **Node.js**, **Fastify**, **TypeScript**, and **PostgreSQL**. Expiry helps teams track, manage, and extract information from documents with expiration dates—perfect for contracts, certificates, licenses, and compliance documents.

## 📖 About Expiry

**Expiry** is a document-centric platform that:
- Automates document lifecycle management across teams
- Extracts critical data (expiry dates, counterparty info, amounts) via OCR and regex
- Classifies documents by risk level (LOW, MEDIUM, HIGH)
- Provides full audit trails for compliance
- Scales with multi-tenant architecture (one PostgreSQL database per team)
- Offers team collaboration with role-based access control

---

## 🛠️ Technology Stack

### Core Framework
- **[Node.js](https://nodejs.org/)** — JavaScript runtime
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe language
- **[Fastify](https://fastify.dev/)** — Fast, low-overhead HTTP framework

### Database & ORM
- **[PostgreSQL](https://www.postgresql.org/)** — Relational database (master + multi-tenant)
- **[Prisma](https://www.prisma.io/)** — Type-safe database ORM
- **[PgBoss](https://github.com/timgit/pg-boss)** — Job queue (optional)

### API & Validation
- **[Zod](https://zod.dev)** — Schema validation and type inference
- **[Swagger/OpenAPI](https://swagger.io/)** — Auto-generated API documentation
- **[@fastify/jwt](https://github.com/fastify/fastify-jwt)** — JWT authentication

### Infrastructure & DI
- **[Awilix](https://github.com/jeffijoe/awilix)** — Lightweight dependency injection container
- **[Google Cloud Storage (GCS)](https://cloud.google.com/storage)** — File uploads and storage
- **[Docker & Docker Compose](https://www.docker.com/)** — Containerized development environment

### Testing & Quality
- **[Vitest](https://vitest.dev/)** — Unit & integration testing
- **[ESLint](https://eslint.org/)** — Code linting
- **[Commitlint](https://commitlint.js.org/)** — Commit message validation

---

## 📌 Getting Started

### Prerequisites
- **Node.js** v18+ (LTS recommended)
- **Docker** & **Docker Compose** (for local development database)
- **npm** v9+

### 🚀 Quick Start

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Set Up Environment Variables
Copy the example environment file and update with your values:
```bash
cp .env.example .env
```

Edit `.env` and configure:
- `MASTER_DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — JWT signing secret
- `GCP_PROJECT_ID`, `GCP_BUCKET_NAME` — Google Cloud Storage credentials
- Other optional services (email, third-party APIs)

#### 3. Launch Docker Compose
Start PostgreSQL and other services:
```bash
docker compose up
```

The PostgreSQL database will be available at `localhost:5432`.

#### 4. Run Database Migrations
```bash
npm run prisma:migrate:apply
```

#### 5. Start Development Server
```bash
npm run dev
```

The API will be available at `http://localhost:3000`.  
Swagger UI: `http://localhost:3000/api/docs`

---

## 📚 Common Commands

### Development
```bash
# Start dev server with hot reload
npm run dev

# Start production build
npm start

# Build for production
npm run build
```

### Database Management
```bash
# Create a new migration
npm run prisma:migrate:create

# Apply migrations to database
npm run prisma:migrate:apply

# Reset database (careful!)
npm run prisma:reset

# Open Prisma Studio (GUI for database)
npm run prisma:studio

# Generate ER diagram
npm run prisma:diagram
```

### Code Quality
```bash
# Lint code
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Type check (TypeScript)
npm run typescript

# Lint + TypeScript checks (always run before committing)
npm run lint:fix && npm run typescript
```

### Testing
```bash
# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit:watch

# Run unit tests with UI
npm run test:unit:ui

# Run integration tests (requires docker-compose.test.yml)
docker compose -f docker-compose.test.yml up
npm run test:int

# Run all tests
npm run test
```

### Code Generation
```bash
# Generate a new feature module
npm run generate:module moduleName

# Generate a new repository
npm run generate:repository entityName
```

---

## 🗂️ Project Structure

### Quick Overview
```
src/
├── database/               # Database layer
│   ├── master/            # Master DB (users, teams, notifications)
│   ├── team/              # Tenant DB schema (documents, tags, logs)
│   └── infra/             # Tenant provisioning & migrations
├── lib/                   # Shared libraries & utilities
│   ├── awilix/            # DI container setup
│   ├── errors/            # Error factories
│   ├── gcp/               # Google Cloud Storage
│   ├── validation/        # Zod schemas (by module)
│   └── utils/             # Helper utilities
├── modules/               # Feature modules
│   ├── auth/              # Login & registration
│   ├── user/              # User management
│   ├── team/              # Team CRUD & provisioning
│   ├── document/          # Document CRUD & uploads
│   ├── tag/               # Tag queries
│   ├── action-log/        # Audit trails
│   ├── notification/      # In-app notifications
│   └── application/       # Infrastructure utilities
├── plugins/               # Fastify plugins
├── types/                 # TypeScript types
└── index.ts              # Server entry point
```

For detailed structure, see [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

---

## 🏗️ Architecture

### Multi-Tenant Database Pattern

Expiry uses a **hybrid multi-tenant architecture**:

- **Master Database** — Shared across all teams
  - Users (authentication, profiles, roles)
  - Teams (metadata, memberships, statistics)
  - Notifications (in-app alerts)
  
- **Tenant Databases** — One per team
  - Documents (with status, risk level, expiry dates)
  - Files (uploaded to GCS, URLs in DB)
  - Tags (flexible tagging system)
  - ActionLogs (audit trail of all changes)

This design ensures **data isolation**, **compliance**, and **scalability**.

### Layered Architecture

```
Routes (Zod validation) 
  ↓
Handlers (HTTP layer)
  ↓
Services (Business logic)
  ↓
Repositories (Data access)
  ↓
Database (Prisma)
```

### Dependency Injection

All dependencies are managed by **Awilix**. Services and handlers are registered in the DI container via factory functions, enabling easy testing and dependency management.

Example:
```typescript
export const createDocumentService = (
    applicationService: ApplicationService,
    gcpService: GcpService,
    log: FastifyBaseLogger
): DocumentService => ({
    // implementation
});

addDIResolverName(createDocumentService, "documentService");
```

---

## 🔐 Authentication & Authorization

### JWT Flow
1. **Sign In** (`POST /api/auth/sign-in`) — Returns authenticated user + JWT
2. **Authorization** — JWT required in `Authorization: Bearer <token>` header
3. **Team Context** — Requests are scoped to the authenticated user's teams

### Access Control
Routes declare required actions:
```typescript
fastify.post("/", {
    preHandler: [
        fastify.authorization,                    // Require JWT
        fastify.checkAccess(Actions.CREATE_DOCUMENT),  // Require permission
    ],
    // ...
});
```

---

## 📝 Swagger API Documentation

API documentation is auto-generated from Zod schemas and available at:
```
http://localhost:3000/api/docs
```

All endpoints are categorized by module (auth, user, team, document, etc.) with request/response examples.

---

## 🐳 Docker Setup

### Local Development
```bash
docker compose up
```

Starts:
- **Node.js container** (API server)
- **PostgreSQL container** (database)

### Running from Host Machine

If you want to run the Node.js server locally but PostgreSQL in Docker:

1. Update `MASTER_DATABASE_URL` in `.env`:
   ```
   postgres://user:password@localhost:5432/expiry
   ```

2. Run Docker Compose:
   ```bash
   docker compose up -d postgresdb
   ```

3. Run dev server locally:
   ```bash
   npm run dev
   ```

---

## 🧪 Testing

### Unit Tests
Test individual services and utilities:
```bash
npm run test:unit
npm run test:unit:watch  # Watch mode
npm run test:unit:ui     # Interactive UI
```

### Integration Tests
Test modules with real database:
```bash
docker compose -f docker-compose.test.yml up
npm run test:int
```

Tests use a separate test database and are cleaned up after each run.

---

## ⚙️ Database Migrations

### From Host Machine (when PostgreSQL is in Docker)

1. **Create a migration:**
   ```bash
   npm run prisma:migrate:create
   ```

2. **Update `.env`** for host access:
   ```
   MASTER_DATABASE_URL=postgres://user:password@localhost:5432/expiry
   ```

3. **Name the migration** and verify the generated SQL

4. **Apply migration:**
   ```bash
   npm run prisma:migrate:apply
   ```

5. **Revert `.env`** back for Docker:
   ```
   MASTER_DATABASE_URL=postgres://user:password@postgresdb:5432/expiry
   ```

### From Docker Container

Migrations run automatically when the container starts via `npm run dev`.

---

## 📊 ER Diagrams

Generate Entity-Relationship diagrams from Prisma schema:

```bash
npm run prisma:diagram
```

This creates `src/database/master/dbml/schema.dbml` and `src/database/team/dbml/schema.dbml`.

Visualize at [dbdiagram.io](https://dbdiagram.io/) by pasting the `.dbml` file contents.

---

## 📜 Commit Guidelines

This project uses **Commitlint** to enforce conventional commit messages.

Format:
```
type(scope?): subject
```

Examples:
```
feat(document): add bulk document upload
fix(auth): resolve JWT expiration bug
chore: update dependencies
docs(readme): add setup instructions
test(user): add user service tests
```

See [Conventional Commits](https://www.conventionalcommits.org/) for details.

---

## 🔑 Key Features

### 📄 Document Management
- Create, update, delete documents
- Upload files to Google Cloud Storage
- Extract data (expiry dates, issue dates, counterparty, amounts)
- Set risk levels and statuses
- Flexible tagging system

### 👥 Team Collaboration
- Invite users to teams
- Role-based access control (ADMIN, STAFF, USER)
- Automatic tenant database provisioning per team
- Member management (add/remove)

### 🔍 Search & Filter
- Full-text document search
- Filter by status, risk level, expiry date range
- Filter by tags, authors
- Sortable columns

### 📋 Audit Logging
- Complete action trail per team
- Who did what and when
- Document history tracking
- Read-only audit logs

### 🔔 Notifications
- In-app notifications for invites, deletions
- Bulk mark as read/unread
- User notification preferences

---

## 🚨 Troubleshooting

### "Team not found" Error
- Ensure the team exists before accessing team-scoped endpoints
- Verify user is a member of the team

### Database Connection Failed
- Check `MASTER_DATABASE_URL` in `.env`
- Ensure PostgreSQL container is running: `docker compose ps`
- Verify database name is `expiry` or as configured

### Migrations Won't Apply
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Use `docker compose up` if running containers

### GCS Upload Failures
- Verify GCP credentials are set in `.env`
- Check bucket permissions
- Ensure bucket name matches `GCP_BUCKET_NAME`

### Port Already in Use
- Change `PORT` in `.env` (default: 3000)
- Or kill the existing process: `lsof -i :3000`

---

## 📖 Documentation

- **[PROJECT_CONTEXT.md](PROJECT_CONTEXT.md)** — Complete project guide
- **[CONTEXT_INDEX.md](CONTEXT_INDEX.md)** — Quick reference index
- **[CLAUDE.md](CLAUDE.md)** — Project instructions for Claude Code
- **Module Docs** — Each module has `CLAUDE.md` with detailed API behavior

---

## 📞 Support & Contributing

For questions or issues:
1. Check documentation in `PROJECT_CONTEXT.md` or module `CLAUDE.md` files
2. Review recent commits for patterns
3. Check test files for usage examples

When contributing:
- Run `npm run lint:fix && npm run typescript` before committing
- Follow conventional commit format
- Write tests for new features
- Update module documentation

---

## 📄 License

This project is built on the Lumitech Node.js Fastify Template with significant customizations for multi-tenant document management.

---

**Last Updated**: 2026-04-04  
**Environment**: Node.js v18+, PostgreSQL 14+, Docker
