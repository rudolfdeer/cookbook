import { AnyAction } from 'redux';
import Api from '../../helpers/api';
import ACTION_TYPES from '../../constants/actionTypes';

type LoginInfo = {
  email: string;
  password: string;
};

export const logIn = (loginInfo: LoginInfo): AnyAction => {
  const user = Api.getUser(loginInfo);
  user.isLoggedIn = true;

  return {
    type: ACTION_TYPES.USER_LOG_IN,
    payload: user,
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
