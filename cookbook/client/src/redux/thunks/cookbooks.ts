import { Dispatch } from 'redux';
import api from '../../helpers/api';
import cookbookActions from '../actions/cookbookActions';

interface CookbookValues {
  title: string;
  description: string;
  tags?: string[];
  recipesIds: number[];
  views?:number;
  likeUserIds?: number[];
};

export const getAllCookbooks = () => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  dispatch(cookbookActions.getAll(cookbooks));
};

export const sortCookbooks = (order: string) => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  dispatch(cookbookActions.sort(cookbooks, order));
};

export const filterCookbooks = (tags: string[], userId: number) => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  dispatch(cookbookActions.filter(cookbooks, tags, userId));
};

export const getUsersCreatedCookbooks = (userId: number) => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  dispatch(cookbookActions.getUsersCreated(cookbooks, userId));
};

export const getUsersSavedCookbooks = () => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.getLoggedInUser();

  dispatch(cookbookActions.getUsersSaved(user));
};

export const createComment = (cookbookId: number, text: string) => async (dispatch: Dispatch): Promise<void> => {
  await api.commentCookbook(cookbookId, text);

  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.createComment(cookbooks));
};

export const createCookbook = (data: CookbookValues, imageSrc: string, userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.createCookbook(data, imageSrc);

  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.create(cookbooks, userId));
};

export const updateCookbook = (
  recipeId: number,
  data: CookbookValues,
  imageSrc: string,
  userId: number,
) => async (dispatch: Dispatch): Promise<void> => {
  await api.updateCookbook(recipeId, data, imageSrc);
  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.update(cookbooks, userId));
}

export const deleteCookbook = (cookbookId: number, userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.deleteCookbook(cookbookId);
  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.delete(cookbooks, userId));
}

export const hideUsersCookbooks = () => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  const user = await api.getLoggedInUser();

  dispatch(cookbookActions.delete(cookbooks, user.id));
}

//
export const likeCookbook = () => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  const user = await api.getLoggedInUser();

  dispatch(cookbookActions.delete(cookbooks, user.id));
}