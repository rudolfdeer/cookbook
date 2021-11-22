import { Comment } from './user.repository';
const db = require('../models');

export {};

const {
  Cookbook,
  CookbookLike,
  User,
  Recipe,
  RecipeCookbook,
  RecipeLike,
  CookbookComment,
} = db;

export type NewCookbook = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  recipesIds: number[];
};

export type UpdatedCookbook = {
  title: string;
  description: string;
  image: string;
  views: number;
  recipesIds?: number[];
  likeUserIds?: number[];
};

const findAll = async () => {
  const cookbooks = Cookbook.findAll({
    include: [
      User,
      {
        model: CookbookLike,
      },
    ],
    attributes: { exclude: ['user_id'] },
  });

  return cookbooks;
};

const findById = async (id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['user_id'] },
    include: [
      User,
      {
        model: RecipeCookbook,
        attributes: { exclude: ['CookbookId', 'cookbook_id'] },
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
        model: CookbookComment,
        attributes: { exclude: ['UserId', 'CookbookId', 'cookbook_id'] },
        include: User,
      },
      {
        model: CookbookLike,
      },
    ],
  });

  return cookbook;
};

const create = async (body: NewCookbook, userId: number) => {
  const { title, description, image, tags, recipesIds } = body;

  const cookbook = await Cookbook.create(
    {
      title,
      description,
      image,
      tags,
    },
    {
      include: User,
    }
  );
  await cookbook.setUser(userId);
  await cookbook.setRecipes(recipesIds);

  const cookbookId = cookbook.id;

  return cookbookId;
};

const deleteById = async (id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });
  return cookbook.destroy();
};

const update = async (body: UpdatedCookbook, id: number) => {
  const { title, description, image, views, recipesIds, likeUserIds } = body;

  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });

  const updatedCookbook = {
    title,
    description,
    image,
    views,
  };

  cookbook.setRecipes(recipesIds);
  cookbook.setUsers(likeUserIds);

  return cookbook.update(updatedCookbook, {
    include: CookbookComment,
  });
};

const createComment = async (
  body: Comment,
  cookbookId: number,
  userId: number
) => {
  const { text, date } = body;

  const comment = await CookbookComment.create(
    {
      text,
      date,
    },
    {
      include: [User, Cookbook],
    }
  );
  await comment.setUser(userId);
  await comment.setCookbook(cookbookId);

  return comment;
};

const cookbookRepository = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  createComment,
};

module.exports = {
  cookbookRepository,
};
