import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';
import { Cookbook, Recipe } from '../constants/types';

class FetchQuery {
  get(url: string) {
    switch (url) {
      case 'recipes':
        return recipes;

      case 'cookbooks':
        return cookbooks;

      default:
        return [];
    }
  }

  getUserById(userId: number) {
    return users.find((el) => el.id === userId);
  }
}

export default new FetchQuery();
