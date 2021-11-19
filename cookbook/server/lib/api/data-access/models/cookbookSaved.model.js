'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CookbookSaved extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(CookbookSaved);
      CookbookSaved.belongsTo(models.Cookbook);
      CookbookSaved.belongsTo(models.User);

      models.Cookbook.hasMany(CookbookSaved, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.User.belongsToMany(models.Cookbook, { through: CookbookSaved });
    }
  }
  CookbookSaved.init(
    {
      user_id: DataTypes.INTEGER,
      cookbook_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CookbookSaved',
      tableName: 'Cookbook_Saved',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );
  return CookbookSaved;
};
