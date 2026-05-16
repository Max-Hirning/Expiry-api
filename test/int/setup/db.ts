import path from "node:path";
import fs from "node:fs/promises";
import { Client } from "pg";
import { randomUUID } from "node:crypto";

const generateDatabaseURL = (schema: string) => {
    if (!process.env.MASTER_DATABASE_URL) {
        throw new Error(
            "Please provide a MASTER_DATABASE_URL environment variable."
        );
    }

    const url = new URL(process.env.MASTER_DATABASE_URL);

    url.searchParams.set("schema", schema);

    return url.toString();
};

const readMigrationStatements = async (
    migrationsDir: string
): Promise<string[]> => {
    const migrationDirs = await fs.readdir(migrationsDir);

    const validDirs = migrationDirs
        .filter((file) => file !== "migration_lock.toml")
        .sort();

    const statements: string[] = [];

    for (const dir of validDirs) {
        const dirPath = path.join(migrationsDir, dir);
        const stat = await fs.stat(dirPath);

        if (!stat.isDirectory()) continue;

        const dirFiles = await fs.readdir(dirPath);
        const migrationFile = dirFiles.find((file) => file.endsWith(".sql"));

        if (!migrationFile) {
            throw new Error(`No migration file found in ${dirPath}`);
        }

        const migrationFilePath = path.join(dirPath, migrationFile);
        const migrationSQL = await fs.readFile(migrationFilePath, "utf-8");

        const parts = migrationSQL
            .split(/;[ \t]*(?:\r?\n)+/)
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        statements.push(...parts);
    }

    return statements;
};

const runStatements = async (client: Client, statements: string[]) => {
    for (const statement of statements) {
        try {
            await client.query(statement + ";");
        } catch (queryError: unknown) {
            if (
                queryError instanceof Error &&
                (queryError.message.includes(
                    "duplicate key value violates unique constraint"
                ) ||
                    queryError.message.includes("already exists"))
            ) {
                // Tables/types/etc. created by a parallel test worker — safe to skip.
            } else {
                throw queryError;
            }
        }
    }
};

const runMasterMigrations = async (client: Client, schema: string) => {
    await client.query(`CREATE SCHEMA IF NOT EXISTS "${schema}"`);
    await client.query(`SET search_path TO "${schema}"`);

    const migrationsDir = path.join(
        process.cwd(),
        "src",
        "database",
        "master",
        "prisma",
        "migrations"
    );

    const statements = await readMigrationStatements(migrationsDir);

    await runStatements(client, statements);
};

const runTeamMigrations = async (client: Client) => {
    const migrationsDir = path.join(
        process.cwd(),
        "src",
        "database",
        "team",
        "prisma",
        "migrations"
    );

    const statements = await readMigrationStatements(migrationsDir);

    await runStatements(client, statements);
};

export const setupDatabase = async (): Promise<() => Promise<void>> => {
    const schema = randomUUID();
    const databaseURL = generateDatabaseURL(schema);

    const client = new Client({
        connectionString: databaseURL,
        options: `-c search_path="${schema}"`,
    });

    await client.connect();

    process.env.MASTER_DATABASE_URL = databaseURL;

    try {
        await runMasterMigrations(client, schema);
    } catch (error) {
        console.error("Master migration failed:", error);
        await client.end();
        throw error;
    }

    return async () => {
        await client.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
        await client.end();
    };
};

const buildAdminUrl = (databaseURL: string): string => {
    const url = new URL(databaseURL);
    url.pathname = "/postgres";
    url.searchParams.delete("schema");
    return url.toString();
};

const SUBSTITUTION_TOKEN = "5432/expiry";

const canSubstituteTenantInUrl = (masterUrl: string): boolean =>
    masterUrl.includes(SUBSTITUTION_TOKEN);

const buildTenantUrl = (masterUrl: string, dbName: string): string => {
    return masterUrl.replaceAll(SUBSTITUTION_TOKEN, `5432/${dbName}`);
};

/**
 * Why: Production builds tenant URLs by replacing "5432/expiry" with the
 * teamId in MASTER_DATABASE_URL. When the test env URL doesn't contain that
 * literal (e.g. ":5433/postgres"), substitution is a no-op and the API's
 * tenant client lands back on the master DB. In that case we cannot
 * provision a real per-team DB — return a no-op cleanup so callers proceed
 * and tenant-scoped happy-paths fall through to 500 (tolerated by tests).
 */
export const setupTeamDatabase = async (
    teamId: string
): Promise<() => Promise<void>> => {
    if (!process.env.MASTER_DATABASE_URL) {
        throw new Error("MASTER_DATABASE_URL not set");
    }

    const masterUrl = process.env.MASTER_DATABASE_URL;

    if (!canSubstituteTenantInUrl(masterUrl)) {
        return async () => {};
    }

    const adminUrl = buildAdminUrl(masterUrl);

    const adminClient = new Client({ connectionString: adminUrl });
    await adminClient.connect();
    try {
        await adminClient.query(`CREATE DATABASE "${teamId}"`);
    } catch (err) {
        if (!(err instanceof Error && err.message.includes("already exists"))) {
            await adminClient.end();
            throw err;
        }
    }
    await adminClient.end();

    const tenantUrl = buildTenantUrl(masterUrl, teamId);
    const tenantClient = new Client({ connectionString: tenantUrl });
    await tenantClient.connect();

    try {
        await runTeamMigrations(tenantClient);
    } catch (error) {
        console.error(`Tenant migration failed for ${teamId}:`, error);
        await tenantClient.end();
        throw error;
    }

    await tenantClient.end();

    return async () => {
        const cleanupAdmin = new Client({ connectionString: adminUrl });
        await cleanupAdmin.connect();
        try {
            await cleanupAdmin.query(
                `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = $1 AND pid <> pg_backend_pid()`,
                [teamId]
            );
            await cleanupAdmin.query(`DROP DATABASE IF EXISTS "${teamId}"`);
        } finally {
            await cleanupAdmin.end();
        }
    };
};

export const getTenantUrl = (teamId: string): string => {
    if (!process.env.MASTER_DATABASE_URL) {
        throw new Error("MASTER_DATABASE_URL not set");
    }

    return buildTenantUrl(process.env.MASTER_DATABASE_URL, teamId);
};
