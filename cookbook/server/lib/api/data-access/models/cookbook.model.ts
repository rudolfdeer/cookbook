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
    image_type: Sequelize.STRING,
    image_name: Sequelize.STRING,
    image_data: Sequelize.BLOB('long'),
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
  },
);

Cookbook.belongsTo(User);

module.exports = {
  Cookbook,
};
