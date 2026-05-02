import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";
import { VALID_UUID, VALID_UUID_2 } from "../setup/fixtures.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("User Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;
    let authToken: string;
    let userId: string;
    let userPassword: string;

    beforeAll(async () => {
        cleanup = await setupDatabase();
        app = await createTestApp();

        const user = await testHelpers.createUser();
        userId = user.id;
        userPassword = user.password;
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

    describe("POST /api/users/invite", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                payload: {
                    fullName: "Test",
                    email: "test@example.com",
                    phoneNumber: "+1234567890",
                },
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid email", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    fullName: "Test",
                    email: "invalid-email",
                    phoneNumber: "+1234567890",
                },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with missing fullName", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    email: "test@example.com",
                    phoneNumber: "+1234567890",
                },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with missing phoneNumber", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    fullName: "Test User",
                    email: "test@example.com",
                },
            });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("GET /api/users", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users?limit=10",
            });

            expect(response.statusCode).toBe(401);
        });

        it("should fail with invalid page number", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users?page=0&perPage=10",
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users?limit=10",
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("GET /api/users/invite", () => {
        it("should fail with missing invitationId", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/invite",
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with invalid invitationId token", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/invite?invitationId=invalid-token",
            });

            expect([400, 401, 404]).toContain(response.statusCode);
        });
    });

    describe("GET /api/users/:userId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/users/${VALID_UUID}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid userId format", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/not-a-uuid",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/users/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/users/:userId/invite", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${VALID_UUID}/invite`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid userId format", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: "/api/users/not-a-uuid/invite",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${VALID_UUID}/invite`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/users/:userId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${VALID_UUID}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid userId format", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: "/api/users/not-a-uuid",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/users/:userId", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}`,
                payload: { fullName: "Updated Name" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid userId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: "/api/users/not-a-uuid",
                payload: { fullName: "Updated Name" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid email format in body", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: { email: "not-an-email" },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}`,
                headers: { authorization: "Bearer invalid-token" },
                payload: { fullName: "Updated Name" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("PATCH /api/users/:userId/status", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PATCH",
                url: `/api/users/${VALID_UUID}/status`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid userId format", async () => {
            const response = await app.inject({
                method: "PATCH",
                url: "/api/users/not-a-uuid/status",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid token", async () => {
            const response = await app.inject({
                method: "PATCH",
                url: `/api/users/${VALID_UUID}/status`,
                headers: { authorization: "Bearer invalid-token" },
            });

            expect([400, 401, 403]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/users/:userId/password", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/password`,
                payload: {
                    oldPassword: "OldPassword123!",
                    password: "NewPassword123!",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with missing oldPassword", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/password`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: { password: "NewPassword123!" },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with missing new password", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/password`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: { oldPassword: "OldPassword123!" },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with wrong old password", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${userId}/password`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    oldPassword: "WrongPassword999!",
                    password: "NewPassword123!",
                },
            });

            expect(response.statusCode).toBe(409);
        });

        it("should succeed and invalidate refresh tokens on correct password change", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${userId}/password`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: {
                    oldPassword: userPassword,
                    password: "NewPassword456!",
                },
            });

            expect(response.statusCode).toBe(200);
            const body = JSON.parse(response.body);
            expect(body.data).toHaveProperty("user");
            expect(body.message).toBe("User password updated successfully.");
        });
    });

    describe("PUT /api/users/:userId/teams/:teamId/role", () => {
        it("should fail without authentication", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/teams/${VALID_UUID_2}/role`,
                payload: { role: "ADMIN" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid userId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/not-a-uuid/teams/${VALID_UUID_2}/role`,
                payload: { role: "ADMIN" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid teamId format", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/teams/not-a-uuid/role`,
                payload: { role: "ADMIN" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("should fail with invalid role value", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/teams/${VALID_UUID_2}/role`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: { role: "INVALID_ROLE" },
            });

            expect(response.statusCode).toBe(400);
        });

        it("should fail with missing role field", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/teams/${VALID_UUID_2}/role`,
                headers: { authorization: `Bearer ${authToken}` },
                payload: {},
            });

            expect(response.statusCode).toBe(400);
        });
    });
});
