# team module

Full CRUD for teams. Creating/deleting a team provisions/drops the team's **tenant PostgreSQL database**. Stats tracked in `TeamStat` table (master DB).

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/teams/:teamId` | Fetch team + currentMember + stats |
| DELETE | `/api/teams/:teamId` | Delete team, drop tenant DB, notify members, delete GCS files |
| GET | `/api/teams/` | Fetch paginated teams the current user belongs to |
| POST | `/api/teams/` | Create team + provision tenant DB + optional logo upload |
| PUT | `/api/teams/:teamId` | Update name, logo, add/remove members |

## Key behavior

**getTeam (internal helper)**: Fetches team + teamStat together and injects `currentMember` (the requesting user's membership record). Used by both the public `getTeam` and as a return value after create/update.

**createTeam**: Provisions tenant DB via `createTenantDatabase` + `migrateTenantDatabase` before the master DB transaction. After the team record is created in the master DB, a general chat is automatically created in the tenant DB using `chatService.createChat()` with the team creator and all invited team members as initial members. On any error, drops the tenant DB and deletes the GCS logo. Note: `migrateTenantDatabase` receives the URL with the teamId replaced, not the teamId itself.

**updateTeam**: Member add/remove happen in the same master DB transaction. Action logs written to tenant DB after the master transaction completes. Members are validated — only `UserRoles.USER` accounts can join teams. When members are added, they are automatically added to all team chats via `chatService.createChatMember()`. When members are removed, their chat member status is changed to `DELETED` across all team chats.

**Notifications**: Members added get `INVITE_USER_IN_TEAM`; members removed get `DELETE_USER_FROM_TEAM`; team deletion notifies all members with `DELETE_TEAM`.

**getTeams**: Only returns teams where `stats` exists (filters out any team missing a `TeamStat` row).

## Dependencies
`userService` · `gcpService` · `config` · `teamRepository` · `prisma` · `log` · `notificationRepository` · `teamStatRepository` · `userRepository` · `applicationService` · `chatService`
