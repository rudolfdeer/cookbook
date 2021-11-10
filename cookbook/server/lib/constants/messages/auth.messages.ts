const BASE_ERROR = 'Auth error.';
const BASE_SUCCESS = 'Auth success.';
const OK = 'Ok.';

const ERROR = {
  BASE_ERROR,
  EMAIL_EXISTS: 'This email already exists.',
  EMAIL_NOT_EXIST: 'This email does not exist.',
  WRONG_PASSWORD: 'Wrong password.',
  UNAUTHORISED: 'Token expired.',
};

const SUCCESS = {
  BASE_SUCCESS,
  OK,
};

module.exports = {
  AUTH: {
    SUCCESS,
    ERROR,
  },
};
