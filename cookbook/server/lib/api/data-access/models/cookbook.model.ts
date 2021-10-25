import { Model } from 'sequelize';
const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');

const Cookbook = db.define(
  'Сookbook',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    viewsCount: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Cookbook.belongsTo(User, { as: 'user' });

module.exports = {
  Cookbook,
};
