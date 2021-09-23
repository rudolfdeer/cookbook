import { Recipe } from '../../interfaces';

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Fresh meat',
    image: 'images/freshmeat.jpg',
    userId: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: ['meat - 500g', 'garlic - 5g'],
    cookingTime: 60,
    views: 252,
    likes: 57,
    comments: [
      {
        userId: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 2,
    title: 'Pancakes new',
    image: 'images/pancakesnew.jpg',
    userId: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: ['meat - 500g', 'garlic - 5g'],
    cookingTime: 35,
    views: 123,
    likes: 17,
    comments: [
      {
        userId: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 3,
    title: 'Pancakes',
    image: 'images/pancakes.jpg',
    userId: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: ['meat - 500g', 'garlic - 5g'],
    cookingTime: 25,
    views: 200,
    likes: 51,
    comments: [
      {
        userId: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 4,
    title: 'Fresh meat with potato and cheeze ',
    image: 'images/freshmeatwithpotatoandcheeze.jpg',
    userId: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: ['meat - 500g', 'garlic - 5g'],
    cookingTime: 15,
    views: 212,
    likes: 25,
    comments: [
      {
        userId: 1,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 4,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
  {
    id: 5,
    title: 'Fresh fruits',
    image: 'images/freshfruits.jpg',
    userId: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sit adipiscing dignissim feugiat consectetur. Dolor urna vitae vitae etiam sed commodo. Cursus semper diam commodo laoreet purus orci sed. Nulla varius interdum euismod vestibulum tempus scelerisque felis mauris. Sed neque laoreet habitant pharetra luctus.',
    directions: ['Take', 'Prepare', 'Cook'],
    ingredients: ['meat - 500g', 'garlic - 5g'],
    cookingTime: 10,
    views: 117,
    likes: 15,
    comments: [
      {
        userId: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
      {
        userId: 1,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
    ],
  },
];

export default recipes;
