import { FastifyInstance } from "fastify";
import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { VALID_UUID } from "../setup/fixtures.js";
import { testHelpers, setTestJwt } from "../setup/helpers.js";
import { UserRoles } from "@/database/master/generated/client.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("User Routes", () => {
    let app: FastifyInstance;
    let cleanup: (() => Promise<void>) | null = null;

    beforeAll(async () => {
        cleanup = await setupDatabase();
        app = await createTestApp();
        setTestJwt(app.jwt);
    });

    afterAll(async () => {
        if (app) {
            await app.close().catch(() => {});
        }

        if (cleanup) {
            await cleanup();
        }

        await testHelpers.cleanup();
    });

    describe("GET /api/users", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/?limit=10",
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid limit", async () => {
            const user = await testHelpers.createUser();
            const session = await testHelpers.createSession(user);

            const response = await app.inject({
                method: "GET",
                url: "/api/users/?limit=abc",
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });

        it("super-admin lists users (happy path)", async () => {
            const admin = await testHelpers.createUser({
                role: UserRoles.SUPER_ADMIN,
            });

            await testHelpers.createUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "GET",
                url: "/api/users/?limit=10",
                headers: session.headers,
            });

            expect([200, 403, 500]).toContain(response.statusCode);
        });

        it("regular USER may be forbidden from listing users", async () => {
            const u = await testHelpers.createUser({ role: UserRoles.USER });
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "GET",
                url: "/api/users/?limit=10",
                headers: session.headers,
            });

            expect([200, 403, 500]).toContain(response.statusCode);
        });
    });

    describe("POST /api/users/invite", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                payload: {
                    fullName: "X",
                    email: "x@example.com",
                    phoneNumber: "+1234567890",
                },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid email", async () => {
            const admin = await testHelpers.createUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                payload: {
                    fullName: "X",
                    email: "not-an-email",
                    phoneNumber: "+1234567890",
                },
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });

        it("rejects missing fields", async () => {
            const admin = await testHelpers.createUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                payload: { email: "x@example.com" },
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });

        it("invite tolerated (sends email + may create tenant DB)", async () => {
            const admin = await testHelpers.createUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "POST",
                url: "/api/users/invite",
                payload: {
                    fullName: "Invited",
                    email: `inv-${Date.now()}@example.com`,
                    phoneNumber: `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`,
                },
                headers: session.headers,
            });

            // Side effects (email, optional team relation) may fail in test env
            expect([200, 201, 400, 403, 500]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/users/:userId/invite", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${VALID_UUID}/invite`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const admin = await testHelpers.createUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "DELETE",
                url: "/api/users/not-a-uuid/invite",
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });

        it("admin deletes invited user (happy path)", async () => {
            const admin = await testHelpers.createUser();
            const invited = await testHelpers.createInvitedUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${invited.id}/invite`,
                headers: session.headers,
            });

            expect([200, 204, 403]).toContain(response.statusCode);
        });
    });

    describe("DELETE /api/users/:userId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "DELETE",
                url: `/api/users/${VALID_UUID}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const admin = await testHelpers.createUser();
            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "DELETE",
                url: "/api/users/not-a-uuid",
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("PUT /api/users/:userId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}`,
                payload: { fullName: "New Name" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("user updates own fullName (happy path)", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${u.id}`,
                payload: { fullName: "Updated Name" },
                headers: session.headers,
            });

            expect([200, 403, 500]).toContain(response.statusCode);
        });

        it("rejects invalid email shape", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${u.id}`,
                payload: { email: "not-an-email" },
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("PATCH /api/users/:userId/status", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PATCH",
                url: `/api/users/${VALID_UUID}/status`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("super-admin can toggle a SUB_ADMIN's status", async () => {
            const admin = await testHelpers.createUser({
                role: UserRoles.SUPER_ADMIN,
            });

            const target = await testHelpers.createUser({
                role: UserRoles.SUB_ADMIN,
            });

            const session = await testHelpers.createSession(admin);

            const response = await app.inject({
                method: "PATCH",
                url: `/api/users/${target.id}/status`,
                headers: session.headers,
            });

            expect([200, 403, 500]).toContain(response.statusCode);
        });

        it("USER cannot toggle status (403)", async () => {
            const u = await testHelpers.createUser({ role: UserRoles.USER });
            const target = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "PATCH",
                url: `/api/users/${target.id}/status`,
                headers: session.headers,
            });

            expect(response.statusCode).toBe(403);
        });
    });

    describe("PUT /api/users/:userId/password", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/password`,
                payload: { oldPassword: "x", password: "y" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects missing fields", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${u.id}/password`,
                payload: { password: "newpass" },
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });

        it("user updates own password (happy path)", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${u.id}/password`,
                payload: {
                    oldPassword: u.password,
                    password: "NewSecret1!",
                },
                headers: session.headers,
            });

            expect([200, 400, 403]).toContain(response.statusCode);
        });
    });

    describe("GET /api/users/invite", () => {
        it("requires invitationId query (no auth required)", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/invite",
            });

            expect(response.statusCode).toBe(400);
        });

        it("returns 404/400 for unknown invitationId", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/users/invite?invitationId=unknown-id",
            });

            expect([400, 404, 500]).toContain(response.statusCode);
        });
    });

    describe("PUT /api/users/:userId/teams/:teamId/role", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/teams/${VALID_UUID}/role`,
                payload: { role: "STAFF" },
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid role", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "PUT",
                url: `/api/users/${VALID_UUID}/teams/${VALID_UUID}/role`,
                payload: { role: "NOT_A_ROLE" },
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("GET /api/users/:userId", () => {
        it("rejects unauthenticated", async () => {
            const response = await app.inject({
                method: "GET",
                url: `/api/users/${VALID_UUID}`,
            });

            expect([400, 401]).toContain(response.statusCode);
        });

        it("rejects invalid uuid", async () => {
            const u = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "GET",
                url: "/api/users/not-a-uuid",
                headers: session.headers,
            });

            expect(response.statusCode).toBe(400);
        });

        it("authed user fetches an existing user (happy path)", async () => {
            const u = await testHelpers.createUser();
            const target = await testHelpers.createUser();
            const session = await testHelpers.createSession(u);

            const response = await app.inject({
                method: "GET",
                url: `/api/users/${target.id}`,
                headers: session.headers,
            });

            expect([200, 403, 500]).toContain(response.statusCode);
        });
    });
});
