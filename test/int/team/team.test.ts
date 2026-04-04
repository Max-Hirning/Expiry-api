import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Team Routes", () => {
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

    describe("POST /team", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/teams",
                payload: {
                    name: "Test Team",
                    description: "Test",
                },
            });

            expect(response.statusCode).toBe(401);
        });
    });

    describe("GET /team", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams?page=1&perPage=10",
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid pagination", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams?page=0&perPage=10",
                headers: {
                    authorization: "Bearer invalid",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /team/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams/team-id",
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
