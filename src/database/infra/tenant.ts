import path from "path";
import { Client } from "pg";
import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export const createTenantDatabase = async (dbName: string) => {
    const MASTER_DATABASE_URL = process.env.MASTER_DATABASE_URL;

    if (!MASTER_DATABASE_URL) {
        throw Error("MASTER_DATABASE_URL is absent");
    }

    const DB_URL = MASTER_DATABASE_URL.replace(/\/[^/]*$/, "/");

    const client = new Client({
        connectionString: DB_URL,
    });

    await client.connect();

    await client.query(`CREATE DATABASE "${dbName}"`);

    await client.end();
};

export const dropTenantDatabase = async (dbName: string) => {
    const MASTER_DATABASE_URL = process.env.MASTER_DATABASE_URL;

    if (!MASTER_DATABASE_URL) {
        throw Error("MASTER_DATABASE_URL is absent");
    }

    const DB_URL = MASTER_DATABASE_URL.replace(/\/[^/]*$/, "/");

    const client = new Client({
        connectionString: DB_URL,
    });

    await client.connect();

    await client.query(`DROP DATABASE IF EXISTS "${dbName}"`);

    await client.end();
};

export const migrateTenantDatabase = async (teamId: string) => {
    const MASTER_DATABASE_URL = process.env.MASTER_DATABASE_URL;

    if (!MASTER_DATABASE_URL) {
        throw Error("MASTER_DATABASE_URL is absent");
    }

    const DB_URL = MASTER_DATABASE_URL.replace(/\/[^/]*$/, "/");

    const tenantConfigPath = path.resolve("src/database/prisma.config.team.ts");

    await execAsync(
        `npx prisma migrate deploy --config="${tenantConfigPath}"`,
        {
            env: {
                ...process.env,
                TEAM_DATABASE_URL: `${DB_URL}${teamId}`,
            },
        }
    );
};
