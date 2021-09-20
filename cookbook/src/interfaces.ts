export interface Recipe {
  id: number;
  name: string;
  image: string;
  userId: number;
  userName: string;
  description: string;
  directions: string[];
  ingredients: string[];
  cookingTime: number;
  views: number;
  likes: number;
  comments: Comment[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  isLoggedIn: boolean;
  savedRecipes: Recipe[];
  savedCookbooks: Cookbook[];
}

export interface Comment {
  userId: number;
  comment: string;
  date: string;
}

// export interface Ingredient {
//   ingredient: string;
//   amount: string;
// }

export interface Cookbook {
  id: number;
  name: string;
  author: string;
  userId: number;
  description: string;
  likes: number;
  views: number;
  comments: Comment[];
  image: string;
  recipesIds: Recipe['id'][];
  tags: string[];
}

export interface State {
  recipes: Recipe[];
  cookbooks: Cookbook[];
  user: User | null;
}
