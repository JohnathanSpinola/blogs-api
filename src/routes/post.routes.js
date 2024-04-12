const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controller');

const postRouter = Router();

postRouter.post('/', validateJWT, PostController.insertCategoryController);

module.exports = postRouter;