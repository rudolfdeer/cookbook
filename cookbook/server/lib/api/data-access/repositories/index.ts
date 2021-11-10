export {};

const { cookbookRepository } = require('./cookbook.repository');
const { recipeRepository } = require('./recipe.repository');
const { userRepository } = require('./user.repository');
const { authRepository } = require('./auth.repository');

module.exports = {
  cookbookRepository,
  recipeRepository,
  userRepository,
  authRepository,
};
