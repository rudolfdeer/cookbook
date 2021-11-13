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
  savedRecipesIds: number[];
  savedCookbooksIds: number[];
};

const update = async (data: UpdatedUserData, id: number) => {
  const updatedUser = {
    name: data.name,
    photo: data.photo,
    bio: data.bio,
    savedRecipesIds: data.savedRecipesIds,
    savedCookbooksIds: data.savedCookbooksIds,
  };

  await userRepository.update(updatedUser, id);

  const response = await userRepository.findById(id);

  return response;
};

type AuthValues = {
  email: string;
  password: string;
};

const signUp = async (data: AuthValues) => {
  const { email, password } = data;
  const user = await userRepository.findByEmail(email);

  if (user?.email === email) {
    throw new Error(MESSAGES.AUTH.ERROR.EMAIL_EXISTS);
  }

  if (!user) {
    const encryptedPassword = authUtils.encryptPassword(password);

    let createdUser = await userRepository.create({
      email,
      password: encryptedPassword,
    });
    createdUser = createdUser.toJSON();

    const response = await userRepository.findById(createdUser.id);

    const token = authUtils.generateAuthToken({
      email: createdUser.email,
      id: createdUser.id,
    });

    return {
      response,
      token,
    };
  }
};

const signIn = async (data: AuthValues) => {
  const { email, password } = data;
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error(MESSAGES.AUTH.ERROR.EMAIL_NOT_EXIST);
  }

  const isPasswordMatched = authUtils.comparePasswords(password, user.password);

  if (!isPasswordMatched) {
    throw new Error(MESSAGES.AUTH.ERROR.WRONG_PASSWORD);
  }

  const response = await userRepository.findById(user.id);

  const token = authUtils.generateAuthToken({ email: user.email, id: user.id });

  return {
    response,
    token,
  };
};

const changeEmail = async (email: string, id: number) => {
  const userWithSameEmail = await userRepository.findByEmail(email);

  if (userWithSameEmail) {
    throw new Error('User with this email already exists.');
  }

  await userRepository.changeEmail(email, id);

  const response = await userRepository.findById(id);

  const token = authUtils.generateAuthToken({
    email: response.email,
    id: response.id,
  });

  return {
    response,
    token,
  };
};

const changePassword = async (password: string, id: number) => {
  if (!password) {
    throw new Error('No password provided.');
  }
  const encryptedPassword = authUtils.encryptPassword(password);

  const response = await userRepository.changePassword(encryptedPassword, id);

  return response;
};

const userService = {
  deleteById,
  findById,
  update,
  signIn,
  signUp,
  changeEmail,
  changePassword,
};

module.exports = {
  userService,
};
