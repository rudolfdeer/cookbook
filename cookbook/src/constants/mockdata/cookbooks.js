const cookbooks = [
  {
    id: 1,
    image: 'images/cookbook-itsallaboutpancakes.jpg',
    name: 'All about pancakes',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tempus viverra augue ac elit. Interdum libero at tristique fames faucibus. Massa a, consectetur et viverra vulputate urna enim felis metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque. Erat platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi, morbi maecenas facilisi.',
    likes: 72,
    views: 159,
    comments: [
      {
        author: 'Jonh Galt',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        author: 'Patricia Holman',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
    recipesIds: [1, 4, 5],
    tags: ['Without eggs', 'Without milk'],
  },
  {
    id: 2,
    image: 'images/cookbook-icecreamdream.jpg',
    name: 'Icecream dream',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tempus viverra augue ac elit. Interdum libero at tristique fames faucibus. Massa a, consectetur et viverra vulputate urna enim felis metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque. Erat platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi, morbi maecenas facilisi.',
    likes: 85,
    views: 198,
    comments: [
      {
        author: 'Jonh Galt',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        author: 'Patricia Holman',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
    recipesIds: [2, 3],
    tags: ['Vegetarian'],
  },
  {
    id: 3,
    image: 'images/cookbook-fastbreakfast.jpeg',
    name: 'Fast breakfast',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tempus viverra augue ac elit. Interdum libero at tristique fames faucibus. Massa a, consectetur et viverra vulputate urna enim felis metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque. Erat platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi, morbi maecenas facilisi.',
    likes: 165,
    views: 359,
    comments: [
      {
        author: 'Jonh Galt',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        author: 'Patricia Holman',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      }
    ],
    recipesIds: [1, 2],
    tags: ['Without eggs', 'Without milk'],
  },
  {
    id: 4,
    image: 'images/cookbook-salad.jpeg',
    name: 'Salads',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tempus viverra augue ac elit. Interdum libero at tristique fames faucibus. Massa a, consectetur et viverra vulputate urna enim felis metus. Consequat morbi cras elit mauris phasellus at fames eget. Nunc, at vitae integer morbi nibh dignissim non tempus pellentesque. Erat platea augue sed amet, tempor, sed sollicitudin. Viverra tincidunt eu nulla pulvinar eget dolor. Dui, lacus sed ut id egestas elit, mi. Pretium elementum commodo amet cursus massa dictum. Ac, pharetra nisi, morbi maecenas facilisi.',
    likes: 65,
    views: 19,
    comments: [
      {
        author: 'Jonh Galt',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:35:45 GMT+0300 (Moscow Standard Time)',
      },
      {
        author: 'Patricia Holman',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra blandit donec pellentesque ut non mauris lobortis. Iaculis leo, purus scelerisque id lacus et malesuada ipsum, quis. Eget fusce venenatis eu ut leo est erat.',
        date: 'Tue Aug 31 2021 10:37:48 GMT+0300 (Moscow Standard Time)',
      },
    ],
    recipesIds: [1, 3, 4, 5],
    tags: ['Without eggs', 'Without milk'],
  },
];

export default cookbooks;
