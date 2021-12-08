import { Cookbook, User } from './interfaces';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  photo: string;
  bio: string;
  Recipe_Saveds?: IRecipeSaved[];
  Cookbook_Saveds?: ICookbookSaved[];
}

export interface IRecipe {
  id: number;
  title: string;
  description: string;
  image: string;
  directions: string[];
  ingredients: string[];
  time: number;
  views: number;
  UserId: number;
  User: IUser;
  Recipe_Comments: IRecipeComment[];
  Recipe_Likes: IRecipeLike[];
}

export interface ICookbook {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  views: number;
  UserId: number;
  User: IUser;
  Recipe_Cookbooks: IRecipeCookbook[];
  Cookbook_Comments: ICookbookComment[];
  Cookbook_Likes: ICookbookLike[];
}

export interface IState {
  recipes: IRecipe[];
  cookbooks: ICookbook[];
  user: User | null;
}

interface IRecipeLike {
  RecipeId: number;
  UserId: number;
}

export interface IRecipeComment {
  id: number;
  text: string;
  date: string;
  RecipeId: number;
  UserId: number;
  User?: IUser;
}

interface IRecipeSaved {
  RecipeId: number;
  UserId: number;
  Recipe?: IRecipe;
}

interface IRecipeCookbook {
  RecipeId: number;
  CookbookId: number;
  Recipe: IRecipe;
}

interface ICookbookLike {
  CookbookId: number;
  UserId: number;
}

interface ICookbookSaved {
  CookbookId: number;
  UserId: number;
  Cookbook?: ICookbook;
}

export interface ICookbookComment {
  id: number;
  text: string;
  date: string;
  CookbookId: number;
  UserId: number;
  User?: IUser;
}
