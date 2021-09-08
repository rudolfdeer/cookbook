import Api from '../../utils/api';
import ACTION_TYPES from '../../constants/action-types';
import { Cookbook, Recipe, User } from '../../constants/interfaces';

type ReduxAction = {
  type: string,
  payload: Cookbook[] | Recipe[] | User[],
};

export const getRecipes = () => {
  const resData = Api.getRecipesList();

  return {
    type: ACTION_TYPES.RECIPE_GET_ALL,
    payload: resData,
  };
};

export const sortRecipes = (order: string) => {
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
    default:
      resData = currentData;
  }

  return {
    type: ACTION_TYPES.RECIPE_SORT,
    payload: resData,
  };
};

export const filterRecipes = (cookingTime: number): ReduxAction => {
  const currentData = Api.getRecipesList();
  const resData = currentData.filter((recipe) => recipe.cookingTime <= cookingTime);

  return {
    type: ACTION_TYPES.RECIPE_FILTER,
    payload: resData,
  };
};


// export const deleteRecipe = (id: number) => ({
//   type: 'recipes/delete',
//   payload: id,
// });

// export const updateRecipe = (id: number, data) => ({
//   type: 'recipes/update',
//   payload: {
//     id,
//     data,
//   },
// });

// export const createRecipe = (data) => ({
//   type: 'recipes/create',
//   payload: {
//     data,
//   },
// });
