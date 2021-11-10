export {};

const express = require('express');
const { userController } = require('../controllers');

const userRouter = express.Router();

userRouter.delete('/:id', userController.deleteById);
userRouter.get('/:id', userController.findById);
userRouter.put('/:id', userController.update);

module.exports = {
  userRouter,
};
