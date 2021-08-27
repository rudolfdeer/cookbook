import React from "react";
import {
  Link,
} from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Link to="/"><div className="logo-small" /></Link>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/recepies">Recepies</Link></li>
          <li className="nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
        </ul>
      </nav>
      <div className="header-search-container">
        <div className="search-icon-small" />
        <input type="text" className="header-input-search" />
      </div>
      <button className="header-btn-create btn light"><Link to="/create_cookbook">Create CookBook</Link></button>
      <a href="#!" className="header-link-login"><Link to="/login">Sign in</Link></a>
    </header>
  );
}