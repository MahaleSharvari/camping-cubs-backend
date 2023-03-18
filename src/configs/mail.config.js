require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: process.env.Port,
  auth: {
    user: process.env.MailId,
    pass: process.env.MailPassword,
  },
});

module.exports = transporter;
