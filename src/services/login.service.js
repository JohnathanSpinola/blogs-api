const { CustomException } = require('../exceptions/CustomExceptions');
const { User } = require('../models');

const getUser = async (email) => { 
  const user = await User.findOne({ where: { email } });
  if (!user) throw new CustomException('badRequest', 'Invalid fields');

  return user.dataValues;
};

module.exports = { getUser };