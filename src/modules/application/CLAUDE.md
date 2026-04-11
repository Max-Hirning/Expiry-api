# application module

Infrastructure/utility module. **Not a feature module** — provides shared tenant DB access and test seeding. All other modules that need tenant DB repos call methods here.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/ping` | Health check — returns `"pong"` |
| POST | `/test-data` | Seed demo users, teams, tenant DBs, documents, tags, action logs |

## Key behavior — tenant DB pattern
Every team has its own PostgreSQL database named after the team's UUID. The connection URL is built by replacing `5432/expiry` with `5432/{teamId}` in `MASTER_DATABASE_URL`.

`init*Repository(teamId)` methods:
1. Verify team exists in master DB (`teamRepository.findUniqueOrFail`)
2. Build tenant connection URL
3. Instantiate and return the repository

Methods provided:
- `initDocumentRepository(teamId)`
- `initTagRepository(teamId)`
- `initDocumentTagRepository(teamId)`
- `initActionLogRepository(teamId)`
- `initChatRepository(teamId)`
- `initChatMemberRepository(teamId)`
- `initChatMessageRepository(teamId)`
- `initChatMessageReadStatusRepository(teamId)`
- `initTeamTenantClient(teamId)` — returns the full `PrismaClient` for raw transactions

## Dependencies
`teamRepository` · `config` · `log` · `prisma` (multi-tenant Prisma plugin)
