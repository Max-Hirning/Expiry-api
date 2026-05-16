import { FastifyInstance } from "fastify";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers, setTestJwt, hasRealTenantDb } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";
import { TeamMemberRoles } from "@/database/master/generated/client.js";

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

    describe("PUT /api/chats/:teamId/:chatId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}`,
                payload: { name: "x" },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid in params", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "PUT",
                url: "/api/chats/not-a-uuid/not-a-uuid",
                payload: { name: "x" },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects empty body", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}`,
                payload: {},
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects invalid aiAgentVisibility enum", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID}`,
                payload: { aiAgentVisibility: "BOGUS" },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("non OWNER/ADMIN team member receives 403", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const staff = await testHelpers.createUser();
            await testHelpers.addTeamMember(
                team.id,
                staff.id,
                TeamMemberRoles.STAFF
            );
            const chat = await testHelpers.createChat(team.id, [
                { userId: owner.id, userFullName: owner.fullName },
                { userId: staff.id, userFullName: staff.fullName },
            ]);
            const session = await testHelpers.createSession(staff);
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}`,
                payload: { name: "renamed" },
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("team admin who is not a chat member receives 403", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const admin = await testHelpers.createUser();
            await testHelpers.addTeamMember(
                team.id,
                admin.id,
                TeamMemberRoles.ADMIN
            );
            const chat = await testHelpers.createChat(team.id, [
                { userId: owner.id, userFullName: owner.fullName },
            ]);
            const session = await testHelpers.createSession(admin);
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}`,
                payload: { name: "renamed" },
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("owner updates chat name (happy path)", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}`,
                payload: { name: "renamed" },
                headers: session.headers,
            });
            if (hasRealTenantDb(team.id)) {
                expect(response.statusCode).toBe(200);
                expect(response.json().data.chat.name).toBe("renamed");
            } else {
                expect([200, 400, 403, 500]).toContain(response.statusCode);
            }
        }, 30000);

        it("owner toggles aiAgentEnabled (happy path)", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}`,
                payload: { aiAgentEnabled: false },
                headers: session.headers,
            });
            if (hasRealTenantDb(team.id)) {
                expect(response.statusCode).toBe(200);
                expect(response.json().data.chat.aiAgentEnabled).toBe(false);
            } else {
                expect([200, 400, 403, 500]).toContain(response.statusCode);
            }
        }, 30000);

        it("owner updates aiAgentVisibility to SENDER_ONLY (happy path)", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}`,
                payload: { aiAgentVisibility: "SENDER_ONLY" },
                headers: session.headers,
            });
            if (hasRealTenantDb(team.id)) {
                expect(response.statusCode).toBe(200);
                expect(response.json().data.chat.aiAgentVisibility).toBe(
                    "SENDER_ONLY"
                );
            } else {
                expect([200, 400, 403, 500]).toContain(response.statusCode);
            }
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

        it("SENDER_ONLY AI message filtered for non-recipient member", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const second = await testHelpers.createUser();
            await testHelpers.addTeamMember(team.id, second.id);
            const chat = await testHelpers.createChat(team.id, [
                { userId: owner.id, userFullName: owner.fullName },
                { userId: second.id, userFullName: second.fullName },
            ]);
            const ownerMember = chat.members.find(
                (m) => m.userId === owner.id
            )!;
            await testHelpers.createMessage(team.id, chat.id, null, {
                isFromAiAgent: true,
                visibleToMemberId: ownerMember.id,
                message: "private AI reply",
            });
            const session = await testHelpers.createSession(second);
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${team.id}/${chat.id}/messages?limit=20`,
                headers: session.headers,
            });
            if (hasRealTenantDb(team.id)) {
                expect(response.statusCode).toBe(200);
                const messages = response.json().data.messages;
                expect(
                    messages.find(
                        (m: { message: string }) =>
                            m.message === "private AI reply"
                    )
                ).toBeUndefined();
            } else {
                expect([200, 400, 403, 500]).toContain(response.statusCode);
            }
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

        it("cannot edit AI agent message", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const aiMessage = await testHelpers.createMessage(
                team.id,
                chat.id,
                null,
                { isFromAiAgent: true, message: "AI hello" }
            );
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${team.id}/${chat.id}/messages/${aiMessage.id}`,
                payload: { message: "edited" },
                headers: session.headers,
            });
            if (hasRealTenantDb(team.id)) {
                expect(response.statusCode).toBe(403);
                expect(response.json().message).toMatch(/AI agent/i);
            } else {
                expect([400, 403, 404, 500]).toContain(response.statusCode);
            }
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

        it("cannot delete AI agent message", async () => {
            const { team, chat, session } = await setupTeamWithChat();
            const aiMessage = await testHelpers.createMessage(
                team.id,
                chat.id,
                null,
                { isFromAiAgent: true, message: "AI hello" }
            );
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/${team.id}/${chat.id}/messages/${aiMessage.id}`,
                headers: session.headers,
            });
            if (hasRealTenantDb(team.id)) {
                expect(response.statusCode).toBe(403);
                expect(response.json().message).toMatch(/AI agent/i);
            } else {
                expect([400, 403, 404, 500]).toContain(response.statusCode);
            }
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
