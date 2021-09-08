import { AnyAction } from 'redux';
import { Recipe } from '../../constants/interfaces';
import ACTION_TYPES from '../../constants/action-types';

const initialState = {
  recipes: [] as Recipe[],
};

type RecipesReducer = typeof initialState;

export default function recipesReducer(state = initialState, action: AnyAction): RecipesReducer {
  switch (action.type) {
    case ACTION_TYPES.RECIPE_GET_ALL:
      return {
        ...state,
        recipes: [...action.payload],
      };

    case ACTION_TYPES.RECIPE_SORT:
      return {
        ...state,
        recipes: [...action.payload],
      };

    case ACTION_TYPES.RECIPE_FILTER:
      return {
        ...state,
        recipes: [...action.payload],
      };

    // case ACTION_TYPES.RECIPE_DELETE: {
    //   const newList = state.recipes.filter((recipe) => recipe.id !== action.payload.id);
    //   return {
    //     ...state,
    //     recipes: newList,
    //   };
    // }

    // case ACTION_TYPES.RECIPE_UPDATE: {
    //   const newList = state.recipes.map((recipe) => {
    //     if (recipe.id === action.payload.id) {
    //       return {
    //         ...recipe,
    //         ...action.payload.data,
    //       };
    //     }
    //     return recipe;
    //   });
    //   return {
    //     ...state,
    //     recipes: newList,
    //   };
    // }

    default:
      return state;
  }
}