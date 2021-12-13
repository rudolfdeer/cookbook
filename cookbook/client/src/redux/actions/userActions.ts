import ACTION_TYPES from '../../constants/actionTypes';
import { IUser } from '../../interfacesServer';

export type AuthValues = {
  email: string;
  password: string;
};

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
}

export default new UserActions();
