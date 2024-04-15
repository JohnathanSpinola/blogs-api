const { NotFoundError } = require('../errors/NotFound.error');
const { CustomException } = require('../exceptions/CustomExceptions');
const { User } = require('../models');

const getUser = async (email) => { 
  const user = await User.findOne({ where: { email } });
  if (!user) throw new CustomException('badRequest', 'Invalid fields');

  return user.dataValues;
};

const insertUser = async (user) => {
  const result = await User.create(user);
  if (!result) throw new CustomException('badRequest', 'Invalid fields');
  return result.dataValues;
};

const getAllUser = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!result) throw new CustomException('badRequest', 'Bad Request');
  const newDataValues = result.map(({ dataValues }) => dataValues);
  return newDataValues;
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!result) throw new NotFoundError('User does not exist');
  return result.dataValues;
};

module.exports = {
  insertUser,
  getUser,
  getAllUser,
  getUserById,
};
