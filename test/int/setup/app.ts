import path from "path";
import autoload from "@fastify/autoload";
import Fastify, { FastifyInstance } from "fastify";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createTestApp = async (): Promise<FastifyInstance> => {
    const fastify = Fastify({
        logger: {
            level: "silent",
        },
        requestIdHeader: "x-request-id",
        requestIdLogLabel: "request-id",
    });

    try {
        const pluginsPath = path.join(__dirname, "../../..", "src", "plugins");
        const modulesPath = path.join(__dirname, "../../..", "src", "modules");

        // Register with timeout protection
        const registerWithTimeout = async (
            name: string,
            register: () => Promise<void>,
            timeoutMs = 15000
        ) => {
            return Promise.race([
                register(),
                new Promise<void>((_, reject) =>
                    setTimeout(
                        () =>
                            reject(
                                new Error(
                                    `${name} registration timeout after ${timeoutMs}ms`
                                )
                            ),
                        timeoutMs
                    )
                ),
            ]);
        };

        await registerWithTimeout("plugins", async () => {
            await fastify.register(autoload, {
                dir: pluginsPath,
                forceESM: true,
            });
        });

        await registerWithTimeout("modules", async () => {
            await fastify.register(autoload, {
                dir: modulesPath,
                dirNameRoutePrefix: false,
                forceESM: true,
                maxDepth: 1,
                matchFilter: /\/index\.(ts|js)$/,
            });
        });

        await registerWithTimeout("ready", async () => {
            await fastify.ready();
        });
    } catch (err) {
        await fastify.close().catch(() => {});
        throw err;
    }

    return fastify;
};
