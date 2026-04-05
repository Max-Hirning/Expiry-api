# notification module

In-app notifications for the authenticated user. Scoped entirely to the **master DB** — no tenant DB involved.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/notifications/` | Fetch paginated notifications for current user |
| PATCH | `/api/notifications/:notificationId` | Toggle `readAt` on single notification (null ↔ now) |
| PATCH | `/api/notifications/` | Bulk set all notifications read/unread (`allRead: boolean`) |

## Key behavior
- Notifications are created by other modules (document, team) — this module only reads and updates them.
- `toggleNotificationReadAt`: if `readAt` is already set → set to `null`; if null → set to `new Date()`.
- All routes require `fastify.authorization` but NOT `checkAccess` (no team context needed).

## Dependencies
`notificationRepository` only.
