const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controller');
const { validationPost, validationUpdatePost } = require('../middlewares/validation.middleware');

const postRouter = Router();

postRouter.post('/', validationPost, validateJWT, PostController.insertCategoryController);
postRouter.get('/', validateJWT, PostController.getPostController);
postRouter.get('/:id', validateJWT, PostController.getPostByIdController);
postRouter.put('/:id', validateJWT, validationUpdatePost, PostController.updatePostController);

module.exports = postRouter;