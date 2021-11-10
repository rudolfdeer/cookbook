export {};

const { AuthError } = require('./auth.error');
const { InternalError } = require('./internal.error');

module.exports = {
  AuthError,
  InternalError,
};
