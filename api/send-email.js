import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { subject, html } = req.body;

  try {
    // Configure transporter (example: Gmail, use env variables in Vercel dashboard)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // set in Vercel env
        pass: process.env.EMAIL_PASS, // set in Vercel env
      },
    });

    await transporter.sendMail({
      from: `"Neuberg Website" <${process.env.EMAIL_USER}>`,
      to: "recipient@example.com", // replace with your email
      subject,
      html,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}