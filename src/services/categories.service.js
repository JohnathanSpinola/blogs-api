const { CustomException } = require('../exceptions/CustomExceptions');
const { Category } = require('../models');

const insertCategoriesService = async (name) => { 
  console.log('name', { name });
  if (!name) throw new CustomException('badRequest', '"name" is required');
  const { dataValues } = await Category.create({ name });
  console.log('category', { dataValues });

  return dataValues;
};

const getCategoriesService = async () => {
  const category = await Category.findAll();
  if (!category) throw new CustomException('badRequest', 'Bad Request');
  const newDataValues = category.map(({ dataValues }) => dataValues);
  return newDataValues;
};

module.exports = {
  insertCategoriesService,
  getCategoriesService,
};