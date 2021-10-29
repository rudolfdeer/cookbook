export {};

const express = require('express');
const mainRoute = express.Router();
const { cookbookRouter } = require('../routes/cookbook.route');
const { recipeRouter } = require('../routes/recipe.route');

mainRoute.use('/api/cookbooks', cookbookRouter);
mainRoute.use('/api/recipes', recipeRouter);

module.exports = {
  router: mainRoute,
};
