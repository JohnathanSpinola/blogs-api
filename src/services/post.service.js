const { CustomException } = require('../exceptions/CustomExceptions');
const { BlogPost } = require('../models');
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

module.exports = { insertPostService };