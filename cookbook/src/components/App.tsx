import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CookbooksPage from './cookbooks-page/cookbooks-page';
import HomePage from './home-page/home-page';
import RecepiesPage from './recepies-page/recepies-page';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cookbooks">
            <CookbooksPage />
          </Route>
          <Route exact path="/recepies">
            <RecepiesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
