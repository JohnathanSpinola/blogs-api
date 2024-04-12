const { httpStatus } = require('../utils/httpStatus');

class CustomException extends Error {
  constructor(name, message) {
    super(message);
    this.status = httpStatus[name] || 500;
    this.message = message;
  }
}

module.exports = { CustomException };