const { BadRequestError } = require('../errors/BadRequest.error');
const { User } = require('../models');

const getUser = async (email) => { 
  const user = await User.findOne({ where: { email } });
  if (!user) throw new BadRequestError('Invalid fields');

  return user.dataValues;
};

module.exports = { getUser };