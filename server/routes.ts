import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // In a real implementation, this would:
      // 1. Send an email using a service like Nodemailer, SendGrid, etc.
      // 2. Store the contact form submission in a database
      // 3. Send notifications to the site owner
      
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      });
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.status(200).json({
        success: true,
        message: "Your message has been sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
