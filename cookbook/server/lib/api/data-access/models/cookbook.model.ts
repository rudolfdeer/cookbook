import { Model } from 'sequelize';
const Sequelize = require('sequelize');
import { db } from '../index';

// class Comment extends Model {}

// Comment.init(
//   {
//     userId: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//     },
//     comment: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     date: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     db,
//     modelName: 'Comment',
//   }
// );

const Cookbook = db.define('Сookbook', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
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
});

module.exports = {
  Cookbook,
};
