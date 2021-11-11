export {};

const express = require('express');
const { userController } = require('../controllers');
const { middlewares } = require('../../middlewares');

const userRouter = express.Router();

userRouter.delete('/:id', userController.deleteById);
userRouter.get('/:id', userController.findById);
userRouter.put('/:id', middlewares.verifyAuthToken, userController.update);

module.exports = {
  userRouter,
};
