import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Document Routes", () => {
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

    describe("POST /document", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/documents/team-id",
                payload: {
                    name: "Test Doc",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /document", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/documents/team-id?page=1&perPage=10",
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("GET /document/:documentId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/documents/doc-id",
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });
});
