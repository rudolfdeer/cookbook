'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cookbook_Comment',
      [
        {
          userId: 1,
          cookbookId: 1,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 2,
          cookbookId: 2,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 2,
          cookbookId: 1,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 3,
          cookbookId: 2,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
        {
          userId: 1,
          cookbookId: 2,
          text: 'Lorem ipsum dolor sit amet',
          date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cookbook_Comment', null, {});
  },
};
