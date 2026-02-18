// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/contactDB");

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// }, { timestamps: true });

// const Contact = mongoose.model("Contact", contactSchema);

// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();
//     res.status(200).json({ message: "Message sent successfully!" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to send message" });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
