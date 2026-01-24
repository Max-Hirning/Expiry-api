import { execSync } from "child_process";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient as MasterPrisma } from "@/database/master/generated/client.js";

async function deployTenants() {
    const MASTER_DATABASE_URL = process.env.MASTER_DATABASE_URL;

    if (!MASTER_DATABASE_URL) {
        throw Error("MASTER_DATABASE_URL is absent");
    }

    const adapter = new PrismaPg({
        connectionString: MASTER_DATABASE_URL,
    });

    const masterPrisma = new MasterPrisma({ adapter });

    await masterPrisma.$connect();

    const DB_URL = MASTER_DATABASE_URL.replace(/\/[^/]*$/, "/");

    const teams = await masterPrisma.team.findMany({
        select: { id: true },
    });

    for (const team of teams) {
        console.log(`🚀 Deploying tenant DB: ${team.id}`);

        execSync(
            `TEAM_DATABASE_URL=${DB_URL}${team.id} prisma migrate deploy --schema src/database/prisma.config.team.ts`,
            { stdio: "inherit" }
        );
    }
}

deployTenants()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
