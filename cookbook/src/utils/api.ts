import { Cookbook, Recipe } from '../constants/interfaces';
import FetchQuery from './fetch-tool';

class Api {
  getRecipesList() {
    const response = FetchQuery.getRecipesList();
    return response;
  }

  getCookbooksList() {
    const response = FetchQuery.getCookbooksList();
    return response;
  }

  getUser(id: number) {
    const response = FetchQuery.getUserById(id);
    return response;
  }
}

export default new Api();
