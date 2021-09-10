import { AnyAction } from 'redux';
import { User } from '../../constants/interfaces';
import ACTION_TYPES from '../../constants/action-types';

const initialState = {
  user: null as User,
};

type UserReducer = typeof initialState;

export default function userReducer(state = initialState, action: AnyAction): UserReducer {
  switch (action.type) {
    case ACTION_TYPES.USER_LOG_IN:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
