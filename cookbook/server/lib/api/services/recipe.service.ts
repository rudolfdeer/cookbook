import {
  NewRecipe,
  UpdatedRecipe,
} from '../data-access/repositories/recipe.repository';

export {};

const { recipeRepository } = require('../data-access/repositories');

const findAll = async () => {
  const response = await recipeRepository.findAll();
  return response;
};

const create = async (body: NewRecipe, userId: number) => {
  const response = await recipeRepository.create(body, userId);
  return response;
};

const deleteById = async (id: number) => {
  await recipeRepository.deleteById(id);
};

const findById = async (id: number) => {
  const response = await recipeRepository.findById(id);
  return response;
};

const update = async (
  body: UpdatedRecipe,
  recipeId: number,
  userId: number
) => {
  const recipe = await recipeRepository.findById(recipeId);

  if (recipe.UserId !== userId) {
    throw new Error('Recipe was created by other user');
  }

  await recipeRepository.update(body, recipeId);

  const response = await recipeRepository.findById(recipeId);

  return response;
};

const createComment = async (
  body: Comment,
  recipeId: number,
  userId: number
) => {
  const response = await recipeRepository.createComment(body, recipeId, userId);
  return response;
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
