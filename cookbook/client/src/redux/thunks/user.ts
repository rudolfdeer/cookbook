import { Dispatch } from 'redux';
import api, { UserValues } from '../../helpers/api';
import { IUser } from '../../interfacesServer';
import userActions, { AuthValues } from '../actions/userActions';

export const signIn = (data: AuthValues) => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.signIn(data);

  dispatch(userActions.signIn(user));
};

export const signUp = (data: AuthValues) => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.signUp(data);

  dispatch(userActions.signUp(user));
};

export const deleteUser = () => async (dispatch: Dispatch): Promise<void> => {
  await api.deleteUser();

  dispatch(userActions.delete());
};

export const updateUser = (data: UserValues) => async (dispatch: Dispatch): Promise<void> => {
  await api.updateUser(data);
  const user = await api.getLoggedInUser();

  dispatch(userActions.update(user));
};

export const changePassword = (password: string) => async (dispatch: Dispatch): Promise<void> => {
  await api.changePassword(password);
  const user = await api.getLoggedInUser();

  dispatch(userActions.update(user));
};

export const changeEmail = (email: string) => async (dispatch: Dispatch): Promise<void> => {
  await api.changeEmail(email);
  const user = await api.getLoggedInUser();

  dispatch(userActions.update(user));
};

export const saveToUsersCookbooks = (cookbookId: number) => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.getLoggedInUser() as IUser;
  const { Cookbook_Saveds } = user;
  const savedCookbooksIds = Cookbook_Saveds.map((el) => el.CookbookId);
  if (savedCookbooksIds.indexOf(cookbookId) > -1) {
    dispatch(userActions.update(user));
  } else {
    savedCookbooksIds.push(cookbookId);
    await api.updateUser({ savedCookbooksIds });
    const updatedUser = await api.getLoggedInUser() as IUser;
    dispatch(userActions.update(updatedUser));
  }
};

export const saveToUsersRecipes = (recipeId: number) => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.getLoggedInUser() as IUser;
  const { Recipe_Saveds } = user;
  const savedRecipesIds = Recipe_Saveds.map((el) => el.RecipeId);
  if (savedRecipesIds.indexOf(recipeId) > -1) {
    dispatch(userActions.update(user));
  } else {
    savedRecipesIds.push(recipeId);
    await api.updateUser({ savedRecipesIds });
    const updatedUser = await api.getLoggedInUser() as IUser;
    dispatch(userActions.update(updatedUser));
  }
};

export const getLoggedInUser = () => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.getLoggedInUser();

  dispatch(userActions.update(user));
};