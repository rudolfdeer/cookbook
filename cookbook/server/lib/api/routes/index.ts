export {};

const express = require('express');

const mainRoute = express.Router();
const { cookbookRouter } = require('./cookbook.route');
const { recipeRouter } = require('./recipe.route');
const { userRouter } = require('./user.route');

mainRoute.use('/api/cookbooks', cookbookRouter);
mainRoute.use('/api/recipes', recipeRouter);
mainRoute.use('/api/user', userRouter);

module.exports = {
  router: mainRoute,
};
