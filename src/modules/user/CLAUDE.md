# user module

User management: invite, delete, update profile/avatar/password, toggle status. Also exports shared utilities (`checkIfUserExists`, `checkIfTeamExists`) used by auth and team modules.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/users/` | List users (filterable by status, teamId, roles, search) |
| POST | `/api/users/invite` | Invite user (creates INVITED record + JWT token) |
| DELETE | `/api/users/:userId/invite` | Cancel invitation (deletes INVITED user) |
| DELETE | `/api/users/:userId` | Delete active user + GCS avatar + action logs per team |
| PUT | `/api/users/:userId` | Update profile (fullName, email, phone, avatar, notificationPreferences) |
| PATCH | `/api/users/:userId/status` | Toggle ACTIVE ↔ SUSPENDED |
| PUT | `/api/users/:userId/password` | Update password (validates old password) |
| GET | `/api/users/invite` | Fetch invited user by JWT token (no auth required) |
| GET | `/api/users/:userId` | Fetch user |

## Key behavior

**getUser (internal helper)**: Always fetches `unReadNotifications` count alongside the user. Computes `isOnline` based on `lastSeenAt` + `ONLINE_THRESHOLD_MINUTES` constant.

**inviteUser**: Creates user with `status: INVITED` and empty password. Signs a JWT with the user's ID — this becomes the `invitationId` passed to `auth/sign-up` to complete registration. Role of the invited user is derived from `invitedRoles[initiator.role]` map. If `initiator.role === USER`, `teamId` is required.

**deleteUser**: Logs `DELETE_HIMSELF` action to every team the user belonged to (best-effort, errors are swallowed). Deletes avatar from GCS.

**deleteInvitedUser**: Only works on users with `status: INVITED`. Logs `DELETE_USER` action to the shared team.

**getUsers**: Excludes current user (`initiator.id`) and any ids in `omitUsersIds`. Returns `position` (team role) when `teamId` filter is provided.

**Factory function name**: `createService` (not `createUserService`) — DI name is still `"userService"`.

## Dependencies
`userRepository` · `notificationRepository` · `jwt` · `log` · `gcpService` · `teamRepository` · `applicationService`
