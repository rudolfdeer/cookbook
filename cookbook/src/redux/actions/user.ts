import { AnyAction } from 'redux';
import Api from '../../helpers/api';
import ACTION_TYPES from '../../constants/actionTypes';
import { Recipe } from '../../interfaces';

type LoginInfo = {
  email: string;
  password: string;
};

export const logIn = (loginInfo: LoginInfo): AnyAction => {
  const user = Api.logIn(loginInfo);
  user.isLoggedIn = true;

  return {
    type: ACTION_TYPES.USER_LOG_IN,
    payload: user,
  };
};

export const saveToUsersRecipes = (
  recipe: Recipe,
  userId: number
): AnyAction => {
  const user = Api.getUser(userId);
  const { savedRecipes } = user;
  const newSavedRecipes = savedRecipes.concat(recipe);
  user.savedRecipes = newSavedRecipes;

  return {
    type: ACTION_TYPES.USER_SAVE_RECIPE,
    payload: user,
  };
};
