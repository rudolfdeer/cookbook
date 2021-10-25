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
    underscored: true,
  }
);

Recipe.belongsTo(User, { as: 'user', constraints: false });

User.belongsToMany(Recipe, { through: 'Recipe_Saved' });
Recipe.belongsToMany(User, { through: 'Recipe_Saved' });

User.belongsToMany(Recipe, { through: 'Recipe_Like' });
Recipe.belongsToMany(User, { through: 'Recipe_Like' });

module.exports = {
  Recipe,
};
