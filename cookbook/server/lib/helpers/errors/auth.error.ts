export {};

const { MESSAGES } = require('../../constants/messages');
const { CODE_STATUSES } = require('../../constants/code-statuses');

class AuthError {
  message: string;

  status: string;

  constructor({
    message = MESSAGES.AUTH.ERROR.BASE_ERROR,
    status = CODE_STATUSES.UNAUTHORISED,
  } = {}) {
    this.message = message;
    this.status = status;
  }
}

module.exports = {
  AuthError,
};
