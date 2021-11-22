import { db } from '../index';

const Sequelize = require('sequelize');
const { User } = require('./user.model');

const Cookbook = db.define(
  'Cookbook',
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
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);

User.hasMany(Cookbook, {
  onDelete: 'CASCADE',
  hooks: true,
});
Cookbook.belongsTo(User);

module.exports = {
  Cookbook,
};
