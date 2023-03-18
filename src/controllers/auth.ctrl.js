require("dotenv").config();
const User = require("../schema/user.schema");
const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      return res.status(400).send({ message: "Please try another mail" });
    }

    user = await User.create(req.body);
    console.log(user);
    const token = newToken(user);

    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send({ message: "Incorrect email or password" });
    }

    const match = user.comparePassword(req.body.password);

    if (!match) {
      return res.status(400).send({ message: "Incorrect email or password" });
    }

    return res.status(200).send({ user, token: newToken(user) });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { register, login, newToken };
