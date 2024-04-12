const { Router } = require('express');
const { validationLogin } = require('../middlewares/validation.middleware');
const { LoginController } = require('../controller');

const loginRouter = Router();

loginRouter.post('/', validationLogin, LoginController.loginController);

module.exports = loginRouter;