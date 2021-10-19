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

const cookbookRepository = {
  findAll,
  create,
  deleteById,
};

module.exports = {
  cookbookRepository,
};
