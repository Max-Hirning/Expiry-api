import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const VALID_UUID = "00000000-0000-0000-0000-000000000001";

describe("Team Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;

    beforeAll(async () => {
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

    describe("POST /api/teams", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/teams",
                payload: { name: "Test Team" },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with missing name field", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/teams",
                headers: { authorization: "Bearer invalid-token" },
                payload: {},
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/teams",
                headers: { authorization: "Bearer invalid-token" },
                payload: { name: "Test Team" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("GET /api/teams", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams?limit=10",
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid pagination", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams?page=0&perPage=10",
                headers: { authorization: "Bearer invalid" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams?limit=10",
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("GET /api/teams/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/teams/${VALID_UUID}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/teams/not-a-uuid",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/teams/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/teams/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/teams/${VALID_UUID}`,
                payload: { name: "Updated Team" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/teams/not-a-uuid",
                payload: { name: "Updated Team" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/teams/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
                payload: { name: "Updated Team" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });

        it("should fail with invalid teamMembersUsersToDeleteIds format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/teams/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
                payload: {
                    teamMembersUsersToDeleteIds: ["not-a-uuid"],
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/teams/:teamId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/teams/${VALID_UUID}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: "/api/teams/not-a-uuid",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/teams/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });
});
