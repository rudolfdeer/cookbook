'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeCookbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RecipeCookbook.belongsTo(models.Recipe, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.Cookbook.hasMany(RecipeCookbook, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.Recipe.hasMany(RecipeCookbook);

      models.Recipe.belongsToMany(models.Cookbook, {
        through: RecipeCookbook,
      });
    }
  }
  RecipeCookbook.init(
    {
      RecipeId: DataTypes.INTEGER,
      CookbookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'RecipeCookbook',
      tableName: 'Recipe_Cookbook',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );
  return RecipeCookbook;
};
