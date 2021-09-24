import { AnyAction } from 'redux';
import ACTION_TYPES from '../../constants/actionTypes';

export const getAllRecipes = (): AnyAction => ({
  type: ACTION_TYPES.RECIPES_GET_ALL,
});

export const sortRecipes = (order: string): AnyAction => ({
  type: ACTION_TYPES.RECIPES_SORT,
  payload: order,
});

export const filterRecipes = (cookingTime: number): AnyAction => ({
  type: ACTION_TYPES.RECIPES_FILTER,
  payload: cookingTime,
});

export const getUsersCreatedRecipes = (userId: number): AnyAction => ({
  type: ACTION_TYPES.RECIPES_GET_USERS_CREATED,
  payload: userId,
});

export const getUsersSavedRecipes = (userId: number): AnyAction => ({
  type: ACTION_TYPES.RECIPES_GET_USERS_SAVED,
  payload: userId,
});

export const createComment = (
  recipeId: number,
  userId: number,
  commentText: string
): AnyAction => ({
  type: ACTION_TYPES.RECIPES_CREATE_COMMENT,
  payload: {
    recipeId,
    userId,
    commentText,
  },
});

type NewRecipeValues = {
  title: string;
  description: string;
  ingredients: string;
  directions: string;
};

export const createRecipe = (
  data: NewRecipeValues,
  userId: number,
  imageSrc: string
): AnyAction => ({
  type: ACTION_TYPES.RECIPES_CREATE,
  payload: {
    data,
    userId,
    imageSrc,
  },
});
