const { CustomException } = require('../exceptions/CustomExceptions');

class NotFoundError extends CustomException {
  constructor(message) {
    super(404, message);
  }
}

module.exports = { NotFoundError };