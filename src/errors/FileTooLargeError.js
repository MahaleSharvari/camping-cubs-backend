const CustomError = require("./CustomError");

class FileTooLargeError extends CustomError {
  constructor(maxSizeAllowedInMB) {
    super(`File too Large, Max size allowed is ${maxSizeAllowedInMB}MB`, 413);
  }
}

module.exports = FileTooLargeError;
