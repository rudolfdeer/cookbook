export {};

const express = require('express');
const { recipeController } = require('../controllers');
const { middlewares } = require('../../middlewares');

const recipeRouter = express.Router();

recipeRouter.get('/', recipeController.findAll);
recipeRouter.post('/', middlewares.verifyAuthToken, recipeController.create);
recipeRouter.delete('/:id', recipeController.deleteById);
recipeRouter.get('/:id', recipeController.findById);
recipeRouter.put('/:id', recipeController.update);
recipeRouter.post(
  '/:id',
  middlewares.verifyAuthToken,
  recipeController.createComment
);

module.exports = {
  recipeRouter,
};
