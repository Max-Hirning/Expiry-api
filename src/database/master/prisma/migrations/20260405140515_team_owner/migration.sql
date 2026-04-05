-- AlterEnum
ALTER TYPE "TeamMemberRoles" ADD VALUE 'OWNER';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "last_seen_at" DROP DEFAULT;
