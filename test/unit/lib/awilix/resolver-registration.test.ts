import { RESOLVER, Lifetime } from "awilix";
import { describe, expect, it, vi } from "vitest";
import { resolverOptionsRegister } from "@/lib/awilix/resolver-registration.js";
import type { AwilixContainer, Resolver } from "awilix";
import type { Cradle } from "@/types/di-container.type.js";

type RegisterFn = (fn: unknown, opts?: unknown) => Resolver<unknown>;

const makeStubFn = (name: string) => {
    const fn = () => ({});

    (fn as unknown as { [RESOLVER]: { name: string } })[RESOLVER] = { name };

    return fn;
};

const makeContainer = (hasRegistration: boolean) =>
    ({
        hasRegistration: vi.fn().mockReturnValue(hasRegistration),
    }) as unknown as AwilixContainer<Cradle>;

const getRegister = (di: AwilixContainer<Cradle>): RegisterFn =>
    resolverOptionsRegister(di) as unknown as RegisterFn;

describe("resolverOptionsRegister", () => {
    it("should return a registration function when called with a container", () => {
        const di = makeContainer(false);
        const register = getRegister(di);

        expect(typeof register).toBe("function");
    });

    it("should call hasRegistration with the resolver name", () => {
        const di = makeContainer(false);
        const register = getRegister(di);
        const fn = makeStubFn("userService");

        register(fn as never);

        expect(di.hasRegistration).toHaveBeenCalledWith("userService");
    });

    it("should return an awilix resolver when name is not already registered", () => {
        const di = makeContainer(false);
        const register = getRegister(di);
        const fn = makeStubFn("userService");

        const result = register(fn as never);

        expect(result).toBeDefined();
    });

    it("should throw when the name is already registered", () => {
        const di = makeContainer(true);
        const register = getRegister(di);
        const fn = makeStubFn("userService");

        expect(() => register(fn as never)).toThrow(
            'Module "userService" is already registered in the container.'
        );
    });

    it("should include the duplicate name in the error message", () => {
        const di = makeContainer(true);
        const register = getRegister(di);
        const fn = makeStubFn("chatService");

        expect(() => register(fn as never)).toThrow("chatService");
    });

    it("should pass additional options through to asFunction", () => {
        const di = makeContainer(false);
        const register = getRegister(di);
        const fn = makeStubFn("userService");

        const result = register(fn as never, { lifetime: Lifetime.SINGLETON });

        expect((result as unknown as { lifetime: string }).lifetime).toBe(
            Lifetime.SINGLETON
        );
    });

    it("should not throw for distinct resolver names", () => {
        const di = makeContainer(false);
        const register = getRegister(di);
        const fn1 = makeStubFn("serviceA");
        const fn2 = makeStubFn("serviceB");

        expect(() => register(fn1 as never)).not.toThrow();
        expect(() => register(fn2 as never)).not.toThrow();
    });
});
