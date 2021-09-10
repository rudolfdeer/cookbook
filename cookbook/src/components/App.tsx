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
import SignUpPage from './SignUpPage';
import ProfileRecipesPageConnect from '../redux/containers/ProfileRecipesPageConnect';
import ProfileCookbooksPageConnect from '../redux/containers/ProfileCookbookPageConnect';
import LogInPageConnect from '../redux/containers/LogInPageConnect';
import ProfileSettingsPageConnect from '../redux/containers/ProfileSettingsPageConnect';

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
          <Route exact path={routes.login} component={LogInPageConnect}>
          </Route>
          <Route exact path={routes.signup} component={SignUpPage}>
          </Route>
          <Route exact path={routes.profile} component={ProfileSettingsPageConnect}>
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
