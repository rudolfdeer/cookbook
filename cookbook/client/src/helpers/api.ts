import { Cookbook, Recipe, User } from '../interfaces';
import { IUser } from '../interfacesServer';
import { AuthValues } from '../redux/actions/userActions';
import FetchQuery from './fetchTool';

export interface RecipeValues {
  title: string;
  description: string;
  ingredients: string;
  directions: string;
  time?: number;
  views?:number;
  likeUserIds?: number[];
};

export interface CookbookValues {
  title: string;
  description: string;
  recipesIds: number[];
  tags?: string[];
  views?: number;
  likeUserIds?: number[];
}

const base = 'http://127.0.0.1:3000/api/';
const cookbooksUrl = `${base}cookbooks/`;
const recipesUrl = `${base}recipes/`;
const userUrl = `${base}user/`;

class Api {
  getRecipesList(): Recipe[] {
    const response = FetchQuery.getRecipesList();
    return response;
  }

  getCookbooksList(): Cookbook[] {
    const response = FetchQuery.getCookbooksList();
    return response;
  }


  // logIn(loginInfo: LoginInfo): User {
  //   const response = FetchQuery.logIn(loginInfo);
  //   if (!response) {
  //     throw new Error('Incorrect email or password');
  //   }
  //   return response;
  // }

  getUser(userId: number): User {
    const response = FetchQuery.getUser(userId);
    return response;
  }

  async getUserById(userId: number) {
    const response = await fetch(`${userUrl}:${userId}`);
    const result = await response.json();
    return result;
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

  // getRecipesInCookbook(recipesIds: number[]): Recipe[] {
  //   const recipes = this.getRecipesList();
  //   const result = [] as Recipe[];
  //   recipesIds.forEach((id) => {
  //     const recipe = recipes.find((el) => el.id === id);
  //     result.push(recipe);
  //   });
  //   return result;
  // }

  // deleteUsersRecipes(userId: number) {
  //   const recipes = this.getRecipesList();

  //   let index = recipes.findIndex((el) => el.userId === userId);
  //   while (index > -1) {
  //     recipes.splice(index, 1);
  //     index = recipes.findIndex((el) => el.userId === userId);
  //   }
  // }

  // deleteUsersCookbooks(userId: number) {
  //   const cookbooks = this.getCookbooksList();

  //   let index = cookbooks.findIndex((el) => el.userId === userId);
  //   while (index > -1) {
  //     cookbooks.splice(index, 1);
  //     index = cookbooks.findIndex((el) => el.userId === userId);
  //   }
  // }

  getUsersRecipes(userId: number) {
    const recipes = this.getRecipesList();
    const filteredRecipes = recipes.filter((el) => el.userId === userId);
    return filteredRecipes;
  }

  getUsersCookbooks(userId: number) {
    const cookbooks = this.getCookbooksList();
    const filteredCookbooks = cookbooks.filter((el) => el.userId === userId);
    return filteredCookbooks;
  }

  async getAllRecipes() {
    const response = await fetch(`${recipesUrl}`);
    const result = await response.json();
    return result;
  }

  async createRecipe(data: RecipeValues, imageSrc: string) {
    const directionsArr = data.directions.split(',');
    const ingredientArr = data.ingredients.split(',');

    const body = {
      title: data.title,
      image: imageSrc,
      description: data.description,
      directions: directionsArr,
      ingredients: ingredientArr,
      time: +data.time,
    };

    const response = await fetch(`${recipesUrl}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async getLoggedInUser() {
    const response = await fetch(`${userUrl}`);
    const result = await response.json();
    return result;
  }

  async commentRecipe(recipeId: number, text: string) {
    const body = {
      text,
      date: new Date().toString(),
    };
    const response = await fetch(`${recipesUrl}:${recipeId}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  }

  async updateRecipe(recipeId: number, data: RecipeValues, imageSrc: string) {
    const {
      title,
      description,
      directions,
      ingredients,
      views,
      likeUserIds,
    } = data;

    const body = {
      title,
      description,
      image: imageSrc,
      directions: directions.split(','),
      ingredients: ingredients.split(','),
      views,
      likeUserIds,
    };

    const response = await fetch(`${recipesUrl}:${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async deleteRecipe(id: number) {
    const response = await fetch(`${recipesUrl}:${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async getAllCookbooks() {
    const response = await fetch(`${cookbooksUrl}`);
    const result = await response.json();
    return result;
  }

  async createCookbook(data: CookbookValues, imageSrc: string) {
    const body = {
      title: data.title,
      image: imageSrc,
      description: data.description,
      tags: data.tags,
      recipeIds: data.recipesIds,
    };

    const response = await fetch(`${cookbooksUrl}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async commentCookbook(cookbookId: number, text: string) {
    const body = {
      text,
      date: new Date().toString(),
    };
    const response = await fetch(`${cookbooksUrl}:${cookbookId}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  }

  async updateCookbook(cookbookId: number, data: CookbookValues, imageSrc: string) {
    const {
      title,
      description,
      views,
      likeUserIds,
      recipesIds,
    } = data;

    const body = {
      title,
      description,
      image: imageSrc,
      views,
      likeUserIds,
      recipesIds
    };

    const response = await fetch(`${cookbooksUrl}:${cookbookId}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async deleteCookbook(id: number) {
    const response = await fetch(`${cookbooksUrl}:${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async signIn(data: AuthValues) {
    const response = await fetch(`${userUrl}sign-in`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    });

    const result = await response.json();
    return result;
  }

  async signUp(data: AuthValues) {
    const response = await fetch(`${userUrl}sign-up`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  }

  async deleteUser(userId: number) {
    const response = await fetch(`${userUrl}:${userId}`, {
      method: 'DELETE',
    });

    const result = await response.json();
    return result;
  }
}

export default new Api();
