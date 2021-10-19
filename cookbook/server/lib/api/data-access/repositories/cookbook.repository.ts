export {};

const { Cookbook } = require('../models');

export type CookbookValues = {
  id: number;
  title: string;
  userId: number;
  description: string;
  likes: number;
  views: number;
  comments: string[]; //change to Comment[]
  image: string;
  recipesIds: number[];
  tags: string[];
  usersLiked?: number[];
};

const findAll = () => {
  return Cookbook.findAll();
};

const create = (cookbook: CookbookValues) => {
  const newCookbook = new Cookbook(cookbook);
  return newCookbook.save();
};

const deleteById = (id: number) => {
  return Cookbook.destroy({ where: { id: id } });
};

const findById = (id: number) => {
  return Cookbook.findByPk(id);
};

const update = (cookbook: CookbookValues, id: number) => {
  const updatedCookbook = {
    id: cookbook.id,
    title: cookbook.title,
    userId: cookbook.userId,
    description: cookbook.description,
    likes: cookbook.likes,
    views: cookbook.views,
    comments: cookbook.comments,
    image: cookbook.image,
    recipesIds: cookbook.recipesIds,
    tags: cookbook.tags,
    usersLiked: cookbook.usersLiked,
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
