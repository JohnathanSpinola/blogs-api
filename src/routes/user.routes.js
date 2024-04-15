const { Router } = require('express');
const { UserController } = require('../controller');
const { validationUser } = require('../middlewares/validationUser.middleware');
const validateJWT = require('../auth/validateJWT');

const userRouter = Router();

userRouter.post('/', validationUser, UserController.insertUserController);
userRouter.get('/', validateJWT, UserController.getAllUserController);
userRouter.get('/:id', validateJWT, UserController.getUserByIdController);
userRouter.delete('/me', validateJWT, UserController.deleteUserController);

module.exports = userRouter;