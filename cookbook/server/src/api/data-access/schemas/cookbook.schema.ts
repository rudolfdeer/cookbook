const Sequelize = require('sequelize');
const db = require('../../../constants/configs/db.config');

const Cookbooks = db.define('cookbooks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // title: {},
  // userId: {},
  // description: {},
  // likes: {},
  // views: {},
  // comments: {},
  // image: {},
  // recipesIds: {},
  // tags: {},
  // usersLiked: {},
});
