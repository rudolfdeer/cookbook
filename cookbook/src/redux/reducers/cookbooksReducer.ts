import { AnyAction } from 'redux';
import { Cookbook } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';

const initialState = [] as Cookbook[];

type CookbooksReducer = typeof initialState;

export default function cookbooksReducer(
  state = initialState,
  action: AnyAction
): CookbooksReducer {
  switch (action.type) {
    case ACTION_TYPES.COOKBOOKS_GET:
      return [...action.payload];

    default:
      return state;
  }
}
