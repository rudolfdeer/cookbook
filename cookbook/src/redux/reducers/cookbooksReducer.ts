import { AnyAction } from 'redux';
import { Cookbook, Recipe, User } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';

const initialState = [] as Cookbook[];

type CookbooksReducer = typeof initialState;

export default function cookbooksReducer(
  state = initialState,
  action: AnyAction
): CookbooksReducer {
  switch (action.type) {
    case ACTION_TYPES.COOKBOOK_GET_ALL:
      return [...action.payload];

    case ACTION_TYPES.COOKBOOK_SORT:
      return [...action.payload];

    case ACTION_TYPES.COOKBOOK_FILTER:
      return [...action.payload];

    case ACTION_TYPES.USER_GET_COOKBOOKS:
      return [...action.payload];

    default:
      return state;
  }
}
