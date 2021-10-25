const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const RecipeLike = db.define(
  'Recipe_Like',
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

RecipeLike.belongsTo(User, { as: 'user' });
RecipeLike.belongsTo(Recipe, { as: 'recipe' });

module.exports = {
  RecipeLike,
};
