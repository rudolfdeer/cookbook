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
      UserId: DataTypes.INTEGER,
      RecipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'RecipeLike',
      tableName: 'Recipe_Like',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );
  return RecipeLike;
};
