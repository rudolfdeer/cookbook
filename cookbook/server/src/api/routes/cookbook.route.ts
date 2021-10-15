export {};

const express = require('express');
const { cookbookController } = require('../controllers');

const cookbookRouter = express.Router();

cookbookRouter.get('/', cookbookController.findAll);

module.exports = {
  cookbookRouter,
};
