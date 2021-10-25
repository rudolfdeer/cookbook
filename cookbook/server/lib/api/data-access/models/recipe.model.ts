const Sequelize = require('sequelize');
import { db } from '../index';

const { User } = require('./user.model');

const Recipe = db.define(
  'Recipe',
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
    directions: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    ingredients: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    cookingTime: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    viewsCount: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Recipe.belongsTo(User, { as: 'user' });

module.exports = {
  Recipe,
};
