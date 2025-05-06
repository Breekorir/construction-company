const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "constructions_db"
});

db.connect(err => {
  if (err) {
    console.error("DB connection error:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Save to DB
  const sql = "INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "brigidkorir4@gmail.com",     // ✅ your Gmail
        pass: "mfno urmw rrka qydd"   // ✅ the 16-char app password
      }
    });

    const mailOptions = {
      from: "yourgmail@gmail.com",
      to: "violetlamai521@gmail.com", // ✅ site owner's email
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
