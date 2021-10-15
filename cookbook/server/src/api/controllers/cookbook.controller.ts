const { cookbookService } = require('../services');
import express from 'express';

const findAll = async (req: express.Request, res: express.Response) => {
  const cookbooks = await cookbookService.findAll();
  res.send(cookbooks);
};

const cookbookController = {
  findAll,
};

module.exports = {
  cookbookController,
};
