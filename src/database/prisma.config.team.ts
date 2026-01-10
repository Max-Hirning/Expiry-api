import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "team/prisma/schema.prisma",
    migrations: {
        path: "team/prisma/migrations",
    },
    datasource: {
        url: env("TEAM_DATABASE_URL"),
    },
});
