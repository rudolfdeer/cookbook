export {};

const express = require('express');
const mainRoute = express.Router();
const { cookbookRouter } = require('../routes/cookbook.route');
const { recipeRouter } = require('../routes/recipe.route');
const { userRouter } = require('../routes/user.route');

mainRoute.use('/api/cookbooks', cookbookRouter);
mainRoute.use('/api/recipes', recipeRouter);
mainRoute.use('/api/users', userRouter);

module.exports = {
  router: mainRoute,
};
