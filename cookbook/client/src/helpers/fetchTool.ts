import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';
import { Cookbook, Recipe, User } from '../interfaces';

const base = 'http://127.0.0.1:3000/api';
const cookbooksUrl = `${base}/cookbooks/`;

type LoginInfo = {
  email: string;
  password: string;
};

class FetchQuery {
  getRecipesList(): Recipe[] {
    return recipes;
  }

  getCookbooksList(): Cookbook[] {
    return cookbooks;
  }

  logIn(loginInfo: LoginInfo): User {
    return users.find(
      (el) => el.email === loginInfo.email && el.password === loginInfo.password
    );
  }

  getUser(userId: number): User {
    return users.find((user) => user.id === userId);
  }

  getAllUsers(): User[] {
    return users;
  }

  updateUsers(newUser: User) {
    users.push(newUser);
  }

  // async getCookbooksList(): Promise<Cookbook[]> {
  //   const response = await fetch(cookbooksUrl);
  //   const result = await response.json();
  //   console.log(result);
  //   return result;
  // }
}

export default new FetchQuery();
