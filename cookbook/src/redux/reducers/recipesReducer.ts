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
    case ACTION_TYPES.RECIPE_GET_ALL:
      return [...action.payload];

    case ACTION_TYPES.RECIPE_SORT:
      return [...action.payload];

    case ACTION_TYPES.RECIPE_FILTER:
      return [...action.payload];

    case ACTION_TYPES.USER_GET_RECIPES:
      return [...action.payload];

    default:
      return state;
  }
}
