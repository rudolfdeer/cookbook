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

const update = async (
  data: UpdatedCookbookValues,
  cookbookId: number,
  userId: number
) => {
  const cookbook = await cookbookRepository.findById(cookbookId);
  if (!cookbook) {
    throw new Error('Cookbook doesnt exist');
  }

  if (cookbook.UserId !== userId) {
    throw new Error('Cookbook was created by other user');
  }
  await cookbookRepository.update(data, cookbookId);
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
