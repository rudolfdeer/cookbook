'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cookbook_Saved',
      [
        {
          userId: 1,
          cookbookId: 2,
        },
        {
          userId: 2,
          cookbookId: 2,
        },
        {
          userId: 3,
          cookbookId: 1,
        },
        {
          userId: 4,
          cookbookId: 1,
        },
        {
          userId: 1,
          cookbookId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cookbook_Saved', null, {});
  },
};
