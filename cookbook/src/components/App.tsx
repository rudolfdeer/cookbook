import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '../constants/routes';
import HomePageConnect from '../redux/containers/HomePageConnect';
import CookbooksPageConnect from '../redux/containers/CookbooksPageConnect';
import RecipesPageConnect from '../redux/containers/RecipesPageConnect';
import ProfileRecipesPageConnect from '../redux/containers/ProfileRecipesPageConnect';
import ProfileCookbooksPageConnect from '../redux/containers/ProfileCookbookPageConnect';
import LogInPageConnect from '../redux/containers/LogInPageConnect';
import ProfileSettingsPageConnect from '../redux/containers/ProfileSettingsPageConnect';
import ProfileSavedPageConnect from '../redux/containers/ProfileSavedPageConnect';
import NotFoundPage from './NotFoundPage';
import SignUpPageConnect from '../redux/containers/SignUpPageConnect';
import ProfileUsersPageConnect from '../redux/containers/ProfileUsersPageConnect';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePageConnect}></Route>
          <Route
            exact
            path={ROUTES.COOKBOOKS}
            component={CookbooksPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.RECIPES}
            component={RecipesPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.LOG_IN}
            component={LogInPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.SIGN_UP}
            component={SignUpPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.PROFILE_SETTINGS}
            component={ProfileSettingsPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.PROFILE_RECIPES}
            component={ProfileRecipesPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.PROFILE_COOKBOOKS}
            component={ProfileCookbooksPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.PROFILE_SAVED}
            component={ProfileSavedPageConnect}
          ></Route>
          <Route
            exact
            path={ROUTES.PROFILE_USER}
            component={ProfileUsersPageConnect}
          ></Route>
          <Route exact path={ROUTES.NOT_FOUND} component={NotFoundPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
