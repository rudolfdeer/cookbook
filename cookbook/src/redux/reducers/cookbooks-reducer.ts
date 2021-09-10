import { AnyAction } from 'redux';
import { Cookbook } from '../../constants/interfaces';
import ACTION_TYPES from '../../constants/action-types';

const initialState = {
  cookbooks: [] as Cookbook[],
};

type CookbooksReducer = typeof initialState;

export default function cookbooksReducer(state = initialState, action: AnyAction): CookbooksReducer {
  switch (action.type) {
    case ACTION_TYPES.COOKBOOK_GET_ALL:
      return {
        ...state,
        cookbooks: [...action.payload],
      };

    case ACTION_TYPES.COOKBOOK_SORT:
      return {
        ...state,
        cookbooks: [...action.payload],
      };

    case ACTION_TYPES.COOKBOOK_FILTER:
      return {
        ...state,
        cookbooks: [...action.payload],
      };

      // case ACTION_TYPES.COOKBOOK_DELETE: {
      //   const newList = state.cookbooks.filter((cookbook) => cookbook.id !== action.payload.id);
      //   return {
      //     ...state,
      //     cookbooks: newList,
      //   };
      // }

      // case ACTION_TYPES.COOKBOOK_UPDATE: {
      //   const newList = state.cookbooks.map((cookbook) => {
      //     if (cookbook.id === action.payload.id) {
      //       return {
      //         ...cookbook,
      //         ...action.payload.data,
      //       };
      //     }
      //     return cookbook;
      //   });
      //   return {
      //     ...state,
      //     cookbooks: newList,
      //   };
      // }

    default:
      return state;
  }
}
