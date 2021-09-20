import { AnyAction } from 'redux';
import { Recipe } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';

const initialState = [] as Recipe[];

type RecipesReducer = typeof initialState;

export default function recipesReducer(
  state = initialState,
  action: AnyAction,
): RecipesReducer {
  switch (action.type) {
    case ACTION_TYPES.RECIPES_GET:
      return [...action.payload];

    default:
      return state;
  }
}
