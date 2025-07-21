import {
  createCallerFactory,
  createTRPCRouter,
  baseProcedure,
} from "~/server/trpc/main";
import { submitContactForm } from "~/server/trpc/procedures/submitContactForm";
import { attemptLogin } from "~/server/trpc/procedures/attemptLogin";

export const appRouter = createTRPCRouter({
  submitContactForm,
  attemptLogin,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
