import { CookbookValues } from '../data-access/repositories/cookbook.repository';

export {};

const { cookbookRepository } = require('../data-access/repositories');

const findAll = async () => {
  const cookbooks = await cookbookRepository.findAll();
  return cookbooks;
};

const create = async (cookbook: CookbookValues) => {
  await cookbookRepository.create(cookbook);
};

const deleteById = async (id: number) => {
  await cookbookRepository.deleteById(id);
};

const cookbookService = {
  findAll,
  create,
  deleteById,
};

module.exports = {
  cookbookService,
};
