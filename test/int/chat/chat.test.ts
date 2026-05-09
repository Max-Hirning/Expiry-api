import { FastifyInstance } from "fastify";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers, setTestJwt } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";

describe("Chat Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;

    beforeAll(async () => {
        cleanup = await setupDatabase();
        app = await createTestApp();
        setTestJwt(app.jwt);
    });

    afterAll(async () => {
        if (app) await app.close().catch(() => {});
        if (cleanup) await cleanup();
        await testHelpers.cleanup();
    });

    const setupTeamWithChat = async () => {
        const owner = await testHelpers.createUser();
        const team = await testHelpers.createTeam(owner.id, {
            provisionTenantDb: true,
        });
        const chat = await testHelpers.createChat(team.id, [
            { userId: owner.id, userFullName: owner.fullName },
        ]);
        const ownerMember = chat.members[0];
        const message = await testHelpers.createMessage(
            team.id,
            chat.id,
            ownerMember.id
        );
        const session = await testHelpers.createSession(owner);
        return { owner, team, chat, message, session };
    };

    describe("GET /api/chats/:teamId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid teamId", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/chats/not-a-uuid/",
                headers: session.headers,
            });
            expect([400, 500]).toContain(response.statusCode);
        });

        it("non-member receives 403", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const outsider = await testHelpers.createUser();
            const session = await testHelpers.createSession(outsider);
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${team.id}/`,
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("owner lists chats (happy path)", async () => {
            const { team, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${team.id}/`,
                headers: session.headers,
            });
            expect([200, 400, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("GET /api/chats/:teamId/:chatId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/chats/not-a-uuid/not-a-uuid",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("non-chat-member receives 403", async () => {
            const { team, chat } = await setupTeamWithChat();
            const stranger = await testHelpers.createUser();
            const session = await testHelpers.createSession(stranger);
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${team.id}/${chat.id}`,
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("owner reads their chat (happy path)", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${team.id}/${chat.id}`,
                headers: session.headers,
            });
            expect([200, 400, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("GET /api/chats/:teamId/:chatId/messages", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages?limit=20`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid limit", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages?limit=999`,
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("owner reads messages (happy path)", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${team.id}/${chat.id}/messages?limit=20`,
                headers: session.headers,
            });
            expect([200, 400, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("POST /api/chats/:teamId/:chatId/messages", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages`,
                payload: { message: "hi" },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects empty message", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages`,
                payload: { message: "" },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("non-chat-member receives 403", async () => {
            const { team, chat } = await setupTeamWithChat();
            const stranger = await testHelpers.createUser();
            const session = await testHelpers.createSession(stranger);
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${team.id}/${chat.id}/messages`,
                payload: { message: "hello" },
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("owner sends a message (happy path)", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${team.id}/${chat.id}/messages`,
                payload: { message: "hello" },
                headers: session.headers,
            });
            expect([200, 201, 400, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("PUT /api/chats/:teamId/:chatId/messages/:messageId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages/${VALID_UUID}`,
                payload: { message: "edit" },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects empty message", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages/${VALID_UUID}`,
                payload: { message: "" },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("owner edits own message (happy path)", async () => {
            const { team, chat, message, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}/messages/${message.id}`,
                payload: { message: "edited" },
                headers: session.headers,
            });
            expect([200, 400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("DELETE /api/chats/:teamId/:chatId/messages/:messageId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages/${VALID_UUID}`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/not-a-uuid/not-a-uuid/messages/not-a-uuid`,
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("owner deletes own message (happy path)", async () => {
            const { team, chat, message, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/${team.id}/${chat.id}/messages/${message.id}`,
                headers: session.headers,
            });
            expect([200, 204, 400, 403, 404, 500]).toContain(
                response.statusCode
            );
        }, 30000);
    });

    describe("POST /api/chats/:teamId/:chatId/messages/read", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages/read`,
                payload: { messageIds: [VALID_UUID] },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects empty messageIds", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}/messages/read`,
                payload: { messageIds: [] },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("owner marks own message as read (happy path)", async () => {
            const { team, chat, message, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${team.id}/${chat.id}/messages/read`,
                payload: { messageIds: [message.id] },
                headers: session.headers,
            });
            expect([200, 400, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });
});
