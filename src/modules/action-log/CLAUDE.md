# action-log module

Read-only audit trail for a team. All logs live in the **tenant DB** (team-specific), not the master DB.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/action-logs/:teamId/` | Fetch paginated logs, filter by actorIds / documentIds |

## Log types
`CREATE_TEAM` · `CREATE_DOCUMENT` · `UPDATE_DOCUMENT` · `DELETE_DOCUMENT` · `ADD_USER` · `DELETE_USER` · `DELETE_HIMSELF` · `INVITE_USER`

## Key behavior
- Tenant repo is obtained each request via `applicationService.initActionLogRepository(teamId)` — this validates the team exists in master DB first, then builds the tenant Prisma client.
- Pagination is offset-based (`page` / `perPage` query params).
- No write endpoints — logs are written by other modules (document, team, user) inside their own transactions.

## Dependencies
`applicationService` — used to init the team-specific action-log repository.
