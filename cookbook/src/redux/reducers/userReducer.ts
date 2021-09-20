import { AnyAction } from 'redux';
import { User } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';

const initialState: null | User = null;

type UserReducer = typeof initialState;

export default function userReducer(
  state = initialState,
  action: AnyAction,
): UserReducer {
  switch (action.type) {
    case ACTION_TYPES.USER_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPES.USER_LOG_OUT:
      return null;

    default:
      return state;
  }
}
