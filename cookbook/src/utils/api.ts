import FetchQuery from './fetch-tool';

type LoginInfo = {
  email: string;
  password: string;
};
class Api {
  getRecipesList() {
    const response = FetchQuery.getRecipesList();
    return response;
  }

  getCookbooksList() {
    const response = FetchQuery.getCookbooksList();
    return response;
  }

  getUser(loginInfo: LoginInfo) {
    const response = FetchQuery.getUser(loginInfo);
    if (!response) {
      return null;
    }
    return response;
  }
}

export default new Api();
