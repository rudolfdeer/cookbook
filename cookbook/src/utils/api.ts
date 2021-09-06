import FetchQuery from './fetch-tool';

class Api {
  getRecipesList() {
    const response = FetchQuery.get('recipes');
    return response;
  }

  getCookbooksList() {
    const response = FetchQuery.get('cookbooks');
    return response;
  }

  getUser(id: number) {
    const response = FetchQuery.getUserById(id);
    return response;
  }
}

export default new Api();
