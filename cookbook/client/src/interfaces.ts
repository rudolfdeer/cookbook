export interface State {
  recipes: Recipe[];
  user: User | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
  bio: string;
  Recipe_Saveds?: SavedRecipe[];
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  directions: string[];
  ingredients: string[];
  time: number;
  views: number;
  UserId: number;
  User: User;
  Recipe_Comments: Comment[];
  Recipe_Likes: Like[];
}

export interface Like {
  RecipeId: number;
  UserId: number;
}

export interface Comment {
  id: number;
  text: string;
  date: string;
  RecipeId: number;
  UserId: number;
  User?: User;
}

export interface SavedRecipe {
  RecipeId: number;
  UserId: number;
  Recipe?: Recipe;
}

export interface RecipeRequestBody {
  title: string;
  description: string;
  ingredients: string;
  directions: string;
  time?: number;
  views?: number;
  likeUserIds?: number[];
}

export interface UserRequestBody {
  name?: string;
  photo?: string;
  bio?: string;
  savedRecipesIds?: number[];
  savedCookbooksIds?: number[];
}

export interface AuthRequestBody {
  email: string;
  password: string;
}

export interface SearchListItem {
  id: number;
  name: string;
}

export interface SignUpForm {
  email: string;
  password: string;
  confirm: string;
}
