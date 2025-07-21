import { z } from "zod";
import { baseProcedure } from "~/server/trpc/main";

export const submitContactForm = baseProcedure
  .input(
    z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Please enter a valid email address"),
      message: z.string().min(10, "Message must be at least 10 characters long"),
    })
  )
  .mutation(async ({ input }) => {
    // This is a placeholder - in a real app, you might save to database or send email
    // For now, we just simulate processing and return success
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing time
    
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  });
