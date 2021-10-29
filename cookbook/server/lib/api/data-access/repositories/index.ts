export {};

const { cookbookRepository } = require('./cookbook.repository');
const { recipeRepository } = require('./recipe.repository');

module.exports = {
  cookbookRepository,
  recipeRepository,
};
