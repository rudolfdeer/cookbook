const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookSaved = db.define(
  'Сookbook_Saved',
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

CookbookSaved.belongsTo(User, { as: 'user' });
CookbookSaved.belongsTo(Cookbook, { as: 'cookbook' });

module.exports = {
  CookbookSaved,
};
