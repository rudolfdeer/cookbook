import express from 'express';

const { tokenUtils } = require('../utils/token.util');
const { CODE_STATUSES } = require('../constants/code-statuses');
const { MESSAGES } = require('../constants/messages');
const { AuthError } = require('../helpers/errors');

const verifyAuthToken = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const token = req.cookies.jwt;
  let target;
  if (req.params.id) {
    target = req.params.id;
  }

  if (!token) {
    throw new AuthError({ message: 'No token provided.' });
  }

  try {
    const userPayload = tokenUtils.verifyToken(token);
    req.params = target
      ? {
        ...userPayload,
        token,
        target,
      }
      : {
        ...userPayload,
        token,
      };

    next();
  } catch (err) {
    res.status(CODE_STATUSES.UNAUTHORISED).send(MESSAGES.AUTH.ERROR.UNAUTHORISED);
  }
};

module.exports = {
  verifyAuthToken,
};
