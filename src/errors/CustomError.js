class CustomError extends Error {
  constructor(message, statusCode, details) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.details = details || [];
  }
}

module.exports = CustomError;
