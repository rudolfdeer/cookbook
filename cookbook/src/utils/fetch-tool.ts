import recepies from '../constants/mockdata/recepies';

class FetchQuery {
  get() {
    return recepies;
  }
}

export default new FetchQuery();
