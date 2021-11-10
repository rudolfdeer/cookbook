import { NewUserValues } from '../data-access/repositories/user.repository';

const { authRepository } = require('../data-access/repositories');
const { AuthError } = require('../../helpers/errors');
const { authUtils } = require('../../helpers/utils/auth.util');
const { MESSAGES } = require('../../constants/messages');

const signUp = async (userValues: NewUserValues) => {
  const { id, email, password } = userValues;
  const user = await authRepository.getByEmail(email);

  if (user?.email === email) {
    throw new AuthError({ message: MESSAGES.AUTH.ERROR.EMAIL_EXISTS });
  }

  if (!user) {
    const encryptedPassword = authUtils.encryptPassword(password);

    let newUser = await authRepository.create({
      id,
      email,
      password: encryptedPassword,
    });
    newUser = newUser.toJSON();

    const token = authUtils.generateAuthToken({
      email: newUser.email,
      id: newUser.id,
    });

    return {
      newUser,
      token,
    };
  }
};

module.exports = {
  signUp,
};
