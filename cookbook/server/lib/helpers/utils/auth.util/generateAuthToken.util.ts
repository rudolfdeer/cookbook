const { tokenUtils } = require('../token.util');
const { InternalError } = require('../../errors');

type TokenPayloadValues = {
  email?: string;
  id?: number;
};

const generateAuthToken = (payload: TokenPayloadValues = {}) => {
  if (!payload.email || !payload.id) {
    throw new InternalError();
  }

  const { email, id } = payload;

  const token = tokenUtils.generateToken({ email, id });

  return token;
};

module.exports = {
  generateAuthToken,
};
