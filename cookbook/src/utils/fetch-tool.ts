import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';
import { Cookbook, Recipe } from '../constants/interfaces';

type loginInfo = {
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

  getUser(loginInfo: loginInfo) {
    return users.find((el) => el.email === loginInfo.email && el.password === loginInfo.password);
  }
}

export default new FetchQuery();
