require("dotenv").config();
const router = require("express").Router();
const transporter = require("../configs/mail.config");
const { generateOTP, extractNameFromEmail } = require("../utils/common.utils");
const User = require("../schema/user.schema");

router.post("/sendOtp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send({ message: "Invalid email" });

  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).send({ message: "Email does not exist" });

  const otp = generateOTP();
  const mailOptions = {
    from: process.env.MailId,
    to: email,
    subject: "Reset Your Camping Cubs Account Password",
    html: `<html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h4><b><i>Dear ${extractNameFromEmail(email)},</i></b></h4>
      <p>We received a request to reset your password for your Camping Cubs account associated with ${email} email address. <i>If you did not request this password reset, please ignore this email</i>❗️</p>
      <p>To reset your password, here is your OTP below and follow the instructions:</p>
      <h4><b>OTP: ${otp} 🔑</b></h4>
      <p>This OTP is valid for next 1 Minute. If you do not reset your password within this time frame, you will need to request a new OTP. ⏰</p>
      <p>If you have any questions or need further assistance, please do not hesitate to contact our support team at ${
        process.env.MailId
      } 📧.</p>
      <p>Thank you for choosing Camping Cubs. 😊</p>
      <b><p><i>Best regards,</i></p></b>
      <b><i>Team Camping Cubs 🏕️</i></b>
    </body>
  </html>
  `,
  };

  try {
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Failed to send OTP" });
      }
      await User.findByIdAndUpdate(
        { _id: user._id },
        {
          $set: {
            otpDetails: { otp: otp, otpExpiration: Date.now() + 60 * 1000 },
          },
        }
      );
      return res.status(200).send({ message: "OTP sent successfully" });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.post("/checkOtp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp)
      return res.status(400).send({ message: "Invalid email or otp" });

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send({ message: "Email does not exist" });

    if (
      !user.otpDetails ||
      user.otpDetails.otp !== otp ||
      user.otpDetails.otpExpiration < Date.now()
    ) {
      return res.status(400).send({ message: "Invalid OTP" });
    }

    await User.findByIdAndUpdate(
      { _id: user._id },
      { $unset: { otpDetails: 1 } },
      { new: true }
    );

    res.status(200).send({ message: "OTP Verified Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.post("/resetpassword", async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!password || !email)
      return res.status(400).send({ message: "Invalid email or password" });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: "user not found" });
    user.password = password;
    await user.save();

    res.status(200).send({ message: "Password Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
