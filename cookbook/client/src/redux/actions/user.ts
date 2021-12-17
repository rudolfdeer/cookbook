import ACTION_TYPES from '../../constants/actionTypes';
import { IUser } from '../../interfaces';

class UserActions {
  signIn(user: IUser) {
    return {
      type: ACTION_TYPES.USER_SIGN_IN,
      payload: {
        user,
      },
    };
  }

  signUp(user: IUser) {
    return {
      type: ACTION_TYPES.USER_SIGN_UP,
      payload: {
        user,
      },
    };
  }

  delete() {
    return {
      type: ACTION_TYPES.USER_DELETE,
    };
  }

  update(user: IUser) {
    return {
      type: ACTION_TYPES.USER_UPDATE,
      payload: {
        user,
      },
    };
  }

  logOut() {
    return {
      type: ACTION_TYPES.USER_LOG_OUT,
    };
  }
}

export default new UserActions();
