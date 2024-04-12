const { CustomException } = require('../exceptions/CustomExceptions');
const { BlogPost } = require('../models');
const { verifyCategories } = require('./categories.service');

const insertPostService = async ({ title, content, categoryIds, id }) => { 
  const verifyIds = await verifyCategories(categoryIds);
  if (verifyIds.length !== categoryIds.length) {
    throw new CustomException('badRequest', 'one or more "categoryIds" not found');
  }
  const post = await BlogPost.create({ title, content, userId: id });

  if (!post) throw new CustomException('badRequest', 'Bad Resquest');

  return post;
};

module.exports = { insertPostService };