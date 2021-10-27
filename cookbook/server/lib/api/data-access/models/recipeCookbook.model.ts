import { db } from '../index';
const { Recipe } = require('./recipe.model');
const { Cookbook } = require('./cookbook.model');

const RecipeCookbook = db.define(
  'Recipe_Cookbook',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

RecipeCookbook.belongsTo(Recipe);
Cookbook.hasMany(RecipeCookbook);

Recipe.belongsToMany(Cookbook, { through: RecipeCookbook });
Cookbook.belongsToMany(Recipe, { through: RecipeCookbook });

module.exports = {
  RecipeCookbook,
};
