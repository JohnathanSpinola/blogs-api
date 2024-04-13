const { PostService, PostCategoriesService } = require('../services');

const insertCategoryController = async (req, res, next) => {
  try {
    const { id } = req.user.data;
    const { title, content, categoryIds } = req.body;
    const post = await PostService.insertPostService(title, content, categoryIds, id);
    await PostCategoriesService.insertPostCategoriesService(categoryIds, post.id);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const getPostController = async (_req, res, next) => {
  try {
    const post = await PostService.getPostService();
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const getPostByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await PostService.getPostByIdService(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePostController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    // const { id: idUser } = req.user.data;

    await PostService.updatePostService(title, content, id);
    const post = await PostService.getPostByIdService(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertCategoryController,
  getPostController,
  getPostByIdController,
  updatePostController,
};