export {};

const { Cookbook, User, Recipe } = require('../models');

export type CookbookValues = {
  id: number;
  title: string;
  user_id: number;
  description: string;
  image: string;
  tags: string[];
  views: number;
};

const findAll = () => {
  return Cookbook.findAll({ include: [User] });
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
    user_id: cookbook.user_id,
    description: cookbook.description,
    image: cookbook.image,
    tags: cookbook.tags,
    views: cookbook.views,
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
