import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';

class FetchQuery {
  get(url: string) {
    switch (url) {
      case 'recipes':
        return recipes;

      case 'cookbooks':
        return cookbooks;

      case 'users':
        return users;

      default:
        return [];
    }
  }
}

export default new FetchQuery();
