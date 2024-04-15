const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'secretJWT';

const insertUserController = async (req, res) => {
  const user = await UserService.insertUser(req.body);
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  res.status(201).json({ token });
};

const getAllUserController = async (_req, res) => {
  const result = await UserService.getAllUser();
  res.status(200).json(result);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await UserService.getUserById(id);
  res.status(200).json(result);
};

const deleteUserController = async (req, res) => {
  const { id } = req.user.data;
  await UserService.getUserById(id);
  res.status(204).json();
};

module.exports = {
  insertUserController,
  getAllUserController,
  getUserByIdController,
  deleteUserController,
};