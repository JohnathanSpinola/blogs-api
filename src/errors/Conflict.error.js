const { CustomException } = require('../exceptions/CustomExceptions');

class ConflictError extends CustomException {
  constructor(message) {
    super(409, message);
  }
}

module.exports = { ConflictError };