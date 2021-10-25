const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookComment = db.define(
  'Сookbook_Comment',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

CookbookComment.belongsTo(User, { as: 'user' });
CookbookComment.belongsTo(Cookbook, { as: 'cookbook' });

module.exports = {
  CookbookComment,
};
