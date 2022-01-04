import { Dispatch } from 'redux';
import api from '../../helpers/api';
import { ICookbookRequestBody } from '../../interfaces';
import cookbookActions from '../actions/cookbook';

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
  const cookbooks = await api.getUsersCreatedCookbooks(userId);
  dispatch(cookbookActions.getCreatedCookbooks(cookbooks));
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

export const createCookbook = (data: FormData, userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.createCookbook(data);

  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.create(cookbooks, userId));
};

export const modifyCookbook = (
  cookbookId: number,
  data: ICookbookRequestBody,
  userId: number,
) => async (dispatch: Dispatch): Promise<void> => {
  await api.updateCookbook(cookbookId, data);
  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.update(cookbooks, userId));
};

export const updateCookbooksImage = (
  cookbookId: number,
  data: FormData,
  userId: number,
) => async (dispatch: Dispatch): Promise<void> => {
  await api.updateCookbooksImage(cookbookId, data);
  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.update(cookbooks, userId));
};

export const deleteCookbook = (cookbookId: number, userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.deleteCookbook(cookbookId);
  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.delete(cookbooks, userId));
};

export const hideUsersCookbooks = () => async (dispatch: Dispatch): Promise<void> => {
  const cookbooks = await api.getAllCookbooks();
  const user = await api.getLoggedInUser();

  dispatch(cookbookActions.delete(cookbooks, user.id));
};

export const likeCookbook = (cookbookId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.likeCookbook(cookbookId);

  const cookbooks = await api.getAllCookbooks();

  dispatch(cookbookActions.like(cookbooks));
};
