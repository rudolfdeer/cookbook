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

      models.Cookbook.belongsToMany(models.Recipe, { through: RecipeCookbook });
    }
  }
  RecipeCookbook.init(
    {
      RecipeId: DataTypes.INTEGER,
      CookbookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe_Cookbook',
      freezeTableName: true,
    }
  );
  return RecipeCookbook;
};
