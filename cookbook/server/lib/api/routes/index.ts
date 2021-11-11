export {};

const express = require('express');

const mainRoute = express.Router();
const { cookbookRouter } = require('./cookbook.route');
const { recipeRouter } = require('./recipe.route');
const { userRouter } = require('./user.route');
const { authRouter } = require('./auth.route');

mainRoute.use('/api/cookbooks', cookbookRouter);
mainRoute.use('/api/recipes', recipeRouter);
mainRoute.use('/api/user', userRouter);
mainRoute.use('/api', authRouter);

module.exports = {
  router: mainRoute,
};
