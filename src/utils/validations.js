const loginValid = (username, password) => username && password;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

module.exports = { loginValid, extractToken };