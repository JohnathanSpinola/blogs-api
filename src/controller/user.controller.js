const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'secretJWT';

const insertUserController = async (req, res, next) => {
  try {
    const result = await UserService.insertUserService(req.body);
    console.log('resultController', { result });
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: result }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getUserController = async (_req, res, next) => {
  try {
    const result = await UserService.getUserService();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserByIdService(id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertUserController,
  getUserController,
  getUserByIdController,
};