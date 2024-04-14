const { CustomException } = require('../exceptions/CustomExceptions');

class NotFoundError extends CustomException {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = { NotFoundError };