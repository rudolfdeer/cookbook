export {};

const express = require('express');
const { cookbookController } = require('../controllers');

const cookbookRouter = express.Router();

cookbookRouter.get('/', cookbookController.findAll);
cookbookRouter.post('/', cookbookController.create);
cookbookRouter.delete('/:id', cookbookController.deleteById);
cookbookRouter.get('/:id', cookbookController.findById);
cookbookRouter.put('/:id', cookbookController.update);
cookbookRouter.post('/:id', cookbookController.createComment);

module.exports = {
  cookbookRouter,
};
