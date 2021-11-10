export {};

const crypto = require('crypto');

const { CRYPTO } = require('../../../constants/auth');
const { AuthError } = require('../../errors');

const comparePasswords = (password: string, hashedPassword: string) => {
  if (!password) {
    throw new AuthError({
      message: 'comparePasswords: no password to compare',
    });
  }

  const encryptedPassword = crypto
    .pbkdf2Sync(
      password,
      CRYPTO.SALT,
      CRYPTO.ITERATIONS,
      CRYPTO.KEYLEN,
      CRYPTO.DIGEST
    )
    .toString('hex');
  return encryptedPassword === hashedPassword;
};

module.exports = {
  comparePasswords,
};
