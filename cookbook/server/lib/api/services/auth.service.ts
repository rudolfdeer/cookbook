export {};

const { authRepository } = require('../data-access/repositories');
//const { AuthError } = require('../../helpers/errors');
const { authUtils } = require('../../helpers/utils/auth.util');
const { MESSAGES } = require('../../constants/messages');

type UserValues = {
  email: string;
  password: string;
};

const signUp = async (data: UserValues) => {
  const { email, password } = data;
  const user = await authRepository.getByEmail(email);

  if (user?.email === email) {
    throw new Error(MESSAGES.AUTH.ERROR.EMAIL_EXISTS);
  }

  if (!user) {
    const encryptedPassword = authUtils.encryptPassword(password);

    let createdUser = await authRepository.createUser({
      email,
      password: encryptedPassword,
    });
    createdUser = createdUser.toJSON();

    const token = authUtils.generateAuthToken({
      email: createdUser.email,
      id: createdUser.id,
    });

    return {
      createdUser,
      token,
    };
  }
};

const signIn = async (data: UserValues) => {
  const { email, password } = data;
  const user = await authRepository.getByEmail(email);

  if (!user) {
    throw new Error(MESSAGES.AUTH.ERROR.EMAIL_NOT_EXIST);
  }

  const isPasswordMatched = authUtils.comparePasswords(password, user.password);

  if (!isPasswordMatched) {
    throw new Error(MESSAGES.AUTH.ERROR.WRONG_PASSWORD);
  }

  const token = authUtils.generateAuthToken({ email: user.email, id: user.id });

  return {
    user,
    token,
  };
};

const authService = {
  signUp,
  signIn,
};

module.exports = {
  authService,
};
