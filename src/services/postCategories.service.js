const { PostCategory } = require('../models');

const insertPostCategoriesService = async (categoryIds, postId) => {
  const postCategories = categoryIds.map((categoryId) => ({
    categoryId,
    postId,
  }));
  const insertPostCategories = await PostCategory.bulkCreate(postCategories);
  
  return insertPostCategories;
};

module.exports = { insertPostCategoriesService };