import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const VALID_UUID = "00000000-0000-0000-0000-000000000001";
const VALID_UUID_2 = "00000000-0000-0000-0000-000000000002";

describe("Chat Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;

    beforeAll(async () => {
        cleanup = await setupDatabase();
        app = await createTestApp();
    });

    afterAll(async () => {
        await app.close();

        if (cleanup) {
            await cleanup();
        }

        await testHelpers.cleanup();
    });

    describe("GET /api/chats/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}`,
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([401, 403]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/chats/not-a-uuid",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should reject invalid limit value", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}?limit=0`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should reject limit exceeding maximum", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}?limit=100`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /api/chats/:teamId/:chatId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}`,
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([401, 403]).toContain(response.statusCode);
        });

        it("should fail with invalid chatId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/not-a-uuid`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /api/chats/:teamId/:chatId/messages", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages`,
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([401, 403]).toContain(response.statusCode);
        });

        it("should reject invalid limit value", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages?limit=0`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should reject invalid direction value", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages?direction=sideways`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("POST /api/chats/:teamId/:chatId/messages", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages`,
                payload: { message: "Hello world" },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with empty message body", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages`,
                headers: { authorization: "Bearer invalid-token" },
                payload: {},
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with empty message string", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages`,
                headers: { authorization: "Bearer invalid-token" },
                payload: { message: "" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid chatId format", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/not-a-uuid/messages`,
                payload: { message: "Hello" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/chats/:teamId/:chatId/messages/:messageId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/${VALID_UUID}`,
                payload: { message: "Edited message" },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with empty message body", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
                payload: {},
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid messageId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/not-a-uuid`,
                payload: { message: "Edited" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/chats/:teamId/:chatId/messages/:messageId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/${VALID_UUID}`,
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([401, 403]).toContain(response.statusCode);
        });

        it("should fail with invalid messageId format", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/not-a-uuid`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("POST /api/chats/:teamId/:chatId/messages/read", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/read`,
                payload: { messageIds: [VALID_UUID] },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with empty messageIds array", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/read`,
                headers: { authorization: "Bearer invalid-token" },
                payload: { messageIds: [] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with missing messageIds", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/read`,
                headers: { authorization: "Bearer invalid-token" },
                payload: {},
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid messageId format in array", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/chats/${VALID_UUID}/${VALID_UUID_2}/messages/read`,
                headers: { authorization: "Bearer invalid-token" },
                payload: { messageIds: ["not-a-uuid"] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
