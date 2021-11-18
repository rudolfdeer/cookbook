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
      CookbookLike.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
      models.Cookbook.belongsToMany(models.User, { through: CookbookLike });
    }
  }
  CookbookLike.init(
    {
      UserId: DataTypes.INTEGER,
      CookbookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cookbook_Like',
      freezeTableName: true,
    }
  );
  return CookbookLike;
};
