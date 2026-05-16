
-- AddCheckConstraint
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_ai_author_check"
    CHECK (
        (is_from_ai_agent = true AND author_id IS NULL)
     OR (is_from_ai_agent = false AND author_id IS NOT NULL)
    );
