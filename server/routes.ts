import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

async function sendEmail(data: { name: string; email: string; message: string }) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log("SendGrid API key not found. Contact form submission:", data);
    return false;
  }

  try {
    const msg = {
      to: 'sohaib.cs@outlook.com',
      from: 'sohaib.cs@outlook.com', // Use your verified sender email
      subject: `Portfolio Contact: ${data.name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Send email using SendGrid
      const emailSent = await sendEmail(validatedData);
      
      if (!emailSent && process.env.SENDGRID_API_KEY) {
        throw new Error("Failed to send email");
      }
      
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
