import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { baseProcedure } from "~/server/trpc/main";

export const attemptLogin = baseProcedure
  .input(
    z.object({
      username: z.string().min(1, "Username is required"),
      password: z.string().min(1, "Password is required"),
    })
  )
  .mutation(async ({ input }) => {
    // This is a placeholder that always fails as requested
    // Simulate some processing time to make it feel real
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Incorrect user or password",
    });
  });
