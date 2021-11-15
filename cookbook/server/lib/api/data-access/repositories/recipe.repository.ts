export {};

const { RecipeLike, User, Recipe, RecipeComment } = require('../models');

export type NewRecipeValues = {
  title: string;
  description: string;
  image: string;
  directions: string[];
  ingredients: string[];
  cookingTime: number;
};

export type Comment = {
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

const create = async (recipe: NewRecipeValues, id: number) => {
  const { title, description, image, directions, ingredients, cookingTime } =
    recipe;
  const recipeInstance = await Recipe.create(
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
    }
  );

  await recipeInstance.setUser(id);

  return recipeInstance;
};

const deleteById = async (id: number) => {
  const recipe = await Recipe.findOne({
    where: {
      id,
    },
  });
  return recipe.destroy();
};

const update = async (values: UpdatedRecipeValues, id: number) => {
  const recipe = await Recipe.findOne({
    where: {
      id,
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

  await recipe.setUsers(values.likeUserIds);

  return recipe.update(updatedRecipe, {
    include: RecipeComment,
  });
};

const createComment = async (
  comment: Comment,
  recipeId: number,
  userId: number
) => {
  const commentInstance = await RecipeComment.create(
    {
      text: comment.text,
      date: comment.date,
    },
    {
      include: [User, Recipe],
    }
  );

  await commentInstance.setUser(userId);
  await commentInstance.setRecipe(recipeId);

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
