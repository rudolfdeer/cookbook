'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'User',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'Your Name',
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bio: {
          type: Sequelize.STRING,
          defaultValue: 'No bio',
        },
        // photo: {
        //   type: Sequelize.STRING(1234),
        //   defaultValue: 'images/default.jpg',
        // },
        image_type: Sequelize.STRING,
        image_name: Sequelize.STRING,
        image_data: Sequelize.BLOB('long'),
      },
      {
        freezeTableName: true,
        underscored: true,
        timestamps: false,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
  },
};
