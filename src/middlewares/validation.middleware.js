const { CustomException } = require('../exceptions/CustomExceptions');
const { schema, schemaPost, schemaUpdatePost } = require('../schemas/schemas');
const { LoginService, UserService, PostService } = require('../services');
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
const validationPost = async (req, _res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { error } = schemaPost.validate({ title, content, categoryIds });
    if (error) throw new CustomException('badRequest', error.message);
    next();
  } catch (error) {
    next(error);
  }
};
const validationUpdatePost = async (req, _res, next) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const { id: idUser } = req.user.data;
    const { userId } = await PostService.getPostByIdService(id);
    const { error } = schemaUpdatePost.validate({ title, content });
    if (userId !== idUser) throw new CustomException('unauthorized', 'Unauthorized user');
    if (error) throw new CustomException('badRequest', error.message);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validationLogin, validationUser, validationPost, validationUpdatePost };