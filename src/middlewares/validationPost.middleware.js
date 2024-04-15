const { BadRequestError } = require('../errors/BadRequest.error');
const { UnauthorizedError } = require('../errors/Unauthorized.error');
const { schemaUpdatePost, schemaPost } = require('../schemas/schemaPost');
const { PostService } = require('../services');

const validationPost = async (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = schemaPost.validate({ title, content, categoryIds });
  if (error) throw new BadRequestError(error.message);
  next();
};

const validationUpdatePost = async (req, _res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { id: idUser } = req.user.data;

  const { error } = schemaUpdatePost.validate({ title, content });
  
  if (error) throw new BadRequestError(error.message);

  const { userId } = await PostService.getPostByIdService(id);
  
  if (userId !== idUser) throw new UnauthorizedError('Unauthorized user');
  
  next();
};

const validationDeletePost = async (req, _res, next) => {
  const { id } = req.params;
  const { id: idUser } = req.user.data;
  
  const { userId } = await PostService.getPostByIdService(id);

  if (userId !== idUser) throw new UnauthorizedError('Unauthorized user');

  next();
};

module.exports = { validationPost, validationUpdatePost, validationDeletePost };