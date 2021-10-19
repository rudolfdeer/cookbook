const { cookbookService } = require('../services');
import express from 'express';

const findAll = async (req: express.Request, res: express.Response) => {
  try {
    const cookbooks = await cookbookService.findAll();
    res.status(200).send(cookbooks);
  } catch (err) {
    res.status(500).send(`error while finding all cookbooks: ${err}`);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  const cookbook = req.body;
  try {
    await cookbookService.create(cookbook);
    res.status(200).send('cookbook created');
  } catch (err) {
    res.status(500).send(`error while creating cookbook: ${err}`);
  }
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    await cookbookService.deleteById(id);
    res.status(200).send('cookbook deleted');
  } catch (err) {
    res.send(`error while deleting cookbook: ${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const id = req.params.id;
  try {
    const cookbook = await cookbookService.findById(id);
    res.status(200).send(cookbook);
  } catch (err) {
    res.send(`error while finding cookbook: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const cookbook = req.body;
  const id = req.params.id;
  try {
    await cookbookService.update(cookbook, id);
    res.status(200).send('cookbook updated');
  } catch (err) {
    res.send(`error while updating cookbook: ${err}`);
  }
};

const cookbookController = {
  findAll,
  create,
  deleteById,
  findById,
  update,
};

module.exports = {
  cookbookController,
};
