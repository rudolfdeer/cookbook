import { Dispatch } from 'redux';
import api from '../../helpers/api';
import { IRecipeRequestBody } from '../../interfaces';
import recipeActions from '../actions/recipe';

export const getAllRecipes = () => async (dispatch: Dispatch): Promise<void> => {
  const recipes = await api.getAllRecipes();
  dispatch(recipeActions.getAll(recipes));
};

export const sortRecipes = (order: string) => async (dispatch: Dispatch): Promise<void> => {
  const recipes = await api.getAllRecipes();
  dispatch(recipeActions.sort(recipes, order));
};

export const filterRecipes = (cookingTime: number) => async (dispatch: Dispatch): Promise<void> => {
  const recipes = await api.getAllRecipes();
  dispatch(recipeActions.filter(recipes, cookingTime));
};

export const getUsersCreatedRecipes = (userId: number) => async (dispatch: Dispatch): Promise<void> => {
  const recipes = await api.getUsersCreatedRecipes(userId);
  dispatch(recipeActions.getCreatedRecipes(recipes));
};

export const getUsersSavedRecipes = () => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.getLoggedInUser();

  dispatch(recipeActions.getUsersSaved(user));
};

export const createComment = (recipeId: number, text: string) => async (dispatch: Dispatch): Promise<void> => {
  await api.commentRecipe(recipeId, text);

  const recipes = await api.getAllRecipes();

  dispatch(recipeActions.createComment(recipes));
};

export const createRecipe = (data: FormData, userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.createRecipe(data);

  const recipes = await api.getAllRecipes();

  dispatch(recipeActions.create(recipes, userId));
};

export const modifyRecipe = (
  recipeId: number,
  data: IRecipeRequestBody,
  userId: number,
) => async (dispatch: Dispatch): Promise<void> => {
  await api.updateRecipe(recipeId, data);
  const recipes = await api.getAllRecipes();

  dispatch(recipeActions.update(recipes, userId));
};

export const updateRecipesImage = (
  recipeId: number,
  data: FormData,
  userId: number,
) => async (dispatch: Dispatch): Promise<void> => {
  await api.updateRecipesImage(recipeId, data);
  const recipes = await api.getAllRecipes();

  dispatch(recipeActions.update(recipes, userId));
};

export const deleteRecipe = (recipeId: number, userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.deleteRecipe(recipeId);
  const recipes = await api.getAllRecipes();

  dispatch(recipeActions.delete(recipes, userId));
};

export const likeRecipe = (recipeId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.likeRecipe(recipeId);
  const recipes = await api.getAllRecipes();

  dispatch(recipeActions.like(recipes));
};
