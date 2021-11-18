'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Recipe_Comment',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'User',
            key: 'id',
          },
        },
        recipeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Recipe',
            key: 'id',
          },
        },
        text: {
          type: Sequelize.STRING,
        },
        date: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('Recipe_Comment');
  },
};
