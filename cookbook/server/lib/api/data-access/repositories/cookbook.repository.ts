export {};

const {
  Cookbook,
  CookbookLike,
  User,
  Recipe,
  RecipeCookbook,
  CookbookComment,
} = require('../models');

export type CookbookValues = {
  id: number;
  title: string;
  userId: number;
  description: string;
  image: string;
  tags: string[];
  views: number;
  recipesIds: number[];
};

const findAll = () => {
  return Cookbook.findAll({
    include: User,
  });
};

const findById = (id: number) => {
  return Cookbook.findOne({
    where: {
      id: id,
    },
    include: [
      User,
      {
        model: RecipeCookbook,
        include: {
          model: Recipe,
          include: User,
        },
      },
      {
        model: CookbookComment,
        include: User,
      },
      {
        model: CookbookLike,
        include: User,
      },
    ],
  });
};

const create = (cookbook: CookbookValues) => {
  // const newCookbook = new Cookbook(cookbook);
  // return newCookbook.save();

  return Cookbook.create(
    {
      id: cookbook.id,
      title: cookbook.title,
      UserId: cookbook.userId,
      description: cookbook.description,
      image: cookbook.image,
      tags: cookbook.tags,
      views: cookbook.views,
    },
    {
      include: User,
    }
  );
};

const deleteById = (id: number) => {
  return Cookbook.destroy({
    where: {
      id: id,
    },
  });
};

const update = (cookbook: CookbookValues, id: number) => {
  const updatedCookbook = {
    id: cookbook.id,
    // title: cookbook.title,
    // user_id: cookbook.user_id,
    // description: cookbook.description,
    // image: cookbook.image,
    // tags: cookbook.tags,
    // views: cookbook.views,
  };
  return Cookbook.update(updatedCookbook, { where: { id: id } });
};

const cookbookRepository = {
  findAll,
  create,
  deleteById,
  findById,
  update,
};

module.exports = {
  cookbookRepository,
};
