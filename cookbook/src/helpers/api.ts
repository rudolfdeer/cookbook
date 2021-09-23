import { Cookbook, Recipe, User } from '../interfaces';
import FetchQuery from './fetchTool';

type LoginInfo = {
  email: string;
  password: string;
};

class Api {
  getRecipesList(): Recipe[] {
    const response = FetchQuery.getRecipesList();
    return response;
  }

  getCookbooksList(): Cookbook[] {
    const response = FetchQuery.getCookbooksList();
    return response;
  }

  logIn(loginInfo: LoginInfo): User {
    const response = FetchQuery.logIn(loginInfo);
    if (!response) {
      throw new Error('Incorrect email or password');
    }
    return response;
  }

  getUser(userId: number): User {
    const response = FetchQuery.getUser(userId);
    return response;
  }

  getAllUsers(): User[] {
    const response = FetchQuery.getAllUsers();
    return response;
  }

  updateUsers(newUser: User) {
    FetchQuery.updateUsers(newUser);
  }

  getUserName(userId: number): string {
    const response = FetchQuery.getUser(userId);
    if (!response) return '';
    const { name } = response;
    return name;
  }

  getUserPhoto(userId: number): string {
    const response = FetchQuery.getUser(userId);
    const { avatar } = response;
    return avatar;
  }

  getRecipe(recipeId: number): Recipe {
    const response = FetchQuery.getRecipesList().find(
      (el) => el.id === recipeId
    );
    return response;
  }

  getCookbook(cookbookId: number): Cookbook {
    const response = FetchQuery.getCookbooksList().find(
      (el) => el.id === cookbookId
    );
    return response;
  }

  getRecipesInCookbook(recipesIds: number[]): Recipe[] {
    const recipes = this.getRecipesList();
    const result = [] as Recipe[];
    recipesIds.forEach((id) => {
      const recipe = recipes.find((el) => el.id === id);
      result.push(recipe);
    });
    return result;
  }

  deleteUsersRecipes(userId: number) {
    const recipes = this.getRecipesList();

    let index = recipes.findIndex((el) => el.userId === userId);
    while (index > -1) {
      recipes.splice(index, 1);
      index = recipes.findIndex((el) => el.userId === userId);
    }
  }

  deleteUsersCookbooks(userId: number) {
    const cookbooks = this.getCookbooksList();

    let index = cookbooks.findIndex((el) => el.userId === userId);
    while (index > -1) {
      cookbooks.splice(index, 1);
      index = cookbooks.findIndex((el) => el.userId === userId);
    }
  }

  getUsersRecipes(userId: number) {
    const recipes = this.getRecipesList();
    const filteredRecipes = recipes.filter((el) => el.userId === userId);
    return filteredRecipes;
  }
}

export default new Api();
