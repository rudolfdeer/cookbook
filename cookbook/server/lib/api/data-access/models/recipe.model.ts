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
    views: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);

Recipe.belongsTo(User, {
  onDelete: 'CASCADE',
  hooks: true,
});

module.exports = {
  Recipe,
};
