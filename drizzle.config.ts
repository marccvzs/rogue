import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './db/schema.ts',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
})