import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookLike = db.define(
  'Cookbook_Like',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

Cookbook.hasMany(CookbookLike, {
  onDelete: 'CASCADE',
  hooks: true,
});

CookbookLike.belongsTo(User, {
  onDelete: 'CASCADE',
  hooks: true,
});

Cookbook.belongsToMany(User, { through: CookbookLike });

module.exports = {
  CookbookLike,
};
