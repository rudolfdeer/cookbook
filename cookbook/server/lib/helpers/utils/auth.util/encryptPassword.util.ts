export {};

const crypto = require('crypto');
const { CRYPTO } = require('../../../constants/auth');
const { AuthError } = require('../../errors');

const encryptPassword = (password: string) => {
  if (!password) {
    throw new AuthError({ message: 'no data to encrypt.' });
  }

  const encryptedPassword = crypto.pbkdf2Sync(
    password,
    CRYPTO.SALT,
    CRYPTO.ITERATIONS,
    CRYPTO.KEYLEN,
    CRYPTO.DIGEST
  );
  return encryptedPassword.toString('hex');
};

module.exports = {
  encryptPassword,
};
