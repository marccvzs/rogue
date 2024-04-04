import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from '../../db/schema';

import z from 'zod';

import { publicProcedure, router } from './trpc';

const connectionString = process.env.DATABASE_URL as string;

const client = postgres(connectionString);
const db = drizzle(client);

export const appRouter = router({
    getUsers: publicProcedure.query(async () => {
        return await db.select().from(users);
    }),
    addUser: publicProcedure.input(z.string()).mutation(async (opts) => {
        await db.insert(users).values({ fullName: opts.input as string, phone: '5555555555' as string});
        return true;
    })
});

export type AppRouter = typeof appRouter;