'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Cookbook_Comment',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        text: {
          type: Sequelize.STRING,
        },
        date: {
          type: Sequelize.STRING,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'User',
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
    await queryInterface.dropTable('Cookbook_Comment');
  },
};
