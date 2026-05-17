-- AlterTable
ALTER TABLE "chat_messages" ADD COLUMN     "is_to_ai_agent" BOOLEAN NOT NULL DEFAULT false;
