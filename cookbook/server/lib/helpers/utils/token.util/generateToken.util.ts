import { TokenPayload } from '../auth.util/generateAuthToken.util';

const jwt = require('jsonwebtoken');
const { TOKEN } = require('../../../constants/auth');

const generateToken = (payload: TokenPayload) => {
  const accessToken = jwt.sign(payload, TOKEN.SECRET, {
    algorithm: TOKEN.ALGORITHM,
    expiresIn: TOKEN.LIFE,
  });

  return accessToken;
};

module.exports = {
  generateToken,
};
