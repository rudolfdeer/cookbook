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
  await recipeRepository.create(recipe, userId);
};

const deleteById = async (id: number) => {
  await recipeRepository.deleteById(id);
};

const findById = async (id: number) => {
  const recipe = await recipeRepository.findById(id);
  return recipe;
};

const update = async (recipe: UpdatedRecipeValues, id: number) => {
  await recipeRepository.update(recipe, id);
};

const createComment = async (comment: Comment, id: number) => {
  await recipeRepository.createComment(comment, id);
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
