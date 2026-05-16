-- CreateEnum
CREATE TYPE "ChatAiAgentVisibility" AS ENUM ('ALL', 'SENDER_ONLY');

-- AlterTable
ALTER TABLE "chat_messages" ADD COLUMN     "is_from_ai_agent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "visible_to_member_id" UUID,
ALTER COLUMN "author_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "chats" ADD COLUMN     "ai_agent_enabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ai_agent_visibility" "ChatAiAgentVisibility" NOT NULL DEFAULT 'ALL';

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_visible_to_member_id_fkey" FOREIGN KEY ("visible_to_member_id") REFERENCES "chat_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
