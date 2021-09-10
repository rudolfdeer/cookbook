export interface Recipe {
  id: number,
  name: string,
  image: string,
  author: string,
  description: string,
  directions: string[],
  ingredients: Ingredient[],
  cookingTime: number,
  views: number,
  likes: number,
  comments: Comment[],
}

export interface User {
  id: number,
  username: string,
  email: string,
  password: string,
  avatar: string,
  bio: string,
  isLoggedIn: boolean,
}

export interface Comment {
  user: string,
  photo: string,
  comment: string,
  date: string,
}

export interface Ingredient {
  ingredient: string,
  amount: string,
}

export interface Cookbook {
  id: number,
  name: string,
  author: string,
  description: string,
  likes: number,
  views: number,
  comments: Comment[],
  image: string,
  recipesIds: Recipe['id'][],
  tags: string[],
}
