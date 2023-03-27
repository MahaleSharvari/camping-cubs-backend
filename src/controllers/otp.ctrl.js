require("dotenv").config();
const router = require("express").Router();
const transporter = require("../configs/mail.config");
const { generateOTP, extractNameFromEmail } = require("../utils/common.utils");
const User = require("../schema/user.schema");
const Campground = require("../schema/campground.schema");

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

router.post("/enquiry", async (req, res) => {
  const { email, campId } = req.body;
  if (!email || !campId)
    return res.status(400).send({ message: "email and campId required" });
  const camp = await (
    await Campground.findById({ _id: campId })
  ).populate({
    path: "ratings.userId",
    select: "full_name",
  });

  if (!camp) res.status(400).send({ message: "Invalid CampId" });

  const mailOptions = {
    from: process.env.MailId,
    to: email,
    subject: "Escape to Nature - Your Dream Campground Awaits",
    html: `<html>
    <head>
      <style>
        /* Add styles for the email content */
        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 0;
        }
        p {
          font-size: 16px;
          margin-top: 0;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        li {
          font-size: 16px;
          margin-top: 8px;
        }
        .section-heading {
          font-size: 20px;
          font-weight: bold;
          margin-top: 24px;
          margin-bottom: 8px;
        }
        .section-content {
          margin-left: 16px;
        }
      </style>
    </head>
    <body>
      <h1>${
        camp.name
      } &#127969;</h1> <!-- Add a tent emoji for visual interest -->
      <ul>
        ${camp.images
          .map((image) => `<li><img src="${image}" alt="${name}"></li>`)
          .join("")}
      </ul>
      <p>Price: $${camp.price.toFixed(
        2
      )} &#x1F4B5;</p> <!-- Add a money bag emoji -->
      <p>Description: ${camp.description}</p>
      <div class="section-heading">&#x2B50; Quality</div> <!-- Add a star emoji for the "Quality" section -->
      <div class="section-content">
        <p>Overall Rating: ${camp.overallRating.toFixed(
          1
        )} &#11088;</p> <!-- Add a star emoji for the "Overall Rating" section -->
        <p>Visit Count: ${
          camp.visitCount
        } &#x1F30E;</p> <!-- Add a globe with meridians emoji for the "Visit Count" section -->
        <p>Recommended: ${
          camp.recommendation ? "Yes &#x2714;" : "No &#x2716;"
        }</p> <!-- Add a checkmark and an X emoji for the "Recommended" section -->
        <ul>
          ${camp.highlight.map((highlight) => `<li>${highlight}</li>`).join("")}
        </ul>
        <div class="section-heading">&#x1F4AC; Ratings</div> <!-- Add a notebook with decorative cover emoji for the "Ratings" section -->
        <div class="section-content">
          ${
            camp.ratings.length > 0
              ? camp.ratings
                  .map(
                    (rating) => `
              <div>
                <p>User ID: ${rating.userId.full_name}</p>
                <p>Rating: ${rating.rate} &#11088;</p> <!-- Add a star emoji for the "Rating" section -->
                <p>Review: ${rating.review}</p>
              </div>
            `
                  )
                  .join("")
              : "<p>No ratings yet.</p>"
          }
        </div>
      </div>
    </body>
  </html>  
  `,
  };

  try {
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Failed to send Camp Details" });
      }
      return res.status(200).send({ message: "Details Send Successfully" });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
