'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RecipeComment.belongsTo(models.User);
      RecipeComment.belongsTo(models.Recipe);

      models.Recipe.hasMany(RecipeComment, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.User.hasMany(RecipeComment);
    }
  }
  RecipeComment.init(
    {
      UserId: DataTypes.INTEGER,
      RecipeId: DataTypes.INTEGER,
      text: DataTypes.STRING,
      date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'RecipeComment',
      tableName: 'Recipe_Comment',
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    }
  );
  return RecipeComment;
};
