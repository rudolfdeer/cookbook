import * as React from 'react';

import {
  Link,
} from 'react-router-dom';

import './header.scss';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Link to="/"><div className="logo-small" /></Link>
      <nav>
        <ul className="header-nav-list">
          <li className="header-nav-list-item"><Link to="/recipes">Recipes</Link></li>
          <li className="header-nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
        </ul>
      </nav>
      <div className="header-search">
        <div className="header-search-icon" />
        <input type="text" className="header-search-input" />
      </div>
      <button className="header-btn-create btn light"><Link to="/create_cookbook">Create CookBook</Link></button>
      <div className="header-link-login"><Link to="/login">Sign in</Link></div>
    </header>
  );
}
