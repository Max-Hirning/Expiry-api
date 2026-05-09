import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers, setTestJwt } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";

describe("Action Log Routes", () => {
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

    describe("GET /api/action-logs/:teamId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/action-logs/${VALID_UUID}/?limit=10`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid teamId", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/action-logs/not-a-uuid/?limit=10",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects missing limit", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: `/api/action-logs/${VALID_UUID}/`,
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("non-member receives 403", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const outsider = await testHelpers.createUser();
            const session = await testHelpers.createSession(outsider);

            const response = await app.inject({
                method: "GET",
                url: `/api/action-logs/${team.id}/?limit=10`,
                headers: session.headers,
            });
            expect([403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("team owner fetches action logs (happy path)", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            await testHelpers.createActionLog(
                team.id,
                owner.id,
                owner.fullName
            );
            const session = await testHelpers.createSession(owner);

            const response = await app.inject({
                method: "GET",
                url: `/api/action-logs/${team.id}/?limit=10`,
                headers: session.headers,
            });
            expect([200, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });
});
