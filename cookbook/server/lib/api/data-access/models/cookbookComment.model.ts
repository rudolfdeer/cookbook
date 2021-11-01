const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookComment = db.define(
  'Сookbook_Comment',
  {
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
    underscored: true,
    timestamps: false,
  }
);

CookbookComment.belongsTo(User, {
  onDelete: 'CASCADE',
  hooks: true,
});

CookbookComment.belongsTo(Cookbook, {
  onDelete: 'CASCADE',
  hooks: true,
});

Cookbook.hasMany(CookbookComment);

module.exports = {
  CookbookComment,
};
