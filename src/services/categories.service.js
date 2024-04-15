const { BadRequestError } = require('../errors/BadRequest.error');
const { Category } = require('../models');

const insertCategoriesService = async (name) => { 
  if (!name) throw new BadRequestError('"name" is required');
  const { dataValues } = await Category.create({ name });

  return dataValues;
};

const getCategoriesService = async () => {
  const category = await Category.findAll();
  if (!category) throw new BadRequestError('Invalid fields');
  const newDataValues = category.map(({ dataValues }) => dataValues);
  return newDataValues;
};

const getCategoriesId = async (categoryIds) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  return categories;
};

module.exports = {
  insertCategoriesService,
  getCategoriesService,
  getCategoriesId,
};