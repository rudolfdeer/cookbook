const routes = {
  home: '/',
  cookbooks: '/cookbooks/',
  'cookbooks.display': '/cookbooks/display/:id/',
  recepies: '/recepies/',
  'recepies.display': '/recepies/display/:id/',
  login: '/login',
  signup: '/signup',
  profile: '/profile/settings',
  'profile.cookbooks': '/profile/cookbooks/',
  'profile.cookbooks.delete': 'profile/cookbooks/create/:id',
  'profile.cookbooks.create': 'profile/cookbooks/create/',
  'profile.recepies': '/profile/recepies/',
  'profile.recepies.delete': 'profile/recepies/delete/:id/',
  'profile.recepies.modify': 'profile/recepies/modify/:id/',
  'profile.recepies.create': 'profile/recepies/create/',
};

export default routes;
