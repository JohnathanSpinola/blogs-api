const { CustomException } = require('../exceptions/CustomExceptions');
const { BlogPost, User, Category } = require('../models');
const { verifyCategoryIds } = require('../utils/validations');
const { getCategoriesId } = require('./categories.service');

const insertPostService = async (title, content, categoryIds, id) => {
  const categoriesIds = await getCategoriesId(categoryIds);

  if (verifyCategoryIds(categoriesIds, categoryIds)) {
    throw new CustomException('badRequest', 'one or more "categoryIds" not found');
  }
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

  if (!post) throw new CustomException('badRequest', 'Bad Request');
  
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
  if (!post) throw new CustomException('notFound', 'Post does not exist');
  return post;
};

const updatePostService = async (title, content, id) => {
  const post = await BlogPost.update({ title, content }, { where: { id } });
  if (!post) throw new CustomException('notFound', 'Post does not exist');
  return post;
};

const deletePostService = async (id) => {
  const post = await BlogPost.findByPk(id);
  if (!post) throw new CustomException('notFound', 'Post does not exist');
  return post;
};

module.exports = {
  insertPostService,
  getAllPostService,
  getPostByIdService,
  updatePostService,
  deletePostService,
};