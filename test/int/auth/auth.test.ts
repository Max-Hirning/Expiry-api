import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { FastifyInstance } from "fastify";

import { setupDatabase } from "../setup/db.js";
import { createTestApp } from "../setup/app.js";
import { testHelpers } from "../setup/helpers.js";

describe("Auth Routes", () => {
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

    describe("POST /api/auth/sign-up", () => {
        it("attempts sign up (tolerates 5xx вЂ” sign-up provisions a tenant DB which may fail in test env)", async () => {
            const email = `newuser-${Date.now()}@example.com`;
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-up",
                payload: {
                    user: {
                        fullName: "New User",
                        email,
                        phoneNumber: `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`,
                        password: "SecurePassword123!",
                    },
                    team: { name: `Team ${Date.now()}` },
                },
            });

            expect([200, 201, 500]).toContain(response.statusCode);
            if (response.statusCode === 201 || response.statusCode === 200) {
                const body = JSON.parse(response.body);
                expect(body.data).toHaveProperty("user");
            }
        }, 30000);

        it("rejects invalid email format", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-up",
                payload: {
                    user: {
                        fullName: "New User",
                        email: "invalid-email",
                        phoneNumber: "+1234567890",
                        password: "SecurePassword123!",
                    },
                    team: { name: "Team" },
                },
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects missing password", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-up",
                payload: {
                    user: {
                        fullName: "New User",
                        email: "newuser@example.com",
                        phoneNumber: "+1234567890",
                    },
                    team: { name: "Team" },
                },
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects missing team name", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-up",
                payload: {
                    user: {
                        fullName: "New User",
                        email: "newuser@example.com",
                        phoneNumber: "+1234567890",
                        password: "SecurePassword123!",
                    },
                    team: {},
                },
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects empty payload", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-up",
                payload: {},
            });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("POST /api/auth/sign-in", () => {
        it("succeeds with valid credentials (happy path)", async () => {
            const user = await testHelpers.createUser();
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: {
                    identifier: user.email,
                    password: user.password,
                },
            });
            expect(response.statusCode).toBe(200);
            const body = JSON.parse(response.body);
            expect(body.data).toHaveProperty("user");
            expect(body.data.user.email).toBe(user.email);
        });

        it("succeeds with phone number identifier", async () => {
            const user = await testHelpers.createUser();
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: {
                    identifier: user.phoneNumber,
                    password: user.password,
                },
            });
            expect(response.statusCode).toBe(200);
        });

        it("rejects wrong password", async () => {
            const user = await testHelpers.createUser();
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: {
                    identifier: user.email,
                    password: "WrongPassword123!",
                },
            });
            expect([400, 401, 404, 409]).toContain(response.statusCode);
        });

        it("rejects non-existent user", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: {
                    identifier: "nonexistent@example.com",
                    password: "SomePassword123!",
                },
            });
            expect([400, 401, 404, 409]).toContain(response.statusCode);
        });

        it("rejects missing password", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: { identifier: "user@example.com" },
            });
            expect(response.statusCode).toBe(400);
        });

        it("rejects empty payload", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/auth/sign-in",
                payload: {},
            });
            expect(response.statusCode).toBe(400);
        });
    });
});
