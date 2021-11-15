import {
  Comment,
  NewCookbook,
  UpdatedCookbook,
} from '../data-access/repositories/cookbook.repository';

export {};

const { cookbookRepository } = require('../data-access/repositories');

const findAll = async () => {
  const cookbooks = await cookbookRepository.findAll();
  return cookbooks;
};

const create = async (body: NewCookbook, userId: number) => {
  const cookbook = await cookbookRepository.create(body, userId);
  return cookbook;
};

const deleteById = async (id: number) => {
  await cookbookRepository.deleteById(id);
};

const findById = async (id: number) => {
  const cookbook = await cookbookRepository.findById(id);
  return cookbook;
};

const update = async (
  body: UpdatedCookbook,
  cookbookId: number,
  userId: number
) => {
  const cookbookInstance = await cookbookRepository.findById(cookbookId);

  if (cookbookInstance.UserId !== userId) {
    throw new Error('Cookbook was created by other user');
  }
  const cookbook = await cookbookRepository.update(body, cookbookId);
  return cookbook;
};

const createComment = async (
  body: Comment,
  cookbookId: number,
  userId: number
) => {
  const comment = await cookbookRepository.createComment(
    body,
    cookbookId,
    userId
  );
  return comment;
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
