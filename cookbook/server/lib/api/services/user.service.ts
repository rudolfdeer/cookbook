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

const userService = {
  deleteById,
  findById,
  update,
  signIn,
  signUp,
};

module.exports = {
  userService,
};
