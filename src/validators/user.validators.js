const { body } = require("express-validator");

const validateUserData = [
  // Check for user data
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
  body("first_name")
    .isLength({ min: 3 })
    .withMessage("First Name must be at least 3 characters long"),
  body("last_name")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
];

module.exports = { validateUserData };
