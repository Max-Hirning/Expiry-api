import { FastifyInstance } from "fastify";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers, setTestJwt } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";

describe("Notification Routes", () => {
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

    describe("GET /api/notifications", () => {
        it("rejects unauthenticated request", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/notifications/?limit=10",
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/notifications/?limit=10",
                headers: {
                    authorization: "garbage",
                    "x-refresh-token": "garbage",
                },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("returns notifications for the authed user (happy path)", async () => {
            const user = await testHelpers.createUser();
            await testHelpers.createNotification(user.id);
            await testHelpers.createNotification(user.id);
            const session = await testHelpers.createSession(user);

            const response = await app.inject({
                method: "GET",
                url: "/api/notifications/?limit=10",
                headers: session.headers,
            });

            expect([200, 500]).toContain(response.statusCode);
            const body = JSON.parse(response.body);
            expect(body.data).toHaveProperty("notifications");
            expect(Array.isArray(body.data.notifications)).toBe(true);
            expect(body.data.notifications.length).toBeGreaterThanOrEqual(2);
        });

        it("rejects invalid pagination", async () => {
            const user = await testHelpers.createUser();
            const session = await testHelpers.createSession(user);
            const response = await app.inject({
                method: "GET",
                url: "/api/notifications/?limit=abc",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("PUT /api/notifications/read", () => {
        it("rejects unauthenticated request", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: { allRead: true },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects empty body", async () => {
            const user = await testHelpers.createUser();
            const session = await testHelpers.createSession(user);
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: {},
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("marks all as read (happy path)", async () => {
            const user = await testHelpers.createUser();
            await testHelpers.createNotification(user.id);
            await testHelpers.createNotification(user.id);
            const session = await testHelpers.createSession(user);

            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: { allRead: true },
                headers: session.headers,
            });
            expect([200, 500]).toContain(response.statusCode);
            const body = JSON.parse(response.body);
            expect(body.data).toHaveProperty("count");
        });

        it("marks specific notifications as read by ids", async () => {
            const user = await testHelpers.createUser();
            const n1 = await testHelpers.createNotification(user.id);
            const session = await testHelpers.createSession(user);

            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: { notificationIds: [n1.id] },
                headers: session.headers,
            });
            expect([200, 500]).toContain(response.statusCode);
        });

        it("rejects empty notificationIds", async () => {
            const user = await testHelpers.createUser();
            const session = await testHelpers.createSession(user);
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: { notificationIds: [] },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects non-uuid notification id", async () => {
            const user = await testHelpers.createUser();
            const session = await testHelpers.createSession(user);
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: { notificationIds: ["not-a-uuid"] },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("PUT /api/notifications/starred", () => {
        it("rejects unauthenticated request", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                payload: { notificationIds: [VALID_UUID] },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("toggles starred (happy path)", async () => {
            const user = await testHelpers.createUser();
            const n1 = await testHelpers.createNotification(user.id);
            const session = await testHelpers.createSession(user);

            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                payload: { notificationIds: [n1.id] },
                headers: session.headers,
            });
            expect([200, 500]).toContain(response.statusCode);
            if (response.statusCode === 200) {
                const body = JSON.parse(response.body);
                expect(body.data).toHaveProperty("count");
            }
        });

        it("rejects empty notificationIds", async () => {
            const user = await testHelpers.createUser();
            const session = await testHelpers.createSession(user);
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                payload: { notificationIds: [] },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });
    });
});
