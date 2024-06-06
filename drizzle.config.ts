import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: "sqlite",
    schema: "src/infrastructure/db/schemas/index.ts",
    out: "./drizzle",
    dbCredentials: {
        url: 'file:sqlite.db'
    }
});
