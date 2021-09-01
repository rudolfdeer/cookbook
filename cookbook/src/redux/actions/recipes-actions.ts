import recipesApi from '../../api/recipes-api';

const getRecipes = () => {
  const resData = recipesApi.getRecipesList();

  return {
    type: 'recipes/get',
    payload: resData,
  };
};

export default getRecipes;
