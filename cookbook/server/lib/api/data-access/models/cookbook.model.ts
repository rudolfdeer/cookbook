const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

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
    views: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'cookbook',
  }
);

Cookbook.belongsTo(User);

module.exports = {
  Cookbook,
};
