const CustomError = require("./CustomError");

class UnauthorizedError extends CustomError {
  constructor(message) {
    console.log("UnauthorizedError", message);
    super(message || "Unauthorized", 401);
  }
}

module.exports = UnauthorizedError;
