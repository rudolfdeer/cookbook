import { Model } from 'sequelize';
const Sequelize = require('sequelize');
import { db } from '../../../constants/configs/db.config';

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

const Cookbook = db.define('cookbooks', {
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
  likes: {
    type: Sequelize.INTEGER,
  },
  views: {
    type: Sequelize.INTEGER,
  },
  comments: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recipesIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  usersLiked: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
});

module.exports = {
  Cookbook,
};
