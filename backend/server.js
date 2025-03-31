import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// API routes
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Please provide name, email, and message" });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: subject || `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `
        <h3>New Message from Your Website</h3>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Email server is running!" });
});

// For production: serve static files
if (process.env.NODE_ENV === "production") {
  // Serve frontend build files
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
  // Handle React routing, return all requests to React app
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// Start server
app.listen(port, () => {
  console.log("Server started at http://localhost:"+ port);
});