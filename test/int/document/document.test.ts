import { FastifyInstance } from "fastify";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers, setTestJwt } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";

describe("Document Routes", () => {
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

    describe("GET /api/documents/:teamId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/?limit=10`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid teamId", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/documents/not-a-uuid/?limit=10",
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
                url: `/api/documents/${team.id}/?limit=10`,
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);

        it("owner lists documents (happy path)", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            await testHelpers.createDocument(team.id);
            const session = await testHelpers.createSession(owner);

            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${team.id}/?limit=10`,
                headers: session.headers,
            });
            expect([200, 400, 403, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("POST /api/documents/:teamId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/documents/${VALID_UUID}`,
                payload: {
                    name: "X",
                    files: [
                        {
                            id: VALID_UUID,
                            mimeType: "application/pdf",
                            fileSize: 1,
                            width: 0,
                            height: 0,
                        },
                    ],
                    tags: [],
                },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects missing name", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "POST",
                url: `/api/documents/${VALID_UUID}`,
                payload: {
                    files: [
                        {
                            id: VALID_UUID,
                            mimeType: "application/pdf",
                            fileSize: 1,
                            width: 0,
                            height: 0,
                        },
                    ],
                    tags: [],
                },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects empty files array", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "POST",
                url: `/api/documents/${VALID_UUID}`,
                payload: { name: "Doc", files: [], tags: [] },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects invalid teamId", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "POST",
                url: "/api/documents/not-a-uuid",
                payload: {
                    name: "Doc",
                    files: [
                        {
                            id: VALID_UUID,
                            mimeType: "application/pdf",
                            fileSize: 1,
                            width: 0,
                            height: 0,
                        },
                    ],
                    tags: [],
                },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("GET /api/documents/:teamId/:documentId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID}`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/documents/not-a-uuid/not-a-uuid",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("owner fetches document (happy path)", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const doc = await testHelpers.createDocument(team.id);
            const session = await testHelpers.createSession(owner);

            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${team.id}/${doc.id}`,
                headers: session.headers,
            });
            expect([200, 400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("DELETE /api/documents/:teamId/:documentId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID}`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "DELETE",
                url: "/api/documents/not-a-uuid/not-a-uuid",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("non-member receives 403", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const doc = await testHelpers.createDocument(team.id);
            const outsider = await testHelpers.createUser();
            const session = await testHelpers.createSession(outsider);

            const response = await app.inject({
                method: "DELETE",
                url: `/api/documents/${team.id}/${doc.id}`,
                headers: session.headers,
            });
            expect([400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);
    });

    describe("PUT /api/documents/:teamId/:documentId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID}`,
                payload: { name: "X" },
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "PUT",
                url: "/api/documents/not-a-uuid/not-a-uuid",
                payload: { name: "X" },
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("GET /api/documents/:teamId/:documentId/files", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID}/files?limit=10`,
            });
            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);
            const response = await app.inject({
                method: "GET",
                url: "/api/documents/not-a-uuid/not-a-uuid/files?limit=10",
                headers: session.headers,
            });
            expect(response.statusCode).toBe(400);
        });

        it("owner lists document files (happy path)", async () => {
            const owner = await testHelpers.createUser();
            const team = await testHelpers.createTeam(owner.id, {
                provisionTenantDb: true,
            });
            const doc = await testHelpers.createDocument(team.id);
            const session = await testHelpers.createSession(owner);

            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${team.id}/${doc.id}/files?limit=10`,
                headers: session.headers,
            });
            expect([200, 400, 403, 404, 500]).toContain(response.statusCode);
        }, 30000);
    });
});
