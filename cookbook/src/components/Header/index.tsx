import * as React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import api from '../../helpers/api';

import './index.scss';

type HeaderProps = {
  loggedInUserId: number;
};

export default function Header(props: HeaderProps): JSX.Element {
  const { loggedInUserId } = props;

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo_small" />
      </Link>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="list__item">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="list__item">
            <Link to="/cookbooks">Cookbooks</Link>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <div className="search__icon" />
        <input type="text" className="search__input" />
      </div>
      {loggedInUserId ? (
        <button className="header__btn">
          <Link to={ROUTES.PROFILE_COOKBOOKS}>Create CookBook</Link>
        </button>
      ) : (
        <button className="header__btn">
          <Link to={ROUTES.LOG_IN}>Create CookBook</Link>
        </button>
      )}
      {loggedInUserId ? (
        <div className="header__login-info">
          <div className="login__icon"></div>
          <Link to={ROUTES.PROFILE_SETTINGS}>
            {api.getUserName(loggedInUserId)}
          </Link>
        </div>
      ) : (
        <div className="header__login-info">
          <Link to="/login">Sign in</Link>
        </div>
      )}
    </header>
  );
}
