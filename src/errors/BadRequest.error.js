const { CustomException } = require('../exceptions/CustomExceptions');

class BadRequestError extends CustomException {
  constructor(message) {
    super(400, message);
  }
}

module.exports = { BadRequestError };