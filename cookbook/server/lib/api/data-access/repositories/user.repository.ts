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
  savedRecipesIds: number[];
  savedCookbooksIds: number[];
};

type NewUserValues = {
  email: string;
  password: string;
};

const findById = async (id: number) => {
  const userInstance = await User.findOne({
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
    bio: user.bio,
    photo: user.photo,
  };

  await userInstance.setRecipes(user.savedRecipesIds);
  await userInstance.setCookbooks(user.savedCookbooksIds);

  return userInstance.update(updatedUser, {
    include: [RecipeSaved, CookbookSaved],
  });
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

const changeEmail = async (email: string, id: number) => {
  const userInstance = await User.findOne({
    where: {
      id,
    },
  });

  await userInstance.update({
    email,
  });

  return userInstance;
};

const changePassword = async (password: string, id: number) => {
  const userInstance = await User.findOne({
    where: {
      id,
    },
  });

  await userInstance.update({
    password,
  });

  return userInstance;
};

const userRepository = {
  deleteById,
  findById,
  update,
  create,
  findByEmail,
  changeEmail,
  changePassword,
};

module.exports = {
  userRepository,
};
