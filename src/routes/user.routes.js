const { Router } = require('express');
const { UserController } = require('../controller');
const { validationUser } = require('../middlewares/validation.middleware');
const validateJWT = require('../auth/validateJWT');

const userRouter = Router();

userRouter.post('/', validationUser, UserController.insertUserController);
userRouter.get('/', validateJWT, UserController.getUserController);
userRouter.get('/:id', validateJWT, UserController.getUserByIdController);

module.exports = userRouter;