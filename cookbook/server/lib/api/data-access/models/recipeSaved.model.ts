const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const RecipeSaved = db.define(
  'Recipe_Saved',
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

RecipeSaved.belongsTo(User, { as: 'user' });
RecipeSaved.belongsTo(Recipe, { as: 'recipe' });

module.exports = {
  RecipeSaved,
};
