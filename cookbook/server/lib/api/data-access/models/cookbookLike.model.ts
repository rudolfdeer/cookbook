import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookLike = db.define(
  'Cookbook_Like',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

Cookbook.hasMany(CookbookLike);
CookbookLike.belongsTo(User);

User.belongsToMany(Cookbook, { through: CookbookLike });
Cookbook.belongsToMany(User, { through: CookbookLike });

module.exports = {
  CookbookLike,
};
