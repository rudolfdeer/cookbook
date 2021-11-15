import {
  NewRecipe,
  UpdatedRecipe,
} from '../data-access/repositories/recipe.repository';

export {};

const { recipeRepository } = require('../data-access/repositories');

const findAll = async () => {
  const recipes = await recipeRepository.findAll();
  return recipes;
};

const create = async (body: NewRecipe, userId: number) => {
  const recipe = await recipeRepository.create(body, userId);
  return recipe;
};

const deleteById = async (id: number) => {
  await recipeRepository.deleteById(id);
};

const findById = async (id: number) => {
  const recipe = await recipeRepository.findById(id);
  return recipe;
};

const update = async (
  body: UpdatedRecipe,
  recipeId: number,
  userId: number
) => {
  const recipeInstanse = await recipeRepository.findById(recipeId);

  if (recipeInstanse.UserId !== userId) {
    throw new Error('Recipe was created by other user');
  }

  await recipeRepository.update(body, recipeId);

  const recipe = await recipeRepository.findById(recipeId);

  return recipe;
};

const createComment = async (
  body: Comment,
  recipeId: number,
  userId: number
) => {
  const comment = await recipeRepository.createComment(body, recipeId, userId);
  return comment;
};

const recipeService = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  createComment,
};

module.exports = {
  recipeService,
};
