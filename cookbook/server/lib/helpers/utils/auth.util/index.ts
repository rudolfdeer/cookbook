export {};

const { encryptPassword } = require('./encryptPassword.util');

const authUtils = {
  encryptPassword,
};

module.exports = {
  authUtils,
};
