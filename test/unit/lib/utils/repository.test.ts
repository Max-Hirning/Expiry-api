import { describe, it, expect, vi } from "vitest";
import { withRepositories } from "@/lib/utils/repository.js";

describe("Repository Utility", () => {
    describe("withRepositories", () => {
        it("should execute function with repositories", async () => {
            const mockRepo = {
                $disconnect: vi.fn().mockResolvedValue(undefined),
            };

            await withRepositories([mockRepo], async (_repo) => {
                return "test result";
            });

            expect(mockRepo.$disconnect).toHaveBeenCalled();
        });

        it("should call disconnect on all repositories after execution", async () => {
            const mockRepo1 = {
                $disconnect: vi.fn().mockResolvedValue(undefined),
            };
            const mockRepo2 = {
                $disconnect: vi.fn().mockResolvedValue(undefined),
            };

            await withRepositories(
                [mockRepo1, mockRepo2],
                async (_repo1, _repo2) => {
                    return "result";
                }
            );

            expect(mockRepo1.$disconnect).toHaveBeenCalled();
            expect(mockRepo2.$disconnect).toHaveBeenCalled();
        });

        it("should disconnect even if function throws error", async () => {
            const mockRepo = {
                $disconnect: vi.fn().mockResolvedValue(undefined),
            };

            try {
                await withRepositories([mockRepo], async (_repo) => {
                    throw new Error("Test error");
                });
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
            }

            expect(mockRepo.$disconnect).toHaveBeenCalled();
        });

        it("should pass through function result", async () => {
            const mockRepo = {
                $disconnect: vi.fn().mockResolvedValue(undefined),
            };
            const expectedResult = { data: "test" };

            const result = await withRepositories(
                [mockRepo],
                async (_repo) => expectedResult
            );

            expect(result).toEqual(expectedResult);
        });

        it("should handle repositories with synchronous disconnect", async () => {
            const mockRepo = {
                $disconnect: vi.fn(),
            };

            await withRepositories([mockRepo], async (_repo) => {
                return "result";
            });

            expect(mockRepo.$disconnect).toHaveBeenCalled();
        });

        it("should handle multiple repositories", async () => {
            const repos = Array.from({ length: 5 }, () => ({
                $disconnect: vi.fn().mockResolvedValue(undefined),
            }));

            await withRepositories(repos, async (...repoArray) => {
                expect(repoArray).toHaveLength(5);
                return "result";
            });

            repos.forEach((repo) => {
                expect(repo.$disconnect).toHaveBeenCalled();
            });
        });

        it("should continue disconnecting even if one disconnect fails", async () => {
            const mockRepo1 = {
                $disconnect: vi
                    .fn()
                    .mockRejectedValue(new Error("Disconnect failed")),
            };
            const mockRepo2 = {
                $disconnect: vi.fn().mockResolvedValue(undefined),
            };

            await withRepositories(
                [mockRepo1, mockRepo2],
                async (_repo1, _repo2) => {
                    return "result";
                }
            );

            expect(mockRepo1.$disconnect).toHaveBeenCalled();
            expect(mockRepo2.$disconnect).toHaveBeenCalled();
        });
    });
});
