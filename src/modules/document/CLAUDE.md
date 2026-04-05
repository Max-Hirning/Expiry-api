# document module

CRUD for documents stored in the **team tenant DB**. Handles file uploads to GCS, tag management, action logging, and admin notifications.

## Routes
| Method | Path | Action |
|--------|------|--------|
| GET | `/api/documents/:teamId/:documentId` | Fetch single document (with files, extracted fields, tags) |
| DELETE | `/api/documents/:teamId/:documentId` | Delete document + GCS folder + notify admins |
| GET | `/api/documents/:teamId/` | Fetch paginated list with filters |
| POST | `/api/documents/:teamId/` | Create document + upload files to GCS |
| PUT | `/api/documents/:teamId/:documentId` | Update name and/or tags |

## Key behavior

**Tags**: Tags are strings, not pre-existing IDs. On create/update the service splits them into `existedTagsIds` (already in tenant DB) and `newTags` (created inline inside the transaction).

**Files**: Each file in the request body gets a GCS upload URL generated before the DB transaction. The signed upload URL is NOT returned to the client from create — files are created in DB with read URLs.

**getDocuments**: Returns `actions` map (`{ [actorId]: ActionLogTypes[] }`) per document — derived from the document's action logs, showing which users performed which actions. Supports filters: `search`, `authorsIds`, `tagsIds`, `statuses`, `riskLevels`, `expiresAtDateRange`. Sorting via `sortField` + `sortOrder`.

**Action logs + notifications**: Written inside the same tenant DB transaction on create/update/delete. Notifications sent to all team admins (except initiator) on delete.

## Dependencies
`applicationService` · `gcpService` · `notificationRepository` · `teamMemberRepository` · `log`
