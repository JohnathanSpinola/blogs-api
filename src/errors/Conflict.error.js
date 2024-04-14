const { CustomException } = require('../exceptions/CustomExceptions');

class ConflictError extends CustomException {
  constructor(message) {
    super(message, 409);
  }
}

module.exports = { ConflictError };