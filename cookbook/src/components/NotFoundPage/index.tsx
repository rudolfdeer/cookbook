import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import './index.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="not-found-page">
      <img src="../../../assets/images/pear-bg.png" className="pear-bg" />
      <div className="page__content">
        <h1 className="page__title">404</h1>
        <h2 className="page__title_small">Page Not Found</h2>
        <p className="text">
          The page you are looking for doesn't exist or an other error occured.
          Go to <Link to={ROUTES.HOME}>Home Page</Link>
        </p>
      </div>
    </main>
  );
}
