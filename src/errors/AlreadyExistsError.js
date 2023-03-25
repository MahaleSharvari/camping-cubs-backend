const CustomError = require("./CustomError");

class AlreadyExistsError extends CustomError {
  constructor(message) {
    super(message || "Field Already Exists", 400);
  }
}

module.exports = AlreadyExistsError;
