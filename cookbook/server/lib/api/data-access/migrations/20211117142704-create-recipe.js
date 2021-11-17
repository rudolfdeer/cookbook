'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Recipe',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
        cookingTime: {
          type: Sequelize.INTEGER,
        },
        views: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        directions: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        ingredients: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'User',
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
    await queryInterface.dropTable('Recipe');
  },
};
