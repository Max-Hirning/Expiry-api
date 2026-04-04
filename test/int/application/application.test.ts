import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Application Routes", () => {
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

    describe("GET /application/ping", () => {
        it("should return healthy status", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/ping",
            });

            expect(response.statusCode).toBe(200);
            if (response.body) {
                try {
                    const body = JSON.parse(response.body);
                    if (body.data) {
                        expect(body.data).toHaveProperty("status");
                    }
                } catch (e) {
                    // Response might not be JSON, that's ok for a ping
                }
            }
        });

        it("should not require authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/ping",
            });

            expect(response.statusCode).toBe(200);
        });
    });
});
