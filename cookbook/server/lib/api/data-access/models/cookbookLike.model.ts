const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookLike = db.define(
  'Сookbook_Like',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
  }
);

CookbookLike.belongsTo(User, { as: 'user' });
CookbookLike.belongsTo(Cookbook, { as: 'cookbook' });

module.exports = {
  CookbookLike,
};
