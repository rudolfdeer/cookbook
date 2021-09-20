import { AnyAction } from 'redux';
import Api from '../../helpers/api';
import ACTION_TYPES from '../../constants/actionTypes';
import { Recipe } from '../../interfaces';

export const getRecipes = (): AnyAction => {
  const resData = Api.getRecipesList();
  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: resData,
  };
};

export const sortRecipes = (order: string): AnyAction => {
  const currentData = Api.getRecipesList();
  let resData;

  switch (order) {
    case 'likes': {
      resData = currentData.sort((a, b) => b.likes - a.likes);
      break;
    }
    case 'views': {
      resData = currentData.sort((a, b) => b.views - a.views);
      break;
    }
    case 'default': {
      resData = currentData.sort((a, b) => a.id - b.id);
      break;
    }
    default:
      resData = currentData;
  }

  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: resData,
  };
};

export const filterRecipes = (cookingTime: number): AnyAction => {
  const currentData = Api.getRecipesList();
  const resData = currentData.filter(
    (recipe: Recipe) => recipe.cookingTime <= cookingTime,
  );

  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: resData,
  };
};

export const getUsersCreatedRecipes = (userId: number): AnyAction => {
  const allRecipes = Api.getRecipesList();
  const createdRecipes = allRecipes.filter(
    (recipe: Recipe) => recipe.userId === userId,
  );

  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: createdRecipes,
  };
};

export const getUsersSavedRecipes = (userId: number): AnyAction => {
  const user = Api.getUser(userId);
  const { savedRecipes } = user;

  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: savedRecipes,
  };
};

export const createComment = (
  recipeId: number,
  userId: number,
  commentText: string,
): AnyAction => {
  const recipes = Api.getRecipesList();

  const newComment = {
    userId,
    comment: commentText,
    date: new Date().toString(),
  };

  const recipesModified = recipes.map((el) => {
    if (el.id === recipeId) {
      el.comments.push(newComment);
    }
    return el;
  });

  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: recipesModified,
  };
};

type NewRecipeValues = {
  title: string;
  image?: string;
  description: string;
  ingredients: string;
  directions: string;
};

export const createRecipe = (
  data: NewRecipeValues,
  userId: number,
): AnyAction => {
  const recipes = Api.getRecipesList();
  const lastRecipeId = recipes[recipes.length - 1].id;
  const newRecipeId = lastRecipeId + 1;

  const directionsArr = data.directions.split(',');
  const ingredientArr = data.ingredients.split(',');

  const newRecipe: Recipe = {
    id: newRecipeId,
    title: data.title,
    image: data.image,
    userId,
    description: data.description,
    directions: directionsArr,
    ingredients: ingredientArr,
    cookingTime: 60,
    views: 0,
    likes: 0,
    comments: [],
  };

  recipes.push(newRecipe);

  return {
    type: ACTION_TYPES.RECIPES_GET,
    payload: recipes,
  };
};
