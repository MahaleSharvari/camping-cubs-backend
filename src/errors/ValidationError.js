const CustomError = require("./CustomError");

class ValidationError extends CustomError {
  constructor(errors) {
    const details = errors?.map((err) => {
      return {
        message: err.msg,
        field: err.param,
      };
    });
    super("Data Validation Failed", 400, details ? details : []);
  }
}

module.exports = ValidationError;
