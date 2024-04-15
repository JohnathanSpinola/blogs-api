const { BadRequestError } = require('../errors/BadRequest.error');
const { NotFoundError } = require('../errors/NotFound.error');
const { BlogPost, User, Category } = require('../models');
const { verifyCategoryIds } = require('../utils/validations');
const { getCategoriesId } = require('./categories.service');

const insertPostService = async (title, content, categoryIds, id) => {
  const categoriesIds = await getCategoriesId(categoryIds);
  const verify = verifyCategoryIds(categoriesIds, categoryIds);

  if (verify) throw new BadRequestError('one or more "categoryIds" not found');

  const post = await BlogPost.create({ title, content, userId: id });
  
  return post;
};

const getAllPostService = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) throw new BadRequestError('Invalid fields');
  return post;
};

const getPostByIdService = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) throw new NotFoundError('Post does not exist');
  return post;
};

const updatePostService = async (title, content, id) => {
  const post = await BlogPost.update({ title, content }, { where: { id } });
  if (!post) throw new NotFoundError('Post does not exist');
  return post;
};

const deletePostService = async (id) => {
  const post = await BlogPost.findByPk(id);
  if (!post) throw new NotFoundError('Post does not exist');
  return post;
};

module.exports = {
  insertPostService,
  getAllPostService,
  getPostByIdService,
  updatePostService,
  deletePostService,
};