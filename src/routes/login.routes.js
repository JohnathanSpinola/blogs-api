const { Router } = require('express');
const { validationLogin } = require('../middlewares/validationUser.middleware');
const { LoginController } = require('../controller');

const loginRouter = Router();

loginRouter.post('/', validationLogin, LoginController.createToken);

module.exports = loginRouter;