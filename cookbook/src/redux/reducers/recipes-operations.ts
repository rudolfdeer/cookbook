import { AnyAction } from 'redux';
import { Recipe } from '../../constants/types';
import { Cookbook } from '../../constants/types';
import { User } from '../../constants/types';

const initialState = {
  recipes: [] as Recipe[],
  cookbooks: [] as Cookbook[],
  users: [] as User[],
};

type RecipesOperationsReducer = typeof initialState;

export default function recipesOperations(state = initialState, action: AnyAction): RecipesOperationsReducer {
  switch (action.type) {
    case 'recipes/get':
      return {
        ...initialState,
        recipes: action.payload,
      };
    default:
      return state;
  }
}