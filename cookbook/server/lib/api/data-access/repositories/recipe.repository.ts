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

const findAll = () =>
  Recipe.findAll({
    include: User,
  });

const findById = (id: number) =>
  Recipe.findOne({
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

  recipeInstance.setUser(id);

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
