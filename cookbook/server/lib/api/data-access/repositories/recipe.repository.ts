export {};

const { RecipeLike, User, Recipe, RecipeComment } = require('../models');

export type NewRecipeValues = {
  id: number;
  title: string;
  userId: number;
  description: string;
  image: string;
  directions: string[];
  ingredients: string[];
  cookingTime: number;
};

export type Comment = {
  userId: number;
  text: string;
  date: string;
};

export type UpdatedRecipeValues = {
  title: string;
  description: string;
  image: string;
  views: number;
  directions: string[];
  ingredients: string[];
  likeUserIds: number[];
};

const findAll = () => {
  return Recipe.findAll({
    include: User,
  });
};

const findById = (id: number) => {
  return Recipe.findOne({
    where: {
      id: id,
    },
    include: [
      User,
      {
        model: RecipeComment,
        include: User,
      },
      {
        model: RecipeLike,
      },
    ],
  });
};

const create = async (recipe: NewRecipeValues) => {
  const recipeInstance = await Recipe.create(
    {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      image: recipe.image,
      directions: recipe.directions,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cookingTime,
    },
    {
      include: User,
    }
  );

  recipeInstance.setUser(recipe.userId);

  return recipeInstance;
};

const deleteById = async (id: number) => {
  const recipe = await Recipe.findOne({
    where: {
      id: id,
    },
  });
  return recipe.destroy();
};

const update = async (values: UpdatedRecipeValues, id: number) => {
  const recipe = await Recipe.findOne({
    where: {
      id: id,
    },
  });

  const updatedRecipe = {
    title: values.title,
    description: values.description,
    image: values.image,
    views: values.views,
    directions: values.directions,
    ingredients: values.ingredients,
  };

  recipe.setUsers(values.likeUserIds);

  return recipe.update(updatedRecipe, {
    include: RecipeComment,
  });
};

const createComment = async (comment: Comment, id: number) => {
  const commentInstance = await RecipeComment.create(
    {
      text: comment.text,
      date: comment.date,
    },
    {
      include: [User, Recipe],
    }
  );

  commentInstance.setUser(comment.userId);
  commentInstance.setRecipe(id);

  return commentInstance;
};

const recipeRepository = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  createComment,
};

module.exports = {
  recipeRepository,
};
