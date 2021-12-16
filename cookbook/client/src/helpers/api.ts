import { User } from '../interfaces';
import { ICookbook, IRecipe, IUser } from '../interfacesServer';
import { AuthValues } from '../redux/actions/userActions';

export interface RecipeValues {
  title: string;
  description: string;
  ingredients: string;
  directions: string;
  time?: number;
  views?:number;
  likeUserIds?: number[];
}

export interface CookbookValues {
  title: string;
  description: string;
  recipesIds: number[];
  tags?: string[];
  views?: number;
  likeUserIds?: number[];
}

export interface UserValues {
  name?: string;
  photo?: string;
  bio?: string;
  savedRecipesIds?: number[];
  savedCookbooksIds?: number[];
}

const base = 'http://localhost:3000/api/';
const cookbooksUrl = `${base}cookbooks/`;
const recipesUrl = `${base}recipes/`;
const userUrl = `${base}user/`;

class Api {
  async getUserById(userId: number): Promise<IUser> {
    const response = await fetch(`${userUrl}${userId}`);
    const result = await response.json();
    return result;
  }

  async getUsersCreatedRecipes(userId: number) {
    const recipes = await this.getAllRecipes();
    const filteredRecipes = recipes.filter((el: IRecipe) => el.UserId === userId);
    return filteredRecipes;
  }

  async getUsersCreatedCookbooks(userId: number) {
    const cookbooks = await this.getAllCookbooks();
    const filteredCookbooks = cookbooks.filter((el: ICookbook) => el.UserId === userId);
    return filteredCookbooks;
  }

  async getAllRecipes() {
    const response = await fetch(`${recipesUrl}`, {
      credentials: 'include',
    });
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
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async getLoggedInUser() {
    const response = await fetch(`${userUrl}`, {
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }

  async commentRecipe(recipeId: number, text: string) {
    const body = {
      text,
      date: new Date().toString(),
    };
    const response = await fetch(`${recipesUrl}${recipeId}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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

    const response = await fetch(`${recipesUrl}${recipeId}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async deleteRecipe(id: number) {
    await fetch(`${recipesUrl}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
  }

  async getAllCookbooks() {
    const response = await fetch(`${cookbooksUrl}`, {
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }

  async createCookbook(data: CookbookValues, imageSrc: string) {
    const body = {
      title: data.title,
      image: imageSrc,
      description: data.description,
      tags: data.tags,
      recipesIds: data.recipesIds,
    };

    const response = await fetch(`${cookbooksUrl}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async commentCookbook(cookbookId: number, text: string) {
    const body = {
      text,
      date: new Date().toString(),
    };
    const response = await fetch(`${cookbooksUrl}${cookbookId}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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
      recipesIds,
    };

    const response = await fetch(`${cookbooksUrl}${cookbookId}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async deleteCookbook(id: number) {
    await fetch(`${cookbooksUrl}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  async signIn(data: AuthValues) {
    const response = await fetch(`${userUrl}sign-in`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async deleteUser() {
    await fetch(`${userUrl}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  async updateUser(body: UserValues) {
    const response = await fetch(`${userUrl}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async changePassword(password: string) {
    const body = {
      password,
    };

    const response = await fetch(`${userUrl}change-password`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async changeEmail(email: string) {
    const body = {
      email,
    };

    const response = await fetch(`${userUrl}change-email`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async getAllUsers() {
    const response = await fetch(`${userUrl}users/all`);

    const result = await response.json();
    return result;
  }
}

export default new Api();
