const CustomError = require("./CustomError");

class NotFoundError extends CustomError {
  constructor(message) {
    super(message || "Not Found", 404);
  }
}

module.exports = NotFoundError;
