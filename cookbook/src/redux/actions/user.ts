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
  recipeId: number,
  userId: number
): AnyAction => {
  const user = Api.getUser(userId);
  const { savedRecipes } = user;
  const recipe = Api.getRecipesList().find((el) => el.id === recipeId);
  const newSavedRecipes = savedRecipes.concat(recipe);
  user.savedRecipes = newSavedRecipes;

  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const saveToUsersCookbooks = (cookbookId: number, userId: number) => {
  const user = Api.getUser(userId);
  const { savedCookbooks } = user;
  const cookbook = Api.getCookbooksList().find((el) => el.id === cookbookId);
  const newSavedCookbooks = savedCookbooks.concat(cookbook);
  user.savedCookbooks = newSavedCookbooks;

  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const changeUserBio = (userId: number, newBio: string) => {
  const user = Api.getUser(userId);
  user.bio = newBio;

  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const changeUserName = (userId: number, newName: string) => {
  const user = Api.getUser(userId);
  user.username = newName;

  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const changeUserEmail = (userId: number, newEmail: string) => {
  const user = Api.getUser(userId);
  user.email = newEmail;

  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const changeUserPassword = (userId: number, newPassword: string) => {
  const user = Api.getUser(userId);
  user.password = newPassword;

  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};
