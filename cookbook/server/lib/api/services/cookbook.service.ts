import {
  NewCookbook,
  UpdatedCookbook,
} from '../data-access/repositories/cookbook.repository';
import { Comment } from '../data-access/repositories/user.repository';

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

const deleteById = async (userId: number, cookbookId: number) => {
  const cookbook = await cookbookRepository.findById(cookbookId);

  if (cookbook.UserId !== userId) {
    throw new Error('Cannot delete. Cookbook was created by other user');
  }

  await cookbookRepository.deleteById(cookbookId);
};

const findById = async (id: number) => {
  const response = await cookbookRepository.findById(id);
  return response;
};

const update = async (body: UpdatedCookbook, cookbookId: number) => {
  await cookbookRepository.update(body, cookbookId);
  const response = cookbookRepository.findById(cookbookId);
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
