const { CategoriesService } = require('../services');

const insertCategoryController = async (req, res) => {
  const { name } = req.body;
  const category = await CategoriesService.insertCategoriesService(name);
  res.status(201).json(category);
};

const getCategoriesController = async (_req, res) => {
  const result = await CategoriesService.getCategoriesService();
  res.status(200).json(result);
};

module.exports = {
  insertCategoryController,
  getCategoriesController,
};