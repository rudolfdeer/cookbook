export {};

const { userRepository } = require('../data-access/repositories');
const { authUtils } = require('../../utils/auth.util');
const { MESSAGES } = require('../../constants/messages');

const deleteById = async (id: number) => {
  await userRepository.deleteById(id);
};

const findById = async (id: number) => {
  const user = await userRepository.findById(id);
  return user;
};

type UpdatedUserData = {
  name: string;
  photo: string;
  bio: string;
  //email: string;
  //password: string;
  savedRecipesIds: number[];
  savedCookbooksIds: number[];
};

const update = async (data: UpdatedUserData, id: number) => {
  // const userWithNewEmail = await userRepository.findByEmail(data.email);
  // if (userWithNewEmail && userWithNewEmail.id !== id) {
  //   throw new Error(MESSAGES.AUTH.ERROR.EMAIL_EXISTS);
  // }

  //const encryptedPassword = authUtils.encryptPassword(user.password);

  const updatedUser = {
    name: data.name,
    photo: data.photo,
    bio: data.bio,
    //email: data.email,
    savedRecipesIds: data.savedRecipesIds,
    savedCookbooksIds: data.savedCookbooksIds,
  };

  await userRepository.update(updatedUser, id);

  const response = await userRepository.findById(id);

  return response;
};

const userService = {
  deleteById,
  findById,
  update,
};

module.exports = {
  userService,
};
