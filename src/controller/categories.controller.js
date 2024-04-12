const { CategoriesService } = require('../services');

const insertCategoryController = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await CategoriesService.insertCategoriesService(name);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const getCategoriesController = async (_req, res, next) => {
  try {
    const result = await CategoriesService.getCategoriesService();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertCategoryController,
  getCategoriesController,
};