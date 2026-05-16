import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Application Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;

    beforeAll(async () => {
        cleanup = await setupDatabase();
        app = await createTestApp();
    });

    afterAll(async () => {
        if (app) await app.close().catch(() => {});
        if (cleanup) await cleanup();
        await testHelpers.cleanup();
    });

    describe("GET /api/ping", () => {
        it("returns 200 without auth", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/ping",
            });
            expect(response.statusCode).toBe(200);
        });
    });

    describe("POST /api/test-data", () => {
        it("route is registered (handler is a heavy seeder; not invoked in tests)", () => {
            // Verify the route is mounted without invoking the seeder, which
            // creates many users/teams/tenant DBs and depends on GCS/infra
            // that the test env does not provide.
            const has = app.hasRoute({ method: "POST", url: "/api/test-data" });
            expect(has).toBe(true);
        });
    });
});
