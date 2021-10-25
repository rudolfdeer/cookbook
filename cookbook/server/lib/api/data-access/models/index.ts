export {};

const { Cookbook } = require('./cookbook.model');
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');
const { CookbookComment } = require('./cookbookComment.model');
const { RecipeComment } = require('./recipeComment.model');

module.exports = {
  Cookbook,
  User,
  Recipe,
  CookbookComment,
  RecipeComment,
};
