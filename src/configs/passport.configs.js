require("dotenv").config();
const passport = require("passport");
const { v4: uuidV4 } = require("uuid");
const User = require("../schema/user.schema");

const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: process.env.callbackURL,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ email: profile.email }).lean().exec();

        if (!user) {
          user = await User.create({
            email: profile.email,
            full_name: profile._json.name,
            password: uuidV4(),
          });
        }
        return done(null, user);
      } catch (err) {
        return err.message;
      }
    }
  )
);

module.exports = passport;
