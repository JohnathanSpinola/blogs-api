const { CustomException } = require('../exceptions/CustomExceptions');
const { BlogPost } = require('../models');
const { verifyCategories } = require('./categories.service');

const insertPostService = async ({ title, content, categoryIds, id }) => {
  const verify = await verifyCategories(categoryIds);

  if (verify.length !== categoryIds.length) {
    throw new CustomException('badRequest', 'one or more "categoryIds" not found');
  }
  const post = await BlogPost.create({ title, content, userId: id });

  if (!post) throw new CustomException('badRequest', 'Bad Resquest');

  return post;
};

module.exports = { insertPostService };