import express from 'express';

const { recipeService } = require('../services');

const findAll = async (req: express.Request, res: express.Response) => {
  try {
    const recipes = await recipeService.findAll();
    res.status(200).send(recipes);
  } catch (err) {
    res.status(500).send(`error while finding all recipes: ${err}`);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  const recipe = req.body;
  const { id } = req.params;
  try {
    await recipeService.create(recipe, id);
    res.status(200).send('recipe created');
  } catch (err) {
    res.status(500).send(`error while creating recipe: ${err}`);
  }
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    await recipeService.deleteById(id);
    res.status(200).send('recipe deleted');
  } catch (err) {
    res.status(500).send(`error while deleting recipe: ${err}`);
  }
};

const findById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const recipe = await recipeService.findById(id);
    res.status(200).send(recipe);
  } catch (err) {
    res.status(500).send(`error while finding recipe: ${err}`);
  }
};

const update = async (req: express.Request, res: express.Response) => {
  const recipe = req.body;
  const { id } = req.params;
  try {
    await recipeService.update(recipe, id);
    res.status(200).send('recipe updated');
  } catch (err) {
    res.status(500).send(`error while updating recipe: ${err}`);
  }
};

const createComment = async (req: express.Request, res: express.Response) => {
  const comment = req.body;
  const { id } = req.params;
  try {
    await recipeService.createComment(comment, id);
    res.status(200).send('comment created');
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
