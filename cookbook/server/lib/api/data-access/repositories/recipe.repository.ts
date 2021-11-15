import { Comment } from './user.repository';

export {};

const {
  RecipeLike, User, Recipe, RecipeComment,
} = require('../models');

export type NewRecipe = {
  title: string;
  description: string;
  image: string;
  directions: string[];
  ingredients: string[];
  cookingTime: number;
};

export type UpdatedRecipe = {
  title: string;
  description: string;
  image: string;
  views: number;
  directions: string[];
  ingredients: string[];
  likeUserIds: number[];
};

const findAll = async () => {
  const recipes = await Recipe.findAll({
    include: User,
  });

  return recipes;
};

const findById = async (id: number) => {
  const recipe = await Recipe.findOne({
    where: {
      id,
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

  return recipe;
};

const create = async (body: NewRecipe, id: number) => {
  const {
    title, description, image, directions, ingredients, cookingTime,
  } = body;

  const recipe = await Recipe.create(
    {
      title,
      description,
      image,
      directions,
      ingredients,
      cookingTime,
    },
    {
      include: User,
    },
  );

  await recipe.setUser(id);

  return recipe;
};

const deleteById = async (id: number) => {
  const recipe = await Recipe.findOne({
    where: {
      id,
    },
  });
  return recipe.destroy();
};

const update = async (body: UpdatedRecipe, id: number) => {
  const {
    title,
    description,
    image,
    directions,
    ingredients,
    views,
    likeUserIds,
  } = body;

  const recipe = await Recipe.findOne({
    where: {
      id,
    },
  });

  const updatedRecipe = {
    title,
    description,
    image,
    views,
    directions,
    ingredients,
  };

  await recipe.setUsers(likeUserIds);

  return recipe.update(updatedRecipe, {
    include: RecipeComment,
  });
};

const createComment = async (
  body: Comment,
  recipeId: number,
  userId: number,
) => {
  const { text, date } = body;

  const comment = await RecipeComment.create(
    {
      text,
      date,
    },
    {
      include: [User, Recipe],
    },
  );

  await comment.setUser(userId);
  await comment.setRecipe(recipeId);

  return comment;
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
