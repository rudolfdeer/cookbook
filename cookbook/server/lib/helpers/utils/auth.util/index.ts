export {};

const { encryptPassword } = require('./encryptPassword.util');
const { generateAuthToken } = require('./generateAuthToken.util');

const authUtils = {
  encryptPassword,
  generateAuthToken,
};

module.exports = {
  authUtils,
};
