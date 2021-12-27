export {};

const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { userController } = require('../controllers');
const { middlewares } = require('../../middlewares');

const userRouter = express.Router();

userRouter.delete('/', middlewares.verifyAuthToken, userController.deleteById);
userRouter.get('/:id', userController.findById);
userRouter.get('/users/all', userController.findAll);
userRouter.get('/', middlewares.verifyAuthToken, userController.findById);
userRouter.put('/', middlewares.verifyAuthToken, upload.single('photo'), userController.update);
userRouter.put('/update/photo', middlewares.verifyAuthToken, upload.single('photo'), userController.updatePhoto);
userRouter.post('/sign-up', userController.signUp);
userRouter.post('/sign-in', userController.signIn);
userRouter.delete('/sign-out', userController.signOut);
userRouter.post(
  '/change-email',
  middlewares.verifyAuthToken,
  userController.changeEmail,
);
userRouter.post(
  '/change-password',
  middlewares.verifyAuthToken,
  userController.changePassword,
);

module.exports = {
  userRouter,
};
