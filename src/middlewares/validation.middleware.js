const { CustomException } = require('../exceptions/CustomExceptions');
const { schema } = require('../schemas/schemas');
const { LoginService, UserService } = require('../services');
const { loginValid } = require('../utils/validations');

const validationLogin = async (req, _res, next) => {
  try {
    const { email, password } = req.body;
    if (!loginValid(email, password)) {
      throw new CustomException('badRequest', 'Some required fields are missing');
    }
    const user = await LoginService.loginService(email);
    if (user.password !== password) {
      throw new CustomException('badRequest', 'Invalid fields');
    }
    next();
  } catch (error) {
    next(error);
  }
};

const validationUser = async (req, _res, next) => {
  try {
    const { displayName, email, password } = req.body;
    const { error } = schema.validate({ displayName, email, password });
    if (error) throw new CustomException('badRequest', error.message);

    const user = await UserService.userService(email);

    if (user) throw new CustomException('conflict', 'User already registered');
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validationLogin, validationUser };