import { AnyAction } from 'redux';
import ACTION_TYPES from '../../constants/actionTypes';

export const getAllCookbooks = (): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_GET_ALL,
});

export const filterCookbooks = (tags: string[]): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_FILTER,
  payload: tags,
});

export const sortCookbooks = (order: string): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_SORT,
  payload: order,
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
  commentText: string
): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_CREATE_COMMENT,
  payload: {
    cookbookId,
    userId,
    commentText,
  },
});

type NewCookbookValues = {
  title: string;
  description: string;
  recipesIds: number[];
};

export const createCookbook = (
  data: NewCookbookValues,
  userId: number,
  imageSrc: string
): AnyAction => ({
  type: ACTION_TYPES.COOKBOOKS_CREATE,
  payload: {
    data,
    userId,
    imageSrc,
  },
});
