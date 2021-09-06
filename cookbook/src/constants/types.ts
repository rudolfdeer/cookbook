export type Recipe = {
  id: number,
  name: string,
  image: string,
  author: string,
  description: string,
  directions: string[],
  ingredients: Ingredient[],
  views: number,
  likes: number,
  comments: Comment[],
};

export type User = {
  id: number,
  username: string,
  email: string,
  avatar: string,
};

export type Comment = {
  author: string,
  photo: string,
  comment: string,
  date: string,
};

export type Ingredient = {
  ingredient: string,
  amount: string,
};

export type Cookbook = {
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
};
