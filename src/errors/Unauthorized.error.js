const { CustomException } = require('../exceptions/CustomExceptions');

class UnauthorizedError extends CustomException {
  constructor(message) {
    super(message, 401);
  }
}

module.exports = { UnauthorizedError };