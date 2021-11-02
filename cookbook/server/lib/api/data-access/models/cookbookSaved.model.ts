import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookSaved = db.define(
  'Cookbook_Saved',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

User.hasMany(CookbookSaved, {
  onDelete: 'CASCADE',
  hooks: true,
});

Cookbook.hasMany(CookbookSaved, {
  onDelete: 'CASCADE',
  hooks: true,
});

CookbookSaved.belongsTo(Cookbook);
User.belongsToMany(Cookbook, { through: CookbookSaved });

module.exports = {
  CookbookSaved,
};
