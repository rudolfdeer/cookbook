const { cookbookService } = require('../services');
import express from 'express';

const findAll = async (req: express.Request, res: express.Response) => {
  const cookbooks = await cookbookService.findAll();
  res.send(cookbooks);
};

const create = async (req: express.Request, res: express.Response) => {
  const cookbook = req.body;
  try {
    await cookbookService.create(cookbook);
    res.status(200).send('created');
  } catch (err) {
    res.send(`error till creating cookbook: ${err}`);
  }
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    await cookbookService.deleteById(id);
    res.status(200).send('deleted');
  } catch (err) {
    res.send(`error till deleting cookbook: ${err}`);
  }
};

const cookbookController = {
  findAll,
  create,
  deleteById,
};

module.exports = {
  cookbookController,
};
