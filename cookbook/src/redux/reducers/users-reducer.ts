import { AnyAction } from 'redux';
import { User } from '../../constants/types';
import ACTION_TYPES from '../../constants/action-types';

const initialState = {
  user: [] as User[],
};

type UsersReducer = typeof initialState;

export default function usersReducer(state = initialState, action: AnyAction): UsersReducer {
  switch (action.type) {
    case ACTION_TYPES.USER_GET: 
      
    
      return {
        ...state,
        user: action.payload,
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