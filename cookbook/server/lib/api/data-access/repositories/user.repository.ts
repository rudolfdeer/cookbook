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

type UpdatedUserValues = {
  name: string;
  photo: string;
  bio: string;
  email: string;
  //password: string;
  savedRecipesIds: number[];
  savedCookbooksIds: number[];
};

type NewUserValues = {
  email: string;
  password: string;
};

const findById = (id: number) => {
  const userInstance = User.findOne({
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
            User,
          ],
        },
      },
    ],
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
    bio: user.bio,
    photo: user.photo,
  };

  //userInstance.setRecipes(user.savedRecipesIds);
  //userInstance.setCookbooks(user.savedCookbooksIds);

  return userInstance.update(updatedUser);
};

const create = async (data: NewUserValues) => {
  const { email, password } = data;
  const userInstance = await User.create({
    email,
    password,
  });
  return userInstance;
};

const findByEmail = async (email: string) => {
  const userInstance = await User.findOne({
    where: {
      email,
    },
  });

  return userInstance;
};

const userRepository = {
  deleteById,
  findById,
  update,
  create,
  findByEmail,
};

module.exports = {
  userRepository,
};
