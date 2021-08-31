import { AnyAction } from 'redux';

export type Recipe = {
  id: number,
  name: string,
  image: string,
  author: User,
  description: string,
  directions: string[],
  ingredients: Ingredient[],
  views: number,
  likes: number,
  comments: Comment[],
};

type User = {
  id: number,
  username: string,
  email: string,
  avatar: string,
};

type Comment = {
  author: string,
  comment: string,
  date: string,
};

type Ingredient = {
  ingredient: string,
  amount: string,
};

type Cookbook = {
  id: number,
  name: string,
  description: string,
  likes: number,
  comments: number,
  recepies: Recipe['id'][],
  tags: string[],
};

const initialState = {
  recepies: [] as Recipe[],
  cookbooks: [] as Cookbook[],
  users: [] as User[],
};

type RecipesOperationsReducer = typeof initialState;

export default function recipesOperations(state = initialState, action: AnyAction): RecipesOperationsReducer {
  switch (action.type) {
    case 'recepies/get':
      return {
        ...initialState,
        recepies: action.payload,
      };
    default:
      return state;
  }
}