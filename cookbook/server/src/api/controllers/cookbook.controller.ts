const { cookbookService } = require('../services');
import express from 'express';

const getAll = async(req: express.Request, res: express.Response) => {
  const cookbooks = await cookbookService.getAll();
  res.json(cookbooks);
}

const cookbookController = {
	getAll
};

module.exports = {
  cookbookController
}