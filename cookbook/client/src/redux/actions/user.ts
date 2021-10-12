import { AnyAction } from 'redux';
import ACTION_TYPES from '../../constants/actionTypes';

export type LoginInfo = {
  email: string;
  password: string;
};

export const logIn = (loginInfo: LoginInfo): AnyAction => ({
  type: ACTION_TYPES.USER_LOG_IN,
  payload: loginInfo,
});

export const logOut = (userId: number): AnyAction => ({
  type: ACTION_TYPES.USER_LOG_OUT,
  payload: userId,
});

export const saveToUsersRecipes = (
  recipeId: number,
  userId: number,
): AnyAction => ({
  type: ACTION_TYPES.USER_SAVE_RECIPE,
  payload: {
    recipeId,
    userId,
  },
});

export const saveToUsersCookbooks = (
  cookbookId: number,
  userId: number,
): AnyAction => ({
  type: ACTION_TYPES.USER_SAVE_COOKBOOK,
  payload: {
    cookbookId,
    userId,
  },
});

export const changeUserBio = (userId: number, newBio: string): AnyAction => ({
  type: ACTION_TYPES.USER_CHANGE_BIO,
  payload: {
    userId,
    newBio,
  },
});

export const changeUserName = (userId: number, newName: string): AnyAction => ({
  type: ACTION_TYPES.USER_CHANGE_NAME,
  payload: {
    userId,
    newName,
  },
});

export const changeUserEmail = (
  userId: number,
  newEmail: string,
): AnyAction => ({
  type: ACTION_TYPES.USER_CHANGE_EMAIL,
  payload: {
    userId,
    newEmail,
  },
});

export const changeUserPassword = (
  userId: number,
  newPassword: string,
): AnyAction => ({
  type: ACTION_TYPES.USER_CHANGE_PASSWORD,
  payload: {
    userId,
    newPassword,
  },
});

export const createUser = (email: string, password: string): AnyAction => ({
  type: ACTION_TYPES.USER_CREATE,
  payload: {
    email,
    password,
  },
});

export const updateUserPhoto = (
  userId: number,
  newAvatar: string,
): AnyAction => ({
  type: ACTION_TYPES.USER_CHANGE_PHOTO,
  payload: {
    userId,
    newAvatar,
  },
});

export const deleteUser = (userId: number): AnyAction => ({
  type: ACTION_TYPES.USER_DELETE,
  payload: userId,
});
