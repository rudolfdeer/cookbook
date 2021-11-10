export {};

const { cookbookController } = require('./cookbook.controller');
const { recipeController } = require('./recipe.controller');
const { userController } = require('./user.controller');
const { authController } = require('./auth.controller');

module.exports = {
  cookbookController,
  recipeController,
  userController,
  authController,
};
