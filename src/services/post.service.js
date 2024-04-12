const { CustomException } = require('../exceptions/CustomExceptions');
const { BlogPost } = require('../models');
const { getCategoriesId } = require('./categories.service');

const insertPostService = async ({ title, content, categoryIds, id }) => {
  const categoriesIds = await getCategoriesId(categoryIds);
  console.log('categoryIds', { categoryIds });
  
  const verify = categoriesIds.every(({ dataValues }) => {
    console.log('id', { id: dataValues.id });
    const test = categoriesIds.include(dataValues.id);
    console.log('test', { test });
    return 'oi';
  });
  console.log('verify', { verify });

  // if (categoriesIds.length !== categoryIds.length) {
  //   throw new CustomException('badRequest', 'one or more "categoryIds" not found');
  // }
  const post = await BlogPost.create({ title, content, userId: id });

  if (!post) throw new CustomException('badRequest', 'Bad Resquest');

  return post;
};

module.exports = { insertPostService };