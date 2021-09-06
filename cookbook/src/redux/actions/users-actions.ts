import Api from '../../utils/api';
import ACTION_TYPES from '../../constants/action-types';

export const getUser = (id: number) => {

  return {
    type: ACTION_TYPES.USER_GET,
    payload: id,
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
