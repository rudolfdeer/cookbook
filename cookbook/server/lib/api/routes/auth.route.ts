export {};

const express = require('express');
const { authController } = require('../controllers');

const authRouter = express.Router();

authRouter.post('/sign-up', authController.signUp);
authRouter.post('/sign-in', authController.signIn);

module.exports = {
  authRouter,
};
