# tag module

Read-only tag queries on the **team tenant DB**. Tags are never created directly via this module — they are auto-created during document create/update operations.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/tags/:teamId/:tagId` | Fetch single tag with document count |
| GET | `/api/tags/:teamId/` | Fetch paginated tags with document counts |

## Key behavior

**Document count**: Each tag returns `documents: number` — count of `documentTags` relations. In the list endpoint this count respects the same document filters (status, riskLevel, expiresAtDateRange) applied to the query, so it reflects filtered document counts, not total.

**getTags filters**: `search` matches tag string OR document name. Document-level filters (`statuses`, `riskLevels`, `expiresAtDateRange`) narrow which documents count toward each tag AND which tags are returned (tags with no matching documents are excluded when document filters are active).

## Dependencies
`applicationService` — used to init the team-specific tag repository.
