import recipes from '../constants/mockdata/recipes';
import cookbooks from '../constants/mockdata/cookbooks';
import users from '../constants/mockdata/users';
import { Cookbook, Recipe, User } from '../interfaces';

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
}

export default new FetchQuery();
