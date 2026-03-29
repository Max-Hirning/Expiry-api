-- AlterTable
ALTER TABLE "users" ADD COLUMN     "last_seen_at" TIMESTAMP(3) DEFAULT NOW() - (RANDOM() * INTERVAL '365 days'),
ALTER COLUMN "invited_at" DROP NOT NULL,
ALTER COLUMN "invited_at" DROP DEFAULT,
ALTER COLUMN "last_login_at" DROP NOT NULL,
ALTER COLUMN "last_login_at" DROP DEFAULT;
