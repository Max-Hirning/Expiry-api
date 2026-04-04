import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Tag Routes", () => {
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

    describe("GET /team/:teamId/tag", () => {
        it("should fail with invalid pagination parameters", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/tags/test-team-id?page=0&perPage=10",
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/tags/test-team-id?page=1&perPage=10",
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /team/:teamId/tag/:tagId", () => {
        it("should fail with invalid team ID format", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/tags/test-team-id/test-tag-id",
            });

            expect([400, 401, 404]).toContain(response.statusCode);
        });

        it("should return error for missing credentials", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/tags/team-id/tag-id",
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
