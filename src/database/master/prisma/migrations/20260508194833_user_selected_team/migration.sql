-- AlterTable
ALTER TABLE "users" ADD COLUMN     "selected_team_id" UUID;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_selected_team_id_fkey" FOREIGN KEY ("selected_team_id") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
