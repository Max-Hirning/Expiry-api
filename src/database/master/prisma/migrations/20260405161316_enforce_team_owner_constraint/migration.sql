-- Create unique index to ensure only one OWNER per team
CREATE UNIQUE INDEX "team_members_team_id_role_unique_owner"
ON "team_members"("team_id")
WHERE "role" = 'OWNER';
