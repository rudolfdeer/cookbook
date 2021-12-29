'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cookbook',
      [
        {
          image_type: 'image/jpeg',
          image_name: 'cookbook-icecreamdream.jpg',
          image_data: '',
          title: 'All about pancakes',
          user_id: 1,
          description: 'lorem ',
          views: 459,
          tags: ['Without eggs', 'Without milk'],
        },
        {
          image_type: 'image/jpeg',
          image_name: 'cookbook-icecreamdream.jpg',
          image_data: '',
          title: 'Icecream dream',
          user_id: 1,
          description: 'lorem ',
          views: 584,
          tags: ['Vegetarian', 'Without milk'],
        },
        {
          image_type: 'image/jpeg',
          image_name: 'cookbook-icecreamdream.jpg',
          image_data: '',
          title: 'Fast breakfast',
          user_id: 2,
          description: 'lorem ',
          views: 359,
          tags: ['Without eggs', 'Without milk', 'Vegetarian'],
        },
        {
          image_type: 'image/jpeg',
          image_name: 'cookbook-icecreamdream.jpg',
          image_data: '',
          title: 'Salads',
          user_id: 3,
          description: 'lorem ',
          views: 198,
          tags: ['Without milk'],
        },
        {
          image_type: 'image/jpeg',
          image_name: 'cookbook-icecreamdream.jpg',
          image_data: '',
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
