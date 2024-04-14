const { CustomException } = require('../exceptions/CustomExceptions');
const { schemaUser, schemaLogin } = require('../schemas/schemasUser');
const { UserService, LoginService } = require('../services');
const { validatePassword } = require('../utils/validations');

const validationLogin = async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = schemaLogin.validate({ email, password });
  
  if (error) throw new CustomException('badRequest', error.message);
  
  const user = await LoginService.getUser(email);
  const passwordInvalid = validatePassword(user, password);

  if (passwordInvalid) throw new CustomException('badRequest', 'Invalid fields');

  next();
};

const validationUser = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = schemaUser.validate({ displayName, email, password });

  if (error) throw new CustomException('badRequest', error.message);

  const user = await UserService.getUser(email);

  if (user) throw new CustomException('conflict', 'User already registered');

  next();
};

module.exports = { validationLogin, validationUser };