'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Recipe_Cookbook',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        recipeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Recipe',
            key: 'id',
          },
        },
        cookbookId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Cookbook',
            key: 'id',
          },
        },
      },
      {
        freezeTableName: true,
        underscored: true,
        timestamps: false,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipe_Cookbook');
  },
};
