'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CookbookComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CookbookComment.belongsTo(models.User);
      CookbookComment.belongsTo(models.Cookbook);

      models.Cookbook.hasMany(CookbookComment, {
        onDelete: 'CASCADE',
        hooks: true,
      });

      models.User.hasMany(CookbookComment);
    }
  }
  CookbookComment.init(
    {
      text: DataTypes.STRING,
      date: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      cookbookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cookbook_Comment',
    }
  );
  return CookbookComment;
};
