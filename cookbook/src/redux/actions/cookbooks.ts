import { AnyAction } from 'redux';
import ACTION_TYPES from '../../constants/actionTypes';

export const getAllCookbooks = (): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_GET_ALL,
});

export const filterCookbooks = (tags: string[], userId: number): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_FILTER,
  payload: {
    tags,
    userId,
  },
});

export const sortCookbooks = (order: string): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_SORT,
  payload: order,
});

export const hideUsersCookbooks = (userId: string): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_HIDE_USERS_CREATED,
  payload: userId,
});

export const getUsersCreatedCookbooks = (userId: number): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_GET_USERS_CREATED,
  payload: userId,
});

export const getUsersSavedCookbooks = (userId: number): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_GET_USERS_SAVED,
  payload: userId,
});

export const createComment = (
  cookbookId: number,
  userId: number,
  commentText: string,
): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_CREATE_COMMENT,
  payload: {
    cookbookId,
    userId,
    commentText,
  },
});

export type CookbookValues = {
  title: string;
  description: string;
  recipesIds: number[];
};

export const createCookbook = (
  data: CookbookValues,
  userId: number,
  imageSrc: string,
): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_CREATE,
  payload: {
    data,
    userId,
    imageSrc,
  },
});

export const modifyCookbook = (
  data: CookbookValues,
  cookbookId: number,
  imageSrc: string,
  userId: number,
): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_MODIFY,
  payload: {
    data,
    cookbookId,
    imageSrc,
    userId,
  },
});

export const deleteCookbook = (
  cookbookId: number,
  userId: number,
): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_DELETE,
  payload: {
    cookbookId,
    userId,
  },
});
