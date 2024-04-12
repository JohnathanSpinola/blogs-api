const { CustomException } = require('../exceptions/CustomExceptions');
const { User } = require('../models');

const loginService = async (email) => { 
  const user = await User.findOne({ where: { email } });
  if (!user) throw new CustomException('badRequest', 'Invalid fields');

  return user.dataValues;
};

module.exports = { loginService };