import express from 'express';

const { authService } = require('../services');

const signUp = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const { token, createdUser } = await authService.signUp({
      email,
      password,
    });
    res.cookie('jwt', token, { httpOnly: false });
    res.status(200).send(createdUser);
  } catch (err) {
    res.status(500).send(`sign up error: ${err}`);
  }
};

const signIn = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await authService.signIn({
      email,
      password,
    });
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(`sign in error: ${err}`);
  }
};

const authController = {
  signUp,
  signIn,
};

module.exports = {
  authController,
};
