import { initTRPC, TRPCError } from '@trpc/server';
import { type Context } from './context';

const t = initTRPC.context<Context>().create({
    errorFormatter({ shape }) {
        return shape
    }
});

const isAuthed = t.middleware(({ next, ctx }) => {
    if (!ctx.auth.userId) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({
        ctx: {
            auth: ctx.auth,
        },
    })
})

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(isAuthed);