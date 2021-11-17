'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cookbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cookbook.belongsTo(models.User);
    }
  }
  Cookbook.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      views: DataTypes.INTEGER,
      tags: DataTypes.ARRAY(DataTypes.STRING),
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cookbook',
    }
  );
  return Cookbook;
};
