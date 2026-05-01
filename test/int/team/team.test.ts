import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";
import { VALID_UUID } from "../setup/fixtures.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Team Routes", () => {
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
                headers: { authorization: `Bearer ${authToken}` },
                payload: {},
            });

            expect(response.statusCode).toBe(400);
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
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    teamMembersUsersToDeleteIds: ["not-a-uuid"],
                },
            });

            expect(response.statusCode).toBe(400);
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
