import express from 'express';

const { userService } = require('../services');

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    await userService.deleteById(id);
    res.status(200).send('user deleted');
  } catch (err) {
    res.status(500).send(`error while deleting user: ${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await userService.findById(id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while finding user: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const user = req.body;
  const { id } = req.params;
  try {
    const response = await userService.update(user, id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while updating user: ${err}`);
  }
};

const signUp = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const { token, response } = await userService.signUp({
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
    const { token, response } = await userService.signIn({
      email,
      password,
    });
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const changeEmail = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const { token, response } = await userService.changeEmail(email, id);
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const changePassword = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const response = await userService.changePassword(password, id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const userController = {
  deleteById,
  findById,
  update,
  signUp,
  signIn,
  changeEmail,
  changePassword,
};

module.exports = {
  userController,
};
