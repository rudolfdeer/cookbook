import { Cookbook, Recipe, User } from '../interfaces';
import FetchQuery from './fetch-tool';

type LoginInfo = {
  email: string;
  password: string;
};

class Api {
  getRecipesList(): Recipe[] {
    const response = FetchQuery.getRecipesList();
    return response;
  }

  getCookbooksList(): Cookbook[] {
    const response = FetchQuery.getCookbooksList();
    return response;
  }

  logIn(loginInfo: LoginInfo): User {
    const response = FetchQuery.logIn(loginInfo);
    if (!response) {
      return null;
    }
    return response;
  }

  getUser(userId: number): User {
    const response = FetchQuery.getUser(userId);
    return response;
  }
}

export default new Api();
