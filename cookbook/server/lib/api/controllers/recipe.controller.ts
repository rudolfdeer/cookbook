import express from 'express';

const { recipeService } = require('../services');

const findAll = async (req: express.Request, res: express.Response) => {
  try {
    const response = await recipeService.findAll();
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while finding all recipes: ${err}`);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  const recipe = req.body;
  const { id } = req.params;
  try {
    const response = await recipeService.create(recipe, id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while creating recipe: ${err}`);
  }
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id, target } = req.params;
  try {
    await recipeService.deleteById(target, id);
    res.status(200).send('recipe deleted');
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await recipeService.findById(id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while finding recipe: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const recipe = req.body;
  const { target } = req.params;
  try {
    const response = await recipeService.update(recipe, target);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const createComment = async (req: express.Request, res: express.Response) => {
  const comment = req.body;
  const { id, target } = req.params;
  try {
    const response = await recipeService.createComment(comment, target, id);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`error while commenting recipe: ${err}`);
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
