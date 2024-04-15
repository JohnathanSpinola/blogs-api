const { CustomException } = require('../exceptions/CustomExceptions');

class UnauthorizedError extends CustomException {
  constructor(message) {
    super(401, message);
  }
}

module.exports = { UnauthorizedError };