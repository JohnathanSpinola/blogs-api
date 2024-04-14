const { PostService, PostCategoriesService } = require('../services');

const insertCategoryController = async (req, res) => {
  const { id } = req.user.data;
  const { title, content, categoryIds } = req.body;
  const post = await PostService.insertPostService(title, content, categoryIds, id);
  await PostCategoriesService.insertPostCategoriesService(categoryIds, post.id);
  res.status(201).json(post);
};

const getPostController = async (_req, res) => {
  const post = await PostService.getPostService();
  res.status(200).json(post);
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getPostByIdService(id);
  res.status(200).json(post);
};

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await PostService.updatePostService(title, content, id);
  const post = await PostService.getPostByIdService(id);
  res.status(200).json(post);
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  await PostService.deletePostService(id);
  res.status(204).json();
};

module.exports = {
  insertCategoryController,
  getPostController,
  getPostByIdController,
  updatePostController,
  deletePostController,
};