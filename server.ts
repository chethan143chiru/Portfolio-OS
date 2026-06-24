import express from "express";
import path from "path";
import dns from "dns";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests
  app.use(express.json());

  // API Route for secure Contact Form transmission
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        status: "error", 
        message: "Missing required payload parameters: name, email, or message." 
      });
    }

    const senderEmail = process.env.SENDER_EMAIL || "cc9152655@gmail.com";
    const appPassword = process.env.SENDER_APP_PASSWORD;

    // Output server diagnostic log
    console.log(`[SMTP-RELAY]: Incoming packet from identity "${name}" <${email}>`);

    if (!appPassword) {
      console.warn("[SMTP-RELAY] SENDER_APP_PASSWORD not found in environment. Running in SIMULATED Mode.");
      return res.json({
        status: "simulated",
        message: "Message processed successfully (DEMO MODE). Configure SENDER_APP_PASSWORD in environment variables to deliver live inbox dispatches.",
        log: [
          "Verifying direct loopback address...",
          "Warning: Real email transmission requires SENDER_APP_PASSWORD.",
          "Demonstration simulation resolved successfully!"
        ]
      });
    }

    try {
      // Configure credentials for Gmail SMTP dispatch
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: senderEmail,
          pass: appPassword
        }
      });

      // 1. Send the inbound notification containing user's submission details to your mailbox
      const alertMailOptions = {
        from: `"${name} (via Portfolio)" <${senderEmail}>`,
        to: senderEmail,
        replyTo: email,
        subject: `[Portfolio Link] New cryptographic dispatch from ${name}`,
        html: `
          <div style="font-family: monospace; background-color: #0b0b0e; color: #f4eafe; padding: 24px; border-radius: 12px; border: 1px solid #f97316;">
            <h2 style="color: #f97316; margin-top: 0;">INCOMING SYSTEMS DISPATCH</h2>
            <hr style="border-color: #27272a; margin-bottom: 20px;" />
            <p style="margin: 8px 0;"><strong>VISITOR NAME:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>RETURN LINK EMAIL:</strong> <a href="mailto:${email}" style="color: #a855f7; text-decoration: none;">${email}</a></p>
            <div style="background-color: #16161e; padding: 16px; border-radius: 8px; border: 1px solid #1f1f2e; margin-top: 16px;">
              <p style="margin-top: 0; color: #a855f7; font-weight: bold;">ENCODING PAYLOAD CONTENT:</p>
              <p style="white-space: pre-wrap; margin-bottom: 0; line-height: 1.6; color: #eae5ef;">${message}</p>
            </div>
            <p style="font-size: 10px; color: #71717a; margin-top: 24px;">Crypto SMTP terminal relay authenticated successfully via loopback socket.</p>
          </div>
        `,
        text: `INCOMING SYSTEMS DISPATCH\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via secure SMTP relay.`
      };

      // 2. Automatically send an immediate Welcome & Thanks response packet to the user
      const autoReplyOptions = {
        from: `"Chethan R" <${senderEmail}>`,
        to: email,
        subject: `Transmission Secure: Thank you for reaching out, ${name}!`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #09090b; color: #f4f4f5; padding: 32px 24px; border-radius: 16px; max-width: 580px; margin: 0 auto; border: 1px solid #27272a;">
            <div style="text-align: center; margin-bottom: 24px;">
              <span style="font-size: 24px; font-weight: 800; color: #f97316; letter-spacing: 2px;">CHETHAN R</span>
              <p style="font-size: 10px; color: #71717a; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px;">System Architect & Machine Learning Engineer</p>
            </div>
            
            <p style="font-size: 15px; line-height: 1.6; color: #e4e4e7;">Dear ${name},</p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #d4d4d8;">
              Thank you for visiting my portfolio platform and sending a message! This is an automated diagnostic confirmation validating that your transmission was successfully received.
            </p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #d4d4d8;">
              I have logged your packet on my high-priority portfolio queue. I will review your message containing project, engagement, or meeting specifics, and reach back to you directly within the standard workcycle.
            </p>

            <div style="background-color: #18181b; padding: 16px; border-radius: 10px; border: 1px solid #27272a; margin: 24px 0;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #a855f7; font-weight: bold; display: block; margin-bottom: 8px;">Original Transmission Frame</span>
              <p style="font-size: 13px; color: #a1a1aa; font-style: italic; margin: 0;">"${message.length > 120 ? message.substring(0, 120) + "..." : message}"</p>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #d4d4d8;">
              If you wish to schedule immediate calls or share complex specifications, please feel free to reach out via +91 9110243452 or wire a direct mail.
            </p>

            <hr style="border: 0; border-top: 1px solid #27272a; margin: 24px 0;" />
            
            <table style="width: 100%;">
              <tr>
                <td>
                  <p style="font-size: 13px; font-weight: bold; color: #ffffff; margin: 0;">Chethan R</p>
                  <p style="font-size: 11px; color: #71717a; margin: 2px 0 0 0;">Machine Learning Foundations & Cloud Developer</p>
                </td>
                <td style="text-align: right; vertical-align: bottom;">
                  <a href="mailto:${senderEmail}" style="font-size: 12px; color: #f97316; text-decoration: none;">cc9152655@gmail.com</a>
                </td>
              </tr>
            </table>
          </div>
        `,
        text: `Dear ${name},\n\nThank you for reaching out! Your message was successfully received.\nI appreciate you visiting my portfolio website and taking the time to send me a packet. I will review the message and follow up with you as soon as possible.\n\nBest Regards,\nChethan R\ncc9152655@gmail.com`
      };

      // Execute both sends in parallel to prevent delaying the user
      await Promise.all([
        transporter.sendMail(alertMailOptions),
        transporter.sendMail(autoReplyOptions)
      ]);

      console.log(`[SMTP-RELAY] Handshake resolved! Real emails transmitted to and from ${senderEmail} successfully.`);
      
      return res.json({ 
        status: "success", 
        message: "Transmission verified. Standard envelopes dispatched!" 
      });

    } catch (error: any) {
      console.error("[SMTP-RELAY] Transmit error encountered:", error);
      return res.status(500).json({ 
        status: "error", 
        message: "Secure SMTP handshake failure.", 
        details: error.message 
      });
    }
  });

  // Vite middleware for assets in development or build files serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[PORT 3000] Live server active on port ${PORT}`);
  });
}

startServer();
