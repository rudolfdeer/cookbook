export {};

const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/', storage });
const { cookbookController } = require('../controllers');
const { middlewares } = require('../../middlewares');

const cookbookRouter = express.Router();

cookbookRouter.get('/', cookbookController.findAll);
cookbookRouter.post(
  '/',
  middlewares.verifyAuthToken,
  cookbookController.create,
);
cookbookRouter.delete(
  '/:id',
  middlewares.verifyAuthToken,
  cookbookController.deleteById,
);
cookbookRouter.get('/:id', cookbookController.findById);
cookbookRouter.put(
  '/:id',
  middlewares.verifyAuthToken,
  cookbookController.update,
);
cookbookRouter.post(
  '/:id',
  middlewares.verifyAuthToken,
  cookbookController.createComment,
);

cookbookRouter.post(
  '/:id/like',
  middlewares.verifyAuthToken,
  cookbookController.like,
);
cookbookRouter.post(
  '/:id/image',
  middlewares.verifyAuthToken,
  upload.single('image'),
  cookbookController.uploadImage,
);

module.exports = {
  cookbookRouter,
};
