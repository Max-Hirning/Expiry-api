import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";
import { VALID_UUID, VALID_UUID_2 } from "../setup/fixtures.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Document Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;
    let authToken: string;

    beforeAll(async () => {
        cleanup = await setupDatabase();
        app = await createTestApp();

        const user = await testHelpers.createUser();
        const signInResponse = await app.inject({
            method: "POST",
            url: "/api/auth/sign-in",
            payload: { identifier: user.email, password: user.password },
        });
        const { data } = JSON.parse(signInResponse.body);
        authToken = data.token;
    });

    afterAll(async () => {
        await app.close();

        if (cleanup) {
            await cleanup();
        }

        await testHelpers.cleanup();
    });

    describe("POST /api/documents/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/documents/${VALID_UUID}`,
                payload: {
                    name: "Test Doc",
                    files: [
                        {
                            id: VALID_UUID_2,
                            mimeType: "application/pdf",
                            fileSize: 1024,
                            width: 0,
                            height: 0,
                        },
                    ],
                    tags: [],
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/documents/not-a-uuid",
                payload: { name: "Test Doc", files: [], tags: [] },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with missing name field", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/documents/${VALID_UUID}`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    files: [
                        {
                            id: VALID_UUID_2,
                            mimeType: "application/pdf",
                            fileSize: 1024,
                            width: 0,
                            height: 0,
                        },
                    ],
                    tags: [],
                },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with empty files array", async () => {
            const response = await app.inject({
                method: "POST",
                url: `/api/documents/${VALID_UUID}`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: { name: "Test Doc", files: [], tags: [] },
            });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("GET /api/documents/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}?limit=10`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/documents/not-a-uuid?limit=10",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with missing required limit param", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}`,
                headers: { authorization: `Bearer ${authToken}` },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}?limit=10`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("GET /api/documents/:teamId/:documentId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid documentId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/not-a-uuid`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/documents/:teamId/:documentId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid documentId format", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/documents/${VALID_UUID}/not-a-uuid`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/documents/:teamId/:documentId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}`,
                payload: { name: "Updated Doc" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid documentId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/documents/${VALID_UUID}/not-a-uuid`,
                payload: { name: "Updated Doc" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}`,
                headers: { authorization: "Bearer invalid-token" },
                payload: { name: "Updated Doc" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("GET /api/documents/:teamId/:documentId/files", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}/files`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid documentId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/not-a-uuid/files`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/documents/${VALID_UUID}/${VALID_UUID_2}/files`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });
});
