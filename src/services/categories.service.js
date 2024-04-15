const { BadRequestError } = require('../errors/BadRequest.error');
const { Category } = require('../models');

const insertCategoriesService = async (name) => { 
  if (!name) throw new BadRequestError('"name" is required');
  const category = await Category.create({ name });

  return category;
};

const getCategoriesService = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoriesId = async (id) => {
  const categories = await Category.findAll({ where: { id } });
  return categories;
};

module.exports = {
  insertCategoriesService,
  getCategoriesService,
  getCategoriesId,
};