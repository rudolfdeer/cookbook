import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CookbooksPage from './pages/cookbooks-page/cookbooks-page';
import RecepiesConnect from '../containers/recepies-connect';
import RecepiesPage from './pages/recepies-page/recepies-page';
import routes from '../constants/routes';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={RecepiesConnect}>
          </Route>
          <Route exact path={routes.cookbooks}>
            <CookbooksPage />
          </Route>
          <Route exact path={routes.recepies}>
            <RecepiesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
