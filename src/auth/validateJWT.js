const jwt = require('jsonwebtoken');
const { extractToken } = require('../utils/validations');

const secret = process.env.JWT_SECRET || 'secretJWT';

module.exports = async (req, res, next) => {
  try {
    const bearerToken = req.header('Authorization');

    // console.log({ bearerToken });

    if (!bearerToken) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = extractToken(bearerToken);
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};