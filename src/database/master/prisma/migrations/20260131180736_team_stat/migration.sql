CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateTable
CREATE TABLE "team_stats" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_documents" INTEGER NOT NULL,
    "processing_documents" INTEGER NOT NULL,
    "active_documents" INTEGER NOT NULL,
    "archived_documents" INTEGER NOT NULL,
    "failed_documents" INTEGER NOT NULL,
    "needs_review_documents" INTEGER NOT NULL,
    "high_risk_documents" INTEGER NOT NULL,
    "medium_risk_documents" INTEGER NOT NULL,
    "low_risk_documents" INTEGER NOT NULL,
    "expiring_soon_documents" INTEGER NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "team_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_stats_team_id_key" ON "team_stats"("team_id");

-- AddForeignKey
ALTER TABLE "team_stats" ADD CONSTRAINT "team_stats_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;


INSERT INTO team_stats (
  id,
  created_at,
  updated_at,
  total_documents,
  processing_documents,
  active_documents,
  archived_documents,
  failed_documents,
  needs_review_documents,
  high_risk_documents,
  medium_risk_documents,
  low_risk_documents,
  expiring_soon_documents,
  team_id
)
SELECT
  gen_random_uuid(),
  NOW(),
  NOW(),
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  t.id
FROM teams t
LEFT JOIN team_stats ts ON ts.team_id = t.id
WHERE ts.team_id IS NULL;
