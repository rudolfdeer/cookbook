export {};

const express = require('express');
const mainRoute = express.Router();
const { cookbookRouter } = require('../routes/cookbook.route');

mainRoute.use('/api/cookbooks', cookbookRouter);

module.exports = {
  router: mainRoute,
};
