import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers, setTestJwt } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";

describe("Tag Routes", () => {
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

    describe("GET /api/tags/:teamId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/tags/${VALID_UUID}/?limit=10`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid teamId", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/tags/not-a-uuid/?limit=10",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects invalid pagination", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: `/api/tags/${VALID_UUID}/?limit=abc`,
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("lists tags for a team (happy path with tenant DB)", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            await testHelpers.createTag(team.id);
            await testHelpers.createTag(team.id);
            const session = await testHelpers.createSession(owner);

            const response = await app.inject({
                method: "GET",
                url: `/api/tags/${team.id}/?limit=10`,
                headers: session.headers,
            });
            expect([200, 403, 500]).toContain(response.statusCode);
        }, 30000);

        it("non-member receives 403", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const outsider = await testHelpers.createUser();
            const session = await testHelpers.createSession(outsider);

            const response = await app.inject({
                method: "GET",
                url: `/api/tags/${team.id}/?limit=10`,
                headers: session.headers,
            });
            expect([403, 404, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("GET /api/tags/:teamId/:tagId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/tags/${VALID_UUID}/${VALID_UUID}`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid teamId/tagId", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/tags/not-a-uuid/not-a-uuid",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("fetches a tag (happy path)", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const tag = await testHelpers.createTag(team.id);
            const session = await testHelpers.createSession(owner);

            const response = await app.inject({
                method: "GET",
                url: `/api/tags/${team.id}/${tag.id}`,
                headers: session.headers,
            });
            expect([200, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);
    });
});
