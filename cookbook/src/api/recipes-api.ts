import FetchQuery from '../utils/fetch-tool';

class RecipesApi {
  getRecipesList() {
    const response = FetchQuery.get();
    return response;
  }
}

export default new RecipesApi();
