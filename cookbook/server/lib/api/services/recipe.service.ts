import {
  NewRecipeValues,
  UpdatedRecipeValues,
} from '../data-access/repositories/recipe.repository';

export {};

const { recipeRepository } = require('../data-access/repositories');

const findAll = async () => {
  const recipes = await recipeRepository.findAll();
  return recipes;
};

const create = async (recipe: NewRecipeValues, userId: number) => {
  const newRecipe = await recipeRepository.create(recipe, userId);
  return newRecipe;
};

const deleteById = async (id: number) => {
  await recipeRepository.deleteById(id);
};

const findById = async (id: number) => {
  const recipe = await recipeRepository.findById(id);
  return recipe;
};

const update = async (
  recipe: UpdatedRecipeValues,
  id: number,
  userId: number
) => {
  const recipeInstanse = await recipeRepository.findById(id);

  if (recipeInstanse.UserId !== userId) {
    throw new Error('Recipe was created by other user');
  }

  await recipeRepository.update(recipe, id);

  const response = await recipeRepository.findById(id);

  return response;
};

const createComment = async (
  comment: Comment,
  recipeId: number,
  userId: number
) => {
  const response = await recipeRepository.createComment(
    comment,
    recipeId,
    userId
  );
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
