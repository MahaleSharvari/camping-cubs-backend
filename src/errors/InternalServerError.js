const CustomError = require("./CustomError");

class InternalServerError extends CustomError {
  constructor(message, details) {
    super(message || "Internal Server Error", 500, details);
  }
}

module.exports = InternalServerError;
