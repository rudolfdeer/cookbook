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
  name?: string;
  photo?: string;
  bio?: string;
  savedRecipesIds?: number[];
  savedCookbooksIds?: number[];
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
        include: {
          model: Cookbook,
          include: [
            User,
            {
              model: RecipeCookbook,
              include: {
                model: Recipe,
                include: [
                  User,
                  {
                    model: RecipeLike,
                  },
                ],
              },
            },
            {
              model: CookbookLike,
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
  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (body.name && body.bio && body.photo) {
    const {
      name, bio, photo
    } = body;

    const updatedUser = {
      name,
      bio,
      photo,
    };

    await user.update(updatedUser);
  }

  if (body.savedCookbooksIds) {
    await user.setCookbooks(body.savedCookbooksIds);
  }

  if (body.savedRecipesIds) {
    await user.setRecipes(body.savedRecipesIds);
  }

  const result = await User.findOne({
    where: {
      id,
    },
    include: [RecipeSaved, CookbookSaved],
  });

  return result;
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
