const { CustomException } = require('../exceptions/CustomExceptions');
const { schemaUpdatePost, schemaPost } = require('../schemas/schemaPost');
const { PostService } = require('../services');

const validationPost = async (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = schemaPost.validate({ title, content, categoryIds });
  if (error) throw new CustomException('badRequest', error.message);
  next();
};

const validationUpdatePost = async (req, _res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { id: idUser } = req.user.data;
  const { userId } = await PostService.getPostByIdService(id);
  const { error } = schemaUpdatePost.validate({ title, content });
  if (userId !== idUser) throw new CustomException('unauthorized', 'Unauthorized user');
  if (error) throw new CustomException('badRequest', error.message);
  next();
};

const validationDeletePost = async (req, _res, next) => {
  const { id } = req.params;
  const { id: idUser } = req.user.data;
  const { userId } = await PostService.getPostByIdService(id);
  if (userId !== idUser) throw new CustomException('unauthorized', 'Unauthorized user');
  next();
};

module.exports = { validationPost, validationUpdatePost, validationDeletePost };