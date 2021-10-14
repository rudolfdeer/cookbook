const express = require('express');
const router = express.Router();
const { cookbookRoute} = require('../routes/cookbook.route');

const mainRoute = router.prefix('/api');

mainRoute.use(cookbookRoute.routes());

module.exports = {
	router: mainRoute,
};
