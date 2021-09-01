import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CookbooksPage from './pages/cookbooks-page/cookbooks-page';
import recipesConnect from '../containers/recipes-connect';
import RecipesPage from './pages/recipes-page/recipes-page';
import routes from '../constants/routes';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={recipesConnect}>
          </Route>
          <Route exact path={routes.cookbooks}>
            <CookbooksPage />
          </Route>
          <Route exact path={routes.recipes}>
            <RecipesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
