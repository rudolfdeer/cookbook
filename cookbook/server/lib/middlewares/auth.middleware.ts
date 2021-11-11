import express from 'express';

const { tokenUtils } = require('../utils/token.util');
const { CODE_STATUSES } = require('../constants/code-statuses');
const { MESSAGES } = require('../constants/messages');

// const removePrefix = (prefixedToken = '') => {
//   const [, token] = prefixedToken.split('=');

//   return token;
// };

const verifyAuthToken = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies.get('jwt');

  if (!token) {
    throw new Error('No token provided.');
  }

  try {
    const userPayload = tokenUtils.verifyToken(token);

    res.status(200).send({
      ...userPayload,
      token,
    });
    next();
  } catch (err) {
    res.status(CODE_STATUSES.UNAUTHORISED).send(`${err}`);
  }
};

module.exports = {
  verifyAuthToken,
};
