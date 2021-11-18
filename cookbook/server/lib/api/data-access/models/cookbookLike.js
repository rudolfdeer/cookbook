'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CookbookLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Cookbook.hasMany(CookbookLike, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.User.hasMany(CookbookLike);
      CookbookLike.belongsTo(models.User);
      models.Cookbook.belongsToMany(models.User, { through: CookbookLike });
    }
  }
  CookbookLike.init(
    {
      userId: DataTypes.INTEGER,
      cookbookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cookbook_Like',
    }
  );
  return CookbookLike;
};
