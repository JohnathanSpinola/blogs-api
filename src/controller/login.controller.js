const jwt = require('jsonwebtoken');
const { LoginService } = require('../services');

const secret = process.env.JWT_SECRET || 'secretJWT';

const loginController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await LoginService.loginService(email);
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginController };
