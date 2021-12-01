import express from 'express';
import { IError } from '../../helpers/errors';

const { recipeService } = require('../services');
const { CODE_STATUSES } = require('../../constants/code-statuses');

const findAll = async (req: express.Request, res: express.Response) => {
  try {
    const response = await recipeService.findAll();
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  const recipe = req.body;
  const { id } = req.params;
  try {
    const response = await recipeService.create(recipe, id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
  }
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id, target } = req.params;
  try {
    await recipeService.deleteById(target, id);
    res.status(CODE_STATUSES.OK).send('recipe deleted');
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await recipeService.findById(id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const recipe = req.body;
  const { id, target } = req.params;
  try {
    const response = await recipeService.update(recipe, target, id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
  }
};

const createComment = async (req: express.Request, res: express.Response) => {
  const comment = req.body;
  const { id, target } = req.params;
  try {
    const response = await recipeService.createComment(comment, target, id);
    res.status(CODE_STATUSES.OK).send(response);
  } catch (err) {
    res.status(CODE_STATUSES.SERVER_ERROR).send(`${err}`);
  }
};

const recipeController = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  createComment,
};

module.exports = {
  recipeController,
};
