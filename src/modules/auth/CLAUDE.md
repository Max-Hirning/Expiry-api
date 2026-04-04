# auth module

Registration and login. No JWT issued here — the user object is returned directly (session handled client-side or elsewhere).

## Routes
| Method | Path | Action |
|--------|------|--------|
| POST | `/api/auth/sign-in` | Login by email or phone + password |
| POST | `/api/auth/sign-up` | Register new user + create first team |

## Key behavior

**sign-in**: Looks up user by `email` OR `phoneNumber` (identifier field). Updates `lastLoginAt` + `lastSeenAt` on success.

**sign-up**: Two flows share the same endpoint:
- **New user** (`invitationId` absent): creates a fresh user + team in master DB, provisions a new tenant DB, runs migrations.
- **Invited user** (`invitationId` present): the `invitationId` IS the user's ID — updates the existing `INVITED` user record to `ACTIVE` instead of creating a new one, still creates the team.

On any failure during sign-up the provisioned tenant DB is dropped and any uploaded GCS avatar is deleted (cleanup in catch block).

## Dependencies
`userRepository` · `userService` (for `checkIfUserExists` / `checkIfTeamExists`) · `gcpService` · `log` · `prisma`
