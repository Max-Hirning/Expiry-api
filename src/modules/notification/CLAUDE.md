# notification module

In-app notifications for the authenticated user. Scoped entirely to the **master DB** — no tenant DB involved.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/notifications/` | Fetch paginated notifications for current user |
| PATCH | `/api/notifications/read` | Bulk mark unread notifications as read (`allRead: true`) or toggle read state on specific notifications (`notificationIds: string[]`) |
| PATCH | `/api/notifications/starred` | Toggle `isStarred` on a set of notifications (`notificationIds: string[]`) |

## Key behavior
- Notifications are created by other modules (document, team) — this module only reads and updates them.
- `toggleNotificationsReadAt`: accepts either `{ allRead: true }` (marks all **currently unread** notifications as read, scoped to the user) or `{ notificationIds: string[] }` (atomically toggles `readAt` null ↔ now via raw SQL CTE).
- `toggleStarred`: accepts `{ notificationIds: string[] }`, flips `is_starred` via `NOT is_starred` in a single raw SQL CTE scoped to the authenticated user. Foreign or non-existent IDs are silently ignored.
- Filters: `search`, `isStarred` (`"true"` | `"false"`), `isRead` (`"true"` | `"false"`), `types` (single or array of `NotificationTypes`).
- All routes require `fastify.authorization` but NOT `checkAccess` (no team context needed).

## Dependencies
`notificationRepository` only.
