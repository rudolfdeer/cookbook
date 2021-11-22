'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cookbook',
      [
        {
          //id: 1,
          image: 'images/cookbook-itsallaboutpancakes.jpg',
          title: 'All about pancakes',
          user_id: 1,
          description: 'lorem ',
          views: 459,
          tags: ['Without eggs', 'Without milk'],
        },
        {
          //id: 2,
          image: 'images/cookbook-icecreamdream.jpg',
          title: 'Icecream dream',
          user_id: 1,
          description: 'lorem ',
          views: 584,
          tags: ['Vegetarian', 'Without milk'],
        },
        {
          //id: 3,
          image: 'images/cookbook-fastbreakfast.jpeg',
          title: 'Fast breakfast',
          user_id: 2,
          description: 'lorem ',
          views: 359,
          tags: ['Without eggs', 'Without milk', 'Vegetarian'],
        },
        {
         // id: 4,
          image: 'images/cookbook-salad.jpeg',
          title: 'Salads',
          user_id: 3,
          description: 'lorem ',
          views: 198,
          tags: ['Without milk'],
        },
        {
          //id: 5,
          image: 'images/canapes.jpg',
          title: 'The best cookbook',
          user_id: 4,
          description: 'lorem ',
          views: 784,
          tags: ['Vegetarian', 'Without eggs'],
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cookbook', null, {});
  },
};
