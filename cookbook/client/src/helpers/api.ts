import SERVER_URL from '../constants/serverUrl';
import { IAuthRequestBody, ICookbook, ICookbookRequestBody, IRecipe, IRecipeRequestBody, IUser, IUserRequestBody } from '../interfaces';

const base = `${SERVER_URL}/api`;
const cookbooksUrl = `${base}/cookbooks/`;
const recipesUrl = `${base}/recipes/`;
const userUrl = `${base}/user/`;

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

  async createRecipe(data: FormData) {
    // const directionsArr = data.directions.split(',');
    // const ingredientArr = data.ingredients.split(',');

    // const body = {
    //   title: data.title,
    //   image: imageSrc,
    //   description: data.description,
    //   directions: directionsArr,
    //   ingredients: ingredientArr,
    //   time: +data.time,
    // };

    const response = await fetch(`${recipesUrl}`, {
      method: 'POST',
      body: data,
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

  async updateRecipe(recipeId: number, data: IRecipeRequestBody) {
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

  async createCookbook(data: FormData) {
    // const body = {
    //   title: data.title,
    //   description: data.description,
    //   tags: data.tags,
    //   recipesIds: data.recipesIds,
    //   image: data.image,
    // };

    const response = await fetch(`${cookbooksUrl}`, {
      method: 'POST',
      body: data,
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

  async likeCookbook(cookbookId: number) {
    const response = await fetch(`${cookbooksUrl}${cookbookId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }

  async likeRecipe(recipeId: number) {
    const response = await fetch(`${recipesUrl}${recipeId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }

  async updateCookbook(cookbookId: number, data: ICookbookRequestBody) {
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

  async signIn(data: IAuthRequestBody) {
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

  async signUp(data: IAuthRequestBody) {
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

  async signOut() {
    await fetch(`${userUrl}sign-out`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  async deleteUser() {
    await fetch(`${userUrl}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  async updateUser(body: IUserRequestBody) {
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

  async updateUsersPhoto(data: FormData) {
    const response = await fetch(`${userUrl}update-photo`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async updateCookbooksImage(id: number, data: FormData) {
    const response = await fetch(`${cookbooksUrl}${id}/image`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async updateRecipesImage(id: number, data: FormData) {
    const response = await fetch(`${recipesUrl}${id}/image`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }
}

export default new Api();
