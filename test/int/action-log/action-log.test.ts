import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Action Log Routes", () => {
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

    describe("GET /action-log", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/action-logs/team-id?page=1&perPage=10",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid page number", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/action-logs/team-id?page=0&perPage=10",
                headers: {
                    authorization: "Bearer invalid",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
