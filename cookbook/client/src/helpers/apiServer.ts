import { ICookbook, IRecipe, IUser } from '../interfacesServer';

const base = 'http://127.0.0.1:3000/api';
const cookbooksUrl = `${base}/cookbooks`;
const recipesUrl = `${base}/recipes`;
const userUrl = `${base}/users`;

const getAllRecipes = async (): Promise<IRecipe[]> => {
  const response = await fetch(`${base}${recipesUrl}`);
  const result = await response.json();
  return result;
};

const getAllCookbooks = async (): Promise<ICookbook[]> => {
  const response = await fetch(`${base}${cookbooksUrl}`);
  const result = await response.json();
  return result;
};
