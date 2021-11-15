import {
  Comment,
  NewCookbookValues,
  UpdatedCookbookValues,
} from '../data-access/repositories/cookbook.repository';

export {};

const { cookbookRepository } = require('../data-access/repositories');

const findAll = async () => {
  const cookbooks = await cookbookRepository.findAll();
  return cookbooks;
};

const create = async (cookbook: NewCookbookValues, userId: number) => {
  const newCookbook = await cookbookRepository.create(cookbook, userId);
  return newCookbook;
};

const deleteById = async (id: number) => {
  await cookbookRepository.deleteById(id);
};

const findById = async (id: number) => {
  const cookbook = await cookbookRepository.findById(id);
  return cookbook;
};

const update = async (
  cookbook: UpdatedCookbookValues,
  id: number,
  userId: number
) => {
  const cookbookInstanse = await cookbookRepository.findById(id);

  if (cookbookInstanse.UserId !== userId) {
    throw new Error('Recipe was created by other user');
  }
  const response = await cookbookRepository.update(cookbook, id);
  return response;
};

const createComment = async (
  comment: Comment,
  cookbookId: number,
  userId: number
) => {
  const response = await cookbookRepository.createComment(
    comment,
    cookbookId,
    userId
  );
  return response;
};

const cookbookService = {
  findAll,
  create,
  deleteById,
  findById,
  update,
  createComment,
};

module.exports = {
  cookbookService,
};
