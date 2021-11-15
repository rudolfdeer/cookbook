import express from 'express';

const { cookbookService } = require('../services');

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
  const { id } = req.params;
  try {
    await cookbookService.deleteById(id);
    res.status(200).send('cookbook deleted');
  } catch (err) {
    res.status(500).send(`error while deleting cookbook: ${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const cookbook = await cookbookService.findById(id);
    res.status(200).send(cookbook);
  } catch (err) {
    res.status(500).send(`error while finding cookbook: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const cookbook = req.body;
  const { id, target } = req.params;
  console.log(req.params);
  try {
    await cookbookService.update(cookbook, target, id);
    res.status(200).send('cookbook updated');
  } catch (err) {
    res.status(500).send(`error while updating cookbook: ${err}`);
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
