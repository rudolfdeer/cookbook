import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import HomePage from '../pages/home-page';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <HomePage />
      </Router>
    </>
  );
}

export default App;
