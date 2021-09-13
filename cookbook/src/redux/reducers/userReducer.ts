import { AnyAction } from 'redux';
import { User } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';

const initialState = null as User;

type UserReducer = typeof initialState;

export default function userReducer(
  state = initialState,
  action: AnyAction
): UserReducer {
  switch (action.type) {
    case ACTION_TYPES.USER_LOG_IN:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPES.USER_SAVE_RECIPE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
