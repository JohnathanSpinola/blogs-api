const { PostService } = require('../services');

const insertCategoryController = async (req, res, next) => {
  try {
    const { id } = req.user.data;
    const { title, content, categoriesIds } = req.body;
    const category = await PostService.insertPostService({ title, content, categoriesIds, id });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = { insertCategoryController };