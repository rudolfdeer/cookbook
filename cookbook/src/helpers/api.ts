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

  getUser(loginInfo: LoginInfo): User {
    const response = FetchQuery.getUser(loginInfo);
    if (!response) {
      return null;
    }
    return response;
  }
}

export default new Api();
