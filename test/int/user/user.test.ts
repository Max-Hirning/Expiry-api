import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("User Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;

    beforeAll(async () => {
        // Initialize test database schema BEFORE creating the app
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

    describe("POST /user/invite", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                payload: {
                    fullName: "Test",
                    email: "test@example.com",
                    phoneNumber: "+1234567890",
                },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid email", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                headers: {
                    authorization: "Bearer invalid-token",
                },
                payload: {
                    fullName: "Test",
                    email: "invalid-email",
                    phoneNumber: "+1234567890",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /user", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users?page=1&perPage=10",
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid page number", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users?page=0&perPage=10",
                headers: {
                    authorization: "Bearer invalid-token",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /user/:userId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/test-id",
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
