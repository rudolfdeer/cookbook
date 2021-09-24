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
  commentText: string,
): AnyAction => ({
  type: ACTION_TYPES.RECIPES_CREATE_COMMENT,
  payload: {
    recipeId,
    userId,
    commentText,
  },
});

type RecipeValues = {
  title: string;
  description: string;
  ingredients: string;
  directions: string;
};

export const createRecipe = (
  data: RecipeValues,
  userId: number,
  imageSrc: string,
): AnyAction => ({
  type: ACTION_TYPES.RECIPES_CREATE,
  payload: {
    data,
    userId,
    imageSrc,
  },
});

export const modifyRecipe = (
  data: RecipeValues,
  recipeId: number,
  imageSrc: string,
  userId: number,
): AnyAction => ({
  type: ACTION_TYPES.RECIPES_MODIFY,
  payload: {
    data,
    recipeId,
    imageSrc,
    userId,
  },
});
