export {}

const express = require('express');
const { cookbookController } = require('../controllers');

export const cookbookRouter = express.Router();

cookbookRouter.get("/", cookbookController.getAll);

// module.exports = {
//   cookbookRouter
// };