import { describe, it, expect } from "vitest";
import { hashing } from "@/lib/hashing/hashing.js";

describe("Hashing Utility", () => {
    describe("hashPassword", () => {
        it("should hash a password successfully", async () => {
            const password = "TestPassword123!";
            const hash = await hashing.hashPassword(password);

            expect(hash).toBeDefined();
            expect(hash).not.toBe(password);
            expect(typeof hash).toBe("string");
        });

        it("should produce different hashes for the same password", async () => {
            const password = "TestPassword123!";
            const hash1 = await hashing.hashPassword(password);
            const hash2 = await hashing.hashPassword(password);

            expect(hash1).not.toBe(hash2);
        });

        it("should handle special characters in passwords", async () => {
            const password = "P@ssw0rd!#$%^&*()_+-=[]{}|;:',.<>?/";
            const hash = await hashing.hashPassword(password);

            expect(hash).toBeDefined();
            expect(typeof hash).toBe("string");
        });

        it("should handle very long passwords", async () => {
            const password = "a".repeat(1000);
            const hash = await hashing.hashPassword(password);

            expect(hash).toBeDefined();
            expect(typeof hash).toBe("string");
        });

        it("should handle unicode characters", async () => {
            const password = "パスワード123!密码";
            const hash = await hashing.hashPassword(password);

            expect(hash).toBeDefined();
            expect(typeof hash).toBe("string");
        });
    });

    describe("comparePassword", () => {
        it("should return true for correct password", async () => {
            const password = "TestPassword123!";
            const hash = await hashing.hashPassword(password);
            const isMatch = await hashing.comparePassword(password, hash);

            expect(isMatch).toBe(true);
        });

        it("should return false for incorrect password", async () => {
            const password = "TestPassword123!";
            const wrongPassword = "WrongPassword123!";
            const hash = await hashing.hashPassword(password);
            const isMatch = await hashing.comparePassword(wrongPassword, hash);

            expect(isMatch).toBe(false);
        });

        it("should return false when comparing empty password with hash", async () => {
            const password = "TestPassword123!";
            const hash = await hashing.hashPassword(password);
            const isMatch = await hashing.comparePassword("", hash);

            expect(isMatch).toBe(false);
        });

        it("should be case sensitive", async () => {
            const password = "TestPassword123!";
            const wrongPassword = "testpassword123!";
            const hash = await hashing.hashPassword(password);
            const isMatch = await hashing.comparePassword(wrongPassword, hash);

            expect(isMatch).toBe(false);
        });

        it("should handle special characters correctly", async () => {
            const password = "P@ssw0rd!#$%^&*()";
            const wrongPassword = "P@ssw0rd!#$%^&*(";
            const hash = await hashing.hashPassword(password);
            const isMatch = await hashing.comparePassword(wrongPassword, hash);

            expect(isMatch).toBe(false);
        });

        it("should compare multiple hashes of the same password", async () => {
            const password = "TestPassword123!";
            const hash1 = await hashing.hashPassword(password);
            const hash2 = await hashing.hashPassword(password);

            const match1 = await hashing.comparePassword(password, hash1);
            const match2 = await hashing.comparePassword(password, hash2);

            expect(match1).toBe(true);
            expect(match2).toBe(true);
        });
    });

    describe("Password Security", () => {
        it("should not leak password information in hash", async () => {
            const password = "MySecret123!";
            const hash = await hashing.hashPassword(password);

            expect(hash).not.toContain(password);
        });

        it("should produce consistent results for the same input", async () => {
            const password = "TestPassword123!";
            const hash = await hashing.hashPassword(password);

            const match1 = await hashing.comparePassword(password, hash);
            const match2 = await hashing.comparePassword(password, hash);
            const match3 = await hashing.comparePassword(password, hash);

            expect(match1).toBe(true);
            expect(match2).toBe(true);
            expect(match3).toBe(true);
        });
    });
});
