import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from '../constants/routes';
import HomePageConnect from '../redux/containers/HomePageConnect';
import CookbooksPageConnect from '../redux/containers/CookbooksPageConnect';
import RecipesPageConnect from '../redux/containers/RecipesPageConnect';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import ProfileSettingsPage from './ProfileSettingsPage';
import ProfileRecipesPage from './ProfileRecipesPage';
import ProfileRecipesPageConnect from '../redux/containers/ProfileRecipesPageConnect';
import ProfileCookbooksPageConnect from '../redux/containers/ProfileCookbookPageConnect';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={HomePageConnect}>
          </Route>
          <Route exact path={routes.cookbooks} component={CookbooksPageConnect}>
          </Route>
          <Route exact path={routes.recipes} component={RecipesPageConnect}>
          </Route>
          <Route exact path={routes.login} component={LogInPage}>
          </Route>
          <Route exact path={routes.signup} component={SignUpPage}>
          </Route>
          <Route exact path={routes.profile} component={ProfileSettingsPage}>
          </Route>
          <Route exact path={routes['profile.recipes']} component={ProfileRecipesPageConnect}>
          </Route>
          <Route exact path={routes['profile.cookbooks']} component={ProfileCookbooksPageConnect}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
