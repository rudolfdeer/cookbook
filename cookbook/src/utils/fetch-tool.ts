import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';
import { Cookbook, Recipe } from '../constants/interfaces';

class FetchQuery {
  getRecipesList(): Recipe[] {
    return recipes;
  }

  getCookbooksList(): Cookbook[] {
    return cookbooks;
  }

  getUserById(userId: number) {
    return users.find((el) => el.id === userId);
  }
}

export default new FetchQuery();
