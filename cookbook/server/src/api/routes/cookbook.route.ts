const express = require('express');
const router = express.Router();

const { cookbookController } = require('../controllers');

const cookbookRoute = router.prefix("/cookbooks");

cookbookRoute.get("/", cookbookController.getAll);

module.exports = {
	cookbookRoute,
};