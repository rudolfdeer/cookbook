import { db } from '../index';
const { User } = require('./user.model');
const { Cookbook } = require('./cookbook.model');

const CookbookSaved = db.define(
  'Cookbook_Saved',
  {},
  { freezeTableName: true, timestamps: false, underscored: true }
);

User.hasMany(CookbookSaved);
CookbookSaved.belongsTo(Cookbook);

User.belongsToMany(Cookbook, { through: CookbookSaved });
Cookbook.belongsToMany(User, { through: CookbookSaved });

module.exports = {
  CookbookSaved,
};
