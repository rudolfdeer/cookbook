import { AnyAction } from 'redux';
import { Recipe } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';
import api from '../../helpers/api';

const initialState = [] as Recipe[];

type RecipesReducer = typeof initialState;

export default function recipesReducer(
  state = initialState,
  action: AnyAction
): RecipesReducer {
  switch (action.type) {
    case ACTION_TYPES.RECIPES_GET_ALL: {
      const response = api.getRecipesList();
      return [...response];
    }

    case ACTION_TYPES.RECIPES_SORT: {
      const order = action.payload;
      const currentData = api.getRecipesList();

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

      return [...resData];
    }

    case ACTION_TYPES.RECIPES_FILTER: {
      const cookingTime = action.payload;
      const currentData = api.getRecipesList();
      const resData = currentData.filter(
        (recipe: Recipe) => recipe.cookingTime <= cookingTime
      );

      return [...resData];
    }

    case ACTION_TYPES.RECIPES_GET_USERS_CREATED: {
      const userId = action.payload;
      const allRecipes = api.getRecipesList();
      const createdRecipes = allRecipes.filter(
        (recipe: Recipe) => recipe.userId === userId
      );

      return [...createdRecipes];
    }

    case ACTION_TYPES.RECIPES_GET_USERS_SAVED: {
      const userId = action.payload;
      const user = api.getUser(userId);
      const { savedRecipes } = user;

      return [...savedRecipes];
    }

    case ACTION_TYPES.RECIPES_CREATE_COMMENT: {
      const { recipeId, userId, commentText } = action.payload;

      const recipes = api.getRecipesList();

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

      return [...recipesModified];
    }

    case ACTION_TYPES.RECIPES_CREATE: {
      const { data, userId, imageSrc } = action.payload;
      const recipes = api.getRecipesList();
      const lastRecipeId = recipes[recipes.length - 1].id;
      const newRecipeId = lastRecipeId + 1;

      const directionsArr = data.directions.split(',');
      const ingredientArr = data.ingredients.split(',');

      const newRecipe: Recipe = {
        id: newRecipeId,
        title: data.title,
        image: imageSrc,
        userId,
        description: data.description,
        directions: directionsArr,
        ingredients: ingredientArr,
        cookingTime: +data.cookingTime,
        views: 0,
        likes: 0,
        comments: [],
      };

      recipes.push(newRecipe);
      const usersRecipes = api.getUsersRecipes(userId);

      return [...usersRecipes];
    }

    case ACTION_TYPES.RECIPES_MODIFY: {
      const { data, recipeId, imageSrc, userId } = action.payload;
      const recipe = api.getRecipe(recipeId);

      recipe.title = data.title;
      recipe.description = data.description;
      recipe.image = imageSrc;
      recipe.directions = data.directions.split(',');
      recipe.ingredients = data.ingredients.split(',');

      const usersRecipes = api.getUsersRecipes(userId);

      return [...usersRecipes];
    }

    case ACTION_TYPES.RECIPES_DELETE: {
      const { recipeId, userId } = action.payload;
      const recipes = api.getRecipesList();
      const recipeIndex = recipes.findIndex((el) => el.id === recipeId);
      recipes.splice(recipeIndex, 1);

      const usersRecipes = api.getUsersRecipes(userId);

      return [...usersRecipes];
    }

    default:
      return state;
  }
}
