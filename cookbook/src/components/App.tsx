import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from '../constants/routes';
import HomePageConnect from '../containers/home-page-connect';
import CookbooksPageConnect from '../containers/cookbook-page-connect';
import RecipesPageConnect from '../containers/recipe-page-connect';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
