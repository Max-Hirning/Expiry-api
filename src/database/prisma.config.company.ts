import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "company/prisma/schema.prisma",
    migrations: {
        path: "company/prisma/migrations",
    },
    datasource: {
        url: env("COMPANY_DATABASE_URL"),
    },
});
