const { CustomException } = require('../exceptions/CustomExceptions');
const { User } = require('../models');

const insertUserService = async (user) => {
  const result = await User.create(user);
  if (!result) throw new CustomException('badRequest', 'Invalid fields');
  return result.dataValues;
};

const userService = async (email) => { 
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUserService = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!result) throw new CustomException('badRequest', 'Bad Request');
  const newDataValues = result.map(({ dataValues }) => dataValues);
  return newDataValues;
};

const getUserByIdService = async (id) => {
  const result = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!result) throw new CustomException('notFound', 'User does not exist');
  return result.dataValues;
};

module.exports = {
  insertUserService,
  getUserService,
  userService,
  getUserByIdService,
};
