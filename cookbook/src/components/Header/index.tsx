import * as React from 'react';

import {
  Link,
} from 'react-router-dom';

import './index.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header">

      <Link to="/"><div className="header__logo_small" /></Link>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="list__item"><Link to="/recipes">Recipes</Link></li>
          <li className="list__item"><Link to="/cookbooks">Cookbooks</Link></li>
        </ul>
      </nav>
      <div className="header__search">
        <div className="search__icon" />
        <input type="text" className="search__input" />
      </div>
      <button className="header__btn"><Link to="/create_cookbook">Create CookBook</Link></button>
      <div className="header__login-info"><Link to="/login">Sign in</Link></div>

    </header>
  );
}
