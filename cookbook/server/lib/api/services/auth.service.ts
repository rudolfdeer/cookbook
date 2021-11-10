export {};

const { authRepository } = require('../data-access/repositories');
const { AuthError } = require('../../helpers/errors');
const { authUtils } = require('../../helpers/utils/auth.util');
const { MESSAGES } = require('../../constants/messages');

type NewUserValues = {
  email: string;
  password: string;
};

const signUp = async (data: NewUserValues) => {
  const { email, password } = data;
  const user = await authRepository.getByEmail(email);

  if (user?.email === email) {
    throw new AuthError({ message: MESSAGES.AUTH.ERROR.EMAIL_EXISTS });
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

const authService = {
  signUp,
};

module.exports = {
  authService,
};
