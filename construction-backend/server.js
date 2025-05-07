const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "construction_db"
});


// Connect to DB
db.connect(err => {
  if (err) {
    console.error("DB connection error:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Contact form API
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    // Send email notification/ Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "brigidkorir4@gmail.com",     // ✅ your Gmail
        pass: "mfno urmw rrka qydd"   // ✅ the 16-char app password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "laxiconebuilders@gmail.com", // Receiver
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Email error:", err);
        return res.status(500).json({ message: "Message saved, but failed to send email" });
      } else {
        console.log("Email sent:", info.response);
        res.json({ message: "Message saved and email sent!" });
      }
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
