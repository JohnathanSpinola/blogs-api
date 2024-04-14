const jwt = require('jsonwebtoken');
const { LoginService } = require('../services');

const secret = process.env.JWT_SECRET || 'secretJWT';

const createToken = async (req, res) => {
  const { email } = req.body;
  const user = await LoginService.getUser(email);
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, secret, jwtConfig);

  res.status(200).json({ token });
};

module.exports = { createToken };
