'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeSaved extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(RecipeSaved);
      RecipeSaved.belongsTo(models.Recipe);
      RecipeSaved.belongsTo(models.User);

      models.Recipe.hasMany(RecipeSaved, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.User.belongsToMany(models.Recipe, { through: RecipeSaved });
    }
  }
  RecipeSaved.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe_Saved',
    }
  );
  return RecipeSaved;
};
