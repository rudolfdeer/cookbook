import ACTION_TYPES from '../../constants/actionTypes';
import { User } from '../../interfaces';

class UserActions {
  signIn(user: User) {
    return {
      type: ACTION_TYPES.USER_SIGN_IN,
      payload: {
        user,
      },
    };
  }

  signUp(user: User) {
    return {
      type: ACTION_TYPES.USER_SIGN_UP,
      payload: {
        user,
      },
    };
  }

  signOut() {
    return {
      type: ACTION_TYPES.USER_SIGN_OUT,
    };
  }

  delete() {
    return {
      type: ACTION_TYPES.USER_DELETE,
    };
  }

  update(user: User) {
    return {
      type: ACTION_TYPES.USER_UPDATE,
      payload: {
        user,
      },
    };
  }

  updatePhoto(user: User) {
    return {
      type: ACTION_TYPES.USER_UPDATE_PHOTO,
      payload: {
        user,
      },
    };
  }
}

export default new UserActions();
