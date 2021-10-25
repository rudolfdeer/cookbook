export {};

const { Cookbook } = require('./cookbook.model');
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');
const { CookbookComment } = require('./cookbookComment.model');
const { CookbookLike } = require('./cookbookLike.model');
const { CookbookSaved } = require('./cookbookSaved.model');
const { RecipeComment } = require('./recipeComment.model');
const { RecipeLike } = require('./recipeLike.model');
const { RecipeSaved } = require('./recipeSaved.model');
const { RecipeCookbook } = require('./recipeCookbook.model');

module.exports = {
  Cookbook,
  User,
  Recipe,
  CookbookComment,
  RecipeComment,
  CookbookLike,
  CookbookSaved,
  RecipeLike,
  RecipeSaved,
  RecipeCookbook,
};
