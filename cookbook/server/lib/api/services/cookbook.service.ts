import {
  Comment,
  NewCookbook,
  UpdatedCookbook,
} from '../data-access/repositories/cookbook.repository';

export {};

const { cookbookRepository } = require('../data-access/repositories');

const findAll = async () => {
  const response = await cookbookRepository.findAll();
  return response;
};

const create = async (body: NewCookbook, userId: number) => {
  const response = await cookbookRepository.create(body, userId);
  return response;
};

const deleteById = async (id: number) => {
  await cookbookRepository.deleteById(id);
};

const findById = async (id: number) => {
  const response = await cookbookRepository.findById(id);
  return response;
};

const update = async (
  body: UpdatedCookbook,
  cookbookId: number,
  userId: number
) => {
  const cookbook = await cookbookRepository.findById(cookbookId);

  if (cookbook.UserId !== userId) {
    throw new Error('Cookbook was created by other user');
  }
  const response = await cookbookRepository.update(body, cookbookId);
  return response;
};

const createComment = async (
  body: Comment,
  cookbookId: number,
  userId: number
) => {
  const response = await cookbookRepository.createComment(
    body,
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
