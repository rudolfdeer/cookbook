import { AnyAction } from 'redux';
import { Cookbook, Recipe, User } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';
import api from '../../helpers/api';

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

    case ACTION_TYPES.USER_LOG_IN: {
      const loginInfo = action.payload;
      const user = api.logIn(loginInfo);
      user.isLoggedIn = true;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_LOG_OUT: {
      const userId = action.payload;
      const user = api.getUser(userId);
      user.isLoggedIn = false;

      return null;
    }

    case ACTION_TYPES.USER_SAVE_RECIPE: {
      const { recipeId, userId } = action.payload;

      const user = api.getUser(userId);
      const { savedRecipes } = user;
      const recipe = api.getRecipesList().find((el) => el.id === recipeId);
      const newSavedRecipes = savedRecipes.concat(recipe);
      user.savedRecipes = newSavedRecipes;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_SAVE_COOKBOOK: {
      const { cookbookId, userId } = action.payload;

      const user = api.getUser(userId);
      const { savedCookbooks } = user;
      const cookbook = api
        .getCookbooksList()
        .find((el) => el.id === cookbookId);
      const newSavedCookbooks = savedCookbooks.concat(cookbook);
      user.savedCookbooks = newSavedCookbooks;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_CHANGE_BIO: {
      const { userId, newBio } = action.payload;
      const user = api.getUser(userId);
      user.bio = newBio;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_CHANGE_NAME: {
      const { userId, newName } = action.payload;
      const user = api.getUser(userId);
      user.name = newName;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_CHANGE_EMAIL: {
      const { userId, newEmail } = action.payload;
      const user = api.getUser(userId);
      user.email = newEmail;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_CHANGE_PASSWORD: {
      const { userId, newPassword } = action.payload;
      const user = api.getUser(userId);
      user.password = newPassword;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_CHANGE_PHOTO: {
      const { userId, newAvatar } = action.payload;
      const user = api.getUser(userId);
      user.avatar = newAvatar;

      return {
        ...state,
        ...user,
      };
    }

    case ACTION_TYPES.USER_CREATE: {
      const { email, password } = action.payload;

      const allUsers = api.getAllUsers();
      const newId = allUsers[allUsers.length - 1].id + 1;

      const newUser = {
        id: newId,
        name: 'User User',
        avatar: 'images/user1.png',
        email,
        password,
        bio: 'Your bio here',
        isLoggedIn: true,
        savedRecipes: [] as Recipe[],
        savedCookbooks: [] as Cookbook[],
      };

      api.updateUsers(newUser);

      return {
        ...state,
        ...newUser,
      };
    }

    case ACTION_TYPES.USER_DELETE: {
      const userId = action.payload;
      api.deleteUsersRecipes(userId);
      api.deleteUsersCookbooks(userId);

      const users = api.getAllUsers();
      const userIndex = users.findIndex((el) => el.id === userId);
      users.splice(userIndex, 1);

      return null;
    }

    default:
      return state;
  }
}
