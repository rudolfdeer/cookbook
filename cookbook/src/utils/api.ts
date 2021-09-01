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
}

export default new Api();
