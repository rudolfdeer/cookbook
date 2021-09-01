const routes = {
  home: '/',
  cookbooks: '/cookbooks/',
  'cookbooks.display': '/cookbooks/display/:id/',
  recipes: '/recipes/',
  'recipes.display': '/recipes/display/:id/',
  login: '/login',
  signup: '/signup',
  profile: '/profile/settings',
  'profile.cookbooks': '/profile/cookbooks/',
  'profile.cookbooks.delete': 'profile/cookbooks/create/:id',
  'profile.cookbooks.create': 'profile/cookbooks/create/',
  'profile.recipes': '/profile/recipes/',
  'profile.recipes.delete': 'profile/recipes/delete/:id/',
  'profile.recipes.modify': 'profile/recipes/modify/:id/',
  'profile.recipes.create': 'profile/recipes/create/',
};

export default routes;
