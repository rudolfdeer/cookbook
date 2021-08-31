import FetchQuery from '../utils/fetch-tool';

class RecepiesApi {
  getRecepiesList() {
    const response = FetchQuery.get();
    return response;
  }
}

export default new RecepiesApi();
