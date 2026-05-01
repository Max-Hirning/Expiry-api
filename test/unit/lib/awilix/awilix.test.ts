import { RESOLVER, Lifetime } from "awilix";
import { describe, expect, it } from "vitest";
import { addDIResolverName } from "@/lib/awilix/awilix.js";

type WithResolver = { [RESOLVER]: { name: string; lifetime?: string } };

const createStubService = () => {
    return function stubService() {
        return {};
    };
};

describe("addDIResolverName", () => {
    it("should attach the RESOLVER symbol with the given name", () => {
        const fn = createStubService();

        addDIResolverName(fn as never, "log");

        const resolver = (fn as unknown as WithResolver)[RESOLVER];

        expect(resolver).toBeDefined();
        expect(resolver.name).toBe("log");
    });

    it("should return the same function reference", () => {
        const fn = createStubService();

        const result = addDIResolverName(fn as never, "log");

        expect(result).toBe(fn);
    });

    it("should not set lifetime when not provided", () => {
        const fn = createStubService();

        addDIResolverName(fn as never, "log");

        const resolver = (fn as unknown as WithResolver)[RESOLVER];

        expect(resolver.lifetime).toBeUndefined();
    });

    it("should set lifetime when provided", () => {
        const fn = createStubService();

        addDIResolverName(fn as never, "log", Lifetime.SINGLETON);

        const resolver = (fn as unknown as WithResolver)[RESOLVER];

        expect(resolver.lifetime).toBe(Lifetime.SINGLETON);
    });

    it("should support TRANSIENT lifetime", () => {
        const fn = createStubService();

        addDIResolverName(fn as never, "log", Lifetime.TRANSIENT);

        const resolver = (fn as unknown as WithResolver)[RESOLVER];

        expect(resolver.lifetime).toBe(Lifetime.TRANSIENT);
    });

    it("should support SCOPED lifetime", () => {
        const fn = createStubService();

        addDIResolverName(fn as never, "log", Lifetime.SCOPED);

        const resolver = (fn as unknown as WithResolver)[RESOLVER];

        expect(resolver.lifetime).toBe(Lifetime.SCOPED);
    });

    it("should overwrite existing RESOLVER when called multiple times", () => {
        const fn = createStubService();

        addDIResolverName(fn as never, "log");
        addDIResolverName(fn as never, "config");

        const resolver = (fn as unknown as WithResolver)[RESOLVER];

        expect(resolver.name).toBe("config");
    });

    it("should preserve other function properties", () => {
        const fn = createStubService() as ReturnType<
            typeof createStubService
        > & {
            customProp: string;
        };
        fn.customProp = "value";

        addDIResolverName(fn as never, "log");

        expect(fn.customProp).toBe("value");
    });
});
