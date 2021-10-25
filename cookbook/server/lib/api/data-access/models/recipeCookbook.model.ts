const Sequelize = require('sequelize');
import { db } from '../index';
const { Cookbook } = require('./cookbook.model');
const { Recipe } = require('./recipe.model');

const RecipeCookbook = db.define(
  'Recipe_Cookbook',
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

RecipeCookbook.belongsTo(Cookbook, { as: 'cookbook' });
RecipeCookbook.belongsTo(Recipe, { as: 'recipe' });

module.exports = {
  RecipeCookbook,
};
