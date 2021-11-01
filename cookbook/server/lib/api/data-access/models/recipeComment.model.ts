const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const RecipeComment = db.define(
  'Recipe_Comment',
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

RecipeComment.belongsTo(User, {
  onDelete: 'CASCADE',
  hooks: true,
});

RecipeComment.belongsTo(Recipe, {
  onDelete: 'CASCADE',
  hooks: true,
});

Recipe.hasMany(RecipeComment);

module.exports = {
  RecipeComment,
};
