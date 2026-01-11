import path from "path";
import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export const migrateTenantDatabase = async (databaseUrl: string) => {
    const tenantConfigPath = path.resolve("src/database/prisma.config.user.ts");

    await execAsync(
        `npx prisma migrate deploy --config="${tenantConfigPath}"`,
        {
            env: {
                ...process.env,
                USER_DATABASE_URL: databaseUrl,
            },
        }
    );
};
