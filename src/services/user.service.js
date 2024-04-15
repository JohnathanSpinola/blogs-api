const { BadRequestError } = require('../errors/BadRequest.error');
const { NotFoundError } = require('../errors/NotFound.error');
const { User } = require('../models');

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new BadRequestError('Invalid fields');
  return user;
};

const insertUser = async (user) => {
  const result = await User.create(user);
  return result;
};

const getAllUser = async () => {
  const results = await User.findAll({ attributes: { exclude: ['password'] } });
  return results;
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
