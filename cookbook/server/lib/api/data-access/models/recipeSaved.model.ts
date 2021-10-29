import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const RecipeSaved = db.define(
  'Recipe_Saved',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

User.hasMany(RecipeSaved, {
  onDelete: 'CASCADE',
  hooks: true,
});

Recipe.hasMany(RecipeSaved, {
  onDelete: 'CASCADE',
  hooks: true,
});

RecipeSaved.belongsTo(Recipe);

User.belongsToMany(Recipe, { through: RecipeSaved });
Recipe.belongsToMany(User, { through: RecipeSaved });

module.exports = {
  RecipeSaved,
};
