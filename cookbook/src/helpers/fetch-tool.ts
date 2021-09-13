import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';
import { Cookbook, Recipe, User } from '../interfaces';

type LoginInfo = {
  email: string;
  password: string;
};

class FetchQuery {
  getRecipesList(): Recipe[] {
    return recipes;
  }

  getCookbooksList(): Cookbook[] {
    return cookbooks;
  }

  getUser(loginInfo: LoginInfo): User {
    return users.find((el) => el.email === loginInfo.email && el.password === loginInfo.password);
  }
}

export default new FetchQuery();