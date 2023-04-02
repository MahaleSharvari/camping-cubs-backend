const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const { newToken } = require("./src/controllers/auth.ctrl");
const Connect = require("./src/configs/db.config");
const passport = require("./src/configs/passport.configs");
const route = require("./src/router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// After you declare "app"
app.use("/api/v1", route);

app.get("/", async (req, res) => {
  try {
    return res.send({message:"It works"}).status(200);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Google Auth
app.use(
  session({
    secret: "melody hensley is my spirit animal",
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    const token = newToken(req.user);
    return res.status(200).send({ user: req.user, token });
  }
);

const Port = process.env.Port;
app.listen(Port, async () => {
  try {
    await Connect();
    console.log(`listning to port ${Port}`);
  } catch (err) {
    console.log(err);
  }
});

