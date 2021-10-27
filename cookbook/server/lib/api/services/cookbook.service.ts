import {
  NewCookbookValues,
  UpdatedCookbookValues,
} from '../data-access/repositories/cookbook.repository';

export {};

const { cookbookRepository } = require('../data-access/repositories');

const findAll = async () => {
  const cookbooks = await cookbookRepository.findAll();
  return cookbooks;
};

const create = async (cookbook: NewCookbookValues) => {
  await cookbookRepository.create(cookbook);
};

const deleteById = async (id: number) => {
  await cookbookRepository.deleteById(id);
};

const findById = async (id: number) => {
  const cookbook = await cookbookRepository.findById(id);
  return cookbook;
};

const update = async (cookbook: UpdatedCookbookValues, id: number) => {
  await cookbookRepository.update(cookbook, id);
};

const cookbookService = {
  findAll,
  create,
  deleteById,
  findById,
  update,
};

module.exports = {
  cookbookService,
};
