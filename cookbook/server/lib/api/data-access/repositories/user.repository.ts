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

export type UpdatedUser = {
  name: string;
  photo: string;
  bio: string;
  savedRecipesIds: number[];
  savedCookbooksIds: number[];
};

export type NewUser = {
  email: string;
  password: string;
};

export type Comment = {
  text: string;
  date: string;
};

const findById = async (id: number) => {
  const user = await User.findOne({
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
        attributes: {
          exclude: ['UserId', 'CookbookId', 'user_id'],
        },
        include: {
          model: Cookbook,
          attributes: {
            exclude: ['user_id'],
          },
          include: [
            User,
            {
              model: RecipeCookbook,
              attributes: {
                exclude: ['cookbook_id', 'CookbookId', 'RecipeId'],
              },
              include: {
                model: Recipe,
                attributes: { exclude: ['UserId', 'user_id'] },
                include: [
                  User,
                  {
                    model: RecipeLike,
                    attributes: {
                      exclude: ['UserId', 'RecipeId'],
                    },
                  },
                ],
              },
            },
            {
              model: CookbookLike,
              attributes: { exclude: ['UserId', 'CookbookId'] },
            },
          ],
        },
      },
    ],
  });
  return user;
};

const deleteById = async (id: number) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  return user.destroy();
};

const update = async (body: UpdatedUser, id: number) => {
  const { name, bio, photo, savedRecipesIds, savedCookbooksIds } = body;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  const updatedUser = {
    name,
    bio,
    photo,
  };

  await user.setRecipes(savedRecipesIds);
  await user.setCookbooks(savedCookbooksIds);

  return user.update(updatedUser, {
    include: [RecipeSaved, CookbookSaved],
  });
};

const create = async (body: NewUser) => {
  const { email, password } = body;

  const user = await User.create({
    email,
    password,
  });
  return user;
};

const findByEmail = async (email: string) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user;
};

const changeEmail = async (email: string, id: number) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });

  await user.update({
    email,
  });

  return user;
};

const changePassword = async (password: string, id: number) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });

  await user.update({
    password,
  });

  return user;
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
