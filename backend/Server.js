import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => {
        console.error("❌ MongoDB Error:", err.message);
        process.exit(1);
    });

app.get("/", (req, res) => {
    res.send("Backend OK");
});

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res
                .status(400)
                .json({ success: false, msg: "All fields required" });
        }

        await Contact.create({ name, email, message });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            subject: "New Contact Message",
            html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        res.json({
            success: true,
            msg: "Message sent & saved successfully",
        });
    } catch (error) {
        console.error("❌ API Error:", error.message);
        res.status(500).json({ success: false, msg: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
