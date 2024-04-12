const { Router } = require('express');

const { CategoriesController } = require('../controller');
const validateJWT = require('../auth/validateJWT');

const categoriesRouter = Router();

categoriesRouter.post('/', validateJWT, CategoriesController.insertCategoryController);
categoriesRouter.get('/', validateJWT, CategoriesController.getCategoriesController);

module.exports = categoriesRouter;