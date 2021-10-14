export {}

const express = require('express');
const mainRoute = express.Router();
import {cookbookRouter} from '../routes/cookbook.route';

mainRoute.use('/cookbooks', cookbookRouter);

module.exports = {
	router: mainRoute,
};
