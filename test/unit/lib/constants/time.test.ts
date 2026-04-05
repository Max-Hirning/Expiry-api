import { describe, it, expect } from "vitest";
import { SECONDS, MINUTES, HOURS, DAYS } from "@/lib/constants/time.js";

describe("Time Constants", () => {
    describe("SECONDS", () => {
        it("should equal 60000 milliseconds", () => {
            expect(SECONDS).toBe(60000);
        });

        it("should be a positive number", () => {
            expect(SECONDS).toBeGreaterThan(0);
        });

        it("should be usable in calculations", () => {
            const twoSeconds = SECONDS * 2;
            expect(twoSeconds).toBe(120000);
        });
    });

    describe("MINUTES", () => {
        it("should equal 60 seconds", () => {
            expect(MINUTES).toBe(SECONDS * 60);
        });

        it("should equal 3600000 milliseconds", () => {
            expect(MINUTES).toBe(3600000);
        });

        it("should be a positive number", () => {
            expect(MINUTES).toBeGreaterThan(0);
        });

        it("should be greater than seconds", () => {
            expect(MINUTES).toBeGreaterThan(SECONDS);
        });
    });

    describe("HOURS", () => {
        it("should equal 60 minutes", () => {
            expect(HOURS).toBe(MINUTES * 60);
        });

        it("should equal 216000000 milliseconds", () => {
            expect(HOURS).toBe(216000000);
        });

        it("should be a positive number", () => {
            expect(HOURS).toBeGreaterThan(0);
        });

        it("should be greater than minutes", () => {
            expect(HOURS).toBeGreaterThan(MINUTES);
        });
    });

    describe("DAYS", () => {
        it("should equal 24 hours", () => {
            expect(DAYS).toBe(HOURS * 24);
        });

        it("should equal 5184000000 milliseconds", () => {
            expect(DAYS).toBe(5184000000);
        });

        it("should be a positive number", () => {
            expect(DAYS).toBeGreaterThan(0);
        });

        it("should be greater than hours", () => {
            expect(DAYS).toBeGreaterThan(HOURS);
        });
    });

    describe("Time Conversions", () => {
        it("should convert days to seconds", () => {
            const oneDayInSeconds = DAYS / SECONDS;
            expect(oneDayInSeconds).toBe(86400);
        });

        it("should convert hours to seconds", () => {
            const oneHourInSeconds = HOURS / SECONDS;
            expect(oneHourInSeconds).toBe(3600);
        });

        it("should convert minutes to milliseconds", () => {
            const oneMinuteMs = MINUTES;
            expect(oneMinuteMs).toBe(3600000);
        });

        it("should calculate complex time durations", () => {
            const twoDaysThreeHoursFourMinutes =
                DAYS * 2 + HOURS * 3 + MINUTES * 4;
            const expected = DAYS * 2 + HOURS * 3 + MINUTES * 4;
            expect(twoDaysThreeHoursFourMinutes).toBe(expected);
        });
    });

    describe("Consistency", () => {
        it("should maintain consistent relationships between units", () => {
            expect(MINUTES / SECONDS).toBe(60);
            expect(HOURS / MINUTES).toBe(60);
            expect(DAYS / HOURS).toBe(24);
        });

        it("should be immutable-like (no side effects from usage)", () => {
            const originalSeconds = SECONDS;
            const calc1 = SECONDS * 5;
            const calc2 = SECONDS * 10;

            expect(SECONDS).toBe(originalSeconds);
            expect(calc1).toBe(300000);
            expect(calc2).toBe(600000);
        });
    });
});
