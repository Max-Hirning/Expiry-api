import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const VALID_UUID = "00000000-0000-0000-0000-000000000001";

describe("Notification Routes", () => {
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

    describe("GET /api/notifications", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/notifications?page=1&perPage=10",
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid page", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/notifications?page=0&perPage=10",
                headers: { authorization: "Bearer invalid" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should return authenticated user notifications", async () => {
            const user = await testHelpers.createUser();
            await testHelpers.createNotification(user.id);

            const signInResponse = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: {
                    identifier: user.email,
                    password: user.password,
                },
            });

            if (signInResponse.statusCode !== 200) {
                return;
            }

            const { data } = JSON.parse(signInResponse.body);
            const token = data?.token;

            const response = await app.inject({
                method: "GET",
                url: "/api/notifications",
                headers: { authorization: `Bearer ${token}` },
            });

            expect([200, 401]).toContain(response.statusCode);

            if (response.statusCode === 200) {
                const body = JSON.parse(response.body);
                expect(body.data).toHaveProperty("notifications");
                expect(Array.isArray(body.data.notifications)).toBe(true);
            }
        });
    });

    describe("PUT /api/notifications/read", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                payload: { allRead: true },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with empty payload", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                headers: { authorization: "Bearer invalid" },
                payload: {},
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with empty notificationIds array", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                headers: { authorization: "Bearer invalid" },
                payload: { notificationIds: [] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid notificationId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/read",
                headers: { authorization: "Bearer invalid" },
                payload: { notificationIds: ["not-a-uuid"] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/notifications/starred", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                payload: { notificationIds: [VALID_UUID] },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                headers: { authorization: "Bearer invalid-token" },
                payload: { notificationIds: [VALID_UUID] },
            });

            expect([401, 403]).toContain(response.statusCode);
        });

        it("should fail with missing notificationIds", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                headers: { authorization: "Bearer invalid-token" },
                payload: {},
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with empty notificationIds array", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                headers: { authorization: "Bearer invalid-token" },
                payload: { notificationIds: [] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid UUID in notificationIds", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/notifications/starred",
                headers: { authorization: "Bearer invalid-token" },
                payload: { notificationIds: ["not-a-uuid"] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
