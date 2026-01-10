import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "master/prisma/schema.prisma",
    migrations: {
        path: "master/prisma/migrations",
    },
    datasource: {
        url: env("MASTER_DATABASE_URL"),
    },
});
