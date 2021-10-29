export {};

const express = require('express');
const { recipeController } = require('../controllers');

const recipeRouter = express.Router();

recipeRouter.get('/', recipeController.findAll);
recipeRouter.post('/', recipeController.create);
recipeRouter.delete('/:id', recipeController.deleteById);
recipeRouter.get('/:id', recipeController.findById);
recipeRouter.put('/:id', recipeController.update);
recipeRouter.post('/:id', recipeController.createComment);

module.exports = {
  recipeRouter,
};
