import { User } from '../../interfaces';

const users: User[] = [
  {
    id: 1,
    name: 'Jonh Doe',
    avatar: 'images/user1.png',
    email: 'johndoe@test.com',
    password: 'user1',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    isLoggedIn: false,
    savedRecipes: [],
    savedCookbooks: [],
  },
  {
    id: 2,
    name: 'John Galt',
    avatar: 'images/user1.png',
    email: 'johngalt@test.com',
    password: 'user2',
    bio: 'I don’t know about you but I love pizza. Especially when that pizza comes with Papa John’s very own garlic pizza sticks. ',
    isLoggedIn: false,
    savedRecipes: [],
    savedCookbooks: [],
  },
  {
    id: 3,
    name: 'Patricia Holman',
    avatar: 'images/user1.png',
    email: 'pholman@test.com',
    password: 'user3',
    bio: 'Dont like pizza',
    isLoggedIn: false,
    savedRecipes: [],
    savedCookbooks: [],
  },
  {
    id: 4,
    name: 'Winston Smith',
    avatar: 'images/user1.png',
    email: 'smith@test.com',
    password: 'user4',
    bio: 'Jaime Sushi',
    isLoggedIn: false,
    savedRecipes: [],
    savedCookbooks: [],
  },
];

export default users;
