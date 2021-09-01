import Api from '../../utils/api';
import ACTION_TYPES from '../../constants/action-types';

export const getRecipes = () => {
  const resData = Api.getRecipesList();

  return {
    type: ACTION_TYPES.RECIPE_GET_ALL,
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
