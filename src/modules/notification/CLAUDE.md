# notification module

In-app notifications for the authenticated user. Scoped entirely to the **master DB** — no tenant DB involved.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/notifications/` | Fetch paginated notifications for current user |
| PATCH | `/api/notifications/:notificationId` | Toggle `readAt` on single notification (null ↔ now) |
| PATCH | `/api/notifications/` | Bulk set all notifications read/unread (`allRead: boolean`) |
| PATCH | `/api/notifications/starred` | Toggle `isStarred` on a set of notifications (`notificationIds: string[]`) |

## Key behavior
- Notifications are created by other modules (document, team) — this module only reads and updates them.
- `toggleNotificationReadAt`: if `readAt` is already set → set to `null`; if null → set to `new Date()`.
- `toggleStarred`: accepts `{ notificationIds: string[] }`, flips `is_starred` via `NOT is_starred` in a single raw SQL CTE scoped to the authenticated user. Foreign or non-existent IDs are silently ignored.
- All routes require `fastify.authorization` but NOT `checkAccess` (no team context needed).

## Dependencies
`notificationRepository` only.
