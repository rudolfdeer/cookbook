import { Model } from 'sequelize';
const Sequelize = require('sequelize');
import { db } from '../index';
const { User } = require('./user.model');
const { Recipe } = require('./recipe.model');

const Cookbook = db.define(
  'Сookbook',
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
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
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

Cookbook.belongsTo(User, { as: 'user', constraints: false });

User.belongsToMany(Cookbook, { through: 'Cookbook_Saved' });
Cookbook.belongsToMany(User, { through: 'Cookbook_Saved' });

User.belongsToMany(Cookbook, { through: 'Cookbook_Like' });
Cookbook.belongsToMany(User, { through: 'Cookbook_Like' });

Recipe.belongsToMany(Cookbook, { through: 'Recipe_Cookbook' });
Cookbook.belongsToMany(Recipe, { through: 'Recipe_Cookbook' });

module.exports = {
  Cookbook,
};
