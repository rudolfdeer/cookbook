const Sequelize = require('sequelize');
import { db } from '../index';

const User = db.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    photo: {
      type: Sequelize.STRING,
      defaultValue: 'images/default.jpg',
    },
    bio: {
      type: Sequelize.STRING,
      defaultValue: 'No bio',
    },
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'user',
  }
);

module.exports = {
  User,
};
