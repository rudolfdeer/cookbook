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
      CookbookLike.belongsTo(models.Cookbook);
      models.Cookbook.belongsToMany(models.User, { through: CookbookLike });
    }
  }
  CookbookLike.init(
    {
      user_id: DataTypes.INTEGER,
      cookbook_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CookbookLike',
      freezeTableName: true,
      tableName: 'Cookbook_Like',
      underscored: true,
      timestamps: false,
    }
  );
  return CookbookLike;
};
