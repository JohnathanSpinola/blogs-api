const validatePassword = (user, password) => user.password !== password;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const arrayCategoryIds = (categoriesIds) => categoriesIds.map(({ dataValues }) => dataValues.id);

const verifyCategoryIds = (categoriesIds, categoryIds) => {
  const verify = arrayCategoryIds(categoriesIds).toString() !== categoryIds.toString();
  return verify;
};

module.exports = { validatePassword, extractToken, verifyCategoryIds };