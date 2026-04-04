import "dotenv/config";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load test-specific environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "../../../.env.test");
dotenv.config({ path: envPath });

// Test setup is now handled per-test-file in beforeAll/afterAll hooks
// Each test file sets up its own database schema to avoid timeout issues
