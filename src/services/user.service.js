const { BadRequestError } = require('../errors/BadRequest.error');
const { NotFoundError } = require('../errors/NotFound.error');
const { User } = require('../models');

const getUser = async (email) => { 
  const user = await User.findOne({ where: { email } });

  return user;
};

const insertUser = async (user) => {
  const result = await User.create(user);

  return result;
};

const getAllUser = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!result) throw new BadRequestError('Invalid fields');
  const newDataValues = result.map(({ dataValues }) => dataValues);
  return newDataValues;
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!result) throw new NotFoundError('User does not exist');
  return result;
};

module.exports = {
  insertUser,
  getUser,
  getAllUser,
  getUserById,
};
