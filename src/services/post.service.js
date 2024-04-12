const { CustomException } = require('../exceptions/CustomExceptions');
const { BlogPost, PostCategory } = require('../models');

const insertPostService = async ({ title, content, categoriesIds, id }) => { 
  const post = await BlogPost.create({ title, content, userId: id });
  const newCategoryId = categoriesIds.map((categoryId) => ({
    categoryId,
    postId: post.id,
  }));
  await PostCategory.bulkCreate(newCategoryId);
  if (!post) throw new CustomException('badRequest', 'Invalid fields');

  console.log(post);

  return post;
};

module.exports = { insertPostService };