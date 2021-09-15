import * as React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import './index.scss';

type HeaderProps = {
  username?: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  const { username } = props;
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
      <button className="header__btn">
        <Link to="/create_cookbook">Create CookBook</Link>
      </button>
      {username ? (
        <div className="header__login-info">
          <div className="login__icon"></div>
          <Link to={ROUTES.PROFILE_SETTINGS}>{username}</Link>
        </div>
      ) : (
        <div className="header__login-info">
          <Link to="/login">Sign in</Link>
        </div>
      )}
    </header>
  );
}
