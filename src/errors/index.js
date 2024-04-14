const BadRequestError = require('./BadRequest.error');
const UnauthorizedError = require('./Unauthorized.error');
const NotFoundError = require('./NotFound.error');
const ConflictError = require('./Conflict.error');

module.exports = { BadRequestError, ConflictError, NotFoundError, UnauthorizedError };