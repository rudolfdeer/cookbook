'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Recipe.hasMany(RecipeLike, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.User.hasMany(RecipeLike);
      RecipeLike.belongsTo(models.User);
      models.Recipe.belongsToMany(models.User, { through: RecipeLike });
    }
  }
  RecipeLike.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe_Like',
    }
  );
  return RecipeLike;
};
