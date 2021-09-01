import recipes from '../constants/mockdata/recipes';

class FetchQuery {
  get() {
    return recipes;
  }
}

export default new FetchQuery();
