/*
  Warnings:

  - The primary key for the `action_logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `action_logs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `document_id` column on the `action_logs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `user_id` column on the `action_logs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `document_extracted_fields` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `document_extracted_fields` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `document_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `document_tags` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `documents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `files` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `files` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tags` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `actor_id` on the `action_logs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `document_id` on the `document_extracted_fields` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `document_id` on the `document_tags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tag_id` on the `document_tags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `document_id` on the `files` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ChatMemberStatus" AS ENUM ('ACTIVE', 'DELETED');

-- DropForeignKey
ALTER TABLE "action_logs" DROP CONSTRAINT "action_logs_document_id_fkey";

-- DropForeignKey
ALTER TABLE "document_extracted_fields" DROP CONSTRAINT "document_extracted_fields_document_id_fkey";

-- DropForeignKey
ALTER TABLE "document_tags" DROP CONSTRAINT "document_tags_document_id_fkey";

-- DropForeignKey
ALTER TABLE "document_tags" DROP CONSTRAINT "document_tags_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "files" DROP CONSTRAINT "files_document_id_fkey";

-- AlterTable
ALTER TABLE "action_logs" DROP CONSTRAINT "action_logs_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "document_id",
ADD COLUMN     "document_id" UUID,
DROP COLUMN "actor_id",
ADD COLUMN     "actor_id" UUID NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" UUID,
ADD CONSTRAINT "action_logs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "document_extracted_fields" DROP CONSTRAINT "document_extracted_fields_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "document_id",
ADD COLUMN     "document_id" UUID NOT NULL,
ADD CONSTRAINT "document_extracted_fields_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "document_tags" DROP CONSTRAINT "document_tags_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "document_id",
ADD COLUMN     "document_id" UUID NOT NULL,
DROP COLUMN "tag_id",
ADD COLUMN     "tag_id" UUID NOT NULL,
ADD CONSTRAINT "document_tags_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "documents" DROP CONSTRAINT "documents_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "documents_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "files" DROP CONSTRAINT "files_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "document_id",
ADD COLUMN     "document_id" UUID NOT NULL,
ADD CONSTRAINT "files_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "chats" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "document_id" UUID,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_members" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ChatMemberStatus" NOT NULL,
    "user_id" UUID NOT NULL,
    "user_full_name" TEXT NOT NULL,
    "user_avatar_url" TEXT,
    "chat_id" UUID NOT NULL,

    CONSTRAINT "chat_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "auto_generated" BOOLEAN NOT NULL,
    "parent_message_id" UUID,
    "author_id" UUID NOT NULL,
    "chat_id" UUID NOT NULL,
    "document_id" UUID,
    "document_version_id" UUID,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat_message_read_statuses" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_message_id" UUID NOT NULL,
    "read_by_id" UUID NOT NULL,

    CONSTRAINT "Chat_message_read_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chats_name_key" ON "chats"("name");

-- CreateIndex
CREATE UNIQUE INDEX "chats_document_id_key" ON "chats"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_members_chat_id_user_id_key" ON "chat_members"("chat_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_messages_document_id_key" ON "chat_messages"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_messages_document_version_id_key" ON "chat_messages"("document_version_id");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_message_read_statuses_chat_message_id_read_by_id_key" ON "Chat_message_read_statuses"("chat_message_id", "read_by_id");

-- CreateIndex
CREATE INDEX "action_logs_actor_id_idx" ON "action_logs"("actor_id");

-- AddForeignKey
ALTER TABLE "document_tags" ADD CONSTRAINT "document_tags_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_tags" ADD CONSTRAINT "document_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_extracted_fields" ADD CONSTRAINT "document_extracted_fields_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_logs" ADD CONSTRAINT "action_logs_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_parent_message_id_fkey" FOREIGN KEY ("parent_message_id") REFERENCES "chat_messages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "chat_members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_document_version_id_fkey" FOREIGN KEY ("document_version_id") REFERENCES "files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat_message_read_statuses" ADD CONSTRAINT "Chat_message_read_statuses_chat_message_id_fkey" FOREIGN KEY ("chat_message_id") REFERENCES "chat_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat_message_read_statuses" ADD CONSTRAINT "Chat_message_read_statuses_read_by_id_fkey" FOREIGN KEY ("read_by_id") REFERENCES "chat_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
