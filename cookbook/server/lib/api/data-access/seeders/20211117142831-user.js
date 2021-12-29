'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          name: 'Jonh Doe',
          //photo: 'images/user1.png',
          image_type: 'image/png',
          image_name: 'user1.png',
          image_data: '',
          email: 'johndoe@test.com',
          password:
            'bc1f5bc429633f461ce402232164d4e240d53ae7594a105122ce7a8426b6b17b6798f7cd67dd4bf3b33846cc0134217535302e50f06c316f06de6a24dae08d0d',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          name: 'John Galt',
          //photo: 'images/user1.png',
          image_type: 'image/png',
          image_name: 'user1.png',
          image_data: '',
          email: 'johngalt@test.com',
          password:
            'bc1f5bc429633f461ce402232164d4e240d53ae7594a105122ce7a8426b6b17b6798f7cd67dd4bf3b33846cc0134217535302e50f06c316f06de6a24dae08d0d',
          bio: 'I don’t know about you but I love pizza. Especially when that pizza comes with Papa John’s very own garlic pizza sticks. ',
        },
        {
          name: 'Patricia Holman',
          //photo: 'images/user1.png',
          image_type: 'image/png',
          image_name: 'user1.png',
          image_data: '',
          email: 'pholman@test.com',
          password:
            'bc1f5bc429633f461ce402232164d4e240d53ae7594a105122ce7a8426b6b17b6798f7cd67dd4bf3b33846cc0134217535302e50f06c316f06de6a24dae08d0d',
          bio: 'Dont like pizza',
        },
        {
          name: 'Winston Smith',
          //photo: 'images/user1.png',
          image_type: 'image/png',
          image_name: 'user1.png',
          image_data: '',
          email: 'smith@test.com',
          password:
            'bc1f5bc429633f461ce402232164d4e240d53ae7594a105122ce7a8426b6b17b6798f7cd67dd4bf3b33846cc0134217535302e50f06c316f06de6a24dae08d0d',
          bio: 'Jaime Sushi',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
