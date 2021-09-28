import * as React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import './index.scss';

type HeaderProps = {
  loggedInUserName: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  const { loggedInUserName } = props;

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="list__item">
            <Link to="/cookbooks">Cookbooks</Link>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <div className="header__search__icon" />
        <input type="text" className="header__search__input" />
      </div>
      {loggedInUserName ? (
        <button className="header__btn">
          <Link to={ROUTES.PROFILE_COOKBOOKS}>Create CookBook</Link>
        </button>
      ) : (
        <button className="header__btn">
          <Link to={ROUTES.LOG_IN}>Create CookBook</Link>
        </button>
      )}
      {loggedInUserName ? (
        <div className="header__login">
          <div className="header__login__icon"></div>
          <Link to={ROUTES.PROFILE_SETTINGS}>{loggedInUserName}</Link>
        </div>
      ) : (
        <div className="header__login">
          <Link to="/login">Sign in</Link>
        </div>
      )}
    </header>
  );
}
