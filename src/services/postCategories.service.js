const { PostCategory } = require('../models');

const insertPostCategoriesService = async (categoryIds, postId) => {
  const postCategories = categoryIds.map((categoryId) => ({
    categoryId,
    postId,
  }));
  const insertPostCategories = await PostCategory.bulkCreate(postCategories);
  
  return insertPostCategories;
};

// validação do token
// verificar se o que existe o query
// a busca vai ser feita pelo o title

module.exports = { insertPostCategoriesService };