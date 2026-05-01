import { describe, it, expect } from "vitest";
import {
    BadRequestError,
    NotFoundError,
    ForbiddenError,
    UnauthorizedError,
    ConflictError,
    InternalServerError,
    DefaultInternalServerError,
} from "@/lib/errors/errors.js";

describe("Error Factories", () => {
    describe("BadRequestError", () => {
        it("should create an error with status code 400", () => {
            const error = new BadRequestError("Bad input");
            expect(error.statusCode).toBe(400);
        });

        it("should include the provided message", () => {
            const error = new BadRequestError("Invalid field");
            expect(error.message).toBe("Invalid field");
        });

        it("should be an instance of Error", () => {
            const error = new BadRequestError("msg");
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("NotFoundError", () => {
        it("should create an error with status code 404", () => {
            const error = new NotFoundError("Resource not found");
            expect(error.statusCode).toBe(404);
        });

        it("should include the provided message", () => {
            const error = new NotFoundError("User not found");
            expect(error.message).toBe("User not found");
        });

        it("should be an instance of Error", () => {
            const error = new NotFoundError("msg");
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("ForbiddenError", () => {
        it("should create an error with status code 403", () => {
            const error = new ForbiddenError("Access denied");
            expect(error.statusCode).toBe(403);
        });

        it("should include the provided message", () => {
            const error = new ForbiddenError("Insufficient permissions");
            expect(error.message).toBe("Insufficient permissions");
        });

        it("should be an instance of Error", () => {
            const error = new ForbiddenError("msg");
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("UnauthorizedError", () => {
        it("should create an error with status code 401", () => {
            const error = new UnauthorizedError("Not authenticated");
            expect(error.statusCode).toBe(401);
        });

        it("should include the provided message", () => {
            const error = new UnauthorizedError("Token expired");
            expect(error.message).toBe("Token expired");
        });

        it("should be an instance of Error", () => {
            const error = new UnauthorizedError("msg");
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("ConflictError", () => {
        it("should create an error with status code 409", () => {
            const error = new ConflictError("Already exists");
            expect(error.statusCode).toBe(409);
        });

        it("should include the provided message", () => {
            const error = new ConflictError("Email already taken");
            expect(error.message).toBe("Email already taken");
        });

        it("should be an instance of Error", () => {
            const error = new ConflictError("msg");
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("InternalServerError", () => {
        it("should create an error with status code 500", () => {
            const error = new InternalServerError("Something went wrong");
            expect(error.statusCode).toBe(500);
        });

        it("should include the provided message", () => {
            const error = new InternalServerError("Database failure");
            expect(error.message).toBe("Database failure");
        });

        it("should be an instance of Error", () => {
            const error = new InternalServerError("msg");
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("DefaultInternalServerError", () => {
        it("should create an error with status code 500", () => {
            const error = new DefaultInternalServerError();
            expect(error.statusCode).toBe(500);
        });

        it("should use the default message", () => {
            const error = new DefaultInternalServerError();
            expect(error.message).toBe("Internal Server Error");
        });

        it("should be an instance of Error", () => {
            const error = new DefaultInternalServerError();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("Error code uniqueness", () => {
        it("each error factory should produce a distinct status code", () => {
            const codes = [
                new BadRequestError("").statusCode,
                new NotFoundError("").statusCode,
                new ForbiddenError("").statusCode,
                new UnauthorizedError("").statusCode,
                new ConflictError("").statusCode,
                new InternalServerError("").statusCode,
            ];

            const unique = new Set(codes);
            expect(unique.size).toBe(codes.length);
        });
    });
});
