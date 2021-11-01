import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const RecipeLike = db.define(
  'Recipe_Like',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

Recipe.hasMany(RecipeLike, {
  onDelete: 'CASCADE',
  hooks: true,
});

RecipeLike.belongsTo(User, {
  onDelete: 'CASCADE',
  hooks: true,
});

//User.belongsToMany(Recipe, { through: RecipeLike });
Recipe.belongsToMany(User, { through: RecipeLike });

module.exports = {
  RecipeLike,
};
