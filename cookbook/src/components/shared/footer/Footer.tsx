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
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li className="footer-nav-list-item"><Link to="/recepies">Recepies</Link></li>
              <li className="footer-nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
              <li className="footer-nav-list-item"><Link to="/cookbooks">About us</Link></li>
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