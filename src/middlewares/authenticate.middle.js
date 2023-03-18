require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return reject(err);
      }
      resolve(user);
    });
  });
};

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization?.startsWith("Bearer")) {
    return res
      .status(400)
      .send({ message: "Authorization token not provided or invalid" });
  }

  let user;
  try {
    user = await verifyToken(req.headers.authorization.split(" ")[1]);
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Authorization token not provided or invalid" });
  }

  req.user = user.user;

  return next();
};

const authenticateAdmin = async (req, res, next) => {
  if (!req.headers.authorization?.startsWith("Bearer")) {
    return res
      .status(400)
      .send({ message: "Authorization token not provided or invalid" });
  }

  let user;
  try {
    user = await verifyToken(req.headers.authorization.split(" ")[1]);
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Authorization token not provided or invalid" });
  }

  if (!user.user.admin) {
    return res.status(400).send({ message: "Only Admin Allowed" });
  }
  req.user = user.user;

  return next();
};

module.exports = { authenticate, authenticateAdmin };
