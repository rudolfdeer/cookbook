const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const RecipeComment = db.define(
  'Recipe_Comment',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
  }
);

RecipeComment.belongsTo(User, { as: 'user' });
RecipeComment.belongsTo(Recipe, { as: 'recipe' });

module.exports = {
  RecipeComment,
};
