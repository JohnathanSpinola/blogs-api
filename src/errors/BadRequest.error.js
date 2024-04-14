const { CustomException } = require('../exceptions/CustomExceptions');

class BadRequestError extends CustomException {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = { BadRequestError };