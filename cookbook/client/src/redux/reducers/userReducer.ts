import { AnyAction } from 'redux';
import ACTION_TYPES from '../../constants/actionTypes';
import { IUser } from '../../interfacesServer';

const initialState: null | IUser = null;

type UserReducer = typeof initialState;

export default function userReducer(
  state = initialState,
  action: AnyAction,
): UserReducer {
  switch (action.type) {
    // case ACTION_TYPES.USER_UPDATE:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };

    case ACTION_TYPES.USER_SIGN_IN: {
      const { user } = action.payload;
      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_LOG_OUT: {
      return null;
    }

    // case ACTION_TYPES.USER_SAVE_RECIPE: {
    //   const { recipeId, userId } = action.payload;

    //   const user = api.getUserById(userId);
    //   const { savedRecipes } = user;
    //   const recipe = api.getRecipesList().find((el) => el.id === recipeId);
    //   const newSavedRecipes = savedRecipes.concat(recipe);
    //   user.savedRecipes = newSavedRecipes;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    // case ACTION_TYPES.USER_SAVE_COOKBOOK: {
    //   const { cookbookId, userId } = action.payload;

    //   const user = api.getUser(userId);
    //   const { savedCookbooks } = user;
    //   const cookbook = api
    //     .getCookbooksList()
    //     .find((el) => el.id === cookbookId);
    //   const newSavedCookbooks = savedCookbooks.concat(cookbook);
    //   user.savedCookbooks = newSavedCookbooks;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    // case ACTION_TYPES.USER_CHANGE_BIO: {
    //   const { userId, newBio } = action.payload;
    //   const user = api.getUser(userId);
    //   user.bio = newBio;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    // case ACTION_TYPES.USER_CHANGE_NAME: {
    //   const { userId, newName } = action.payload;
    //   const user = api.getUser(userId);
    //   user.name = newName;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    // case ACTION_TYPES.USER_CHANGE_EMAIL: {
    //   const { userId, newEmail } = action.payload;
    //   const user = api.getUser(userId);
    //   user.email = newEmail;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    // case ACTION_TYPES.USER_CHANGE_PASSWORD: {
    //   const { userId, newPassword } = action.payload;
    //   const user = api.getUser(userId);
    //   user.password = newPassword;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    // case ACTION_TYPES.USER_CHANGE_PHOTO: {
    //   const { userId, newAvatar } = action.payload;
    //   const user = api.getUser(userId);
    //   user.avatar = newAvatar;

    //   return {
    //     ...state,
    //     ...user,
    //   };
    // }

    case ACTION_TYPES.USER_SIGN_UP: {
      const { user } = action.payload;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_DELETE: {
      return null;
    }

    default:
      return state;
  }
}
