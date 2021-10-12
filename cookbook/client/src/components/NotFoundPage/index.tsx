import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import './index.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="page--not-found">
      <img src="../../../assets/images/pear-bg.png" className="page--not-found__bg" />
      <div className="page--not-found__content">
        <h1 className="page--not-found__title">404</h1>
        <h2 className="page--not-found__title--small">Page Not Found</h2>
        <p className="page--not-found__text">
          The page you are looking for doesn&apos;t exist or an other error occured.
          Go to <Link to={ROUTES.HOME}>Home Page</Link>
        </p>
      </div>
    </main>
  );
}
