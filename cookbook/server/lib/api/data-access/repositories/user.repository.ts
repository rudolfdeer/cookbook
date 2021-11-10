export {};

const {
  User,
  RecipeSaved,
  CookbookSaved,
  Recipe,
  Cookbook,
  RecipeCookbook,
  RecipeLike,
  CookbookLike,
} = require('../models');

export type NewUserValues = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type UpdatedUserValues = {
  name: string;
  photo: string;
  bio: string;
  email: string;
  password: string;
  savedRecipesIds: number[];
  savedCookbooksIds: number[];
};

const findById = (id: number) =>
  User.findOne({
    where: {
      id,
    },
    include: [
      {
        model: RecipeSaved,
        include: {
          model: Recipe,
          include: [User, RecipeLike],
        },
      },
      {
        model: CookbookSaved,
        include: {
          model: Cookbook,
          include: [
            {
              model: RecipeCookbook,
              include: {
                model: Recipe,
                include: [User, RecipeLike],
              },
            },
            CookbookLike,
          ],
        },
      },
    ],
  });

const create = async (user: NewUserValues) => {
  const userInstance = await User.create({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return userInstance;
};

const deleteById = async (id: number) => {
  const userInstance = await User.findOne({
    where: {
      id,
    },
  });
  return userInstance.destroy();
};

const update = async (user: UpdatedUserValues, id: number) => {
  const userInstance = await User.findOne({
    where: {
      id,
    },
  });

  const updatedUser = {
    name: user.name,
    email: user.email,
    password: user.password,
    bio: user.bio,
    photo: user.photo,
  };

  userInstance.setRecipes(user.savedRecipesIds);
  userInstance.setCookbooks(user.savedCookbooksIds);

  return userInstance.update(updatedUser);
};

const userRepository = {
  create,
  deleteById,
  findById,
  update,
};

module.exports = {
  userRepository,
};
