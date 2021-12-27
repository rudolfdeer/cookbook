import { db } from '../index';

const Sequelize = require('sequelize');

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
      defaultValue: 'Your Name',
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
      type: Sequelize.STRING(1234),
      defaultValue: 'images/user1.png',
    },
    imageType: Sequelize.STRING,
    imageName: Sequelize.STRING,
    imageData: Sequelize.BLOB('long'),

    bio: {
      type: Sequelize.STRING,
      defaultValue: 'No bio',
    },
  },
  {
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  },
);

module.exports = {
  User,
};
