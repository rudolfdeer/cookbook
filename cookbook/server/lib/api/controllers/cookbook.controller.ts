import express from 'express';
import { IError } from '../../helpers/errors';

const { cookbookService } = require('../services');

const findAll = async (req: express.Request, res: express.Response) => {
  try {
    const response = await cookbookService.findAll();
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while finding all cookbooks: ${err}`);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  const cookbook = req.body;
  const { id } = req.params;
  try {
    const response = await cookbookService.create(cookbook, id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while creating cookbook: ${err}`);
  }
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id, target } = req.params;
  try {
    await cookbookService.deleteById(id, target);
    res.status(200).send('cookbook deleted');
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await cookbookService.findById(id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while finding cookbook: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const cookbook = req.body;
  const { target, id } = req.params;
  try {
    const response = await cookbookService.update(cookbook, target, id);
    res.status(200).send(response);
  } catch (err) {
    const error = err as IError;
    res.status(error.status).send(error.message);
  }
};

const createComment = async (req: express.Request, res: express.Response) => {
  const comment = req.body;
  const { id, target } = req.params;
  try {
    const response = await cookbookService.createComment(comment, target, id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while commenting cookbook: ${err}`);
  }
};

const cookbookController = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  createComment,
};

module.exports = {
  cookbookController,
};
