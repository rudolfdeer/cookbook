import {
  NewUserValues,
  UpdatedUserValues,
} from '../data-access/repositories/user.repository';

export {};

const { userRepository } = require('../data-access/repositories');

const create = async (user: NewUserValues) => {
  await userRepository.create(user);
};

const deleteById = async (id: number) => {
  await userRepository.deleteById(id);
};

const findById = async (id: number) => {
  const user = await userRepository.findById(id);
  return user;
};

const update = async (user: UpdatedUserValues, id: number) => {
  await userRepository.update(user, id);
};

const userService = {
  create,
  deleteById,
  findById,
  update,
};

module.exports = {
  userService,
};
