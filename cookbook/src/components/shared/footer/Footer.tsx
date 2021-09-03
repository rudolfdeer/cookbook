import * as React from 'react';
import {
  Link,
} from 'react-router-dom';

import './footer.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <Link to="/"><div className="logo-black" /></Link>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item"><Link to="/recipes">Recipes</Link></li>
              <li className="nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
              <li className="nav-list-item"><Link to="/">About us</Link></li>
            </ul>
          </nav>
          <div className="email">
            <a href="mailto:tomalichko@gmail.com">tomalichko@gmail.com</a>
          </div>
          <div className="study-container">
            <div className="study">Study Project v2.2021</div>
            <div className="itechart">
              <a href="https://www.itechart.by/">:iTechArt</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}