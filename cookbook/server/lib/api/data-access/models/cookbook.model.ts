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
    views: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'cookbook',
  }
);

Cookbook.belongsTo(User);

const Cookbook_Saved = db.define(
  'Cookbook_Saved',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

User.belongsToMany(Cookbook, { through: Cookbook_Saved });
Cookbook.belongsToMany(User, { through: Cookbook_Saved });

const Cookbook_Like = db.define(
  'Cookbook_Like',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

User.belongsToMany(Cookbook, { through: Cookbook_Like });
Cookbook.belongsToMany(User, { through: Cookbook_Like });

const Recipe_Cookbook = db.define(
  'Recipe_Cookbook',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

Recipe.belongsToMany(Cookbook, { through: Recipe_Cookbook });
Cookbook.belongsToMany(Recipe, { through: Recipe_Cookbook });

module.exports = {
  Cookbook,
};
