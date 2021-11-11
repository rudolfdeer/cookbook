import express from 'express';

const { authService } = require('../services');

const signUp = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const { token, response } = await authService.signUp({
      email,
      password,
    });
    res.cookie('jwt', token, { httpOnly: false });
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(`${err}`);
  }
};

const signIn = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const { token, response } = await authService.signIn({
      email,
      password,
    });
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const authController = {
  signUp,
  signIn,
};

module.exports = {
  authController,
};
