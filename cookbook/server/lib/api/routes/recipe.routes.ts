export {};

const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/', storage });
const { recipeController } = require('../controllers');
const { middlewares } = require('../../middlewares');

const recipeRouter = express.Router();

recipeRouter.get('/', recipeController.findAll);
recipeRouter.post('/', middlewares.verifyAuthToken, recipeController.create);
recipeRouter.delete(
  '/:id',
  middlewares.verifyAuthToken,
  recipeController.deleteById,
);
recipeRouter.get('/:id', recipeController.findById);
recipeRouter.put('/:id', middlewares.verifyAuthToken, recipeController.update);
recipeRouter.post(
  '/:id',
  middlewares.verifyAuthToken,
  recipeController.createComment,
);
recipeRouter.post(
  '/:id/like',
  middlewares.verifyAuthToken,
  recipeController.like,
);
recipeRouter.post(
  '/:id/photo',
  middlewares.verifyAuthToken,
  upload.single('image'),
  recipeController.updateImage,
);

module.exports = {
  recipeRouter,
};
