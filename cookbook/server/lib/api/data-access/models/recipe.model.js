'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User);
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      time: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
      directions: DataTypes.ARRAY(DataTypes.STRING),
      ingredients: DataTypes.ARRAY(DataTypes.STRING),
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );
  return Recipe;
};
