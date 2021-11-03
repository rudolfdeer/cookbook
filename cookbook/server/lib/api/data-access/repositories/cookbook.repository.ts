export {};

const {
  Cookbook,
  CookbookLike,
  User,
  Recipe,
  RecipeCookbook,
  RecipeLike,
  CookbookComment,
} = require('../models');

export type NewCookbookValues = {
  id: number;
  title: string;
  userId: number;
  description: string;
  image: string;
  tags: string[];
  recipesIds: number[];
};

export type Comment = {
  userId: number;
  text: string;
  date: string;
};

export type UpdatedCookbookValues = {
  title: string;
  description: string;
  image: string;
  views: number;
  recipesIds?: number[];
  likeUserIds?: number[];
};

const findAll = () => Cookbook.findAll({
  include: User,
});

const findById = (id: number) => Cookbook.findOne({
  where: {
    id,
  },
  include: [
    User,
    {
      model: RecipeCookbook,
      include: {
        model: Recipe,
        include: [User, RecipeLike],
      },
    },
    {
      model: CookbookComment,
      include: User,
    },
    {
      model: CookbookLike,
    },
  ],
});

const create = async (cookbook: NewCookbookValues) => {
  const cookbookInstance = await Cookbook.create(
    {
      id: cookbook.id,
      title: cookbook.title,
      UserId: cookbook.userId,
      description: cookbook.description,
      image: cookbook.image,
      tags: cookbook.tags,
    },
    {
      include: User,
    },
  );

  cookbookInstance.setRecipes(cookbook.recipesIds);

  return cookbookInstance;
};

const deleteById = async (id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });
  return cookbook.destroy();
};

const update = async (values: UpdatedCookbookValues, id: number) => {
  const cookbook = await Cookbook.findOne({
    where: {
      id,
    },
  });

  const updatedCookbook = {
    title: values.title,
    description: values.description,
    image: values.image,
    views: values.views,
  };

  cookbook.setRecipes(values.recipesIds);
  cookbook.setUsers(values.likeUserIds);

  return cookbook.update(updatedCookbook, {
    include: CookbookComment,
  });
};

const createComment = async (comment: Comment, id: number) => {
  const commentInstance = await CookbookComment.create(
    {
      text: comment.text,
      date: comment.date,
    },
    {
      include: [User, Cookbook],
    },
  );
  commentInstance.setUser(comment.userId);
  commentInstance.setCookbook(id);

  return commentInstance;
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
