import express from 'express';
import { IError } from '../../helpers/errors';

const { userService } = require('../services');
const { CODE_STATUSES } = require('../../constants/code-statuses');

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    await userService.deleteById(id);
    res.clearCookie('jwt');
    res.status(CODE_STATUSES.OK).send('user deleted');
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await userService.findById(id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const user = req.body;
  const { id } = req.params;
  try {
    const response = await userService.update(user, id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
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
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
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
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
  }
};

const changeEmail = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const { token, response } = await userService.changeEmail(email, id);
    res.cookie('jwt', token, { httpOnly: true });
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
  }
};

const changePassword = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const response = await userService.changePassword(password, id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
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
