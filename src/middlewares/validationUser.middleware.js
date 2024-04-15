const { BadRequestError } = require('../errors/BadRequest.error');
const { ConflictError } = require('../errors/Conflict.error');
const { schemaUser, schemaLogin } = require('../schemas/schemasUser');
const { UserService } = require('../services');
const { validatePassword } = require('../utils/validations');

const validationLogin = async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = schemaLogin.validate({ email, password });
  
  if (error) throw new BadRequestError(error.message);
  
  const user = await UserService.getUser(email);
  const passwordInvalid = validatePassword(user, password);

  if (passwordInvalid) throw new BadRequestError('Invalid fields');

  next();
};

const validationUser = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = schemaUser.validate({ displayName, email, password });

  if (error) throw new BadRequestError(error.message);

  const user = await UserService.getUser(email);

  if (user) throw new ConflictError('User already registered');

  next();
};

module.exports = { validationLogin, validationUser };