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
    },
    bio: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = {
  User,
};
